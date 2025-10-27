# Quality Improvement

PagoPA S.p.A. has defined a structured Quality Improvement process with the objective of stabilizing the pagoPA platform, eliminating inefficiencies and further improving the services offered. PagoPA S.p.A. has decided to give a discount on the quarterly invoices of the PSPs that respect the monitoring KPIs (8 KPIs).

Requirements on the PSPs to obtain the discounts:

* for 2024, the KPI [#tempo-massimo-risposta-a-metodo-pspnotifypayment-tpnp](quality-improvement.md#tempo-massimo-risposta-a-metodo-pspnotifypayment-tpnp "mention") will not be taken into consideration, therefor if the 7 KPI are respected during all three months of the quarter of reference, the PSP will be given a 4% discount on the quarterly invoice; if 5 or 6 KPIs are respected for each month of the quarter of reference, the PSP will be given a 3% discount on the quarterly invoice;
* for 2025 and 2026, if all 8 KPIs are respected for each month of the quarter of reference, the PSP will be given a 4% on the quarterly invoice.

The KPI monitoring program is planned to start in July 2024 and will take place on a monthly basis, whereas the discounts will be calculated on a quarterly basis.

The metrics defined for the analysis concern two different monitoring areas:

* the reporting process to the creditors;
* the service levels of the PSP methods.

For each area, based on the technical specifications, metrics have been defined that are specified in the following paragraphs.

### Reporting flows sent late \[LFDR]

Definitions:

* reporting flows on time: first sent within D+2 or overwritten within D+4; 
* reporting flows late v1: first sent between D+2 and D+4;
* reporting flows late v2: resent between D+4 and D+10.  

To determine if the relative reporting flow for a payment is delayed, it is evaluated on which day the flow was sent, and the check is done comparing the payment process data with the data present in the reporting flow.

Maximum permitted threshold: 1% of total payments during the month.

Specification reference:[reporting-and-cashflow.md](../implementary-specifications-for-the-spc-payment-node/general-operation/reporting-and-cashflow.md "mention").

### Reporting flows not reported \[NRFDR]

Definitions:

* reporting flow never sent: first transmission after D+10;
* reporting flow sent but overwritten after D+10;
* reporting flow not present when evaluating the KPI.

The calculation is performed by adding up the reporting flow cases that arrived after D+10 (following the check as described above) with the reporting flow cases not present on the day of the evaluation (10 of the following month).

Maximum permitted threshold: 1% of total payments during the month.

Specification reference:[reporting-and-cashflow.md](../implementary-specifications-for-the-spc-payment-node/general-operation/reporting-and-cashflow.md "mention").

### Reporting flows with incorrect number of payments \[WPNFDR]

The number of payments included in the reporting flow must coincide with the expected number of payments, that is the total payments that took place on the date of reference of the reporting flow (D), if the reporting flow contains a different number of payments (lower or higher) it is considered incorrect.

The calculation is made considering, for every day of payment and every creditor, how many payments are expected and comparing this value with the number of payments included in the reporting flow.

Maximum permitted threshold: 1% of total payments during the month.

Specification reference:[reporting-and-cashflow.md](../implementary-specifications-for-the-spc-payment-node/general-operation/reporting-and-cashflow.md "mention").

### Reporting flows with an incorrect amount \[WAFDR]

The amounts of the individual transactions transmitted by the reporting flow must coincide to two decimal places with the payments managed by the node. If the reporting flow contains an incorrect amount (also if only for a single transaction), the reporting flow is considered incorrect.

The calculation is done by comparing the amount of each payment present in the node archives with the relative amount present in the reporting flow, the KPI is satisfied when the two values coincide.

Maximum permitted threshold: 1% of total payments during the month.

Specification reference:[reporting-and-cashflow.md](../implementary-specifications-for-the-spc-payment-node/general-operation/reporting-and-cashflow.md "mention").

### Maximum response time to pspNotifyPayment method​ \[TPNP]

It is not permitted to sent a response to [pspNotifyPaymentV1/V2](../appendices/primitive.md#pspnotifypayment) beyond the maximum time specified by the specifications.

Maximum permitted threshold: 2% on a monthly basis.

Specification reference: [psp-service-levels.md](../appendices/quality-indicators-for-registered-subjects/psp-service-levels.md "mention") _TPNP_ indicator.

### Maximum sending time sendPaymentOutcome resulting from pspNotifyPayment \[TNSPO]

It is not permitted to send a [sendPaymentOutcomeV1/V2](../appendices/primitive.md#sendpaymentoutcome), after the conclusion of managing the [pspNotifyPaymentV1/V2](../appendices/primitive.md#pspnotifypayment) method with a positive outcome, beyond the maximum time specified by the specifications.

Maximum permitted threshold: 2% on a monthly basis.

Specification reference: [psp-service-levels.md](../appendices/quality-indicators-for-registered-subjects/psp-service-levels.md "mention") _TNSPO_ indicator.

### Transmission of sendPaymentOutcome with the token expired \[LSPO]

It is not permitted to transmit [sendPaymentOutcomeV1/V2](../appendices/primitive.md#sendpaymentoutcome) with the token expired, that is beyond the maximum session time.

Maximum permitted threshold: 2% on a monthly basis.

Specifications reference: [#title-text](integration-methods/best-practice.md#title-text "mention").

### No transmission of sendPaymentOutcome \[DASPO]

It is mandatory to send a [sendPaymentOutcomeV1/V2](../appendices/primitive.md#sendpaymentoutcome) after activating a payment, regardless of the payment outcome.

Maximum permitted threshold: 2% on a monthly basis.

Specifications reference: [#title-text](integration-methods/best-practice.md#title-text "mention").