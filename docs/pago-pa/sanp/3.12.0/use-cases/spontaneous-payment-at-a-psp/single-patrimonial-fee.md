# Single Patrimonial Fee

The Law of 27 December 2019, no. 160 (2020 Budget Law), introduced the Single Patrimonial Fee (CUP) also for permanent occupations with cables and pipelines for the provision of public utility services, with a deadline of 30 April each year, starting from 2021.

The company subject to the aforementioned Fee (hereinafter referred to as “Corporate”) must:

- proceed with the payment via “self-assessment”;
- make a “self-declaration” of the amount owed to each individual entity;
- make the payment via the pagoPA platform.

The execution of the CUP payment, therefore, represents a use case of [spontaneous payment](https://developer.pagopa.it/it/pago-pa/guides/sanp/3.12.0/casi-duso/pagamento-spontaneo-presso-psp) activated by the PSP's touchpoint.

The new process aims to streamline and speed up the operational flow, eliminating a superfluous step from the Corporate to PagoPA for creating debt positions. With this in mind, by leveraging the spontaneous payment model already available on the pagoPA platform, the Corporate entrusts the PSP with the entire responsibility of managing the flow for creating the position and its related payment.

The following diagram outlines the aforementioned process:

<figure><img src="../../.gitbook/assets/Screenshot 2026-05-29 alle 12.14.46.png" alt=""><figcaption></figcaption></figure>

1. The PSP receives the necessary data from the Corporate to make the payment:
   a. tax code or territorial code of the beneficiary entity;
   b. the Corporate's master data;
   c. amount.
2. The [demandPaymentNotice](https://developer.pagopa.it/it/pago-pa/guides/sanp/3.10.0/appendici/primitive#demandpaymentnotice) is used by the PSP to transmit the specific data provided by the Corporate.

Below is an example of the structure that must be transmitted via the `datiSpecificiServizio` element in base64 format.<br>

```
<pagamentoCup>
    <organizationFiscalCode>77777777777</organizationFiscalCode>    
    <companyName>Corporate S.r.l.</companyName>
    <debtorFiscalCode>01234567890</debtorFiscalCode>
    <debtorFullName>Corporate</debtorFullName>
    <debtorEmail>administration@corporate.it</debtorEmail>
    <amount>150.50</amount>
</pagamentoCup>
```

The XSD specification is available at the following [url](https://github.com/pagopa/pagopa-api/pull/1108/changes). <br>
For correct completion, you must adhere to the following business rules:

- The `<choice>` block requires sending only one of the three provided identifiers (tax code, ISTAT code, or land registry code).
- The `<debtorEmail>` field is optional. If the Corporate decides to populate it, only a corporate email address must be entered (for example, the email should be [info@corporate.xx](mailto:info@corporate.xx) and not a personal address like [name.surname@corporate.xx](mailto:name.surname@corporate.xx)).

3. The PSP proceeds with the payment of the debt position, the details of which are provided in the response to the [demandPaymentNotice](https://developer.pagopa.it/it/pago-pa/guides/sanp/3.10.0/appendici/primitive#demandpaymentnotice).
4. The PSP provides the payment receipt to the Corporate.
