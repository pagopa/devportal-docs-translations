---

description: \>-  
This page defines the structure of the string to code in the QR code
---

# QR code

Section [.](./ "mention") Requires the use of the QR code to make the payment experience more direct, without having to manually enter the notice data.

The QR code is defined by the standard [ISO/IEC 18004:2015](https://www.iso.org/standard/62021.html).

### String structure

The string must follow the structure shown below:

```xml
<CODICE IDENTIFICATIVO>|<VERSIONE>|<CODICE AVVISO>|<CODICE FISCALE ENTE CREDITORE>|<IMPORTO>
```

The various portions are separated by the symbol ""|""

### Example

```
PAGOPA|002|000000000000000000|00000000000|9999
```

{% hint style="info" %} You can find numerous services online for generating and testing QR codes. {% endhint %}

## Specifications

### Identification code

{% tabs %} {% tab title="Contenuto" %} PAGOPA {% endtab %}

{% tab title="Tipo" %} Fixed text {% endtab %}

{% tab title="Lunghezza" %} 6 characters {% endtab %} {% endtabs %}

### Version

{% tabs %} {% tab title="Contenuto" %} 002 {% endtab %}

{% tab title="Tipo" %} Fixed text {% endtab %}

{% tab title="Lunghezza" %} 3 characters {% endtab %} {% endtabs %}

### Notice code

{% tabs %} {% tab title="Contenuto" %} Notice code, comprised of a concatenation of AUX digits, Application Code and IUV (Univocal Payment Identifier) code {% endtab %}

{% tab title="Tipo" %} String {% endtab %}

{% tab title="Lunghezza" %} 18 characters {% endtab %} {% endtabs %}

### Creditor fiscal code

{% tabs %} {% tab title="Contenuto" %} Fiscal code of the creditor {% endtab %}

{% tab title="Tipo" %} String {% endtab %}

{% tab title="Lunghezza" %} 11 characters {% endtab %} {% endtabs %}

### Amount

{% tabs %} {% tab title="Contenuto" %} Payment amount in euro cents {% endtab %}

{% tab title="Tipo" %} String {% endtab %}

{% tab title="Lunghezza" %} Minimum 2, maximum 11 characters {% endtab %} {% endtabs %}

## Technical characteristics

The following table contains the technical characteristics that must be applied when generating the QR code.

| Characteristic| Value to be used|
|----------|----------|
| Symbol version| 4|
| Modules| 33x33|
| Module width| 3 pixels|
| ECC level| M (max error correction 15%)|
| Character set| UTF-8|

