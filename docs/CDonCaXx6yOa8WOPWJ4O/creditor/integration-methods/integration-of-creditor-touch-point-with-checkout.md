# Integration of the creditor touch point with Checkout

In the case of [payment-at-frontend-of-creditor.md](../../use-cases/payment-at-frontend-of-creditor.md "mention"), the pagoPA platform is integrated by means of Checkout, which is a web application that permits every user to navigate the payment instruments made available by the PSPs registered with the pagoPA platform.

Checkout navigation can take place only in Guest mode, and an email is requested for sending the outcome of the transaction.

![](../../.gitbook/assets/nuovo_modello1_carrello_V3_SANP_EC (2).png)

## Redirect parameters <a href="#om57nyt5rga1" id="om57nyt5rga1"></a>

Integration with Checkout is activated by means of a redirect triggered via a [POST](../../appendices/primitive.md#ec-checkout-api) call, specifying the following parameters: 

* _emailNotice:_ email address to which to send the payment receipt, it can be changed during the payment process 
* _idCart:_ identifier of the cart attributed to the creditor, the parameter is entered when activating the _paymentNote_ tag of [paGetPayment](../../appendices/primitive.md#pagetpayment)
* _returnUrls_: return addresses to the creditor site
  * returnOkUrl: cases of success
  * returnCancelUrl: cases of cancellation
  * returnErrorUrl: cases of error
* an array of the notices to pay, with a maximum number of 5, and the following must be specified for each
  * _noticeNumber_: number of the notice
  * _fiscalCode_: fiscal code of the creditor
  * _amount_: amount of the payment notice (in hundredths of a euro)
  * _companyName_: name of the creditor
  * _description_: description of the payment
  * _allCCP:_ by setting it to TRUE, the creditor communicates to the pagoPA platform that all transfers of the notice can be associated with the postal IBAN, the [paGetPayment](../../appendices/primitive.md#pagetpayment) that the creditor receives for the activation of the current notice will contain the parameter [_transferType_ set to _POSTAL_](best-practice.md#bollettino-postale-pa)_._

An [HTTP Status 302](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302) is obtained as a response to that call, which instructs the user's browser to redirect to the page where to proceed with the payment.

When the payment session has ended, the user is returned to the url indicated by the EC based on the payment outcome.

## Language selection <a href="#om57nyt5rga1" id="om57nyt5rga1"></a>

Checkout will be displayed in the language set in the user's browser. If the language is not supported, Italian will be used. The user can change the language at any moment.

## Browser compatibility <a href="#e7wxvqb4p73h" id="e7wxvqb4p73h"></a>

The development of the Checkout follows the [design guidelines for the PA digital services](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/it/stabile/index.html).

In particular, compatibility is ensured with browser versions that have an average penetration among the population of at least 1 person for every 100 residents.

This means that with the data available to this date, the following browsers are supported:

* Chrome
* Safari
* Firefox
* Samsung Internet Browser
* Edge
* Opera

{% hint style="info" %} The Internet Explorer 11 (IE-11) browser is not included in the list of the supported browsers. IE-11 does not support modern web standards and is a hindrance to the implementation in our platforms of modern web APIs that have security measures that are more advanced with respect to what was available in 2013. {% endhint %}