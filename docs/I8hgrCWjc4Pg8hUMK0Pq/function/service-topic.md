# Service topic

The topic is a thematic area useful for classifying a service based on what the service offers. 

{% hint style="info" %} **Example**: Registering for new day care, paying university fees and registering for language courses offered by the municipality are all services part of the topic _**Education and Training**_. {% endhint %}

### Classify the service by specifying the topic: 

If you want to define the thematic area of reference for the service:

#### Via the Reserved Area

Select the topic of the service from the selector for the field **"Service topic" when you create or modify the service tab.** You will find this information among the detailed data of the service.

#### Via API

Enter the id topic that identifies the thematic area of reference for the service in the attribute `metadata.topic_id`. 

You can invoke the API `/services/topics` to display the list of topics (thematic areas/topics).