# Manage Service: Get Released

## Description

This API allows you to read the details of the service in its approved and activated version. You must provide the **`service_id`** as a path parameter.

{% hint style="info" %}
You must use the new [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) key for service management.&#x20;
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/release" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Useful resources

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsGetPublishedService](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsGetPublishedService)
