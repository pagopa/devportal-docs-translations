# Service topic

The topic is a thematic area useful for classifying a service, based on what the service itself offers.

{% hint style="info" %}
**Example**: Enrolling in a new nursery school, paying university fees, and signing up for language courses offered by the Municipality are all services belonging to the _**Education and Training**_ topic.
{% endhint %}

### Classify the service by specifying the topic:

If you intend to define the thematic area for the service:

#### Via the Private Area

Select the service topic from the selector in the "**Service Topic" field when you create or edit the service profile.** You will find this information in the service details.

#### Via API

Set the `metadata.topic_id` attribute to the ID of the topic that identifies the thematic area for the service.

To retrieve the list of available topics (thematic areas/topics), you can call the `/services/topics` API.
