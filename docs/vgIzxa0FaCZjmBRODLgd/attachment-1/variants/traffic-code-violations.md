---

description: \>-  
This model takes into account payment notices whose due date depend on the notification date, and explain better how to calculate the amounts to be paid.
---

# Traffic code violations

## Format A4 (standard)

{% hint style="success" %} You can use this model for all the notices whose due date depends on the date of notification, and the latter is not known the moment they are sent (or it is not possible to update the amount afterwards). {% endhint %}

{% hint style="warning" %} If the creditor has a postal current account for collections, also the [postal-payment-slip.md](../../attachment-2/technical-specifications/payment-data/postal-payment-slip.md "mention") must be included. In this case, you must use two different pages: one for the amount discounted 30%, the other for the reduced amount. {% endhint %}

{% @figma/embed fileId="os2kysGJOwD5GwyZIRsG5O" nodeId="0:1" url="https://www.figma.com/file/os2kysGJOwD5GwyZIRsG5O/Violazioni-CDS?node-id=0%3A1" %}

### Available resources

{% file src="../../.gitbook/assets/pagoPA-Avvisi-340-violazioniCDS (1).zip" %} pagoPA payment notice model in case of an unknown notification date (SVG and PDF). {% endfile %}

## Format for thermal printers

This model is used for printouts using thermal printers on a receipt, usually used by local police. The receipt contains a part related to the report —by the local police—and a part related to the actual payment notice, whose specifications are described on this page. 

{% hint style="info" %} The structure of the notice can change depending on the type of dispute, the provided hardware and the collection methods. This page provides a description of the general structure, whereas you can see various applications of the model in section [examples.md](../examples.md "mention"). {% endhint %}

{% hint style="success" %} The model also includes a variant that uses the system font, which can be used if the printer does not support the use of other fonts. {% endhint %}

{% hint style="warning" %} The information contained in the section [where-to-pay.md](../../attachment-2/technical-specifications/where-to-pay.md "mention") is standard and must not be changed, or repeated in other sectiosn managed by the institution. {% endhint %}

{% @figma/embed fileId="K9NAcE1wiZJvRiGh1FLAMC" nodeId="0:1" url="https://www.figma.com/file/K9NAcE1wiZJvRiGh1FLAMC/Violazione-CDS---Stampante-Termica?node-id=0%3A1" %}

### Available resources

{% file src="../../.gitbook/assets/pagoPA-Avvisi-340-violazioniCDS-StampaTermica.zip" %} pagoPA payment notice model for thermal printers (SVG and PDF). {% endfile %}

### 