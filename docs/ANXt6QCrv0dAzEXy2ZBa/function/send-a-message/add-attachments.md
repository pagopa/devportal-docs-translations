# Add attachments

{% hint style="info" %} This function is reserved to institutions who have signed up for the [Premium program](../../enabling/premium-function.md). {% endhint %}

## What are attachments

They are PDF documents shown at the bottom of the message content. These attachments are retrieved by the systems of the sending institution **each time** the user accesses the resource in the IO app.

<figure><img src="../../.gitbook/assets/Allegati.png" alt="Example of how a user can view a message containing an attachment."><figcaption><p>When the user opens a message, not only the metadata for the message content is retrieved, but also for the metadata (endpoint 1). The retrieval of the actual file takes place via endpoint 2, i.e with a GET to the address <code>{baseUrl}/messages/{id}/{url}</code></p></figcaption></figure>

{% hint style="warning" %} To guarantee the accessibility and security of the documents, you _must_ use attachments in **PDF/A-2a format:** make sure to observe this rule. {% endhint %}

## How does it work?

<details>

<summary><mark style="color:blue;">Step 1</mark>- Define a remote configuration</summary>

To permit IO to know your systems dedicated to attachments, **you must define at least one** [**Remote Configuration**](../../initial-setup/remote-configuration.md), which you will indicate later [when sending each message](send-a-message-a-contenuto-remoto.md).

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>- Show the retrieval endpoints for the attachments</summary>

To permit IO to retrieve the content of a message and its attachments, \*\*you must make a \*\*_**REST web service**_ available in compliance with the [relative OpenAPI](https://editor.swagger.io/?url=https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml).

For more information, read [openapi-retrieval-endpoint-of-remote-content.md](../../api-and-specifications/openapi-recovery-endpoint-of-remote-content.md "mention").

</details>

To include the attachments in a message, in addition to the steps indicated in [.](./ "mention"), you must follow these steps:

<details>

<summary><mark style="color:blue;">Step 3</mark>- Include the block <a data-mention href="../../api-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#third_party_data">#third_party_data</a></summary>

Include the [#third_party_data](../../api-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#third_party_data "mention") block, specifying the reference [remote-configuration.md](../../initial-setup/remote-configuration.md "mention") and the remote correlation `id`, which IO returns to you when it asks you for the metadata and, subsequently, the bytes of the attachments to the particular message you are sending.

</details>

<details>

<summary><mark style="color:blue;">Step 4</mark>- Specify the value <code>TRUE</code> in the field <a data-mention href="../../api-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#has_attachments">#has_attachments</a></summary>

Specify the value `true` in the field [#has_attachments](../../api-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#has_attachments "mention") present in the block [#third_party_data](../../api-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#third_party_data "mention").

</details>

<details>

<summary><mark style="color:blue;">Step 5</mark>- Specify the value <code>ADVANCED</code> in the field <a data-mention href="../../api-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#feature_level_type">#feature_level_type</a></summary>

Specify the value `ADVANCED` in the field [#feature_level_type](../../api-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#feature_level_type "mention") present in the request.

</details>

### Examples

Example of a call for sending a message with attachments:

{% code overflow="wrap" %}
```shell
curl --location --request POST 'https://api.io.pagopa.it/api/v1/messages' \
--header 'Ocp-Apim-Subscription-Key: <YOUR_API_KEY>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "content": {
    "subject": "Message with attachments",
    "markdown": "# Title\n\nMessage text: contains **attachments**!",
    "third_party_data": {
      "id": "c7832d5f-5946-48a3-ba9d-2d1e3aa3f7e5", 
      "configuration_id": "0e9852ccb8a04128bd637c807b9d80d3",
      "has_attachments": true
    }
  },
  "feature_level_type": "ADVANCED",
  "fiscal_code": "<validFiscalCode>",
}'
```
{% endcode %}

Example of a positive response:

{% code overflow="wrap" %}
```json
{
  "id": "01BX9NSMKVXXS5PSP2FATZMYYY"
}
```
{% endcode %}

{% hint style="info" %} Please note that you are not actually sending the attachments when creating the message: you will do it later when the recipient wants to view them in the app and IO will invoke [the API ](../../api-and-specifications/openapi-recovery-endpoint-of-remote-content.md#endpoint-di-recupero-dei-byte-del-singolo-allegato) for the purpose
{% endhint %}
