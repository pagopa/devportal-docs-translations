---

description: \>-  
In this section (“Annex 2") you can find specific information in order to create a payment notice in all foreseen cases.
---

# 📐 Technical specifications

{% hint style="info" %} Are you looking for information to create print formats? See the section [design elements](../design-elements/ "mention")! {% endhint %}

## Page format

The specifications are intended to guarantee reproducibility in an A4 format suitable for printing. The [variants](../../attachment-1/variants/ "mention") section provides other formats, such as those suitable for receipts of portable thermal transfer printers.

## Back-front printing

It is possible to print the pagoPA payment notice on both sides of a sheet of page, making sure to select a paper density that does not make it difficult to read the provided information, in particular the [qr-code.md](payment-data/qr-code.md "mention").

## Text coding

It is mandatory to use the coding of UTF-8 characters that support all the Unicode characters, including those extended to languages such as Slovenian (č, š, ž) and German (ä, ö, ü, ß). This guarantees that multi-language texts can be correctly displayed and managed.

## Page structure

The payment notice is comprised of various modules. There are some fixed and other variables based on the type of payment and the way in which the creditor manages collections.

{% hint style="info" %} When you create your model, respect the order for entering the modules described on this page—but always think of the structure in a _dynamic_ manner: if your payment does not have a single installment, you can enter the installment details already on page 1. {% endhint %}

| Order| Name|
|----------|----------|
| 1| [header.md](header.md "mention")|
| 2.1| [information-about-the-creditor.md](information-about-the-creditor.md "mention")|
| 2.2| [information-about-the-recipient.md](information-about-the-recipient.md "mention")|
| 3.1| [amount-and-due-date.md](amount-and-due-date.md "mention")|
| 3.2| [where-to-pay.md](where-to-pay.md "mention")|
| 4| [Payment data](payment-data/ "mention")|

## Placeholder variable and texts <a href="#variabili" id="variabili"></a>

The various pages that describe the modules use placeholder texts, which are identified by keys according to the syntax ""property1.property2"", such as, for example, [#avviso-importo](amount-and-due-date.md#avviso-importo "mention") or [#destinatario-cf](information-about-the-recipient.md#destinatario-cf "mention").

The images, instead, are shown with gray blocks—identified always with a variable (e.g.:   [#avviso-qrcode](payment-data/single-installment.md#avviso-qrcode "mention")).

The data models that include all the possible variables used in the notice is the follows:


```yaml
notice:
    subject: TARI 2021
    amount: 150,00
    date: 31/01/2022
    code: 0000 0000 0000 0000 00
    qrcode: PAGOPA|002|000000000000000000|01199250158|0000015000
    installments:
        total: 3
        info: "You can pay the full amount or in 3 installments"
        1:
            amount: 50,00
            date: 31/12/2021
            code: 0000 0000 0000 0000 00
            qrcode: PAGOPA|002|000000000000000000|01199250158|0000015000
        2:
            amount: 50,00
            date: 31/01/2022
            code: 0000 0000 0000 0000 00
            qrcode: PAGOPA|002|000000000000000000|01199250158|0000015000
        3:
            amount: 50,00
            date: 28/02/2022
            code: 0000 0000 0000 0000 00
            qrcode: PAGOPA|002|000000000000000000|01199250158|0000015000
institution:
    cf: 01199250158
    cbill: A0EDT
    name: Municipality of Milan
    sector: Local taxes
    info: "For information www.comune.milano.it/TARI · tel. 02 0202"
    logo: logo-ente.png
    canale: 
        online: "on the website of the Municipality of Milan"
        physical: ""
recipient:
    cf: RSSMRA60D20F205R
    completename: Mario Rossi
    address: Vicolo Corto 12 20133 Milano MI
```

## Fixed texts

Texts that cannot be changed are indicated in section [#stringhe-dei-testi-fissi](../../attachment-1/variants/translations/#stringhe-dei-testi-fissi "mention").