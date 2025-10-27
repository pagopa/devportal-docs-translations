# ✉️ Send a message

## What are messages?

Messages are personal communications directed to a specific citizen, identified by means of their fiscal code. It is currently not possible to send messages to multiple citizens with a single call. 

To learn more, consult the page [Send messages](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi "mention") in the [Service manual](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/xWONfJmawghGo2ekuaKh/).

## How are messages sent?

<details>

<summary><mark style="color:blue;">Step 1</mark>- Create a service</summary>

To send a message , you must first [publish-a-service](../publish-a-service/ "mention").

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>- Test the content of the message</summary>

Before going into production mode, you can test the content of the messages. Read the page [test-messages.md](test-messages.md "mention").

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark>- Check that you can contact the recipient</summary>

Every time you send a message, you must make sure that the recipient exists and provided their consent to receive communications for that specific service.

For more information, discover the APIs [get-a-user-profile-using-post.md](../../api-and-specifications/message-api/get-a-user-profile-using-post.md "mention") and [get-subscriptions-feed.md](../../api-and-specifications/message-api/get-subscriptions-feed.md "mention").

</details>

<details>

<summary><mark style="color:blue;">Step 4</mark>- Send the message</summary>

To do so, use the API [submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md](../../api-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md "mention").

If you intend to [send a message with remote content](send-a-message-a-contenuto-remoto.md), follow the [relative instructions](send-a-message-a-contenuto-remoto.md#come-funziona-linvio-di-un-messaggio-a-contenuto-remoto) on how to be integrated.

You can also add [PDF/A attachments](add-attachments.md). For more information read the [relative instructions](add-attachments.md).

</details>

<details>

<summary><mark style="color:blue;">Step 5</mark>- Check the result</summary>

Query the API [get-message.md](../../api-and-specifications/message-api/get-message.md "mention"), using the fiscal code of the recipient and the identifier of the message obtained in the previous step.

If you signed the Premium agreement, you can also know the reading and payment status of the recipients.

</details>

{% hint style="info" %} Some of the mentioned functions require signing a Premium agreement: consult the [Service manual](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi#messaggi-premium) for more information. {% endhint %}

## Sending method

There are two methods for sending messages that are useful depending on the type of content you must communicate.

<figure><img src="../../.gitbook/assets/image (7).png" alt=`><figcaption><p>Sequence of the main phases in the two sending scenarios</p></figcaption></figure>

### Traditional message

This is the simplest form of communication and that requires fewer integrations: the sender defines the content of the message and sends it.

[Discover how to send a traditional message ->](../../api-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md)

### Message with remote content

This is a message whose information is recovered by the systems of the sending institution **each time** the message is used by the final user. The messages with remote content are intended in particular for communications that send sensitive information. 

[Discover how to send a message with remote content ->](send-a-message-a-contenuto-remoto.md)

{% hint style="info" %} At the moment of sending, the institutions that joined the Premium offer can indicate, for each message to send, whether or not to use the additional functions provided by the agreement. {% endhint %}

## Error management

All the IO APIs can return the error responses defined in the specifications of each API_.\_ **Customer-side mechanisms must be implemented to correctly manage this type of response.**

{% hint style="info" %} **Example:** all the APIs can return `status code 429`, which represents a signal that indicates the exceedance of the permitted rate. In this case, it is necessary to implement a _retry_ mechanism and decrease the _rate_ of the requests by inserting pauses. {% endhint %}