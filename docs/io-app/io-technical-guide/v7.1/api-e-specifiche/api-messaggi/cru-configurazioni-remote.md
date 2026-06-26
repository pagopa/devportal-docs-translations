# CRU Remote Configurations

## Description

This API allows your Organization to register with IO as a remote content _provider_ and to manage the registration over time.

The registration concerns **configurations,** i.e., the set of information useful for establishing communication between IO and your Organization's infrastructure, according to the protocol defined in the [messages with remote content](../../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md) section.

{% hint style="info" %}
For more information, you can consult the [dedicated page](../../setup-iniziale/configurazione-remota.md) in the **Initial Setup** section
{% endhint %}

{% hint style="info" %}
All the APIs described on this page refer to the Entity's activities via the [Private Area](https://app.gitbook.com/s/axttcUGV65V2IVRggmvR/) and are based on obtaining and using the ["manage" key](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) which you can [retrieve](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md#recupera-la-chiave-manage) in the IO Services management area.
{% endhint %}

The available operations include:

1. The **creation** of a new remote configuration
2. **Updating** an existing remote configuration
3. Retrieving the **defined remote configurations**
4. Retrieving **a specific** defined **configuration**

{% hint style="info" %}
Deleting a remote configuration is not currently supported
{% endhint %}

{% hint style="success" %}
Refer to the [#examples](cru-configurazioni-remote.md#esempi "mention") section for more information on field usage and documented use cases.
{% endhint %}

### "Create" API

With this API, you can create a new configuration to obtain the `configuration_id` to be used in all subsequent calls, including for [creating messages with remote content](../../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md).

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml" path="/remote-contents/configurations" method="post" %}
[https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml](https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml)
{% endopenapi %}

### "Update" API

This API allows you to update an existing configuration, identified by the `configuration_id`.

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml" path="/remote-contents/configurations/{configurationId}" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml](https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml)
{% endopenapi %}

{% hint style="danger" %}
In order to ensure the long-term consistency and correct in-app functioning of messages with remote content, it is the sender's responsibility to **promptly adjust the configurations** whenever necessary, using the management API described here.
{% endhint %}

## API for retrieving defined configurations

With this API, you can retrieve the defined configurations within the scope of the subscription indicated in the headers. Each element returned in the `rcConfigList` array reports the name, description, the presence of preconditions, and the technical data specific to the configuration (base URL and authentication information).

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml" path="/remote-contents/configurations" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml](https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml)
{% endopenapi %}

## API for retrieving a configuration

With this API, using the `configuration_id` as the key, you can retrieve the specific data of the corresponding configuration.

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml" path="/remote-contents/configurations/{configurationId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml](https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml)
{% endopenapi %}

## Examples

### Creating a remote configuration

In the example shown, the creation of a new configuration is requested for the production environment only, for which the following are specified:

- the base URL in the **`base_url`** field ("https://theremotecontentdomain.tld/basepath")
- its API key for authentication with IO (`"ac66427c-584b-4c81-9443-e761a226d33d"`, in the **`key`** field, which is the value your systems will expect in the header named `"X-API-KEY"` as specified in the **`header_key_name`** field)

{% code title="CURL" overflow="wrap" %}

```
curl --location 'https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Ocp-Apim-Subscription-Key: REDACTED' \
--data '{
  "name": "IoRemoteConfig01",
  "description": "Remote content configuration for IO app - Server 1",
  "disable_lollipop_for": [],
  "has_precondition": "NEVER",
  "is_lollipop_enabled": false,
  "prod_environment": {
    "base_url": "https://theremotecontentdomain.tld/basepath",
    "details_authentication": {
      "header_key_name": "X-API-Key",
      "key": "ac66427c-584b-4c81-9443-e761a226d33d",
      "type": "API-KEY"
    }
  }
}'
```

{% endcode %}

The **`has_precondition`** field governs IO's interpretation of the corresponding [#has_precondition](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition "mention") field that you will specify when creating a remote content message, according to the following schema:

<table data-header-hidden><thead><tr><th width="296"></th><th></th></tr></thead><tbody><tr><td>[not specified]</td><td>The preconditions for opening the message will be shown consistently with the <code>has_precondition</code> setting <a href="submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">at the single message level</a></td></tr><tr><td><code>has_precondition: NONE</code></td><td>If the <code>has_precondition</code> field is not specified <a href="submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">at the single message level</a>, it will have no preconditions for opening; otherwise, they will be shown consistently with that value</td></tr><tr><td><code>has_precondition: ONCE</code></td><td>If the <code>has_precondition</code> field is not specified <a href="submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">at the single message level</a>, it will have preconditions for opening that are shown only until the message has been read by the recipient; otherwise, the preconditions will be shown consistently with the value indicated for that specific message</td></tr><tr><td><code>has_precondition: ALWAYS</code></td><td>If the <code>has_precondition</code> field is not specified <a href="submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">at the single message level</a>, the preconditions for opening will always be shown, on every opening; otherwise, they will be shown consistently with the value indicated for that specific message</td></tr></tbody></table>

{% hint style="info" %}
Remember to always set the value of the **`details_authentication.type`** field to the constant `"API-KEY"`
{% endhint %}

In response, you will get the **configuration identifier** in the `"configuration_id"` field, which you must use in all subsequent calls, including those for [creating remote content messages](../../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md) that are to be served by it.

{% code title="Example of expected response" overflow="wrap" %}

```
{
    "configuration_id": "DFE12CC534E649CD8D63BF1BAA547029"
}
```

{% endcode %}

### Creating separate remote configurations for test and production

In this second example, you can see how to create a configuration for both **test** and **production** environments.

The two blocks `"prod_environment"` and `"test_environment"` are used by IO to contact your infrastructure according to the following schema:

<table data-header-hidden><thead><tr><th width="381"></th><th></th></tr></thead><tbody><tr><td>you only specify <code>"prod_environment"</code></td><td>IO will always contact you using that configuration</td></tr><tr><td>you only specify <code>"test_environment"</code></td><td>IO will always contact you using that configuration</td></tr><tr><td>you specify both <code>"prod_environment"</code> and <code>"test_environment"</code></td><td>IO will contact you using the configuration specified in <code>"test_environment"</code> only if the message recipient's fiscal code is included in the <code>"test_users"</code> array; otherwise, it will use the configuration specified in <code>"prod_environment"</code></td></tr></tbody></table>

{% hint style="warning" %}
When selecting the recipients to include in `"test_users"`, remember that **sending test messages to the general public is not permitted**: make sure you have the consent of the individuals concerned and that they are aware of the ongoing test.
{% endhint %}

{% code title="CURL" overflow="wrap" %}

```
curl --request POST --location 'https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Ocp-Apim-Subscription-Key: REDACTED' \
--data '{
  "name": "IoRemoteConfig01",
  "description": "Remote content configuration for IO app - Server 1",
  "disable_lollipop_for": [],
  "has_precondition": "NEVER",
  "is_lollipop_enabled": false,
  "test_environment": {
    "base_url": "https://theremotecontentdomain_test.tld/basepath",
    "details_authentication": {
      "header_key_name": "X-API-Key",
      "key": "78aec1e4-f625-4644-b9d9-0f3fdc8cbe60",
      "type": "API-KEY"
    },
    "test_users": [
      "HGDZDH64P28G225I",
      "ZLMYPD56M70L669Y"
    ]
  },
  "prod_environment": {
    "base_url": "https://theremotecontentdomain.tld/basepath",
    "details_authentication": {
      "header_key_name": "X-API-Key",
      "key": "ac66427c-584b-4c81-9443-e761a226d33d",
      "type": "API-KEY"
    }
  }
}'
```

{% endcode %}

In response, you will get the **configuration identifier** in the `"configuration_id"` field, which you must use in all subsequent calls, including those for [creating remote content messages](../../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md) that are to be served by it.

{% code title="Example of expected response" overflow="wrap" %}

```
{
    "configuration_id": "DFE12CC534E649CD8D63BF1BAA547029"
}
```

{% endcode %}

### Retrieving the defined configurations

In this example, we show you how to retrieve the complete list of configurations that you have defined within your subscription:

{% code title="CURL" overflow="wrap" %}

```
curl --location 'https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations' \
--header 'Accept: application/json' \
--header 'Ocp-Apim-Subscription-Key: REDACTED'
```

{% endcode %}

{% code title="Example of expected response" overflow="wrap" %}

```
{
  "rcConfigList": [
    {
      "configuration_id": "DFE12CC534E649CD8D63BF1BAA547029",
      "name": "IoRemoteConfig01",
      "description": "Remote content configuration for IO app - Server 1",
      "disable_lollipop_for": [],
      "has_precondition": "NEVER",
      "is_lollipop_enabled": false,
      "test_environment": {
        "base_url": "https://theremotecontentdomain_test.tld/basepath",
        "details_authentication": {
          "header_key_name": "X-API-Key",
          "key": "78aec1e4-f625-4644-b9d9-0f3fdc8cbe60",
          "type": "API-KEY"
        },
        "test_users": [
          "HGDZDH64P28G225I",
          "ZLMYPD56M70L669Y"
        ]
      },
      "prod_environment": {
        "base_url": "https://theremotecontentdomain.tld/basepath",
        "details_authentication": {
          "header_key_name": "X-API-Key",
          "key": "ac66427c-584b-4c81-9443-e761a226d33d",
          "type": "API-KEY"
        }
      }
    }
  ]
}
```

{% endcode %}

### Retrieving a specific configuration

In this example, you can see how, by having a `configuration_id`, you can retrieve all the information related to a previously defined configuration:

{% code title="CURL" overflow="wrap" %}

```
curl --location 'https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations/DFE12CC534E649CD8D63BF1BAA547029' \
--header 'Accept: application/json' \
--header 'Ocp-Apim-Subscription-Key: REDACTED'
```

{% endcode %}

{% code title="Example of expected response" overflow="wrap" %}

```
{
    "configuration_id": "DFE12CC534E649CD8D63BF1BAA547029",
    "description": "Remote content configuration for IO app - Server 1",
    "disable_lollipop_for": [],
    "has_precondition": "NEVER",
    "is_lollipop_enabled": false,
    "name": "IoRemoteConfig01",
    "prod_environment": {
        "base_url": "https://theremotecontentdomain.tld/basepath",
        "details_authentication": {
          "header_key_name": "X-API-Key",
          "key": "ac66427c-584b-4c81-9443-e761a226d33d",
          "type": "API-KEY"
        }
    }
}
```

{% endcode %}

### Modifying an existing configuration

In this example, we show you how you can update the data of a previously defined configuration; specifically, here its description is modified:

{% code title="CURL" overflow="wrap" %}

```
curl --location --request PUT 'https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations/DFE12CC534E649CD8D63BF1BAA547029' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Ocp-Apim-Subscription-Key: REDACTED' \
--data '{
    "configuration_id": "DFE12CC534E649CD8D63BF1BAA547029",
    "description": "***NEW*** remote content configuration for IO app - Server 1",
    "disable_lollipop_for": [],
    "has_precondition": "NEVER",
    "is_lollipop_enabled": false,
    "name": "IoRemoteConfig01",
    "prod_environment": {
        "base_url": "https://theremotecontentdomain.tld/basepath",
        "details_authentication": {
          "header_key_name": "X-API-Key",
          "key": "ac66427c-584b-4c81-9443-e761a226d33d",
          "type": "API-KEY"
        }
    }
}'
```

{% endcode %}

{% code title="Expected response" overflow="wrap" %}

```
204 No content.
```

{% endcode %}

{% hint style="danger" %}
To ensure the consistency and proper in-app functioning of remote content messages over time, it is the sender's responsibility to **promptly adjust the configurations** whenever necessary, using the management API described here.
{% endhint %}

## Useful resources

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/createRCConfiguration](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/createRCConfiguration)\
[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/listRCConfiguration](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/listRCConfiguration)\
[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getRCConfiguration](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getRCConfiguration)\
[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/updateRCConfiguration](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/updateRCConfiguration)
