# Publication of the request for a signature

Once all the documents have been uploaded to the `Document Storage`, the signature request must be officially published. 

To publish the _Signature Request_, make a `HTTP PUT` request to the **endpoint,** `PUT /api/v1/sign/signature-requests/{signature\_request\_id}/status` specifying `READY` in the body of the request.

{% hint style="danger" %} Once the signature request has been published, it will no longer be possible to change it or change the attached documents. {% endhint %}

A few seconds pass between the "**READY**" status and the next step. To check when it is possible to proceed, make a HTTP GET request to the endpoint:  
`GET /api/v1/sign/signature-requests/{signature_request_id}`  
specifying the `signature_request_id` and the headers necessary for authentication. Check that the status of the Signature Request has changed from "**READY**" to "**WAITING_FOR_SIGNATURE**".