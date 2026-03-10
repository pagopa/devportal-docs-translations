# Manage Service: Update

## Description

This API updates the information related to a service. To function correctly, it requires entering the **`service_id`** as the path parameter.

{% hint style="info" %}
You must use the new key \[\`manage\`]\(../../function/publish-a-service/manage-key.md) for managing the services.
{% endhint %}

{% hint style="warning" %}
A \[specific authorization]\(../../enabling/manage-services.md) is needed to use this API.
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Useful resources

[https://developer.io.italia.it/openapi.html#operation/cmsUpdateService](https://developer.io.italia.it/openapi.html#operation/cmsUpdateService)
