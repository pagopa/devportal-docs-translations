---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/casi-duso/pagamento-spontaneo-presso-psp/passaporto
---

# Passport

Making a passport payment is a process that represents one of the use cases for spontaneous payment initiated at a PSP touchpoint.

After entering/providing the data that will be sent to the _Ministry of the Interior_ to create the debt position, the user can proceed with the payment. Specifically, the user must provide:

- tax code, first name, and last name of the passport holder
- tax code, first name, and last name of the payer.

<figure><img src="../../.gitbook/assets/Screenshot 2026-04-01 alle 10.46.49.png" alt=""><figcaption></figcaption></figure>

- The [demandPaymentNotice](../../appendix/Primitives/psp/soap-api.md#demandpaymentnotice) can be used by PSPs to send the specific service data entered by the user, which in this case are essentially:&#x20;
  - passport holder's data
  - payer's data
  - file code **A001** (which uniquely identifies the type of service being used).
- the [paDemandPaymentNotice](../../appendix/Primitives/Creditor-Entity/api-soap.md#pademandpaymentnotice) is used to request the _Ministry of the Interior_ to create the debt position based on the information received. In turn, the _Ministry of the Interior_ will send the notice number and the data of the payment beneficiary in response.

Below is an example of the structure that must be transmitted via the _datiSpecificiServizio_ tag in base64 format.

```xml
<pagamentoPratica xmlns="http://PuntoAccessoPSP.spcoop.gov.it/pagamentoPratica">
  <codicePratica>A001</codicePratica> <!-- identifies passport service -->
  <pagatore>
    <codiceFiscalePagatore>RSSMRA80A01H501U</codiceFiscalePagatore>
    <denominazionePagatore>Mario Rossi</denominazionePagatore>
  </pagatore>
  <intestatario>
    <codiceFiscaleIntestatario>VRNGPP80A01H501U</codiceFiscaleIntestatario>
    <denominazioneIntestatario>Giuseppe Verdi</denominazioneIntestatario>
  </intestatario>
</pagamentoPratica>

```

The XSD specification is available [here](https://github.com/pagopa/pagopa-api/blob/SANP3.10.0/catalogo-servizi/A001_Passaporto_1_0_0.xsd).

In addition, the receipt that the PSP sends to the user must contain, in addition to what is already required by the specifications [in the relevant section](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/lBilmEcN90PbMrjKX1ww/prestatore-di-servizi-di-pagamento/attestazione-di-pagamento), the barcode of the debt position's notice code, in [GS1-128](https://gs1it.org/assistenza/standard-specifiche/simbologie-codici-a-barre/#gs1-128-per-il-pagamento-dei-bollettini) format according to the characteristics listed below&#x20;

| Characteristic                | Value                                                                                   |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| Narrow                        | 0.25 / 0.30 mm                                          |
| Wide                          | 0.625 / 0.75 mm                                         |
| N/W ratio                     | 1 / 2.5 (binding, regardless of the N/W pair chosen) |
| Bar height                    | ~14 mm                                                                  |
| Bar and space width tolerance | ± 10%                                                                                   |
