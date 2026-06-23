# ⚠️ Get a User Profile

{% hint style="danger" %}
**Warning**: The following API will soon be deprecated, therefore its use is discouraged. Use [get-a-user-profile-using-post.md](get-a-user-profile-using-post.md "mention")
{% endhint %}

## Description

This API allows you to check that the citizen identified by their fiscal code is registered with IO, and that the service can send communications to the citizen.

The response is considered positive if both of these conditions are met:

1. the response status code is **`200`**
2. in the response body the field is **`sender_allowed=true`**

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/profiles/{fiscal_code}" method="get" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

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

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getProfile](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getProfile)
