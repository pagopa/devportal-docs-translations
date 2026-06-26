# Manage Service: Update

## Description

This API updates information related to a service. To work correctly, it requires the **`service_id`** to be entered as a path parameter.

{% hint style="info" %}
You must use the new [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) key for service management.&#x20;
{% endhint %}

{% hint style="warning" %}
To use this API, you must request [specific authorization.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Useful resources

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsUpdateService](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsUpdateService)
