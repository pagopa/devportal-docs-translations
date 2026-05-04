# Electronic Identity Card

Providing the “Electronic Identity Card” service via IO makes it possible for institutions to:

* provide citizens with detailed communications about the state of their Electronic Identity Card (CIE), covering the **entire life cycle of the service**, from the beginning to the end;
* integrate communications, avoiding a duplication of communications regarding the expiration of the CIE, managed by ANPR.

[**Discover all the benefits of integration with IO →**](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/UPXI5qlLme7xci8KwDxf/what-is-io-and-what-is-its-objective.md#perche-integrarsi-con-io)

## Service tab and attributes

| **Name of the service**        | Electronic Identity Card                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Topic**                      | Registry and civic services                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Description of the service** | <p>The service concerns the request, issue and expiration of your Electronic Identity Card.</p><p>With IO, you can:</p><ul><li>request an appointment to have your Identity Card issued or replaced;</li><li>receive an appointment reminder;</li><li>receive payment notices for the issue of the card and pay in-app;</li><li>receive a message that informs you that your card is expiring;</li><li>receive other communications.</li></ul><p>For more information about the Electronic Identity Card, visit <a href="https://www.cartaidentita.interno.gov.it/">this website</a>.</p> |
| **Button**                     | Request an appointment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## **Life cycle of the service**

<figure><img src="../../.gitbook/assets/CIE.5.png" alt="Life cycle and events of the Electronic Identity Card service"><figcaption><p><strong>Life cycle and events of the Electronic Identity Card service</strong></p></figcaption></figure>

## **Service messages**

Here is the list of various messages the service can send, with the relative rules for sending them.

{% hint style="success" %}
The series of all messages represents the ideal service. The institution that wants to provide this service can evaluate which and how many messages to send depending on their possibility of integration. The final objective is to send all of them, releasing service versions that are increasingly complete.
{% endhint %}

<details>

<summary><strong>Appointment confirmation</strong></summary>

**🖋 Title of the message:** Your appointment with \<office>

🗒 **Text of the message**:

Please remember that you have an appointment with the \<office> located in \<address> on \<dd/mm/yyyy> at \<hh:mm>.

Please arrive at least 15 minutes before your appointment and bring all your necessary documents with you. For more information about the document you need, visit the website [CIE](https://www.cartaidentita.interno.gov.it/cittadini/rilascio-e-rinnovo-in-italia/).

You can cancel the appointment online, at \[website name]\(URL).

**🪄 Button**: Add reminder

**---**

**Recipients**: Citizens who successfully made an appointment on the website of the institution

**When to send it**: When the appointment has been made

**User story**: <mark style="color:purple;">As a citizen I want to receive a confirmation with details of my appointment</mark>

</details>

<details>

<summary><strong>Appointment cancellation</strong></summary>

**🖋 Title of the message:** Cancel appointment with \<office>

🗒 **Text of the message**:

Your appointment with the \<office> located in \<address> on \<dd/mm/yyyy> at \<hh:mm> was canceled due to \<description of the reason>.

If you want to make a new appointment online, you can use the appointment service (URL) for your municipality or go to the registry office that best meets your needs.

**🪄 Button**: n/a

**---**

**Recipients**: Citizens whose appointment was canceled by the citizens themselves or due to needs of the city hall

**When to send it**: At the moment the appointment is canceled

**User story**: <mark style="color:purple;">As a citizen I want to be informed when an appointment is canceled</mark>

</details>

<details>

<summary>Notification of identity card payment</summary>

:sparkles: <mark style="color:blue;">**Premium message**</mark> — configure this message as Premium, the citizen will be informed that payment date is coming closer with a _push notification_!

***

**🖋 Title of the message:** You have a new payment notification

🗒 **Text of the message**:

There is a payment notification for \<first and last name> regarding the issue of an Electronic Identity Card.

**Amount due:** € \<xx.xx>

**Due date:** \<dd/mm/yyyy>

You can pay directly in-app by pressing “See notification”, or using all the payment channels of the pagoPA platform.

If you already made the payment, ignore this message.

For more information or if you need assistance, contact us using the channels located on the service tab.

**🪄 Button**: See notification

***

**Recipients**: All citizens who have to pay for the document

**When to send it**: When an appointment has been made at city hall and after the amount has become due

**User story**: <mark style="color:purple;">As a citizen, I want to receive a communication when it is possible to make the payment for my Identity Card</mark>

</details>

{% hint style="success" %}
**Did you know?**\
IO is integrated with SEND - Digital Notification Service, to send legally binding communications.

[**Discover more about SEND**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali) [**-->**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali)
{% endhint %}

{% hint style="info" %}
**A model to be customized**

The procedures for this service vary greatly among institutions. We recommend using the message texts as a starting point and adding additional information.

The model is an example that is not binding for the institution and for which the Company does not accept any liability, as it serves only as an example.

You can copy the messages to be customized from [this document](https://docs.google.com/spreadsheets/d/1aTFHoaigZPdJ42-7rijDWTCsNzhc4J4vwZ0Trt7lZug/edit#gid=538647580).
{% endhint %}
