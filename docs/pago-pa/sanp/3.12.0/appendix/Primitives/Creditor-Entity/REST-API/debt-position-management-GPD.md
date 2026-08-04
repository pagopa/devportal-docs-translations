---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/primitive/ente-creditore/api-rest/gestione-posizioni-debitorie-gpd
---

# Debt Position Management (GPD)

{% hint style="warning" %}
All the operations indicated are segregated by the creditor entity's fiscal code (`organizationfiscalcode`).

In case of intermediation, it is possible to associate from _1_ to _n_ fiscal codes of intermediated entities with the intermediary's _subscription key_. This allows intermediaries to use a single _subscription key_ to invoke the APIs on behalf of all intermediated entities. These authorisations must be requested from PagoPA when creating the _subscription key_ or at a later time.

The _subscription keys_ and related authorisations are segregated by _UAT/PROD_ environment.
{% endhint %}

<table data-full-width="true"><thead><tr><th>TABLE OF SECTIONS</th></tr></thead><tbody><tr><td><a href="gestione-posizioni-debitorie-gpd.md#pagetpayment">Creation/Update/Deletion/Read</a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#flussi-di-rendicontazione-deprecated">Reporting flows - DEPRECATED </a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#inserimento-modifica-cancellazione-lettura-gestione-massiva-v1">Creation/Update/Deletion/Read - Bulk Management v1</a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#inserimento-modifica-cancellazione-lettura-gestione-massiva-v2">Creation/Update/Deletion/Read - Bulk Management v2</a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#recupero-ricevute">Receipt retrieval</a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#inserimento-modifica-cancellazione-lettura--opzioni-di-pagamento">Creation/Update/Deletion/Read + Payment Options</a></td></tr></tbody></table>

### Creation/Update/Deletion/Read <a href="#pagetpayment" id="pagetpayment"></a>

- ​[Return the list of the organization debt positions. The due dates interval is mutually exclusive with the payment dates interval.](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/getOrganizationDebtPositions)​
- ​[The Organization creates a debt Position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/createPosition)

{% hint style="warning" %}
The `toPublish` _query parameter_ allows you to automatically publish a debt position during creation. By setting this parameter to `true` and simultaneously setting the `validityDate` field to `null`, the debt position will go directly to the VALID state, ready to be paid.
{% endhint %}

- [The Organization updates the IBANs of every updatable payment](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/updateTransferIbanMassive)​​[option's transfers](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/updateTransferIbanMassive)​
- ​[Return the details of a specific debt position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/getOrganizationDebtPositionByIUPD)​
- ​[The Organization updates a debt position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/updatePosition)​
- ​[The Organization delete a debt Position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/deletePosition)​
- ​[The Organization invalidate a debt Position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/invalidatePosition)​
- ​[The Organization publish a debt Position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/publishPosition)

{% hint style="warning" %}
It is important to pay particular attention to the `notificationFee` field, which contains the notification fees for the debt position. This field is managed exclusively by the Notification Platform, and any amount is automatically added by the GPD system to the amount of the debt positions.\
Therefore, when updating the `amount` of one of the `transfers` within a `paymentOption`, the Creditor Entity must not take into account the value present in the `notificationFee` field.
{% endhint %}

### Reporting flows - DEPRECATED&#x20;

{% hint style="warning" %}
These APIs will be deprecated on **31/12/2026** and permanently decommissioned starting from **31/07/2027.**
{% endhint %}

- [getFlowList](https://developer.pagopa.it/pago-pa/api/gpd-fdr#/pago-pa/api/operations/get-organizations-organizationid-reportings)
- [getFlow](https://developer.pagopa.it/pago-pa/api/gpd-fdr#/pago-pa/api/operations/get-organizations-organizationid-reportings-flowid-date-date)

### Creation/Update/Deletion/Read - Bulk Management v1

- ​[Returns the debt positions upload status](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie#/pago-pa/api/operations/get-debt-positions-upload-status)​
- ​[Returns the debt positions upload report](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie#/pago-pa/api/operations/get-debt-positions-upload-report)​
- ​[Returns the list of fileIds for a broker/organization in the given date range (max 7 days)](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie#/pago-pa/api/operations/get-debt-positions-fileids)​
- ​[The Organization creates the debt positions listed in the file](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie#/pago-pa/api/operations/update-debt-positions-by-file-upload)​
- ​[The Organization updates the debt positions listed in the file](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie#/pago-pa/api/operations/create-debt-positions-by-file-upload)​
- ​[The Organization deletes the debt positions based on IUPD listed in the file](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie#/pago-pa/api/operations/delete-debt-positions-by-file-upload)

### Creation/Update/Deletion/Read - Bulk Management v2

- ​[Returns the debt positions upload report](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie?spec=v2#/pago-pa/api/operations/get-debt-positions-upload-report)​
- ​[Returns the debt positions upload status](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie?spec=v2#/pago-pa/api/operations/get-debt-positions-upload-status)​
- ​[Returns the list of fileIds for a broker/organization in the given date range (max 7 days)](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie?spec=v2#/pago-pa/api/operations/get-debt-positions-fileids).
- ​[The Organization creates the debt positions listed in the file](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie?spec=v2#/pago-pa/api/operations/update-debt-positions-by-file-upload)​
- ​[The Organization updates the debt positions listed in the file](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie?spec=v2#/pago-pa/api/operations/create-debt-positions-by-file-upload)​
- ​[The Organization deletes the debt positions based on IUPD listed in the file](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie?spec=v2#/pago-pa/api/operations/delete-debt-positions-by-file-upload)

### Receipt retrieval

- ​[Return the list of the organization receipts](https://developer.pagopa.it/pago-pa/api/gpd-recupero-receipt#/pago-pa/api/operations/getOrganizationReceipts)​
- ​[Return the details of a specific receipt](https://developer.pagopa.it/pago-pa/api/gpd-recupero-receipt#/pago-pa/api/operations/getReceiptByIUV)

### Creation/Update/Deletion/Read + Payment Options

- ​[Return the details of a specific debt position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie?spec=GPD%20con%20gestione%20opzioni%20di%20pagamento#/pago-pa/api/operations/getOrganizationDebtPositionByIUPD)​
- ​[The Organization updates a debt position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie?spec=GPD%20con%20gestione%20opzioni%20di%20pagamento#/pago-pa/api/operations/updatePosition)​
- ​[The Organization deletes a debt position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie?spec=GPD%20con%20gestione%20opzioni%20di%20pagamento#/pago-pa/api/operations/deletePosition)​
- ​[Return the list of the organization debt positions. The due dates interval is mutually exclusive with the payment dates interval](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie?spec=GPD%20con%20gestione%20opzioni%20di%20pagamento#/pago-pa/api/operations/getOrganizationDebtPositions)​
- ​[The Organization creates a debt Position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie?spec=GPD%20con%20gestione%20opzioni%20di%20pagamento#/pago-pa/api/operations/createPosition)​
- ​[The Organization publish a debt Position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie?spec=GPD%20con%20gestione%20opzioni%20di%20pagamento#/pago-pa/api/operations/publishPosition)

