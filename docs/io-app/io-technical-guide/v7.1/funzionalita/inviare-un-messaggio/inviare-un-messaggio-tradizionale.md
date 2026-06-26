# Sending a traditional message

## What are traditional messages?

Through the traditional message sending mode, the sending entity defines the message content, storing it on IO's systems, and sends it to the recipient user.

When the user opens the message on IO, the previously stored information is retrieved from the back-end and transmitted to the app.

## How does sending a traditional message work?

### Message sending phase

Your systems integrated with IO can request the creation (and therefore sending) of a new message to a specific recipient. For more information on sending a message on IO, refer to [.](./ "mention").

The following table summarises the components of an IO message, specifying whether they are mandatory or optional:

<table><thead><tr><th width="197">Component</th><th width="417">Notes</th><th>Mandatory</th><th data-hidden data-type="checkbox">Remotable?</th></tr></thead><tbody><tr><td>title (subject)</td><td>This is the title visible in the message list and in the detail view (after opening). The length must be between <strong>10 and 120 characters.</strong></td><td><ul class="contains-task-list"><li><input type="checkbox" checked></li></ul></td><td>false</td></tr><tr><td>body (markdown)</td><td>This is the text content of the message. The length must be between <strong>80 and 10,000 characters</strong>.</td><td><ul class="contains-task-list"><li><input type="checkbox" checked></li></ul></td><td>true</td></tr><tr><td>due date (due_date)</td><td>Allows you to associate a reminder with the message. The date format must be ISO-8601 and the timezone UTC.</td><td><ul class="contains-task-list"><li><input type="checkbox"></li></ul></td><td>true</td></tr><tr><td>payment notice (payment_data)</td><td>Allows you to convey a payment notice in the message, which can be paid directly in the app. To do this, you must request <a href="../../abilitazioni/test-invio-avvisi-pagopa.md">specific authorisation.</a></td><td><ul class="contains-task-list"><li><input type="checkbox"></li></ul></td><td>true</td></tr></tbody></table>

When you send the message submission request through the [specific endpoint](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md), you will receive a response from the server containing the message identifier. You can use it together with the recipient's Tax Code to **check the message sending status**.

{% hint style="info" %}
If you have signed up for the Premium agreement, you will also be able to see the recipient's **read and payment status**. For more information, see the [Send messages](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi "mention") page in the [Services manual](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/xWONfJmawghGo2ekuaKh/).
{% endhint %}

{% hint style="success" %}
Remember that before sending a message, you must verify that the citizen is registered with IO and that the service can send communications to the citizen. For more information, discover the [get-a-user-profile-using-post.md](../../api-e-specifiche/api-messaggi/get-a-user-profile-using-post.md "mention") API.
{% endhint %}

### Message consumption phase

When the recipient citizen opens the message, the app verifies the information needed to retrieve the message from IO's systems.

<details>

<summary>Note on forwarding messages via email</summary>

IO users can enable message forwarding via email in the app's preferences. This way, a message sent via IO will also be forwarded to the recipient's email address.

The email contains the beginning of the message body (the first 134 characters), as well as an invitation to open the app to access the full content via a button that allows the _redirect_.

Here is an example of a forwarded email:

​![](https://665034208-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsUBZStlCQZzLI6ZesbND%2Fuploads%2FQezZGa89PwMyc0gLhryW%2Fimage.png?alt=media\&token=14c33ef0-a96d-4b9d-b8c9-394164135b66)\\

</details>
