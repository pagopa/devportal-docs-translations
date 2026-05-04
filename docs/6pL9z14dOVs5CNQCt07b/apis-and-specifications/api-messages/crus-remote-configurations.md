# CRUs, remote configurations

## Description

This API allows your Organization to register with IO as a remote content provider and manage the registration over time.

Registration has as its object the **configurations,** that is, the set of information useful to create communication between IO and your Organization's infrastructure, according to the protocol defined in the paragraph [remote-content messages](../../function/send-a-message/send-a-message-remote-content.md).

{% hint style="info" %}
For more information you can consult the \[dedicated page]\(../../initial-setup/remote-configuration.md) in the \*\*Initial setup section\*\*
{% endhint %}

{% hint style="info" %}
All the APIs described on this page refer to the activities of the Institution via the \[Reserved Area]\(https://app.gitbook.com/s/axttcUGV65V2IVRggmvR/) and are based on obtaining and using the \["manage” key]\(../../function/publish-a-service/manage-key.md) which you can \[retrieve]\(../../function/publish-a-service/manage-key.md#recupera-la-chiave-manage) in the IO Services management area.
{% endhint %}

The available operations include:

1. The **creation** of a new remote configuration
2. The **modification** of an existing remote configuration
3. The retrieval of the **defined remote configurations**
4. The retrieval of **a particular defined configuration**

{% hint style="info" %}
The deletion of a remote configuration is not currently supported
{% endhint %}

{% hint style="success" %}
Refer to the paragraph \[#examples]\(crus-remote-configurations.md#esempi "mention") for more information on field usage and the surveyed usage scenarios.
{% endhint %}

### “Create” API

With this API you can create a new configuration to obtain the `configuration_id` for use in all subsequent calls, including the [creation of remote-content messages](../../function/send-a-message/send-a-message-remote-content.md).

{% swagger src="https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml" path="/remote-contents/configurations" method="post" %}
[https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml](https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml)
{% endswagger %}

### “Update” API

This API allows you to update an existing configuration, identified by the `configuration_id`.

{% swagger src="https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml" path="/remote-contents/configurations/{configurationId}" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml](https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml)
{% endswagger %}

{% hint style="danger" %}
In order to ensure consistency and proper in-app operation of remote-content messages over time, the onus is on the sender \*\*to promptly adjust the configurations\*\* whenever necessary, using the management API described here.
{% endhint %}

## Defined configurations retrieval API

With this API you can retrieve the configurations defined as part of the subscription indicated in the headers. Each element returned in the array `rcConfigList` bears the configuration's own name, description, whether there are any preconditions, and technical data (base URL and authentication information).

{% swagger src="https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml" path="/remote-contents/configurations" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml](https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml)
{% endswagger %}

## API for retrieving a configuration

With this API, using the `configuration_id`, as a key, you can retrieve data specific to the corresponding configuration.

{% swagger src="https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml" path="/remote-contents/configurations/{configurationId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml](https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml)
{% endswagger %}

## Examples

### Creation of a remote configuration

In the example given, you are requested to create a new configuration related only to the production environment, for which the following are indicated:

* the base URL in the field **`base_url`** ("https://theremotecontentdomain.tld/basepath")
* the related API key with which it will authenticate on IO (`"ac66427c-584b-4c81-9443-e761a226d33d"`, in the field \*\*`key`\*\*, value that your systems will expect in the header with the name `"X-API-KEY"` indicated in the field **`header_key_name`**)

{% code title="CURL" overflow="wrap" %}
```
curl --location &apos;https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations&apos; \ --header &apos;Content-Type: application/json&apos; \ --header &apos;Accept: application/json&apos; \ --header &apos;Ocp-Apim-Subscription-Key: REDACTED&apos; \ --data &apos;{ &quot;name&quot;: &quot;IoRemoteConfig01&quot;, &quot;description&quot;: &quot;Remote content configuration for IO app - Server 1&quot;, &quot;disable_lollipop_for&quot;: [], &quot;has_precondition&quot;: &quot;NEVER&quot;, &quot;is_lollipop_enabled&quot;: false, &quot;prod_environment&quot;: { &quot;base_url&quot;: &quot;https://theremotecontentdomain.tld/basepath&quot;, &quot;details_authentication&quot;: { &quot;header_key_name&quot;: &quot;X-API-Key&quot;, &quot;key&quot;: &quot;ac66427c-584b-4c81-9443-e761a226d33d&quot;, &quot;type&quot;: &quot;API-KEY&quot; } } }&apos;
```
{% endcode %}

The field **`has_precondition`** regulates the interpretation, by IO, of the corresponding field [https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#has\_precondition](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#has\_precondition "mention") which will indicate in the creation phase of a remote-content message, according to the pattern:

<table data-header-hidden><thead><tr><th width="296"></th><th></th></tr></thead><tbody><tr><td>[not specified]</td><td>The preconditions when opening the message will be shown consistently with the setting of <code>has_precondition</code> <a href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">at the individual message level</a></td></tr><tr><td><code>has_precondition: NONE</code></td><td>If the field <code>has_precondition</code> is not specified <a href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">at the individual message level</a>, this will not have preconditions to its opening; otherwise these will be displayed consistently with that value</td></tr><tr><td><code>has_precondition: ONCE</code></td><td>If the field <code>has_precondition</code> is not specified <a href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">at the individual message level</a>, this will have preconditions to its opening, displayed only until the message itself is read by the recipient; otherwise, the preconditions will be displayed consistently with the value indicated for that specific message.</td></tr><tr><td><code>has_precondition: ALWAYS</code></td><td>If the field <code>has_precondition</code> is not specified <a href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">at the individual message level</a>, the preconditions to its opening will always be displayed at every opening, consistently with the value indicated for that specific message.</td></tr></tbody></table>

{% hint style="info" %}
Remember to always set the value of the field \*\*\`details\_authentication.type\`\*\* with the constant \`"API-KEY"\`
{% endhint %}

In response you will obtain, in the field `"configuration_id"`, the **identifier of the configuration** that you should use in all following calls, including those for the[creation of remote-content messages](../../function/send-a-message/send-a-message-remote-content.md) which need to be served by it.

{% code title="Esempio di risposta attesa" overflow="wrap" %}
```
{ &quot;configuration_id&quot;: &quot;DFE12CC534E649CD8D63BF1BAA547029&quot; }
```
{% endcode %}

### Creating separate remote configurations for tests and production

In this second example, you can see how to create a configuration related to **tests** and **production**.

The two blocks `"prod_environment"` and `"test_environment"` are used by IO to contact your infrastructure according to the following pattern:

<table data-header-hidden><thead><tr><th width="381"></th><th></th></tr></thead><tbody><tr><td>you only indicate <code>"prod_environment"</code></td><td>IO will contact you always using that configuration</td></tr><tr><td>you only indicate <code>"test_environment"</code></td><td>IO will contact you always using that configuration</td></tr><tr><td>you only indicate both <code>"prod_environment"</code> and <code>"test_environment"</code></td><td>IO will only contact you using the configuration indicated in <code>"test_environment"</code> if the message recipient’s fiscal code is included in the array <code>"test_users"</code>, otherwise it will do so using the configuration indicated in <code>"prod_environment"</code></td></tr></tbody></table>

{% hint style="warning" %}
When selecting the recipients to be indicated in \`"test\_users"\` remember that \*\*test messages cannot be sent to general users\*\*: ensure that you have the consent of those concerned and that they are aware of the test in progress.
{% endhint %}

{% code title="CURL" overflow="wrap" %}
```
curl --request POST --location &apos;https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations&apos; \ --header &apos;Content-Type: application/json&apos; \ --header &apos;Accept: application/json&apos; \ --header &apos;Ocp-Apim-Subscription-Key: REDACTED&apos; \ --data &apos;{ &quot;name&quot;: &quot;IoRemoteConfig01&quot;, &quot;description&quot;: &quot;Remote content configuration for IO app - Server 1&quot;, &quot;disable_lollipop_for&quot;: [], &quot;has_precondition&quot;: &quot;NEVER&quot;, &quot;is_lollipop_enabled&quot;: false, &quot;test_environment&quot;: { &quot;base_url&quot;: &quot;https://theremotecontentdomain_test.tld/basepath&quot;, &quot;details_authentication&quot;: { &quot;header_key_name&quot;: &quot;X-API-Key&quot;, &quot;key&quot;: &quot;78aec1e4-f625-4644-b9d9-0f3fdc8cbe60&quot;, &quot;type&quot;: &quot;API-KEY&quot; }, &quot;test_users&quot;: [ &quot;HGDZDH64P28G225I&quot;, &quot;ZLMYPD56M70L669Y&quot; ] }, &quot;prod_environment&quot;: { &quot;base_url&quot;: &quot;https://theremotecontentdomain.tld/basepath&quot;, &quot;details_authentication&quot;: { &quot;header_key_name&quot;: &quot;X-API-Key&quot;, &quot;key&quot;: &quot;ac66427c-584b-4c81-9443-e761a226d33d&quot;, &quot;type&quot;: &quot;API-KEY&quot; } } }&apos;
```
{% endcode %}

In response you will obtain, in the field `"configuration_id"`, the **identifier of the configuration** that you should use in all following calls, including those for the[creation of remote-content messages](../../function/send-a-message/send-a-message-remote-content.md) which need to be served by it.

{% code title="Esempio di risposta attesa" overflow="wrap" %}
```
{ &quot;configuration_id&quot;: &quot;DFE12CC534E649CD8D63BF1BAA547029&quot; }
```
{% endcode %}

### Retrieval of defined configurations

In this example we show you how to retrieve the complete list of configurations you have defined as part of your subscription:

{% code title="CURL" overflow="wrap" %}
```
curl --location &apos;https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations&apos; \ --header &apos;Accept: application/json&apos; \ --header &apos;Ocp-Apim-Subscription-Key: REDACTED&apos;
```
{% endcode %}

{% code title="Esempio di risposta attesa" overflow="wrap" %}
```
{ &quot;rcConfigList&quot;: [ { &quot;configuration_id&quot;: &quot;DFE12CC534E649CD8D63BF1BAA547029&quot;, &quot;name&quot;: &quot;IoRemoteConfig01&quot;, &quot;description&quot;: &quot;Remote content configuration for IO app - Server 1&quot;, &quot;disable_lollipop_for&quot;: [], &quot;has_precondition&quot;: &quot;NEVER&quot;, &quot;is_lollipop_enabled&quot;: false, &quot;test_environment&quot;: { &quot;base_url&quot;: &quot;https://theremotecontentdomain_test.tld/basepath&quot;, &quot;details_authentication&quot;: { &quot;header_key_name&quot;: &quot;X-API-Key&quot;, &quot;key&quot;: &quot;78aec1e4-f625-4644-b9d9-0f3fdc8cbe60&quot;, &quot;type&quot;: &quot;API-KEY&quot; }, &quot;test_users&quot;: [ &quot;HGDZDH64P28G225I&quot;, &quot;ZLMYPD56M70L669Y&quot; ] }, &quot;prod_environment&quot;: { &quot;base_url&quot;: &quot;https://theremotecontentdomain.tld/basepath&quot;, &quot;details_authentication&quot;: { &quot;header_key_name&quot;: &quot;X-API-Key&quot;, &quot;key&quot;: &quot;ac66427c-584b-4c81-9443-e761a226d33d&quot;, &quot;type&quot;: &quot;API-KEY&quot; } } } ] }
```
{% endcode %}

### Retrieving a specific configuration

In this example you can see how, being in possession of a `configuration_id`, you can retrieve all the information about a previously defined configuration:

{% code title="CURL" overflow="wrap" %}
```
curl --location &apos;https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations/DFE12CC534E649CD8D63BF1BAA547029&apos; \ --header &apos;Accept: application/json&apos; \ --header &apos;Ocp-Apim-Subscription-Key: REDACTED&apos;
```
{% endcode %}

{% code title="Esempio di risposta attesa" overflow="wrap" %}
```
{ &quot;configuration_id&quot;: &quot;DFE12CC534E649CD8D63BF1BAA547029&quot;, &quot;description&quot;: &quot;Remote content configuration for IO app - Server 1&quot;, &quot;disable_lollipop_for&quot;: [], &quot;has_precondition&quot;: &quot;NEVER&quot;, &quot;is_lollipop_enabled&quot;: false, &quot;name&quot;: &quot;IoRemoteConfig01&quot;, &quot;prod_environment&quot;: { &quot;base_url&quot;: &quot;https://theremotecontentdomain.tld/basepath&quot;, &quot;details_authentication&quot;: { &quot;header_key_name&quot;: &quot;X-API-Key&quot;, &quot;key&quot;: &quot;ac66427c-584b-4c81-9443-e761a226d33d&quot;, &quot;type&quot;: &quot;API-KEY&quot; } } }
```
{% endcode %}

### Modification of an existing configuration

In this example we show you how you can update the data of a previously defined configuration, specifically here you edit its description:

{% code title="CURL" overflow="wrap" %}
```
curl --location --request PUT &apos;https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations/DFE12CC534E649CD8D63BF1BAA547029&apos; \ --header &apos;Content-Type: application/json&apos; \ --header &apos;Accept: application/json&apos; \ --header &apos;Ocp-Apim-Subscription-Key: REDACTED&apos; \ --data &apos;{ &quot;configuration_id&quot;: &quot;DFE12CC534E649CD8D63BF1BAA547029&quot;, &quot;description&quot;: &quot;NEW*** remote content configuration for IO app - Server 1&quot;, &quot;disable_lollipop_for&quot;: [], &quot;has_precondition&quot;: &quot;NEVER&quot;, &quot;is_lollipop_enabled&quot;: false, &quot;name&quot;: &quot;IoRemoteConfig01&quot;, &quot;prod_environment&quot;: { &quot;base_url&quot;: &quot;https://theremotecontentdomain.tld/basepath&quot;, &quot;details_authentication&quot;: { &quot;header_key_name&quot;: &quot;X-API-Key&quot;, &quot;key&quot;: &quot;ac66427c-584b-4c81-9443-e761a226d33d&quot;, &quot;type&quot;: &quot;API-KEY&quot; } } }&apos;
```
{% endcode %}

{% code title="Risposta attesa" overflow="wrap" %}
```
204 No content.
```
{% endcode %}

{% hint style="danger" %}
In order to ensure consistency and proper in-app operation of remote-content messages over time, the sender is responsible for \*\*promptly adjusting the configurations\*\* whenever necessary, using the management API described here.
{% endhint %}

## Useful resources

[https://developer.io.italia.it/openapi.html#tag/remote-content](https://developer.io.italia.it/openapi.html#tag/remote-content)
