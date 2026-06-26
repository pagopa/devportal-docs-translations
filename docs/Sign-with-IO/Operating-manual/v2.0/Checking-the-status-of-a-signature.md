# ✅ Check the status of a signature

To check the status of a signature, you will need to make an `HTTP GET` request to the `/api/v1/sign/signature-requests/{signature_request_id}` endpoint, specifying the `signature_request_id` and the headers required for authentication.

The returned resource will contain the `status` property, which can have the following values:

- `DRAFT` - the signature request has been created but **has not yet been finalized**. In this case, you need to upload the documents or explicitly mark it as `READY`;
- `READY` - The signature request has been finalized and will be analyzed and prepared for sending to the citizen;
- `WAIT_FOR_SIGNATURE` - the signature request has been analyzed and can therefore be sent to the citizen. This status persists until the citizen completes the signature process;
- `CANCELLED` - the signature request has been cancelled by the entity; it will no longer be possible for the citizen to proceed with the signature process;
- `WAIT_FOR_QTSP` - the citizen has completed the signature process, and the documents are awaiting signature from the Qualified Trust Service Provider;
- `SIGNED` - all documents contained in the signature request have been signed;
- `REJECTED` - it was not possible to proceed with signing the documents.

{% hint style="warning" %}
If the `signature_request` is `REJECTED`, you will find the reason inside the `rejected_reason` field.

In this case, you will need to resolve the issues reported in the `rejected_reason` and proceed with a new [signature request](richiedere-una-firma/). For example, you may need to repeat the document preparation procedure to correctly identify the signature fields.
{% endhint %}

{% hint style="info" %}
In some cases, when the error is not due to the app but to an external issue (such as a problem during the issuance of the signature certificate), the user is advised to contact the entity by providing the support email.\
It is therefore important, to provide the right support to users, to indicate a valid and monitored support address during the entity's onboarding phase with Firma con IO.
{% endhint %}

### Get the list of created Signature Requests, starting from a Dossier

If you do not have a `signature_request_id` to query the `GET /api/v1/sign/signature-requests/{signature_request_id}` endpoint, you can retrieve it starting from the `id` of the `dossier` to which the Signature Request is associated.

In this case, you will need to make an `HTTP GET` call to the `/api/v1/sign/dossiers/{dossier_id}/signature-requests` endpoint to get the List of Signature Requests associated with that dossier.

Once you have the list, you can filter it by `signer_id`, `created_at`, and/or `status` to obtain the `signature_request_id` needed to retrieve the details of the Signature Request, as indicated above.

{% hint style="info" %}
The described endpoint is paginated and therefore returns a limited number of results for each call. In cases where the number of available Signature Requests for that dossier is greater than the number of items on the page, a `continuation_token` is returned to be used as a "cursor" to scroll through the list in subsequent calls.

The `continuation_token` is stateless and "immutable", so it can be stored in your system for subsequent queries.
{% endhint %}
