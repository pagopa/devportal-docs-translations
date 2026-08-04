---
description: >-
  Specifications for the file to be used as input for bulk upload services
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/posizioni-debitorie/gestione-massiva/specifiche-tracciato-di-input
---

# 📄 Input layout specifications

To trigger the bulk upload process for debt positions, regardless of the chosen method, you must create a `JSON` file according to the specifications provided below in this document.

## File specifications

The file layout is the same for both `API` and `SFTP` upload methods; however, specific requirements for each are described below.

### SFTP

- **file format ->** `JSON`
- **file size ->** max `100MB` (approx. 100K debt positions)
- **naming ->** there are no constraints on file naming; however, the name must be unique. It is not possible to upload two or more files with the same name

### API

- **file format ->** `ZIP` (a single `JSON` file inside the archive)
- **file size ->** max `5MB` (approx. 100K debt positions)
- **naming ->** no constraints

## SFTP creation and update file layout

The template for the `JSON` file to be created for bulk upload via SFTP is shown below:

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

The `JSON` format used via SFTP differs from the `JSON` format used via API only in the addition of the desired operation before `paymentPositions`, as follows:&#x20;

```json
  {
    "operation": "CREATE|UPDATE",
    "paymentPositions": [
      {
        ...
        ]
      }
  }
```

The following example shows the difference between the SFTP and REST API formats:&#x20;

**SFTP**

```
{
   "operation": "CREATE",
   "paymentPositions": [
     {
       "iupd": "<IUP#1>",
       ...
       ]
     }
}

```

&#x20;**REST API**

```
POST
{
   "paymentPositions": [
     {
       "iupd": "<IUP#1>",
        ...
        ]
     }
}
```

This implies a correspondence between the `POST` and `CREATE` operations, and between the `PUT` and `UPDATE` operations.

## SFTP deletion file layout

Similarly, for deleting debt positions via SFTP, the template for the `JSON` file to be created must specify the `DELETE` operation:

```json
{
    "operation": "DELETE",
    "paymentPositionIUPDs": [
        "IUPD-string"
    ]
}
```

- **file format** -> `ZIP` (a single `JSON` file inside the archive)
- **file size** -> max `5MB` (approx. 100K debt positions)
- **naming** -> no constraints

## REST file layout

For REST file layouts, please refer to the API section of the [DevPortal](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie).&#x20;
