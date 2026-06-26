# Manage Service: Get keys

## Description

This API allows you to retrieve the API keys for a service, which will allow you to use it, for example, to [send-a-message](../../funzionalita/inviare-un-messaggio/ "mention"). To work correctly, it requires entering the `service_id` as a path parameter.

{% hint style="info" %}
You must use the [chiave-manage.md](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md "mention") for service management
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/keys" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Useful resources <a href="#o8mmtd1j7fhx" id="o8mmtd1j7fhx"></a>

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsGetServiceKeys](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsGetServiceKeys)
