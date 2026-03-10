# Messages that indicate a payment

Messages that indicate a payment are messages that contain a **notification of payment** and that give the user the possibility to pay it in-app by pressing the "See notification" button.

These messages must:

* explain **what the payment is for** and provide any additional information;
* indicate the **amount** to be paid;
* clearly specify the **date by which the payment must be made**.

{% tabs %}
{% tab title="✅ A well-written payment message" %}
\*\*\`Titolo\`\*\* \`Infrazione al codice stradale\`

**`Messaggio`**\
`Ciao Maria Rossi,`

`alle ore [12:44] del giorno [01/01/2022], in [Via Ettore Ponti 78, Verona], il conducente del veicolo targato [Numero targa] ha commesso queste violazioni:`

* **`[Tipologia di violazione]`**\
  `Vedi il verbale (link).`

`Importo: xx,yy € (già scontato del 30%)`

`Se paghi entro il [mm/gg/aa], non ti verranno addebitate le spese di notifica.`

`[Vedi Avviso]`

**In this case, the message:**

✅ is conversational and written using clear language;

✅ is self-consistent;

✅ does not contain grammatical errors.

✅ contains information that is useful for the recipient, who does not have to search for it somewhere else;

✅ makes it possible to receive more information via an external link;
{% endtab %}

{% tab title="❌ A payment message to be improved" %}
\*\*\`Titolo\`\*\* \`CITTA' DI IPAZIA\`

**`Messaggio`**\
`Avviso di pagamento Numero 12345678912345678`\
`Intestatario Maria Rossi`\
`Importo xxx,yy €`\\

**`Causale`**` `` ``PAGAMENTO TARI NR 112211221122 `\\

**`Scadenza`**`: gg/mm/aa`\
`Puoi pagare direttamente in app premendo Paga, oppure tramite tutti i canali di pagamento del circuito PagoPA. Per ulteriori informazioni visualizza la scheda del servizio al link sottostante.`

`[Vedi Avviso]`

**In this case, the message:**

❌ in this case the message title is not correct as it includes the name of the institution and not the subject of the message;

❌ it is not conversational;

❌ the information is fragmented and does not have any context;

❌ there is a content error that is misleading for the user (the button is not “Pay” but “See notification");

❌ there are some stylistic errors (for example, "PagoPA" should be"pagoPA", as specified in the [brand guidelines](https://app.gitbook.com/s/8phwN5u2QXllSKsqBjQU/specifiche-tecniche/il-logo-pagopa)).
{% endtab %}
{% endtabs %}

### Maximum payment amounts with IO

At the moment, the payment methods that can be registered in the app allow citizens to pay the **maximum amounts that vary depending on the method**.

The method that guarantees the highest payment amount, i.e. €9,000, is American Express. Visa and Mastercard circuits can arrive up to €6,000 if the user selects Nexi as the payment service provider (PSP), but also the maximum limits set by the bank must also be considered. These parameters can change over time.

{% hint style="info" %}
\*\*An example of maximum amounts\*\*

A citizen receives a notification of payment for an amount equal to €5,400. Potentially they can pay using their Mastercard saved in-app, selecting Nexi as the PSP. However, their card has a maximum monthly amount of €1,500 set for home banking. In this case, the payment will fail during the last step.
{% endhint %}

Therefore we recommend **paying particular attention to the requested amounts** and, if they exceed high amounts (such as €1,500 in the example), to provide the option to make the payment in installments by sending various payment notifications, whose sum equals the total amount that is due.

{% hint style="info" %}
For more information about payment methods, go to the \[dedicated section]\(https://www.pagopa.gov.it/it/cittadini/trasparenza-costi/) of the pagoPA website.
{% endhint %}
