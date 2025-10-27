# 📳 Via message on IO

If you want to send the signature request **via message on IO**, you must proceed as follows: 

1. wait a few seconds, until the signature request switches from the `READY` status to the `WAIT_FOR_SIGNATURE;` status
2. make a request to the endpoint `PUT /api/v1/sign/signature-requests/{signature_request_id}/notification` without specifying anything in the body of the message.

If the user has **activated receiving messages** from the **Sign with IO** service, you will receive the following message as output, containing the ID of the message sent to the user:

```json
{
  "io_message_id": "01G7VBM888NDGCMA84ZVZYJGZQ"
}
```

### What happens if the user selected to not receive communications from Sign with IO?

If you try to send a signature message to a user who decided to **not receive communications** from Sign with IO (the Sign with IO service tab does not have the **flag “Contact you in app” active**):

<img src="../../.gitbook/assets/richiesta_firma.png" alt="" data-size="original">

You will receive an **error message** that does not allow you to proceed with sending the message (the parameter "i**o_message_id**" will not be returned).

In this case, we recommend:

* Suggesting the user to **activate the communication** of the Sign with IO service **from the service tab** located in the “Services” section of the app;
* Send the signature request via alternative channels — see [tramite-sign-with-io-button-o-qr-code.md](tramite-sign-with-io-button-o-qr-code.md "mention")

If, instead, the user **deactivates only push notifications** on the Sign with IO service tab:

![](../../.gitbook/assets/no_push (1).png)

The recipient receives and can view the message in app, however without receiving the push notification; for this reason, you will receive the io_message_id and not an error.

![](../../.gitbook/assets/messaggio.png) 

  
[  
](#user-content-fn-1)\[\^1\]

[\^1]: