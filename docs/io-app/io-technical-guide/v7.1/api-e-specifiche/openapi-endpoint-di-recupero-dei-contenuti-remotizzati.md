# OpenAPI endpoint for retrieving remote content

{% hint style="info" %}
Read [this page](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md) to learn more about remote content messages.
{% endhint %}

{% hint style="warning" %}
Before you can send remote content messages, you must follow the procedure outlined in [configurazione-remota.md](../setup-iniziale/configurazione-remota.md "mention")
{% endhint %}

In the traditional scenario of sending a message on IO, the Service Provider calls the exposed API to create the message, and IO handles its complete management in the app:

<figure><img src="../.gitbook/assets/[Sequence] Messaggi con contenuto statico.png" alt=""><figcaption></figcaption></figure>

The following diagram shows the sequence of events involving your system and IO's system in the exchange of information with the recipient of a **remote content message**:

<figure><img src="../.gitbook/assets/[Sequence] Messaggi con contenuto remoto (alto livello).png" alt=""><figcaption><p>Remote content messages: high-level sequence</p></figcaption></figure>

<details>

<summary>Detailed diagram</summary>

The following is a more detailed sequence of the events that constitute the lifecycle of a remote content message:

<img src="../.gitbook/assets/[Sequence] Messaggi con contenuto remoto.png" alt="" data-size="original">

In the following chapters, you will find the detailed sequences for each phase.

</details>

## Endpoint for retrieving message opening preconditions

