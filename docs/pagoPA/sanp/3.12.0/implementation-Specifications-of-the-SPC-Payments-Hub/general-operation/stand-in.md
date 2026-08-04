---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in
---

# Stand In

## Stand In payment process

Stand In is a feature that addresses situations where EC systems are temporarily unavailable, allowing users to make pagoPA notice payments even in such circumstances, provided that the payment notice has been correctly uploaded to the Centralized Notices Archive (ACA).

<figure><img src="../../.gitbook/assets/image (53).png" alt=""><figcaption></figcaption></figure>

### Stand In functionality for payments initiated at a PSP

The Stand In feature can be activated for the [spontaneous-payment-at-psp](../../casi-duso/pagamento-spontaneo-presso-psp/ "mention") use case, specifically by calling the [paVerifyPaymentNotice](../../appendix/Primitives/Creditor-Entity/api-soap.md#paverifypaymentnotice) and [paGetPaymentV1/V2](../../appendix/Primitives/Creditor-Entity/api-soap.md#pagetpayment) primitives.

If the EC does not respond to the invocation of the aforementioned primitives within the maximum expected time, as indicated in [psp-service-levels.md](../../appendici/indicatori-di-qualita-per-i-soggetti-aderenti/livelli-di-servizio-psp.md "mention"), the platform automatically activates the Stand In feature, after which the NodoSPC checks for the presence of the payment notice in the ACA.

If the payment notice has been correctly uploaded to the ACA, the pagoPA platform returns the notice amount previously communicated by the EC to the ACA to the user and allows the user to proceed with the payment.

In this case, the payment is managed in Stand In mode and upon completion, the pagoPA platform sends the electronic receipt via the [paSendRTV1/V2](../../appendix/Primitives/Creditor-Entity/api-soap.md#pasendrt) primitive using the standard methods detailed in [#receipt-sending-phase](../../creditor-entity/integration-methods/integration-via-synchronous-APIs.md#fase-invio-ricevuta "mention").

However, if the payment notice is not present in the ACA, the user cannot proceed with the payment, as pagoPA does not have the necessary data.

### Exclusion conditions for the Stand In feature

It is possible to define exclusions from the Stand In feature via the pagoPA backoffice for entire portions of an APA or on a case-by-case basis for each individual debt position submitted to the ACA, by setting the _payStandIn_ field to false.

These exclusions are justified by the variability of the debt position's amount up until the time of payment.

The reasons to which all exclusion cases must be attributed fall under the following exhaustive list:

- surcharges for late fees and interest dependent on the payment date;
- surcharges for notification costs, which vary based on the notification date.

### Tracking of Stand In payments

To identify and distinguish payments handled via the Stand In process from those handled via the 'standard process', ECs and PSPs that wish to receive this information must adapt their software to manage the new flag.

The standin flag is populated in the following primitives:

- [verifyPaymentNotice](../../appendix/Primitives/psp/soap-api.md#activatepaymentnotice) response
- [verificaBollettino](../../appendix/Primitives/psp/soap-api.md#verificabollettino) response
- [activatePaymentNoticeV1/V2](../../appendix/Primitives/psp/soap-api.md#activatepaymentnotice-1) response
- [pspNotifyPaymentV1/V2](../../appendix/Primitives/psp/soap-api.md#pspnotifypayment) request
- [paSendRTV1/V2](../../appendix/Primitives/Creditor-Entity/api-soap.md#pasendrt) request.

The aforementioned flag can take one of the following two values:

- _standin = true_: this value is assigned to payments that have occurred through the Stand In process;
- _standin = false_: this value is assigned to payments that have occurred through the standard process.

The use of this flag allows for a clear distinction between the two payment processes.

### Reporting of payments managed in Stand In

Payments that are successfully processed via the Stand In process are subsequently settled to the EC's previously configured IBAN; furthermore, these payments are reported in the reconciliation flow with _outcome code 4_.

## Impacts for ECs resulting from the activation of Stand In

### Updating the debt position on ACA

ECs must keep the debt position updated on the ACA to ensure proper management of amount updates and cancellations of debt positions; all instructions for fulfilling this task are available in [#centralized-notices-archive](../../creditor-entity/integration-methods/integration-via-synchronous-APIs.md#archivio-centralizzato-avvisi "mention").

### Managing payment notices paid in Stand In

ECs must be able to handle potentially outdated amounts for payment notices paid in Stand In mode, as it may be necessary to manage payments whose amount has not been previously updated on the ACA.

### Managing payment notices paid in Stand In when submitted to the ACA via paCreatePosition

The Stand In mechanism, activated when the EC's station is temporarily unavailable, retrieves the necessary payment information from the ACA.

Integration with the ACA, only and exclusively when submitting via the [paCreatePosition](../../appendici/primitive/ente-creditore/api-rest/#pacreateposition) primitive, involves communicating the following information:

- _fiscalCodePA_: fiscal code of the EC that created the debt position;
- _entityUniqueIdentifierType_: debtor type (F=natural person, G=legal entity);
- _entityUniqueIdentifierValue_: debtor's fiscal code;
- _fullName_: debtor's first and last name;
- _IUV_: unique payment identifier;
- _amount_: amount (it is not possible to register a position with a zero amount);
- _description_: description;
- _dueDate_: due date of the debt position;
- _Iban_: settlement IBAN (optional);
- _postalIban_: postal settlement IBAN (optional);
- _switchToExpired_: flag to indicate whether the dueDate is binding or not;
- _payStandIn_: flag to indicate whether the position is payable in Stand In mode or not.

If the _Iban_ and _postalIban_ fields are not sent, the system automatically retrieves the IBAN that will be used for settlement. It uses the one configured by the EC via the pagoPA backoffice or, if such a configuration is not present, the most recently modified one.

The data structure confirms that there is only one total amount communicated by the EC, which represents the sum of the amounts in the various transfers of the original debt position. This implies that the Stand In functionality, only and exclusively when submitted to the ACA via the [paCreatePosition](../../appendici/primitive/ente-creditore/api-rest/#pacreateposition) primitive, cannot handle the splitting of amounts for a multi-beneficiary debt position, as the necessary information to execute such a payment structure is not provided.

{% hint style="info" %}
If a multi-beneficiary debt position is paid in Stand In mode, only and exclusively when submitted to the ACA via the [paCreatePosition](../../appendici/primitive/ente-creditore/api-rest/#pacreateposition) primitive, a single settlement of the total amount will be made to the EC that created the payment notice (the EC in the _fiscalCodePA_ field). It will be the latter's responsibility to ensure an accurate split of the payment shares among the other ECs listed as beneficiaries, using methods determined in agreement with the secondary ECs.
{% endhint %}

### Defining a default IBAN for Stand In payments

ECs can define a default IBAN via the pagoPA backoffice for managing payments in Stand In mode, ensuring the correct routing of settlements.

If the EC does not declare a default IBAN, the IBAN with the most recent modification date is used.

This default IBAN information is used only if both the _Iban_ and _postalIban_ fields have not been sent via the [paCreatePosition](../../appendici/primitive/ente-creditore/api-rest/#pacreateposition) primitive.

When submitting to the ACA via the creation and update APIs of the [Debt Position Management](../../appendix/Debt-Positions/Available-operations.md#creazione-di-una-posizione-debitoria) (GPD) service, the _iban_ field of each transfer is mandatory.

To access the detailed guide on entering the IBAN to be used during Stand In operations, please click the following[ link](https://docs.pagopa.it/manuale-back-office-pagopa/).

## **Activating Stand In**

The logic for activating the feature is based on the [paVerifyPaymentNotice](../../appendix/Primitives/Creditor-Entity/api-soap.md#paverifypaymentnotice) and [paGetPaymentV1/V2](../../appendix/Primitives/Creditor-Entity/api-soap.md#pagetpayment) primitives; the following faultCodes for these primitives are monitored:

- _PPT\_STAZIONE\_INT\_PA\_IRRAGGIUNGIBILE_
- _PPT\_STAZIONE\_INT\_PA\_TIMEOUT_
- _PPT\_STAZIONE\_INT\_PA\_SERVIZIO\_NON\_ATTIVO_

The EC stations are constantly monitored to assess their availability. Stand In mode is activated if all the following conditions occur within a 30-minute interval

**during night hours**, between 22:00 and 6:00

- the stations show an availability of less than 50%;
- the total payment traffic handled by the station exceeds 10% of the total NodoSPC traffic;

**during daytime hours**, between 6:00 and 22:00

- the stations show an availability of less than 50%;
- the total payment traffic handled by the station exceeds 5% of the total NodoSPC traffic.

## **Deactivating Stand In**

The logic for deactivating the feature is based on the [paVerifyPaymentNotice](../../appendix/Primitives/Creditor-Entity/api-soap.md#paverifypaymentnotice) primitive. Specifically, while the station is in Stand In mode, technical calls are made to verify the restoration of the station's operations.

For technical calls to the [paVerifyPaymentNotice](../../appendix/Primitives/Creditor-Entity/api-soap.md#paverifypaymentnotice) primitive, a fictitious IUV (_000000000000000000_) will be used in order to obtain _PAA\_PAGAMENTO\_SCONOSCIUTO_. If there is a minimum of 50% positive responses, the station's Stand In condition is disabled, restoring the normal operational configuration of the EC's station.

## **Pricing per managed debt position**

If the data is NOT communicated by the EC to the ACA, Stand In cannot be activated. Therefore, the EC will be charged a fixed amount of 5 cents for each payment, which covers the cost of managing the process outside of Stand In.

For Stand In billing purposes, the EC registry information provided upon joining the pagoPA platform is valid, or that which is current as of January 1, 2025, in the event the Entity updates said registry information before that date.
