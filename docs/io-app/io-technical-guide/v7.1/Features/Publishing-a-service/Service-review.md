# Service review

When the service card is complete and complies with the [Service Manual](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/zcLztiq5qDSVw9rRjW7p/), you can submit a review request.

If the service is **approved**, you can proceed with publication (which is automatic if specified in the review request sent via API). If it is **rejected**, you will be given a reason that allows you to make the necessary changes to resubmit it for evaluation.

#### Via Developer Portal

<details>

<summary><mark style="color:blue;">Step 1</mark> - Log in and identify the service</summary>

1. [**Log in**](https://developer.io.italia.it/) to the Developer Portal;
2. In the left column, select **“Services”**;
3. In your list of services, identify the service you want to check and click on its box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Submit the service for evaluation</summary>

Before submitting the request, make sure the service is complete and complies with the [Service Manual](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/zcLztiq5qDSVw9rRjW7p/).

1. Scroll to the bottom of the service card;
2. In the "Go Live!" box click on the "Publish Service" button.

If the button is not enabled, it means the service card is not completely filled out: check that you have entered at least all the mandatory data.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Check the outcome</summary>

1. Go back to the Developer Portal and find the service card;
2. At the top, you will find an information box indicating the [service status](Service-status.md).

🟢 If the service has been **approved**, it has also been published. It will be visible in the IO App within a few hours.

🔴 If the service has been **rejected**, scroll to the bottom of the page, where you can find the reason. Correct the service as indicated, and then resubmit it for evaluation.

</details>

#### Via Private Area

<details>

<summary><mark style="color:blue;">Step 1</mark> - Log in and identify the service</summary>

1. [**Log in**](https://selfcare.pagopa.it/) to the Private Area;
2. Select the institution you want to operate for from the list shown;
3. Among the active products, find the IO App and click on its box;
4. In the left column, select "**Services**";
5. In your list of services, identify the service you want to check and click on its box to see the details.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Submit the service for evaluation</summary>

Before submitting the request, make sure the service is complete and complies with the [Service Manual](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/zcLztiq5qDSVw9rRjW7p/).

1. Click on the **"Send for review"** button at the top;
2. Wait for the service to be validated or not by PagoPA S.p.A.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Check the outcome</summary>

1. Go back to the Private Area and find the service card;
2. Next to the service name, you will find a tag indicating the [service status](Service-status.md);

🟢 If the service has been **approved**, proceed to publish it by clicking the **"Publish in IO app"** button. It will be visible in the IO App within a few hours.

🔴 If the service has been **rejected**, you can find the reason for rejection. Correct the service as indicated, and then resubmit it for evaluation.

</details>

#### Via API

<details>

<summary><mark style="color:blue;">Step 1</mark> - Retrieve the dedicated API key</summary>

Find out what the [`manage key`](Manage-key/Manage-key.md) is and [how to retrieve it](Manage-key/Manage-key.md#recupera-la-chiave-manage).

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Submit the service for evaluation</summary>

1. Identify and retrieve the ID of the service you want to submit for review;
2. Query the API to [request a review](../../APIs-and-specifications/Service-APIs/Manage-service-request-review.md). You can choose to proceed with automatic publication of the service in case of approval.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Check the outcome</summary>

1. Query the API to [read the details of a service](../../APIs-and-specifications/Service-APIs/Manage-service-get.md);
2. Consult the `status.value` field to know the outcome of the review;
3. Understand what the possible [service statuses](Service-status.md) are.

🟢 If the service is in the **`APPROVED`** state, it is ready to be activated. If you have chosen automatic activation, the service will already be **`PUBLISHED`** (i.e., **activated**)<br>

🔴 If the service is in the **`REJECTED`** state:

1. Consult `status.reason` to find out why it was rejected;
2. You can correct the service following the instructions received, and then resubmit it.

</details>

