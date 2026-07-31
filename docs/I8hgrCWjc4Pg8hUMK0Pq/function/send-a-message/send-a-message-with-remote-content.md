# Sending a message with remote content

### What are remote content messages?

Remote content messages address the need to convey through IO **communications containing citizens' personal and/or sensitive data**, ensuring their management complies with privacy regulations. In fact, by choosing this sending method, **the information is not stored on IO**, but retrieved from your systems every time the user accesses the message in the app.

For a message, the remotable contents are:

* title;
* body;
* opening preconditions (optional, e.g., disclaimers);
* attachments (Premium).

### What changes?

#### 📐 Architecture

Unlike traditional sending, which involves transmitting the message contents to IO systems at the time of its creation, remote messages ensure that these **contents reside exclusively on your systems** and IO will retrieve them every time the recipient user wants to view them in the app.

This way, IO acts as a **real-time communication** channel between you and your user and only holds the information necessary to allow the retrieval of the message and verify its status.

{% hint style="warning" %}
The management of remote messages implies that your organization is responsible for the contents conveyed through IO, with particular reference to their **accuracy** and **availability** to the user.
{% endhint %}

#### 🕵️‍♂️ Managing sensitive information

As specified, remote messages are designed to ensure a *privacy-compliant* delivery of personal/sensitive information referring to the recipient, **where necessary for the provision of the service.**

