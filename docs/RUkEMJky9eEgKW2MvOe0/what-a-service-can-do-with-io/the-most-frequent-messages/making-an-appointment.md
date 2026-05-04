# Reserving an appointment

## Appointment confirmation

<details>

<summary>Appointment reservation confirmation</summary>

:sparkles:<mark style="color:blue;">**Premium**</mark> <mark style="color:blue;"></mark><mark style="color:blue;">Message</mark> — If you have a Premium contract, we recommend you configure this message with a Premium reminder: the recipients will be notified when the appointment is imminent via push notification.

***

**🖋 Title of the message:** Your appointment

🗒 **Text of the message**:

<mark style="color:green;">// if generic appointment //</mark>

<mark style="color:orange;">\{{{You have made an appointment for \<subject of the appointment>.\}}}</mark>

<mark style="color:green;">// if appointment with help desk //</mark>

<mark style="color:orange;">\{{{You have made an appointment at \<helpdesk></mark>.<mark style="color:orange;">\}}}</mark>

The booking number is \<nnnn>.

**Where:** \<address>

**When:** on \<dd/mm/yyyy> at \<hh:mm>

For more information, visit \[this website]\(URL).

**🪄 Button:** Cancel appointment

***

**Recipients:** The citizens resident in the area of action of the service who have made an appointment for ...

**When to send it:** When the appointment is confirmed.

**User story:** As a citizen I want to receive confirmation when the appointment is confirmed by the institution.

</details>

***

## Appointment reminder

In place of this message we recommend the use of the feature :sparkles:[premium message reminder](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/VgT9NJOwkAnNFoA6d0Fs/what-a-service-can-do-with-io/inviare-messaggi/README.md#messaggi-standard-e-premium).

<details>

<summary>Appointment reminder</summary>

**🖋 Title of the message:** Remember your appointment

🗒 **Text of the message**:

We’d like to remind you about your appointment on \<dd/mm/yyyy> for \<subject>.

The booking number is \<nnnn>.

**Where:** \<address>

**When:** on \<dd/mm/yyyy> at \<hh:mm>

For more information, visit \[this website]\(URL).

**🪄 Button:** Cancel appointment

***

**Recipients:** The citizens resident in the area of action of the service who have made an appointment for ...

**When to send it:** When the appointment is imminent.

**User story:** As a citizen I want to receive a reminder of my appointment.

</details>
