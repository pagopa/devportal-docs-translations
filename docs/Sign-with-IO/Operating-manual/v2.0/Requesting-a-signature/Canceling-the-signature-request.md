# Cancelling the signature request

If necessary, you can revoke a signature request after it has been sent to the user.

To _cancel_ the _Signature Request_, make an `HTTP PUT` request to the **endpoint,** `/api/v1/sign/signature-requests/{signature_request_id}/status` specifying `"CANCELLED"` in the request body.

{% hint style="danger" %}
Once the signature request is cancelled, it can no longer be restored.
{% endhint %}

At this point, the signature request has been **cancelled**. The user will no longer be able to sign.
