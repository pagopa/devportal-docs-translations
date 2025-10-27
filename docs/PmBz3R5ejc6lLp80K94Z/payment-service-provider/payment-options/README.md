# Payment options

PagoPA provides creditors (EC) with a function for managing the **payment options**, such as installment plans, increases or reductions in the amount. When verifying the payment, the creditor can insert a series of payment options that the citizen can select to pay using the touchpoint of the PSP from which the request was sent. Thanks to this new function, the creditors can manage their own archive of the debt positions, contemplating the possibility to manage the payment options that they can offer to citizens. For example, they can give citizens the possibility to pay a notice with a single payment or with installment plans. 

The pagoPA platform, during its current process of checking the debt position, does not provide the concept of multiple payment options (OdP), therefore it was necessary to implement a new service that provides this type of management. The new service acts as a proxy, exposing an API that the PSPs can invoke to verify the payment and recover the OdPs available for the debt position. The responsibility of the new service is therefore to permit verifying a payment notice and recovering the payment options available for the notice, which must be exposed by the PSP. 

{% hint style="info" %} The PSP must return all the payment options available for that certain payment notice, as indicated by the creditor. {% endhint %}

### Payment process with payment options

The main steps of the payment flow with management of the payment options (OdP) are described below:

<figure><img src="../../.gitbook/assets/fLDDJyCm3BtdL_W8XvsuxO0sLHL2Q5ib15TajUuKaILLaXRjt-EcxKZK0KNqPBlFpyyVsJYFrhSd1RerdTcPYfGoTs_v_a6uTwd16aT2Y8PHifGDQWzvbhWD7asnJKB5So44yCS6hEv7o1ewih8-5tW-aVQ7nakZtSrjG6BfPOUU9heGKnuqVOnfK2iyWdJWRKlX_m2T5s0tL80AFGPaYiwpDNkltuj9176xKopFO1LLwxKr.png" alt=""><figcaption></figcaption></figure>

1. The PSP has the possibility to call both the [verifyPaymentNotice](../../appendices/primitive.md#activatepaymentnotice) and the [verifyPaymentOptions](../../appendices/primitive.md#pagetpayment);
2. if [verifyPaymentOptions](../../appendices/primitive.md#pagetpayment) is called:
   1. the dedicated microservice is activated; 
   2. if the configuration of the creditor station to be called has the _"new verify"_ flag set to **true**, the microservice performs the call to the configured endpoint of the creditor and returns the information regarding the payment options to the PSP. The PSP must respond with the payment options that were indicated by the creditor; 
   3. If the _"new verify"_ flag is set to **false**, the microservice performs the call and returns an error code to the PSP, requesting them to use the [verifyPaymentNotice](../../appendices/primitive.md#activatepaymentnotice); the error code returned to the PSP is as follows: **ODP\_STAZIONE\_INT\_VERIFICA\_ODP\_DISABILITATA** (error displayed if the station is not enabled to use the OdP service). If [verifyPaymentNotice](../../appendices/primitive.md#activatepaymentnotice) is called, the flow does not change.

### Operation of the new API verifyPaymentOptions - PSP

All the details regarding the operation of the new API are available in [primitive.md](../../appendices/primitive.md "mention") in section [#pagetpayment](../../appendices/primitive.md#pagetpayment "mention"). The PSP will perform a **`GET REST`** during the verification to request the payment options available for the payment notice in question:

```javascript
GET /payment-options/organizations/{fiscal-code}/notices/<notice-number>?idPsp={idPsp} 
```

The input must include the PSP identifier within the pagoPA system. As a response, the PSP must be able to expose all the payment options available for that specific payment notice, as indicated by the creditor and described in the various [use-cases](use-cases/ "mention").