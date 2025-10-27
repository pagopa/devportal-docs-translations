# Send a traditional message

## What are traditional messages?

By sending traditional messages, the sending institution defines the content of the message, enters it in the IO systems and sends it to the recipient user.

When the user opens the message on IO, the information that was previously stored is retrieved by the back-end and sent to the app.

## How is a traditional message sent?

### Message sending phase

Your systems integrated with IO can request the creation (and therefore the sending) of a new message to a specific recipient. For more information about sending a message on IO, refer to [.](./ "mention").

The following table summarizes the components of an IO message, specifying if they are mandatory or optional:

<table><thead><tr><th width="197">Component</th><th width="417">Notes</th><th>Mandatory</th><th data-hidden data-type="checkbox">Can be remote?</th></tr></thead><tbody><tr><td>Subject</td><td>This is the visible subject on the list of messages and in the details (after it is opened). The length must be between <strong>10 and 120 characters.</strong></td><td><ul class="contains-task-list"><li><input type="checkbox" checked></li></ul></td><td>false</td></tr><tr><td>body (markdown)</td><td>This is the text content of the message. The length must be between <strong>80 and 10,000 characters</strong>.</td><td><ul class="contains-task-list"><li><input type="checkbox" checked></li></ul></td><td>true</td></tr><tr><td>due date</td><td>This allows associating a reminder with the message. The format must be ISO-8601 with the UTC time zone.</td><td><ul class="contains-task-list"><li><input type="checkbox"></li></ul></td><td>true</td></tr><tr><td>payment notice (payment_data)</td><td>Allows sending a payment notice in the message, payable directly in app. To do so, you must request <a href="../../enabling/test-sending-pagopa-notices.md">specific authorization.</a></td><td><ul class="contains-task-list"><li><input type="checkbox"></li></ul></td><td>true</td></tr></tbody></table>

When you send the request to send the message through the [specific endpoint](../../api-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md), you will receive the response of the server that contains the message identifier. You can use it together with the fiscal code of the recipient to **check the result of sending the**  message.

{% hint style="info" %} If you signed the Premium agreement, you can also know the **reading** **and payment** status of the recipients. For more information, consult the page [Send messages](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi "mention") in the [Service manual](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/xWONfJmawghGo2ekuaKh/). {% endhint %}

{% hint style="success" %} Remember that before sending a message, you must check that the citizen is registered with IO and that the service can send communications to the citizen. For more information, discover the API [get-a-user-profile-using-post.md](../../api-and-specifications/message-api/get-a-user-profile-using-post.md "mention"). {% endhint %}

### Message usage phase

When the recipient citizen opens the message, the app checks the information necessary for retrieving the message in the IO systems.

<details>

<summary>Note about message forwarding via email</summary>

IO users can activate message forwarding via email in the app preferences. In this way, a message sent via IO will be forwarded also to the recipient's email address.

The email contains the incipit of the body of the message (the first 134 characters), as well as an invitation to open the app to access the complete content via a button that which permits the _redirect_.

Here is an example of a forwarding email:

​![](https://665034208-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsUBZStlCQZzLI6ZesbND%2Fuploads%2FQezZGa89PwMyc0gLhryW%2Fimage.png?alt=media&token=14c33ef0-a96d-4b9d-b8c9-394164135b66)\\

</details>

