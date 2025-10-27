# Manage Service: Get

### Description

This API makes it possible to retrieve all the information related to a service. To function correctly, it requires entering the **`service_id`** as the path parameter.

{% hint style="info" %} You must use the new key [`manage`](../../function/publish-a-service/manage-key/manage-key.md) for managing the services {% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}" method="get" %} [https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml) {% endopenapi %}

### Examples

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request GET 'https://api.io.pagopa.it/api/v1/manage/services/SERVICE_ID' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__'
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE
{
  "id": "SERVICE_ID",
  "status": {
    "value": "draft",
    "reason": "string"
  },
  "last_update": "2018-10-13T00:00:00.000Z",
  "name": "string",
  "description": "string",
  "organization": {
    "name": "string",
    "fiscal_code": "12345678901",
    "department_name": "string"
  },
  "require_secure_channel": false,
  "authorized_recipients": [
    "SPNDNL80R13C555X"
  ],
  "authorized_cidrs": [
    "253.710.225.667/5"
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

### Useful resources <a href="#oglg98gr3m66" id="oglg98gr3m66"></a>

[https://developer.io.italia.it/openapi.html#operation/cmsGetService](https://developer.io.italia.it/openapi.html#operation/cmsGetService)