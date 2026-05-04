---

description: This section contains the data of the person receiving the payment notice.
---

# Information about the recipient

![Detailed information about the "Information about the recipient” section in the pagoPA payment notice.](../../.gitbook/assets/Ente e Destinatario.png)

### ""RECIPIENT.FC"" <a href="#destinatario-cf" id="destinatario-cf"></a>

{% tabs %} {% tab title="Definizione" %} Fiscal code or VAT no. of the debtor who has the debt position. {% endtab %}

{% tab title="Tipo" %} String {% endtab %}

{% tab title="Dimensioni" %} Maximum 16 characters {% endtab %}

{% tab title="Formato" %} ALL CAPS {% endtab %}

{% tab title="Note" %} It is possible to omit the value only if it is not known, for example a foreign citizen who does not have an Italian fiscal code. {% endtab %} {% endtabs %}

### ""RECIPIENT.COMPLETENAME"" <a href="#destinatario-nomecompleto" id="destinatario-nomecompleto"></a>

{% tabs %} {% tab title="Definizione" %} First and last name of the debtor who has the debt position {% endtab %}

{% tab title="Tipo" %} String {% endtab %}

{% tab title="Dimensioni" %} Maximum 70 characters {% endtab %}

{% tab title="Formato" %} Capitalize first letters {% endtab %}

{% tab title="Note" %} In the case of a single row, alignment must be with the upper edge. {% endtab %} {% endtabs %}

### ""RECIPIENT.ADDRESS"" <a href="#destinatario-indirizzo" id="destinatario-indirizzo"></a>

{% tabs %} {% tab title="Definizione" %} Address of the debtor who has the debt position {% endtab %}

{% tab title="Tipo" %} String {% endtab %}

{% tab title="Dimensioni" %} Maximum 140 characters {% endtab %}

{% tab title="Note" %} In the case of a single row, alignment must be with the upper edge. {% endtab %} {% endtabs %}