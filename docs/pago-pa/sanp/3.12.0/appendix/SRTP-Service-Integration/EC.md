---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/integrazione-servizio-srtp/ec
---

# CE

This appendix describes the adoption of the SRTP (SEPA Request-To-Pay) service from the EPC (European Payments Council) within the context of the "Specifiche Attuative Nodo dei Pagamenti" (SANP). This document, as updated from time to time, constitutes an integral and substantial part of the contractual documentation governing the relationship between PagoPA S.p.A. and the Creditor Entities.

**1. What is SRTP and why adopt it**

SRTP is a European service that allows a beneficiary (Creditor Entity) to send a payment request to a debtor. It is not a payment order, but an invitation to make a payment with all data already available,[ using the European standard](https://www.europeanpaymentscouncil.eu/what-we-do/other-schemes/sepa-request-pay), simplifying the collection request process, reducing errors, and improving the user experience.

**2. How to join and roles involved**

PagoPA S.p.A. acts as a free Service Provider, simplifying the technical and operational integration with the SRTP circuit.

The Creditor Entity is required to correctly populate GPD (Debt Position Management) or ACA (Centralised Notice Archive) with the data of the positions to be collected via the GPD for ACA primitive and the Bulk Management APIs (cf. [SANP](https://developer.pagopa.it/pago-pa/guides/sanp/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone)).

Consequently and exclusively based on everything present in GPD and ACA, the taxonomic codes must be used to classify the types of collection, as specified in Section 4.2 ('Taxonomic Structure') of the SANP; PagoPA S.p.A. is technically responsible, in adherence to the EPC Standard and[ according to the guidelines of the Italian Payments Committee](https://www.bancaditalia.it/compiti/sispaga-mercati/comitato-pagamenti-italia/), for:

- generating and forwarding SRTP requests to the debtor's PSP;
- managing the request statuses (sent, accepted/rejected, paid).

PagoPA S.p.A. acts exclusively as a technical Service Provider, with no responsibility for the content of the SRTP requests, which remains the sole responsibility of the Creditor Entity. PagoPA S.p.A. acts exclusively as a technical provider for the automatic routing of RTPs according to the defined rules.

The Creditor Entity retains the right to deactivate (opt-out) the SEPA-RTP service; this feature is available in the Back Office.

**3. RTP payment flow**

The payment flow via SRTP follows these steps:

1. the Creditor Entity uploads a[ valid debt position](https://developer.pagopa.it/pago-pa/guides/sanp/appendici/posizioni-debitorie/stati-della-posizione-debitoria) for payment via[ asynchronous integration](https://developer.pagopa.it/pago-pa/guides/sanp/3.9.1/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone) or via synchronous integration using the methods indicated in the previous paragraph;
2. PagoPA retrieves the data of the positions entered by the Creditor Entity, reinterprets them according to the standards mentioned above, and forwards the SRTP request to the debtor's PSP;
3. the PSP notifies the citizen of the request (e.g., via their banking app);
4. the payer, notified through the PSP's touchpoints, decides whether to accept or reject the request; the payment process will follow the operational methods and structures provided for by the SANP, in compliance with the rules of interaction with the Payments Hub.<br>

PagoPA S.p.A. acts exclusively as a technical Service Provider, with no responsibility for the content of the SRTP requests, which remains the sole responsibility of the Creditor Entity. PagoPA S.p.A. acts as a technical provider for the automatic routing of RTPs according to the defined rules.

The Creditor Entity retains the right to deactivate (opt-out) the SEPA-RTP service; this feature is available in the Back Office.

**4. Overall impacts and benefits**

The adoption of the standard brings advantages for all actors involved:

- Creditor Entities: automated processes, less management complexity, faster and more timely collections.
- Citizens: immediate payments and the ability to use their own banking app.
- Payments system: greater alignment with European standards and further evolution of the pagoPA platform.

**5. Privacy**

With reference to the processing of personal data, the Creditor Entity is the data controller for the personal data of the debt position and, unless otherwise indicated in writing, for the purposes of the SRTP (SEPA Request-To-Pay) service, it adopts the "Agreement on the processing of personal data by the data processor pursuant to Article 28 of Regulation (EU) 2016/679", thereby appointing PagoPA S.p.A. as the Data Processor. The agreement is available at the following link:

{% file src="../../.gitbook/assets/DPA_RTP_v.1.0.pdf" %}

If the Creditor Entity communicates that it does not wish to adopt the Data Processing Agreement and/or its subsequent amendments and updates, it must opt-out of the SRTP service for Creditor Entities until the processing of personal data is governed by another agreement pursuant to Art. 28 of Regulation (EU) 2016/679.
