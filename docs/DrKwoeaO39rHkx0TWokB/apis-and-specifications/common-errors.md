---
description: >-
  In this section you will find some of the possible errors when sending a
  request to the APIs.
---

# Common errors

## Error 429

All the APIs can return the status code `429` . This error represents an IO infrastructure **overload signal**: in this case, it is necessary to implement a retry mechanism and reduce the rate of the requests, inserting pauses.

## Error 400

{% code overflow="wrap" %}
````</code>

</div> In this case the error is due to an incorrect transmission of the body, such as a body not sent in the correct format (JSON), for example. ## Error 401 <div data-gb-custom-block data-tag="code">

 ```json { &quot;statusCode&quot;: 401, &quot;message&quot;: &quot;Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription.&quot; }
````
{% endcode %}

`In this case, make sure to have entered the correct value of the key Ocp-Apim-Subscription-Key in the header. Use one of the two keys present in the "Profile (subscriptions)" section of the portal.`{ \&quot;statusCode\&quot;: 401, \&quot;message\&quot;: \&quot;Access denied due to missing subscription key. Make sure to include subscription key when making requests to an API.\&quot; }`In this case, make sure to have entered the value of the key Ocp-Apim-Subscription-Key in the header request. Use one of the two keys present in the "Profile (subscriptions)" section of the portal.Error 403`{ \&quot;detail\&quot;: \&quot;You are not allowed to issue requests for the recipient.\&quot;, \&quot;status\&quot;: 403, \&quot;title\&quot;: \&quot;Recipient forbidden\&quot; }`In this case, make sure to have entered a valid fiscal code that is present in the test.`{ \&quot;detail\&quot;: \&quot;You do not have enough permission to complete the operation you requested\&quot;, \&quot;status\&quot;: 403, \&quot;title\&quot;: \&quot;You are not allowed here\&quot; }`In this case, make sure to have entered a valid IP in the original IP LIST authorized by the service or to have signed the additional Premium contract and to have performed the required`` `_`onboarding`_` ``procedures.Error 404`{ \&quot;statusCode\&quot;: 404, \&quot;message\&quot;: \&quot;Resource not found\&quot; }`In this case, make sure to have written the path of the request correctly, e.g.: https://api.io.pagopa.it/api/v1/profiles`
