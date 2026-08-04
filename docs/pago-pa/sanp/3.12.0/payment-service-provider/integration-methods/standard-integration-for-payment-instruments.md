---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/payment-service-provider/integration-methods/standard-integration-for-payment-instruments
---

# Standard integration for payment instruments

The content of this chapter is valid for the following payment instruments:

- ApplePay®
- BancomatPay®
- GooglePay®
- MyBank®

It should be noted that PagoPA S.p.A. does not sign agreements with

- ApplePay®
- BancomatPay®
- GooglePay®
- MyBank®

therefore, it is the responsibility of the participating PSP to contact them if they want to offer their payment instruments on _NPG._

## Onboarding <a href="#adesione-psp-sul-npg" id="adesione-psp-sul-npg"></a>

If a participating PSP wants to activate on the PagoPA S.p.A. Payment Gateway (NPG), it is necessary to follow these steps:

1. Send an onboarding request to the Payment Gateway, indicating
   - the payment methods to be enabled;
   - the agreement codes for each payment method;
2. The Payment Gateway configures the terminal, enabling the payment methods with the agreement codes indicated by the participating PSP.

<figure><img src="../../.gitbook/assets/adesione_SP.png" alt=""><figcaption></figcaption></figure>

## Payment <a href="#pagamento-di-un-numero-avviso" id="pagamento-di-un-numero-avviso"></a>

During the payment of a payment notice number, the terminal of the participating PSP selected by the citizen is used for communication between the Payment Gateway and the Payment Instrument.

Based on the agreement code indicated by the participating PSP, it is only possible to make enabled payments.

<figure><img src="../../.gitbook/assets/pagamento_SP.png" alt=""><figcaption></figcaption></figure>

## Reversal <a href="#storno-di-un-numero-avviso" id="storno-di-un-numero-avviso"></a>

During the reversal of a payment, the same terminal of the participating PSP selected during the payment phase is used.

<figure><img src="../../.gitbook/assets/storno_SP.png" alt=""><figcaption></figcaption></figure>
