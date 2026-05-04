# Table of contents

* [⬅️ Back to pagoPA.gov.it](https://www.pagopa.gov.it/)

## Implementary specifications for the SPC payment node

* [Preamble](README.md)
* [Changelog](implementary-specifications-for-the-spc-payment-node/changelog.md)
* [Glossary](implementary-specifications-for-the-spc-payment-node/glossary.md)
* [Roadmap](implementary-specifications-for-the-spc-payment-node/roadmap.md)
* [Documentation](implementary-specifications-for-the-spc-payment-node/documentation.md)
* [General operation](implementary-specifications-for-the-spc-payment-node/general-operation/README.md)
  * [Roles](implementary-specifications-for-the-spc-payment-node/general-operation/roles.md)
  * [Life cycle of a payment](implementary-specifications-for-the-spc-payment-node/general-operation/life-cycle-of-a-payment.md)
  * [Payment processes](implementary-specifications-for-the-spc-payment-node/general-operation/payment-processes.md)
  * [Reporting and cashflow](implementary-specifications-for-the-spc-payment-node/general-operation/reporting-and-cashflow.md)
  * [Component overview](implementary-specifications-for-the-spc-payment-node/general-operation/component-overview.md)
  * [Security and storage](implementary-specifications-for-the-spc-payment-node/general-operation/security-and-storage.md)
  * [Registration with the pagoPA platform](implementary-specifications-for-the-spc-payment-node/general-operation/registration-with-the-pagopa-platform.md)
  * [Use of the pagoPA brand](implementary-specifications-for-the-spc-payment-node/general-operation/use-of-the-pagopa-brand.md)
  * [Stand In](implementary-specifications-for-the-spc-payment-node/general-operation/stand-in.md)
* [Service provision and levels](implementary-specifications-for-the-spc-payment-node/service-provision-and-levels.md)
* [Data model](implementary-specifications-for-the-spc-payment-node/data-model.md)

## Use cases

* [Payment of a notice through a PSP](use-cases/payment-of-a-notice-through-a-psp.md)
* [Spontaneous payment via a PSP](use-cases/spontaneous-payment-via-a-psp/README.md)
  * [Service catalog](use-cases/spontaneous-payment-via-a-psp/service-catalog.md)
  * [Car property tax](use-cases/spontaneous-payment-via-a-psp/car-property-tax.md)
* [Payment at the EC’s frontend](use-cases/payment-at-the-ecs-frontend.md)
* [Payment from PagoPA touchpoint](use-cases/payment-from-pagopa-touchpoint/README.md)
  * [Checkout](use-cases/payment-from-pagopa-touchpoint/checkout.md)
  * [IO app](use-cases/payment-from-pagopa-touchpoint/app-io.md)

## Creditor

* [Registration](creditor/registration.md)
* [Integration methods](creditor/integration-methods/README.md)
  * [Integration via asynchronous API](creditor/integration-methods/integration-via-asynchronous-api.md)
  * [Integration via synchronous API](creditor/integration-methods/integration-via-synchronous-api.md)
  * [Integration of the EC touch point with Checkout](creditor/integration-methods/integration-of-the-ec-touch-point-with-checkout.md)
  * [Best practices](creditor/integration-methods/best-practice.md)
* [Generation of the Univocal Payment Identifier](creditor/generation-of-univocal-payment-identifier.md)
* [Collection service taxonomy](creditor/collection-service-taxonomy.md)
* [Multi-beneficiary taxes](creditor/multi-beneficiary-taxes.md)
* [Payment certification](creditor/payment-certification.md)
* [Account reconciliation](creditor/account-reconciliation.md)
* [@e.bollo service](creditor/e.bollo-service.md)
* [Printing pagoPA notices](creditor/printing-pagopa-notices.md)
* [Start-up process](creditor/start-up-process.md)

## Payment Service Provider

* [Registration](payment-service-provider/registration.md)
* [Integration methods](payment-service-provider/integration-methods/README.md)
  * [Integration via API](payment-service-provider/integration-methods/integration-via-api.md)
  * [Information Data Catalog](payment-service-provider/integration-methods/information-data-catalog.md)
  * [Offering payment systems on PagoPA S.p.A. touchpoints](payment-service-provider/integration-methods/offering-payment-systems-on-pagopa-s.p.a.-touchpoints.md)
  * [Standard integration for payment instruments](payment-service-provider/integration-methods/standard-integration-for-payment-instruments.md)
  * [Integration for a PayPal payment instrument](payment-service-provider/integration-methods/integration-for-a-paypal-payment-instrument.md)
  * [Integration for a payment instrument via redirect](payment-service-provider/integration-methods/integration-for-a-payment-instrument-via-redirect.md)
  * [Best practices](payment-service-provider/integration-methods/best-practice.md)
* [Commissions](payment-service-provider/commissions.md)
* [Payment certification](payment-service-provider/payment-certification.md)
* [Start-up process](payment-service-provider/start-up-process.md)
* [Quality Improvement](payment-service-provider/quality-improvement.md)

## Citizen experience

* [IO app](citizen-experience/app-io/README.md)
  * [Cards](citizen-experience/app-io/cards.md)
  * [PayPal](citizen-experience/app-io/paypal.md)
* [Checkout](citizen-experience/checkout.md)

## Appendices

* [Connectivity](appendices/connectivity.md)
* [Quality indicators for registered entities](appendices/quality-indicators-for-registered-entities/README.md)
  * [Creditor service levels](appendices/quality-indicators-for-registered-entities/creditor-service-levels.md)
  * [PSP service levels](appendices/quality-indicators-for-registered-entities/psp-service-levels.md)
* [Event journal](appendices/event-journal.md)
* [Generation and printing of notices](https://docs.pagopa.it/avviso-pagamento)
* [Advanced commission management](appendices/advanced-commission-management.md)
* [Primitive](appendices/primitive.md)
* [Deprecated functions](appendices/deprecated-functions.md)
* [Debt positions](appendices/debt-positions/README.md)
  * [Data model](appendices/debt-positions/data-model.md)
  * [States of the debt position](appendices/debt-positions/states-of-the-debt-position.md)
  * [Payments at the EC frontend in asynchronous mode](appendices/debt-positions/payments-at-the-ec-frontend-in-asynchronous-mode.md)
  * [Massive management](appendices/debt-positions/massive-management/README.md)
    * [Massive loading](appendices/debt-positions/massive-management/massive-loading.md)
  * [Available operations](appendices/debt-positions/available-operations.md)
* [Physical POS](appendices/physical-pos.md)

## FAQ

* [Creditor](faq/creditor.md)
* [PSP](faq/psp.md)
* [Technological intermediary](faq/technological-intermediary.md)
