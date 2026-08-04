---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/specifiche-attuative-del-nodo-dei-pagamenti-spc/changelog
---

# Changelog

### 3.12.0 (May 2026)

### 🚀 New: Physical POS Integration

The simplification of POS terminal integration for Creditor Entities (EC) has begun, targeting physical counters such as healthcare CUPs.

- **Standardised Workflow**: Introduced an integration method via the pagoPA POS Gateway that abstracts the complexity of the PSP layer, ensuring traceable and secure transactions.
- **Session Management**: Implemented an asynchronous payment trigger mechanism with centralised timeout management and push notifications (callbacks) of the outcome to the EC's management software.
- **Mandatory Reconciliation**: A session monitoring process has been defined to ensure consistency between the financial authorisation on the terminal and the status in the central system.
- **Optimised UX**: Recommendation to decouple the citizen experience from the outcome of the Hub-PSP communication to reduce waiting times at the counter.\
  [Payment at a physical POS installed on the Creditor Entity's premises](../appendici/pagamento-presso-pos-fisico-installato-presso-i-locali-dellente-creditore/)

### ✨ New Spontaneous Payments

Expansion of immediate payment services without a pre-existing notice.

- **CUP (Single Property Levy)**: Introduced dedicated spontaneous payment methods.\
  [Single Property Levy](../use-cases/spontaneous-payment-at-a-psp/single-patrimonial-fee.md)

### 🛠️ Technical Optimisations and Integrations

- **Checkout Integration**: A new redirect has been added to improve the landing experience from EC touchpoints to the pagoPA Checkout.\
  [Payment at the EC's frontend](../use-cases/payment-at-the-ec's-frontend.md)\
  [Checkout](../use-cases/payment-from-a-PagoPA-Touchpoint/checkout.md)
- **SEPA Request To Pay (RTP)**: Updated the SRTP service for ECs and redefined the debt positions compatible with payment requests.\
  [SEPA RTP - Request To Pay](../creditor-entity/sepa-rtp-request-to-pay.md)\
  [SRTP Service Integration for ECs](../appendix/SRTP-Service-Integration/EC.md)
- **Debt Position Management (GPD)**: Implemented new archiving methods to optimise database performance.\
  [Archiving](../appendix/Debt-Positions/Archiving.md)
- **Reporting and Cashflow**: Increased rate limits for new reporting flows and added a SOAP/REST comparison section for date management.\
  [Reporting and Cashflow](general-operation/reporting-and-cashflow.md)\
  [Available Operations](../appendix/Debt-Positions/Available-operations.md)

### 3.11.0 (February 2026)

- Reporting and Cashflow: New REST reporting flows described\
  [Reporting and Cashflow](general-operation/reporting-and-cashflow.md)
- @e.bollo 2.0 Service: Application scenarios modified\
  [@e.bollo 2.0 Service](../ente-creditore/bollo-digitale/servizio-e.bollo-2.0/)
- Debt Position Management: Updated debt position data model for V1 and V3\
  [Data Model V1](../appendix/Debt-Positions/Data-model-v1.md)\
  [Data Model V3](../appendix/Debt-Positions/v3-Data-Model.md)
- Debt Position Management: Updated FSM for V1 and V3\
  [Debt position states V1](../appendix/Debt-Positions/Debtor-Position-States-v1.md)\
  [Debt position states V3](../appendix/Debt-Positions/Payment-Position-States-v3.md)
- FAQ section update\
  [Creditor Entity FAQ](../faq/creditor-entity.md)\
  [PSP FAQ](../faq/psp.md)
- Updated SEPA RTP\
  [SEPA RTP - Request To Pay](../creditor-entity/sepa-rtp-request-to-pay.md)\
  [SRTP Service Integration for ECs](../appendix/SRTP-Service-Integration/EC.md)\
  [Taxonomy of collection services](../creditor-entity/taxonomy-of-collection-services.md)

### 3.10.0 (November 2025)

- Procedure for checking incorrect IBANs \
  [Creditor Entity Service Levels](../appendix/Quality-indicators-for-participating-entities/Creditor-Entity-Service-Levels.md)
- Reporting and Cashflow: New REST reporting flows described\
  [Reporting and Cashflow](general-operation/reporting-and-cashflow.md)
- Passport (Spontaneous payment at PSP)\
  [Passport](../use-cases/spontaneous-payment-at-a-psp/passport.md)
- Deprecated features: Old SOAP reporting flows and GPD APIs for reporting flows have been deprecated\
  [Deprecated features](../appendix/Deprecated-Features.md)
- SEND notification fee metadata - reference to the Metadata Dictionary added\
  [Asynchronous API integration](../creditor-entity/integration-methods/integrazione-tramite-api-asincrone.md)
- Synchronous Integration (ACA) Update - bulk loading added\
  [Synchronous API integration](../creditor-entity/integration-methods/integration-via-synchronous-APIs.md)
- @e.bollo 2.0 Service: Technical specifications for joining the new service have been published\
  [@e.bollo 2.0 Service](../ente-creditore/bollo-digitale/servizio-e.bollo-2.0/)
- SRTP: Guidelines for joining the new RTP service have been published\
  [Taxonomy of collection services](../creditor-entity/taxonomy-of-collection-services.md)\
  [SRTP Service Integration](../appendici/integrazione-servizio-srtp/)\
  [SEPA RTP - Request To Pay](../creditor-entity/sepa-rtp-request-to-pay.md)
- Primitives section refactoring

### 3.9.1 (December 2024)

- Update of the data model described in [modello-dati.md](modello-dati.md "mention")
- Update of [quality-improvement.md](../prestatore-di-servizi-di-pagamento/quality-improvement.md "mention")

### 3.9.0 (November 2024)

- New payment option management feature in [pagamento-di-un-avviso-presso-psp.md](../casi-duso/pagamento-di-un-avviso-presso-psp.md "mention")
- Clarifications on the behavior upon expiry of the **PAYMENT TOKEN** as described in [checkout.md](../casi-duso/pagamento-da-touchpoint-pagopa/checkout.md "mention")
- Clarifications on the behavior upon expiry of the **PAYMENT TOKEN** as described in [app-io.md](../casi-duso/pagamento-da-touchpoint-pagopa/app-io.md "mention")
- Update of the [#condizioni-di-esclusione-dal-conferimento-delle-posizioni-sullaca](../creditor-entity/integration-methods/integration-via-synchronous-APIs.md#condizioni-di-esclusione-dal-conferimento-delle-posizioni-sullaca "mention") in [integrazione-tramite-api-sincrone.md](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone.md "mention")
- Clarifications on the use of the **`dueDate`** field as described in [best-practice.md](../ente-creditore/modalita-dintegrazione/best-practice.md "mention")
- Update of the logic for selecting the PSP to be used, as described in [offrire-sistemi-di-pagamento-su-touchpoints-di-pagopa-s.p.a..md](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/offrire-sistemi-di-pagamento-su-touchpoints-di-pagopa-s.p.a..md "mention")
- Clarifications on the behavior upon expiry of the **PAYMENT TOKEN** as described in [best-practice.md](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/best-practice.md "mention")
- Specification of the mandatory fields of the [SendPaymentOutcome](../appendici/primitive/#sendpaymentoutcome) in case of an **OK** response, as described in [#sendpaymentoutcome-ok](../payment-service-provider/integration-methods/best-practice.md#sendpaymentoutcome-ok "mention")
- Update of the **Print payment notices functionality** in [stampa-avvisi-pagopa.md](../ente-creditore/stampa-avvisi-pagopa.md "mention")
- New payment option management feature for Creditor Entities in [opzioni-di-pagamento](../ente-creditore/opzioni-di-pagamento/ "mention")
- Update of the payment process described in [offrire-sistemi-di-pagamento-su-touchpoints-di-pagopa-s.p.a..md](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/offrire-sistemi-di-pagamento-su-touchpoints-di-pagopa-s.p.a..md "mention")
- New payment option management feature for PSPs described in [opzioni-di-pagamento](../prestatore-di-servizi-di-pagamento/opzioni-di-pagamento/ "mention")
- Package management update in [gestione-evoluta-commissioni.md](../appendici/gestione-evoluta-commissioni.md "mention")
- Added new primitives [#pagetpayment](../appendici/primitive/#pagetpayment "mention") and [#pagetpayment-1](../appendici/primitive/#pagetpayment-1 "mention") for managing payment options
- Correction of standIn flag in [#pspnotifypayment-versione-2](../appendici/primitive/#pspnotifypayment-versione-2 "mention")

### 3.8.0 (July 2024)

- [#condizioni-di-esclusione-dalla-funzionalita-stand-in](general-operation/stand-in.md#condizioni-di-esclusione-dalla-funzionalita-stand-in "mention")
- Added details regarding communication for the [modalita-dintegrazione](../ente-creditore/modalita-dintegrazione/ "mention")
- Removal of Excel format from [tassonomia-dei-servizi-di-incasso.md](../ente-creditore/tassonomia-dei-servizi-di-incasso.md "mention")
- [#condizioni-di-esclusione-dal-conferimento-delle-posizioni-sullaca](../creditor-entity/integration-methods/integration-via-synchronous-APIs.md#condizioni-di-esclusione-dal-conferimento-delle-posizioni-sullaca "mention")
- Bulk management of debt positions [gestione-massiva](../appendici/posizioni-debitorie/gestione-massiva/ "mention")

### 3.7.1 (April 2024)

{% hint style="info" %}
Patch version released to resolve some ambiguities listed below
{% endhint %}

- Correction of field names in [#fase-di-censimento](../creditor-entity/integration-methods/integration-via-synchronous-APIs.md#fase-di-censimento "mention")
- Clarifications regarding the use of _code 8_ in _Reporting Flows_ in [#sendpaymentoutcome-oltre-la-scadenza-del-payment-token](../payment-service-provider/integration-methods/best-practice.md#sendpaymentoutcome-oltre-la-scadenza-del-payment-token "mention")
- Removal of **Joining services with subscription key**
- Correction of [#nuove-api-gestione-flussi-di-rendicontazione](../appendici/primitive/#nuove-api-gestione-flussi-di-rendicontazione "mention")
- Correction of [#pacreateposition](../appendici/primitive/#pacreateposition "mention")
- Correction of [specifiche-tracciato-di-input.md](../appendici/posizioni-debitorie/gestione-massiva/specifiche-tracciato-di-input.md "mention") in [gestione-massiva](../appendici/posizioni-debitorie/gestione-massiva/ "mention")
- Correction of [#creazione-di-una-posizione-debitoria](../appendix/Debt-Positions/Available-operations.md#creazione-di-una-posizione-debitoria "mention")
- Correction of [#lettura-di-una-lista-di-posizioni-debitorie-e-di-una-singola-posizione-debitoria](../appendix/Debt-Positions/Available-operations.md#lettura-di-una-lista-di-posizioni-debitorie-e-di-una-singola-posizione-debitoria "mention")
- Correction of [#aggiornamento-di-una-posizione-debitoria](../appendix/Debt-Positions/Available-operations.md#aggiornamento-di-una-posizione-debitoria "mention")

### 3.7.0 (March 2024)

- Update of [#richiesta-flussi-di-rendicontazione-da-parte-dellente-creditore-1](general-operation/reporting-and-cashflow.md#richiesta-flussi-di-rendicontazione-da-parte-dellente-creditore-1 "mention")
- Update of [stand-in.md](funzionamento-generale/stand-in.md "mention")
- Removal of Counterparty Table, Extended Counterparty Table, and Credit Account Information in [modello-dati.md](modello-dati.md "mention")
- Adjusted references to the pagoPA back office in [adesione.md](../ente-creditore/adesione.md "mention")
- Update of [#archivio-centralizzato-avvisi](../creditor-entity/integration-methods/integration-via-synchronous-APIs.md#archivio-centralizzato-avvisi "mention")
- Adjusted references to the pagoPA back office in [processo-di-avvio-in-esercizio.md](../ente-creditore/processo-di-avvio-in-esercizio.md "mention")
- Added description for fault code _PPT\_TOKEN\_SCADUTO\_KO_ in [#sendpaymentoutcome-oltre-la-scadenza-del-payment-token](../payment-service-provider/integration-methods/best-practice.md#sendpaymentoutcome-oltre-la-scadenza-del-payment-token "mention")
- Update of [#fase-di-invio-dellesito-del-pagamento](../payment-service-provider/integration-methods/api-integration.md#fase-di-invio-dellesito-del-pagamento "mention")
- Update of [#chiave-di-idempotenza](../payment-service-provider/integration-methods/best-practice.md#chiave-di-idempotenza "mention")
- Added [quality-improvement.md](../prestatore-di-servizi-di-pagamento/quality-improvement.md "mention")
- Update of [#api-recupero-url](../payment-service-provider/integration-methods/integration-for-payment-instrument-via-redirect.md#api-recupero-url "mention")
- Update of [connettivita.md](../appendici/connettivita.md "mention")
- Added [gestione-massiva](../appendici/posizioni-debitorie/gestione-massiva/ "mention") of Debt Positions
- Updated Debt Position APIs in [operazioni-disponibili.md](../appendici/posizioni-debitorie/operazioni-disponibili.md "mention")
- Added references to the new APIs provided by the pagoPA Backoffice in [funzionalita-deprecate.md](../appendici/funzionalita-deprecate.md "mention")
- Adjusted references to the pagoPA back office in the FAQs in [ente-creditore.md](../faq/ente-creditore.md "mention")
- Introduction of code **4** = Payment managed in Stand-In in `PaymentStatusEnum` in [fdr_organization.yaml](https://github.com/pagopa/pagopa-api/blob/SANP3.6.1/openapi/fdr_organization.yaml) and [fdr_psp.yaml](https://github.com/pagopa/pagopa-api/blob/SANP3.6.1/openapi/fdr_psp.yaml)

### 3.6.1 (January 2024)

{% hint style="info" %}
Patch version released to resolve some ambiguities listed below
{% endhint %}

- Correction of [integrazione-per-strumento-di-pagamento-tramite-redirect.md](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/integrazione-per-strumento-di-pagamento-tramite-redirect.md "mention")
- Correction of [fdr_organization.yaml](https://github.com/pagopa/pagopa-api/blob/SANP3.6.1/openapi/fdr_organization.yaml) and [fdr_psp.yaml](https://github.com/pagopa/pagopa-api/blob/SANP3.6.1/openapi/fdr_psp.yaml)
- Added [redirect.yaml](https://github.com/pagopa/pagopa-api/blob/SANP3.6.1/openapi/redirect.yaml)
- Correction of FAQ [#un-ente-creditore-puo-censire-sul-sistema-pagopa-degli-iban-inerenti-dei-conti-correnti-a-lui-non-in](../faq/creditor-entity.md#un-ente-creditore-puo-censire-sul-sistema-pagopa-degli-iban-inerenti-dei-conti-correnti-a-lui-non-in "mention")

### 3.6.0 (November 2023)

- Update of [#richiesta-flussi-di-rendicontazione-da-parte-dellente-creditore-1](general-operation/reporting-and-cashflow.md#richiesta-flussi-di-rendicontazione-da-parte-dellente-creditore-1 "mention")
- [stand-in.md](funzionamento-generale/stand-in.md "mention")
- Update of [pagamento-presso-frontend-dellec.md](../casi-duso/pagamento-presso-frontend-dellec.md "mention")
- [#interazione-con-send](../creditor-entity/integration-methods/integrazione-tramite-api-asincrone.md#interazione-con-send "mention")
- Update of [#archivio-centralizzato-avvisi](../creditor-entity/integration-methods/integration-via-synchronous-APIs.md#archivio-centralizzato-avvisi "mention")
- Update of [#fase-invio-ricevuta](../creditor-entity/integration-methods/integration-via-synchronous-APIs.md#fase-invio-ricevuta "mention")
- Update on the file format related to [tassonomia-dei-servizi-di-incasso.md](../ente-creditore/tassonomia-dei-servizi-di-incasso.md "mention")
- Update of [offrire-sistemi-di-pagamento-su-touchpoints-di-pagopa-s.p.a..md](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/offrire-sistemi-di-pagamento-su-touchpoints-di-pagopa-s.p.a..md "mention") incorporating the contents of the _Payment Instrument Management_ chapter
- [integrazione-standard-per-gli-strumenti-di-pagamento.md](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/integrazione-standard-per-gli-strumenti-di-pagamento.md "mention")
- [integrazione-per-strumento-di-pagamento-paypal.md](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/integrazione-per-strumento-di-pagamento-paypal.md "mention")
- [integrazione-per-strumento-di-pagamento-tramite-redirect.md](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/integrazione-per-strumento-di-pagamento-tramite-redirect.md "mention")
- Added _standin_ field in [#pasendrt](../appendici/primitive/#pasendrt "mention")
- Added _paymentNote_ field in [#pasendrt-versione-2](../appendici/primitive/#pasendrt-versione-2 "mention")
- Added _companyName_ field in _transfer_ of [#pasendrt-versione-2](../appendici/primitive/#pasendrt-versione-2 "mention")
- Added _standin_ field in [#verifypaymentnotice](../appendici/primitive/#verifypaymentnotice "mention")
- Added _standin_ field in [#verificabollettino](../appendici/primitive/#verificabollettino "mention")
- Added _standin_ field in [#activatepaymentnotice](../appendici/primitive/#activatepaymentnotice "mention")
- Added _standin_ field in [#pspnotifypayment](../appendici/primitive/#pspnotifypayment "mention")
- Added _companyName_ field in _transfer_ of [#pspnotifypayment-versione-2](../appendici/primitive/#pspnotifypayment-versione-2 "mention")
- Update of [pagamenti-presso-frontend-dellec-in-modalita-asincrona.md](../appendici/posizioni-debitorie/pagamenti-presso-frontend-dellec-in-modalita-asincrona.md "mention")
- Update of [operazioni-disponibili.md](../appendici/posizioni-debitorie/operazioni-disponibili.md "mention")

### 3.5.0 (July 2023)

- Introduced [#richiesta-flussi-di-rendicontazione-da-parte-dellente-creditore-1](general-operation/reporting-and-cashflow.md#richiesta-flussi-di-rendicontazione-da-parte-dellente-creditore-1 "mention")
- Updated specifications related to [integrazione-tramite-api-asincrone.md](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone.md "mention")
- Updated specifications related to [#archivio-centralizzato-avvisi](../creditor-entity/integration-methods/integration-via-synchronous-APIs.md#archivio-centralizzato-avvisi "mention")
- New [#primitive-deprecate](../appendix/Deprecated-Features.md#primitive-deprecate "mention")
- Deprecation of [#tabella-delle-controparti](../appendix/Deprecated-Features.md#tabella-delle-controparti "mention")
- Deprecation of [#informativa-conto-accredito](../appendix/Deprecated-Features.md#informativa-conto-accredito "mention")
- [pagamenti-presso-frontend-dellec-in-modalita-asincrona.md](../appendici/posizioni-debitorie/pagamenti-presso-frontend-dellec-in-modalita-asincrona.md "mention")
- Updated openapi specifications in [operazioni-disponibili.md](../appendici/posizioni-debitorie/operazioni-disponibili.md "mention")
- Mandatory _companyName_ tag in _data_ and in _transfer_ of [#pagetpayment-versione-2](../appendici/primitive/#pagetpayment-versione-2 "mention")
- Added _companyName_ field in _transfer_ of [#activatepaymentnotice-versione-2](../appendici/primitive/#activatepaymentnotice-versione-2 "mention")

### 3.4.1 (May 2023)

- Correction of _sequence diagram_ in [pagamento-presso-frontend-dellec.md](../casi-duso/pagamento-presso-frontend-dellec.md "mention")
- Correction related to the use of [#bollettino-postale-pa](../creditor-entity/integration-methods/best-practice.md#bollettino-postale-pa "mention")
- Correction related to the commission fee payable by the EC in [gestione-evoluta-commissioni.md](../appendici/gestione-evoluta-commissioni.md "mention")
- Correction of tag in _transferType_ of [#pagetpayment-versione-2](../appendici/primitive/#pagetpayment-versione-2 "mention") with addition of _PAGOPA_ value
- Correction of openapi [#getorganizationreceipt](../appendici/primitive/#getorganizationreceipt "mention") for _mbdAttachment not required_
- Correction of the type of the _amount_ tag in the [#paverifypaymentnotice](../appendici/primitive/#paverifypaymentnotice "mention"), [#verifypaymentnotice](../appendici/primitive/#verifypaymentnotice "mention") and [#verificabollettino](../appendici/primitive/#verificabollettino "mention") primitives
- Correction of the management of the _organizationFiscalCode_ field in the transfers of **Debt Positions** in [operazioni-disponibili.md](../appendici/posizioni-debitorie/operazioni-disponibili.md "mention")

### 3.4.0 (March 2023)

- [#archivio-centralizzato-avvisi](../creditor-entity/integration-methods/integration-via-synchronous-APIs.md#archivio-centralizzato-avvisi "mention")in case of [integrazione-tramite-api-sincrone.md](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone.md "mention")
- [#ricezione-sincrona-della-ricevuta](../creditor-entity/integration-methods/integrazione-tramite-api-asincrone.md#ricezione-sincrona-della-ricevuta "mention") in case of [integrazione-tramite-api-asincrone.md](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone.md "mention")
- Added _idCart_ and _allCCP_ for [integrazione-touch-point-dellec-con-checkout.md](../ente-creditore/modalita-dintegrazione/integrazione-touch-point-dellec-con-checkout.md "mention")
- Clarifications on the _paymentNote_ tag in [#fase-di-attivazione](../creditor-entity/integration-methods/best-practice.md#fase-di-attivazione "mention")
- Use of the [#bollettino-postale-pa](../creditor-entity/integration-methods/best-practice.md#bollettino-postale-pa "mention") in case of [pagamento-presso-frontend-dellec.md](../casi-duso/pagamento-presso-frontend-dellec.md "mention")
- Clarifications on [servizio-e.bollo.md](../ente-creditore/bollo-digitale/servizio-e.bollo.md "mention")
- Added [#backoffice-pagopa](../payment-service-provider/onboarding.md#backoffice-pagopa "mention") in [adesione.md](../prestatore-di-servizi-di-pagamento/adesione.md "mention") for PSPs
- Removed references to the whitelist in [#nodo-dei-pagamenti-client](../appendix/connectivity.md#nodo-dei-pagamenti-client "mention")
- Updated definition of _paymentNote_ tag in [#pagetpayment](../appendici/primitive/#pagetpayment "mention")
- Added _allCCP_ tag in [#activatepaymentnotice-versione-2](../appendici/primitive/#activatepaymentnotice-versione-2 "mention") request
- Added _transferCategory_ tag in [#activatepaymentnotice-versione-2](../appendici/primitive/#activatepaymentnotice-versione-2 "mention") response
- Added tags for [gestione-evoluta-commissioni.md](../appendici/gestione-evoluta-commissioni.md "mention") in [#pspnotifypayment-versione-2](../appendici/primitive/#pspnotifypayment-versione-2 "mention") request
- Added _idSoggettoServizio_ tag in [#pademandpaymentnotice](../appendici/primitive/#pademandpaymentnotice "mention") request
- Corrected identificativoDominio tag in [#nodochiedielencoflussirendicontazione](../appendici/primitive/#nodochiedielencoflussirendicontazione "mention")
- Added _idCart_ and _allCCP_ fields in [#ec-checkout-api](../appendici/primitive/#ec-checkout-api "mention")
- Definition of the service for creating an ad-hoc payment option in [Broken link](/broken/pages/THnwOHSHNsUvKj8AAOT7#pagamento-spontaneo "mention")
- Updated FSM in [Broken link](/broken/pages/tu6xBTp7HNzj8xlva4Zw#posizione-debitoria "mention")
- Updated publication methods in [#creazione-di-una-posizione-debitoria](../appendix/Debt-Positions/Available-operations.md#creazione-di-una-posizione-debitoria "mention")
- Updated filter management in [#lettura-di-una-lista-di-posizioni-debitorie-e-di-una-singola-posizione-debitoria](../appendix/Debt-Positions/Available-operations.md#lettura-di-una-lista-di-posizioni-debitorie-e-di-una-singola-posizione-debitoria "mention")
- Added operations for [#ricevute-di-pagamento](../appendix/Debt-Positions/Available-operations.md#ricevute-di-pagamento "mention") of Debt Positions
- Clarifications on the use of the _touchPoint_ tag in [pos-fisici.md](../appendici/pagamento-presso-pos-fisico-installato-presso-i-locali-dellente-creditore/pos-fisici.md "mention")

### 3.3.1 (February 2023)

- Corrected the link for **Generation and printing of notices**
- Corrected the wsdl/xsd in [https://github.com/pagopa/pagopa-api/tree/SANP3.3.1](https://github.com/pagopa/pagopa-api/tree/SANP3.3.1)
- Corrected [giornale-degli-eventi.md](../appendici/giornale-degli-eventi.md "mention") with insertion of retention times

### 3.3.0 (January 2023)

- Updated flow in [ciclo-di-vita-di-un-pagamento.md](funzionamento-generale/ciclo-di-vita-di-un-pagamento.md "mention")
- Inserted new page [overview-delle-componenti.md](funzionamento-generale/overview-delle-componenti.md "mention") which represents the macro application architecture of the pagoPA platform
- Expanded the description of the [catalogo-dei-servizi.md](../casi-duso/pagamento-spontaneo-presso-psp/catalogo-dei-servizi.md "mention")
- Updating of the amount in [#title-text-2](../creditor-entity/integration-methods/best-practice.md#title-text-2 "mention")
- Distinction between integration methods for ECs in [integrazione-tramite-api-sincrone.md](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone.md "mention") and [integrazione-tramite-api-asincrone.md](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone.md "mention")
- Corrected links to the guidelines in [generazione-dellidentificativo-univoco-di-versamento.md](../ente-creditore/generazione-dellidentificativo-univoco-di-versamento.md "mention")
- Added the [Payment channel data](https://app.gitbook.com/s/u6YdY319vyFX9MIvnKBa/dati-canale-pagamento "mention") section in [Metadata Dictionary](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/u6YdY319vyFX9MIvnKBa/ "mention")
- New PSP selection method for amounts less than 50 euros in [offrire-sistemi-di-pagamento-su-touchpoints-di-pagopa-s.p.a..md](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/offrire-sistemi-di-pagamento-su-touchpoints-di-pagopa-s.p.a..md "mention")
- Added details regarding the non-modifiability of the outcome sent by the PSP in [#fase-di-invio-dellesito-del-pagamento](../payment-service-provider/integration-methods/api-integration.md#fase-di-invio-dellesito-del-pagamento "mention")
- Updated the procedure in [#nodo-dei-pagamenti-server](../appendix/connectivity.md#nodo-dei-pagamenti-server "mention")
- Updated the procedure in [#nodo-dei-pagamenti-client](../appendix/connectivity.md#nodo-dei-pagamenti-client "mention")
- [giornale-degli-eventi.md](../appendici/giornale-degli-eventi.md "mention")
- [stampa-avvisi-pagopa.md](../ente-creditore/stampa-avvisi-pagopa.md "mention")
- [#recupero-receipt-per-enti-creditori](../creditor-entity/integration-methods/integration-via-synchronous-APIs.md#recupero-receipt-per-enti-creditori "mention")
- [pos-fisici.md](../appendici/pagamento-presso-pos-fisico-installato-presso-i-locali-dellente-creditore/pos-fisici.md "mention")

### 3.2.2 (December 2022)

- Corrected references to subjects who can connect directly to the pagoPA platform in the [connettivita.md](../appendici/connettivita.md "mention") section
- Corrected the _denominazioneRicevente_ tag in _FlussoRiversamento_1_0_4.xsd_

### 3.2.1 (November 2022)

- Added details for the correct use of the _transferCategory_ tag in relation to [servizio-e.bollo.md](../ente-creditore/bollo-digitale/servizio-e.bollo.md "mention")
- Updated the swagger [#ec-checkout-api](../appendici/primitive/#ec-checkout-api "mention")
- Updated the swaggers in [operazioni-disponibili.md](../appendici/posizioni-debitorie/operazioni-disponibili.md "mention")

### 3.2.0 (October 2022)

- Updated specifications for [pagamento-presso-frontend-dellec.md](../casi-duso/pagamento-presso-frontend-dellec.md "mention") and [integrazione-touch-point-dellec-con-checkout.md](../ente-creditore/modalita-dintegrazione/integrazione-touch-point-dellec-con-checkout.md "mention")
- [servizio-e.bollo.md](../ente-creditore/bollo-digitale/servizio-e.bollo.md "mention")
- Added details for the correct use of the [#payment-token](../payment-service-provider/integration-methods/best-practice.md#payment-token "mention") regarding the multiple invocation of sendPaymentOutcome
- Modification of the [primitives](../appendici/primitive/ "mention") for Advanced Fee Management

### 3.1.0 (July 2022)

- [integrazione-tramite-api-asincrone.md](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone.md "mention")
- Clarifications on the management of the idempotency key in [#chiave-di-idempotenza](../payment-service-provider/integration-methods/best-practice.md#chiave-di-idempotenza "mention")
- Clarifications on payment session management in [#payment-token](../payment-service-provider/integration-methods/best-practice.md#payment-token "mention")
- Added data structure example of the Reporting Flow in [rendicontazione-e-cashflow.md](funzionamento-generale/rendicontazione-e-cashflow.md "mention")
- [gestione-evoluta-commissioni.md](../appendici/gestione-evoluta-commissioni.md "mention")
- [connettivita.md](../appendici/connettivita.md "mention")
- Clarifications on [pagamento-spontaneo-presso-psp](../casi-duso/pagamento-spontaneo-presso-psp/ "mention")
- Added data structure example in [catalogo-dei-servizi.md](../casi-duso/pagamento-spontaneo-presso-psp/catalogo-dei-servizi.md "mention")
- Added data structure example in [bollo-auto.md](../casi-duso/pagamento-spontaneo-presso-psp/bollo-auto.md "mention")
- Specific use cases in [tributi-multi-beneficiario.md](../ente-creditore/tributi-multi-beneficiario.md "mention")
- [riconciliazione-contabile.md](../ente-creditore/riconciliazione-contabile.md "mention")
- [#title-text-1](../creditor-entity/integration-methods/best-practice.md#title-text-1 "mention")

### 3.0.0 (May 2022)

- Major Release
- Complete revision of the structure
- Introduced new connection method
- Evolution of payment at the EC
- Evolution of spontaneous payment at the PSP
- Evolution of payment from PagoPA Touchpoint
- Details on how to publish the fees applied by PSPs
- New quality indicators for adhering members

### 2.5.1 (January 2022)

- Support emails changed
- Revision of Reporting Flows download

{% embed url="https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.5.1/index.html" %}

### 2.5.0 (October 2021)

- Clarifications on cumulative fund transfers

### 2.4.3 (September 2021)

- _pspInviaCarrelloRPTCarte_ deprecated
- Introduction of the _pspNotifyPayment_ primitive for payments from PagoPA Touch Points.

### 2.4.2 (May 2021)

- Further clarification on the new payment process at the PSP
- Clarifications on how to use postal current accounts
- Revision of payment options.
- Specifications and clarifications on FdR

### 2.4.1 (April 2021)

- Some clarifications on the new payment process at the PSP
- PagoPA SpA Single Fee Solution as a Technology Partner

### 2.4.0 (March 2021)

- New payment process at the PSP
- Removed deprecated functions

### 2.3.0 (November 2020)

- Data catalogue request (deprecated), asynchronous push RT, Revocation and Reversal (deprecated);
- Online payment with agreement code

### 2.2.0 (January 2020)

- Major release
