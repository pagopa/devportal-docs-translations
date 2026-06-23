# Validating documents

Once the document is prepared, you can **verify that it has been prepared correctly**!

To do this, simply make an `HTTP POST` request with a `Content-Type` of `multipart/form-data` to the `/api/v1/sign/validate-document` endpoint, including the following in the request body:

1. the PDF document to be validated
2. a JSON document containing the previously identified signature fields, if any

#### Example

```http
POST /api/v1/sign/validate-document
Content-Type: multipart/form-data; boundary=----exampleBoundary

-----exampleBoundary
Content-Disposition: form-data; name="document"; filename="document.pdf";
Content-Type: application/pdf

DOCUMENT-DATA-HERE

-----exampleBoundary
Content-Disposition: form-data; name="fields"; filename="fields.json";
Content-Type: application/json

[
    {
        "clause": {
            "title": "clause 1",
            "type": "REQUIRED"
        },
        "attrs":{
          "coordinates":{
             "x":85,
             "y":676
          },
          "size":{
             "w":177,
             "h":77
          },
          "page":3
       }
    }
]
-----exampleBoundary--
```

#### Response

```json
{
   "is_valid": "false",
   "violations": [
      "(clause 1) incompatible coordinates: unable to find page 3 in the uploaded document"
   ]
}
```

{% hint style="info" %}
If the document was not prepared correctly, you will receive the reason and can modify the document so that it is ready for signing!
{% endhint %}
