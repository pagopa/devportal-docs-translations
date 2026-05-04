# Creditor service levels

## Availability of the service

The payment service must be available 24x7, 365 days a year with respect to the service levels indicated below.

In total, the following is permitted: 

* 36 hours of programmed stops, distributed over the course of the calendar year, at the discretion of the EC, to be communicated to PagoPA S.p.A. at least 72 hours in advance.
* 9 hours for non-programmed stops during the calendar year, whose duration will be counted based on what is automatically detected by PagoPA S.p.A.

## Service levels of the EC methods

<table><thead><tr><th width="154.57879977565904">Acronym</th><th>Description</th><th>Threshold on a monthly basis</th></tr></thead><tbody><tr><td>TDP</td><td>Maximum time for the emission of a response following the invocation of the method <a href="../primitive.md#pademandpaymentnotice">paDemandPaymentNotice</a></td><td>98% within a maximum of 2 seconds</td></tr><tr><td>TGP</td><td>Maximum time for the emission of a response following the invocation of the method <a href="../primitive.md#pagetpayment">paGetPayment</a></td><td>98% within a maximum of 2 seconds</td></tr><tr><td>TSRT</td><td>Maximum time for the emission of a response following the invocation of the method <a href="../primitive.md#pasendrt">paSendRT</a></td><td>98% within a maximum of 2 seconds</td></tr><tr><td>TVP</td><td>Maximum time for the emission of a response following the invocation of the method <a href="../primitive.md#paverifypaymentnotice">paVerifyPaymentNotice</a></td><td>98% within a maximum of 2 seconds</td></tr></tbody></table>

## Managing the EC timeouts

The timeout represents a predetermined period of time after which a given operation is considered concluded by the node.

The following table shows, for each primitive, the maximum times the node waits for the response from the EC, remembering however that every EC is required to respect the service levels indicated in the previous paragraph.

<table><thead><tr><th width="307.2643021236062">Primitive</th><th align="center">Timeout in seconds</th></tr></thead><tbody><tr><td><a href="../primitive.md#pademandpaymentnotice">paDemandPaymentNotice</a></td><td align="center">7</td></tr><tr><td><a href="../primitive.md#pagetpayment">paGetPayment</a></td><td align="center">7</td></tr><tr><td><a href="../primitive.md#pasendrt">paSendRT</a></td><td align="center">15</td></tr><tr><td><a href="../primitive.md#paverifypaymentnotice">paVerifyPaymentNotice</a></td><td align="center">7</td></tr></tbody></table>

## Availability of the operational workgroup

The EC must guarantee with its system LdS the availability of their staff for the operational workgroup, for the purpose of communication with the operational workgroup of the pagoPA platform and the concerned counterparties. 

The operational workgroup of the EC reacts autonomously and as fast as possible in the case of critical events.

## Managing the IBAN of credit 

The EC must communicate any type of variation regarding its IBAN of credit at least 7 days prior to the start of the change.