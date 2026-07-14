# 🏁 With the Sign with IO button or QR Code

If you want to share the signature request with your users independently, without engaging them through a message on IO, you have two options:

* Integrate the Firma con IO button
* Share the QR code for the signature request directly through other channels, such as email

<details>

<summary>Integrate the Firma con IO button</summary>

Go to the [dedicated section](https://app.gitbook.com/s/cwqFOi3ZsQccPoBYAP7j/sign-with-io-button) to find out how.

</details>

<details>

<summary>Share the QR code for the signature request through other channels</summary>

If you want to share a QR code with the user independently through your own channels, you need to:

* wait a few seconds for the signature request to move from the `READY` status to the `WAIT_FOR_SIGNATURE` status;
* make a request to the `GET /api/v1/sign/signature-requests/{signature_request_id}` endpoint.

The response will include the full signature request, including the `qr_code_url` property, which you can use to access the URL containing the QR code image.

The QR code is always linked to a specific signature request and a specific user. You cannot create generic QR codes that are valid for multiple users.

</details>
