# Send a message with remote content

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

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

This way, IO acts as a **real-time communication** channel between you and your user and only holds the information necessary to allow the retrieval of the message and verify its status.

{% hint style="warning" %}
The management of remote messages implies that your organization is responsible for the contents conveyed through IO, with particular reference to their **accuracy** and **availability** to the user.
{% endhint %}

#### 🕵️‍♂️ Managing sensitive information

As specified, remote messages are designed to ensure a _privacy-compliant_ delivery of personal/sensitive information referring to the recipient, **where necessary for the provision of the service.**

{% hint style="warning" %}
We remind you that this sending method **leaves your obligations under current legislation unchanged**, in particular under art. 7.3 of the [IO Guidelines](https://www.agid.gov.it/it/linee-guida#index-8).
{% endhint %}

As a further measure to protect privacy, the [#require\_secure\_channels ](../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-as-path-parameter.md)flag allows you to **mark a message as containing sensitive information**, with the following effects:

* push notifications on the recipient's devices will show a generic invitation to open the message, without displaying the content of the title;
* messages will not be forwarded via email regardless of the preference set by the recipient user.

{% hint style="info" %}
You can also set the `require_secure_channels` flag [directly on the service](../publish-a-service/mandatory-data/attributes.md#require_secure_channels), so you don't have to worry about doing it for every single message.
{% endhint %}

#### ✏️ Content updating over time

Unlike traditional messages, remote content messages can be modified **even after sending**: for example, you can correct a typo, or dynamically update information that is no longer valid or misleading (e.g., following the cancellation of an appointment).

When considering this possibility, it is worth remembering that:

* The recipient user **will not receive any notification** in case of an update to the content of a previously received message. In fact, the content can only be refreshed, calling it back from your systems, only when and if the user opens the message in the app;
* The responsibility for the information transmitted via IO remains in any case with the sending entity.

{% hint style="success" %}
In principle, when the context that produced a message changes or new information needs to be transmitted, it is always preferable to **send a new message** to inform the recipient.

When in doubt, always prefer maintaining **informational consistency** towards your users: messages on IO are an important calling card for your organization, [ensure their quality](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/CoF8C6y7ayX0FEzySKSo/)!
{% endhint %}

<details>

<summary>Appointment booking use case - Example of updating message contents after sending</summary>

1. Your entity sends a remote content message to the recipient citizen to confirm the booking of a healthcare appointment:
2. The recipient reads the message and decides to cancel the appointment through the channels you made available for booking management;
3. Your entity sends the same user a new message to confirm the cancellation;
4. To ensure informational consistency, your entity updates the contents of the first message by replacing and/or removing the appointment confirmation information and obsolete references.
5.

</details>

To make the recipient aware that the contents could be updated over time, the following notice has been included at the bottom of the details of all remote content messages, in its short and extended versions:

<figure><img src="../../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**IO does not perform any checks** on the invariability over time of the contents of a remote content message. The accuracy and availability of the information contained in the message are always the exclusive responsibility of the sending Entity.
{% endhint %}

{% hint style="danger" %}
As the data controller, you must directly guarantee users the exercise of data subject rights under the GDPR, and any request in this regard will be redirected to you. For example, the right of access under Art. 15 GDPR must be guaranteed to data subjects who request it, including via the contact details present in the service tab.
{% endhint %}

### How does sending a remote content message work?

{% hint style="info" %}
Before you can send remote content messages, you must follow the procedure outlined in [configurazione-remota.md](../../initial-setup/remote-configuration.md)
{% endhint %}

The lifecycle of a remote content message consists of two main stages:

* **Sending** (creation) by your organization's systems;
* **Fruition** (viewing) by the recipient.

Both phases require integration between your systems and IO's.

### Message sending phase

#### Creating a remote-content message

At this stage, your systems integrated with IO request the creation—and therefore the sending—of a new message to a specific recipient. For more information about sending a message through IO, see [.](./ "mention").

The following table summarises the main components of an IO message that can be served remotely:

<table><thead><tr><th width="197">Component</th><th>Flag to set</th><th>Notes</th><th data-hidden data-type="checkbox">Can be served remotely?</th></tr></thead><tbody><tr><td>preconditions</td><td><a data-mention href="../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#has_precondition">#has_precondition</a></td><td>These are <em>optional</em> information displayed <em>before the message details are opened</em>.</td><td>false</td></tr><tr><td>title (subject)</td><td><a data-mention href="../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#has_remote_content">#has_remote_content</a></td><td>This is the title displayed <em>when the message is opened</em>. It differs from the title shown in the message list, which cannot be served remotely.</td><td>true</td></tr><tr><td>body (markdown)</td><td><a data-mention href="../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#has_remote_content">#has_remote_content</a></td><td>This is the text content of the message.</td><td>true</td></tr><tr><td>payment notice details</td><td></td><td>These are already served remotely through integration with the pagoPA node.</td><td>true</td></tr><tr><td>attachments (PDF)</td><td><a data-mention href="../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#has_attachments">#has_attachments</a></td><td>This content can only be managed remotely. You can include it if you have signed the Premium Agreement. PDF is the accepted format.</td><td>true</td></tr></tbody></table>

<details>

<summary>Important information about preconditions displayed before opening a message</summary>

As the sending organisation, you can require the opening of a message to be preceded by content intended to inform the recipient about specific aspects or circumstances relating to the message itself.

Preconditions are displayed on an intermediate screen between the message list and the details of the selected message. The user can access the message details only by selecting the "Continue" button.

<figure><img src="../../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

Displaying preconditions **interrupts the message-reading flow**. You should therefore use them only when they provide real value to your communication or are required by applicable legislation, so as not to degrade the user experience.

**When to use them:**\
When it is necessary to draw the citizen's attention to essential information, and whenever required by applicable legislation—for example, in legally binding communications where opening the message has legal effects for the citizen.

**When not to use them:**\
To provide notices that are not strictly related to the message content, or to add detailed information that can be included within the message or provided at another stage of the user experience.

</details>

<details>

<summary>Important information about the message title (subject) in relation to the "has_remote_content" flag</summary>

The message title is used by the IO app in three situations:

1. as the title displayed in the list of received messages;
2. as the heading of the message details after the message is opened;
3. in the text of push notifications associated with the message, where enabled by the user and provided that you have not marked the message or service as containing sensitive information.

Depending on the value of the [#has\_remote\_content](../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#has_remote_content "mention") flag specified in [#third\_party\_data](../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#third_party_data "mention")—see later in this chapter—the **message title** behaves differently:

* if [#has\_remote\_content](../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#has_remote_content "mention")`=true`, the [#subject](../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#subject "mention") field specified when creating the message is used by IO in the list of received messages, as the push-notification text and as the subject of any message-forwarding email. However, it is not used in the message-details view in the app, where the title is retrieved at a later stage (see [#what-happens-when-the-recipient-opens-a-remote-content-message](send-a-message-with-remote-content.md#what-happens-when-the-recipient-opens-a-remote-content-message "mention")).\
  \
  **This means that the recipient may see different text inside and outside the message-details view**. We recommend that you do not make substantial changes to the title, so that the two versions remain consistent. Please also remember that, under the IO Guidelines, sensitive information cannot be included in the message title.
* if [#has\_remote\_content](../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#has_remote_content "mention")`=false`, or if you do not include the flag, the [#subject](../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#subject "mention") field follows the standard behaviour of a traditional, non-remote message: the same text is used in the message details and in all the other contexts listed above.

</details>

<details>

<summary>Important information about the message body (markdown)</summary>

When creating a remote-content message ([#has\_remote\_content](../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#has_remote_content "mention")`=true`), you must still comply with the IO API interface by providing a **non-remote fallback text in markdown**. This text is used to compose the message-forwarding email that IO users can choose to receive when a message is delivered to them in the app.

**Markdown limits for forwarding:** minimum 80 and maximum 134 characters. Any additional text is truncated and replaced with an ellipsis.

**Note about forwarding messages by email:** If enabled by the end user, a message sent through IO can be forwarded to their email address. The email contains the beginning of the message body—the first 134 characters—together with an invitation to open the app and access the complete content through a redirect CTA. The following is an example of a forwarding email:

</details>

{% hint style="info" %}
**Note about attachments (Premium)**\
If you have signed the Premium Agreement, your messages can also include **PDF attachments**. These are sent directly from your systems to the app when the recipient opens the message. For more information, see [add-attachments.md](add-attachments.md "mention").
{% endhint %}

For remote-content messages, you _must_ include the following additional information in the [#third\_party\_data](../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#third_party_data "mention") block:

<table><thead><tr><th width="237">Field</th><th>Field description</th></tr></thead><tbody><tr><td><a data-mention href="../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#id">#id</a></td><td>This is the <strong>remote correlation identifier</strong>, which uniquely identifies a specific message addressed to a specific recipient. The identifier is <strong>defined by you</strong> and consists of a string that <strong>allows the APIs to</strong> retrieve the remote content for that specific message.</td></tr><tr><td><a data-mention href="../../apis-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#configuration_id">#configuration_id</a></td><td>Enter the identifier you received during <a data-mention href="../../initial-setup/remote-configuration.md">remote-configuration.md</a>. IO uses this value to determine the information required to call the REST <em>endpoints</em> exposed by your organisation, which provide the remote data for the message.</td></tr><tr><td><a data-mention href="../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md</a></td><td><p>Set this field only if, when the message is opened in the app, you want the recipient to see text—with a related title—containing <strong>contextual information</strong> that you provide at that time. For more information, see <a data-mention href="../../api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-delle-precondizioni-allapertura-del-messaggio">openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md</a>. After reading the text, <strong>the recipient can choose whether to continue opening the message</strong> or return to the list of received messages. The possible values for this field are:</p><ul><li><code>NEVER</code> (default)</li><li><code>ONCE</code> (the preconditions are displayed only the first time the recipient tries to open the message)</li><li><code>ALWAYS</code> (the preconditions are displayed every time, even if the message has already been read)</li></ul></td></tr><tr><td><a data-mention href="../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_remote_content">submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md</a></td><td>Set this field to <code>true</code> <strong>if you want the message title (subject) and body to be served remotely</strong>. When IO requests them through the dedicated API that you have exposed, you must respond with a text string for the title and markdown for the body, just as you would have specified them when creating a traditional message. The default value for this field is <code>false</code>.<br>For more information and to understand the role of the title in a remote-content message, see <a data-mention href="../../api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-dettagli-del-messaggio">openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md</a>.</td></tr><tr><td><a data-mention href="../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_attachments">submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md</a></td><td>Set this field to <code>true</code> if you want to <strong>attach one or more PDF documents</strong> to the message. As described in <a data-mention href="../../api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-dettagli-del-messaggio">openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md</a>, when IO requests the message details, you must provide the attachment metadata—name and corresponding URL. When the recipient selects an attachment in the app, IO retrieves the bytes from your systems through the dedicated API described in <a data-mention href="../../api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-byte-del-singolo-allegato">openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md</a>.<br>Remember that you can set this flag only if the organisation has signed the IO Premium Agreement.</td></tr></tbody></table>

{% hint style="warning" %}
Regardless of whether its content is served remotely, if the message contains **sensitive information**, you _must always_ set the [submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#require_secure_channels "mention") flag to `true`.
{% endhint %}

### Message access phase

#### What happens when the recipient opens a remote-content message?

At this stage, IO uses the flags specified when the message was created to determine how to compose it in the app. Where necessary, IO retrieves the remote data and combines it with the information it already holds before presenting the final result to the recipient.

{% hint style="info" %}
Each call from IO to your systems is identified by the remote correlation [submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#id "mention") specified during [inviare-un-messaggio-a-contenuto-remoto.md](inviare-un-messaggio-a-contenuto-remoto.md#creazione-del-messaggio-remotizzato "mention") and includes the recipient's [submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#fiscal_code "mention") as a request _header_.
{% endhint %}

In particular, if you set [submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition "mention") to `ONCE` or `ALWAYS` during [inviare-un-messaggio-a-contenuto-remoto.md](inviare-un-messaggio-a-contenuto-remoto.md#creazione-del-messaggio-remotizzato "mention"), when the recipient selects the message from the in-app message list—only if they have never opened it before for `ONCE`, or every time for `ALWAYS`—IO retrieves the endpoint to call from the configuration information and **calls your systems** to **obtain the precondition title and text** to display in the [inviare-un-messaggio-a-contenuto-remoto.md](inviare-un-messaggio-a-contenuto-remoto.md#precondizioni-allapertura "mention") pop-up panel.

In response to a call to the [openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md](../../api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-delle-precondizioni-allapertura-del-messaggio "mention") API endpoint, return a response such as the following:

{% code overflow="wrap" %}
```json
{
    "title": "This is the precondition title",
    "markdown": "This is the precondition text in **markdown** format"
}
```
{% endcode %}

The precondition panel contains two buttons: "Cancel" and "Continue".

If the recipient selects "**Continue**", IO displays the message in the app. Otherwise, the user is returned to the message list.

If you set [submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_remote_content "mention")`=true` during [inviare-un-messaggio-a-contenuto-remoto.md](inviare-un-messaggio-a-contenuto-remoto.md#creazione-del-messaggio-remotizzato "mention"), the message title and body are retrieved when the message is opened, through a call made by IO to the API you exposed. For details, see [openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md](../../api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-dettagli-del-messaggio "mention").

{% hint style="info" %}
As with a traditional message, you can add a due date ([submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#due_date "mention")) and payment-position data ([submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#payment_data "mention")) to a remote-content message. This information is already served remotely through integration with the pagoPA node.
{% endhint %}
