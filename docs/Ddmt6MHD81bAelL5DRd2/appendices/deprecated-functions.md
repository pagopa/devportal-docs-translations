# Deprecated functions

## Deprecated primitives

* nodoChiediInformativaPA
* nodoChiediInformativaPSP

## Counterparty table

The structure of the counterparty table is deprecated as the information it contains no longer needs to be exchanged due to the evolution of the pagoPA platform.

## Credit account disclosure

The information related to accounts to be credited will be managed using the new functions provided by the PagoPA Backoffice.

{% hint style="info" %}
The \_counterparty table\_ and the \_credit account disclosure\_ has been replaced by new APIs in the pagoPA BackOffice.

For more information, refer to[https://docs.pagopa.it/manuale-back-office-pagopa/v/manuale-bo-pagopa-pt/manuale-operativo-back-office-pagopa-partner-tecnologico/funzionalita/external-api](https://docs.pagopa.it/manuale-back-office-pagopa/v/manuale-bo-pagopa-pt/manuale-operativo-back-office-pagopa-partner-tecnologico/funzionalita/external-api)

and

[https://docs.pagopa.it/manuale-back-office-pagopa/v/manuale-bo-pagopa-psp/manuale-operativo-pagamenti-pagopa-payment-service-provider/funzionalita/external-api](https://docs.pagopa.it/manuale-back-office-pagopa/v/manuale-bo-pagopa-psp/manuale-operativo-pagamenti-pagopa-payment-service-provider/funzionalita/external-api)
{% endhint %}

## Connection to pagoPA via the SPC Infranet

The connection via the SPC Infranet via the Domain Port (SPCoop or equivalent) is deprecated. PagoPA S.p.A. will discontinue its PDD in compliance of the AgID provisions. Therefore:

* the entities already directly connected with the pagoPA platform via the SPC Infranet and Domain Port must discontinue the Domain Port, in compliance with current regulations. When connecting to the pagoPA platform via the SPC Infranet, these entities must respect the same constraints provided for the Internet;
* entities who are newly activated with the pagoPA platform via the SPC Infranet must respect the same constraints provided for the Internet.

This type of connection will be discontinued starting from April 30, 2023.

## WISP

The use of WISP is deprecated and replaced by Checkout and will be discontinued as communicated to all Parties using the dedicated quarterly communication process.
