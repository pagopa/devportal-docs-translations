# ✉️ Inviare un messaggio

## Cosa sono i messaggi?

I messaggi sono comunicazioni personali dirette a un cittadino specifico, identificato tramite il suo Codice Fiscale. Al momento non è possibile inviare messaggi a più cittadini con una sola chiamata.

Per saperne di più, consulta la pagina [Inviare messaggi](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi "mention") nel [manuale dei Servizi](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/xWONfJmawghGo2ekuaKh/).

## Come funziona l'invio dei messaggi?

<details>

<summary><mark style="color:blue;">Step 1</mark> - Crea un servizio</summary>

Per inviare un messaggio, devi prima [pubblicare-un-servizio](../pubblicare-un-servizio/ "mention").

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Testa il contenuto del messaggio</summary>

Prima di andare in produzione puoi testare il contenuto dei messaggi. Leggi la pagina [messaggi-di-test.md](messaggi-di-test.md "mention").

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Verifica di poter contattare il destinatario</summary>

Ogni volta che invii un messaggio, devi assicurarti che il destinatario esista e che abbia dato il consenso a ricevere comunicazioni per quello specifico servizio.

Per maggiori informazioni scopri le API [get-a-user-profile-using-post.md](../../api-e-specifiche/api-messaggi/get-a-user-profile-using-post.md "mention") e [get-subscriptions-feed.md](../../api-e-specifiche/api-messaggi/get-subscriptions-feed.md "mention").

</details>

<details>

<summary><mark style="color:blue;">Step 4</mark> - Invia il messaggio</summary>

Per farlo, usa l'API [submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md "mention").

Se intendi [inviare un messaggio a contenuto remoto](inviare-un-messaggio-a-contenuto-remoto.md), segui le [relative istruzioni](inviare-un-messaggio-a-contenuto-remoto.md#come-funziona-linvio-di-un-messaggio-a-contenuto-remoto) su come integrarti.

Puoi anche aggiungere [allegati PDF/A](aggiungere-allegati.md). Per maggiori informazioni leggi le [relative istruzioni](aggiungere-allegati.md).

</details>

<details>

<summary><mark style="color:blue;">Step 5</mark> - Controlla l'esito</summary>

Interroga l’API [get-message.md](../../api-e-specifiche/api-messaggi/get-message.md "mention"), utilizzando il Codice Fiscale del destinatario e l’identificativo del messaggio ottenuto nello step precedente.

Se hai sottoscritto l'accordo Premium, potrai anche conoscere lo stato di lettura e/o di pagamento da parte del destinatario.

</details>

{% hint style="info" %}
Alcune funzionalità menzionate richiedono la sottoscrizione di un accordo Premium: consulta il [Manuale dei Servizi](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi#messaggi-premium) per maggiori informazioni.
{% endhint %}

## Modalità di invio

Ci sono due modalità di invio dei messaggi, utili a seconda del tipo di contenuto che devi comunicare.

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption><p>Sequenza delle principali fasi nei due scenari di invio</p></figcaption></figure>

### Messaggio tradizionale

Si tratta della forma di comunicazione più semplice e che richiede meno integrazioni: il mittente definisce il contenuto del messaggio e lo invia.

[Scopri come inviare un messaggio tradizionale ->](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md)

### Messaggio a contenuto remoto

Si tratta di un messaggio le cui informazioni vengono recuperate dai sistemi dell'Ente mittente **ogni volta** che il messaggio viene fruito dall'utente finale. I messaggi a contenuto remoto sono pensati in particolare per le comunicazioni che veicolano informazioni sensibili.

[Scopri come inviare un messaggio a contenuto remoto ->](inviare-un-messaggio-a-contenuto-remoto.md)

{% hint style="info" %}
Al momento dell'invio, gli enti che hanno aderito all'offerta Premium possono indicare, per ciascun messaggio da inviare, se sfruttare o meno le funzionalità aggiuntive previste dall'accordo.
{% endhint %}

## Gestione degli errori

Tutte le API di IO possono restituire delle risposte di errore, definite nelle specifiche di ciascuna AP&#x49;_._ **È necessario implementare lato client dei meccanismi per la corretta gestione di questo tipo di risposte.**

{% hint style="info" %}
**Esempio:** tutte le API possono restituire lo `status code 429,` che rappresenta un segnale che indica il superamento del rate consentito. In questo caso, è necessario implementare un meccanismo di _retry_ e diminuire il _rate_ delle richieste inserendo delle pause.
{% endhint %}
