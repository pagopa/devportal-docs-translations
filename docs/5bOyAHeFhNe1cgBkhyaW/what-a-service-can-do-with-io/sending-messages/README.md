# Send messages

The messages institutions send with IO are always **personal communications**, as they are directed to a specific user.

The institution can query the back end with respect to the tax code it has available and to which it has something personal to communicate. If the tax code is present among the app users and if the service is active, the institution is authorized to proceed and send its communication.

Therefore **it is not permitted to send mass communications** to all IO users or to **send messages to users who are not direct recipients** of the provided services.

![Example of messages sent to a user on IO](../../.gitbook/assets/msg.png)

{% hint style="danger" %}
**No to personal information in the title**

Do not include personal information or sensitive data in the title of a message and make sure that the message contains only data that is strictly necessary.
{% endhint %}

### Basic and Premium messages

There are two types of messages that can be sent on IO - Basic and Premium - which depends on the contract signed when joining.

In general, the messages can be:

* **informational messages**: text messages that can concern an update related, for example, to a new available document or a request presented to the institution;
* **messages that indicate a payment**: messages that contain information about an amount due, with a reminder of the payment deadline and the “see notification” button to proceed with the payment. For these types of messages, the fields related to the `payment_data` (notification code, amount to be paid, due date) must be included;
* **messages that indicate a deadline**: messages that contain a deadline or a reminder (a reminder for the expiration date of a document to be renewed or the deadline for signing up for a service). For these types of messages, the `due_date` field must be used in the message payload.

{% hint style="info" %}
To make it easier to prepare the messages and configure the services on IO, refer to [these models](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/UPXI5qlLme7xci8KwDxf/catalogo-dei-servizi-e-modelli/i-modelli-dei-servizi-piu-frequenti/README.md). \\

The models are standard examples that are not binding for the institution and for which the Company does not accept any liability, as they serve only as an example.
{% endhint %}

### Premium messages

As compared to basic messages, Premium messages offer these additional **functions**:

* they can contain **attachments**;
* the institution can always check if they were sent, received or **read**;
* if there is a notification of payment, the institution can check at any time if they were **paid**;
* if the citizen provides consent, they can generate push notifications that **remind the citizen that the message was not yet read**;
* if the citizen provides consent, they can generate push notifications that **remind the citizen that the message was read but the payment was not made**.

Here is a summary of the functions and types of messages to which they apply.

| Function                                                                       | Basic messages | Premium messages |
| ------------------------------------------------------------------------------ | -------------- | ---------------- |
| Text that contains information                                                 | ✅              | ✅                |
| Notification of payment in the message                                         | ✅              | ✅                |
| Messages that contain a deadline or a reminder                                 | ✅              | ✅                |
| Attachments to a message                                                       | ❌              | ✅                |
| Check that the message was sent, received or read                              | ❌              | ✅                |
| Check that the payment was made for the notification of payment in the message | ❌              | ✅                |
| Option to send push notifications that remind that a message was not read      | ❌              | ✅                |
| Option to send push notifications that remind that a payment was not made      | ❌              | ✅                |