{% hint style="warning" %}
We remind you that this sending method **leaves your obligations under current legislation unchanged**, in particular under art. 7.3 of the [IO Guidelines](https://www.agid.gov.it/it/linee-guida#index-8).
{% endhint %}

As a further measure to protect privacy, the [#require_secure_channels](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23require_secure_channels) flag allows you to **mark a message as containing sensitive information**, with the following effects:

* push notifications on the recipient's devices will show a generic invitation to open the message, without displaying the content of the title;
* messages will not be forwarded via email regardless of the preference set by the recipient user.

{% hint style="info" %}
You can also set the `require_secure_channels` flag [directly on the service](https://www.google.com/search?q=../pubblicare-un-servizio/dati-obbligatori/attributi.md%23require_secure_channels), so you don't have to worry about doing it for every single message.
{% endhint %}

#### ✏️ Content updating over time

Unlike traditional messages, remote content messages can be modified **even after sending**: for example, you can correct a typo, or dynamically update information that is no longer valid or misleading (e.g., following the cancellation of an appointment).

When considering this possibility, it is worth remembering that:

* The recipient user **will not receive any notification** in case of an update to the content of a previously received message. In fact, the content can only be refreshed, calling it back from your systems, only when and if the user opens the message in the app;
* The responsibility for the information transmitted via IO remains in any case with the sending entity.

{% hint style="success" %}
In principle, when the context that produced a message changes or new information needs to be transmitted, it is always preferable to **send a new message** to inform the recipient.

When in doubt, always prefer maintaining **informational consistency** towards your users: messages on IO are an important calling card for your organization, [ensure their quality](https://www.google.com/search?q=https://docs.pagopa.it/manuale-servizi/comunicare-un-servizio/i-canali)!
{% endhint %}

1. Your entity sends a remote content message to the recipient citizen to confirm the booking of a healthcare appointment;
2. The recipient reads the message and decides to cancel the appointment through the channels you made available for booking management;
3. Your entity sends the same user a **new message** to confirm the cancellation;
4. To ensure informational consistency, your entity **updates the contents of the first message** by replacing and/or removing the appointment confirmation information and obsolete references.

To make the recipient aware that the contents could be updated over time, the following notice has been included at the bottom of the details of all remote content messages, in its short and extended versions:

{% hint style="info" %}
**IO does not perform any checks** on the invariability over time of the contents of a remote content message. The accuracy and availability of the information contained in the message are always the exclusive responsibility of the sending Entity.
{% endhint %}

{% hint style="danger" %}
As the data controller, you must directly guarantee users the exercise of data subject rights under the GDPR, and any request in this regard will be redirected to you. For example, the right of access under Art. 15 GDPR must be guaranteed to data subjects who request it, including via the contact details present in the service tab.
{% endhint %}

### How does sending a remote content message work?

{% hint style="info" %}
Before you can send remote content messages, you must follow the procedure outlined in [configurazione-remota.md](https://www.google.com/search?q=../../setup-iniziale/configurazione-remota.md)
{% endhint %}

The lifecycle of a remote content message consists of two main stages:

* **Sending** (creation) by your organization's systems;
* **Fruition** (viewing) by the recipient.

Both phases require integration between your systems and IO's.

### Message sending phase

#### Creation of the remote content message

In this phase, it is your systems integrated with IO that request the creation (and therefore the sending) of a new message to a specific recipient. For more information on sending a message on IO, refer to [.](https://www.google.com/search?q=./).

The following table summarizes the main remotable components of an IO message:

As a sending entity, you can decide that the opening of the message must be preceded by content aimed at informing the recipient about specific aspects or circumstances related to the message itself.

Preconditions are an intermediate screen between the message list and the selected message details. The user accesses the message details only if they select the "Continue" button.

In fact, viewing the preconditions **leads to an interruption in the reading flow of a message**. Therefore, it is best to use them only in scenarios where they actually add value to your communication or are otherwise required by current regulations, in order not to degrade the user experience.

**When to use them:**

When it is necessary to draw the citizen's attention to fundamental information, and in any case when required by applicable legislation, for example in communications with legal value where opening the message produces effects in the citizen's legal sphere.

**When not to use them:** 

To transmit notices not strictly related to the content of the message or to add detailed information that can be provided within it or at other moments of the user experience.

The message title is used by the IO app on three occasions:

1. as the visible title in the received message list;
2. as the header of the message details, once opened;
3. in the text of the push notifications linked to the message (where enabled by the user and where the message / service are not marked by you as conveying sensitive information)

Depending on the value of the [#has_remote_content](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23has_remote_content) flag that you will specify in [#third_party_data](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23third_party_data) (see later in this chapter) the **message title** will behave differently:

* if [#has_remote_content](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23has_remote_content)`=true`, the [#subject](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23subject) field indicated when creating the message is used by IO in the received messages list, as the text of the push notification and as the subject of any message forwarding email, but not in the message detail view in the app: this is instead retrieved later (see [#what-happens-when-the-recipient-opens-a-remote-message](https://www.google.com/search?q=inviare-un-messaggio-a-contenuto-remoto.md%23cosa-succede-quando-il-destinatario-apre-un-messaggio-remotizzato)).
**This means that the recipient might see different texts in the message details and outside**. We recommend not differentiating the title substantially, so as to maintain informational consistency between the two texts. Furthermore, we remind you that according to the IO Guidelines, it is not possible to include sensitive information in the message title.
* if [#has_remote_content](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23has_remote_content)`=false` or if you do not include the flag, the [#subject](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23subject) field has the standard functionality of a traditional (non-remote) message: the same textual content is used in the message detail and in all the other contexts mentioned above.

When creating a remote content message ( [#has_remote_content](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23has_remote_content)`=true`) , it is still necessary, in compliance with the IO API interface, to define a **non-remote "courtesy" text (markdown)**, which will be used to compose the message forwarding email that IO users can choose to receive when a message is delivered in the app.

**Markdown limits for forwarding purposes:** min 80, max 134 characters, beyond which the system truncates with an ellipsis.

**Note on forwarding messages via email:** If enabled by the end user, a message sent via IO can be forwarded to their email address. The email contains the beginning of the message body (the first 134 characters), as well as an invitation to open the app to access the full content via a CTA that redirects them. Here is an example of a forwarding email:

{% hint style="info" %}
**Note on attachments (Premium)**

If you have signed the Premium Agreement, your messages can also include **attachments** in PDF format: these will also be transmitted directly from your systems to the app when the recipient opens the message. For more information, refer to [aggiungere-allegati.md](https://www.google.com/search?q=aggiungere-allegati.md)
{% endhint %}

For remote content messages, it is *mandatory* to insert the following additional information in the [#third_party_data](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23third_party_data) block:

{% hint style="warning" %}
Regardless of whether it is remotable, if the message conveys **sensitive information**, you *must always* set the [#require_secure_channels](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23require_secure_channels)`=true` flag
{% endhint %}

### Message fruition phase

#### What happens when the recipient opens a remote content message?

In this phase, IO uses the flags you indicated during the creation phase to determine how to compose the message in the app, and then proceeds with the possible retrieval of remote data and its integration with the data already in its possession to present the final result to the recipient.

{% hint style="info" %}
Each call from IO to your systems is identified by the remote correlation [#id](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23id) you indicated during the [#creation-of-the-remote-content-message](https://www.google.com/search?q=inviare-un-messaggio-a-contenuto-remoto.md%23creazione-del-messaggio-remotizzato) and, as a *header*, the recipient's [#fiscal_code](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23fiscal_code).
{% endhint %}

In particular, if in the [#creation-of-the-remote-content-message](https://www.google.com/search?q=inviare-un-messaggio-a-contenuto-remoto.md%23creazione-del-messaggio-remotizzato) phase you had indicated [#has_precondition](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23has_precondition) with a value of `ONCE` or `ALWAYS`, as soon as the recipient selects the message from the message list in the app, having never read it yet (`=ONCE`) or every time (`=ALWAYS`), IO will retrieve the endpoint to call from the configuration information, and **will invoke your systems** to **obtain in response the title and text of the preconditions** to be shown in the pop-up panel of the [#opening-preconditions](https://www.google.com/search?q=inviare-un-messaggio-a-contenuto-remoto.md%23precondizioni-allapertura).

In response to the API call to the [#endpoint-for-retrieving-the-opening-preconditions-of-the-message](https://www.google.com/search?q=../../api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md%23endpoint-di-recupero-delle-precondizioni-allapertura-del-messaggio), you will need to respond as in the example:

{% code overflow="wrap" %}

```json
{
    "title": "This is the title of the preconditions",
    "markdown": "This is the text of the preconditions in **markdown** format"
}

```

{% endcode %}

The preconditions panel presents two buttons: "Cancel" and "Continue".

If the recipient selects "**Continue**", IO will proceed with displaying the message in the app; otherwise, the user will be returned to the message list.

If in the [#creation-of-the-remote-content-message](https://www.google.com/search?q=inviare-un-messaggio-a-contenuto-remoto.md%23creazione-del-messaggio-remotizzato) phase you had indicated [#has_remote_content](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23has_remote_content)`=true`, the title and body of the message will be retrieved at the time of opening via a call that IO will make to the API you exposed (for details refer to [#endpoint-for-retrieving-the-message-details](https://www.google.com/search?q=../../api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md%23endpoint-di-recupero-dei-dettagli-del-messaggio)).

{% hint style="info" %}
As in the traditional model, you can also add an expiration date ([#due_date](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23due_date)) and data referring to a debt position ([#payment_data](https://www.google.com/search?q=../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md%23payment_data)) to a remote content message; this information is already remote thanks to the integration with the pagoPA node.
{% endhint %}
