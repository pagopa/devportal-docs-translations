# Get a User Profile using POST

## Description

This API allows you to check that the citizen identified by their Fiscal Code is registered on IO, and that the service is allowed to send messages to the citizen.

The citizen's Fiscal Code must be included in the body of the POST request.

The response is considered successful if both of these conditions are met:

1. the response status code is **`200`**
2. in the response body the field is **`sender_allowed=true`**

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/profiles" method="post" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

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

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getProfileByPOST](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getProfileByPOST)
