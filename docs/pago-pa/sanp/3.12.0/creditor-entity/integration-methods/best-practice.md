---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/modalita-dintegrazione/best-practice
---

# Best practice

## Debt Position Management <a href="#title-text" id="title-text"></a>

The CE creates a pending debt position in the payments archive, and associates a notice number with it. In the current software version, payment is expected in a single instalment.

During the intermediate payment phases, the CE must not change the position's status, which always remains in the "open" state. The pagoPA platform is responsible for managing intermediate states. The CE only changes the debt position to the “paid” status if the payment is successful.

In this case, the position is considered fully settled, so there is only one “paid” payment associated with the debt position.

## Payment Reason <a href="#title-text" id="title-text"></a>

Starting from version 2.0.0 of the SACI, the chapter "Payment Reason Format" has been removed. For the composition of this data, you must refer directly to paragraph 7.1 of the Guidelines.

It is recommended not to include personal and/or special categories of data within the payment reason.

## Due date

The pagoPA platform **does not perform any preventive blocking based on the due date** reported by the Creditor Entity in the `dueDate` field provided in the various [Primitives](../../appendici/primitive/).

It is always the responsibility of the Creditor Entity to keep the status of a debt position updated, as well as to correctly enter the due date.

The `dueDate` field must be populated with the actual due date shown on the payment notices. This allows the information to be shown to the user who intends to pay the notice through digital channels (e.g., the IO app, pagoPA Checkout).

- It represents the due date shown on the payment notice and must be communicated in the following format: ISO 8601 \[YYYY]-\[MM]-\[DD].

{% hint style="warning" %}
PagoPA S.p.A. is not responsible for the accuracy of the information communicated by the Creditor Entity, and does not perform any checks on it.

PagoPA S.p.A. reserves the right not to display the due date on digital channels in the cases described below:

- incorrect formats that do not comply with the ISO 8601 standard;
- dates that are too far in the future or in the past (e.g., 2099-12-31, 1800-12-31).

This right is necessary to improve the user experience and reduce support requests on its own channels and on those of the Creditor Entities.
{% endhint %}

## Verification phase <a href="#title-text" id="title-text"></a>

In the verification phase, the EC is always required to update the payment amount.

The verification request is always made through the [paVerifyPaymentNotice](../../appendix/Primitives/Creditor-Entity/api-soap.md#paverifypaymentnotice) primitive, both for the [verificaBollettino](../../appendix/Primitives/psp/soap-api.md#verificabollettino) and the [verifyPaymentNotice](../../appendix/Primitives/psp/soap-api.md#activatepaymentnotice), also because the EC is not aware of which primitive initiated the verification.

The EC must always respond with a single payment option and, using the _allCCP_ parameter, must always indicate whether or not the debt position can be associated with all postal current accounts:

- _allCCP = true_: the option can be associated with all Postal Current Accounts;
- _allCCP = false_: the option cannot be associated with all Postal Current Accounts.

## Activation phase

In the activation phase, the EC is always required to update the payment amount.

Using the _transferType_ parameter, the platform requests from the EC for each individual _transfer_:

- the postal current accounts (when available) with the parameter _transferType=POSTAL;_
- any current account, at the EC's discretion, if the _transferType_ parameter is not specified.

The _retentionDate_ parameter is currently ignored by the pagoPA platform.

The _lastPayment_ parameter is currently ignored by the pagoPA platform.

The _paymentNote_ parameter, in the case of [payment-at-the-EC-frontend.md](../../casi-duso/pagamento-presso-frontend-dellec.md "mention"), is populated with the value entered by the EC in _idCart_ contained in the redirect [POST](../../appendici/primitive/#ec-checkout-api)

## PA Postal Bill

If the EC has at least one postal current account for collections, it is necessary to also include the PA Postal Bill in the payment notice. In this case, the following scenarios may occur:

- in the [payment-of-a-notice-at-a-psp.md](../../casi-duso/pagamento-di-un-avviso-presso-psp.md "mention") process, if the _transferType_ parameter of the [paGetPayment](../../appendix/Primitives/Creditor-Entity/api-soap.md#pagetpayment) request is set to _POSTAL_, the transfer with _idTransfer = 1_ must be associated with the IBAN of a postal current account;
- for other payment processes, if the _transferType_ parameter of the [paGetPaymentV2](../../appendix/Primitives/Creditor-Entity/api-soap.md#pagetpayment-versione-2) request is set to _PAGOPA_, the EC must associate a metadata with key [_IBANAPPOGGIO_](https://app.gitbook.com/s/u6YdY319vyFX9MIvnKBa/conto-corrente-alternativo) to all transfers of the notice for managing the [_Alternative Current Account_](https://app.gitbook.com/s/u6YdY319vyFX9MIvnKBa/conto-corrente-alternativo) and must enter the IBAN of a postal current account for each transfer in the _IBAN_ tag, or in the value of the metadata with key _IBANAPPOGGIO_.

## Receipt Resubmission Queue <a href="#title-text" id="title-text"></a>

In the event of a response to the [paSendRT](../../appendix/Primitives/Creditor-Entity/api-soap.md#pasendrt) that puts the _receipt_ into a _NOTICE\_PENDING_ state (timeout, response error, unreachable), the _receipt_ is placed in a queue to be resubmitted to the EC.

With the [paSendRT](../../appendix/Primitives/Creditor-Entity/api-soap.md#pasendrt) primitive, the node attempts to resubmit the receipts in question:

- if a _receipt_ is resubmitted and reaches a final state, it is removed from the queue;
- if a _receipt_ is resubmitted but remains in a non-final state (_NOTICE\_PENDING_), it is left in the queue and its retry counter is incremented.

Once the final number of retries is reached (it is a platform configuration parameter), the process stops and the item remains in the queue. It is possible to restart the retry process by making a request to PagoPA S.p.A. support.\\
