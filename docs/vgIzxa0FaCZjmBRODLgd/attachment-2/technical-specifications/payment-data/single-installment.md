---

description: \>-  
Use this portion to indicate the details regarding making a single payment, if applicable.
---

# Single installment

{% hint style="warning" %} If the creditor has a postal current account for collections, also the [postal-payment-slip.md](postal-payment-slip.md "mention") must be included immediately after this portion. {% endhint %}

![Detailed information about the "Single installment” section in the pagoPA payment notice.](../../../.gitbook/assets/Rata Unica.png)

### ""NOTICE.QRCODE"" <a href="#avviso-qrcode" id="avviso-qrcode"></a>

{% tabs %} {% tab title="Definizione" %} Two-dimensional barcode {% endtab %}

{% tab title="Tipo" %} Image {% endtab %}

{% tab title="Dimensioni" %} 25×25mm {% endtab %}

{% tab title="Formato" %} The QR code must be vectorial, on a transparent or white background. {% endtab %}

{% tab title="Note" %} For the generation rules, see [qr-code.md](qr-code.md "mention") {% endtab %} {% endtabs %}

### ""NOTICE.CODE"" <a href="#avviso-codice" id="avviso-codice"></a>

{% tabs %} {% tab title="Definizione" %} Notice code {% endtab %}

{% tab title="Tipo" %} Number {% endtab %}

{% tab title="Dimensioni" %} 22 characters, including spaces {% endtab %}

{% tab title="Formato" %} The numbers are grouped into groups of 4, separated by a space. {% endtab %}

{% tab title="Note" %} For the generation rules, see [qr-code.md](qr-code.md "mention") {% endtab %} {% endtabs %}

### ""INSTITUTION.CBILL"" <a href="#ente-cbill" id="ente-cbill"></a>

{% tabs %} {% tab title="Definizione" %} Interbank code of the creditor, also known as the SIA code. {% endtab %}

{% tab title="Tipo" %} String {% endtab %}

{% tab title="Formato" %} ALL CAPS {% endtab %}

{% tab title="Note" %} The list of the CBILL codes is available on the [CBILL website](https://www.cbill.it/chi-puoi-pagare). {% endtab %} {% endtabs %}

#### See also

* [#avviso-data](../amount-and-due-date.md#avviso-data "mention")
* [#avviso-oggetto](../header.md#avviso-oggetto "mention")
* [#destinatario-nomecompleto](../information-about-the-recipient.md#destinatario-nomecompleto "mention")
* [#ente-cbill](single-installment.md#ente-cbill "mention")
* [#ente-cf](../information-about-the-creditor.md#ente-cf "mention")