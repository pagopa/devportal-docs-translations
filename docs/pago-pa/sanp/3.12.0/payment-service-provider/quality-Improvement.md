---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/payment-service-provider/quality-improvement
---

# Quality Improvement

PagoPA S.p.A. has defined a structured Quality Improvement process with the aim of stabilizing the pagoPA platform, eliminating inefficiencies, and further improving the services offered. PagoPA S.p.A. has decided to grant a discount on the quarterly invoices of PSPs that meet the monitored KPIs (8 KPIs).

Requirements for PSPs to obtain discounts:

- for 2024, the [#tempo-massimo-risposta-a-metodo-pspnotifypayment-tpnp](quality-Improvement.md#tempo-massimo-risposta-a-metodo-pspnotifypayment-tpnp "mention") KPI will not be taken into account, so if 7 KPIs are met for each month of the reference quarter, the PSP will be granted a 4% discount on the quarterly invoice; if 5 or 6 KPIs are met for each month of the reference quarter, the PSP will be granted a 3% discount on the quarterly invoice;
- for 2025 and 2026, if all 8 KPIs are met for each month of the reference quarter, the PSP will be granted a 4% discount on the quarterly invoice.

The KPI monitoring program is scheduled to start in July 2024 and will be conducted on a monthly basis, while discounts will be calculated on a quarterly basis.

The metrics defined for the analysis cover two different monitoring areas:

- the reporting process to the ECs;
- the service level of PSP methods.

For each area, based on the technical specifications, metrics have been identified that are presented in the following paragraphs.

### Late Reporting Flows \[LFDR]

We define:

- on-time reporting flow: first submission by D+2 or overwritten by D+4;
- late reporting flow v1: first submission between D+2 and D+4;
- late reporting flow v2: resubmission between D+4 and D+10.

To determine if a payment has a late reporting flow, the day on which the flow was sent is evaluated. This is verified by comparing the data from the payment process with the data present in the reporting flow.

Maximum allowed threshold: 1% of total monthly payments.

Specifications reference: [rendicontazione-e-cashflow.md](../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/rendicontazione-e-cashflow.md "mention").

### Unreported Reporting Flows \[NRFDR]

We define:

- reporting flow never sent: first submission after D+10;
- reporting flow sent but overwritten after D+10;
- reporting flow not present at the time of KPI evaluation.

The calculation is performed by summing the cases of reporting flows arriving after D+10 (following the verification as defined above) with the cases of reporting flows not present on the evaluation day (the 10th of the following month).

Maximum allowed threshold: 1% of total monthly payments.

Specifications reference: [rendicontazione-e-cashflow.md](../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/rendicontazione-e-cashflow.md "mention").

### Reporting Flows with Incorrect Payment Counts \[WPNFDR]

The number of payments present in the reporting flow must match the expected number of payments, i.e., the total payments made on the reference day of the reporting flow (D). If the reporting flow contains a different number of payments (lower or higher), it is considered incorrect.

The calculation is performed by considering, for each payment day and for each EC, how many payments are expected and comparing that value with the number of payments present in the reporting flow.

Maximum allowed threshold: 1% of total monthly payments.

Specifications reference: [rendicontazione-e-cashflow.md](../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/rendicontazione-e-cashflow.md "mention").

### Reporting Flows with Incorrect Amounts \[WAFDR]

The amounts of the individual transactions transmitted by the reporting flow must match to two decimal places those of the payments managed by the Node. If the reporting flow contains an incorrect amount (even for just a single transaction), that reporting flow is considered incorrect.

The calculation is performed by comparing the amount of each payment present in the Node's archives with its corresponding amount in the reporting flow. The KPI is considered met when the two values match.

Maximum allowed threshold: 1% of total monthly payments.

Specifications reference: [rendicontazione-e-cashflow.md](../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/rendicontazione-e-cashflow.md "mention").

### Maximum response time for pspNotifyPayment method \[TPNP]

Sending a response to a [pspNotifyPaymentV1/V2](../appendix/Primitives/psp/soap-api.md#pspnotifypayment) beyond the maximum time provided by the specifications is not permitted.

Maximum allowed threshold: 2% on a monthly basis.

Specifications reference: [livelli-di-servizio-psp.md](../appendici/indicatori-di-qualita-per-i-soggetti-aderenti/livelli-di-servizio-psp.md "mention") _TPNP_ indicator.

### Maximum time for sending sendPaymentOutcome after pspNotifyPayment \[TNSPO]

It is not permitted to send a [sendPaymentOutcomeV1/V2](../appendix/Primitives/psp/soap-api.md#sendpaymentoutcome), after the successful completion of the [pspNotifyPaymentV1/V2](../appendix/Primitives/psp/soap-api.md#pspnotifypayment) method, beyond the maximum time provided by the specifications.

Maximum allowed threshold: 2% on a monthly basis.

Specifications reference: [livelli-di-servizio-psp.md](../appendici/indicatori-di-qualita-per-i-soggetti-aderenti/livelli-di-servizio-psp.md "mention") _TNSPO_ indicator.

### Sending sendPaymentOutcome for an expired token \[LSPO]

Sending [sendPaymentOutcomeV1/V2](../appendix/Primitives/psp/soap-api.md#sendpaymentoutcome) for an expired token, i.e., beyond the maximum session time, is not permitted.

Maximum allowed threshold: 2% on a monthly basis.

Specifications reference: [best-practice.md](modalita-di-integrazione/best-practice.md "mention").

### Failure to send sendPaymentOutcome \[DASPO]

It is mandatory to send a [sendPaymentOutcomeV1/V2](../appendix/Primitives/psp/soap-api.md#sendpaymentoutcome) for a payment activation, regardless of the payment's outcome.

Maximum allowed threshold: 2% on a monthly basis.

Specifications reference: [best-practice.md](modalita-di-integrazione/best-practice.md "mention").
