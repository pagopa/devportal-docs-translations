# 📃 Get signed documents

To retrieve the signed documents, you must make an `HTTP GET` request to the `GET /api/v1/sign/signature-requests/{signature_request_id}` endpoint, specifying the signature request ID and the necessary authentication headers.

The returned resource will contain the details of the **Signature Request.**

In this case, the `status` property of the signature request will be `SIGNED`, and for each `document`, there will be a `url` property from which to retrieve the URL to **download the signed file.**

{% hint style="warning" %}
The IO app will only keep signed documents for 90 days, to allow the user to view, download, and/or share the files.

The compliant storage of the document—and its eventual return to the user upon request—remains the responsibility of the entity. The QTSP (Qualified Trusted Service Provider) is required to keep the one-shot signature certificates for 20 years.
{% endhint %}

### Signed documents

The documents obtained will be **digitally signed** and can be verified with all qualified signature verification tools (for example, [postecert](https://vol.postecert.poste.it/verificatore/it?type=0), [acrobat reader DC](https://www.adobe.com/it/))

If [signature fields](il-processo-di-firma/preparare-i-documenti/identificare-i-campi-firma/) were inserted on the documents, a corresponding **graphic** will also be visible on them.

<figure><img src=".gitbook/assets/Screenshot 2023-05-02 alle 12.44.43.png" alt="" width="188"><figcaption></figcaption></figure>
