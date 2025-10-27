# Changelog

### 3.9.1 (December 2024)

* Update of the data model described in [data-model.md](data-model.md "mention")
* Update of [quality-improvement.md](../payment-service-provider/quality-improvement.md "mention")

### 3.9.0 (November 2024)

* New functions for managing the payment options in [payment-of-a-notice-through-a-psp.md](../use-cases/payment-of-a-notice-through-a-psp.md "mention")
* Clarifications about behavior upon expiration of the **PAYMENT TOKEN** described in [checkout.md](../use-cases/payment-from-pagopa-touchpoint/checkout.md "mention")
* Clarifications about behavior upon expiration of the **PAYMENT TOKEN** described in [io-app.md](../use-cases/payment-from-pagopa-touchpoint/io-app.md "mention")
* Update of the [#condizioni-di-esclusione-dal-conferimento-delle-posizioni-sullaca](../creditor/integration-methods/integration-via-synchronous-api.md#condizioni-di-esclusione-dal-conferimento-delle-posizioni-sullaca "mention") in [integration-via-synchronous-api.md](../creditor/integration-methods/integration-via-synchronous-api.md "mention")
* Clarifications on the use of the **`dueDate`** field described in [best-practice.md](../creditor/integration-methods/best-practice.md "mention")
* Update of the selection logic of the PSP to use described in [offer-payment-systems-on-pagopa-s.p.a.-touchpoints.md](../payment-service-provider/integration-methods/offer-payment-systems-on-pagopa-s.p.a.-touchpoints.md "mention")
* Clarifications about behavior upon expiration of the **PAYMENT TOKEN** described in [best-practice.md](../payment-service-provider/integration-methods/best-practice.md "mention")
* Specifies the mandatory fields of the[ SendPaymentOutcome](../appendices/primitive.md#sendpaymentoutcome) in case of an **OK** response described in [#sendpaymentoutcome-ok](../payment-service-provider/integration-methods/best-practice.md#sendpaymentoutcome-ok "mention")
* Update of the **Payment notice print function** in [print-pagopa-notices.md](../creditor/print-pagopa-notices.md "mention")
* New functionality for managing the payment options for the creditor in [payment-options](../creditor/payment-options/ "mention")
* Update of the payment process described in [offer-payment-systems-on-pagopa-s.p.a.-touchpoints.md](../payment-service-provider/integration-methods/offer-payment-systems-on-pagopa-s.p.a.-touchpoints.md "mention")
* New functionality for managing the payment options for the PSP described in [payment-options](../payment-service-provider/payment-options/ "mention")
* Package management update [advanced-commission-management.md](../appendices/advanced-commission-management.md "mention")
* Addition of new primitives [verifyPaymentOptions](../appendices/primitive.md#verifypaymentoptions) and [paVerifyPaymentOptions](../appendices/primitive.md#paverifypaymentoptions) for managing the payment options
* StandIn flag correction in [#pspnotifypayment-version-2](../appendices/primitive.md#pspnotifypayment-versione-2 "mention")

### 3.8.0 (July 2024)

* [#condizioni-di-esclusione-dalla-funzionalita-stand-in](general-operation/stand-in.md#condizioni-di-esclusione-dalla-funzionalita-stand-in "mention")
* Insertion of details relating the communication for the [integration-method](../creditor/integration-methods/ "mention")
* Excel format removal from [collection-service-taxonomy.md](../creditor/collection-service-taxonomy.md "mention")
* [#condizioni-di-esclusione-dal-conferimento-delle-posizioni-sullaca](../creditor/integration-methods/integration-via-synchronous-api.md#condizioni-di-esclusione-dal-conferimento-delle-posizioni-sullaca "mention")
* Massive management of the debt positions [massive-management](../appendices/debt-positions/massive-management/ "mention")

### 3.7.1 (April 2024)

{% hint style="info" %} Patch version issued to resolve some elements of ambiguity indicated below {% endhint %}

* Correction of field names in [#fase-di-censimento](../creditor/integration-methods/integration-via-synchronous-api.md#fase-di-censimento "mention")
* Clarifications regarding the use of _code 8_ in the _Reporting Flows_ in [#sendpaymentoutcome-oltre-la-scadenza-del-payment-token](../payment-service-provider/integration-methods/best-practice.md#sendpaymentoutcome-oltre-la-scadenza-del-payment-token "mention")
* Removal of **Registration for services with a subscription key**
* Correction [#nuove-api-gestione-flussi-di-rendicontazione](../appendices/primitive.md#nuove-api-gestione-flussi-di-rendicontazione "mention")
* Correction [#pacreateposition](../appendices/primitive.md#pacreateposition "mention")
* Correction [input-trace-specifications.md](../appendices/debt-positions/massive-management/input-trace-specifications.md "mention") in [massive-management](../appendices/debt-positions/massive-management/ "mention")
* Correction [#creazione-di-una-posizione-debitoria](../appendices/debt-positions/available-operations.md#creazione-di-una-posizione-debitoria "mention")
* Correction [#lettura-di-una-lista-di-debt-positions-e-di-una-singola-posizione-debitoria](../appendices/debt-positions/available-operations.md#lettura-di-una-lista-di-debt-positions-e-di-una-singola-posizione-debitoria "mention")
* Correction [#aggiornamento-di-una-posizione-debitoria](../appendices/debt-positions/available-operations.md#aggiornamento-di-una-posizione-debitoria "mention")

### 3.7.0 (Mach 2024)

* Update [#richiesta-flussi-di-rendicontazione-da-parte-dellcreditor-1](general-operation/reporting-and-cashflow.md#richiesta-flussi-di-rendicontazione-da-parte-dellcreditor-1 "mention")
* Update [stand-in.md](general-operation/stand-in.md "mention")
* Removal of the Counterparty Table, Extended Counterparty Table and Credit Account Disclosure in [data-model.md](data-model.md "mention")
* Suitable references to the pagoPA back office in [registration.md](../creditor/registration.md "mention")
* Update [#archivio-centralizzato-avvisi](../creditor/integration-methods/integration-via-synchronous-api.md#archivio-centralizzato-avvisi "mention")
* Suitable references to the pagoPA back office in [start-up-process.md](../creditor/start-up-process.md "mention")
* Addition of a fault code description _PPT\_TOKEN\_SCADUTO\_KO_ in [#sendpaymentoutcome-oltre-la-scadenza-del-payment-token](../payment-service-provider/integration-methods/best-practice.md#sendpaymentoutcome-oltre-la-scadenza-del-payment-token "mention")
* Update [#fase-di-invio-dellesito-del-pagamento](../payment-service-provider/integration-methods/integration-via-api.md#fase-di-invio-dellesito-del-pagamento "mention")
* Update [#chiave-di-idempotenza](../payment-service-provider/integration-methods/best-practice.md#chiave-di-idempotenza "mention")
* Addition [quality-improvement.md](../payment-service-provider/quality-improvement.md "mention")
* Update [#api-recupero-url](../payment-service-provider/integration-methods/integration-for-payment-instrument-via-redirect.md#api-recupero-url "mention")
* Update [connectivity.md](../appendices/connectivity.md "mention")
* Added [massive management](../appendices/debt-positions/massive-management/ "mention") of the outstanding payments
* Updates APIs for the outstanding payments in [available-operations.md](../appendices/debt-positions/available-operations.md "mention")
* Addition of references to the new APIs provided by the pagoPA back office in [deprecated-functions.md](../appendices/deprecated-functions.md "mention")
* Suitable references to the pagoPA back office in the FAQ in [creditor.md](../faq/creditor.md "mention")
* Introduction in [fdr_organization.yaml](https://github.com/pagopa/pagopa-api/blob/SANP3.6.1/openapi/fdr_organization.yaml) and [fdr_psp.yaml](https://github.com/pagopa/pagopa-api/blob/SANP3.6.1/openapi/fdr_psp.yaml) of the code **4** = Payment managed in Stand In in `PaymentStatusEnum`

### 3.6.1 (January 2024)

{% hint style="info" %} Patch version issued to resolve some elements of ambiguity indicated below {% endhint %}

* Correction of [integration-for-payment-instrument-via-redirect.md](../payment-service-provider/integration-methods/integration-for-payment-instrument-via-redirect.md "mention")
* Correction of [fdr_organization.yaml](https://github.com/pagopa/pagopa-api/blob/SANP3.6.1/openapi/fdr_organization.yaml) and [fdr_psp.yaml](https://github.com/pagopa/pagopa-api/blob/SANP3.6.1/openapi/fdr_psp.yaml)
* Added [redirect.yaml](https://github.com/pagopa/pagopa-api/blob/SANP3.6.1/openapi/redirect.yaml)
* FAQ correction [#un-creditor-puo-censire-sul-sistema-pagopa-degli-iban-inerenti-dei-conti-correnti-a-lui-non-in](../faq/creditor.md#un-creditor-puo-censire-sul-sistema-pagopa-degli-iban-inerenti-dei-conti-correnti-a-lui-non-in "mention")

### 3.6.0 (November 2023)

* Update [#richiesta-flussi-di-rendicontazione-da-parte-dellcreditor-1](general-operation/reporting-and-cashflow.md#richiesta-flussi-di-rendicontazione-da-parte-dellcreditor-1 "mention")
* [stand-in.md](general-operation/stand-in.md "mention")
* Update [payment-at-frontend-of-creditor.md](../use-cases/payment-at-frontend-of-creditor.md "mention")
* [#interazione-con-send](../creditor/integration-methods/integration-via-asynchronous-api.md#interazione-con-send "mention")
* Update [#archivio-centralizzato-avvisi](../creditor/integration-methods/integration-via-synchronous-api.md#archivio-centralizzato-avvisi "mention")
* Update [#fase-invio-ricevuta](../creditor/integration-methods/integration-via-synchronous-api.md#fase-invio-ricevuta "mention")
* Update for the file format related to [collection-service-taxonomy.md](../creditor/collection-service-taxonomy.md "mention")
* Update [offer-payment-systems-on-pagopa-s.p.a.-touchpoints.md](../payment-service-provider/integration-methods/offer-payment-systems-on-pagopa-s.p.a.-touchpoints.md "mention") with incorporation of the content of the chapter _Payment instrument management_
* [standard-integration-for-payment-instruments.md](../payment-service-provider/integration-methods/standard-integration-for-payment-instruments.md "mention")
* [integration-for-paypal-payment-instrument.md](../payment-service-provider/integration-methods/integration-for-paypal-payment-instrument.md "mention")
* [integration-for-payment-instrument-via-redirect.md](../payment-service-provider/integration-methods/integration-for-payment-instrument-via-redirect.md "mention")
* Addition of the _standin_ field in [#pasendrt](../appendices/primitive.md#pasendrt "mention")
* Addition of the _paymentNote_ field in [#pasendrt-versione-2](../appendices/primitive.md#pasendrt-versione-2 "mention")
* Addition of the _companyName_ field in _transfer_ of [#pasendrt-versione-2](../appendices/primitive.md#pasendrt-versione-2 "mention")
* Addition of the _standin_ field in [verifypaymentnotice](../appendices/primitive.md#verifypaymentnotice "mention")
* Addition of the _standin_ field in [#verificabollettino](../appendices/primitive.md#verificabollettino "mention")
* Addition of the _standin_ field in [#activatepaymentnotice](../appendices/primitive.md#activatepaymentnotice "mention")
* Addition of the _standin_ field in [pspnotifypayment](../appendices/primitive.md#pspnotifypayment "mention")
* Addition of the _companyName_ field in _transfer_ of [#pspnotifypayment-versione-2](../appendices/primitive.md#pspnotifypayment-versione-2 "mention")
* Update [payments-at-frontend-of-creditor-in-asynchronous-mode.md](../appendices/debt-positions/payments-at-frontend-of-creditor-in-asynchronous-mode.md "mention")
* Update of [available-operations.md](../appendices/debt-positions/available-operations.md "mention")

### 3.5.0 (July 2023)

* Introduced [#richiesta-flussi-di-rendicontazione-da-parte-dellcreditor-1](general-operation/reporting-and-cashflow.md#richiesta-flussi-di-rendicontazione-da-parte-dellcreditor-1 "mention")
* Specific updates related to [integration-via-asynchronous-api.md](../creditor/integration-methods/integration-via-asynchronous-api.md "mention")
* Specific updates related to [#archivio-centralizzato-avvisi](../creditor/integration-methods/integration-via-synchronous-api.md#archivio-centralizzato-avvisi "mention")
* New [#primitive-deprecate](../appendices/deprecated-functions.md#primitive-deprecate "mention")
* Deprecation [#tabella-delle-controparti](../appendices/deprecated-functions.md#tabella-delle-controparti "mention")
* Deprecation [#informativa-conto-accredito](../appendices/deprecated-functions.md#informativa-conto-accredito "mention")
* [payments-at-frontend-of-creditor-in-asynchronous-mode.md](../appendices/debt-positions/payments-at-frontend-of-creditor-in-asynchronous-mode.md "mention")
* Specific openapi updates in [available-operations.md](../appendices/debt-positions/available-operations.md "mention")
* Compulsoriness of the tag _companyName_ in _data_ and in _transfer_ of [#pagetpayment-versione-2](../appendices/primitive.md#pagetpayment-versione-2 "mention") 
* Addition of the _companyName_ field in _transfer_ of [#activatepaymentnotice-versione-2](../appendices/primitive.md#activatepaymentnotice-versione-2 "mention")

### 3.4.1 (May 2023)

* Correction of the _sequence diagram_ in [payment-at-frontend-of-creditor.md](../use-cases/payment-at-frontend-of-creditor.md "mention")
* Correction related to the use of the [#bollettino-postale-pa](../creditor/integration-methods/best-practice.md#bollettino-postale-pa "mention")
* Correction related to the share of commissions to the creditor [advanced-commission-management.md](../appendices/advanced-commission-management.md "mention")
* Tag correction in _transferType_ of [#pagetpayment-versione-2](../appendices/primitive.md#pagetpayment-versione-2 "mention") with the addition of the _PAGOPA_ value
* Openapi correction [#getorganizationreceipt](../appendices/primitive.md#getorganizationreceipt "mention") for _mbdAttachment not required_
* Correction of the type of the _amount_ tag in the primitives [#paverifypaymentnotice](../appendices/primitive.md#paverifypaymentnotice "mention"), [#verifypaymentnotice](../appendices/primitive.md#verifypaymentnotice "mention") and [#verificabollettino](../appendices/primitive.md#verificabollettino "mention")
* Correction of the management of the _organizationFiscalCode_ field in the transfers of the **Outstanding Payments** in[available-operations.md](../appendices/debt-positions/available-operations.md "mention")

### 3.4.0 (March 2023)

* [#archivio-centralizzato-avvisi](../creditor/integration-methods/integration-via-synchronous-api.md#archivio-centralizzato-avvisi "mention") in the case of [integration-via-synchronous-api.md](../creditor/integration-methods/integration-via-synchronous-api.md "mention")
* [#ricezione-sincrona-della-ricevuta](../creditor/integration-methods/integration-via-asynchronous-api.md#ricezione-sincrona-della-ricevuta "mention") in the case of [integration-via-asynchronous-api.md](../creditor/integration-methods/integration-via-asynchronous-api.md "mention")
* Addition of _idCart_ and _allCCP_ for [integration-of-creditor-touch-point-with-checkout.md](../creditor/integration-methods/integration-of-creditor-touch-point-with-checkout.md "mention")
* Clarifications about the _paymentNote_ tag in [#fase-di-attivazione](../creditor/integration-methods/best-practice.md#fase-di-attivazione "mention")
* Use of the [#bollettino-postale-pa](../creditor/integration-methods/best-practice.md#bollettino-postale-pa "mention") in the case of [payment-at-frontend-of-creditor.md](../use-cases/payment-at-frontend-of-creditor.md "mention")
* Clarifications about [digital-stamp-duty.md](../creditor/digital-stamp-duty.md "mention")
* Addition [#backoffice-pagopa](../payment-service-provider/registration.md#backoffice-pagopa "mention") in [registration.md](../payment-service-provider/registration.md "mention") of the PSP
* Removed references to the whitelist in [#nodo-dei-pagamenti-client](../appendices/connectivity.md#nodo-dei-pagamenti-client "mention")
* Updated the definition of the _paymentNote_ tag in [#pagetpayment](../appendices/primitive.md#pagetpayment "mention")
* Addition of the _allCCP_ tag in [#activatepaymentnotice-versione-2](../appendices/primitive.md#activatepaymentnotice-versione-2 "mention") request
* Addition of the _transferCategory_ tag in [#activatepaymentnotice-versione-2](../appendices/primitive.md#activatepaymentnotice-versione-2 "mention") response
* Tags added for [advanced-commission-management.md](../appendices/advanced-commission-management.md "mention") in [#pspnotifypayment-versione-2](../appendices/primitive.md#pspnotifypayment-versione-2 "mention") request
* Addition of _idSoggettoServizio_ tag in [#pademandpaymentnotice](../appendices/primitive.md#pademandpaymentnotice "mention") request
* Corrected identificativoDominio tag in [#nodochiedielencoflussirendicontazione](../appendices/primitive.md#nodochiedielencoflussirendicontazione "mention")
* Added _idCart_ and _allCCP_ tags in [#ec-checkout-api](../appendices/primitive.md#ec-checkout-api "mention")
* Definition of the service for creating an ad-hoc payment option in [#pagamento-spontaneo](../appendices/debt-positions/data-model.md#pagamento-spontaneo "mention")
* Updated FSM in [#posizione-debitoria](../appendices/debt-positions/debt-position-statuses.md#posizione-debitoria "mention")
* Updated the publication methods in [#creazione-di-una-posizione-debitoria](../appendices/debt-positions/available-operations.md#creazione-di-una-posizione-debitoria "mention")
* Updated filter management in [#lettura-di-una-lista-di-debt-positions-e-di-una-singola-posizione-debitoria](../appendices/debt-positions/available-operations.md#lettura-di-una-lista-di-debt-positions-e-di-una-singola-posizione-debitoria "mention")
* Added operations for the [#ricevute-di-pagamento](../appendices/debt-positions/available-operations.md#ricevute-di-pagamento "mention") of outstanding payments
* Clarifications about the use of the _touchPoint in_ tag [physical.pos.md](../appendices/physical.pos.md "mention")

### 3.3.1 (February 2023)

* Corrected the link for the **Generation and printing of notices**
* Corrected the wsdl/xsd in [https://github.com/pagopa/pagopa-api/tree/SANP3.3.1](https://github.com/pagopa/pagopa-api/tree/SANP3.3.1)
* Corrected the [event-journal.md](../appendices/event-journal.md "mention") with inclusion of the storage times

### 3.3.0 (January 2023)

* Updated the flow in [life-cycle-of-a-payment.md](general-operation/life-cycle-of-a-payment.md "mention")
* Inserted a new page [overview-of-the-components.md](general-operation/overview-of-the-components.md "mention") that represents the macro application architecture of the pagoPA platform
* Expanded the description of the [service-catalog-md](../use-cases/spontaneous-payment-via-psp/service-catalog-md "mention")
* Update of the amount in [#title-text-2](../creditor/integration-methods/best-practice.md#title-text-2 "mention")
* Distinction between the integration methods for the creditors in [integration-via-synchronous-api.md](../creditor/integration-methods/integration-via-synchronous-api.md "mention") and [integration-via-asynchronous-api.md](../creditor/integration-methods/integration-via-asynchronous-api.md "mention")
* Correct the links to the guidelines in [generation-of-univocal-payment-identifier.md](../creditor/generation-of-univocal-payment-identifier.md "mention")
* Addition of the section [Payment channel data](https://app.gitbook.com/s/u6YdY319vyFX9MIvnKBa/dati-canale-pagamento "mention") in the [metadata dictionary](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/u6YdY319vyFX9MIvnKBa/ "mention")
* New method for selecting the PSP for amounts below 50 euros in [offer-payment-systems-on-pagopa-s.p.a.-touchpoints.md](../payment-service-provider/integration-methods/offer-payment-systems-on-pagopa-s.p.a.-touchpoints.md "mention")
* Added details regarding the non-modifiability of the outcome sent by the PSP in [#fase-di-invio-dellesito-del-pagamento](../payment-service-provider/integration-methods/integration-via-api.md#fase-di-invio-dellesito-del-pagamento "mention")
* Updated the procedure in [#nodo-dei-pagamenti-server](../appendices/connectivity.md#nodo-dei-pagamenti-server "mention")
* Updated the procedure in [#nodo-dei-pagamenti-client](../appendices/connectivity.md#nodo-dei-pagamenti-client "mention")
* [event-journal.md](../appendices/event-journal.md "mention")
* [print-pagopa-notices.md](../creditor/print-pagopa-notices.md "mention")
* [#recupero-receipt-per-enti-creditori](../creditor/integration-methods/integration-via-synchronous-api.md#recupero-receipt-per-enti-creditori "mention")
* [physical.pos.md](../appendices/physical.pos.md "mention")

### 3.2.2 (December 2022)

* Corrected the references to entities that can connect directly to the pagoPA platform in the section [connectivity.md](../appendices/connectivity.md "mention")
* Corrected the _denominazioneRicevente_ tag in _FlussoRiversamento\_1\_0\_4.xsd_

### 3.2.1 (November 2022)

* Added details for the correct use of the _transferCategory_ tag regarding the [digital-stamp-duty.md](../creditor/digital-stamp-duty.md "mention")
* Updated the swagger [#ec-checkout-api](../appendices/primitive.md#ec-checkout-api "mention")
* Updated the swaggers in [available-operations.md](../appendices/debt-positions/available-operations.md "mention")

### 3.2.0 (October 2022)

* Updated the specifications for [payment-at-frontend-of-creditor.md](../use-cases/payment-at-frontend-of-creditor.md "mention") and [integration-of-creditor-touch-point-with-checkout.md](../creditor/integration-methods/integration-of-creditor-touch-point-with-checkout.md "mention")
* [digital-stamp-duty.md](../creditor/digital-stamp-duty.md "mention")
* Added details for the correct use of the [#payment-token](../payment-service-provider/integration-methods/best-practice.md#payment-token "mention") in regard to the multiple invocation of the sendPaymentOutcome
* Modification of the [primitive.md](../appendices/primitive.md "mention") for Advanced Commission Management

### 3.1.0 (July 2022)

* [integration-via-asynchronous-api.md](../creditor/integration-methods/integration-via-asynchronous-api.md "mention")
* Clarifications regarding management of the idempotency key can be found in [#chiave-di-idempotenza](../payment-service-provider/integration-methods/best-practice.md#chiave-di-idempotenza "mention")
* Clarifications regarding management of the payment session can be found in [#payment-token](../payment-service-provider/integration-methods/best-practice.md#payment-token "mention")
* Addition of a reporting flow data structure example in [reporting-and-cashflow.md](general-operation/reporting-and-cashflow.md "mention")
* [advanced-commission-management.md](../appendices/advanced-commission-management.md "mention")
* [connectivity.md](../appendices/connectivity.md "mention")
* Clarifications regarding [spontaneous-payment-via-psp](../use-cases/spontaneous-payment-via-psp/ "mention")
* Addition of a data structure example in [service-catalog-md](../use-cases/spontaneous-payment-via-psp/service-catalog-md "mention")
* Addition of a data structure example in [car-property-tax.md](../use-cases/spontaneous-payment-via-psp/car-property-tax.md "mention")
* Specific use cases in [multi-beneficiary-taxes.md](../creditor/multi-beneficiary-taxes.md "mention")
* [account-reconciliation.md](../creditor/account-reconciliation.md "mention")
* [#title-text-1](../creditor/integration-methods/best-practice.md#title-text-1 "mention")

### 3.0.0 (May 2022)

* Major Release
* Complete revision of the layout
* Introduction of a new connection method
* Evolution of the payment at the creditor
* Evolution of the spontaneous payment at the PSP
* Evolution of the payment from the PagoPA Touchpoint
* Details on the method of publication of the commissions applied by the PSPs
* New quality indicators for registered entities

### 2.5.1 (January 2022)

* Changes to the support -email 
* Revision of the download of the reporting flow

{% embed url="https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.5.1/index.html" %}

### 2.5.0 (October 2021)

* Clarifications regarding cumulative repayments

### 2.4.3 (September 2021)

* _pspInviaCarrelloRPTCarte_ deprecated
* Introduction of the _pspNotifyPayment_ primitive for payments from the PagoPA Touchpoint.

### 2.4.2 (May 2021)

* Additional clarifications regarding the new payment process at the PSP
* Clarifications regarding the method of use of postal current accounts
* Revision of the payment options.
* Clarifications regarding the reporting flows

### 2.4.1 (April 2021)

* Some clarifications regarding the new payment process at the PSP
* PagoPA SpA single fee solution as a technological partner

### 2.4.0 (March 2021)

* New payment process at the PSP
* Deprecated functions eliminated

### 2.3.0 (November 2020)

* Data catalog request (deprecated) asynchronous RT push , revoke and cancel (deprecated);
* On-line payment with agreement code

### 2.2.0 (January 2020)

* Major release