# Payments

## Payments

For messages conveying a payment request, there are a few tips to keep in mind.

Whether it has a <mark style="color:blue;">**generic**</mark> or a <mark style="color:blue;">**specific description**</mark>, the Institution must correctly inform the citizen about the source of his or her overdue amount (e.g. traffic ticket no., appointment booking no., etc.).

An example of a <mark style="color:blue;">**specific description**</mark>**:**

When the payment is linked to a **direct debit**— including in the bank, on a current account, RID (Direct Interbank Ratios)-available only in certain cases, the object of the regular debits (e.g., tuition, bills, subscriptions,...) should be specified in the payment description.

<details>

<summary>Payment notice<mark style="color:purple;">{object}</mark></summary>

:sparkles: <mark style="color:blue;">**Premium message**</mark> — If you have a Premium contract, we recommend you configure this message with a Premium reminder: the recipients will be notified when the appointment is imminent via push notification.

***

**🖋 Title of the message:** You have a new payment notice

🗒 **Text of the message**:

<mark style="color:green;">// if generic reason //</mark>\
<mark style="color:orange;">\{{{There is a payment notice for \<first and last name> regarding \<reason>..\}}}</mark>

<mark style="color:green;">// if specific reason //</mark>\
<mark style="color:orange;">\{{{Your</mark> <mark style="color:purple;">{request for cancellation …}</mark> <mark style="color:orange;">arrived later than the deadline.\}}}</mark>

**Amount due:** €<00.00>

**Deadline:** \<dd/mm/yyyy>

You can pay directly in-app by pressing “See notice”, or using all the payment channels of the pagoPA platform and the other payment methids offered by the Creditor.

If you have already made the payment, ignore this message.

For more information or if you need assistance, contact us using the channels located on the service tab.

At the payment stage, if provided by the institution, the amount shown in the message may change.

**🪄 Button**: See notice

***

**Recipients**: All citizens who have an interest...

**When to send it**: When …………

**User story**: As a citizen, I want to receive a communication when it is possible to make the payment for ........

</details>

***

## Due

💡 For these types of messages that include a reminder, we suggest using the [Premium message reminder](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/MU2KpdcNBNLyeD4kR4n2/what-a-service-can-do-with-io/inviare-messaggi/README.md#messaggi-standard-e-premium) feature.

***

## Deadline extension

<details>

<summary>Extension of the payment deadline</summary>

**🖋 Title of the message:** Extension of the payment deadline

🗒 **Text of the message**: The payment deadline for the notice in the name of \<first and last name> and related to \<reason>.

**Amount due**: €<00.00>

**Deadline**: \<dd/mm/yyyy>

You can pay directly in-app by pressing “See notice”, or using all the payment channels of the pagoPA platform.

For more information or if you need assistance, contact us using the channels located on the service tab.

At the payment stage, if provided by the institution, the amount shown in the message may change.

**🪄 Button**: See notice

***

**Recipients:** All the citizens resident in the geographical area where the service is active who must pay ...

**When to send it:** If the payment deadline is extended

**User story:** As a citizen I want to be notified if the payment deadline has been extended

</details>

***

## Non payment

{% hint style="info" %}
\*\*Non payment\*\*

The following message serves to make the citizen aware of non payment but in no way constitutes a legal notice (i.e., notice)
{% endhint %}

<details>

<summary>Payment notice<mark style="color:purple;">{object}</mark>: non payment</summary>

**🖋 Title of the message:** Payment not made

🗒 **Text of the message**:

Your payment \<description> is due on \<dd/mm/yyyyy>.

If you have already paid the notice <mark style="color:orange;">\{{{or if you have applied for a direct debit</mark> <mark style="color:purple;">{for tuition fees}</mark> <mark style="color:orange;">on a current account, \}}}</mark> please ignore this message.

**🪄 Button**: See notice

***

**Recipients**: All citizens who have an interest...

**When to send it**: When the deadline has passed.

**User story**: As a citizen I want ....

</details>

***

## Payment confirmation

❌ A payment confirmation template has not been provided because when a citizen makes a payment to an institution via pagoPA, he/she automatically receives the outcome of the transaction in the IO app. On the other hand, for a payment receipt, which releases the citizen from his or her obligation to pay according to the law, they will always have to contact the Creditor.
