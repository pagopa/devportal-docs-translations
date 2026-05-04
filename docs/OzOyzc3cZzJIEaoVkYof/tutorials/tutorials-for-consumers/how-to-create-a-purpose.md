---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/tutorials/tutorials-for-consumers/how-to-create-a-purpose
---

# How to create a purpose

### Step 1: Enter the creation flow

To create a new purpose, go to _**Subscribing > Sent purposes**_ and click _**Create new**_.

### Step 2: Select the e-service and the party to associate it with

When creating the purpose, you must specify the **e-service for which the purpose will be active**. From the list of e-services, you can only select those for which the party has an active service request.

Additionally, you need to select the **party for whom the purpose is being created**. By default, the selected party is your own. It can be changed for those e-services where the party has received a delegation for subscription.

### Step 3: Fill in the general information

The following information is required to create the purpose:

* **name and description**: used only to help the party distinguish between the different purposes they have created;
* **free of charge flag**: indicate whether access to the data is provided free of charge (for Public Administrations, this is always the case);
* **reason for free of charge**: provide justification for the free-of-charge access (for Public Administrations, this is prefilled with "I am a Public Administration");
* **load estimate**: the number of API calls per day the subscriber estimates to make toward the e-service’s API (see the [dedicated section](../../technical-references/e-services/thresholds-and-approvals.md) for more details).

### Step 4: Fill in the risk analysis questionnaire

If the e-service for which you’re creating the purpose provides data, the subscriber—as the data recipient—must fill out the risk analysis questionnaire.

If the e-service receives data, the subscriber must choose a use case from those made available by the producer. Essentially, the subscriber selects how the producer must process the data received from the subscriber, by selecting the use case of interest.

More details on completing the questionnaire are available in the [dedicated section](../../technical-references/finalita/risk-analysis.md).

### Step 5: Publish the purpose

You can proceed to publish the purpose in draft form. If the load estimate is below both thresholds set by the producer, the purpose will be activated immediately. Otherwise, it will enter the _**Waiting for approval**_ state and require manual approval from the producer.

### Step 6: Associate clients with a purpose

Once the purpose is active, you can associate the related clients. For more details, see the [dedicated tutorial](how-to-associate-a-client-with-a-purpose.md).

***

Next page [→ How to create a client](how-to-create-a-client.md)
