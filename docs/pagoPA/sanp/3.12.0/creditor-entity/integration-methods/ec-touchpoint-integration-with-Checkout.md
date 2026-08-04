---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/modalita-dintegrazione/integrazione-touch-point-dellec-con-checkout
---

# EC touchpoint integration with Checkout

In the case of [pagamento-presso-frontend-dellec.md](../../casi-duso/pagamento-presso-frontend-dellec.md "mention"), integration with the pagoPA platform is done through Checkout, a web application that allows each user to browse the payment instruments made available by PSPs that adhere to the pagoPA platform.

Checkout can be navigated in Guest or authenticated mode. An email address is requested to which the transaction outcome will be sent.

![](<../../.gitbook/assets/Screenshot 2026-03-23 alle 13.20.45.png>)

## Redirect parameters <a href="#om57nyt5rga1" id="om57nyt5rga1"></a>

Integration with Checkout is activated through a redirect triggered by the [POST carts](../../appendix/Primitives/Creditor-Entity/REST-API/checkout.md) call, specifying the following parameters:

- _emailNotice:_ email address to which the payment receipt will be sent; it can be changed during the payment process
- _idCart:_ cart identifier assigned by the EC; the parameter is inserted during activation in the _paymentNote_ tag of the [paGetPayment](../../appendix/Primitives/Creditor-Entity/api-soap.md#pagetpayment)
- _returnUrls_: return URLs to the Creditor Entity's website
  - returnOkUrl: for success cases
  - returnCancelUrl: for cancellation cases
  - returnErrorUrl: for error cases
  - returnWaitingUrl: for cases of unknown outcome due to checkout flow timeout
- an array of notices to be paid, with a maximum of 5, for each of which the following must be specified
  - _noticeNumber_: notice number
  - _fiscalCode_: EC's fiscal code
  - _amount_: amount of the payment notice (in euro cents)
  - _companyName_: name of the Creditor Entity
  - _description_: payment subject
  - _allCCP:_ by setting this to TRUE, the EC informs the pagoPA platform that all transfers for the notice can be associated with postal IBANs. The [paGetPayment](../../appendix/Primitives/Creditor-Entity/api-soap.md#pagetpayment) that the EC receives to activate the current notice will contain the [_transferType_ parameter set to _POSTAL_](best-practice.md#bollettino-postale-pa)_._

In response to this call, an [HTTP Status 302](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302) is returned, which instructs the user's browser to redirect to the page where they can proceed with the payment.

Once the payment session is complete, the user is redirected to the URL indicated by the EC, based on the payment outcome.

## Language Selection <a href="#om57nyt5rga1" id="om57nyt5rga1"></a>

Checkout will be displayed in the language set in the user's browser. If a language is not supported, Italian will be used. The user can change the language at any time.

## Browser Compatibility <a href="#e7wxvqb4p73h" id="e7wxvqb4p73h"></a>

The development of Checkout follows the [design guidelines for PA digital services](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/it/stabile/index.html).

Specifically, compatibility is ensured with browser versions that have an average user base among the population of at least 1 person per 100 inhabitants.

This means that, with the data available today, the supported browsers are:

- Chrome
- Safari
- Firefox
- Samsung Internet Browser
- Edge
- Opera

{% hint style="info" %}
The Internet Explorer 11 (IE-11) browser is not on the list of supported browsers. Specifically, IE-11 does not support modern web standards and hinders the implementation on our platforms of modern web APIs with more advanced security measures than what was available in 2013.
{% endhint %}
