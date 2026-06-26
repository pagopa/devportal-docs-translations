# Manage Service: Release

## Description

This API allows you to publish an approved service. To function correctly, it requires the **`service_id`** as a path parameter.

{% hint style="info" %}
You must use the new [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) key for service management.&#x20;
{% endhint %}

{% hint style="warning" %}
To use this API, you need to request [specific authorization.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/release" method="post" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Useful resources

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsReleaseService](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsReleaseService)
