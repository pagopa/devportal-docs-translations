# Vehicle towing

Providing the “Vehicle towing” service via IO makes it possible for institutions to:

* **update citizens in real time** and therefore allow them to pay for the fees for the towing or impounding of their vehicles;
* **reduce the times** and costs for the process of notification and delivery of the fine;
* **speed up the times** for recovering the vehicle if it was impounded or towed.

[**Discover all the benefits of integration with IO →**](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/UPXI5qlLme7xci8KwDxf/what-is-io-and-what-is-its-objective.md#perche-integrarsi-con-io)

## Service tab and attributes

| **Name of the service**        | Vehicle towing                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Topic**                      | Mobility and transport                                                                                                                                                                                                                                                                                                                                                    |
| **Description of the service** | <p>The service concerns the towing or impounding of vehicles registered in your name.</p><p>With IO you can:</p><ul><li>receive a message informing you that your vehicle was impounded, towed or reported as abandoned;</li><li>receive a message that informs you that the storage period for your vehicle is expiring;</li><li>receive other communications.</li></ul> |

## **Life cycle of the service**

<figure><img src="../../.gitbook/assets/Rimozioni.5.png" alt=""><figcaption><p><strong>Life cycle and events of the vehicle towing service</strong></p></figcaption></figure>

## Service message

{% hint style="success" %}
**The ideal service**

The series of all messages represents the ideal service. The institution that wants to provide this service can evaluate which and how many messages to send depending on their possibility of integration. The final objective is to send all of them, releasing service versions that are increasingly complete.
{% endhint %}

<details>

<summary>Vehicle has been impounded</summary>

**🖋 Title of the message:** Your vehicle has been impounded

🗒 **Text of the message**:

On \<dd/mm/yyyy> at \<hh:mm>, at \<address>, the vehicle with license plate \<license plate> was clamped for these violations:

**• \<type of violation> - art. \<number>**

**Ticket number**: \<ticket number>

\[See ticket]\(URL)

\<Enter instructions about what the recipient must do, e.g. “Contact your local police at number”>. For more information visit \[this website]\(URL).

**🪄 Button**: n/a

**---**

**Recipients**: The citizen whose vehicle was impounded following a violation

**When to send it**: When the violation was committed and the clamp was applied

**User story**: <mark style="color:purple;">As a citizen I want to receive immediate notification of violations committed and the clamp applied</mark>

<mark style="color:purple;">ℹ️</mark> This message always arrives together with a [ticket](highway-code-violation-tickets.md#emissione-preavviso-di-accertamento), you can decide to send a single message.

</details>

<details>

<summary>Vehicle has been towed</summary>

**🖋 Title of the message:** Your vehicle has been towed

🗒 **Text of the message**: On \<dd/mm/yyyy> at \<hh:mm>, at \<address>, the vehicle with license plate \<license plate> was towed for these violations:

* **\<type of violation> - art. \<number>**

**Ticket number**: \<ticket number>

\[See ticket]\(URL)

Your vehicle is in storage at \<address>.

\<Enter instructions about what the recipient must do, e.g. "You have until \<dd/mm/yy> to collect it>. For more information visit \[this website]\(URL) or contact \<institution to contact>\<method of contact>.

**🪄 Button**: n/a

**---**

**Recipients**: The citizen whose vehicle was impounded following a violation

**When to send it**: When the violation was committed and the vehicle was towed

**User story**: <mark style="color:purple;">As a citizen I want to receive immediate notification of violations committed and if my vehicle was towed</mark>

<mark style="color:purple;">ℹ️</mark> This message always arrives together with a [ticket](highway-code-violation-tickets.md#emissione-preavviso-di-accertamento), you can decide to send a single message.

</details>

<details>

<summary>Notification of storage period expiring</summary>

**🖋 Title of the message:** The storage period of your vehicle is expiring

🗒 **Text of the message**: Your have until \<dd/mm/yyyy> to collect the vehicle with license plate \<license plate> at the storage yard at \<address>.

You may collect it only after paying the service and storage costs. If you do not collect it by the indicated date, \<enter what happens>.

For more information visit \[this website]\(URL) or contact \<institution to contact>\<method of contact>.

**🪄 Button**: n/a

**---**

**Recipients**: The citizen whose vehicle was impounded and towed following a violation and has not collected it

**When to send it**: When the end of the storage period is ending

**User story**: <mark style="color:purple;">As a citizen I want to receive immediate notification of upcoming deadlines</mark>

</details>

<details>

<summary>Declaration of abandoned vehicle</summary>

**🖋 Title of the message:** Your vehicle was reported as abandoned

🗒 **Text of the message**: The vehicle with license plate \<license plate> at \<address> is considered abandoned.

\<Enter instructions about what the recipient must do, e.g. "You have until \<dd/mm/yy> to contact \<name of the institution>...>. For more information visit \[this website]\(URL) or contact \<institution to contact>\<method of contact>.

**🪄 Button**: n/a

**---**

**Recipients**: The citizen who abandoned their vehicle along the road and never collected it from storage after it was towed

**When to send it**: When the vehicle was found or the storage period has expired

**User story**: <mark style="color:purple;">As a citizen I want to receive immediate notification if my vehicle is about to be considered abandoned</mark>

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

You can copy the messages to be customized from [this document](https://docs.google.com/spreadsheets/d/1xveBu0d5oxLGI2alfBJxg181uqNMIiPrX6RZZP67K5k/edit#gid=538647580).
{% endhint %}
