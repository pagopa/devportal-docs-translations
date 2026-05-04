# Upload of documents

Once a **Signature Request** has been successfully created, the PDF documents to be signed must be uploaded via the _REST API_.

The files are not uploaded directly to the `Resource Server` that expose the APIs of Sign with IO, but to the dedicated `Document Storage`, based on [Azure BLOB Storage](https://azure.microsoft.com/it-it/products/storage/blobs/).

The following is necessary for each document to be signed:

1. Obtain the `document_id` from the Signature request. In the example shown in [Creation of a Signature request](creation-of-a-signature-request.md) the `document_id` was: `"01ARZ3NDEKTSV4RRFFQ69G5FAV"`;
2. Obtain an **Upload URL** specific for the document, from the endpoint REST dedicated `GET/api/v1/sign/signature-requests/{signature_request_id}/documents/{document_id}/upload_url;`
3. Perform the upload to the **Upload URL**
4. Check that the document was uploaded correctly, performing a request `HTTP GET` to the endpoint: `/api/v1/sign/signature-requests/{signature_request_id}` specifying the signature_request_id and the headers necessary for authentication. 

In the `DOCUMENTS` object, you will find the references to the documents and the state of the upload associated with them.

### How to upload to the Upload URL

To upload, you have two options:

<details>

<summary>Via the <strong>SDK of Azure Storage</strong></summary>

Use the **SDK of Azure Storage** of the programming language of reference.

</details>

<details>

<summary>Via <strong>http request</strong></summary>

Make an **http request** (`PUT`) to the Upload URL, indicating in the header the request `x-ms-blob-type : BlockBlob` and the binary content of the file as the body of the message. 

</details>

{% hint style="warning" %} **Upload URL** is valid for 15 minutes and is connected to a specific document to be uploaded (it cannot be used for more than one document) and contains all the information necessary for authentication for `Document Storage`. {% endhint %}