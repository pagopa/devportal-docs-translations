# Fines for traffic code violations

Providing the service "Fines for traffic code violations" via IO makes it possible for institutions to:

* **update citizens in real time** and therefore allow them to pay for the traffic code violations on time;
* **reduce the times** and costs for the process of notification and delivery of the fine;
* **speed up the times** for collecting the fines;
* **inform of expiring notifications**, reducing the possibility for citizens to have to pay additional fines.

[**Discover all the benefits of integration with IO →**](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/UPXI5qlLme7xci8KwDxf/what-is-io-and-what-is-its-objective.md#perche-integrarsi-con-io)

## Service tab and attributes

| **Name of the service**        | Fines for traffic code violations                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Topic**                      | Mobility and transport                                                                                                                                                                                                                                                                                                                                                                                    |
| **Description of the service** | <p>The service concerns the fines for traffic code violations for vehicles registered in your name.</p><p>With IO you can:</p><ul><li>receive the ticket and pay it in-app;</li><li>receive a message that informs you if the violation report was sent to your address of residency;</li><li>receive a message that informs you that the payment is due;</li><li>receive other communications.</li></ul> |

## **Life cycle of the service**

<figure><img src="../../.gitbook/assets/Multe.5.png" alt=""><figcaption><p><strong>Life cycle and events of the traffic code violation fine service</strong></p></figcaption></figure>

## Service message

{% hint style="success" %}
**The ideal service**

The series of all messages represents the ideal service. The institution that wants to provide this service can evaluate which and how many messages to send depending on their possibility of integration. The final objective is to send all of them, releasing service versions that are increasingly complete.
{% endhint %}

<details>

<summary>Issue of a ticket</summary>

**🖋 Title of the message:** Ticket

🗒 **Text of the message**: On \<dd/mm/yyyy> at \<hh:mm> at \<address>, the person driving the vehicle with license plate number \<license plate number> committed these violations:

**• \<type of violation> - art. \<number>**

**Ticket number**: \<ticket number>

\[See ticket]\(URL)

**Amount due**: € \<xx.yy>, already discounted 30% if paid by \<dd/mm/yyyy>

**What happens if I don't pay by \<dd/mm/yy>?** If foreseen, you will receive the violation report at your address of residency and you will be charged for the costs of notification.

**🪄 Button**: See notification

**---**

**Recipients**: All citizens resident in the geographical area of action of the service who violated the traffic code

**When to send it**: When a violation is committed and after the relative amount has become due

**User story**: <mark style="color:purple;">As a citizen I want to receive immediate notification of violations committed</mark>

</details>

<details>

<summary>Payment due</summary>

**🖋 Title of the message:** Payment due

🗒 **Text of the message**: You have until \<dd/mm/yy> to pay the violation report number \<report number>. Pay it immediately to avoid additional costs.

**🪄 Button**: n/a

**---**

**Recipients**: All citizens resident in the geographical area of action of the service who violated the traffic code

**When to send it**: When the fine for the violation report is almost due

**User story**: <mark style="color:purple;">As a citizen I want to receive a reminder of the payments that are due</mark>

</details>

<details>

<summary>Report sent</summary>

**🖋 Title of the message:** Sending of the report

🗒 **Text of the message**: We sent the violation report \<report number> to your address of residency. You will receive the registered letter in the next few days.

The amount of the report includes the notification expenses. For more information visit \[this website]\(URL).

**🪄 Button**: n/a

**---**

**Recipients**: All citizens who received who received a traffic fine and did not pay it

**When to send it**: When it is due

**User story**: <mark style="color:purple;">As a citizen I want to receive immediate notification of violations committed</mark>

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

You can copy the messages to be customized from [this document](https://docs.google.com/spreadsheets/d/1UHvSOKM6SDvGh5tU2VRrLLOx7GNv-4TlVJKH\_PTthDQ/edit#gid=538647580).
{% endhint %}
