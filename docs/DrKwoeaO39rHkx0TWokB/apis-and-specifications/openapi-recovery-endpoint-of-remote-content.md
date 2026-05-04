# OpenAPI recovery endpoint of remote content

{% hint style="info" %}
Read \[this page]\(../function/send-a-message/send-a-message-remote-content.md) to learn more about messages with remote content.
{% endhint %}

{% hint style="warning" %}
Before sending messages with remote content it is necessary to follow the procedure illustrated in \[sharing-remote-configuration.md]\(../initial-setup/sharing-remote-configuration.md "mention")
{% endhint %}

In the case of sending a message traditionally on IO, the institution calls the API provided for creating the message and IO proceeds with its complete management in app:

<figure><img src="../.gitbook/assets/[Sequence] Messaggi con contenuto statico.png" alt=""><figcaption></figcaption></figure>

The following diagram shows the sequence of events that involve your system and the IO system for exchanging information with the recipient of a \*\*message with remote content\*\*:

<figure><img src="../.gitbook/assets/[Sequence] Messaggi con contenuto remoto (alto livello).png" alt=""><figcaption><p>Messages with remote content: high level sequence</p></figcaption></figure>

<details>

<summary>Detailed diagram</summary>

The sequence of events that make up the life cycle of a remote content message are shown below in more detail: <img src="../.gitbook/assets/[Sequence] Messaggi con contenuto remoto.png" alt="" data-size="original"> The following chapters show the detailed sequence of each phase.&#x20;

</details>

\## Retrieval endpoint of preconditions when opening the message

