# Tax on waste (TARI)

Providing the “TARI” service via IO makes it possible for institutions to:

* provide citizens with timely communications about the state of their TARI, covering the **entire life cycle of the service**.
* provide citizens with a single point of reference for receiving communications concerning TARI for **one or more properties, also in different municipalities** and with different regulations, if present on IO.

[**Discover all the benefits of integration with IO →**](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/UPXI5qlLme7xci8KwDxf/what-is-io-and-what-is-its-objective.md#perche-integrarsi-con-io)

## Service tab and attributes

| **Name of the service**        | Tax on waste (TARI)                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Topic**                      | Home and utilities                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Description of the service** | <p>The service concerns the tax on waste (TARI).</p><p>With IO you can:</p><ul><li>receive confirmation of the declaration of occupation of a residential or non-residential property for the purposes of TARI;</li><li>receive payment notifications for TARI and pay them in-app;</li><li>receive updates about any deadline extensions;</li><li>receive confirmation of the declaration of end of occupation of a property;</li><li>receive other communications.</li></ul> |

## **Life cycle of the service**

<figure><img src="../../.gitbook/assets/TARI.5.png" alt=""><figcaption><p><strong>Life cycle and events of the TARI (tax on waste) service</strong></p></figcaption></figure>

## **Service messages**

{% hint style="success" %}
**The ideal service**

The series of all messages represents the ideal service. The institution that wants to provide this service can evaluate which and how many messages to send depending on their possibility of integration. The final objective is to send all of them, releasing service versions that are increasingly complete.
{% endhint %}

<details>

<summary>Declaration of new property occupation</summary>

**🖋 Title of the message:** Declaration of new property occupation

🗒 **Text of the message**: We received your declaration of occupation of a new property. Here are the details:

**Address**: \<address> - \<land registry data>\
**Occupied by**: \<first and last name>\
**Since**: \<dd/mm/yy>

\[On this website]\(URL) you can find more information about how TARI is calculated and about any exemptions you might benefit from.

**🪄 Button**: n/a

**---**

**Recipients**: Citizens who successfully completed the application for the occupation of a property

**When to send it**: When the property has been successfully registered in the name of the citizen

**User story**: <mark style="color:purple;">As a citizen, I want to receive confirmation of my property occupation procedures</mark>

</details>

<details>

<summary>Payment notification</summary>

**🖋 Title of the message:** New payment notification

🗒 **Text of the message**: There is a payment notification for \<first and last name> regarding the \<reason>.

**Amount due**: €<00.00>

**Due date**: \<dd/mm/yyyy>

You can pay directly in-app by pressing “See notification”, or using all the payment channels of the pagoPA platform.

For more information or if you need assistance, contact us using the channels located on the service tab.

**🪄 Button**: See notification

**---**

**Recipients**: Citizens who must pay TARI

**When to send it**: After the amount has become due

**User story**: <mark style="color:purple;">As a citizen, I want to be informed when I have to pay TARI</mark>

<mark style="color:purple;">ℹ️</mark> In the case of payments in installments, see [this dedicated section of the service manual.](../../what-a-service-can-do-with-io/sending-messages/messages-that-indicate-a-payment/solutions-for-payments-in-installments.md)

</details>

<details>

<summary>Extension of the payment deadline</summary>

**🖋 Title of the message:** Extension of the payment deadline

🗒 **Text of the message**: The payment deadline for the notification in the name of \<first and last name> and related to \<reason>.

**Amount due**: €<00.00>

**Due date**: \<dd/mm/yyyy>

You can pay directly in-app by pressing “See notification”, or using all the payment channels of the pagoPA platform.

For more information or if you need assistance, contact us using the channels located on the service tab.

**🪄 Button**: See notification

**---**

**Recipients:** Citizens who must pay the tax

**When to send it:** The day on which the municipality decides to extend the payment deadline

**User story:** <mark style="color:purple;">As a citizen I want to be informed if the payment deadline has been extended</mark>

</details>

<details>

<summary>Confirmation of end of occupation of a property</summary>

**🖋 Title of the message:** Confirmation of end of occupation of a property

🗒 **Text of the message**: We received your declaration of end of occupation of a property. Here are the details:

**Address**: \<address>

**Occupied by**: \<first and last name>

**Since**: \<dd/mm/yy>

For more information or if you need assistance, contact us using the channels located on the service tab.

**🪄 Button**: n/a

**---**

**Recipients:** Citizens who declare the end of occupation of a property

**When to send it:** When the end of occupation declaration is compiled

**User story:** <mark style="color:purple;">As a citizen I want to know if my request to end occupation of a property was successful</mark>

</details>

## Some suggestions

In order to enrich communications with information that is valuable for citizens, we recommend:

* including some **data of reference for the property** to allow the user to identify the subject of the message and differentiate it if they have multiple properties.
* including one or more links that refer to **information concerning waste disposal management** and how to correctly separate waste.

{% hint style="success" %}
**Did you know?**\
IO is integrated with SEND - Digital Notification Service, to send legally binding communications.

[**Discover more about SEND**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali) [**-->**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali)
{% endhint %}

{% hint style="info" %}
**A model to be customized**

The procedures for this service vary greatly among institutions. We recommend using the message texts as a starting point and adding or changing content as required.

The model is an example that is not binding for the institution and for which the Company does not accept any liability, as it serves only as an example.

You can copy the messages to be customized from [this document](https://docs.google.com/spreadsheets/d/18Zmo5px\_P--N5MigMPf19P9znlcoOh-d-DOdXqH4v0Q/edit#gid=538647580).
{% endhint %}
