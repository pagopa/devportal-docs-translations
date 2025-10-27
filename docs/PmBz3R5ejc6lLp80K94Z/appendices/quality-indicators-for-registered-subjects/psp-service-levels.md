# PSP service levels

## Availability of the service

The payment service must be available 24x7, 365 days a year with respect to the service levels indicated below.

In total, the following is permitted: 

* 36 hours of programmed stops, distributed over the course of the calendar year, at the discretion of the PSP, to be communicated to PagoPA S.p.A. at least 72 hours in advance.
* 9 hours for non-programmed stops during the calendar year, whose duration will be counted based on what is automatically detected by PagoPA S.p.A.

## Service levels of the PSP methods

<table><thead><tr><th width="184.6314826872747">Acronym</th><th width="231.71060011217054">Description</th><th>Threshold on a monthly basis</th></tr></thead><tbody><tr><td>TPNP</td><td>Maximum time for the emission of a response following the invocation of the method <a href="../primitive.md#pspnotifypayment">paVerifyPaymentNotice</a></td><td>98% within a maximum of 2 seconds</td></tr><tr><td>TNSPO</td><td>Maximum time for the emission of a <a href="../primitive.md#sendpaymentoutcome">sendPaymentOutcome</a> after conclusion of managing the <a href="../primitive.md#pspnotifypayment">pspNotifyPayment</a> method with a positive outcome (<em>outcome = OK</em>)</td><td>98% within a maximum of 2 seconds</td></tr><tr><td>TPSPO</td><td>Maximum time for the emission of a <a href="../primitive.md#sendpaymentoutcome">sendPaymentOutcome</a> after conclusion of the payment procedures on the PSP touchpoint, both if the payment is made successfully (<em>outcome = OK</em>), as well as if the payment was not made (<em>outcome = NOK</em>)</td><td>98% within a maximum of 2 seconds</td></tr></tbody></table>

## Managing the PSP timeouts

The timeout represents a predetermined period of time after which a given operation is considered concluded by the node.

The following table shows, for each primitive, the maximum times the node waits for the response from the PSP, remembering however that every PSP is required to respect the service levels indicated in the previous paragraph.

<table><thead><tr><th width="478.44897959183675">Primitive</th><th align="center">Timeout in seconds</th></tr></thead><tbody><tr><td><a href="../primitive.md#pspnotifypayment">pspNotifyPayment</a></td><td align="center">7</td></tr></tbody></table>

## Availability of the operational workgroup

The PSP must guarantee with its system LdS the availability of their staff for the operational workgroup, for the purpose of communication with the operational workgroup of the pagoPA platform and the concerned counterparties. 

The operational workgroup of the PSP reacts autonomously and as fast as possible in the case of critical events.

##  Procedural service levels

The overwriting flow is considered valid if sent by and no later than 24 hours from the fourth business day after receiving the payment order(D+4).

<table><thead><tr><th width="150">Acronym</th><th>Indicator</th><th>Description</th><th data-type="number">Value</th></tr></thead><tbody><tr><td>NFER</td><td>Maximum number of incorrect flows per month</td><td>Indicates the maximum number of incorrect flows that a PSP can correct during a calendar month.</td><td>30</td></tr><tr><td>NBI</td><td>Maximum number of integrative SCTs per IBAN</td><td>Indicates the maximum number of SCT-FdR pairs for integration in case of a previously sent partial SCT during a calendar month.</td><td>30</td></tr></tbody></table>

