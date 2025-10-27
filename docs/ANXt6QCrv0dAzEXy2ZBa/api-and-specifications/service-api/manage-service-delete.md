# Manage Service: Delete

## Description

This API makes it possible to permanently delete a service. To function correctly, it requires entering the **`service_id`** as the path parameter.

{% hint style="info" %} You must use the new key [`manage`](../../function/publish-a-service/manage-key/manage-key.md) for managing the services. {% endhint %}

{% hint style="warning" %} A [specific authorization](../../enabling/manage-services.md) is needed to use this API. {% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}" method="delete" %} [https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml) {% endopenapi %}

## Useful resources

[https://developer.io.italia.it/openapi.html#operation/cmsDeleteService](https://developer.io.italia.it/openapi.html#operation/cmsDeleteService)