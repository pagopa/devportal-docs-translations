# Get Message

## Description

This API checks the message's sending status by retrieving its content. You will need to query the API with the fiscal code of the citizen to whom the message is addressed and the message identifier.

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/messages/{fiscal_code}/{id}" method="get" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## **`message`**

### **`id`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>The message identifier obtained using the <a data-mention href="submit-a-message-passing-the-user-fiscal_code-as-path-parameter.md">submit-a-message-passing-the-user-fiscal_code-as-path-parameter.md</a> API </td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>01EM6X4JB9VSZTQ8H16KMQFCEJ</code></td></tr></tbody></table>

### **`fiscal_code`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>The fiscal code of the citizen to whom the message was sent</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>AAAAAA00A00A000A</code></td></tr></tbody></table>

### **`created_at`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>The message creation date in ISO-8601 format and UTC timezone</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>2021-02-18T08:17:01.775Z</code></td></tr></tbody></table>

### **`sender_service_id`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>The identifier of the service associated with the message</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>01EYNQ0864HKYR1Q9PXPJ18W7G</code></td></tr></tbody></table>

### **`content`**

The data related to [#content](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#content "mention") are the same as those sent when the message was created.

## **`notification`**

### **`email`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>The email's sending status.<br><br>- <code>SENT</code>: email sent successfully;<br>- <code>THROTTLED</code>: temporary error due to overload, the message may be delivered within the TTL and for a maximum of 7 days;<br>- <code>EXPIRED</code>: maximum message TTL reached;<br>- <code>FAILED</code>: permanent notification error.</td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Example</strong></td><td><code>SENT</code></td></tr></tbody></table>

### **`webhook`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>The push notification's sending status.<br><br>- <code>SENT</code>: notification sent;<br>- <code>THROTTLED</code>: temporary error due to overload, the message may be delivered within the TTL and for a maximum of 7 days;<br>- <code>EXPIRED</code>: maximum message TTL reached;<br>- <code>FAILED</code>: permanent notification error.</td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Example</strong></td><td><code>SENT</code></td></tr></tbody></table>

## **`status`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>The message's sending status.<br><br>- <code>ACCEPTED</code>: the message has been queued for saving;<br>- <code>THROTTLED</code>: temporary error due to overload, the message may be delivered within the TTL and for a maximum of 7 days;<br>- <code>FAILED</code>: permanent error saving the message;<br>- <code>PROCESSED</code>: the message has been sent; <strong>when you see this status, you can be sure that your message is available to the recipient when they open the IO app</strong><br>- <code>REJECTED</code>: the message was discarded because the recipient does not exist or has blocked communications from the service.</td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Example</strong></td><td><code>PROCESSED</code></td></tr></tbody></table>

## **`read_status`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td><p>This field is only present for messages sent as <a href="submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#feature_level_type"><code>ADVANCED</code></a> (part of the Premium program). The field can have the following values:</p><ul><li><code>READ</code> --> the recipient has read the message</li><li><code>UNREAD</code> --> the recipient has not yet read the message</li><li><code>UNAVAILABLE</code> --> the recipient has chosen <em>not</em> to share the read status of their messages</li></ul></td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Example</strong></td><td><code>READ</code></td></tr></tbody></table>

## **`payment_status`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td><p>This field is only present for messages that <a href="submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#payment_data">contain a payment notice</a> and are sent as <a href="submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#feature_level_type"><code>ADVANCED</code></a> (part of the Premium program). The field can have the following values:</p><ul><li><code>PAID</code> --> the notice associated with the message has been paid</li><li><code>NOT_PAID</code> --> the notice associated with the message has not yet been paid</li></ul></td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Example</strong></td><td><code>NOT_PAID</code></td></tr></tbody></table>

## Examples

### Standard message

{% code overflow="wrap" %}

```shell
### REQUEST
curl --location --request GET 'https://api.io.pagopa.it/api/v1/messages/AAAAAA00A00A000A/01EM6X4JB9VSZTQ8H16KMQFCEJ' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__'
```

{% endcode %}

{% code overflow="wrap" %}

```shell
### RESPONSE
{
"message": {
  "content": {
    "subject": "My first IO app message with min 10 character",
    "markdown": "This is my first message to the IO app. Use body markdown format with min 80 character"
    },
    "created_at": "2021-02-18T08:17:01.775Z",
    "fiscal_code": "AAAAAA00A00A000A",
    "id": "01EM6X4JB9VSZTQ8H16KMQFCEJ",
    "sender_service_id": "01EYNQ0864HKYR1Q9PXPJ18W7G"
  },
  "notification": {
    "email": "SENT",
    "webhook": "SENT"
  },
  "status": "PROCESSED"
}
```

{% endcode %}

### Premium message

{% code overflow="wrap" %}

```shell
###  REQUEST
curl --location --request GET 'https://api.io.pagopa.it/api/v1/messages/AAAAAA00A00A000A/01EM6X4JB9VSZTQ8H16KMQFCEJ' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__'
```

{% endcode %}

{% code overflow="wrap" %}

```json
### RESPONSE
{
   "message": {
       "content": {
           "subject": "My first IO app message with min 10 character",
           "markdown": "This is my first message to the IO app. Use body markdown format with min 80 character"
       },
       "created_at": "2021-02-18T08:17:01.775Z",
       "fiscal_code": "AAAAAA00A00A000A",
       "id": "01EM6X4JB9VSZTQ8H16KMQFCEJ",
       "sender_service_id": "01EYNQ0864HKYR1Q9PXPJ18W7G"
   },
   "notification": {
       "email": "SENT",
       "webhook": "SENT"
   },
   “read_status”: “READ”,
   “payment_status”: “NOT_PAID”,
   "status": "PROCESSED"
}

```

{% endcode %}

## Useful resources

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getMessage](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getMessage)
