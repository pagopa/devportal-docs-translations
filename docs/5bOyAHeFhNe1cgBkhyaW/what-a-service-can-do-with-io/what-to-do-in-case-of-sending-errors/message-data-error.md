# Error in the message data

Before sending a message, we always suggest to:

* **use one of the models** provided by PagoPA S.p.A, if present and applicable to your case;
* **send a test message to multiple colleagues**, following the [instructions in the technical guide](http://127.0.0.1:5000/s/coSKRte21UjDBRWKLtEs/funzionalita/inviare-un-messaggio/messaggi-di-test).
* **request the recipients of the test message to check all the data** in the message, such as the title, date and any other information it contains.
* **repeat the test** until the message no longer needs any changes.

{% hint style="warning" %}
**Important**

If the message includes a payment notification, before sending it first check that the relative payments are due. Otherwise, the citizens will receive a notification that they cannot pay.
{% endhint %}

If a message is still sent with this type of error, we suggest **assessing the severity of the error** with respect to the content of the message.

{% hint style="info" %}
**An example**

A typing error in the body of the message is not serious: the recipient will still understand the information contained in the communication.

A deadline or an incorrect amount are instead serious errors.
{% endhint %}

**If the error is serious**, we suggesting sending the recipients an **error correction message**. The message must:

* be entitled \`\`Error correction + title of the incorrect message\`;
* include the error that was made;
* include the correct date;
* explain the citizens what they must do with respect to the incorrect message, **especially if the error concerned a notification of payment**.

Finally if the error concerned the **notification of payment** (recipient, amount...), the **amount due must be canceled** to prevent the citizens from paying an amount that is not due. For more information, [consult the SANP (implementation specifications of the payment node) of pagoPA.](https://docs.pagopa.it/sanp/casi-duso/pagamento-di-un-avviso-presso-psp)

{% hint style="info" %}
Any questions? Before sending an error correction message **contact IO support** by sending an email to [onboarding@io.italia.it](mailto:onboarding@io.italia.it).

Remember that the institution sending the message is solely responsible for the content of the messages.
{% endhint %}
