---

description: \>-  
Use this portion to indicate the details regarding making a payment in installments, if applicable.
---

# Multiple installments

{% hint style="info" %} **New:** it is now possible to insert the installments also on the first page! {% endhint %}

{% hint style="warning" %} If the creditor has a postal current account for collections, also the [postal-payment-slip.md](postal-payment-slip.md "mention") must be included immediately after this portion. {% endhint %}

This model groups the installments in multiples of 2 or 3, so that it is always possible to create a notice for any fractioning of the payment, minimizing the number of pages.

## Layout con multiples of 2

![Detailed information about the "Payment data (installments in multiples of 2)” section in the pagoPA payment notice.](../../../.gitbook/assets/2 Rate (1).png)

### ""NOTICE.INSTALLMENTS.""<mark style="color:red;">""n""</mark>"".AMOUNT""

{% tabs %} {% tab title="Definizione" %} Amount of the installment {% endtab %}

{% tab title="Tipo" %} Number {% endtab %}

{% tab title="Dimensioni" %} Maximum value 999,999,999.99 {% endtab %}

{% tab title="Note" %} In Italian, thousand places are separated by a dot, and decimals are separated by a comma. {% endtab %} {% endtabs %}

### ""NOTICE.INSTALLMENTS.""<mark style="color:red;">""n""</mark>"".DATE""

{% tabs %} {% tab title="Definizione" %} Installment due date {% endtab %}

{% tab title="Tipo" %} Date {% endtab %}

{% tab title="Formato" %} dd/mm/yyyy {% endtab %}

{% tab title="Note" %} If there is no due date, see [notice-without-expiration.md](../../../attachment-1/variants/notice-without-expiration.md "mention") {% endtab %} {% endtabs %}

### ""NOTICE.INSTALLMENTS.""<mark style="color:red;">""n""</mark>"".CODE""

{% tabs %} {% tab title="Definizione" %} Notice code of the installment {% endtab %}

{% tab title="Tipo" %} Number {% endtab %}

{% tab title="Dimensioni" %} 22 characters, including spaces {% endtab %}

{% tab title="Formato" %} The numbers are grouped into groups of 4, separated by a space. {% endtab %}

{% tab title="Note" %} For the generation rules, see [qr-code.md](qr-code.md "mention") {% endtab %} {% endtabs %}

### ""NOTICE.INSTALLMENTS.""<mark style="color:red;">""n""</mark>"".QRCODE""

{% tabs %} {% tab title="Definizione" %} Two-dimensional barcode for the installment {% endtab %}

{% tab title="Tipo" %} Image {% endtab %}

{% tab title="Dimensioni" %} 25×25mm {% endtab %}

{% tab title="Formato" %} The QR code must be vectorial, on a transparent or white background. {% endtab %}

{% tab title="Note" %} For the generation rules, see [qr-code.md](qr-code.md "mention") {% endtab %} {% endtabs %}

#### See also

* [#ente-cf](../information-about-the-creditor.md#ente-cf "mention")
* [#ente-cbill](single-installment.md#ente-cbill "mention")
* [#destinatario-nomecompleto](../information-about-the-recipient.md#destinatario-nomecompleto "mention")
* [#avviso-oggetto](../header.md#avviso-oggetto "mention")

## Layout con multiples of 3

![Detailed information about the "Payment data (installments in multiples of 3)” section in the pagoPA payment notice.](../../../.gitbook/assets/3 Rate.png)

{% hint style="info" %} If necessary for space reasons, you can omit the item **Recipient**. {% endhint %}

## Other cases

If the number of installments cannot be divided by 2 or by 3, it is possible to freely select one of the two provided layouts—repeating the same module on the same page, as shown in the following diagram:

![Repeat the same layout on the same sheet (Example A). Do not mix different module on the same sheet (Examples B and C).](../../../.gitbook/assets/7 rate.png)