# ⚠️ Submit a Message passing the user fiscal\_code as path parameter

{% hint style="danger" %}
\*\*Attention\*\*: the following API will be soon be deprecated, therefore it should not be used.
{% endhint %}

## Description

API equivalent to [https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md "mention")

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/messages/{fiscal_code}" method="post" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Examples

{% code overflow="wrap" %}
```shell
### REQUEST curl --location --request POST &apos;https://api.io.pagopa.it/api/v1/messages/AAAAAA00A00A000A&apos; \ --header &apos;Ocp-Apim-Subscription-Key: __YOUR_API_KEY__&apos; \ --header &apos;Content-Type: application/json&apos; \ --data-raw &apos;{ &quot;content&quot;: { &quot;subject&quot;: &quot;My first IO app message with min 10 character&quot;, &quot;markdown&quot;: &quot;This is my first message to the IO app. Use body markdown format with min 80 characters&quot; } }&apos;
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE { &quot;id&quot;: &quot;01EM6X4JB9VSZTQ8H16KMQFCEJ&quot; }
```
{% endcode %}

## Useful resources

[https://developer.io.italia.it/openapi.html#operation/submitMessageforUser](https://developer.io.italia.it/openapi.html#operation/submitMessageforUser)
