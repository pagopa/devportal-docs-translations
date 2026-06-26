# ✍️ Requesting a signature

Once the documents are prepared in one of the supported formats and the signature fields are inserted, follow these steps to request the user's signature:

<details>

<summary><mark style="color:blue;">Step 1</mark>: Create a Dossier</summary>

[To find out how, go here](../Creating-the-dossier.md)

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>: Retrieve the citizen's ID</summary>

[To find out how, go here](Retrieving-the-citizen's-ID.md)

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark>: Create a <strong>Signature Request</strong></summary>

[To find out how, go here](Creating-a-signature-request.md)

</details>

<details>

<summary><mark style="color:blue;">Step 4</mark>: Upload the documents</summary>

[To find out how, go here](Uploading-documents.md)

</details>

<details>

<summary><mark style="color:blue;">Step 5</mark>: Send the signature request</summary>

[To find out how, go here](invio-della-richiesta-di-firma/)

</details>

Here is a sequence diagram outlining the process of creating a "Signature Request", once the "Signer ID" and "Dossier ID" have been obtained

```mermaid
sequenceDiagram
    autonumber
    participant E as Entity
    participant API as Sign with IO (API)
    participant ST as Sign with IO (Storage)
    actor CIT as Citizen

    E ->> API: Requests the creation of a SIGNATURE REQUEST
    API -->> E: Returns the SIGNATURE REQUEST, in DRAFT state

    loop For each PDF file to upload
        E ->> API: Requests UPLOAD_URL for the document
        API -->> E: Returns UPLOAD_URL
        E ->> ST: Uploads PDF file via UPLOAD URL
        ST -->> E: Returns upload result
    end

    E ->> API: Sets SIGNATURE REQUEST as READY
    API -->> E: Returns SIGNATURE REQUEST with QRCODE

    alt QRCODE forwarding 
        E ->> CIT: Sends the QRCODE using its own channels
    else Send Message on IO App 
        E ->> API: Requests NOTIFICATION for SIGNATURE_REQUEST
        API -->> E: If CITIZEN has Messages on IO enabled, it accepts the request
        API ->> CIT: Forwards Message on IO with SIGNATURE REQUEST
    end
```
