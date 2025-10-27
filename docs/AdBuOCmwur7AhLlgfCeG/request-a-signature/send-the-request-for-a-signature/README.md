# Send the request for a signature

To publish the _Signature Request_, make a `HTTP PUT` request to the **endpoint,** `PUT /api/v1/sign/signature-requests/{signature\_request\_id}/status` specifying `READY` in the body of the request.

{% hint style="danger" %} Once the signature request has been published, it will no longer be possible to change it or change the attached documents. It will only be possible to **delete it**. {% endhint %}

At this point, the signature request is **ready to be sent** to the user. There are two options to do so, via **QR code** to be shared with the user via your channels or by directly sending a **message on the IO app**.

{% content-ref url="tramite-sign-with-io-button-o-qr-code.md" %} [tramite-sign-with-io-button-o-qr-code.md](tramite-sign-with-io-button-o-qr-code.md) {% endcontent-ref %}

{% content-ref url="via-message-on-io.md" %} [via-message-on-io.md](via-message-on-io.md) {% endcontent-ref %}