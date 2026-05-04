# Messages that indicate a payment

Messages that indicate a payment are messages that contain a **notification of payment** and that give the user the possibility to pay it in-app by pressing the "See notification" button.

These messages must:

* explain **what the payment is for** and provide any additional information;
* indicate the **amount** to be paid;
* clearly specify the **date by which the payment must be made**.

{% tabs %}
{% tab title="✅ A well written payment message" %}
**`Title`**\
`Violation of the traffic code`

**`Message`**\
`Hi Maria Rossi,`

`At [12:44] on [01/01/2022], in [Via Ettore Ponti 78, Verona], the driver of the vehicle with license plate number [license plate number] committed these violations:`

* **`[Type of violation]`**\
  `See the report (link).`

`Amount: xx.yy € (already discounted 30%)`

`If you pay by [mm/dd/yy] the notification expenses will not be charged.`

`[See notification]`

**In this case, the message:**

✅ is conversational and written using clear language;

✅ is self-consistent;

✅ does not contain grammatical errors.

✅ contains information that is useful for the recipient, who does not have to search for it somewhere else;

✅ makes it possible to receive more information via an external link;
{% endtab %}

{% tab title="❌ A payment message to improve" %}
**`Title`**\
`CITY OF IPAZIA`

**`Message`**\
`Notification of payment number 12345678912345678`\
`Due from Maria Rossi`\
`Amount €xxx.yy`\\

**`Reason`**` `` ``TARI (TAX ON WASTE) PAYMENT NO. 112211221122 `\\

**`Deadline`**`: dd/mm/yy`\
`You can pay directly in-app by pressing Pay, or using all of the payment channels of the PagoPA circuit. For more information see the service tab at the following link.`

`[See notification]`

**In this case, the message:**

❌ in this case the message title is not correct as it includes the name of the institution and not the subject of the message;

❌ it is not conversational;

❌ the information is fragmented and does not have any context;

❌ there is a content error that is misleading for the user (the button is not “Pay” but “See notification");

❌ there are some stylistic errors (for example, "PagoPA" should be"pagoPA", as specified in the [brand guidelines](http://127.0.0.1:5000/s/8phwN5u2QXllSKsqBjQU/specifiche-tecniche/il-logo-pagopa)).
{% endtab %}
{% endtabs %}

### Maximum payment amounts with IO

At the moment, the payment methods that can be registered in the app allow citizens to pay the **maximum amounts that vary depending on the method**.

The method that guarantees the highest payment amount, i.e. €9,000, is American Express. Visa and Mastercard circuits can arrive up to €6,000 if the user selects Nexi as the payment service provider (PSP), but also the maximum limits set by the bank must also be considered. These parameters can change over time.

{% hint style="info" %}
**An example of maximum amounts**

A citizen receives a notification of payment for an amount equal to €5,400. Potentially they can pay using their Mastercard saved in-app, selecting Nexi as the PSP. However, their card has a maximum monthly amount of €1,500 set for home banking. In this case, the payment will fail during the last step.
{% endhint %}

Therefore we recommend **paying particular attention to the requested amounts** and, if they exceed high amounts (such as €1,500 in the example), to provide the option to make the payment in installments by sending various payment notifications, whose sum equals the total amount that is due.

{% hint style="info" %}
For more information about payment methods, go to the [dedicated section](https://www.pagopa.gov.it/it/cittadini/trasparenza-costi/) of the pagoPA website.
{% endhint %}
