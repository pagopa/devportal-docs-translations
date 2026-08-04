---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone
---

# Integration via synchronous APIs

{% hint style="info" %}
For error handling, please refer to [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endhint %}

## Centralised Notices Archive

If Creditor Entities and/or their Technology Intermediaries and/or Technology Partners use integration via synchronous APIs, they are required to submit all debt position data to the Centralised Notices Archive (“ACA”), necessary to ensure the business continuity measures that must be adopted by payment system operators and critical providers of infrastructure or technical services in accordance with the obligations under art. 146 of the Consolidated Banking Act (T.U.B.). of supervision carried out by the Bank of Italy.

It is understood that, for the processing of personal data related to the Centralised Notices Archive service, PagoPa S.p.A. acts as an independent data controller, as the aforementioned law has subjected it to the surveillance obligations provided therein, thus entailing that the latter is responsible for achieving the aforementioned business continuity objective and determining the essential means of processing.

Each CE, when creating a new debt position, must register it on the ACA using one of the following methods:

- API via [Debt Position Management](../../appendix/Primitives/Creditor-Entity/REST-API/Centralized-Notices-Archive-(ACA).md) (GPD);&#x20;
- API [paCreatePosition](../../appendix/Primitives/Creditor-Entity/REST-API/Centralized-Notices-Archive-(ACA).md);
- [Bulk Management](../../appendix/Primitives/Creditor-Entity/REST-API/Centralized-Notices-Archive-(ACA).md) API.

### Conditions for exclusion from submitting positions to the ACA

It is possible to define exclusions from submitting positions to the ACA through the pagoPA backoffice.