If, during [#creazione-del-messaggio-con-contenuto-remoto](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#creazione-del-messaggio-con-contenuto-remoto "mention"), you set the [#has\_precondition](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition "mention") field (or if you indicated it during [configurazione-remota.md](../setup-iniziale/configurazione-remota.md "mention")), when the recipient opens the message, IO will retrieve the preconditions through a `GET` call to your systems, containing the following input parameters:&#x20;

- the remote correlation `id` that you specified in the [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") block when sending the message;
- the recipient's fiscal code (as a header).

The subscriber is responsible for verifying the input fiscal code, through an appropriate call ([Get a User Profile using POST](api-messaggi/get-a-user-profile-using-post.md)); if the outcome is positive, the preconditions content will be sent to IO.

<figure><img src="../.gitbook/assets/Sequenza recupero precondizioni remote.png" alt=""><figcaption></figcaption></figure>

IO will use the `base_url`, which you provided when setting up the remote configuration information, and the correlation identifier, which you specified in the [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") block when sending the message, to compose a GET call in the form `{base_url}/messages/{id}/precondition:`

{% openapi src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml" path="/messages/{id}/precondition" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml)
{% endopenapi %}

{% hint style="info" %}
For more information on the meaning of individual fields, refer to [inviare-un-messaggio-a-contenuto-remoto.md](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md "mention").
{% endhint %}

## Endpoint for **retrieving message details**

If, during [#creazione-del-messaggio-con-contenuto-remoto](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#creazione-del-messaggio-con-contenuto-remoto "mention"), you included the [#has\_remote\_content](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_remote_content "mention") flag or, as a Premium Service Provider, the [#has\_attachments](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_attachments "mention") flag, IO will need to retrieve the message content from your systems when it is viewed in the app, and it will use the `GET` API with the following parameters:

- the remote correlation `id` that you specified in the [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") block when sending the message;
- the recipient's fiscal code (as a header).

Your system can then retrieve the message content while verifying that the incoming request relates to that specific recipient.

<figure><img src="../.gitbook/assets/Remoted Content - Details - Sequence Diagram.png" alt=""><figcaption></figcaption></figure>

IO will use the `base_url` created when setting up the remote configuration information, and the correlation identifier, specified in the [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") block when sending the message, to compose a GET call in the form `{base_url}/messages/{id}:`

{% openapi src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml" path="/messages/{id}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml)
{% endopenapi %}

{% hint style="info" %}
For more information on the meaning of individual fields, refer to [inviare-un-messaggio-a-contenuto-remoto.md](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md "mention").
{% endhint %}

### Example of response expected by IO

Depending on the flags you specified in [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") at the time of [#creazione-del-messaggio-con-contenuto-remoto](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#creazione-del-messaggio-con-contenuto-remoto "mention"), your API response must include:

<table><thead><tr><th width="233">If [flag]=true</th><th width="185">Structure to include</th><th>Description</th></tr></thead><tbody><tr><td><code>has_remote_content</code></td><td><code>details</code></td><td>Completes the message title and body. For more information refer to <a data-mention href="openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#struttura-details-titolo-e-corpo-del-messaggio">#struttura-details-titolo-e-corpo-del-messaggio</a></td></tr><tr><td><code>has_attachments</code></td><td><code>attachments</code></td><td><strong>For Premium Service Providers only</strong>: populates the metadata of the message attachments. For more information refer to <a data-mention href="openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#struttura-attachments-allegati-pdf">#struttura-attachments-allegati-pdf</a></td></tr></tbody></table>

{% hint style="warning" %}
Be sure to respect the flags you declare: IO performs a consistency check between the flag indicated during message creation and the structures present in the details API response when the message is viewed in the app
{% endhint %}

#### `details` structure: message title and body

Below is an example of a response in the `details` structure for a remote content message (with the `has_remote_content=true` flag):

```json
{
  "details":
  {
    "subject": "This is the message title",
    "markdown": "This is the message body in **markdown** format"
  }
}
```

Here's how the message configured this way will appear in the app:

<figure><img src="../.gitbook/assets/image (25).png" alt="" width="375"><figcaption><p>How the example will appear in the app</p></figcaption></figure>

The title shown in the remote content message can be different from the one you specified at the time of its creation (the `subject` field in  [submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md "mention")): the latter is used as the title in the app's message list and is static.

{% hint style="warning" %}
We remind you that pursuant to the [IO Guidelines](https://www.agid.gov.it/sites/agid/files/2024-05/lg_punto_accesso_telematico_servizi_pa_3112021.pdf), to respect the principle of data minimisation, sensitive information must not be included in the message title, or in the body where necessary.
{% endhint %}

{% hint style="info" %}
When composing and sending the message text in markdown format, remember to set the `UTF-8` charset (to ensure the correct display of accented characters) and refer to the [Markdown Guide](../risorse-utili/guida-al-markdown.md)
{% endhint %}

#### `attachments` structure: PDF attachments

If you have subscribed to a Premium agreement, below is an example of what you can specify if you had set `has_remote_content=true` in the `details` structure:&#x20;

{% code overflow="wrap" %}

```json
{
  "attachments": [
    {
      "id": "7de61a5a-6829-4f76-9e37-dfd229cd3d62",
      "content_type": "application/pdf",
      "name": "Attachment 1.pdf",
      "url": "/io_attachments/410034f7-6cfd-43ef-b58b-2da1375ee218",
      "category": "DOCUMENT"
    },
    {
      "id": "1d9e3a59-2eed-496c-84dd-1fb9682d24eb",
      "content_type": "application/pdf",
      "name": "Attachment 2.pdf",
      "url": "/io_attachments/0004b1f5-7414-4db8-b9e0-1e38a7730fca",
      "category": "DOCUMENT"
    }
  ]
}
```

{% endcode %}

In the table, you can find the meaning of each field:

| Field          | Allowed format                                               | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`           | string                                                       | <p>IO requires that the <code>id</code> field contain an <strong>identifier for the individual attachment</strong> that is <strong>unique within the message</strong>: it is your responsibility to define this field and ensure its uniqueness in your systems.</p><p>The example shows the use of a GUID for illustrative purposes.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `content_type` | enumerated string                                            | Must contain the value "`application/pdf`" as IO only accepts attachments in **PDF** format compliant with the **PDF/A-2a** standard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `name`         | string (ending in ".pdf") | <p>Must contain the name of the attachment as it will appear in the message, within the "Attachments" section: choose it carefully to communicate correctly with your recipient.<br><br><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span> It is mandatory to <strong>always add the ".pdf" suffix</strong>.</p><p></p><p><strong>Technical limits</strong><br>- <strong>127</strong> characters, including extension (255 on modern iOS and Android, but 127 is the safe limit that covers 100% of devices - Android)</p><p></p><p><strong>Recommended UX guidelines</strong> (for a display that aids citizen comprehension):<br>- <strong>35</strong> characters, for an attachment name with no spaces (e.g., xxxyyyy_zzz-aaa.pdf)<br>- <strong>52</strong> characters, with a max of 26 characters per line, when the attachment name contains spaces</p> |
| `url`          | string (in partial URL format)            | <p>Must contain the <strong>relative path</strong> for downloading the attachment. This is because IO downloads attachments via a <code>GET</code> request to the <code>{baseUrl}/messages/{id}/{url}</code> address, where:</p><ul><li><code>baseUrl</code> is the common (initial) part of the endpoints that you communicated to the IO team when setting up remote configuration information;</li><li><code>id</code> is the remote correlation identifier you specified in the <a data-mention href="api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data">#third_party_data</a> block when sending the message</li></ul>                                                                                                                                                                                                        |
| `category`     | enumerated string                                            | Must contain the value `"DOCUMENT"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Endpoint for **retrieving the bytes of a single attachment**

If you have subscribed to the Premium Agreement and in the response to the details API described in the previous chapter you have included metadata for one or more attachments, when the message recipient wants to view them, IO will retrieve the content from your systems by composing a `GET` call URL in the format `{baseUrl}/{id}/{url}`, where:

- `baseUrl` is the common (initial) part of the endpoints you provided to the IO team when setting up remote configuration information;
- `{id}` is the identifier you specified in the [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") block when sending the message;
- `{url}` is the completion of the `baseUrl` specific to the attachment in question, as returned in the metadata by the details API.

{% hint style="warning" %}
Please note: in this case, the unique identifier is the **remote correlation** `id` that you specified in [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") when sending the message.
{% endhint %}

<figure><img src="../.gitbook/assets/Remoted Content - Download allegato - Sequence Diagram.png" alt=""><figcaption></figcaption></figure>

{% openapi src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml" path="/messages/{id}/{attachment_url}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml)
{% endopenapi %}

{% hint style="info" %}
The API must return the byte stream of the attached file in binary `application/octet-stream` format.
{% endhint %}

## Authorisations

### API Key

IO guarantees that the fiscal code in the _request_ matches that of the user who is trying to retrieve the message data. The fiscal code is sent via the `fiscal_code` header.

{% hint style="warning" %}
It is the Service Provider's responsibility to correctly identify the user's fiscal code.
{% endhint %}

## Note on headers

All the APIs described here include a series of optional _headers_ named "`x-pagopa-lollipop-...`" and two "`signature`" headers, which should not be populated, but we ask you not to prevent them from being received.

## Useful resources

[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml)
