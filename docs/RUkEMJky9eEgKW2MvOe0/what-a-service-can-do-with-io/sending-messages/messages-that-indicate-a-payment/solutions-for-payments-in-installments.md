# Solutions for payments in installments

Currently, it is not possible to send multiple payment notifications on IO in the same message. There are however **various scenarios to be applied** if the institution wants to provide the option to pay large amounts in multiple installments.

### **Single installment + option to pay in installments on IO**

To provide users with the option to **chose to pay a tax with one or more installments**, the institution can:

1. Send the user a message with the **notification of payment with a single installment**, indicating the deadline for its payment;
2. communicate to the user in the message that if they **want to pay with multiple installments, they can ignore this message**;
3. when the deadline for payment of the single installment has been reached, send all the users who did not pay it a message with the **notification of payment for the first installment**;
4. subsequently the institution will send the messages with the **payment notifications for the other installments** according to the time frame it will define.

### **Single installment + option to pay in installments on an external platform**

A second possibility for providing users with the option to **chose to pay a tax with one or more installments** is as follows:

1. Send the user a message with the **notification of payment with a single installment**, indicating the deadline for its payment;
2. in the message, inform the user that if they want to pay with multiple installments, they must **go to a third-party platform**, for example the website for the municipality to make the request to pay in installments.

{% hint style="info" %}
If this scenario is used, we recommend making sure that the user who selected installments does not pay also the notification for payment with a single installment.
{% endhint %}

### **Payments in installments**

If the institution desires to give only the option of **paying an amount in multiple installments**, it can proceed with the \*\*progressive sending of various messages\*\*, where each of them refers to an installment and contains the relative notification of payment.

In this case, we recommend **including this information in each message**:

* the number of the corresponding installment (also to be indicated in the title);
* the amount;
* the payment deadline;
* the installments already paid;
* the installments still to be paid;
* the total amount of the installments.
