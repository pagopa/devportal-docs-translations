---
description: >-
  Procedure for the bulk upload, modification, and deletion of debt positions on GPD
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendices/debt-positions/bulk-management/bulk-management-via-rest-api
---

# ⚙️ Bulk management via REST API

The bulk management APIs allow the bulk upload, update, and deletion of debt positions. This process allows the Creditor Entity to manage a maximum of 100,000 debt positions by uploading a file that must not exceed 5 MB when compressed in ZIP format.

### Bulk creation

The bulk creation request for debt positions involves uploading a JSON file containing a list of debt positions. For specific file details, refer to the [DevPortal API](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie) section.

If the file is uploaded correctly and is valid, the response will return status code 202.&#x20;

To verify the correct upload of debt positions to the archive, you must use the information shared in the response header in the following fields:

- Location containing the relative URL to check the creation progress;
- Retry-After containing an estimate of when the creation process will be completed.

This API has a configured rate limit of 1 request per second per subscription-key.

### Bulk Update

The bulk update request requires uploading a JSON file with a structure similar to the one used during creation.&#x20;

Only recognized debt positions will be updated, while those not present in the archive will be ignored.

If the file is uploaded correctly and is valid, the response will return status code 202.&#x20;

To verify the correct update of debt positions in the archive, you must use the information shared in the response header in the following fields:

- Location containing the relative URL to check the creation progress;
- Retry-After containing an estimate of when the creation process will be completed.

This API has a configured rate limit of 1 request per second per subscription-key.

### Bulk Deletion

The bulk deletion request involves uploading a JSON file containing the list of IUPD to be deleted.

If the file is uploaded correctly and is valid, the response will return status code 202.&#x20;

To verify the correct deletion of debt positions from the archive, you must use the information shared in the response header in the following fields:

- Location containing the relative URL to check the creation progress;
- Retry-After containing an estimate of when the creation process will be completed.

This API has a configured rate limit of 1 request per second per subscription-key.

### Status of bulk operations

Two support APIs are available to monitor the progress of a bulk operation:

- **Processing identifier retrieval API:** provides the list of uploaded file identifiers (corresponding to a bulk operation) for which you can request the status or a report. The list has a depth of 60 days and is limited to a 7-day range.\
  If the _`hasMore`_ field in the response body is true, then the header contains the `x-continuation-token` field, which is needed to request the next page.
- **Status API:** returns the number of processed debt positions compared to the total number of submitted ones. The status can be retrieved for operations within 60 days. When the `processedItem` and `submittedItem` fields in the response match, then the processing is complete.\
  Furthermore, for greater detail, v2 includes the `operationStatus` field containing the processing status of the bulk operation, which can have the following meanings:
  - IN\_PROGRESS: the file has been acquired, but processing is still in progress;
  - COMPLETED: processing is finished and all bulk operations for the debt positions specified in the uploaded file were successful;
  - COMPLETED\_WITH\_WARNINGS: processing is finished, but not all bulk operations for the debt positions specified in the uploaded file were successful;
  - COMPLETED\_UNSUCESSFULLY: processing is finished, but all bulk operations for the debt positions specified in the uploaded file were unsuccessful;
- **Report API:** provides an aggregated summary of the status codes and status messages obtained during the interaction with the debt position management service.\
  The report can be retrieved for operations within 60 days.

These APIs have a configured rate limit of 10 requests per second per subscription-key.
