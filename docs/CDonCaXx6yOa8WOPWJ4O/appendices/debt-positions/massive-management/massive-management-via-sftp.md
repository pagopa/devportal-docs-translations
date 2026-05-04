---

description: Procedure for the massive loading of debt positions on GPD
---

# 📥 Massive management via SFTP

## Access credentials

The first step to perform for activating the service is the request to create credentials for accessing the SFTP server.  
The request must be sent directly to the pagoPA-Core team at `pagopa-core@pagopa.it` , specifying the `name` and `last name` of the technical representative and an email to which the credentials will be sent.

{% hint style="info" %} It will soon be possible to obtain credentials autonomously by accessing the BackOffice-pagoPA portal {% endhint %}

Once the request is processed, the parameters will be sent for accessing the SFTP folder containing two subfolders, one for input for depositing the files containing the list of the debt positions to be loaded (ref. [Input trace specifications](input-trace-specifications.md)),and one for output where the platform will provide the outcome of the loading. 

Access credentials:

* `path` - connection string es. `pagopadweugpsgpdsasftp.\<USERNAME_INPUT>@pagopadweugpsgpdsasftp.blob.core.windows.net` 
* `password` - password for the user `USERNAME_INPUT`

Each partner/intermediary will therefore have a folder available, identified by the `fiscal code`/`VAT no.` and that has the following structure:

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

## File loading

To trigger the process for loading the debt positions, it is necessary to connect to the folder `/CF_BROKER_ID/CF_EC_ID/input` using the access credentials and upload one or more files in `JSON` format.

{% hint style="info" %} As indicated in the _Input trace specifications_ section, the constraint of univocality of the file name must be respected. {% endhint %}

 Uploading the file to the folder triggers the massive creation, update and deletion process that will have a variable duration based on the size of the loaded files.

Once massive loading is complete, a receipt will be produced for each file in the folder `/CF_BROKER_ID/CF_EC_ID/output`, the receipt is structured as follows:

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

* `uploadID` - univocal identifier of the loaded file (coincides with the file name in the case of SFTP)
* `responses` - the list of the loading outcomes grouped by state code and details.
* `requestIDs` - the list of the debt position IDs, e.g. `IUPD`
* `startTime` - Date and time of upload process completion
* `endTime` - Date and time of upload process completion