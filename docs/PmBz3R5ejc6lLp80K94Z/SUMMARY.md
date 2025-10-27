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
  * [Component overview](implementary-specifications-for-the-spc-payment-node/general-operation/overview-of-the-components.md)
  * [Security and storage](implementary-specifications-for-the-spc-payment-node/general-operation/security-and-storage.md)
  * [Registration with the pagoPA platform](implementary-specifications-for-the-spc-payment-node/general-operation/registration-with-the-pagopa-platform.md)
  * [Use of the pagoPA brand](implementary-specifications-for-the-spc-payment-node/general-operation/use-of-the-pagopa-logo-md)
  * [Stand In](implementary-specifications-for-the-spc-payment-node/general-operation/stand-in.md)
* [Service provision and levels](implementary-specifications-for-the-spc-payment-node/service-provision-and-levels.md)
* [Data model](implementary-specifications-for-the-spc-payment-node/data-model.md)

## Use cases

* [Payment of a notice through a PSP](use-cases/payment-of-a-notice-through-a-psp.md)
* [Spontaneous payment via a PSP](use-cases/spontaneous-payment-via-psp/README.md)
  * [Service catalog](use-cases/spontaneous-payment-via-psp/service-catalog-md)
  * [Car property tax](use-cases/spontaneous-payment-via-psp/car-property-tax.md)
* [Payment at the creditor's frontend](use-cases/payment-at-frontend-of-creditor.md)
* [Payment from PagoPA touchpoint](use-cases/payment-from-pagopa-touchpoint/README.md)
  * [Checkout](use-cases/payment-from-pagopa-touchpoint/checkout.md)
  * [IO app](use-cases/payment-from-pagopa-touchpoint/io-app.md)

## Creditor

* [Registration](creditor/registration.md)
* [Integration methods](creditor/integration-methods/README.md)
  * [Integration via asynchronous API](creditor/integration-methods/integration-via-asynchronous-api.md)
  * [Integration via synchronous API](creditor/integration-methods/integration-via-synchronous-api.md)
  * [Integration of the creditor touch point with Checkout](creditor/integration-methods/integration-of-creditor-touch-point-with-checkout.md)
  * [Best practices](creditor/integration-methods/best-practice.md)
* [Generation of the Univocal Payment Identifier](creditor/generation-of-univocal-payment-identifier.md)
* [Collection service taxonomy](creditor/collection-service-taxonomy.md)
* [Multi-beneficiary taxes](creditor/multi-beneficiary-taxes.md)
* [Payment certification](creditor/payment-verification.md)
* [Account reconciliation](creditor/account-reconciliation.md)
* \[@e.bollo](creditor/digital-stamp-duty.md) service
* [Printing pagoPA notices](creditor/print-pagopa-notices.md)
* [Start-up process](creditor/start-up-process.md)
* [Payment options](creditor/payment-options/README.md)
  * [Use cases](creditor/payment-options/use-cases/README.md)
    * [Single total option](creditor/payment-options/use-cases/single-option-total.md)
    * [Multiple payment options with different due dates](creditor/payment-options/use-cases/multiple-payment-options-with-different-due-dates.md)
    * [Single installment plan](creditor/payment-options/use-cases/single-installment-plan.md)
    * [Total option and installment plan (single)](creditor/payment-options/use-cases/total-option-and-single-installment-plan.md)
    * [Option with multiple installment plans (with or without the total option)](creditor/payment-options/use-cases/options-with-multiple-installment-plans-with-or-without-the-total-option.md)
    * [Joint and several liability](creditor/payment-options/use-cases/joint-and-several-liability.md)

## Payment Service Provider

* [Registration](payment-service-provider/registration.md)
* [Integration methods](payment-service-provider/integration-methods/README.md)
  * [Integration via API](payment-service-provider/integration-methods/integration-via-api.md)
  * [Information Data Catalog](payment-service-provider/integration-methods/information-data-catalog.md)
  * [Offering payment systems on PagoPA S.p.A. touchpoints](payment-service-provider/integration-methods/offer-payment-systems-on-pagopa-s.p.a.-touchpoints.md)
  * [Standard integration for payment instruments](payment-service-provider/integration-methods/standard-integration-for-payment-instruments.md)
  * [Integration for a PayPal payment instrument](payment-service-provider/integration-methods/integration-for-paypal-payment-instrument.md)
  * [Integration for a payment instrument via redirect](payment-service-provider/integration-methods/integration-for-payment-instrument-via-redirect.md)
  * [Best practices](payment-service-provider/integration-methods/best-practice.md)
* [Commissions](payment-service-provider/commissions.md)
* [Payment certification](payment-service-provider/payment-verification.md)
* [Start-up process](payment-service-provider/start-up-process.md)
* [Quality Improvement](payment-service-provider/quality-improvement.md)
* [Payment options](payment-service-provider/payment-options/README.md)
  * [Use cases](payment-service-provider/payment-options/use-cases/README.md)
    * [Single total option](payment-service-provider/payment-options/use-cases/single-option-total.md)
    * [Multiple payment options with different due dates](payment-service-provider/payment-options/use-cases/multiple-payment-options-with-different-due-dates.md)
    * [Single installment plan](payment-service-provider/payment-options/use-cases/single-installment-plan.md)
    * [Total option and installment plan (single)](payment-service-provider/payment-options/use-cases/total-option-and-single-installment-plan.md)
    * [Options with multiple installment plans (with or without the total option)](payment-service-provider/payment-options/use-cases/options-with-multiple-installment-plans-with-or-without-the-total-option.md)
    * [Joint and several liability](payment-service-provider/payment-options/use-cases/joint-and-several-liability.md)

## Citizen experience

* [IO app](citizen-experience/io-app/README.md)
  * [Cards](citizen-experience/io-app/cards.md)
  * [PayPal](citizen-experience/io-app/paypal.md)
* [Checkout](citizen-experience/checkout.md)

## Appendices

* [Connectivity](appendices/connectivity.md)
* [Quality indicators for registered entities](appendices/quality-indicators-for-registered-subjects/README.md)
  * [Creditor service levels](appendices/quality-indicators-for-registered-subjects/creditor-service-levels.md)
  * [PSP service levels](appendices/quality-indicators-for-registered-subjects/psp-service-levels.md)
* [Event journal](appendices/event-journal.md)
* [Generation and printing of notices](https://docs.pagopa.it/avviso-pagamento)
* [Advanced commission management](appendices/advanced-commission-management.md)
* [Primitive](appendices/primitive.md)
* [Deprecated functions](appendices/deprecated-functions.md)
* [Debt positions](appendices/debt-positions/README.md)
  * [Data model](appendices/debt-positions/data-model.md)
  * [States of the debt position](appendices/debt-positions/debt-position-statuses.md)
  * [Payments at the EC frontend in asynchronous mode](appendices/debt-positions/payments-at-frontend-of-creditor-in-asynchronous-mode.md)
  * [Massive management](appendices/debt-positions/massive-management/README.md)
    * [📄 Input trace specifications](appendices/debt-positions/massive-management/input-trace-specifications.md)
    * [⚙️ Massive management via API REST](appendices/debt-positions/massive-management/massive-management-via-rest-api.md)
    * [📥 Massive management via SFTP](appendices/debt-positions/massive-management/massive-management-via-sftp.md)
  * [Available operations](appendices/debt-positions/available-operations.md)
* [Physical POS](appendices/physical.pos.md)

## FAQ

* [Creditor](faq/creditor.md)
* [PSP](faq/psp.md)
* [Technological intermediary](faq/technological-intermediary.md)