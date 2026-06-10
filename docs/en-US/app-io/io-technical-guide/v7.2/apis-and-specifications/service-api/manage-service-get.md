# Manage Service: Get

### Descrizione

Questa API permette di recuperare tutte le informazioni relative a un servizio. Per funzionare correttamente richiede l'inserimento del **`service_id`** come path parameter.

{% hint style="info" %}
Devi usare la nuova chiave [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) per la gestione dei servizi
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

### Esempi

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
      "name": "Benessere sociale"
    }
  }
}
```

{% endcode %}

### Risorse utili <a href="#oglg98gr3m66" id="oglg98gr3m66"></a>

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsGetService](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsGetService)
