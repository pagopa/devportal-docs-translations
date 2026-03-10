# Manage Service: Get

### Description

This API makes it possible to retrieve all the information related to a service. To function correctly, it requires entering the **`service_id`** as the path parameter.

{% hint style="info" %}
You must use the new key \[\`manage\`]\(../../function/publish-a-service/manage-key.md) for managing the services
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

### Examples

{% code overflow="wrap" %}
```shell
### REQUEST curl --location --request GET &apos;https://api.io.pagopa.it/api/v1/manage/services/SERVICE_ID&apos; \ --header &apos;Ocp-Apim-Subscription-Key: __YOUR_API_KEY__&apos;
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE { &quot;id&quot;: &quot;SERVICE_ID&quot;, &quot;status&quot;: { &quot;value&quot;: &quot;draft&quot;, &quot;reason&quot;: &quot;string&quot; }, &quot;last_update&quot;: &quot;2018-10-13T00:00:00.000Z&quot;, &quot;name&quot;: &quot;string&quot;, &quot;description&quot;: &quot;string&quot;, &quot;organization&quot;: { &quot;name&quot;: &quot;string&quot;, &quot;fiscal_code&quot;: &quot;12345678901&quot;, &quot;department_name&quot;: &quot;string&quot; }, &quot;require_secure_channel&quot;: false, &quot;authorized_recipients&quot;: [ &quot;SPNDNL80R13C555X&quot; ], &quot;authorized_cidrs&quot;: [ &quot;253.710.225.667/5&quot; ], &quot;max_allowed_payment_amount&quot;: 0, &quot;metadata&quot;: { &quot;web_url&quot;: &quot;string&quot;, &quot;app_ios&quot;: &quot;string&quot;, &quot;app_android&quot;: &quot;string&quot;, &quot;tos_url&quot;: &quot;string&quot;, &quot;privacy_url&quot;: &quot;string&quot;, &quot;address&quot;: &quot;string&quot;, &quot;phone&quot;: &quot;string&quot;, &quot;email&quot;: &quot;string&quot;, &quot;pec&quot;: &quot;string&quot;, &quot;cta&quot;: &quot;string&quot;, &quot;token_name&quot;: &quot;string&quot;, &quot;support_url&quot;: &quot;string&quot;, &quot;scope&quot;: &quot;LOCAL&quot;, &quot;topic&quot;: { &quot;id&quot;: 3, &quot;name&quot;: &quot;Social welfare&quot; } } }
```
{% endcode %}

### Useful resources <a href="#oglg98gr3m66" id="oglg98gr3m66"></a>

[https://developer.io.italia.it/openapi.html#operation/cmsGetService](https://developer.io.italia.it/openapi.html#operation/cmsGetService)
