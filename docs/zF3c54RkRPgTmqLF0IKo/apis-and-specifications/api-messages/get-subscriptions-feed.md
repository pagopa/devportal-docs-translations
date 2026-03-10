# Get Subscriptions Feed

{% hint style="info" %}
This mode is reserved to central institutions or institutions on a national level. \[\*\*Discover how to request authorization ->\*\* ]\(../../enabling/subscription-feed.md)
{% endhint %}

## Description

The API [get-subscriptions-feed.md](get-subscriptions-feed.md "mention") makes it possible to download the _hashes_ of the fiscal codes of the citizens registered/deregistered to service for a specific date (UTC-YYYY-MM-DD).

The purpose of the _subscription feed_ is to provide the central institutions with a tool to minimize phone calls to the IO infrastructure by means of a filter created by the institution itself.

The _subscription feed_ information **is updated as of the previous day**. For the creation of the _subscription feed_, you must query the service for each day starting from 03/24/2020 up to the current date and save the data in your infrastructure.

{% hint style="danger" %}
In no case is it possible to request the fiscal code in an unencoded manner.
{% endhint %}

{% hint style="info" %}
For technical details on how to encode fiscal codes of your system to be able to compare them with those returned from the \_subscription feed\_, expand the following section.
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/subscriptions-feed/{date}" method="get" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

The following is obtained with a correct response:

1. the status code of the response is `200`
2. the field **subscriptions** and **unsubscriptions** is in the response body

## Examples

{% code overflow="wrap" %}
```shell
### REQUEST curl --location --request GET &apos;https://api.io.pagopa.it/api/v1/subscriptions-feed/2020-02-23&apos; \ --header &apos;Ocp-Apim-Subscription-Key: __YOUR_API_KEY__&apos;
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE { &quot;dateUTC&quot;: &quot;2020-02-23&quot;, &quot;subscriptions&quot;: [ &quot;e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&quot; ], &quot;unsubscriptions&quot;: [ ] }
```
{% endcode %}

## Useful resources

[https://developer.io.italia.it/openapi.html#operation/getSubscriptionsFeedForDate](https://developer.io.italia.it/openapi.html#operation/getSubscriptionsFeedForDate)
