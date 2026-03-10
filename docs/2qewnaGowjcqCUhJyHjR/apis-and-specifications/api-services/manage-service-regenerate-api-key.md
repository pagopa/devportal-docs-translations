# Manage Service: Regenerate api key

## Description

This API updates the API keys for a service. To function correctly, it requires entering the **`service_id`** and type of key to be regenerated **`keyType`** (`PRIMARY` or `SECONDARY`) as the path parameter.

{% hint style="info" %}
You must use the new key \[\`manage\`]\(../../function/publish-a-service/manage-key.md) for managing the services.
{% endhint %}

{% hint style="warning" %}
A \[specific authorization]\(../../enabling/manage-services.md) is needed to use this API.
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/keys/{keyType}" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Useful resources <a href="#o8mmtd1j7fhx" id="o8mmtd1j7fhx"></a>

[https://developer.io.italia.it/openapi.html#operation/cmsRegenerateServiceKey](https://developer.io.italia.it/openapi.html#operation/cmsRegenerateServiceKey)
