# Payment options

PagoPA provides creditors (EC) with a function for managing the **payment options**, such as installment plans, increases or reductions in the amount. When verifying the payment, the creditor can insert a series of payment options that the citizen can select to pay using the touchpoint of the PSP from which the request was sent. Thanks to this new function, the creditors can manage their own archive of the debt positions, contemplating the possibility to manage the payment options that they can offer to citizens. For example, they can give citizens the possibility to pay a notice with a single payment or with installment plans. The pagoPA platform, during its current process of checking the debt position, does not provide the concept of multiple payment options (OdP), therefore it was necessary to implement a new service that provides this type of management. The new service acts as a proxy, exposing an API that the PSPs can invoke to verify the payment and recover the OdPs available for the debt position. The new service internally manages the configuration necessary to be able to contact the endpoint exposed by the creditors, which therefore must expose a new service via the following URL:

```javascript
<baseEcUrl>/payment-options/organizations/{fiscal-code}/notices/{notice-number}
```

That URL is invoked by the new component by means of a **`GET REST`** call. The exposure of the above-indicated service is the responsibility of the creditor in the case of synchronous integration, or the Debt position management (GPD) in case of asynchronous integration. To summarize, the creditors who want to use the new OdP function must:

* configure the stations to specify whether or not they support the recovery of the payment options (for more information, refer to the Backoffice user manual at the following link: [https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/readme/funzionalita/stazioni/configurazione-payment-options](https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/readme/funzionalita/stazioni/configurazione-payment-options));
* in case of synchronous integration, configure a new REST endpoint for the stations that support the payment options;
* Implement the payment option logic according to what is described in the [use cases](use-cases/).

Therefore a new flag is used in the configuration of the stations to determine whether or not the service can return the new payment options.

### Payment process with payment options

The main steps of the payment flow with management of the payment options, on the creditor side, are described below:

<figure><img src="../../.gitbook/assets/fLDDJyCm3BtdL_W8XvsuxO0sLHL2Q5ib15TajUuKaILLaXRjt-EcxKZK0KNqPBlFpyyVsJYFrhSd1RerdTcPYfGoTs_v_a6uTwd16aT2Y8PHifGDQWzvbhWD7asnJKB5So44yCS6hEv7o1ewih8-5tW-aVQ7nakZtSrjG6BfPOUU9heGKnuqVOnfK2iyWdJWRKlX_m2T5s0tL80AFGPaYiwpDNkltuj9176xKopFO1LLwxKr (1).png" alt=""><figcaption></figcaption></figure>

The creditor manages the payment options (therefore the creditor has configured its stations to be able to manage them), returns the payment options available for that notice number in the response of the [paVerifyPaymentOptions](../../appendices/primitive.md#pagetpayment-1). If the creditor does not manage the payment options, the PSP will receive an error message in response that requests them to use the primitive [verifyPaymentNotice](../../appendices/primitive.md#activatepaymentnotice). At this point, the flow proceeds normally with the primitive [ paVerifyPaymentNotice](../../appendices/primitive.md#paverifypaymentnotice) towards the creditor.

All the details related to the operation of the new API [paVerifyPaymentOptions](../../appendices/primitive.md#pagetpayment-1) are available on the page [primitive.md](../../appendices/primitive.md "mention") in section [#pagetpayment-1](../../appendices/primitive.md#pagetpayment-1 "mention").