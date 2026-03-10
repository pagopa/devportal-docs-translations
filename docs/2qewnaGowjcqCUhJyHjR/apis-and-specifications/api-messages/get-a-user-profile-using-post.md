# Get a User Profile using POST

## Description

This API allows you check that the citizen identified by the fiscal code is registered with IO and that the service can send communications to the citizen.

The fiscal code of the citizen will be entered in the body of the post request.

The response is considered positive if both of these conditions are verified:

1. the status code of the response is **`200`**
2. the field **`sender_allowed=true`** in the response body

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/profiles" method="post" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Examples

{% code overflow="wrap" %}
```shell
### REQUEST curl --location --request POST &apos;https://api.io.pagopa.it/api/v1/profiles&apos; \ --header &apos;Content-Type: application/json&apos; \ --header &apos;Ocp-Apim-Subscription-Key: __YOUR_API_KEY__&apos; \ --data-raw &apos;{ &quot;fiscal_code&quot;: &quot;AAAAAA00A00A000A&quot; }&apos;
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE { &quot;sender_allowed&quot;: true }
```
{% endcode %}

## Useful resources

[https://developer.io.italia.it/openapi.html#operation/getProfileByPOST](https://developer.io.italia.it/openapi.html#operation/getProfileByPOST)
