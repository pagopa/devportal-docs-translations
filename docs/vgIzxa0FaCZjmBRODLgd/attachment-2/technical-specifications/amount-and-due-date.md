---

description: \>-  
This section contains information about how much to pay, how to pay and the relative due dates.
---

# Amount and due date

![Detailed information about the "Amount and due date” section in the pagoPA payment notice.](../../.gitbook/assets/Importo e Dove.png)

### ""NOTICE.AMOUNT"" <a href="#avviso-importo" id="avviso-importo"></a>

{% tabs %} {% tab title="Definizione" %} Payment amount {% endtab %}

{% tab title="Tipo" %} Maximum value 999,999,999.99 {% endtab %}

{% tab title="Formato" %} In Italian and German, thousand places are separated by a dot, and decimals are separated by a comma (e.g.: 1.020,99).

In English, thousand places are separated by a comma, and decimals are separated by a dot (e.g.: 1,020.99). {% endtab %} {% endtabs %}

### ""NOTICE.DATE"" <a href="#avviso-data" id="avviso-data"></a>

{% tabs %} {% tab title="Definizione" %} Payment due date {% endtab %}

{% tab title="Tipo" %} Date {% endtab %}

{% tab title="Formato" %} dd/mm/yyyy {% endtab %}

{% tab title="Note" %} If there is no due date, see the variant [notice-without-expiration.md](../../attachment-1/variants/notice-without-expiration.md "mention") {% endtab %} {% endtabs %}

### ""NOTICE.INSTALLMENTS.INFO"" <a href="#avviso-rate-info" id="avviso-rate-info"></a>

{% tabs %} {% tab title="Definizione" %} A fixed text that explains the option of paying in installments. {% endtab %}

{% tab title="Tipo" %} Array {% endtab %}

{% tab title="Valori" %}

* <mark style="color:red;">""null""</mark>
* "You can pay the full amount or in""<mark style="color:purple;">""Notice.Installments.Total""</mark>""installments""
* ""You can pay in""<mark style="color:purple;">""Notice.Installments.Total""</mark>""installments"" {% endtab %}

{% tab title="Note" %} The text is shown only if ""\<number_installments>"" is greater than or equal to 2. {% endtab %} {% endtabs %}

### ""NOTICE.INSTALLMENTS.TOTAL"" <a href="#avviso-rate-totale" id="avviso-rate-totale"></a>

{% tabs %} {% tab title="Definizione" %} If applicable, it indicates the total number of available installments. {% endtab %}

{% tab title="Tipo" %} Number {% endtab %}

{% tab title="Valori" %} Whole number greater than 1 {% endtab %}

{% tab title="Note" %} Variable to be used in [#avviso.rate.info](amount-and-due-date.md#avviso.rate.info "mention") {% endtab %} {% endtabs %}