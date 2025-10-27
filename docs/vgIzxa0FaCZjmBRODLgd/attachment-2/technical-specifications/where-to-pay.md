---

description: \>-  
This section presents the various channels where it is possible to pay a pagoPA notice, online and in person.
---

# Where to pay

{% hint style="info" %} **New:** pay attention to the new texts in this version, they are now easier to implement and simpler and more inclusive for users. {% endhint %}

![Detailed information about the "Where to pay” section in the pagoPA payment notice.](../../.gitbook/assets/Importo e Dove.png)

## Digital channel section

Use one of the two offered variants depending on if it is possible to pay on the creditor’s website or not. **Do not change the rest of the text.**

{% tab title="Se non si può pagare dal sito dell'Ente" %}
```markdown
**PAY WITH THE IO APP**
or with your Home Banking, with your payment app or with other enabled channels.
```
{% endtab %}

{% tab title="Se si può pagare dal sito dell'Ente" %}
```markdown
**PAY WITH THE IO APP**
or [on the website of the \<Institution.Name>, ]with your Home Banking, with your payment app or with other enabled channels.
```

The text contained between square brackets shown in the example follows the rules of [#ente-canale](where-to-pay.md#ente-canale "mention").
{% endtab %}
{% endtabs %}

{% hint style="warning" %} Do you need to enter the website of the institution? Do not change this text, but use the placeholder [#ente-info](information-about-the-creditor.md#ente-info "mention") {% endhint %}

<details>

<summary>Alternative text for Public service operators</summary>

Public service operators have the option to promote their digital channels using the following variant:

```markdown
**PAY ONLINE**
with the IO app [on the website of the \<Institution.Name>, ]with your Home Banking, with your payment app or with other enabled channels.
```

The text contained between square brackets shown in the example follows the rules of [#ente-canale](where-to-pay.md#ente-canale "mention").

</details>

### ""INSTITUTION.CHANNEL.ONLINE"" <a href="#ente-canale" id="ente-canale"></a>

{% tabs %} {% tab title="Definizione" %} A fixed text that lists the website (or app) of the creditor among the available channels, if it permits to pay the notice, {% endtab %}

{% tab title="Tipo" %} Array {% endtab %}

{% tab title="Valori" %}

* <mark style="color:red;">""null""</mark>
* ""on the website of""[""Institute.Name""](information-about-the-creditor.md#ente-nome)"","" 
* ""on the app of""[""Institute.Name""](information-about-the-creditor.md#ente-nome)"","" 
* ""on the website or app of""[""Institute.Name""](information-about-the-creditor.md#ente-nome)"","” {% endtab %}

{% tab title="Note" %} Variable to use in the explanation text of the digital channels, as described in [#sezione-canali-digitali](where-to-pay.md#sezione-canali-digitali "mention"). {% endtab %} {% endtabs %}

## Physical channel section

Use one of the two offered variants depending on whether or not it is possible to pay using the physical channels of the creditor, such example using a hospital’s automatic payment points. **Do not change the rest of the text.**

{% tabs %}
{% tab title="Se non si può pagare presso l'Ente" %}
```markdown
**PAY IN PERSON**
at banks and ATMs, at post offices and Punto Poste locations, bars, newsstands, betting offices, supermarkets, tobacco shops and other participating merchants.
```
{% endtab %}

{% tab title="Se si può pagare presso l'Ente " %}
```markdown
**PAY IN PERSON**
<Institution.Physical.Channel>at banks and ATMs, at post offices and Punto Poste locations, bars, newsstands, betting offices, supermarkets, tobacco shops and other participating merchants.
```
{% endtab %}
{% endtabs %}

### ""INSTITUTION.PHYSICAL.CHANNEL""

{% tabs %} {% tab title="Definizione" %} A text that mentions the physical channel of the creditor, if it permits to pay the notice. {% endtab %}

{% tab title="Tipo" %} String {% endtab %}

{% tab title="Dimensioni" %} Maximum 50 characters {% endtab %}

{% tab title="Formato" %} Capitalize first letters {% endtab %}

{% tab title="Note" %} Do not enter references to external resources or websites. For this type of information, use the placeholder [#ente-info](information-about-the-creditor.md#ente-info "mention"). {% endtab %} {% endtabs %}