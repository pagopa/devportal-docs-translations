# Manage Service: Get

### Description

This API allows you to retrieve all information related to a service. To work correctly, it requires the **`service_id`** to be inserted as a path parameter.

{% hint style="info" %}
You must use the new [`manage`](../../Features/Publishing-a-service/Manage-key/Manage-key.md) key for service management
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

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
      "name": "Social well-being"
    }
  }
}
```

{% endcode %}

### Useful resources <a href="#oglg98gr3m66" id="oglg98gr3m66"></a>

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsGetService](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsGetService)
