# Manage Service: Upload service logo

## Description

This API allows you to upload a service's logo. You must enter the **`service_id`** as a path parameter and insert the logo, in base64 format, in the message `body`

{% hint style="info" %}
You must use the new [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) key for service management.&#x20;
{% endhint %}

{% hint style="warning" %}
To use this API, you must request [specific authorization](../../abilitazioni/gestione-dei-servizi.md).
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/logo" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

{% hint style="warning" %}
**Important**

- The logo dimensions must be 300x300 pixels.&#x20;
- The image must be in png format with a white or transparent background.
  {% endhint %}

{% hint style="info" %}
If you upload the logo immediately after creating the service, the API might return a `401` error. If this happens, wait a few seconds and upload the logo again.
{% endhint %}

To verify that the service logo has been uploaded correctly, you can query the following URL:

```markup
https://assets.cdn.io.pagopa.it/logos/services/<SERVICE_ID>.png
```

where **`<SERVICE_ID>`** is the [service id](../../funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#service_id) in lowercase.

## Examples

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

## Useful resources

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsUpdateServiceLogo](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsUpdateServiceLogo)
