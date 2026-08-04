---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/prestatore-di-servizi-di-pagamento/opzioni-di-pagamento
---

# Payment options

PagoPA provides Creditor Entities (EC) with a feature to manage **payment options**, such as installment plans, surcharges, or reductions of the amount. During the payment verification phase, the EC can include a series of payment options that the citizen can choose to pay through the PSP touchpoint from which the request originated. Thanks to this new feature, ECs can manage their archive of debt positions while considering the possibility of managing the payment options they can offer to citizens. For example, they can give the citizen the option of paying a notice in a single payment rather than through installment plans.

The pagoPA platform, in the current debt position verification process, does not support the concept of multiple payment options (PO), so it was necessary to implement a new service to provide this type of management. The new service acts as a proxy, exposing an API that PSPs can call to verify the payment and retrieve the available POs within the same debt position. The responsibility of the new service is therefore to allow for the verification of a payment notice and the retrieval of the payment options available for it, which must be exposed by the PSP.

{% hint style="info" %}
PSPs must return all available payment options for that specific payment notice as indicated by the EC.
{% endhint %}

### Payment process with payment options

The main steps of the payment flow with the management of Payment Options (PO) are described below:

<figure><img src="../../.gitbook/assets/fLDDJyCm3BtdL_W8XvsuxO0sLHL2Q5ib15TajUuKaILLaXRjt-EcxKZK0KNqPBlFpyyVsJYFrhSd1RerdTcPYfGoTs_v_a6uTwd16aT2Y8PHifGDQWzvbhWD7asnJKB5So44yCS6hEv7o1ewih8-5tW-aVQ7nakZtSrjG6BfPOUU9heGKnuqVOnfK2iyWdJWRKlX_m2T5s0tL80AFGPaYiwpDNkltuj9176xKopFO1LLwxKr (1).png" alt=""><figcaption></figcaption></figure>

1. The PSP has the option to call either [verifyPaymentNotice](../../appendix/Primitives/psp/soap-api.md#activatepaymentnotice) or [verifyPaymentOptions](../../appendici/primitive/psp/api-rest/#pagetpayment);
2. if [verifyPaymentOptions](../../appendici/primitive/psp/api-rest/#pagetpayment) is called:
   1. the dedicated microservice is activated;
   2. if the configuration of the EC station to be called has the _"new verify"_ flag set to **true**, the microservice calls the configured creditor entity's endpoint and returns the payment option information to the PSP. The PSP must return the payment options indicated by the creditor entity in the response;
   3. if the _"new verify"_ flag is set to **false**, the microservice makes the call and returns an error code to the PSP, prompting it to use [verifyPaymentNotice](../../appendix/Primitives/psp/soap-api.md#activatepaymentnotice); the error code returned to the PSP is as follows: **ODP\_STAZIONE\_INT\_VERIFICA\_ODP\_DISABILITATA** (error provided if the station is not enabled for the use of the PO service). If [verifyPaymentNotice](../../appendix/Primitives/psp/soap-api.md#activatepaymentnotice) is called, the flow remains unchanged.

### How the new verifyPaymentOptions API works - PSP

All details about how the new API works are available in [primitives](../../appendici/primitive/ "mention") in the [PSP - Rest API](../../appendix/Primitives/psp/soap-api.md) section. The PSP makes a **`GET REST`** call during the verification phase to request the payment options available for the payment notice in question:

```javascript
GET /payment-options/organizations/{fiscal-code}/notices/<notice-number>?idPsp={idPsp} 
```

The PSP's identifier within the pagoPA system must be present in the input. In the response, the PSP must be able to expose all the payment options available for that specific payment notice, as indicated by the EC and described in the various [use cases](casi-duso/ "mention").
