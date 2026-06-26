# Publishing the signature request

Once all the documents have been uploaded to the `Document Storage`, you must officially publish the signature request.

To publish the _Signature Request_, make an `HTTP PUT` request to the **endpoint** `PUT /api/v1/sign/signature-requests/{signature_request_id}/status`, specifying `"READY"` in the request body.

{% hint style="danger" %}
Once the signature request is published, you can no longer modify it or its attached documents.
{% endhint %}

A few seconds will need to pass between the **"READY"** status and the next step. To check when you can proceed, make an HTTP GET request to the endpoint:\
`GET /api/v1/sign/signature-requests/{signature_request_id}`\
specifying the `signature_request_id` and the necessary authentication headers. Verify that the Signature Request status has changed from **"READY"** to **"WAITING\_FOR\_SIGNATURE"**.

