# Manage Service: Get keys

## Description

This API makes it possible to retrieve the API keys for a service; which makes it possible to use it to [send-a-message ](../../function/send-a-message/ "mention")for example. To function correctly, it requires entering the `service_id` as the path parameter.

{% hint style="info" %} You must use the new key [manage-keys.md](../../function/publish-a-service/manage-key/manage-key.md "mention") for managing the services {% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/keys" method="get" %} [https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml) {% endopenapi %}

## Useful resources <a href="#o8mmtd1j7fhx" id="o8mmtd1j7fhx"></a>

[https://developer.io.italia.it/openapi.html#operation/cmsGetServiceKeys](https://developer.io.italia.it/openapi.html#operation/cmsGetServiceKeys)