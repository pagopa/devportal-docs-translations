# Submit a Message passing the user fiscal\_code in the request body

## Description

This API makes it possible to send messages to a citizen identified by the fiscal code. Before sending a message, you must [check](get-a-user-profile-using-post.md) that the citizen is registered with IO and that the service can send communications to the citizen.

{% hint style="info" %}
To use this API you must add to the call the header \`Ocp-Apim-Subscription-Key\` containing the \[primary]\(../../function/publish-a-service/mandatory data/attributes.md#primary\_key) or \[secondary]\(../../function/publish-a-service/mandatory data/attributes.md#secondary\_key) "use" key of the service chosen to send the message
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/messages" method="post" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## **`fiscal_code`**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="186"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Fiscal code of the message recipient</td></tr><tr><td><strong>Mandatory</strong></td><td>Yes</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>AAAAAA00A00A000A</code></td></tr></tbody></table>

## **`time_to_live`**

{% hint style="danger" %}
<mark style="color:red;">\*\*This parameter is deprecated.\*\*</mark>
{% endhint %}

<table data-header-hidden><thead><tr><th width="180"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Time expressed in seconds that specifies the message delivery retry time by IO; once this time has passed, no other push notification or forwarding email is produced</td></tr><tr><td><strong>Mandatory</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>3600</code></td></tr><tr><td><strong>Type</strong></td><td>Integer</td></tr><tr><td><strong>Example</strong></td><td><code>3600</code></td></tr></tbody></table>

## **`feature_level_type`**

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Indicates if the message is sent within the scope of a <strong>Premium</strong> subscription, or if it is to be considered a standard message</td></tr><tr><td><strong>Mandatory</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>STANDARD</code></td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Accepted values</strong></td><td><ul><li><code>STANDARD</code> -> the message is considered a normal IO message</li><li><code>ADVANCED</code> -> additional advanced information is correlated with the message. This value can be specified only if you have a Premium subscription.</li></ul></td></tr><tr><td><strong>Example</strong></td><td><code>ADVANCED</code></td></tr></tbody></table>

## **` content`` `` `**<mark style="color:red;">**`*`**</mark>

### **` subject`` `` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="186"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Subject of the message, whose length must be between 10 and 120 characters</td></tr><tr><td><strong>Mandatory</strong></td><td>Yes</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>Rinnova la tua carta d'identità</code></td></tr></tbody></table>

