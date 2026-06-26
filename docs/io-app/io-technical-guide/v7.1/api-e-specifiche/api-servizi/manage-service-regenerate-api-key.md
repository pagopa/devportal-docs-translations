# Manage Service: Regenerate api key

## Description

This API updates the API keys for a service. To work correctly, it requires the **`service_id`** and the type of key to be regenerated (**`keyType`**: `PRIMARY` or `SECONDARY`) as a path parameter.

{% hint style="info" %}
You must use the new [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) key for service management.&#x20;
{% endhint %}

{% hint style="warning" %}
To use this API, you must request [specific authorization.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/keys/{keyType}" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Useful resources <a href="#o8mmtd1j7fhx" id="o8mmtd1j7fhx"></a>

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsRegenerateServiceKey](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsRegenerateServiceKey)
