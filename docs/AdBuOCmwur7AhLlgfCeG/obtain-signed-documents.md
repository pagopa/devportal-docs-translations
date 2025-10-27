# 📃 Obtain the signed documents

To recover the signed documents, it is necessary to make a request `HTTP GET` to the endpoint `GET /api/v1/sign/signature-requests/{signature_request_id}`, specifying the ID of the signature request and the headers necessary for authentication.

The returned resource will contain the details of the **Signature Request.**

In this case, the `status` property of the signature request will the `SIGNED` and for each `document` there will be the `url` property from which to recover the url for **downloading the signed file.**

{% hint style="warning" %} The IO app will keep the signed documents for only 90 days, to allow the user to view, download and/or share the files. 

The legal retention period - and the possible return to the user upon request - is the responsibility of the institution. The QTSP (Qualified Trusted Service Provider) is required to keep the one shot signature certificates for 20 years.  {% endhint %}

### Signed documents

The obtained documents will be **signed digitally** and can be verified using all the qualified signature verification instruments (such as [postecert](https://vol.postecert.poste.it/verificatore/it?type=0), [acrobat reader DC](https://www.adobe.com/it/))

If [signature fields](the-signature-process/prepare-the-documents/identify-the-signature-fields/) were added to the documents, also a corresponding **graphic** is shown next to them. 

<figure><img src=".gitbook/assets/Screenshot 2023-05-02 alle 12.44.43.png" alt="" width="188"><figcaption></figcaption></figure>

