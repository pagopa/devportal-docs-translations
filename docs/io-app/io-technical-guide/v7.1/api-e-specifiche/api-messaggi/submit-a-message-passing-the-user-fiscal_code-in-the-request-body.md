# Submit a Message passing the user fiscal_code in the request body

## Description

This API allows sending messages to a citizen identified by their Fiscal Code. Before sending a message, you must [verify](get-a-user-profile-using-post.md) that the citizen is registered with IO and that the service is authorized to send communications to that citizen.

{% hint style="info" %}
To use this API, you must add the `Ocp-Apim-Subscription-Key` header to the call, containing the [primary](../../funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#primary_key) or [secondary](../../funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#secondary_key) "use" key of the service chosen to send the message
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/messages" method="post" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## **`fiscal_code`**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="186"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Fiscal code of the message recipient</td></tr><tr><td><strong>Required</strong></td><td>Yes</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>AAAAAA00A00A000A</code></td></tr></tbody></table>

## **`time_to_live`**

{% hint style="danger" %} <mark style="color:red;">**This parameter is deprecated.**</mark>
{% endhint %}

<table data-header-hidden><thead><tr><th width="180"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Time in seconds specifying the message delivery retry time by IO; after this time, no push notification or forwarding email is generated</td></tr><tr><td><strong>Required</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>3600</code></td></tr><tr><td><strong>Type</strong></td><td>Integer</td></tr><tr><td><strong>Example</strong></td><td><code>3600</code></td></tr></tbody></table>

## **`feature_level_type`**

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Indicates whether the message is sent as part of a <strong>Premium</strong> subscription, or if it should be considered a standard message</td></tr><tr><td><strong>Required</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>STANDARD</code></td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Accepted Values</strong></td><td><ul><li><code>STANDARD</code> -> the message is to be considered a normal IO message</li><li><code>ADVANCED</code> -> advanced additional information is related to the message. You can only specify this value if you have a Premium subscription.</li></ul></td></tr><tr><td><strong>Example</strong></td><td><code>ADVANCED</code></td></tr></tbody></table>

## **`content`` `**<mark style="color:red;">**`*`**</mark>

### **`subject`` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="186"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Message title, which must be between 10 and 120 characters long</td></tr><tr><td><strong>Required</strong></td><td>Yes</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>Renew your identity card</code></td></tr></tbody></table>

{% hint style="info" %}
If you are sending a **message with remote content**, refer to [#important-information-about-the-message-subject](../../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#informazioni-importanti-circa-il-titolo-subject-del-messaggio "mention")
{% endhint %}

{% hint style="warning" %}
Remember that, pursuant to art. 7.3 of the [AgID Guidelines](https://www.agid.gov.it/it/linee-guida#index-8), the message title cannot contain **personal data**, and its minimization must be ensured within the [#markdown](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#markdown "mention")
{% endhint %}

### **`markdown`` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="187"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Message text in markdown format whose length must be between 80 and 10000 characters</td></tr><tr><td><strong>Required</strong></td><td>Yes</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>Dear Mario,\n\nwe are pleased to inform you that your **Identity Card** is available for collection at our offices.  \nYou can check the opening hours on the [Service Portal](https://www.miosito.it/).\n\n*The Staff*</code></td></tr></tbody></table>

{% hint style="info" %}
If you are sending a **message with remote content**, refer to [#important-information-about-the-markdown-body-of-the-message](../../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#informazioni-importanti-circa-il-corpo-markdown-del-messaggio "mention") for details on how to populate this field.
{% endhint %}

{% hint style="info" %}
When composing and transmitting the message text in markdown format, remember to set the charset to UTF-8 to ensure the correct display of accented characters.
{% endhint %}

{% hint style="info" %}
You can format text and activate special features in your messages using [Markdown syntax](../../risorse-utili/guida-al-markdown.md).
{% endhint %}

### **`require_secure_channels`**

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Indicates that the message contains sensitive and/or confidential information; if set to <code>true</code>, anonymized push notifications will be generated and email copies of the messages will not be forwarded</td></tr><tr><td><strong>Required</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td>If you do not include this field, it will fall back to the service configuration (refer to <a data-mention href="../../funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#require_secure_channels">#require_secure_channels</a>)</td></tr><tr><td><strong>Type</strong></td><td>Boolean</td></tr><tr><td><strong>Example</strong></td><td><code>true</code></td></tr></tbody></table>

### **`due_date`**

<table data-header-hidden><thead><tr><th width="189"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Allows you to associate a reminder with the message. The date format must be ISO-8601 with UTC timezone</td></tr><tr><td><strong>Required</strong></td><td>No</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>2018-10-13T00:00:00.000Z</code></td></tr></tbody></table>

{% hint style="warning" %}
**Pay attention to the timezone!** The date must be expressed in UTC timezone (Z). \
In Italy, the UTC+1 timezone is used during standard time, while the UTC+2 timezone is used during daylight saving time.

**Example:**

`2022-09-30T22:00:00Z` --> In Italy, this is midnight on October 1, 2022

`2022-11-30T23:00:00Z` --> In Italy, this is midnight on December 1, 2022
{% endhint %}

{% hint style="warning" %}
**Pay attention to the time!** If the due date does not specify a time, it usually refers to the end of the day. Enter the time correctly to avoid displaying an incorrect due date.

**Example:**

✅ January 12 (23:59:59) --> The user can pay by the end of January 12

❌ January 12 (00:00:01) --> The user can pay by the end of January 11
{% endhint %}

{% hint style="success" %}
The message due date is separate from that of any associated debt position and can be specified even in the absence of the latter
{% endhint %}

{% hint style="info" %}
If you have a Premium subscription, IO will generate **reminders** for you, either for [reading](https://docs.pagopa.it/kb-enti-messaggi/domande-frequenti/domande-e-risposte-sui-messaggi#come-funziona-il-reminder-per-i-messaggi-non-letti) or for [payment](https://docs.pagopa.it/kb-enti-messaggi/domande-frequenti/domande-e-risposte-sui-messaggi#come-funziona-il-reminder-per-i-messaggi-con-avvisi-non-pagati), near the specified due date: the reminders will be sent to the recipient's device as push notifications
{% endhint %}

### **`payment_data`**

{% hint style="info" %}
To send payment notices, you must request [specific authorization.](../../abilitazioni/test-invio-avvisi-pagopa.md)
{% endhint %}

#### **`amount`` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="202"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Amount in euro cents of the payment notice issued on the pagoPA platform</td></tr><tr><td><strong>Required</strong></td><td>Yes, for pagoPA payments</td></tr><tr><td><strong>Type</strong></td><td>Integer</td></tr><tr><td><strong>Example</strong></td><td><code>100</code></td></tr></tbody></table>

#### **`notice_number`` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="203"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Notice number of a payment notice issued on the pagoPA platform</td></tr><tr><td><strong>Required</strong></td><td>Yes, for pagoPA payments</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>301011100007347557</code></td></tr></tbody></table>

{% hint style="warning" %}
It is important that the fiscal code of the sending service matches the fiscal code of the creditor entity issuing the pagoPA notice.
{% endhint %}

#### **`invalid_after_due_date`**

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>In the app, displays the payment as expired if the current date is after the <code>due_date</code></td></tr><tr><td><strong>Required</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>false</code></td></tr><tr><td><strong>Type</strong></td><td>Boolean</td></tr><tr><td><strong>Example</strong></td><td><code>false</code></td></tr></tbody></table>

#### [`payee`](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#description)

{% hint style="info" %}
This feature is reserved for entities that have an agreement with PagoPA to enable the separation between the fiscal codes of the message sender and the beneficiary of the debt position.
{% endhint %}

### `third_party_data`

#### `configuration_id`` `<mark style="color:red;">`*`</mark>

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>unique identifier, returned by the API described in <a data-mention href="cru-configurazioni-remote.md">cru-remote-configurations.md</a>, which indicates the reference remote (<em>third-party</em>) configuration for the message</td></tr><tr><td><strong>Required</strong></td><td>Yes</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td>0e9852ccb8a04128bd637c807b9d80d3</td></tr></tbody></table>

{% hint style="info" %}
For more information, refer to the [remote-configuration.md](../../setup-iniziale/configurazione-remota.md "mention") section
{% endhint %}

#### `id`` `<mark style="color:red;">`*`</mark>

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>unique <em>third-party</em> identifier, <strong>generated by the entity</strong>, required to associate the message with its remote content</td></tr><tr><td><strong>Required</strong></td><td>Yes</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91</code></td></tr></tbody></table>

#### `has_precondition`

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Indicates the presence of preconditions for opening the message; the content of the preconditions must be served by the entity by exposing the corresponding API described in <a data-mention href="../openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-delle-precondizioni-allapertura-del-messaggio">#endpoint-for-retrieving-preconditions-for-opening-the-message</a></td></tr><tr><td><strong>Required</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>NEVER</code></td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Accepted Values</strong></td><td><ul><li><code>NEVER</code> -> the message has no preconditions</li><li><code>ONCE</code> -> preconditions are shown before opening in the app only until the message is read by the recipient</li><li><code>ALWAYS</code> -> preconditions are shown before every time the message is opened in the app</li></ul></td></tr><tr><td><strong>Example</strong></td><td><code>ONCE</code></td></tr></tbody></table>

{% hint style="info" %}
If populated, the value of this field redefines, for the current message, the default behavior specified during configuration (for more information, refer to [remote-configuration.md](../../setup-iniziale/configurazione-remota.md "mention"))
{% endhint %}

#### `has_remote_content`

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Indicates that the message's <code>subject</code> and <code>markdown</code> are remote; the content of these fields must be served by the entity by exposing the corresponding API described in <a data-mention href="../openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-dettagli-del-messaggio">#endpoint-for-retrieving-message-details</a></td></tr><tr><td><strong>Required</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>false</code></td></tr><tr><td><strong>Type</strong></td><td>Boolean</td></tr><tr><td><strong>Example</strong></td><td><code>true</code></td></tr></tbody></table>

#### `has_attachments`

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Indicates the presence of attachments related to the message; the attachment metadata must be served by the entity by exposing the corresponding API described in <a data-mention href="../openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-dettagli-del-messaggio">#endpoint-for-retrieving-message-details</a>, while the bytes of individual attachments must be served by exposing the API described in <a data-mention href="../openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-byte-del-singolo-allegato">#endpoint-for-retrieving-the-bytes-of-a-single-attachment</a></td></tr><tr><td><strong>Required</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>false</code></td></tr><tr><td><strong>Type</strong></td><td>Boolean</td></tr><tr><td><strong>Example</strong></td><td><code>false</code></td></tr></tbody></table>

<details>

<summary><span data-gb-custom-inline data-tag="emoji" data-code="1f6a7">🚧</span> Fields reserved for future use</summary>

#### `original_sender`

#### `original_receipt_date`

#### `summary`

</details>

### **`prescription_data`**

{% hint style="info" %}
This feature is under internal testing.
{% endhint %}

### `eu_covid_cert`

{% hint style="info" %}
This feature is reserved for authorized parties.
{% endhint %}

### `legal_data`

{% hint style="info" %}
This feature is under internal testing.
{% endhint %}

## **Examples**

### **Non-remote (static) message**

{% code overflow="wrap" %}

```shell
### REQUEST
curl --location --request POST 'https://api.io.pagopa.it/api/v1/messages' \
--header 'Content-Type: application/json' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--data-raw '{
"content": {
"subject": "Welcome new user !",
"markdown": "# This is a markdown header\n\nto show how easily markdown can be converted to **HTML**\n\nRemember: this has to be a long text."
},
“feature_level_type”: “STANDARD”,
"fiscal_code": "AAAAAA00A00A000A"
}'
```

{% endcode %}

### Message with remote title and body

{% code title="Request Body" overflow="wrap" %}

```json
{
     "content": {
        "subject": "Message title displayed in inbox",
        "markdown": "This text will be replaced with the remote markdown specified when the message is viewed",
        "third_party_data": {
            "id": "2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91",
            //-----------------------------------------------------
            "configuration_id": "0e9852ccb8a04128bd637c807b9d80d3",
            "has_remote_content": true
            //-----------------------------------------------------
        }
    },
    "fiscal_code": "AAAAAA00A00A000A"
}
```

{% endcode %}

### Message with preconditions

{% code title="Request Body" overflow="wrap" %}

```json
{
     "content": {
        "subject": "Message title",
        "markdown": "Message text at least eighty characters long, in compliance with IO integration specifications",
        "third_party_data": {
            "id": "2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91",
            "configuration_id": "0e9852ccb8a04128bd637c807b9d80d3",
            //----------------------
            "has_precondition": true
            //----------------------
        }
    },
    "fiscal_code": "AAAAAA00A00A000A"
}
```

{% endcode %}

### Remote message with attachments

{% code title="Request Body" overflow="wrap" %}

```json
{
     "content": {
        "subject": "Message title",
        "markdown": "Message text at least eighty characters long, in compliance with IO integration specifications",
        "third_party_data": {
            "id": "2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91",
            "configuration_id": "0e9852ccb8a04128bd637c807b9d80d3",
            //---------------------
            "has_attachments": true
            //---------------------
        }
    },
    "fiscal_code": "AAAAAA00A00A000A"
}
```

{% endcode %}

{% hint style="info" %}
In the [#third\_party\_data](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") block, you can specify multiple combinations of the [#has\_precondition](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition "mention"), [#has\_remote\_content](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_remote_content "mention"), and [#has\_attachments](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_attachments "mention") flags (the latter only if you have subscribed to the Agreement for [premium-features.md](../../abilitazioni/funzionalita-premium.md "mention")), as in the example:
{% endhint %}

{% code title="Request Body" overflow="wrap" %}

```json
{
     "content": {
        "subject": "Message title",
        "markdown": "Message text at least eighty characters long, in compliance with IO integration specifications",
        "third_party_data": {
            "id": "2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91",
            "configuration_id": "0e9852ccb8a04128bd637c807b9d80d3",
            //-------------------------
            "has_precondition": true,
            "has_remote_content": true,
            "has_attachments": true
            //-------------------------
        }
    },
    "fiscal_code": "AAAAAA00A00A000A"
}
```

{% endcode %}

{% hint style="warning" %}
IO performs consistency checks between the flags indicated at this stage and what is returned with the remote message details; for example, if you indicate `"has_attachments": true` but do not include the `"attachments"` structure when retrieving the message details, your recipient will receive an error and will not be able to view the message.

For more details, refer to [openapi-endpoint-for-retrieving-remote-content.md](../openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md "mention")
{% endhint %}

### Expected Response

In all the cases described above, IO returns the message ID, which you can use to query its status via the [get-message.md](get-message.md "mention") API.

{% code title="Response Body" overflow="wrap" %}

```shell
{
    "id": "01EM6X4JB9VSZTQ8H16KMQFCEJ"
}
```

{% endcode %}

{% hint style="info" %}
If you have subscribed to the [Premium agreement](../../abilitazioni/funzionalita-premium.md), in addition to knowing if it was sent correctly, you will also be able to know its read status and, if present, the payment status of the associated debt position.
{% endhint %}

{% hint style="success" %}
:bulb: It is important that your systems are instructed to **store the IDs of messages sent via IO**, maintaining their correlation with the respective recipients and any remote context information.
{% endhint %}

## Useful Resources

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/submitMessageforUserWithFiscalCodeInBody](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/submitMessageforUserWithFiscalCodeInBody)
