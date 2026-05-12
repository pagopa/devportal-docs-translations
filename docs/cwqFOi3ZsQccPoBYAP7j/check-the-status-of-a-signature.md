# ✅ Check the status of a signature

To check the status of a signature, you must send an `HTTP GET` request to the endpoint:

```http
/api/v1/sign/signature-requests/{signature_request_id}
```

specifying the `signature_request_id` and the headers required for authentication.

The returned resource will contain the `status` property, which can have the following values:

* `DRAFT` — the signature request has been created, but it has **not yet been finalized**.\
  In this case, you need to upload the documents or explicitly mark it as `READY`.
* `READY` — the signature request has been finalized and will be analyzed and prepared for sending to the citizen.
* `WAIT_FOR_SIGNATURE` — the signature request has been analyzed and can therefore be sent to the citizen.\
  This status remains until the citizen completes the signature process.
* `CANCELLED` — the signature request has been cancelled by the organization.\
  The citizen will no longer be able to proceed with the signature process.
* `WAIT_FOR_QTSP` — the citizen has completed the signature process and the documents are waiting to be signed by the Qualified Trust Service Provider.
* `SIGNED` — all documents included in the signature request have been signed.
* `REJECTED` — it was not possible to proceed with signing the documents.

{% hint style="warning" %}
If the signature request status is `REJECTED`, you will find the reason inside the `rejected_reason` field.

In this case, you must resolve the issues reported in `rejected_reason` and proceed with a new signature request.\
For example, you may need to repeat the document preparation procedure to correctly identify the signature fields.
{% endhint %}

{% hint style="info" %}
In some cases, when the error does not depend on the app but on an external issue — for example, a problem during the certificate issuance process — the user is advised to contact the organization by using the support email address.

It is therefore important, in order to provide users with support, to specify during the organization’s onboarding to Firma con IO a valid and monitored support email address.
{% endhint %}

### Get the list of created signature requests starting from a dossier

If you do not have a `signature_request_id` to query the endpoint:

```http
GET /api/v1/sign/signature-requests/{signature_request_id}
```

you can retrieve it starting from the `id` of the `dossier` associated with the signature request.

In this case, you must send an `HTTP GET` request to the endpoint:

```http
/api/v1/sign/dossiers/{dossier_id}/signature-requests
```

to obtain the list of signature requests associated with that dossier.

Once you have obtained the list, you can filter it by:

* `signer_id`
* `created_at`
* `status`

to obtain the `signature_request_id` needed to retrieve the details of the signature request, as described above.

{% hint style="info" %}
The endpoint described above is paginated and therefore returns, for each request, a limited number of results.

If the number of signature requests available for that dossier is greater than the number of items returned on the page, a `continuation_token` is returned.\
This token should be used as a “cursor” to browse the list in subsequent requests.

The `continuation_token` is stateless and “immutable”, so it can be stored in your system for later queries.
{% endhint %}

