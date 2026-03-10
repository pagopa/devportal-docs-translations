# Get Message

## Description

This API checks the sending status of the message, retrieving the content. You must query the API with the fiscal code of the citizen receiving the message and the identifier of the message.

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/messages/{fiscal_code}/{id}" method="get" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## **`message`**

### **`id`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Identifier of the message obtained with the API <a data-mention href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal_code-as-path-parameter.md">https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal_code-as-path-parameter.md</a></td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>01EM6X4JB9VSZTQ8H16KMQFCEJ</code></td></tr></tbody></table>

\### \*\*\`fiscal\_code\`\*\*

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Fiscal code of the citizen to whom the message was sent</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>AAAAAA00A00A000A</code></td></tr></tbody></table>

\### \*\*\`created\_at\`\*\*

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Creation date of the message in ISO-8601 format with the UTC time zone</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>2021-02-18T08:17:01.775Z</code></td></tr></tbody></table>

\### \*\*\`sender\_service\_id\`\*\*

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Identifier of the service associated with message</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>01EYNQ0864HKYR1Q9PXPJ18W7G</code></td></tr></tbody></table>

\### \*\*\`content\`\*\*

The data related to the [https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#content](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#content "mention") is the same sent when the message was created.

## **`notification`**

### **`email`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Sending status of the email.<br><br>- <code>SENT</code>: email sent correctly;<br>- <code>THROTTLED</code>: temporary error due to overload, the message can be delivered by the TTL and for a maximum of 7 days;<br>- <code>EXPIRED</code>: the maximum TTL of the message is reached;<br>- <code>FAILED</code>: permanent error of the notification.</td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Example</strong></td><td><code>SENT</code></td></tr></tbody></table>

\### \*\*\`webhook\`\*\*

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Sending status of the push notification.<br><br>- <code>SENT</code>: notification sent;<br>- <code>THROTTLED</code>: temporary error due to overload, the message can be delivered by the TTL and for a maximum of 7 days;<br>- <code>EXPIRED</code>: the maximum TTL of the message is reached;<br>- <code>FAILED</code>: permanent error of the notification.</td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Example</strong></td><td><code>SENT</code></td></tr></tbody></table>

\## \*\*\`status\`\*\*

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Sending status of the message.<br><br>- <code>ACCEPTED</code>: the message was entered in the queue for saving;<br>- <code>THROTTLED</code>: temporary error due to overload, the message can be sent by the TTL and for a maximum of 7 days;<br>- <code>FAILED</code>: permanent error when saving the message;<br>- <code>PROCESSED</code>:the message was sent; <strong>when this status is detected you are certain that your message is available to the recipient when they open the IO app</strong><br>- <code>REJECTED</code>: the message was discarded because the recipient does not exist or blocked the communications of the service.</td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Example</strong></td><td><code>PROCESSED</code></td></tr></tbody></table>

\## \*\*\`read\_status\`\*\*

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td><p>Field present only for messages sent as <a href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#feature_level_type"><code>ADVANCED</code></a> (part of the Premium program). The field can have the following values:</p><ul><li><code>READ</code> --> the recipient read the message</li><li><code>UNREAD</code> --> the recipient has not yet read the message</li><li><code>UNAVAILABLE</code> --> the recipient expressed their preference to <em>not</em> share the reading status of their messages</li></ul></td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Example</strong></td><td><code>READ</code></td></tr></tbody></table>

\## \*\*\`payment\_status\`\*\*

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td><p>Field present only for messages that <a href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#payment_data">contain a payment notice</a> and are sent as <a href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#feature_level_type"><code>ADVANCED</code></a> (Premium program part). The field can have the following values:</p><ul><li><code>PAID</code> --> the notification associated with the message was paid</li><li><code>NOT_PAID</code> --> the notification associated with message was not yet paid</li></ul></td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Example</strong></td><td><code>NOT_PAID</code></td></tr></tbody></table>

\## Examples

### Standard message

{% code overflow="wrap" %}
```shell
### REQUEST curl --location --request GET &apos;https://api.io.pagopa.it/api/v1/messages/AAAAAA00A00A000A/01EM6X4JB9VSZTQ8H16KMQFCEJ&apos; \ --header &apos;Ocp-Apim-Subscription-Key: __YOUR_API_KEY__&apos;
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE { &quot;message&quot;: { &quot;content&quot;: { &quot;subject&quot;: &quot;My first IO app message with min 10 character&quot;, &quot;markdown&quot;: &quot;This is my first message to the IO app. Use body markdown format with min 80 character&quot; }, &quot;created_at&quot;: &quot;2021-02-18T08:17:01.775Z&quot;, &quot;fiscal_code&quot;: &quot;AAAAAA00A00A000A&quot;, &quot;id&quot;: &quot;01EM6X4JB9VSZTQ8H16KMQFCEJ&quot;, &quot;sender_service_id&quot;: &quot;01EYNQ0864HKYR1Q9PXPJ18W7G&quot; }, &quot;notification&quot;: { &quot;email&quot;: &quot;SENT&quot;, &quot;webhook&quot;: &quot;SENT&quot; }, &quot;status&quot;: &quot;PROCESSED&quot; }
```
{% endcode %}

### Premium message

{% code overflow="wrap" %}
```shell
### REQUEST curl --location --request GET &apos;https://api.io.pagopa.it/api/v1/messages/AAAAAA00A00A000A/01EM6X4JB9VSZTQ8H16KMQFCEJ&apos; \ --header &apos;Ocp-Apim-Subscription-Key: __YOUR_API_KEY__&apos;
```
{% endcode %}

{% code overflow="wrap" %}
```json
### RESPONSE { &quot;message&quot;: { &quot;content&quot;: { &quot;subject&quot;: &quot;My first IO app message with min 10 character&quot;, &quot;markdown&quot;: &quot;This is my first message to the IO app. Use body markdown format with min 80 character&quot; }, &quot;created_at&quot;: &quot;2021-02-18T08:17:01.775Z&quot;, &quot;fiscal_code&quot;: &quot;AAAAAA00A00A000A&quot;, &quot;id&quot;: &quot;01EM6X4JB9VSZTQ8H16KMQFCEJ&quot;, &quot;sender_service_id&quot;: &quot;01EYNQ0864HKYR1Q9PXPJ18W7G&quot; }, &quot;notification&quot;: { &quot;email&quot;: &quot;SENT&quot;, &quot;webhook&quot;: &quot;SENT&quot; }, &ldquo;read_status&rdquo;: &ldquo;READ&rdquo;, &ldquo;payment_status&rdquo;: &ldquo;NOT_PAID&rdquo;, &quot;status&quot;: &quot;PROCESSED&quot; }
```
{% endcode %}

## Useful resources

[https://developer.io.italia.it/openapi.html#operation/getMessage](https://developer.io.italia.it/openapi.html#operation/getMessage)
