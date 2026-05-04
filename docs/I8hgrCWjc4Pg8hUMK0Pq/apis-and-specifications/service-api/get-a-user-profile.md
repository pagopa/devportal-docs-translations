# ⚠️ Get a User Profile

{% hint style="danger" %} **Attention**: the following API will be soon be deprecated, therefore it should not be used. Use [get-a-user-profile-using-post.md](get-a-user-profile-using-post.md "mention") {% endhint %}

## Description

This API allows you check that the citizen identified by the fiscal code is registered with IO and that the service can send communications to the citizen.

The response is considered positive if both of these conditions are verified:

1. the status code of the response is **`200`**
2. the field **`sender_allowed=true`** in the response body

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/profiles/{fiscal_code}" method="get" %} [https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml) {% endopenapi %}

## Examples

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request GET 'https://api.io.pagopa.it/api/v1/profiles/AAAAAA00A00A000A' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__'
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

[https://developer.io.italia.it/openapi.html#operation/getProfile](https://developer.io.italia.it/openapi.html#operation/getProfile)