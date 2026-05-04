# Manage Service: Request Review

## Description

This API submits the service to review by PagoPA. To function correctly, it requires entering the **`service_id`** as the path parameter. You can request to have the service automatically activated if approved, specifying it in the `body` of the request.

{% hint style="info" %} You must use the new key [`manage`](../../function/publish-a-service/manage-key/manage-key.md) for managing the services. {% endhint %}

{% hint style="warning" %} A [specific authorization](../../enabling/manage-services.md) is needed to use this API. {% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/review" method="put" %} [https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml) {% endopenapi %}

## Useful resources

[https://developer.io.italia.it/openapi.html#operation/cmsReviewService](https://developer.io.italia.it/openapi.html#operation/cmsReviewService)