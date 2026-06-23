# 🏁 Using the Sign with IO button or QR Code

If you want to share the signature request with your users yourself, without sending a message through the IO app, you have two options:

1. Integrate the **Sign with IO button**
2. Share the signature request **QR code** directly through other channels (e.g.  email)

<details>

<summary>Integrate the Sign with IO button</summary>

Go to the [dedicated section](../../'Sign-with-IO'-button/The-'Sign-with-IO'-button.md) to find out how

</details>

<details>

<summary>Share the QR code through another channel</summary>

If you want to share a QR code with the user yourself through your own channels, you must:

1. wait a few seconds for the signature request to change from the `READY` status to the `WAIT_FOR_SIGNATURE` status
2. make a request to the `GET /api/v1/sign/signature-requests/{signature_request_id}` endpoint

You will receive the entire signature request in the output, including the `qr_code_url` property, from which you can access the URL containing the **QR code** image.

The **QR code** is always linked to a **specific signature request** and a **specific user**. You cannot create generic QR codes that are valid for different users.

</details>
