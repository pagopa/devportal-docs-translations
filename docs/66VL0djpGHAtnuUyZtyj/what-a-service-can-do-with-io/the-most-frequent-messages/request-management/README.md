# Request management

If your request is one of those below, go to the dedicated page:

{% content-ref url="https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/MU2KpdcNBNLyeD4kR4n2/what-a-service-can-do-with-io/the-most-frequent-messages/request-management/refund.md" %}
[https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/MU2KpdcNBNLyeD4kR4n2/what-a-service-can-do-with-io/the-most-frequent-messages/request-management/refund.md](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/MU2KpdcNBNLyeD4kR4n2/what-a-service-can-do-with-io/the-most-frequent-messages/request-management/refund.md)
{% endcontent-ref %}

{% content-ref url="registration.md" %}
[registration.md](registration.md)
{% endcontent-ref %}

{% content-ref url="cancellation.md" %}
[cancellation.md](cancellation.md)
{% endcontent-ref %}

***

Otherwise you can use the following messages:

## Confirmation of undertaking

<details>

<summary>Confirmation of undertaking of<mark style="color:purple;">{application/request}</mark></summary>

**🖋 Title of the message:** Your <mark style="color:purple;">{application/request}</mark> has been undertaken

🗒 **Text of the message**:

Your application for \<service> has been undertaken.

The protocol number is: \<nnnn>

For more information, visit \[this website]\(URL).

**🪄 Button**: n/a

***

**Recipients**: Citizens who have submitted a request for ...

**When to send it**: When the institution undertakes the application and assigns a protocol number.

**User story**: As a citizen, I want to receive updates about the progress of my application.

</details>

***

## Supplementation of documentation

<details>

<summary>Supplementation of documentation</summary>

**🖋 Title of the message:** Supplementation request

🗒 **Text of the message**:

To process your <mark style="color:purple;">{application/request for object}</mark> to the service \<service type> we need to receive additional documents by \<dd/mm/yyyy>.

To consult your <mark style="color:purple;">{application/request} summary}</mark>, \[visit this website]\(URL).

**🪄 Button**: Add the documents

***

**Recipients**: All citizens resident in the geographical area of action of the service who have sent a <mark style="color:purple;">{application/request for object}</mark>.

**When to send it**: When the institution needs additional documents to process the <mark style="color:purple;">{application/request}</mark>.

**User Story**: As a citizen, I want to receive updates about the progress of my <mark style="color:purple;">{application/request}</mark>.

</details>

***

## Outcome applications and requests

<details>

<summary><mark style="color:purple;">{Application/Request}</mark>accepted</summary>

**🖋 Title of the message:** Outcome of your <mark style="color:purple;">{application/request}</mark>

🗒 **Text of the message**:

Your <mark style="color:purple;">{application/request}</mark> for \<object> was accepted.

For more information, visit \[this website]\(URL).

**🪄 Button**: n/a

***

**Recipients**: All citizens residing in the geographical area of action of the service who have sent an <mark style="color:purple;">{application/request}</mark> for <mark style="color:purple;">{object}</mark>.

**When to send it**: When the institution accepts the application.

**User Story**: As a citizen, I want to receive communications about the outcome of my <mark style="color:purple;">{application/request}</mark>.

</details>

<details>

<summary><mark style="color:purple;">{Application/Request}</mark>denied</summary>

**🖋 Title of the message:** Outcome of your <mark style="color:purple;">{application/request}</mark>

🗒 **Text of the message**:

Your <mark style="color:purple;">{application/request}</mark> for \<object> was denied.

For more information, \[visit this website]\(URL).

**🪄 Button**: n/a

***

**Recipients**: All citizens residing in the geographical area of action of the service who have sent an <mark style="color:purple;">{application/request}</mark> for <mark style="color:purple;">{object}</mark>.

**When to send it**: When the institution denies the application.

**User Story**: As a citizen, I want to receive communications about the outcome of my <mark style="color:purple;">{application/request}</mark>.

</details>
