# ✉️ Sending a message

## What are messages?

Messages are personal communications directed to a specific citizen, identified by their Tax Code. Currently, it is not possible to send messages to multiple citizens with a single call.

To learn more, see the [Sending messages](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi "mention") page in the [Services manual](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/xWONfJmawghGo2ekuaKh/).

## How does sending messages work?

<details>

<summary><mark style="color:blue;">Step 1</mark> - Create a service</summary>

To send a message, you must first [publish a service](../pubblicare-un-servizio/ "mention").

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Test the message content</summary>

Before going into production, you can test the content of the messages. Read the [messaggi-di-test.md](messaggi-di-test.md "mention") page.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Verify that you can contact the recipient</summary>

Each time you send a message, you must ensure that the recipient exists and has consented to receiving communications for that specific service.

For more information, see the [get-a-user-profile-using-post.md](../../api-e-specifiche/api-messaggi/get-a-user-profile-using-post.md "mention") and [get-subscriptions-feed.md](../../api-e-specifiche/api-messaggi/get-subscriptions-feed.md "mention") APIs.

</details>

<details>

<summary><mark style="color:blue;">Step 4</mark> - Send the message</summary>

To do this, use the [submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md "mention") API.

If you intend to [send a remote content message](Sending-a-message-with-remote-content.md), follow the [relevant instructions](Sending-a-message-with-remote-content.md#come-funziona-linvio-di-un-messaggio-a-contenuto-remoto) on how to integrate.

You can also add [PDF/A attachments](Adding-attachments.md). For more information, read the [relevant instructions](Adding-attachments.md).

</details>

<details>

<summary><mark style="color:blue;">Step 5</mark> - Check the outcome</summary>

Query the [get-message.md](../../api-e-specifiche/api-messaggi/get-message.md "mention") API, using the recipient's tax code and the message ID obtained in the previous step.

If you have subscribed to the Premium agreement, you will also be able to know the read and/or payment status from the recipient.

</details>

{% hint style="info" %}
Some of the features mentioned require a Premium agreement subscription: consult the [Services Manual](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi#messaggi-premium) for more information.
{% endhint %}

## Sending methods

There are two methods for sending messages, useful depending on the type of content you need to communicate.

<figure><img src="../../.gitbook/assets/image (7).png" alt=""><figcaption><p>Sequence of the main phases in the two sending scenarios</p></figcaption></figure>

### Traditional message

This is the simplest form of communication and requires less integration: the sender defines the content of the message and sends it.

[Learn how to send a traditional message ->](../../APIs-and-specifications/Message-APIs/Submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md)

### Remote content message

This is a message whose information is retrieved from the sending Entity's systems **each time** the message is accessed by the end user. Remote content messages are designed especially for communications that convey sensitive information.&#x20;

[Learn how to send a remote content message ->](Sending-a-message-with-remote-content.md)

{% hint style="info" %}
At the time of sending, entities that have subscribed to the Premium offer can indicate, for each message to be sent, whether or not to use the additional features provided for in the agreement.
{% endhint %}

## Error handling

All IO APIs can return error responses, defined in the specifications of each API._ **It is necessary to implement client-side mechanisms for the correct handling of this type of response.**

{% hint style="info" %}
**Example:** all APIs can return the `status code 429,` which is a signal that the allowed rate has been exceeded. In this case, it is necessary to implement a _retry_ mechanism and decrease the request _rate_ by inserting pauses.
{% endhint %}
