# @e.bollo service

Via the pagoPA platform, it is possible to request the payment of debt positions that contain a digital stamp duty (@e.bollo).

This function is available only when using [payment-at-the-ecs-frontend.md](../use-cases/payment-at-the-ecs-frontend.md "mention").

<figure><img src="../.gitbook/assets/flussoMBD_EC_PSP (1).png" alt=""><figcaption></figcaption></figure>

To request the activation of an _expected payment_ of a stamp duty, the creditor must complete the _richiestaMarcaDaBollo_ tag in the response to [paGetPaymentV2](../appendices/primitive.md#pagetpayment-versione-2), making sure to enter:

* _tipoBollo_: the type of stamp duty;
* _hashDocumento_: contains the digest, in base64 format, of the electronic document or the protocol signature with which the digital stamp duty is associated;
* _provinciaResidenza_: abbreviation of the province of residency of the paying entity.

The _richiestaMarcaDaBollo_ tag must be used as an alternative to the _IBAN_ tag in each _transfer_, the _transferAmount_ tag must contain the amount of the stamp duty and the payment node does not perform any type of verification of the entered amount, whereas the _transferCategory_ tag must contain a taxonomic code that can be traced to the digital stamp duty ([collection-service-taxonomy.md](collection-service-taxonomy.md "mention")).

Once the payment transaction is completed, the PSP must complete the _marcheDaBollo_ tag in the [sendPaymentOutcomeV2](../appendices/primitive.md#sendpaymentoutcome-versione-2) request, making sure to enter the following for each digital stamp duty (_marcaDaBollo_ tag):

* _paymentToken_: the paymentToken with which the digital stamp duty request arrived;
* _idTransfer_: the identifier of the transfer that contains the _richiestaMarcaDaBollo;_
* _MBDAttachment_: the XML document that contains the digital stamp duty, in base64 format.

As indicated in the guidelines published by the Agenzia delle Entrate (Italian Revenue Agency) _"The Public Administrations that directly or indirectly receive from a citizen the digital stamp duty and the associated certificate check the validity using a local control software..."_, therefore the validation of the XML document that contains the digital stamp duty is the responsibility of the creditor, who receives if via the [paSendRTV2](../appendices/primitive.md#pasendrt-versione-2).

The amounts related to the digital stamp duties are not included in the [reporting flows](../implementary-specifications-for-the-spc-payment-node/general-operation/reporting-and-cashflow.md) sent by the PSPs.

For more details about the @e.bollo, service, validity and the relative cases of use, refer to the corresponding section on the [website of the Italian Revenue Agency](https://www.agenziaentrate.gov.it/portale/web/guest/schede/pagamenti/imposta-di-bollo-per-le-istanze-trasmesse-alla-pa-ebollo-cittadini/che-cose-cittadini).