The reason to which all exclusion cases must be attributed is exclusively related to the generation of the debt position at the direct request of the Debtor and at the same time as the payment (by way of non-exhaustive example, so-called _on the fly_ payments at the CE's frontend can be associated with this case). Different is the case of payment notices also generated from the CE's portal at the Debtor's request, but which can be printed and/or paid at a later time than the creation of the debt position and the related payment notice.

### Submission via Debt Position Management API

The APIs for creating and updating ACA positions are structurally analogous to the Debt Position Management (GPD) service. What changes is the base path of the service itself. In particular:

```http
https://api.platform.pagopa.it/aca/debt-positions-service
```

This difference is important for a correct categorisation of debt positions. For specific details, please refer to the API section of the DevPortal [https://developer.pagopa.it/pago-pa/api](https://developer.pagopa.it/pago-pa/api).

{% hint style="info" %}
An ACA-type debt position, to be payable in stand-in mode, must be in the VALID state.
{% endhint %}

### Submission via paCreatePosition

The [paCreatePosition](../../appendix/Primitives/Creditor-Entity/REST-API/Centralized-Notices-Archive-(ACA).md), thanks to its idempotency property, allows both inserting and updating the position.

For the procedure to enable the use of [paCreatePosition](../../appendix/Primitives/Creditor-Entity/REST-API/Centralized-Notices-Archive-(ACA).md), please refer to the chapter [connettivita.md](../../appendici/connettivita.md "mention").

<figure><img src="https://lh3.googleusercontent.com/Vd05z8M6URcVGBWcwhOOsV0cR_Nxo3q1v-yjJnWvYVqk8pQAn9zaTkMwhhSF4PcF3CwhRjdzxEHU8hQ3hH6tMXuIAJJxHjjx0EghovLtMQdtmE-fqxNhpA9mYHAHLM57vfKk6E76vKoDk2rYENBzoo4" alt=""><figcaption></figcaption></figure>

#### **Registration phase**

The request to create a new position reaches the ACA through the [paCreatePosition](../../appendix/Primitives/Creditor-Entity/REST-API/Centralized-Notices-Archive-(ACA).md), providing the following data as input:

- _paFiscalCode_: tax code of the CE that created the debt position;
- _entityType_: debtor type (F=natural person, G=legal person);
- _entityFiscalCode_: debtor's tax code;
- _entityFullName_: debtor's full name;
- _nav_: notice number;
- _iuv_: unique payment identifier;
- _amount_: amount (it is not possible to register a position with an amount equal to zero);
- _description_: reason for payment;
- _expirationDate_: expiry date of the debt position;
- _Iban_: transfer IBAN (optional);
- _postalIban_: postal transfer IBAN (optional);
- _switchToExpired_: flag to indicate whether the dueDate is binding or not;
- _payStandIn_: flag to indicate whether the position is payable in Stand-in mode or not.

ACA performs a semantic check and integrates the position information:

- the presence of all mandatory fields is verified;
- the existence of the CE on the pagoPA platform is verified;
- it retrieves the name of the CE;
- if the _Iban_ and _postalIban_ fields have not been sent, it retrieves the IBAN that will be used for crediting. The one configured by the CE via the pagoPA backoffice is sought, or, if this configuration is not present, the one with the most recent modification is used.

**Multi-beneficiary positions**

Multi-beneficiary debt positions must also be sent to the ACA, with the precautions described below.

The tax code of the Entity that created the debt position must be entered in the _fiscalCodePA_ field.

The data structure confirms that there is only one total amount communicated by the CE, which represents the sum of the amounts in the various transfers of the original debt position. This implies that the [stand-in.md](../../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in.md "mention") functionality, only and exclusively in the case of submission to the ACA via the [paCreatePosition](../../appendix/Primitives/Creditor-Entity/REST-API/Centralized-Notices-Archive-(ACA).md), cannot handle the division of amounts for a multi-beneficiary debt position, as the necessary information to manage such a payment structure is not provided.

{% hint style="info" %}
If a multi-beneficiary debt position is paid in [stand-in.md](../../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in.md "mention") mode, only and exclusively in the case of submission to the ACA via [paCreatePosition](../../appendix/Primitives/Creditor-Entity/REST-API/Centralized-Notices-Archive-(ACA).md), a single transfer of the total amount will be made to the CE that created the payment notice (the CE in the _fiscalCodePA_ field). It will be the latter's responsibility to ensure an accurate division of the payment shares among the other CEs listed as beneficiaries, in the manner it identifies in agreement with the secondary CEs.
{% endhint %}

**Update phase**

It is mandatory to update the debt position by calling the aforementioned [paCreatePosition](../../appendix/Primitives/Creditor-Entity/REST-API/Centralized-Notices-Archive-(ACA).md) API in the following cases:

- updating the amount;
- updating the status, to communicate the closure or cancellation of the position, by setting the value of the _amount_ field to zero;
- updating the expiry date.

The call must be made at the same time as the modification made in the CE's archive.

Each time the debt position is updated, the platform also automatically updates the credit IBAN information, retrieving it from the pagoPA backoffice.

**Cancellation phase**

In the case of a cancelled position or one replaced with a new one, it is mandatory to cancel the debt position by calling the aforementioned [paCreatePosition](../../appendix/Primitives/Creditor-Entity/REST-API/Centralized-Notices-Archive-(ACA).md) API.

The call must be made at the same time as the modification made in the CE's archive.

Cancellation can only be performed by setting the value of the _amount_ field to zero.

**Closure phase**

If a debt position is paid by the debtor through channels other than the pagoPA platform, it is necessary to call the aforementioned [paCreatePosition](../../appendix/Primitives/Creditor-Entity/REST-API/Centralized-Notices-Archive-(ACA).md) API to close it.

Closure can only be performed by setting the value of the _amount_ field to zero.

### Submission via bulk management

The ACA bulk management APIs are structurally analogous to the bulk Debt Position Management (GPD) service. What changes is the base path of the service itself, in particular:

```http
https://api.platform.pagopa.it/upload/aca/debt-positions-service/v2
```

This difference is important for a correct categorisation of debt positions. For specific details, please refer to the API section of the DevPortal [https://developer.pagopa.it/pago-pa/api](https://developer.pagopa.it/pago-pa/api).

## Debt position creation request phase

<figure><img src="https://lh6.googleusercontent.com/R8muVeVP_G3rvkywf5YA5e4oARyXm0EjzcqbRRLuKG4sY3KqpMscEwRnl-nWuYQ1btgpT1asT96DvGqUa59PsyW3277neqsPTx7AfajZthrEUkcqpk-hh4svPRYmZhmgNoq_wudBEy7pyig2IvFAhWQ" alt=""><figcaption></figcaption></figure>

In the ‘Spontaneous Payment at PSP’ case, the paDemandPaymentNotice is used to request the Creditor Entity to create the debt position based on the data of the specific service sent. The Creditor Entity sends back the information necessary to start the payment process, in particular:

- the notice number;
- the tax code of the Creditor Entity to be used in the activation phase;
- the amount.

During this phase, the debt position must remain in the open state.

Creditor Entities make the data of the specific service available through the Service Catalogue.

## Verification phase

<figure><img src="https://lh6.googleusercontent.com/QTpKY_38X1xZfCDMGchbWw4m9E9SrCgz3FxNqewCNi6prxrKR4lry7D39AVyMK2llNJR6KdaRN4B8EkbQBFsc3o_jhT4WYXliF24vviYxV9EgFUEcmYTQF5gUA4e-7RS4m5S3LDcbrbY7IW7r_71ILA" alt=""><figcaption></figcaption></figure>

The paVerifyPaymentNotice is used to request the Creditor Entity to verify the payment option identified by the notice number, which sends the payment information related to the notice number, in particular:

- amount;
- tax code of the beneficiary Creditor Entity;
- the allCCP parameter, which indicates whether the payment option can be associated with all postal current accounts or not
  - allCCP = true: the option can be associated with all postal current accounts;
  - allCCP = false: the option cannot be associated with all postal current accounts.

During this phase, the debt position must remain in the open state.

The Node performs a semantic check on the response:

- the paymentList must be present;
- the officeName tag is optional, all remaining tags are mandatory.

## Activation phase

<figure><img src="https://lh3.googleusercontent.com/EL6PukaZXmmDYTHBmjMvonObPGIWcm3s48ZO7EGdl8vSBjv1u4ECQyCKhRD0A5btX7BhXERln950nTMEITjeZmM2q8JCWTBAq_xBFgY-MWfrGPVe6mF_gD7BPm1beKi27tAAgK9ZsljL6emcH--m-Cc" alt=""><figcaption></figcaption></figure>

The payment activation request reaches the Creditor Entity through the paGetPayment. The Creditor Entity sends the payment amount and the data necessary for the transfer of the sum, in particular for each payment:

- partial amount;
- tax code of the beneficiary Creditor Entity;
- IBAN to be used for the transfer.

During this phase, the debt position must remain in the open state; it will be the Node's responsibility to inhibit other payment attempts for the same notice number.

The Node performs a semantic check on the response:

- it checks the correspondence between the paymentAmount value and the sum of all amounts present in the transfers;
- there must be at least one occurrence of transfer;
- semantic check of the IBANs in each transfer;
- the existence of the association between fiscalCodePA and IBAN on the Node is verified;
- in the case of a secondary Creditor Entity, it is verified that it is enabled on the Node.

## Sending the receipt phase <a href="#fase-invio-ricevuta" id="fase-invio-ricevuta"></a>

<figure><img src="https://lh5.googleusercontent.com/ZT9xut3UrmTGF6_pcCBZJlDp00T4W3KQ12NjsxjXOzywzPVYyZcCBfe3dHfbMSx_JEgAIWzcKhPLlll_jgq2vwVIQ4Jz7GHH9PomeNpPTE4Hi8r2uLyvya8-y2CXeykMVPujEX5eA96fnFdYYG-TXmE" alt=""><figcaption></figcaption></figure>

Through the paSendRT primitive, the receipt (ricevuta) is forwarded to the n Creditor Entities involved in the payment only if the payment has been made; the receipt is an object generated by the pagoPA platform.

In this phase, after receiving the receipt, the debt position must be set to the ‘closed’ state.

If the paSendRT times out/response error or if the CE is unreachable, a retry procedure is initiated to obtain a valid response from the recipient according to the logic in the following table.

| Number of attempts | Interval between each attempt |
| ------------------ | ----------------------------- |
| 48                 | 1 hour                        |

## Receipt retrieval

The service is intended for all Creditor Entities that, in special cases, need to retrieve a receipt that is not available within their system due to specific technical and/or process anomalies.

As will be made clear in the following sections, the service is not intended to be used during all phases of the payment process, but only in specific cases and particularly after receiving the settlement flows. To protect the nature of the service, throttling policies have been implemented that limit the number of n calls in a time interval t by the same Creditor Entity.

<figure><img src="https://lh4.googleusercontent.com/x871MBet02YyYODC_dW5WwseUIAFBo0oPtbrfXb00MRtmQW8G7EKwTPaBeHn3XubHyzd5Uh3hgiVHr5jU-eAQXYgg4I4IJ9EBzg7HpvIUK3Hsv5wvwz3fqGC5yOnEACic9s5atmWj59bgcfrqaMlylQ" alt=""><figcaption></figcaption></figure>

If a receipt is not available during the flow processing, the exception can be handled by attempting to retrieve it by invoking the getOrganizationReceipt service.

The following diagram shows a non-permitted use case instead

<figure><img src="https://lh5.googleusercontent.com/D-1q3_OqSug3EEB3S_poUzkA8NEQIWqTnIOaZI3jRjJREnEwcBIqbBHTSgS1UUjolKAKSDI_xXIo5Tb-sAqrO3IV2f9wpLXml83y1I7ZsimqL--HoGC-xldUv5aIFwjWD7Kw67u2javu6bxfr_8y5o8" alt=""><figcaption></figcaption></figure>

It is strictly forbidden to place the invocation of the getOrganizationReceipt service inside a loop indiscriminately without the occurrence of an error event that justifies its use.

The procedure for subscribing to the service is described in Subscribing to services with a subscription key.

After obtaining the subscription key, you can start using the service by invoking the getOrganizationReceipt API.

Below are the details of the service signature:

`GET /organizations/{organizationfiscalcode}/receipts/{iur}/paymentoptions/{iuv}`

As you can see, the service searches for the receipt using three parameters received as input as a filter by populating the following path parameters:

- organizationalfiscalcode: Creditor Entity tax code;
- iur: unique collection identifier, present within the settlement flow received from the pagoPA node by invoking the nodoChiediFlussoRendicontazione primitive;
- iuv: Unique payment identifier, also present within the settlement flow.

The service is not designed for massive use. To protect this characteristic, throttling policies have been activated that allow a maximum of 10 calls within 60 minutes for each service subscription.

For all technical details regarding the correct use of the service, you can refer to the specifications of the primitive in getOrganizationReceipt.
