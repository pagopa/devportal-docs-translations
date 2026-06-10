# Upload organization logo

## Descrizione

Questa API permette di caricare il logo di una organizzazione. Per funzionare correttamente richiede l'iinserimento d&#x69;**`organization_fiscal_code`** come path parameter. Dovrai inoltre inserire il logo, in formato base64, nel body del messaggio.

{% hint style="warning" %}
È obbligatorio utilizzare l’**api-key del servizio stesso**.
{% endhint %}

{% hint style="warning" %}
**Importante**

- Le dimensioni del logo dovranno essere necessariamente 300x300 pixel.&#x20;
- L'immagine deve essere in formato png con sfondo bianco o trasparente.
  {% endhint %}

Per controllare che il logo dell’ente sia caricato correttamente puoi interrogare la seguente URL:

```markup
https://assets.cdn.io.pagopa.it/logos/organizations/<ORGANIZATION_FISCAL_CODE>.png
```

di cui **`<ORGANIZATION_FISCAL_CODE>`** è l’[`organization_fiscal_code`](../../funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#organization_fiscal_code) **privato degli eventuali zeri** iniziali del codice fiscale dell’ente.

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/organizations/{organization_fiscal_code}/logo" method="put" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Esempi

{% code overflow="wrap" %}

```shell
### REQUEST˙
curl --location --request PUT 'https://api.io.pagopa.it/api/v1/organizations/ORGANIZATION_FISCAL_CODE/logo' \
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

## Risorse utili <a href="#ng5n9qrjnz38" id="ng5n9qrjnz38"></a>

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/uploadOrganizationLogo](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/uploadOrganizationLogo)