{% hint style="info" %}
If you are sending a \*\*message with remote content\*\*, refer to \[#important-information-about-the-subject-title-of-the-message]\(../../function/send-a-message/send-a-message-remote-content.md#informazioni-importanti-circa-il-titolo-subject-del-messaggio "mention")
{% endhint %}

### **` markdown`` `` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="187"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Text of the message in markdown format, whose length must be between 80 and 10000 characters</td></tr><tr><td><strong>Mandatory</strong></td><td>Yes</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>Gentile Mario,\n\nsiamo lieti di comunicarti che la tua **Carta di Identità** è disponibile per il ritiro presso i nostri sportelli. \nPuoi consultare gli orari sul [Portale del servizio](https://www.miosito.it/).\n\n*Lo Staff*</code></td></tr></tbody></table>

{% hint style="info" %}
If you are sending a \*\*message with remote content\*\*, refer to \[#important-information-about-the-body-markdown-of-the-message]\(../../function/send-a-message/send-a-message-remote-content.md#informazioni-importanti-circa-il-corpo-markdown-del-messaggio "mention") for details about what to enter in this field.
{% endhint %}

{% hint style="info" %}
When you create and send the text of the message in markdown format, remember to set the charset UTF-8, to make sure that the accented characters are displayed correctly.
{% endhint %}

{% hint style="info" %}
You can format text and enable special functions in your messages using \[the Markdown syntax]\(../../useful-resources/guide-to-the-markdown.md).
{% endhint %}

### **`require_secure_channels`**

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Indicates that the message contains sensitive and/or confidential information; if set to <code>true</code> anonymized push notifications will be produced and email copies of the message will not be forwarded</td></tr><tr><td><strong>Mandatory</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td>If you do not include this field, the fallback is the service configuration (refer to <a data-mention href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/function/publish-a-service/mandatory%20data/attributes.md#require_secure_channels">https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/function/publish-a-service/mandatory%20data/attributes.md#require_secure_channels</a>)</td></tr><tr><td><strong>Type</strong></td><td>Boolean</td></tr><tr><td><strong>Example</strong></td><td><code>true</code></td></tr></tbody></table>

### **`due_date`**

<table data-header-hidden><thead><tr><th width="189"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>This allows associating a reminder with the message. The format must be ISO-8601 with the UTC time zone</td></tr><tr><td><strong>Mandatory</strong></td><td>No</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>2018-10-13T00:00:00.000Z</code></td></tr></tbody></table>

{% hint style="warning" %}
\*\*Pay attention to the time zone!\*\* The date must be expressed in the UTC (Z) time zone. In Italy, the time zone UTC+1 is used during Daylight Saving Time, whereas the time zone UTC+2 is used during Standard Time.

**Example:**

`2022-09-30T22:00:00Z` --> In Italy, it is midnight of October 1, 2022

`2022-11-30T23:00:00Z` --> In Italy, it is midnight of November 1, 2022
{% endhint %}

{% hint style="warning" %}
\*\*Pay attention to the time!\*\* If the expiration date does not have a specific time, usually it refers to the end of the day. Enter the time correctly to prevent displaying an incorrect due date.

**Example:**

✅ January 12 (23:59:59) --> the user can pay by January 12

❌ January 12 (00:00:01) --> the user can pay by January 11
{% endhint %}

{% hint style="success" %}
The expiration date of the message is separate of the due date of an associated amount that is due and can be specified also without the latter
{% endhint %}

{% hint style="info" %}
If you signed the Premium agreement, IO will generate a \[reading]\(https://docs.pagopa.it/kb-enti-messaggi/domande-frequenti/domande-e-risposte-sui-messaggi#come-funziona-il-reminder-per-i-messaggi-non-letti) or \[payment]\(https://docs.pagopa.it/kb-enti-messaggi/domande-frequenti/domande-e-risposte-sui-messaggi#come-funziona-il-reminder-per-i-messaggi-con-avvisi-non-pagati) \*\*reminder\*\* close to the indicated due date: the reminders will be sent to the device of the recipient as push notifications
{% endhint %}

### **`payment_data`**

{% hint style="info" %}
To send payment notices, you must specifically request \[authorization.]\(../../enabling/test-sending-pagopa-notices.md)
{% endhint %}

#### **` amount`` `` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="202"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Amount in euro cents of the payment notice issued on the pagoPA platform</td></tr><tr><td><strong>Mandatory</strong></td><td>Yes, for pagoPA payments</td></tr><tr><td><strong>Type</strong></td><td>Integer</td></tr><tr><td><strong>Example</strong></td><td><code>100</code></td></tr></tbody></table>

#### **` notice_number`` `` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="203"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Notification code for a payment notice issued on the pagoPA platform</td></tr><tr><td><strong>Mandatory</strong></td><td>Yes, for pagoPA payments</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>301011100007347557</code></td></tr></tbody></table>

{% hint style="warning" %}
It is important that the fiscal code of the sending service corresponds to the fiscal code of the payee that issues the pagoPA notice.
{% endhint %}

#### **`invalid_after_due_date`**

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>The payment is shown in app as overdue if the current date is past the <code>due_date</code></td></tr><tr><td><strong>Mandatory</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>false</code></td></tr><tr><td><strong>Type</strong></td><td>Boolean</td></tr><tr><td><strong>Example</strong></td><td><code>false</code></td></tr></tbody></table>

#### [`payee`](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#descrizione)

{% hint style="info" %}
This feature is reserved for institutions that have agreed with PagoPA to enable the separation of the fiscal codes of the sender and the beneficiary of the amount due.
{% endhint %}

### `third_party_data`

#### ` configuration_id`` `` `<mark style="color:red;">`*`</mark>

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>univocal identifier, returned by the API described in <a data-mention href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/cru-configurazioni-remote.md">https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/api-messages/cru-configurazioni-remote.md</a>, which indicates the remote configuration (<em>third party</em>)of reference for the message</td></tr><tr><td><strong>Mandatory</strong></td><td>Yes</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td>0e9852ccb8a04128bd637c807b9d80d3</td></tr></tbody></table>

{% hint style="info" %}
For more information please refer to the section \[remote-configuration.md]\(../../initial-setup/remote-configuration.md "mention")
{% endhint %}

#### ` id`` `` `<mark style="color:red;">`*`</mark>

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Univocal <em>third party</em> identifier <strong>generated by the institution</strong> that is needed in order to associate the message with its remote contents</td></tr><tr><td><strong>Mandatory</strong></td><td>Yes</td></tr><tr><td><strong>Type</strong></td><td>String</td></tr><tr><td><strong>Example</strong></td><td><code>2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91</code></td></tr></tbody></table>

#### `has_precondition`

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Indicates the presence of preconditions when opening the message; the contents of the preconditions must be served by the institution by exposing the corresponding API described in <a data-mention href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-delle-precondizioni-allapertura-del-messaggio">https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-delle-precondizioni-allapertura-del-messaggio</a></td></tr><tr><td><strong>Mandatory</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>NONE</code></td></tr><tr><td><strong>Type</strong></td><td>Enumerated string</td></tr><tr><td><strong>Accepted values</strong></td><td><ul><li><code>NONE</code> -> the message does not have preconditions</li><li><code>ONCE</code> -> the preconditions are shown before opening in app only until the message is read by the recipient</li><li><code>ALWAYS</code> -> the preconditions are shown each time before opening the message in app</li></ul></td></tr><tr><td><strong>Example</strong></td><td><code>ONCE</code></td></tr></tbody></table>

{% hint style="info" %}
If populated, the value of this field redefines, for the current message, the default behavior specified during configuration (for more information refer to \[remote-configuration.md]\(../../initial-setup/remote-configuration.md "mention"))
{% endhint %}

#### `has_remote_content`

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Indicates that the <code>subject</code> and <code>markdown</code> of the message are remote; the content of these fields must be served by the institution by exposing the corresponding API described in <a data-mention href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-dettagli-del-messaggio">https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-dettagli-del-messaggio</a></td></tr><tr><td><strong>Mandatory</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>false</code></td></tr><tr><td><strong>Type</strong></td><td>Boolean</td></tr><tr><td><strong>Example</strong></td><td><code>true</code></td></tr></tbody></table>

#### `has_attachments`

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Description</strong></td><td>Indicates the presence of message-related attachments; attachment metadata should be served by the institution by exposing the corresponding API described in <a data-mention href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-dettagli-del-messaggio">https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-dettagli-del-messaggio</a>, whereas the bytes of the individual attachments by exposing the API described in <a data-mention href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-byte-del-singolo-allegato">https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-byte-del-singolo-allegato</a></td></tr><tr><td><strong>Mandatory</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>false</code></td></tr><tr><td><strong>Type</strong></td><td>Boolean</td></tr><tr><td><strong>Example</strong></td><td><code>false</code></td></tr></tbody></table>

<details>

<summary><span data-gb-custom-inline data-tag="emoji" data-code="1f6a7">🚧</span> Field reserved for future use</summary>

**`original_sender`**

**`original_receipt_date`**

**`summary`**

</details>

### **`prescription_data`**

{% hint style="info" %}
This function is being tested in house.
{% endhint %}

### `eu_covid_cert`

{% hint style="info" %}
This function is reserved to authorized persons.
{% endhint %}

### `legal_data`

{% hint style="info" %}
This function is being tested in house.
{% endhint %}

## **Examples**

### **Non-remote message (static)**

{% code overflow="wrap" %}
```shell
### REQUEST curl --location --request POST &apos;https://api.io.pagopa.it/api/v1/messages&apos; \ --header &apos;Content-Type: application/json&apos; \ --header &apos;Ocp-Apim-Subscription-Key: __YOUR_API_KEY__&apos; \ --data-raw &apos;{ &quot;content&quot;: { &quot;subject&quot;: &quot;Welcome new user !&quot;, &quot;markdown&quot;: &quot;# This is a markdown header\n\nto show how easily markdown can be converted to **HTML**\n\nRemember: this has to be a long text.&quot; }, &ldquo;feature_level_type&rdquo;: &ldquo;STANDARD&rdquo;, &quot;fiscal_code&quot;: &quot;AAAAAA00A00A000A&quot; }&apos;
```
{% endcode %}

### Message with remote subject and markdown

{% code title="Contenuto della richiesta" overflow="wrap" %}
```json
{ &quot;content&quot;: { &quot;subject&quot;: &quot;Subject of the message shown in inbox&quot;, &quot;markdown&quot;: &quot;This text will be replaced by the remote markdown specified at the moment of using the message&quot;, &quot;third_party_data&quot;: { &quot;id&quot;: &quot;2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91&quot;, //----------------------------------------------------- &quot;configuration_id&quot;: &quot;0e9852ccb8a04128bd637c807b9d80d3&quot;, &quot;has_remote_content&quot;: true //----------------------------------------------------- } }, &quot;fiscal_code&quot;: &quot;AAAAAA00A00A000A&quot; }
```
{% endcode %}

### Message with preconditions

{% code title="Contenuto della richiesta" overflow="wrap" %}
```json
{ &quot;content&quot;: { &quot;subject&quot;: &quot;Subject of the message&quot;, &quot;markdown&quot;: &quot;Message text with minimum length of eighty characters with respect to the IO integration specifications&quot;, &quot;third_party_data&quot;: { &quot;id&quot;: &quot;2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91&quot;, &quot;configuration_id&quot;: &quot;0e9852ccb8a04128bd637c807b9d80d3&quot;, //---------------------- &quot;has_precondition&quot;: true //---------------------- } }, &quot;fiscal_code&quot;: &quot;AAAAAA00A00A000A&quot; }
```
{% endcode %}

### Remote message with attachments

{% code title="Contenuto della richiesta" overflow="wrap" %}
```json
{ &quot;content&quot;: { &quot;subject&quot;: &quot;Subject of the message&quot;, &quot;markdown&quot;: &quot;Message text with minimum length of eighty characters with respect to the IO integration specifications&quot;, &quot;third_party_data&quot;: { &quot;id&quot;: &quot;2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91&quot;, &quot;configuration_id&quot;: &quot;0e9852ccb8a04128bd637c807b9d80d3&quot;, //--------------------- &quot;has_attachments&quot;: true //--------------------- } }, &quot;fiscal_code&quot;: &quot;AAAAAA00A00A000A&quot; }
```
{% endcode %}

{% hint style="info" %}
In the \[#third\_party\_data]\(submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#third\_party\_data "mention") block, it is possible to specify multiple combinations of the flags \[#has\_precondition]\(submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#has\_precondition "mention"), \[#has\_remote\_content]\(submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#has\_remote\_content "mention") and \[#has\_attachments]\(submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#has\_attachments "mention") (the latter only if you have signed the agreement related to \[premium-functions.md]\(../../enabling/premium-function.md "mention")), as shown in the example:
{% endhint %}

{% code title="Contenuto della richiesta" overflow="wrap" %}
```json
{ &quot;content&quot;: { &quot;subject&quot;: &quot;Subject of the message&quot;, &quot;markdown&quot;: &quot;Message text with minimum length of eighty characters with respect to the IO integration specifications&quot;, &quot;third_party_data&quot;: { &quot;id&quot;: &quot;2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91&quot;, &quot;configuration_id&quot;: &quot;0e9852ccb8a04128bd637c807b9d80d3&quot;, //------------------------- &quot;has_precondition&quot;: true, &quot;has_remote_content&quot;: true, &quot;has_attachments&quot;: true //------------------------- } }, &quot;fiscal_code&quot;: &quot;AAAAAA00A00A000A&quot; }
```
{% endcode %}

{% hint style="warning" %}
IO performs consistency checks between the flags indicated in this step and what is returned with the remote message details; as an example, if you indicate \`"has\_attachments": true\` but when retrieving the message details do not include the structure \`"attachments"\`, your recipient will receive an error and will not be able to view the message.

For more information, please refer to[https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/zF3c54RkRPgTmqLF0IKo/api-and-specifications/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md "mention").
{% endhint %}

### Expected response

In all the cases described above, IO returns the identifier of the message that you can use to query the status via the API [get-message.md](get-message.md "mention").

{% code title="Contenuto della risposta" overflow="wrap" %}
```shell
{ &quot;id&quot;: &quot;01EM6X4JB9VSZTQ8H16KMQFCEJ&quot; }
```
{% endcode %}

{% hint style="info" %}
If you have signed a Premium agreement, in addition to knowing if a message was sent correctly, you can know the read status and, if present, the payment status of the associated amount due.
{% endhint %}

{% hint style="success" %}
:bulb: It is important that your systems are instructed to \*\*keep the identifiers of the messages sent with IO\*\*, maintaining the correlation with the respective recipients and any remote context information.
{% endhint %}

## Useful resources

[https://developer.io.italia.it/openapi.html#operation/submitMessageforUserWithFiscalCodeInBody](https://developer.io.italia.it/openapi.html#operation/submitMessageforUserWithFiscalCodeInBody)
