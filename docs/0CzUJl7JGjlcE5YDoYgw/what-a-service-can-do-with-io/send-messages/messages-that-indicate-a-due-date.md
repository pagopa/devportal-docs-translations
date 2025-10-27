# Messages that indicate a deadline

These messages contain a **deadline or a reminder**, such as a reminder for the expiration date of a document to be renewed or the deadline for requesting a bonus. For these types of messages, use the `due_date` field in the message payload. The data format supported by the system is UTC (ISO 8601).

<figure><img src="../../.gitbook/assets/image (15).png" alt=**><figcaption><p>Example of a message that indicates a deadline</p></figcaption></figure>

In addition to the manual conversion option, there are some websites that **automatically convert** dates into the desired format, such as the [DenCode Converter](https://dencode.com/date/iso8601) or [Timestamp Converter](https://www.timestamp-converter.com/). 

{% hint style="warning" %} **Attention to the set date**

If the expiration date does not have a specific time, usually it refers to the end of the day.

**Example:**

✅ January 12 (23:59:59) --> the user can pay by January 12

❌ January 12 (00:00:01) --> the user can pay by January 11 {% endhint %}

{% hint style="info" %} For more information about the data format, refer to the dedicated section in the IO [technical guide](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body#due_date). {% endhint %}