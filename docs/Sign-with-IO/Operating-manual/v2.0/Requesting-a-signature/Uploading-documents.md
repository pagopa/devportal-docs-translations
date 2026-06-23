# Document Upload

Once a **Signature Request** has been successfully created, you must upload the PDF documents to be signed via _REST API_.

Files are not uploaded directly to the `Resource Server` that exposes the IO Sign APIs, but to a dedicated `Document Storage` based on [Azure BLOB Storage](https://azure.microsoft.com/it-it/products/storage/blobs/).

For each document to be signed, you must:

1. Get the `document_id` from the Signature request. In the example shown in [Creating a Signature request](Creating-a-signature-request.md) the `document_id` was: "`01ARZ3NDEKTSV4RRFFQ69G5FAV`";
2. Obtain a document-specific **Upload URL** from the dedicated REST endpoint `GET/api/v1/sign/signature-requests/{signature_request_id}/documents/{document_id}/upload_url;`
3. Upload to the **Upload URL**
4. Verify that the document has been uploaded correctly by making an `HTTP GET` request to the endpoint: `/api/v1/sign/signature-requests/{signature_request_id}` specifying the signature_request_id and the headers required for authentication.

In the `DOCUMENTS` object you will find references to the documents and their associated upload status.

### How to upload to the Upload URL

You have two options for uploading:

<details>

<summary>Via <strong>Azure Storage SDK</strong></summary>

Use the **Azure Storage SDK** for the relevant programming language.

</details>

<details>

<summary>Via <strong>HTTP request</strong></summary>

Make an **HTTP request** (`PUT`) to the Upload URL, specifying `x-ms-blob-type : BlockBlob` in the request header and the binary content of the file as the message body.

</details>

{% hint style="warning" %}
The **Upload URL** is valid for 15 minutes, is linked to a specific document to be uploaded (it cannot be used for more than one document), and contains all the information needed to authenticate with the `Document Storage`.
{% endhint %}

{% hint style="warning" %}
**Document size limit:** the total size of the document bundle to be uploaded must not exceed 10MB.
{% endhint %}
