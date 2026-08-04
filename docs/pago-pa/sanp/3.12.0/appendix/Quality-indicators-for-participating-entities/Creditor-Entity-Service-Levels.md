---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/indicatori-di-qualita-per-i-soggetti-aderenti/livelli-di-servizio-enti-creditori
---

# Creditor Institution Service Levels

## Service Availability

The payment service must be available 7 days a week, 24 hours a day, 365 days a year, in compliance with the service levels set out below.

A total of

- 36 hours for scheduled downtime, distributed throughout the calendar year at the CI's discretion, to be communicated to PagoPA S.p.A. with at least 72 hours' notice.
- 9 hours for unscheduled downtime during the calendar year, the duration of which will be calculated based on automatic monitoring by PagoPA S.p.A.

{% hint style="warning" %}
Creditor Institutions are required to report scheduled downtime using the appropriate feature within the pagoPA Backoffice System (for more information, see [https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/manuale-operativo-back-office-pagopa-ente-creditore/funzionalita/stazioni/manutenzione-programmata](https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/manuale-operativo-back-office-pagopa-ente-creditore/funzionalita/stazioni/manutenzione-programmata)).

Please also note that once the annual quota of 36 hours is exceeded, it is not possible to set the "StandIN" flag to false when creating new scheduled maintenance. This means that payments must necessarily be possible in "StandIN" mode (for more information on the Stand-In concept, see [https://developer.pagopa.it/pago-pa/guides/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in](https://developer.pagopa.it/pago-pa/guides/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in))
{% endhint %}

## Service Levels for CI Methods

<table><thead><tr><th width="154.57879977565904">Acronym</th><th>Description</th><th>Monthly Threshold</th></tr></thead><tbody><tr><td>TDP</td><td>Maximum response time when invoking the <a href="../primitive/ente-creditore/api-soap.md#pademandpaymentnotice">paDemandPaymentNotice</a> method</td><td>98% within 2 seconds</td></tr><tr><td>TGP</td><td>Maximum response time when invoking the <a href="../primitive/ente-creditore/api-soap.md#pagetpayment">paGetPayment</a> method</td><td>98% within 2 seconds</td></tr><tr><td>TSRT</td><td>Maximum response time when invoking the <a href="../primitive/ente-creditore/api-soap.md#pasendrt">paSendRT</a> method</td><td>98% within 2 seconds</td></tr><tr><td>TVP</td><td>Maximum response time when invoking the <a href="../primitive/ente-creditore/api-soap.md#paverifypaymentnotice">paVerifyPaymentNotice</a> method</td><td>98% within 2 seconds</td></tr></tbody></table>

## Managing Timeouts towards CIs

A timeout is a predetermined period of time after which a given operation is considered concluded by the Node.

The following table shows the maximum time the Node will wait for a CI response for each primitive, bearing in mind, however, that each CI is required to comply with the service levels indicated in the previous section.

<table><thead><tr><th width="307.2643021236062">Primitive</th><th align="center">Timeout in seconds</th></tr></thead><tbody><tr><td><a href="../primitive/ente-creditore/api-soap.md#pademandpaymentnotice">paDemandPaymentNotice</a></td><td align="center">7</td></tr><tr><td><a href="../primitive/ente-creditore/api-soap.md#pagetpayment">paGetPayment</a></td><td align="center">7</td></tr><tr><td><a href="../primitive/ente-creditore/api-soap.md#pasendrt">paSendRT</a></td><td align="center">15</td></tr><tr><td><a href="../primitive/ente-creditore/api-soap.md#paverifypaymentnotice">paVerifyPaymentNotice</a></td><td align="center">7</td></tr></tbody></table>

## Operational Help Desk Availability

The CI must guarantee the availability of its Operational Help Desk staff, with the same SLAs as its systems, for the purpose of communicating with the pagoPA platform's Operational Help Desk and other interested parties.

The CI's Operational Help Desk must react autonomously and as quickly as possible in case of critical events.

## Crediting IBAN Management

The CI must communicate any changes to its crediting IBANs without unreasonable delay, at least 7 days before the change's effective date. This update must be performed via the [BackOffice](https://selfcare.pagopa.it/).

If you experience problems accessing the BackOffice, please contact support through the [Reserved Area](https://www.pagopa.it/it/area-riservata/) using the specific feature in the top right: "? Help".

However, for the sole purpose of supporting pagoPA platform stakeholders, particularly PSPs, in the ordinary course of their activities, a "Institutions with incorrect IBANs" table has been created, which contains information on CIs that appear to have an incorrect IBAN. This table can be viewed directly via this link: [https://docs.google.com/spreadsheets/d/1wK\_6SlvC4q7ToWGxZpg3lYx0g38jBGdByi0mekow4DU/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1wK_6SlvC4q7ToWGxZpg3lYx0g38jBGdByi0mekow4DU/edit?usp=sharing).

In addition, a "History of Institutions with incorrect IBANs" table is also available at the following link: [https://docs.google.com/spreadsheets/d/1Vn9rUYgGWGcONS\_\_wHzFifO1Cs2ojpkCr1VDTkev5p0/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1Vn9rUYgGWGcONS__wHzFifO1Cs2ojpkCr1VDTkev5p0/edit?usp=sharing).

These tables are intended as a moral suasion tool and are subject to updates based on information as it becomes available.

PagoPA S.p.A. assumes no responsibility for the accuracy and timeliness of information related to CI crediting IBANs, as the CIs remain solely responsible for the correctness of the data in the BackOffice.

PagoPA is committed to ensuring that all IBAN-related information is correctly managed in the BackOffice system and to supporting CIs and PSPs in resolving issues arising from incorrect IBANs, but is not responsible for any inconvenience or delays resulting from inadequate communication or a lack of updates by CIs.

The timely and effective collaboration of CIs and PSPs is necessary for the proper execution of activities.

To this end, PSPs and Creditor Institutions must promptly provide the Company with all necessary and relevant information, ensuring the completeness, accuracy, and timeliness of the data. Furthermore, CIs and PSPs must pay close attention when managing communications and requests for clarification, promoting an efficient and transparent flow of information.
