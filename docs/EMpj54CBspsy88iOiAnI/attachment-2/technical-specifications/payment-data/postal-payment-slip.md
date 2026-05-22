---
description: >-
  If the creditor has a postal current account for collections, also the PA
  postal payment slip must be included.
---

# PA postal payment slip

## Single installment

The PA postal payment slip must be inserted after the [single-installment.md](single-installment.md "mention") portion, as shown in the example:

<figure><img src="../../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

## Multiple installments

The various installments must be inserted after the [multiple-rates.md](multiple-rates.md "mention") portion, as shown in the examples.

### Layout con multiples of 2

<figure><img src="../../../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

### Layout con multiples of 3

<figure><img src="../../../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

## Placeholder specifications and texts

{% hint style="info" %}
For the specifications, refer to the \[\_Print your own manual\_]\(https://business.poste.it/business/files/1476473314849/manuale-stampa-in-proprio.pdf) from Poste Italiane, available at \[poste.it]\(https://www.poste.it)
{% endhint %}

### \<numero\_cc\_postale>

{% tabs %}
{% tab title="Definizione" %}
Number of the postal current account
{% endtab %}

{% tab title="Tipo" %}
Number
{% endtab %}

{% tab title="Dimensioni" %}
Maximum 20 characters
{% endtab %}
{% endtabs %}

### \<intestatario\_conto\_corrente\_postale>

{% tabs %}
{% tab title="Definizione" %}
Creditor postal current account holder
{% endtab %}

{% tab title="Tipo" %}
String
{% endtab %}

{% tab title="Dimensioni" %}
Maximum 50 characters
{% endtab %}
{% endtabs %}

### \<data\_matrix>

{% tabs %}
{% tab title="Definizione" %}
Two-dimensional matrix barcode
{% endtab %}

{% tab title="Tipo" %}
Image
{% endtab %}

{% tab title="Dimensioni" %}
25×25mm
{% endtab %}

{% tab title="Formato" %}
The data matrix must be vectorial, monochromatic and on a white background.
{% endtab %}

{% tab title="Note" %}
For the datamatrix specifications, refer to the Print your own manual from Poste Italiane, available at \[poste.it]\(https://www.poste.it).
{% endtab %}
{% endtabs %}

#### `<autorizzation>` <a href="#less-than-autorizzazione-greater-than" id="less-than-autorizzazione-greater-than"></a>

{% tabs %}
{% tab title="Definizione" %}
Poste Italiane authorization to print your own
{% endtab %}

{% tab title="Tipo" %}
String
{% endtab %}

{% tab title="Valori" %}
```
AUT. DB/xxxx/xxx xxxxx DEL xx/xx/xxxx
```
{% endtab %}

{% tab title="Note" %}
The color of the text is not solid black, but has a density of 70%. Authorization can be requested from Poste Italiane as defined in the "Print your own manual", available at \[poste.it]\(https://www.poste.it).
{% endtab %}
{% endtabs %}

### \<name\_lastname\_receipient>

See [#destinatario-nomecompleto](../information-about-the-recipient.md#destinatario-nomecompleto "mention").

### \<payment\_subject>

See [#avviso-oggetto](../header.md#avviso-oggetto "mention").

### \<notice\_code>

See [#avviso-codice](single-installment.md#avviso-codice "mention").

### \<fc\_institution>

See [#ente-cf](../information-about-the-creditor.md#ente-cf "mention").

### `<amount>`

See [#avviso-importo](../amount-and-due-date.md#avviso-importo "mention")
