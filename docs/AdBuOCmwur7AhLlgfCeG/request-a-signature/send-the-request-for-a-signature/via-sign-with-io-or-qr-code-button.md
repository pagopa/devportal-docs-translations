# 🏁 With the Sign with IO button or QR Code

If you want to autonomously share the signature request with your users, without engaging them with a message in IO, you have two options:

1. Integrate the **Sign with IO button**
2. Share the **QRcode** of the signature request directly via other channels (e.g. email)

<details>

<summary>Integrate the Sign with IO button</summary>

Go to the [dedicated section](../../sign-with-io-button/il-sign-with-io-button.md) to discover what to do

</details>

<details>

<summary>Share the QRcode via another channel</summary>

If you want to autonomously share a QR code with a user via your channels, you must: 

1. wait a few seconds, until the signature request switches from the `READY` status to the `WAIT_FOR_SIGNATURE;` status
2. make a request to the endpoint `GET /api/v1/sign/signature-requests/{signature_request_id}`

You will receive as output the entire signature request inclusive of the property `qr_code_url`, from which to access the url containing the image of the **QR code**.

The **QR code** is always connected to a **specific signature request** and a **specific user**. You cannot create generic QR codes that are valid for multiple users.

</details>

