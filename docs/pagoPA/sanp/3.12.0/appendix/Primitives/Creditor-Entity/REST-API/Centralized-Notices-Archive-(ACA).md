---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/primitive/ente-creditore/api-rest/archivio-centralizzato-avvisi-aca
---

# Centralized Notices Archive (ACA)

<table data-full-width="true"><thead><tr><th>TABLE OF SECTIONS</th></tr></thead><tbody><tr><td><a href="archivio-centralizzato-avvisi-aca.md#pagetpayment">Insertion via the old paCreatePosition primitive</a></td></tr><tr><td><a href="archivio-centralizzato-avvisi-aca.md#inserimento-puntuale-con-api-di-gestione-posizioni-debitorie-gdp">Single insertion with Debt Position Management (GDP) API</a></td></tr><tr><td><a href="archivio-centralizzato-avvisi-aca.md#inserimento-massivo-con-api-di-gestione-posizioni-debitorie-gdp">Bulk insertion with Debt Position Management (GDP) API</a></td></tr></tbody></table>

### Insertion via the old paCreatePosition primitive <a href="#pagetpayment" id="pagetpayment"></a>

- ```
  [paCreatePosition](https://developer.pagopa.it/pago-pa/api/inserimento-posizioni-debitorie#/pago-pa/api/operations/newDebtPosition)
  ```

### Single insertion with Debt Position Management (GDP) API

- [Return the list of the organization debt positions. The due dates interval is mutually exclusive with the payment dates interval.](https://developer.pagopa.it/pago-pa/api/gpd-aca#/pago-pa/api/operations/getOrganizationDebtPositions)
- ```
  [The Organization creates a debt Position](https://developer.pagopa.it/pago-pa/api/gpd-aca#/pago-pa/api/operations/createPosition)
  ```
- ```
  [Return the details of a specific debt position](https://developer.pagopa.it/pago-pa/api/gpd-aca#/pago-pa/api/operations/getOrganizationDebtPositionByIUPD)
  ```
- ```
  [The Organization updates a debt position](https://developer.pagopa.it/pago-pa/api/gpd-aca#/pago-pa/api/operations/updatePosition)
  ```
- ```
  [The Organization deletes a debt position](https://developer.pagopa.it/pago-pa/api/gpd-aca#/pago-pa/api/operations/deletePosition)
  ```
- ```
  [The Organization invalidates a debt Position](https://developer.pagopa.it/pago-pa/api/gpd-aca#/pago-pa/api/operations/invalidatePosition)
  ```
- ```
  [The Organization publishes a debt Position](https://developer.pagopa.it/pago-pa/api/gpd-aca#/pago-pa/api/operations/publishPosition)
  ```
- ```
  [The Organization marks a payment option as already paid](https://developer.pagopa.it/pago-pa/api/gpd-aca#/pago-pa/api/operations/setPaymentOptionAsAlreadyPaid)
  ```

### Bulk insertion with Debt Position Management (GDP) API

- [The Organization creates the debt positions listed in the file.](https://developer.pagopa.it/pago-pa/api/gpd-aca?spec=GPD%20for%20ACA%20massive#/pago-pa/api/operations/update-debt-positions-by-file-upload)
- [The Organization updates the debt positions listed in the file.](https://developer.pagopa.it/pago-pa/api/gpd-aca?spec=GPD%20for%20ACA%20massive#/pago-pa/api/operations/create-debt-positions-by-file-upload)
- [The Organization deletes the debt positions based on IUPD listed in the file.](https://developer.pagopa.it/pago-pa/api/gpd-aca?spec=GPD%20for%20ACA%20massive#/pago-pa/api/operations/delete-debt-positions-by-file-upload)
- [Returns the debt positions upload report.](https://developer.pagopa.it/pago-pa/api/gpd-aca?spec=GPD%20for%20ACA%20massive#/pago-pa/api/operations/get-debt-positions-upload-report)
- [Returns the debt positions upload status.](https://developer.pagopa.it/pago-pa/api/gpd-aca?spec=GPD%20for%20ACA%20massive#/pago-pa/api/operations/get-debt-positions-upload-status)
- [Returns the list of fileIds for a broker/organization in the given date range (max 7 days).](https://developer.pagopa.it/pago-pa/api/gpd-aca?spec=GPD%20for%20ACA%20massive#/pago-pa/api/operations/get-debt-positions-fileids)
