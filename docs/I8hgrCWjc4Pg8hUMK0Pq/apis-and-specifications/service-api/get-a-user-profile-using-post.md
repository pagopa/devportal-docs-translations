# Get a User Profile using POST

## Description

This API allows you check that the citizen identified by the fiscal code is registered with IO and that the service can send communications to the citizen.

The fiscal code of the citizen will be entered in the body of the post request.

The response is considered positive if both of these conditions are verified:

1. the status code of the response is **`200`**
2. the field **`sender_allowed=true`** in the response body

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/profiles" method="post" %} [https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml) {% endopenapi %}

## Examples

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request POST 'https://api.io.pagopa.it/api/v1/profiles' \
--header 'Content-Type: application/json' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--data-raw '{
"fiscal_code": "AAAAAA00A00A000A"
}'
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE
{
"sender_allowed": true
}
```
{% endcode %}

## Useful resources

[https://developer.io.italia.it/openapi.html#operation/getProfileByPOST](https://developer.io.italia.it/openapi.html#operation/getProfileByPOST)