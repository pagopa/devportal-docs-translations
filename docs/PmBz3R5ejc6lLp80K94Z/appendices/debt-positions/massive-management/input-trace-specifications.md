---

description: \>-  
Specifications related to files to be used as input for massive loading services
---

# 📄 Input trace specifications

In order to trigger the massive loading process for the debt positions, regardless of the selected method it is necessary to create a file in “”JSON”” format according to the specifications provided below in the document.

## REST creation and update file trace

The template for the JSON file to be produced for massive loading via REST API is provided below:

```json
{
    "paymentPositions": [
      {
        "iupd": "string",
        "aca": false,
        "payStandIn": false,
        "type": "F",
        "fiscalCode": "string",
        "fullName": "string",
        "streetName": "string",
        "civicNumber": "string",
        "postalCode": "string",
        "city": "string",
        "province": "string",
        "region": "string",
        "country": "IT",
        "email": "string",
        "phone": "string",
        "switchToExpired": false,
        "companyName": "string",
        "officeName": "string",
        "validityDate": "YYYY-MM-DDThh:mm:ss.SSSZ",
        "paymentOption": [
          {
            "iuv": "string",
            "amount": 0,
            "description": "string",
            "isPartialPayment": true,
            "dueDate": "YYYY-MM-DDThh:mm:ss.SSSZ",
            "retentionDate": "YYYY-MM-DDThh:mm:ss.SSSZ",
            "fee": 0,
            "transfer": [
              {
                "idTransfer": "1",
                "amount": 0,
                "organizationFiscalCode": "00000000000",
                "remittanceInformation": "string",
                "category": "string",
                "iban": "IT0000000000000000000000000",
                "postalIban": "IT0000000000000000000000000",
                "stamp": {
                  "hashDocument": "string",
                  "stampType": "st",
                  "provincialResidence": "RM"
                },
                "transferMetadata": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "paymentOptionMetadata": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          }
        ]
      }
    ]
  }
```

## SFTP creation and update file trace

The template for the `JSON` file to be produced for massive loading via SFTP is provided below:

```json
{
    "operation": "CREATE|UPDATE",
    "paymentPositions": [
      {
        "iupd": "string",
        "aca": false,
        "payStandIn": false,
        "type": "F",
        "fiscalCode": "string",
        "fullName": "string",
        "streetName": "string",
        "civicNumber": "string",
        "postalCode": "string",
        "city": "string",
        "province": "string",
        "region": "string",
        "country": "IT",
        "email": "string",
        "phone": "string",
        "switchToExpired": false,
        "companyName": "string",
        "officeName": "string",
        "validityDate": "YYYY-MM-DDThh:mm:ss.SSSZ",
        "paymentOption": [
          {
            "iuv": "string",
            "amount": 0,
            "description": "string",
            "isPartialPayment": true,
            "dueDate": "YYYY-MM-DDThh:mm:ss.SSSZ",
            "retentionDate": "YYYY-MM-DDThh:mm:ss.SSSZ",
            "fee": 0,
            "transfer": [
              {
                "idTransfer": "1",
                "amount": 0,
                "organizationFiscalCode": "00000000000",
                "remittanceInformation": "string",
                "category": "string",
                "iban": "IT0000000000000000000000000",
                "postalIban": "IT0000000000000000000000000",
                "stamp": {
                  "hashDocument": "string",
                  "stampType": "st",
                  "provincialResidence": "RM"
                },
                "transferMetadata": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              }
            ],
            "paymentOptionMetadata": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          }
        ]
      }
    ]
  }
```

It is an array of debt positions, the fields were already described in the [Available operations](../available-operations.md) section of the SANP.

## REST deletion file trace

The template for the `JSON` file to be produced for massive deletion via the REST API is provided below:

```json
{
  "paymentPositionIUPDs": [
    "IUPD-string"
  ]
}
```

## SFTP deletion file trace

The template for the `JSON` file to be produced for massive deletion via SFTP is provided below:

```json
{
    "operation": "DELETE",
    "paymentPositionIUPDs": [
        "IUPD-string"
    ]
}
```

## File specifications

The file trace is common to both loading methods `API` and `SFTP`, however particular specifications have been defined below for both of them.

### SFTP (Secure File Transfer Protocol)

* **file format** ->  `JSON`
* **file dimensions** -> max `100MB` (circa 100K PD)
* **nomenclature** -> there are no constraints regarding file nomenclature, however the name must be univocal, it is not possible to load two files with the same name

### API

* **file format** ->  `ZIP` (only one `JSON` file in the archive)
* **file dimensions** -> max `5MB` (approx. 100K PD)
* **nomenclature** -> there are no constraints

{% hint style="info" %} In future versions of the platform, the file dimension limits will be increased. {% endhint %}