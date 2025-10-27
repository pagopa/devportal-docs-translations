# Send messages

The messages institutions send with IO are always **personal communications**, as they are directed to a specific user. 

The institution can query the back end with respect to the fiscal code it has available and to which it has something personal to communicate. If the fiscal code is present among the app users and if the service is active, the institution is authorized to proceed and send its communication. 

If the institution sends a message via IO to the legal representatives of legal persons, no checks are performed of the correspondence of the fiscal code of the legal representative and the legal person. 

Therefore **it is not permitted to send mass communications** to all IO users or to **send messages to users who are not direct recipients** of the provided services.

<figure><img src="../../.gitbook/assets/image (24).png" alt=**><figcaption><p>Example of messages sent to a user on IO</p></figcaption></figure>

## Types of messages

The messages that are sent on IO can be of different types and enriched depending on:

* The type of content to be conveyed: _informative, regarding payments or due dates;_
* How the content of the message is managed: _static or from remote._

***

## Content of messages

In general, the messages can be:

* [**informational messages**](informational-messages.md): text messages that can concern an update related, for example, to a new available document or a request presented to the institution;
* [**messages that indicate a payment**:](messages-that-indicate-a-payment/) messages that contain information about an amount due, with a reminder of the payment deadline and the “see notice” button to proceed with the payment. For these types of messages, the fields related to the `payment_data` (notice code, amount to be paid, due date) must be included;
* [**messages that indicate a deadline**](messages-that-indicate-a-due-date.md): messages that contain a deadline or a reminder (a reminder for the expiration date of a document to be renewed or the deadline for signing up for a service). For these types of messages, the `due_date` field must be used in the message payload.

{% hint style="info" %} With [ Single Sign-On ](../../io-app/the-functions-of-io-available-to-institutions/access-via-single-sign-on.md)it is possible to include a link in the messages that refers the citizen to third-party sites, using the SPID/CIE authentication already used on IO, without having to login again. {% endhint %}

With respect to the basic messages, it is possible to enrich the messages with some additional **functions**. If required, with additional integration it is possible to:  

* Add [**attachments**](messages-with-attachments.md) to messages
* Check at any time if the messages have been sent, received or **read**
* If there is a payment notice, the institution can check at any time if it was **paid**
* If the citizen provides consent, and the associated debt position has a due date, they can generate push notifications that **remind the citizen that the message was read but the payment was not made**.

### Managing content 

In addition to the categorizations previously described, messages can be identified in two types, **according to the content management method** provided by your institution:

* **Traditional messages**, i.e. messages whose content is invariable over time and defined at the time they are sent;
* **Messages with remote content**, i.e. messages whose content is not managed directly by IO but provided by your systems at the time of their use by the recipient. Messages with remote content are intended in particular for communications that send sensitive information. 

You can find detailed information on remote content messages in the [dedicated section of the IO Technical Guide](https://app.gitbook.com/s/sUBZStlCQZzLI6ZesbND/funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto).

{% hint style="danger" %} **Be careful with sensitive information**

**In case of sensitive information to be conveyed in IO messages, you can use remote content messages.** Do not include personal information or sensitive data in the title of a traditional message and make sure that the message contains only data that is strictly necessary. Find out more in the section dedicated to [Sensitive information](../../the-services-in-io/sensitive-information.md). {% endhint %}