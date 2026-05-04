# Best practices

## Management of the debt position <a href="#title-text" id="title-text"></a>

The creditor creates an outstanding debt position in the payment archives and associates it with a notice number. In the current version of the software, payment is made with a single payment.

During the intermediate phases of the payment, the creditor must not change the status of the position, which always remains “open”. The pagoPA platform will manage the intermediate statuses, the creditor will change the debt position to the “paid” status only if the payment is successful.

In this case, the position is fully settled, there is therefore a single “paid” payment associated with the debt position.

## Payment description <a href="#title-text" id="title-text"></a>

Starting with version 2.0.0 of SACI, the chapter “Format of the payment description “ was removed. For the completion of this item, refer directly to paragraph 7.1 of the guidelines.

It is recommended not to insert personal data and/or specific data in the payment description.

## Verification phase <a href="#title-text" id="title-text"></a>

During the verification phase, the creditor is always required to update the payment amount.

The verification request always takes place via the primitive [paVerifyPaymentNotice](../../appendices/primitive.md#paverifypaymentnotice), both in the case of [verificaBollettino](../../appendices/primitive.md#verificabollettino) as well as in the case of [verifyPaymentNotice](../../appendices/primitive.md#verifypaymentnotice), also because the creditor does not know which primitive triggered the verification.

The creditor must always respond with a single payment option and always indicate with the parameter _allCCP_ whether or not the debt position can be associated with all the postal current accounts:

* _allCCP = true_: the option can be associated with all postal current accounts;
* _allCCP = false_: the option cannot be associated with all postal current accounts.

## Activation phase

During the activation phase, the creditor is always required to update the payment amount.

The platform uses the _transferType_ parameter to request the following from the creditor for each individual _transfer_:

* The postal current accounts (if available) with the parameter\_transferType=POSTAL;\_
* any current account, at the discretion of the creditor, if the _transferType_ is not indicated.

The parameter _retentionDate_ is currently ignored by the pagoPA platform.

The parameter _lastPayment_ is currently ignored by the pagoPA platform.

The parameter _paymentNote_, in the case of [payment-at-the-ecs-frontend.md](../../use-cases/payment-at-the-ecs-frontend.md "mention"), is populated with the value entered by the creditor in the _idCart_ contained in the redirect\_.\_[POST](../../appendices/primitive.md#ec-checkout-api)

## PA postal payment slip

If the creditor has at least one postal current account for the collections, the PA postal payment slip must also be included in the payment notice, in this case the following cases are possible:

* in the [https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/DG2lpjf4Y5u7ZRFE7CyZ/use-cases/pagamento-di-un-avviso-presso-psp.md](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/DG2lpjf4Y5u7ZRFE7CyZ/use-cases/pagamento-di-un-avviso-presso-psp.md "mention") process if the parameter _transferType_ of the request of [paGetPayment](../../appendices/primitive.md#pagetpayment) is _POSTAL_, the IBAN of the postal current account must be associated with the transfer with _idTransfer = 1_;
* for the other payment processes, if the parameter _transferType_ of the request of the [paGetPaymentV2](../../appendices/primitive.md#pagetpayment-versione-2) is _PAGOPA_ the EC must associate a metadata with key [_IBANAPPOGGIO_](https://app.gitbook.com/s/u6YdY319vyFX9MIvnKBa/conto-corrente-alternativo) to all transfers of the notice for the management of the [_Alternative Current Account_](https://app.gitbook.com/s/u6YdY319vyFX9MIvnKBa/conto-corrente-alternativo) and must enter a postal current account IBAN for each transfer in the _IBAN_ tag, that is in the value of the metadata with key _IBANAPPOGGIO_.

## Queue of the receipts to be resubmitted <a href="#title-text" id="title-text"></a>

If the response to the [paSendRT](../../appendices/primitive.md#pasendrt) that puts the status of the _receipt_ to _NOTICE\_PENDING_ (timeout, response error, cannot be reached), the _receipt_ is inserted in a queue to be submitted again to the creditor.

With the primitive [paSendRT](../../appendices/primitive.md#pasendrt), the node tries to resubmit the _receipt_ in question:

* if a _receipt_ is resubmitted and its status is final it is removed from the queue;
* if a _receipt_ is resubmitted but its status remains not final (_NOTICE\_PENDING_), it is left in the queue and the counter for the retry number is increased.

When the final retry number is reached (it is a platform configuration parameter), the process stops and the element remains in the queue, and it is possible to restart the retry process by sending a request to support at PagoPA S.p.A.\\
