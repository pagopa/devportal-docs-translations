# Manage Service: Create

## Descrizione

Questa API permette di creare un servizio.&#x20;

{% hint style="info" %}
Devi usare la nuova chiave [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) per la gestione dei servizi.&#x20;
{% endhint %}

{% hint style="warning" %}
Per utilizzare questa API è necessario richiedere un'[abilitazione specifica.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services" method="post" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Esempi

Ecco un esempio con le informazioni minime per la creazione di un servizio di test:

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

## Risorse utili

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsCreateService](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsCreateService)
