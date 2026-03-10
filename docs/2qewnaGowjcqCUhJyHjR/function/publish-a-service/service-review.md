# Service review

When the service tag is complete and compliant with the [Service manual](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/zcLztiq5qDSVw9rRjW7p/), you can sent a request for review.

If the service is **approved**, the institution can proceed with publishing (automatically if this was specified in the review request sent via API). If **rejected**, you will be informed of the reason, which will allow you to make the necessary changes to submit it again for evaluation.

#### Via the Developer Portal

<details>

<summary><mark style="color:blue;">Step 1</mark>- Access and identify the service</summary>

1\. \[\*\*Access\*\*]\(https://developer.io.italia.it/) the Developer Portal; 2. In the left column, select \*\*“Services”\*\*; 3. Identify the service you want to check on the list of your services and click the box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>- Send the request to evaluate the service</summary>

Before sending the request, make sure that the service is complete and compliant with the \[Service manual]\(https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/zcLztiq5qDSVw9rRjW7p/).

1. Scroll to the bottom of the service tab;
2. In the "Go Live!" box, click the button "Publish service".

If the button is not enabled, this means that the service tab is not completed: check to have entered as least all the mandatory data.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark>- Consult the result</summary>

1\. Enter the Developer Portal again and search for the service tab; 2. At the top, you will see an information box that indicates the \[service status]\(service-state.md).

🟢 If the service was **approved**, it was also published. It will be visible on the IO app in a few hours.

🔴 If the service was **rejected**, scroll to the end of the page, where you can find the reason. Correct the service as indicated then resubmit it again for evaluation.

</details>

\#### Via the Reserved Area

<details>

<summary><mark style="color:blue;">Step 1</mark>- Access and identify the service</summary>

1\. \[\*\*Access\*\*]\(https://selfcare.pagopa.it/) the Reserved Area; 2. Select the institution for which you want to operate from the list that is displayed; 3. The IO app searches among the active products and click the relative box; 4. In the left column, select “\*\*Services\*\*”; 5. Identify the service you want to check on the list of your services and click the box to see the details.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>- Send the request to evaluate the service</summary>

Before sending the request, make sure that the service is complete and compliant with the \[Service manual]\(https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/zcLztiq5qDSVw9rRjW7p/).

1. Click at the top on the button **"Send for review"**;
2. Wait for the service to be validated or not by PagoPA S.p.A.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark>- Consult the result</summary>

1\. Enter the Reserved Area again and search for the service tab; 2. Next to the name of the service you will see a tag with the indication of the \[service status]\(service-state.md);

🟢 If the service has been **approved**, proceed with publishing it by clicking the button **"Publish in the IO app"**. It will be visible on the IO app in a few hours.

🔴 If the service was **rejected**, you will find the reason it was rejected. Correct the service as indicated then resubmit it again for evaluation.

</details>

\#### Via API

<details>

<summary><mark style="color:blue;">Step 1</mark>- Get the specific api-key</summary>

Discover what the \[\`chiave manage\`]\(manage-key.md) is and \[how to get it]\(manage-key.md#recupera-la-chiave-manage).

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>- Send the request to evaluate the service</summary>

1\. Identify and recover the id of the service you want to submit for review; 2. Query the API to \[request the review]\(../../api-and-specifications/api-services/manage-service-request-review.md). You can select to proceed with the automatic publication of the service if it is approved.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark>- Consult the result</summary>

1\. Query the API to \[read the details of a service]\(broken-reference); 2. Consult the \`status.value\` field to see the result of the review; 3. Understand what the \[service statuses]\(service-state.md) can be.

🟢 If the service status is **`APPROVED`**, it is ready to be activated. If you have selected automatic activation, the service will already be **`PUBLISHED`** (i.e. **activated**)\\

🔴 If the service status is **`REJECTED`**:

1. Consult `status.reason` to learn why it was rejected;
2. You can correct the service, following the instructions received, and then resubmit it.

</details>
