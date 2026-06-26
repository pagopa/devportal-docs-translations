# Manage Service: Create

## Description

This API allows you to create a service.&#x20;

{% hint style="info" %}
You must use the new [`manage`](../../Features/Publishing-a-service/Manage-key/Manage-key.md) key for service management.&#x20;
{% endhint %}

{% hint style="warning" %}
To use this API, you must request a [specific authorization.](../../Authorizations/Service-management.md)
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services" method="post" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Examples

Here is an example with the minimum information required to create a test service:

{% code overflow="wrap" %}

```shell
### REQUEST
curl --location --request POST 'https://api.io.pagopa.it/api/v1/manage/services' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "string",
  "description": "string",
  "organization": {
    "name": "string",
    "fiscal_code": "12345678901",
    "department_name": "string"
  },
  "require_secure_channel": false,
  "authorized_cidrs": [
    "85.338.5.14/32"
  ],
  "metadata": {
    "web_url": "string",
    "app_ios": "string",
    "app_android": "string",
    "tos_url": "string",
    "privacy_url": "string",
    "address": "string",
    "phone": "string",
    "email": "string",
    "pec": "string",
    "cta": "string",
    "token_name": "string",
    "support_url": "string",
    "scope": "LOCAL",
    "topic_id": 3
  }
}'
```

{% endcode %}

{% code overflow="wrap" %}

```shell
### RESPONSE
{
  "id": "string",
  "status": {
    "value": "draft",
    "reason": "string"
  },
  "version": 0,
  "last_update": "2018-10-13T00:00:00.000Z",
  "name": "string",
  "description": "string",
  "organization": {
    "name": "string",
    "fiscal_code": "12345678901",
    "department_name": "string"
  },
  "require_secure_channel": false,
  "authorized_recipients": [],
  "authorized_cidrs": [
    "85.338.5.14/32"
  ],
  "max_allowed_payment_amount": 0,
  "metadata": {
    "web_url": "string",
    "app_ios": "string",
    "app_android": "string",
    "tos_url": "string",
    "privacy_url": "string",
    "address": "string",
    "phone": "string",
    "email": "string",
    "pec": "string",
    "cta": "string",
    "token_name": "string",
    "support_url": "string",
    "scope": "LOCAL",
    "topic": {
      "id": 3,
      "name": "Social welfare"
    }
  }
}
```

{% endcode %}

## Useful resources

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsCreateService](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsCreateService)
