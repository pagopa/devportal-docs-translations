# Send a traditional message

## What are traditional messages?

When using the traditional message delivery method, the sending organization defines the message content, stores it in IO's systems, and sends it to the recipient.

When the user opens the message in IO, the previously stored information is retrieved by the back end and transmitted to the app.

## How does sending a traditional message work?

### Message delivery phase

Your systems integrated with IO can request the creation—and therefore the delivery—of a new message to a specific recipient. For more information about sending a message through IO, refer to [.](./ "mention").

The following table summarizes the components of an IO message and indicates whether they are mandatory or optional:

<table><thead><tr><th width="197">Component</th><th width="417">Notes</th><th>Mandatory</th><th data-hidden data-type="checkbox">Remotely retrievable?</th></tr></thead><tbody><tr><td>title (subject)</td><td>This is the title displayed in the message list and in the message details after it is opened. It must be between <strong>10 and 120 characters long.</strong></td><td><ul class="contains-task-list"><li><input type="checkbox" checked></li></ul></td><td>false</td></tr><tr><td>body (markdown)</td><td>This is the message's text content. It must be between <strong>80 and 10,000 characters long</strong>.</td><td><ul class="contains-task-list"><li><input type="checkbox" checked></li></ul></td><td>true</td></tr><tr><td>due date (due_date)</td><td>Allows you to associate a reminder with the message. The date must use the ISO 8601 format and the UTC time zone.</td><td><ul class="contains-task-list"><li><input type="checkbox"></li></ul></td><td>true</td></tr><tr><td>payment notice (payment_data)</td><td>Allows you to include a payment notice in the message, which can be paid directly in the app. To do so, you must request <a href="../../abilitazioni/test-invio-avvisi-pagopa.md">the specific authorization.</a></td><td><ul class="contains-task-list"><li><input type="checkbox"></li></ul></td><td>true</td></tr></tbody></table>

When you submit the message delivery request through the [dedicated endpoint](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md), the server response will contain the message identifier. You can use it together with the recipient's Fiscal Code to **check the message delivery outcome**.

{% hint style="info" %}
If you have signed the Premium agreement, you will also be able to check the recipient's **read and payment status**. For more information, see the [Services manual](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/5bOyAHeFhNe1cgBkhyaW/).
{% endhint %}

{% hint style="success" %}
Remember that before sending a message, you must verify that the citizen is registered with IO and that the service is authorized to send communications to them. For more information, see the [API](../../apis-and-specifications/message-api/get-a-user-profile.md).
{% endhint %}

### Message access phase

When the recipient opens the message, the app checks the information required to retrieve the message from IO's systems.

<details>

<summary>Note on forwarding messages by email</summary>

IO users can enable email forwarding for messages in the app preferences. When this option is enabled, a message sent through IO is also forwarded to the recipient's email address.

The email contains the opening portion of the message body—the first 134 characters—as well as an invitation to open the app to access the full content through a button that redirects the user.

Here is an example of a forwarded email:

![](https://665034208-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsUBZStlCQZzLI6ZesbND%2Fuploads%2FQezZGa89PwMyc0gLhryW%2Fimage.png?alt=media\&token=14c33ef0-a96d-4b9d-b8c9-394164135b66)\\

</details>
