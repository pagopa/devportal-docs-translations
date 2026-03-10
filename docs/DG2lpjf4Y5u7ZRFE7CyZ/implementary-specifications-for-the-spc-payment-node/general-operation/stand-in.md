# Stand In

## Stand In payment process

Stand In is a function that makes it possible to deal with a situation in which the creditor's systems are temporarily unavailable, so that the users can make payments for the pagoPA notices even in this situation, providing that the payment notice was correctly loaded into the Centralized Notice Archive (ACA).

<figure><img src="../../.gitbook/assets/image (53).png" alt=""><figcaption></figcaption></figure>

### Stand In functions for payments activated with a PSP

The Stand In function can be activated for [spontaneous-payment-via-a-psp](../../use-cases/spontaneous-payment-via-a-psp/ "mention"), in particular by retrieving the primitives [paVerifyPaymentNotice](../../appendices/primitive.md#pagetpayment) and [paGetPaymentV1/V2](../../appendices/primitive.md#pagetpayment-1).

If the creditor does not respond to the invocation of the cited primitives within the maximum specified time, as indicated in [https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/DG2lpjf4Y5u7ZRFE7CyZ/appendices/quality-indicators-for-registered-entities/psp-service-levels.md](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/DG2lpjf4Y5u7ZRFE7CyZ/appendices/quality-indicators-for-registered-entities/psp-service-levels.md "mention"), the platform automatically activates the Stand In function, then the SPC node verifies the presence of the payment notice in the Centralized Notice Archive (ACA).

If the payment notice was loaded correctly in ACA, the pagoPA platform returns to the user the amount of the notice that was previously communicated by the creditor to ADA and allows the user to make the payment.

In this case, the payment is managed in Stand In mode and at the end of the payment, the pagoPA platform sends the telematic receipt via [paSendRTV1/V2](../../appendices/primitive.md#pasendrt), using the standard modes detailed in [#fase-invio-ricevuta](../../creditor/integration-methods/integration-via-synchronous-api.md#fase-invio-ricevuta "mention").

However, if the payment notice is not present in ACA, the user is not able to make the payment due to the fact that pagoPA does not have the necessary data.

If there are cases to evaluate on an individual basis, it is possible to define exclusions from the Stand in function. This setting is available via the pagoPA backoffice for entire portions of APA or specifically for each individual debt position in the ACA, by setting the _payStandIn_ field to false.

The exclusion conditions will be defined by PagoPA S.p.A. according to an ad hoc process that will be defined in future versions of SANP.

### Tracing Stand In payments

To identify and distinguish between payments managed using the Stand In process from those managed using the “standard process”, the creditors and PSPs who want to receive this information must adjust their software to manage the new flag.

The standin flag is set in the primitives:

* [verifyPaymentNotice](../../appendices/primitive.md#verifypaymentnotice) response
* [verificaBollettino](../../appendices/primitive.md#verificabollettino) response
* [activatePaymentNoticeV1/V2](../../appendices/primitive.md#activatepaymentnotice) response
* [pspNotifyPaymentV1/V2](../../appendices/primitive.md#pspnotifypayment) request
* [paSendRTV1/V2](../../appendices/primitive.md#pasendrt) request.

This flag can be set to one of the following two values:

* _standin = true_: this value is assigned to payments that took place using the Stand In process;
* _standin = false_: this value is assigned to payments that took place with the standard process.

The use of this flag makes it possible to clearly distinguish between the two payment processes.

### Reporting of payments managed in Stand In mode

Payments that are successfully processed using the Stand In process are then paid to the IBAN of the creditor as previously configured. Furthermore, these payments are reported in the reporting flow with _outcome code 4_.

## Impacts on the creditor deriving from activation of Stand In mode

### Update of the debt position in the ACA

Creditors must keep the debt position updated in the ACA to guarantee that the amount is suitably updated and that the debt position is canceled. All the information for fulfilling this task is available in [#archivio-centralizzato-avvisi](../../creditor/integration-methods/integration-via-synchronous-api.md#archivio-centralizzato-avvisi "mention").

### Management of payment notices paid in Stand In mode

Creditors must be able to manage amounts that are potentially not updated with respect to the payment notices paid in Stand In mode because it may be necessary to manage payments with an amount that was not previously updated in the ACA.

### Management of payment notices paid in Stand In in case of assignment to the ACA using the paCreatePosition

The Stand In mechanism, which is activated when the creditor station is temporarily unavailable, recovers the information necessary for the payment in ACA.

The integration with ACA, only and exclusively in the case of assignment via the [paCreatePosition](../../appendices/primitive.md#pacreateposition), requires the communication of the following information:

* _fiscalCodePA_: fiscal code of the creditor who created the debt position;
* _entityUniqueIdentifierType_: type of debtor (F=physical person, G=legal person);
* _entityUniqueIdentifierValue_: fiscal code of the debtor;
* _fullName_: first and last name of the debtor;
* _IUV_: univocal payment identifier;
* _amount_: amount (it is not possible to register a position with an amount equal to zero);
* _description_: reason;
* _dueDate_: due date of the debt position;
* _Iban_: Repayment IBAN (optional);
* _postalIban_: Repayment postal IBAN (optional);
* _switchToExpired_: flag for indicating whether or not the dueDate is binding;
* _payStandIn_: flag for indicating whether or not the position can be paid in Stand In mode.

If the _Iban_ and _postalIban_ fields were not sent, the system autonomously obtains the IBAN that will be used during the credit phase. It uses the one configured by the creditor via the pagoPa backoffice or, if this configuration is not present, the one with the most recent change is used.

The data structure confirms that there is a single total amount communicated by the creditor, which represents the sum of the amounts present in the various transfers of the original debt position. This implies that the Stand In functionality, only and exclusively in the case of assignment to the ACA via the [paCreatePosition](../../appendices/primitive.md#pacreateposition), cannot manage the division of the amounts into a multi-beneficiary debt position, as the information necessary for the execution of this payment structure is not provided.

{% hint style="info" %}
If the payment of a multi-beneficiary debt position takes place in Stand In mode, only and exclusively in the case of assignment to the ACA via the \[paCreatePosition]\(../../appendices/primitive.md#pacreateposition), a single repayment is made to the creditor that created the payment notice for the total amount (creditor indicated in the \_fiscalCodePA)\_ field, and the latter will be responsible for ensuring the correct division of the payment amounts among the other creditors indicated as beneficiaries according to the methods identified in agreement with secondary creditors.
{% endhint %}

### Definition of a default IBAN for payments in Stand In mode

The creditors can define a default IBAN via the pagoPA backoffice for managing payments in Stand In mode, thereby guaranteeing the correct routing of the repayments.

If the creditor does not declare a default IBAN, the IBAN with the most recent change is used.

This information related to the default IBAN is used only if both _Iban_ and _postalIban_ fields have not been send via [paCreatePosition](../../appendices/primitive.md#pacreateposition).

In case of assignment to the ACA via the API for creating and updating the [Debtor Position Management](../../appendices/debt-positions/available-operations.md#creazione-di-una-posizione-debitoria) (GPD) service, the _iban_ field is mandatory for every transfer.

To access the detailed guide for entering the IBAN to be used during Stand In operations, please click on the [link](https://docs.pagopa.it/manuale-back-office-pagopa/).

## **Activation of Stand In mode**

The logic for activating the function is based on the primitives [paVerifyPaymentNotice](../../appendices/primitive.md#pagetpayment) and [paGetPaymentV1/V2](../../appendices/primitive.md#pagetpayment-1), of these primitives, the following faultCodes are monitored:

* _PPT\_STAZIONE\_INT\_PA\_IRRAGGIUNGIBILE_
* _PPT\_STAZIONE\_INT\_PA\_TIMEOUT_
* _PPT\_STAZIONE\_INT\_PA\_SERVIZIO\_NON\_ATTIVO_

The stations of the EC are constantly monitored in order to evaluate their availability. Stand In mode is activated if all the following conditions occur within a period of 30 minutes

**during nighttime hours**, between 10 pm and 6 am

* the stations have availability of less than 50%;
* the total traffic of payments managed by the station exceeds 10% of the total traffic on the NodoSPC;

**during daytime hours**, between 6 am and 10 pm

* the stations have availability of less than 50%;
* the total traffic of payments managed by the station exceeds 5% of the total traffic on the NodoSPC.

## **Deactivation of Stand In mode**

The logic for deactivating the function is based on the primitive [paVerifyPaymentNotice](../../appendices/primitive.md#pagetpayment), in particular, during the period in which the station is in Stand In mode, technical calls are made to check if the station is again operational.

For the technical calls to the primitive [paVerifyPaymentNotice](../../appendices/primitive.md#pagetpayment) a fake univocal payment identifier (IUV) (_000000000000000000_) is used in order to obtain _PAA\_PAGAMENTO\_SCONOSCIUTO,_ in case of a minimum percentage of 50% positive responses, the station's Stand In condition is disabled, restoring the normal operational configuration of the creditor's station.

## **Pricing for the managed debt position**

If the data is NOT communicated by the creditor to the ACA, Stand In mode cannot be activated. Therefore the creditor is charged a fixed amount of 5 cents for each payment for the management of the process outside of Stand In mode.

For the purposes of invoicing for Stand In mode, the creditor’s data provided when registering with the pagoPA platform is used, that is, the data available as of January 1, 2025 if the institution updated the data prior to that date.
