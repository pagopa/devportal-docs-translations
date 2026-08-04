---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/indicatori-di-qualita-per-i-soggetti-aderenti/livelli-di-servizio-psp
---

# PSP Service Levels

## Service Availability

The payment service must be available 24/7/365 in compliance with the service levels set out below.

A total of is permitted

- 36 hours for scheduled downtime, distributed throughout the calendar year at the PSP's discretion, to be communicated to PagoPA S.p.A. with at least 72 hours' notice.
- 9 hours for unscheduled downtime during the calendar year, the duration of which will be calculated based on automatic measurements taken by PagoPA S.p.A.

## Service Levels for PSP Methods

<table><thead><tr><th width="184.6314826872747">Acronym</th><th width="231.71060011217054">Description</th><th>Monthly Threshold</th></tr></thead><tbody><tr><td>TPNP</td><td>Maximum time to issue a response after invoking the <a href="../primitive/psp/api-soap.md#pspnotifypayment">pspNotifyPayment</a> method</td><td>98% within no more than 2 seconds</td></tr><tr><td>TNSPO</td><td>Maximum time to issue a <a href="../primitive/psp/api-soap.md#sendpaymentoutcome">sendPaymentOutcome</a> following the successful completion of the <a href="../primitive/psp/api-soap.md#pspnotifypayment">pspNotifyPayment</a> method (<em>outcome = OK</em>)</td><td>98% within no more than 2 seconds</td></tr><tr><td>TPSPO</td><td>Maximum time to issue a <a href="../primitive/psp/api-soap.md#sendpaymentoutcome">sendPaymentOutcome</a> following the completion of payment procedures on the PSP touchpoint, for both successful (<em>outcome = OK</em>) and unsuccessful (<em>outcome = KO</em>) payments</td><td>98% within no more than 2 seconds</td></tr></tbody></table>

## Managing Timeouts for PSPs

A timeout is a predetermined period after which a given operation is considered completed by the Node.

The following table shows the maximum time the Node will wait for a PSP's response for each primitive. However, please remember that every PSP is required to adhere to the service levels indicated in the previous section.

<table><thead><tr><th width="478.44897959183675">Primitive</th><th align="center">Timeout in Seconds</th></tr></thead><tbody><tr><td><a href="../primitive/psp/api-soap.md#pspnotifypayment">pspNotifyPayment</a></td><td align="center">7</td></tr></tbody></table>

## Operational Desk Availability

The PSP must guarantee the availability of its Operational Desk staff with the same SLAs as its systems, for the purpose of communicating with the pagoPA platform's Operational Desk and other relevant parties.

The PSP's Operational Desk shall react autonomously and as quickly as possible in the event of critical incidents.

## Procedural Service Levels

The overwrite flow is considered valid if sent no later than 24:00 on the fourth working day after receiving the payment order (D+4).

<table><thead><tr><th width="150">Acronym</th><th>Indicator</th><th>Description</th><th data-type="number">Value</th></tr></thead><tbody><tr><td>NFER</td><td>Maximum number of erroneous flows per month</td><td>Indicates the maximum number of erroneous flows a PSP can correct in a calendar month.</td><td>30</td></tr><tr><td>NBI</td><td>Maximum number of supplementary SCTs per IBAN</td><td>Indicates the maximum number of supplementary SCT-FdR pairs in response to a partial SCT previously sent within a calendar month.</td><td>30</td></tr></tbody></table>