If you included the flag [https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#has\_precondition](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#has\_precondition "mention") when during the [#creazione-del-messaggio-con-contenuto-remoto](../function/send-a-message/send-a-message-remote-content.md#creazione-del-messaggio-con-contenuto-remoto "mention"), when the recipient requests to view it in app, IO must retrieve the subject and text of the preconditions to be displayed before proceeding with the actual opening of the message; it does that with a `GET` call with which it will pass the following to your systems:

* The remote correlation `id` you indicated in the [https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third\_party\_data](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third\_party\_data "mention") block when sending the message;
* the fiscal code of the recipient (as the header).

Your system can then retrieve and transmit to IO the content of the preconditions, while checking that the received request is actually related to that recipient.

<figure><img src="../.gitbook/assets/Sequenza recupero precondizioni remote.png" alt=""><figcaption></figcaption></figure>

IO will use the \`base\_url\`, which you communicated when setting the remote configuration information, and the correlation identifier, which you specified in the \[#third\_party\_data]\(api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third\_party\_data "mention") block, when sending the message, when sending the message, to create a GET call in the form of \`{base\_url}/messages/{id}/precondition:\`

{% swagger src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml" path="/messages/{id}/precondition" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml)
{% endswagger %}

{% hint style="info" %}
For more information about the meaning of the individual fields, refer to \[send-a-message-remote-content.md]\(../function/send-a-message/send-a-message-remote-content.md "mention").
{% endhint %}

## Retrieval endpoint **of message details**

If during the [#creazione-del-messaggio-con-contenuto-remoto](../function/send-a-message/send-a-message-remote-content.md#creazione-del-messaggio-con-contenuto-remoto "mention") you included the flag [https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#has\_remote\_content](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#has\_remote\_content "mention") or, being a Premium institution, the flag [https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#has\_attachments](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#has\_attachments "mention"), IO must retrieve the content of the messages from your systems at the moment it is displayed in app, and will use the API described here; it will do it with a `GET` call, with which it will return to you:

* The remote correlation `id` you indicated in the [https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third\_party\_data](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third\_party\_data "mention") block when sending the message;
* the fiscal code of the recipient (as the header).

Your system can then retrieve the content of the message, while checking that the received request is actually related to that recipient.

<figure><img src="../.gitbook/assets/Remoted Content - Details - Sequence Diagram.png" alt=""><figcaption></figcaption></figure>

IO will use the \`base\_url\`, which you communicated to the IO team when setting the remote configuration information, and the correlation identifier, which you specified in the \[#third\_party\_data]\(api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third\_party\_data "mention") block, when sending the message, to create a GET call in the form of \`{base\_url}/messages/{id}:\`

{% swagger src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml" path="/messages/{id}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml)
{% endswagger %}

{% hint style="info" %}
For more information about the meaning of the individual fields, refer to \[send-a-message-remote-content.md]\(../function/send-a-message/send-a-message-remote-content.md "mention").
{% endhint %}

### Example of an expected response from IO

Depending on the flags you specified [https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third\_party\_data](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third\_party\_data "mention") during [#creazione-del-messaggio-con-contenuto-remoto](../function/send-a-message/send-a-message-remote-content.md#creazione-del-messaggio-con-contenuto-remoto "mention"), in response to the API you should include:

<table><thead><tr><th width="233">If [flag]=true</th><th width="185">Structure to insert</th><th>What is it</th></tr></thead><tbody><tr><td><code>has_remote_content</code></td><td><code>details</code></td><td>The message has remote content (subject and body)</td></tr><tr><td><code>has_attachments</code></td><td><code>attachments</code></td><td>Only for Premium institutions: the message contains attachments</td></tr></tbody></table>

{% hint style="warning" %}
Be careful to respect the flags that you declare: IO checks the coherency between the flags you indicated when creating the message and the structures present in the detailed API response when it is used in app
{% endhint %}

#### Structure `details`: message subject and body

The example below shows what can return in the `details` structure in case of a remote content message if you specified `has_remote_content=true`:

```json
{ &quot;details&quot;: { &quot;subject&quot;: &quot;This is the title of the message&quot;, &quot;markdown&quot;: &quot;This is the body of the message in **markdown** format&rdquo; } }
```

This is how the message set in this way appears in app:

<figure><img src="../.gitbook/assets/image (24).png" alt="" width="375"><figcaption><p>How the example appears in app</p></figcaption></figure>

{% hint style="info" %}
The subject shown in the message with remote content can be different than the one that you indicated when it was created (the \`subject\` field in \[submit-a-message-passing-the-user-tax-code-in-the-request-body.md]\(api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md "mention")): the latter, in fact, is used as the subject in the list of messages in app and is static.

:warning:Remember that pursuant to the [IO guidelines](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto\_allegati/213121604430O\_\_OLG+Punto+accesso+telematico+servizi+PA\_3.11.2021.pdf) you must not include sensitive information in the message subject, and if necessary in the body the minimization principle must be respected.
{% endhint %}

{% hint style="info" %}
When you create and transmit the message text in markdown format, remember to set the charset \`UTF-8\` (to make sure that the accented characters are displayed correctly) and use the sequence "\`\n\n\`" to start a new line, creating a new paragraph.

The following text formatting tags can be used:

* `#`, `##` (followed by a space) for the headers
* \* for italics
* \*\* for bold
* \[Lorem Ipsum]\(https://my.website) for the links
{% endhint %}

#### `attachments` structure: PDF attachments

If your organization signed the Premium agreement, here is an example of what you can indicate if you specified `has_remote_content=true` in the `details` structure:

{% code overflow="wrap" %}
```json
{ &quot;attachments&quot;: [ { &quot;id&quot;: &quot;410034f7-6cfd-43ef-b58b-2da1375ee218&quot;, &quot;content_type&quot;: &quot;application/pdf&quot;, &quot;name&quot;: &quot;Attachment 1.pdf&quot;, &quot;url&quot;: &quot;/io_attachments/410034f7-6cfd-43ef-b58b-2da1375ee218&quot;, &quot;category&quot;: &quot;DOCUMENT&quot; }, { &quot;id&quot;: &quot;0004b1f5-7414-4db8-b9e0-1e38a7730fca&quot;, &quot;content_type&quot;: &quot;application/pdf&quot;, &quot;name&quot;: &quot;Attachment 2.pdf&quot;, &quot;url&quot;: &quot;/io_attachments/0004b1f5-7414-4db8-b9e0-1e38a7730fca&quot;, &quot;category&quot;: &quot;DOCUMENT&quot; } ] }
```
{% endcode %}

The table indicates the meaning of each field:

| Field          | Permitted format               | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`           | string                         | <p>IO requires that the <code>id</code> field must contain an <strong>identifier of the single attachment</strong> that is <strong>univocal in the message</strong>: it is your responsibility to define this field and guarantee that it is univocal across your systems.</p><p>The example shows the use of a GUID.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `content_type` | enumerated string              | It must contain the "`application/pdf`" value as IO accepts only attachments in **PDF** format compliant with standard **PDF/A-2a**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `name`         | string (ending in ".pdf")      | <p>It must contain the name of the attachment as it will appear in the message, in the “Attachments” section: select it carefully in order to communicate correctly with your recipient.<br><br><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span> It is mandatory to <strong>always add the extension ".pdf"</strong>.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `url`          | string (in partial URL format) | <p>It must contain the <strong>relative path</strong> to download the attachment. This is because IO downloads the attachments with a <code>GET</code> request to the address <code>{baseUrl}/messages/{id}/{url}</code>, where :</p><ul><li><code>baseUrl</code> is the (initial) common part of the endpoints that you communicated to the IO team when sharing the remote configuration information;</li><li><code>id</code> is the remote correlation identified that you specified in the <a data-mention href="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third_party_data">https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third_party_data</a> block when sending the message</li></ul> |
| `category`     | enumerated string              | It must contain the value `"DOCUMENT"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Retrieval endpoint **of the bytes of the individual attachment**

If you singed the Premium agreement and in the detailed API response shown in the previous chapter you included the metadata for one or more attachments, when the recipient of the message wants to view them, IO will recover the content from your systems, using the URL of a `GET` call in `{baseUrl}/{id}/{url}` format, where:

* `baseUrl` is the common part (initial) of the endpoints that you communicated to the IO team when setting the remote configuration information;
* `{id}` is the identifier you specified in the [https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third\_party\_data](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/2qewnaGowjcqCUhJyHjR/api-and-specifications/api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third\_party\_data "mention") block when sending the message;
* `{url}` is the completion of the specific `baseUrl` for the attachment in question, as returned in the metadata with the detailed API.

{% hint style="warning" %}
Be careful: in this case the univocal identifier is the \*\*remote correlation\*\* \`id\` you indicated in \[#third\_party\_data]\(api-messaggi/submit-a-message-passing-the-user-tax-code-in-the-request-body.md#third\_party\_data "mention") when sending the message.
{% endhint %}

<figure><img src="../.gitbook/assets/Remoted Content - Download allegato - Sequence Diagram.png" alt=""><figcaption></figcaption></figure>

{% swagger src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml" path="/messages/{id}/{attachment_url}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml)
{% endswagger %}

{% hint style="info" %}
The API must return the stream of bytes of the attached file in binary \`application/octet-stream\` format.
{% endhint %}

## Authorizations

### API Key

IO guarantees that the fiscal code in the _request_ corresponds to fiscal code of the user who is trying to retrieve the message data. The fiscal code is send through the `fiscal_code` header.

{% hint style="warning" %}
The institution is responsible for correctly identifying the user’s fiscal code.
{% endhint %}

## Note about the "Lollipop” headers

All the APIs described here optionally have a series of _headers_ called "`x-pagopa-lollipop-...`" and two "`signature`” headers: these _headers_ are reserved for the use of a system that certifies the recipient device, which will be introduced soon for which you will receive an appropriate communication and documentation.

{% hint style="success" %}
At the moment you can ignore its presence in the specifications but \*\*we recommend you not to explicitly prevent its reception by IO\*\*.
{% endhint %}
