# ✍️ Request a signature

Once the documents have been prepared in one of the supported formats and the signature fields have been entered, follow these steps to request a signature from the user:

<details>

<summary><mark style="color:blue;">Step 1</mark>: Create a dossier</summary>

[To discover how to do this, click here](../create-the-dossier.md)

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>: Recover the ID of the citizen</summary>

[To discover how to do this, click here](recovery-of-citizen-id.md)

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark>: Create a <strong>Signature Request</strong></summary>

[To discover how to do this, click here](creation-of-a-signature-request.md)

</details>

<details>

<summary><mark style="color:blue;">Step 4</mark>: Upload the documents</summary>

[To discover how to do this, click here](upload-of-documents.md)

</details>

<details>

<summary><mark style="color:blue;">Step 5</mark>: Send the request for a signature</summary>

[To discover how to do this, click here](send-the-request-for-a-signature/)

</details>

This sequence diagram outlines the process for creating a “Signature request”, once the "Signer ID" and "Dossier ID" are obtained

```mermaid
sequenceDiagram
    autonumber
    participant E as Ente
    participant API as Firma con IO (API)
    participant ST as Firma con IO (Storage)
    actor CIT as Cittadino

    E ->> API: Richiede la creazione di una SIGNATURE REQUEST
    API -->> E: Restituisce la SIGNATURE REQUEST, in stato DRAFT

    loop Per ogni file PDF da caricare
        E ->> API: Richiede UPLOAD_URL per il documento
        API -->> E: Restituisce UPLOAD_URL
        E ->> ST: Carica file PDF tramite UPLOAD URL
        ST -->> E: Restituisce esito upload
    end

    E ->> API: Imposta SIGNATURE REQUEST come READY
    API -->> E: Restituisce SIGNATURE REQUEST con QRCODE

    alt Inoltro QRCODE 
        E ->> CIT: Manda il QRCODE usando i propri canali
    else Invio Messaggio su App IO 
        E ->> API: Richiede NOTIFICATION per SIGNATURE_REQUEST
        API -->> E: Se CITTADINO ha i Messaggi su IO abilitati, prende in carico la richiesta
        API ->> CIT: Inoltra Messaggio su IO con SIGNATURE REQUEST
    end
```
