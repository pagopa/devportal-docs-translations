# Manage Service: Request Review

## Description

This API submits the service for review by PagoPA. To work correctly, it requires the **`service_id`** as a path parameter. You can request that the service be automatically activated upon approval by specifying it in the request `body`.

{% hint style="info" %}
You must use the new [`manage`](../../Features/Publishing-a-service/Manage-key/Manage-key.md) key for service management.&#x20;
{% endhint %}

{% hint style="warning" %}
To use this API, you need to request a [specific authorization.](../../Authorizations/Service-management.md)
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/review" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Useful resources

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsReviewService](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsReviewService)
