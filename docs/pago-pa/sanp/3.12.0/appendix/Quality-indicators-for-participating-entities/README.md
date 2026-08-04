---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/indicatori-di-qualita-per-i-soggetti-aderenti
---

# Quality indicators for participating entities

{% content-ref url="Creditor-Entity-Service-Levels.md" %}
[livelli-di-servizio-enti-creditori.md](Creditor-Entity-Service-Levels.md)
{% endcontent-ref %}

{% content-ref url="PSP-Service-Levels.md" %}
[livelli-di-servizio-psp.md](PSP-Service-Levels.md)
{% endcontent-ref %}

## Response Time

The following diagram describes the processing times across the pagoPA platform

![](<../../.gitbook/assets/Nuovi LdS-Globale.png>)

- the _Processing Time_ represents what is indicated in [#livelli-di-servizio-dei-metodi-degli-ec](Creditor-Entity-Service-Levels.md#livelli-di-servizio-dei-metodi-degli-ec "mention");
- the _Node Timeout_ represents what is indicated in [#gestione-dei-timeout-verso-gli-ec](Creditor-Entity-Service-Levels.md#gestione-dei-timeout-verso-gli-ec "mention") or [#gestione-dei-timeout-verso-i-psp](PSP-Service-Levels.md#gestione-dei-timeout-verso-i-psp "mention"), depending on the nature of the _Node Callee_;
- the _Node Caller Timeout_ represents what is indicated in [#gestione-dei-timeout-del-nodo](./#gestione-dei-timeout-del-nodo "mention") for synchronous methods.

The following diagram describes the times when the pagoPA platform acts as a server in the case of asynchronous methods

![](<../../.gitbook/assets/Nuovi LdS-Metodi Sincroni (3).png>)

- the _Node Caller Timeout_ represents what is indicated in [#gestione-dei-timeout-del-nodo](./#gestione-dei-timeout-del-nodo "mention") for asynchronous methods.

The following diagram describes the times when the pagoPA platform acts as a client

![](<../../.gitbook/assets/Nuovi LdS-Timeout del Nodo.png>)

- the _Processing Time_ represents what is indicated in [#livelli-di-servizio-dei-metodi-degli-ec](Creditor-Entity-Service-Levels.md#livelli-di-servizio-dei-metodi-degli-ec "mention") or [#livelli-di-servizio-dei-metodi-dei-psp](PSP-Service-Levels.md#livelli-di-servizio-dei-metodi-dei-psp "mention"), depending on the nature of the _Node Callee_;
- the _Node Timeout_ represents what is indicated in [#gestione-dei-timeout-verso-gli-ec](Creditor-Entity-Service-Levels.md#gestione-dei-timeout-verso-gli-ec "mention") or [#gestione-dei-timeout-verso-i-psp](PSP-Service-Levels.md#gestione-dei-timeout-verso-i-psp "mention"), depending on the nature of the _Node Callee._

## Retry Processes

In case of a timeout, retry processes must be activated for the following primitives:

- [nodoInviaFlussoRendicontazione](../Primitives/psp/soap-api.md#nodoinviaflussorendicontazione)
- [sendPaymentOutcome](../Primitives/psp/soap-api.md#sendpaymentoutcome)

The retry processes must use an exponential backoff logic to calculate the waiting time, starting from the detection of the timeout

$$waiting time = slot time * (2^k - 1)$$

where _K_ is the attempt number (first attempt = 1) and _slottime_ is equal to the maximum wait time of the original caller.

The retry process must allow for a maximum of 5 attempts. Functionalities must be available to check and reset the attempt counter, so that the process can be restarted if necessary.

In case of a timeout for the following primitives:

- [activatePaymentNotice](../Primitives/psp/soap-api.md#activatepaymentnotice-1)
- [demandPaymentNotice](../Primitives/psp/soap-api.md#demandpaymentnotice)
- [nodoChiediElencoFlussiRendicontazione](../Primitives/Creditor-Entity/api-soap.md#nodochiedielencoflussirendicontazione)
- [nodoChiediFlussoRendicontazione](../Primitives/Creditor-Entity/api-soap.md#nodochiediflussorendicontazione)
- [nodoChiediInformativaPA](../primitive/)
- [nodoChiediTemplateInformativaPSP](../Primitives/psp/soap-api.md#nodochieditemplateinformativapsp)
- [nodoChiediCatalogoServizi](../Primitives/psp/soap-api.md#nodochiedicatalogoservizi)
- [verificaBollettino](../Primitives/psp/soap-api.md#verificabollettino)
- [verifyPaymentNotice](../Primitives/psp/soap-api.md#activatepaymentnotice)

an automatic retry process is not necessary, but if a new invocation is required, the minimum waiting time before making a new attempt must follow the exponential backoff logic described above.

## Node Timeout Management

The timeout represents a predetermined period of time after which a given operation can be considered concluded by ECs and PSPs.

The following table lists for each primitive

- the minimum waiting times for synchronous methods
- the suggested waiting times for asynchronous methods

of the Node's response

by ECs

<table><thead><tr><th width="397.44897959183675">Primitive</th><th width="225" align="center">Timeout in seconds</th><th data-type="checkbox">Synchronous</th></tr></thead><tbody><tr><td><a href="../primitive/ente-creditore/api-soap.md#nodochiedielencoflussirendicontazione">nodoChiediElencoFlussiRendicontazione</a></td><td align="center">15</td><td>false</td></tr><tr><td><a href="../primitive/ente-creditore/api-soap.md#nodochiediflussorendicontazione">nodoChiediFlussoRendicontazione</a></td><td align="center">60</td><td>false</td></tr></tbody></table>

by PSPs

<table><thead><tr><th width="397.44897959183675">Primitive</th><th width="225" align="center">Timeout in seconds</th><th data-type="checkbox">Synchronous</th></tr></thead><tbody><tr><td><a href="../primitive/psp/api-soap.md#activatepaymentnotice-1">activatePaymentNotice</a></td><td align="center">12</td><td>true</td></tr><tr><td><a href="../primitive/psp/api-soap.md#demandpaymentnotice">demandPaymentNotice</a></td><td align="center">12</td><td>true</td></tr><tr><td><a href="../primitive/psp/api-soap.md#nodochiedicatalogoservizi-versione-2">nodoChiediCatalogoServizi</a></td><td align="center">15</td><td>false</td></tr><tr><td><a href="../primitive/#nodochiediinformativapa">nodoChiediInformativaPA</a></td><td align="center">15</td><td>false</td></tr><tr><td><a href="../primitive/psp/api-soap.md#nodochieditemplateinformativapsp">nodoChiediTemplateInformativaPSP</a></td><td align="center">15</td><td>false</td></tr><tr><td><a href="../primitive/psp/api-soap.md#nodoinviaflussorendicontazione">nodoInviaFlussoRendicontazione</a></td><td align="center">60</td><td>false</td></tr><tr><td><a href="../primitive/psp/api-soap.md#sendpaymentoutcome">sendPaymentOutcome</a></td><td align="center">15</td><td>false</td></tr><tr><td><a href="../primitive/psp/api-soap.md#verificabollettino">verificaBollettino</a></td><td align="center">12</td><td>true</td></tr><tr><td><a href="../primitive/psp/api-soap.md#activatepaymentnotice">verifyPaymentNotice</a></td><td align="center">12</td><td>true</td></tr></tbody></table>

## Resolution time for a critical event

When a critical event occurs, the Creditor Entity or the PSP must acknowledge the problem within 5 minutes and email the Tavolo Operativo del NodoSPC with information about the high-level plan they will adopt to resolve the issue, structured according to the complexity of the problem itself (e.g., immediate bug fixing, a possible temporary solution, event closure).
