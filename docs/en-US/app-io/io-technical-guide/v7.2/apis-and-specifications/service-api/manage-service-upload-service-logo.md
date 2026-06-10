# Manage Service: Upload service logo

## Descrizione

Questa API permette di caricare il logo di un servizio. È necessario inserire il **`service_id`** come path parameter e inserire  il logo, in formato base64, nel `body` del messaggio

{% hint style="info" %}
Devi usare la nuova chiave [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) per la gestione dei servizi.&#x20;
{% endhint %}

{% hint style="warning" %}
Per utilizzare questa API è necessario richiedere un'[abilitazione specifica.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/logo" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

{% hint style="warning" %}
**Importante**

- Le dimensioni del logo dovranno essere necessariamente 300x300 pixel.&#x20;
- L'immagine deve essere in formato png con sfondo bianco o trasparente.
  {% endhint %}

{% hint style="info" %}
Eseguendo un caricamento del logo immediatamente dopo la creazione del servizio, è possibile che l’API restituisca un errore `401`. Se accade, attendi qualche secondo e carica di nuovo il logo.
{% endhint %}

Per verificare che il logo del servizio sia caricato correttamente, puoi interrogare la seguente URL:

```markup
https://assets.cdn.io.pagopa.it/logos/services/<SERVICE_ID>.png
```

dove **`<SERVICE_ID>`** è l'[id servizio](../../funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#service_id) in lowercase.

## Esempi

{% code overflow="wrap" %}

```shell
### REQUEST
curl --location --request PUT 'https://api.io.pagopa.it/api/v1/services/manage/SERVICE_ID/logo' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--header 'Content-Type: application/json' \
--data-raw '{
"logo": "<<Base64ImageString>>"
}'
```

{% endcode %}

{% code overflow="wrap" %}

```shell
### RESPONSE
{}
```

{% endcode %}

## Risorse utili

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsUpdateServiceLogo](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsUpdateServiceLogo)
