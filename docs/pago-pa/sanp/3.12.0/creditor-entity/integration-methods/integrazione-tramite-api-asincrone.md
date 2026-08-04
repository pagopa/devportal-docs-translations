---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone
---

# Integration via asynchronous APIs

If Creditor Entities and/or their Technological Intermediaries and/or Technological Partners use integration via Asynchronous APIs, this integration is made available through the Debit Position Management (GPD) service, whose objective is to offer the technical management of the Creditor Entity's debt positions.

By subscribing to the Asynchronous Integration service, the Creditor Entity, with reference to the management of its debt positions, has the advantage of simplifying the technological infrastructure necessary for interaction with the pagoPA platform, namely:

- comply with the Guidelines (the service is always updated to the latest features of the pagoPA platform);
- guarantee SLAs (the service has load-based scalability mechanisms);
- ensure the business continuity measures that must be adopted by payment system operators and critical providers of infrastructure or technical services, in accordance with the obligations under Art. 146 of the T.U.B. of supervision carried out by the Bank of Italy.

The service also enables new use cases for subscribers, for example regarding spontaneous payment services and the management of payment notices, which is integrated into the service.

The service does not aim to provide specific solutions for Creditor Entities and/or their Technological Intermediaries and/or Technological Partners, such as interoperability with accounting and/or management software, or integration with SIOPE+, or the mailing of payment notices.

In any case, the Creditor Entity remains responsible for the accuracy of the debt position data communicated to PagoPA S.p.A. for the purposes of this service.

With reference to the processing of personal data, the Creditor Entity is the controller for the processing of the debt position's personal data and, unless otherwise indicated in writing, adopts the 'Agreement on the processing of personal data by the data processor pursuant to Article 28 of Regulation (EU) 2016/679', therefore appointing PagoPA S.p.A. as Data Processor. The agreement is available at the following link:

{% file src="../../.gitbook/assets/DPA_PagoPA_posizioni-debitorie_v1.pdf" %}

Should the Creditor Entity use a Technological Intermediary and/or Technological Partner as the processor for the personal data of the debt position, the latter shall adopt the aforementioned Agreement, unless otherwise indicated in writing. PagoPA S.p.A. will therefore act as a sub-processor for the Creditor Entity, assuming for this specific case a general authorization from the Controller to the Processor to use other processors.

In the event that the Creditor Entity communicates its unwillingness to adopt the Data Processing Agreement and/or its subsequent possible amendments and updates, subscription to the service will remain suspended until the processing of personal data is governed by another agreement pursuant to Art. 28 of Regulation (EU) 2016/679.

For more details on the features offered by the service, please refer to the appendix[ Debit Positions](https://docs.pagopa.it/sanp/appendici/posizioni-debitorie), and, with reference to any other aspect concerning this integration, please contact the Platform operator at the following address [https://pagopa.atlassian.net/servicedesk/customer/portal/3](https://pagopa.atlassian.net/servicedesk/customer/portal/3) .

### Synchronous Receipt Reception

Considering that the[ paSendRT vers. 2](../../appendix/Primitives/Creditor-Entity/api-soap.md#pasendrt-versione-2) is forwarded:

- to the station of the primary Creditor Entity, from which the payment was activated;
- to the stations of all Creditor Entities configured as broadcast.

The Creditor Entity integrating with the platform in asynchronous mode has two options for retrieving the receipt:

1. Configuration of a broadcast station (recommended option);
2. Use of the specific [APIs](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/lBilmEcN90PbMrjKX1ww/appendici/primitive/ente-creditore/api-rest/gestione-posizioni-debitorie-gpd#recupero-ricevute) made available by GPD.

Option 2 is strongly discouraged as it requires the Creditor Entity to implement a polling mechanism that constantly checks for new receipts.

The service for retrieving the list of receipts is paginated and has a maximum depth of 30 days. Should the need arise in special cases to retrieve a receipt older than this interval, it is possible to use the [getOrganizationReceipt](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/lBilmEcN90PbMrjKX1ww/appendici/primitive/ente-creditore/api-rest/recupero-ricevute) service. &#x20;

### Interaction with SEND

The pagoPA subscriber using asynchronous integration, in the case where they are also a subscriber to the platform referred to in Art. 26 of the Decree-Law. no. 76/2020 (the so-called. “SEND”), benefits, thanks to the interaction of the two platforms, from a notification cost update service which requires the Subscriber to indicate - correctly - during the notification validation phase, for each IUV present in the notification itself, whether that IUV is managed in synchronous or asynchronous mode.

The pagoPA subscriber, who uses asynchronous integration and is also a subscriber to _SEND_ (hereinafter jointly for the two platforms 'Subscriber'), accepts and acknowledges that:

**a)** PagoPA S.p.A. does not verify the synchronicity/asynchronicity of the IUVs declared by the Subscriber during the notification creation phase and, therefore:

**i.** in the case that synchronous IUVs are associated with a notification declared as asynchronous, the notification will not be generated because the system will return an error;

**ii.** in the case that asynchronous IUVs are associated with a notification declared as synchronous, the latter will not be updated, and consequently the total cost of the notifications will not be updated.

**b)** in the case referred to in point a, ii., above, PagoPA S.p.A. is, therefore, entitled to report and invoice the costs it advanced for the notification, even if not paid by the recipient to the Subscriber, due to the incorrect classification of the notification as synchronous by the Subscriber.

{% hint style="warning" %}
For communicating notification costs, please refer to the metadata dictionary [https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/u6YdY319vyFX9MIvnKBa/spese-di-notifica-send](https://app.gitbook.com/s/u6YdY319vyFX9MIvnKBa/spese-di-notifica-send)
{% endhint %}
