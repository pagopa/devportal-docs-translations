---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/opzioni-di-pagamento
---

# Payment Options

PagoPA provides Creditor Entities (EC) with a feature to manage **payment options**, such as installment plans, surcharges, or amount reductions. During the payment verification phase, the EC can enter a series of payment options that the citizen can choose to pay through the PSP touchpoint from which the request originated. Thanks to this new feature, ECs can manage their debt position archive, including the ability to manage payment options they can offer to citizens. For example, they can give citizens the option to pay a notice as a single payment rather than with installment plans. The pagoPA platform, in its current debt position verification process, does not provide for multiple payment options (PO), therefore it was necessary to implement a new service to manage them. The new service acts as a proxy, exposing an API that PSPs can invoke to verify the payment and retrieve the available POs within the same debt position. The new service internally manages the configuration required to contact the endpoint exposed by the ECs, which must therefore expose a new service using the following URL:

```javascript
<baseEcUrl>/payment-options/organizations/{fiscal-code}/notices/{notice-number}
```

This URL is invoked by the new component via a **`GET REST`** call. Exposing the above service is the responsibility of the EC for synchronous integration, or the responsibility of Debt Position Management (GPD) for asynchronous integration. In summary, ECs that want to use the new PO functionality must:

- configure the stations to specify whether retrieving payment options is supported (for more information, refer to the Backoffice user manual at the following link: [https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/readme/funzionalita/stazioni/configurazione-opzioni-di-pagamento](https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/readme/funzionalita/stazioni/configurazione-opzioni-di-pagamento));
- for synchronous integration, configure a new REST endpoint for the stations that support payment options;
- implement the payment options logic as described in the [use cases](casi-duso/).

The new flag within the station configuration is therefore used to determine whether the service can return the new payment options.

### Payment process with payment options

The main steps of the payment flow with payment options management, on the Creditor Entity side, are described below:

<figure><img src="../../.gitbook/assets/fLDDJyCm3BtdL_W8XvsuxO0sLHL2Q5ib15TajUuKaILLaXRjt-EcxKZK0KNqPBlFpyyVsJYFrhSd1RerdTcPYfGoTs_v_a6uTwd16aT2Y8PHifGDQWzvbhWD7asnJKB5So44yCS6hEv7o1ewih8-5tW-aVQ7nakZtSrjG6BfPOUU9heGKnuqVOnfK2iyWdJWRKlX_m2T5s0tL80AFGPaYiwpDNkltuj9176xKopFO1LLwxKr (1).png" alt=""><figcaption></figcaption></figure>

If the EC manages payment options (meaning the EC has configured its stations to handle them), it returns the available payment options for that notice number in the [paVerifyPaymentOptions](../../appendici/primitive/ente-creditore/api-rest/#pagetpayment) response. If the EC does not manage payment options, the PSP will receive an error message in the response, prompting it to use the [verifyPaymentNotice](../../appendix/Primitives/psp/soap-api.md#activatepaymentnotice) primitive. At this point, the flow proceeds normally with the [paVerifyPaymentNotice](../../appendix/Primitives/Creditor-Entity/api-soap.md#paverifypaymentnotice) primitive towards the EC.

All details regarding the operation of the new [paVerifyPaymentOptions](../../appendici/primitive/ente-creditore/api-rest/#pagetpayment) API are available on the [primitives](../../appendici/primitive/ "mention") page.
