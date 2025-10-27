# ⚠️ Submit a Message passing the user fiscal_code as path parameter

{% hint style="danger" %} **Attention**: the following API will be soon be deprecated, therefore it should not be used. {% endhint %}

## Description

API equivalent to [submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md](submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md "mention")

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/messages/{fiscal_code}" method="post" %} [https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml) {% endopenapi %}

## Examples

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request POST 'https://api.io.pagopa.it/api/v1/messages/AAAAAA00A00A000A' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--header 'Content-Type: application/json' \
--data-raw '{
"content": {
"subject": "My first IO app message with min 10 character",
"markdown": "This is my first message to the IO app. Use body markdown format with min 80 character"
}
}'
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE
{
"id": "01EM6X4JB9VSZTQ8H16KMQFCEJ"
}
```
{% endcode %}

## Useful resources

[https://developer.io.italia.it/openapi.html#operation/submitMessageforUser](https://developer.io.italia.it/openapi.html#operation/submitMessageforUser)