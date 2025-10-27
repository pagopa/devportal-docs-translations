# Creation of a signature request

To create the "Signature request", you must have the following available:

* the [**dossier_id**](../create-the-dossier.md)
* the [**signer_id**](recovery-of-citizen-id.md).

You can also indicated the **expiration date** of the signature request, which is the maximum time the user has to sign. If you decide to send the signature request [ via a message on IO](send-the-request-for-a-signature/via-message-on-io.md), the expiration date will be included in the body of the message that is sent to the user. 

{% hint style="info" %} If you do not indicate an expiration date, the signature request will be valid for **3 months**. {% endhint %}

#### Do you want to enter signature fields different than those in the dossier?

During the phase of creating a signature request, it may be necessary to have signature fields that are different than those in the relative dossier. You therefore have the option to enter **specific metadata for that signature request**, which will overwrite those of the dossier. `documents_metadata` is an **optional** field.

An example of a call to the endpoint is shown below: `POST /api/v1/sign/signature-requests`

With the message body: 

```json
{
  "dossier_id": "01GG4NFBCN4ZH8ETCCKX3766KX",
  "signer_id": "01GG4TG9FP2D3JPWFTAM0WEFTG",
  "expires_at": "2023-01-01T00:00:00.000Z",
  "documents_metadata": [
    {
      "title": "Sign 150 hour contract",
      "signature_fields": [
        {
          "attrs": {
            "coordinates": {
              "x": 112,
              "y": 510
            },
            "size": {
              "w": 140,
              "h": 40
            },
            "page": 0
          },
          "clause": {
            "title": "Sign contract",
            "type": "REQUIRED"
          }
        }
      ]
    }
  ]
}
```

{% hint style="warning" %} Pay attention to the **date format**!  
The date and time follow the standard **ISO 8601.** You can ALWAYS indicate the date and time in the **UTC time zone** or by indicating the difference with respect to the UTC with the standard notation ("Z" or "+hh:mm"). {% endhint %}

The response will be as follows:

```json
{
   "id": "01ARZ3NDEKTSV4RRFFQ69G5FAV",
   "dossier_id": "01GG4NFBCN4ZH8ETCCKX3766KX",
   "signer_id": "01GG4TG9FP2D3JPWFTAM0WEFTG",
   "status": "DRAFT",
   "created_at": "2022-12-05T00:00:00.000Z",
   "updated_at": "2022-12-05T00:00:00.000Z",
   "expires_at": "2023-01-01T00:00:00.000Z",
   "documents": [
      {
         "id": "01ARZ3NDEKTSV4RRFFQ69G5FAV",
         "status": "WAIT_FOR_UPLOAD",
         "metadata": {
            "title": "Sign 150 hour contract",
            "signature_fields": [
               {
                  "attrs": {
                     "coordinates": {
                        "x": 112,
                        "y": 510
                     },
                     "size": {
                        "w": 140,
                        "h": 40
                     },
                     "page": 0
                  },
                  "clause": {
                     "title": "Sign contract",
                     "type": "REQUIRED"
                  }
               }
            ]
         },
         "created_at": "2022-12-05T00:00:00.000Z",
         "updated_at": "2022-12-05T00:00:00.000Z"
      }
   ]
}
```

In the response you will receive the Signature request created with the associated `signature_request_id`.

{% hint style="warning" %} Take note of the `signature_request_id`: you will need it in the following phases. {% endhint %}