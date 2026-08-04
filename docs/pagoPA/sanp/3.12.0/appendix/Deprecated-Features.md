---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/funzionalita-deprecate
---

# Deprecated features

## Deprecated primitives

- nodoChiediInformativaPA
- nodoChiediInformativaPSP

## Counterparties Table

The data structure of the counterparties table is deprecated as the information it contains no longer needs to be exchanged due to the evolution of the pagoPA platform.

## Credit Account Information

Information relating to credit accounts will be managed through the new features made available by the PagoPA Backoffice.

{% hint style="info" %}
The _Counterparties Table_ and the _Credit Account Information_ have been replaced by new APIs within the pagoPA BackOffice.

For more information, please refer to what is described in the [PT Back Office Manual](https://docs.pagopa.it/manuale-back-office-pagopa/v/manuale-bo-pagopa-pt/manuale-operativo-back-office-pagopa-partner-tecnologico/funzionalita/external-api) and in the [PSP Back Office Manual](https://docs.pagopa.it/manuale-back-office-pagopa/v/manuale-bo-pagopa-psp/manuale-operativo-pagamenti-pagopa-prestatore-di-servizi-di-pagamento/funzionalita/external-api)[ ](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/BnqUVJHM26TaVUpNXC9J/~/changes/3/manuale-operativo-back-office-pagopa-partner-tecnologico/funzionalita/external-api).
{% endhint %}

## Connection to pagoPA via SPC Infranet network

Connection via the SPC Infranet network using a Domain Gateway (SPCoop or equivalent) is deprecated. PagoPA S.p.A. will decommission its PDD in compliance with AgID provisions. Therefore:

- entities already directly connected to the pagoPA platform via the SPC Infranet network and Domain Gateway must proceed with the decommissioning of the Domain Gateway itself, in compliance with current regulations. When connecting to the pagoPA platform via the SPC Infranet network, these entities must comply with the same constraints as for the Internet network;
- newly activated entities on the pagoPA platform via the SPC Infranet network must comply with the same constraints as for the Internet network.

This type of connection will be decommissioned starting from 04/30/2023.

## WISP

The use of WISP is deprecated; it is replaced by Checkout and will be decommissioned as communicated to all Members through the dedicated quarterly periodic communication process.

## Reporting Flows;

The SOAP primitives for managing reporting flows will be deprecated on 06/30/2026. Below is the list of primitives:

- nodoInviaFlussoRendicontazione;
- nodoChiediElencoFlussiRendicontazione
- nodoChiediFlussoRendicontazione

On that date, reception via SFTP server will also be deprecated.

## GPD FDR reporting

The use of the [available operations](https://developer.pagopa.it/pago-pa/guides/sanp/3.9.1/appendici/posizioni-debitorie/operazioni-disponibili#flussi-di-rendicontazione), relating to the reporting flows (aka FDR) made available by the [GPD](https://developer.pagopa.it/pago-pa/guides/sanp/3.9.1/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone) service, will be deprecated on December 31, 2026 in favor of using the **Reporting and Cashflow** services, with a view to uniformity and centralization of the FDR service.
