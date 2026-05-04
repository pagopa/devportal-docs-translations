# Cancellation of the request for a signature

If it is necessary, a signature request can be revoked after it was sent to the user.

To _cancel_ the _Signature Request_, make a `HTTP PUT` request to the **endpoint,** `/api/v1/sign/signature-requests/{signature\_request\_id}/status` specifying `CANCELLED` in the body of the request.

{% hint style="danger" %} Once the signature request has been canceled, it cannot be reactivated. {% endhint %}

At this point the signature request has been **cancelled**. The user will not be able to proceed with the signature.