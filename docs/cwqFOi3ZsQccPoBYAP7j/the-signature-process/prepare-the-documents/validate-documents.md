# Validate the documents

Once you have prepared the document, you can **check that it was prepared correctly**! 

To do so, simply make a request `HTTP POST` with `Content-Type` `multipart/form-data` to the endpoint `/api/v1/sign/validate-document` entering the following in the body of the request:

1. the PDF document to be validated
2. a JSON document containing the previously identified signature fields, if present

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

{% hint style="info" %} If the document was not prepared correctly, you will receive the reason and you can change the document so it is ready for the signature!  {% endhint %}