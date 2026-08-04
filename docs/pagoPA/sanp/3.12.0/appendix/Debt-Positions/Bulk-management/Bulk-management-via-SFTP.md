---
description: Procedure for the bulk upload of debt positions to GPD
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/posizioni-debitorie/gestione-massiva/gestione-massiva-tramite-sftp
---

# 📥 Bulk management via SFTP

## Access credentials

The first step to activate the service is to request the creation of credentials for access to the SFTP server.\
The request must be sent directly to the pagoPA-Core team using the `pagopa-core@pagopa.it` mailbox, specifying the `first name` and `last name` of the technical contact and an email to which the credentials will be sent.

{% hint style="info" %}
Soon it will be possible to obtain the credentials autonomously by accessing the BackOffice-pagoPA portal
{% endhint %}

Once the request is processed, the parameters for accessing the SFTP folder will be sent to the indicated email. This folder contains two subfolders: one for input, where files containing the list of debt positions to be uploaded are to be deposited (ref. [Input file specifications](Input-layout-specifications.md)), and one for output, where the platform will provide the result of the upload.

Access credentials:

- `path` - connection string, e.g. `pagopadweugpsgpdsasftp.<USERNAME_INPUT>@pagopadweugpsgpdsasftp.blob.core.windows.net`
- `password` - password for the `USERNAME_INPUT` user

Each partner/broker will therefore have a folder identified by their `tax code`/`VAT number` with the following structure:

```
/CF_BROKER_01
    | CF_EC_01
        | /input
        | /output
    | CF_EC_02
        | /input
        | /output
/CF_BROKER_02
    | CF_EC_03
        | /input
        | /output
```

## File upload

To trigger the debt position upload process, you need to connect to the `/CF_BROKER_ID/CF_EC_ID/input` folder using the relevant access credentials and upload one or more files in `JSON` format.

{% hint style="info" %}
As stated in the _Input file specifications_ section, the file name uniqueness constraint must be respected.
{% endhint %}

Uploading files to the folder triggers the bulk creation, update, and deletion process, which will have a variable duration depending on the size of the uploaded files.

Once the bulk upload is complete, a receipt is generated for each file in the `/CF_BROKER_ID/CF_EC_ID/output` folder. The receipt is structured as follows:

```json
{
  "uploadID": "string",
  "processedItem": "integer",
  "submittedItem": "integer",
  "responses": [
    {
      "statusCode": "integer",
      "statusMessage": "string",
      "requestIDs": [
        "string"
      ]
    }
  ],
  "startTime": "string($date-time)",
  "endTime": "string($date-time)"
}
```

- `uploadID` - unique identifier of the uploaded file (coincides with the file name in the case of SFTP)
- `responses` - the list of upload results grouped by status code and detail.
- `requestIDs` - the list of debt position identifiers, i.e., `IUPD`
- `startTime` - Start date and time of the upload process
- `endTime` - Completion date and time of the upload process
