# Manage Service: Unpublish

## Description

This API allows you to hide an approved and activated service. To work correctly, it requires the **`service_id`** to be entered as a path parameter.

{% hint style="info" %}
You must use the new [`manage`](../../Features/Publishing-a-Service/Manage-Key/Manage-Key.md) key for service management.&#x20;
{% endhint %}

{% hint style="warning" %}
To use this API, you must request [specific authorization](../../Authorizations/Service-Management.md).
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/release" method="delete" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Useful Resources

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsUnpublishService](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsUnpublishService)
