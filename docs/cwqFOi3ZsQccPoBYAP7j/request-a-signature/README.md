# ✍ Request a signature

Once the documents have been prepared in one of the supported formats and the signature fields have been entered, follow these steps to request a signature from the user:

<details>

<summary><mark style="color:blue;">Step 1</mark>: Create a dossier</summary>

[To discover how to do this, click here ](../create-the-dossier.md)

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>: Recover the ID of the citizen</summary>

[To discover how to do this, click here ](recovery-of-citizen-id.md)

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark>: Create a <strong>Signature Request</strong></summary>

[To discover how to do this, click here ](creation-of-a-signature-request.md)

</details>

<details>

<summary><mark style="color:blue;">Step 4</mark>: Upload the documents</summary>

[To discover how to do this, click here ](upload-of-documents.md)

</details>

<details>

<summary><mark style="color:blue;">Step 5</mark>: Send the request for a signature</summary>

[To discover how to do this, click here](send-the-request-for-a-signature/) 

</details>

This sequence diagram outlines the process for creating a “Signature request”, once the "Signer ID" and "Dossier ID" are obtained

```mermaid
sequenceDiagram
    autonumber
    participant E as Institution
    participant API as Sign with (API)
    participant ST as Sign with (Storage)
    actor CIT as citizen

    E ->> API: Requests the creation of a SIGNATURE REQUEST
    API -->> E: Returns the SIGNATURE REQUEST, in loop DRAFT 
    
    status For each PDF file to upload
        E ->> API: Requests the UPLOAD_URL for the document
        API -->> E: Returns UPLOAD_URL
        E ->> ST: Uploads the PDF file via UPLOAD URL
        ST -->> E: Returns the result upload
    end

    E ->> API: Sets SIGNATURE REQUEST as READY
    API -->> E: Returns SIGNATURE REQUEST with QRCODE

    alt forward QRCODE 
        E ->> CIT: Sends the QRCODE using own channels
        else Send message on IO APP 
        E ->> API: Requests NOTIFICATION for SIGNATURE_REQUEST
        API -->> E: Requests NOTIFICATION for SIGNATURE_REQUEST API
        API ->> CIT: Forwards the message on IO with SIGNATURE REQUEST
    end
```
