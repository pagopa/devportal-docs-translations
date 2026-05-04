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
```json
{
  "detail": "value [undefined] at [root.0] is not a valid [Exact<NewMessage>]\nvalue [undefined] at [root.1] is not a valid [{ time_to_live: (integer >= 3600 and < 604800 | 604800) }]",
  "status": 400,
  "title": "Invalid (Exact<NewMessage> & { time_to_live: (integer >= 3600 and < 604800 | 604800) })"
}
```
{% endcode %}

In this case the error is due to an incorrect transmission of the body, such as a body not sent in the correct format (JSON), for example.

## Error 401

{% code overflow="wrap" %}
```json
{
  "statusCode": 401,
  "message": "Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription."
}
```
{% endcode %}

In this case, make sure to have entered the correct value of the key `Ocp-Apim-Subscription-Key` in the header. Use one of the two keys present in the "Profile (subscriptions)" section of the portal.

{% code overflow="wrap" %}
```json
{
   "statusCode": 401,
   "message": "Access denied due to missing subscription key. Make sure to include subscription key when making requests to an API."
}
```
{% endcode %}

In this case, make sure to have entered the value of the key `Ocp-Apim-Subscription-Key` in the request header. Use one of the two keys present in the "Profile (subscriptions)" section of the portal.

## Error 403

{% code overflow="wrap" %}
```json
{
  "detail": "You are not allowed to issue requests for the recipient.",
  "status": 403,
  "title": "Recipient forbidden"
}
```
{% endcode %}

In this case, make sure to have entered a valid fiscal code that is present in the test.

{% hint style="info" %}
This specific error can also mean that the recipient is not on the IO app: to ensure that it can receive messages, first use the API \[get-a-user-profile-using-post.md]\(api-messaggi/get-a-user-profile-using-post.md "mention")
{% endhint %}

{% code overflow="wrap" %}
```json
{
   "detail": "You do not have enough permission to complete the operation you requested",
   "status": 403,
   "title": "You are not allowed here"
}
```
{% endcode %}

In this case, make sure to have entered a valid IP in the original IP LIST authorized by the service or to have signed the additional Premium contract and to have performed the required _onboarding_ procedures.

## Error 404

{% code overflow="wrap" %}
```json
{
  "statusCode": 404,
  "message": "Resource not found"
}
```
{% endcode %}

In this case, make sure to have written the path of the request correctly, e.g.: `https://api.io.pagopa.it/api/v1/profiles`
