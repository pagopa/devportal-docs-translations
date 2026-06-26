# Get Subscriptions Feed

{% hint style="info" %}
This mode is reserved for central or national-level bodies.\
[**Learn how to request authorisation ->** ](../../Authorizations/Subscription-feed.md)
{% endhint %}

## Description

The [get-subscriptions-feed.md](get-subscriptions-feed.md "mention") API allows you to download the _hashes_ of the Fiscal Codes of citizens who are subscribed to or unsubscribed from a service for a specific date (UTC-YYYY-MM-DD).&#x20;

The purpose of the _subscription feed_ is to provide central bodies with a tool to minimise calls to the IO infrastructure through a filter built by the body itself.&#x20;

The information in the _subscription feed_ **is for the previous day**. To build the _subscription feed_, you will need to query the service for each day starting from March 24, 2020, up to the current date and save the data in your infrastructure.&#x20;

{% hint style="danger" %}
Under no circumstances can fiscal codes be requested in plain text.&#x20;
{% endhint %}

{% hint style="info" %}
For technical details on how to encode the Fiscal Codes in your system to compare them with those returned by the _subscription feed_, expand the section below.
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/subscriptions-feed/{date}" method="get" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

A correct response returns:

1. the response status code is `200`
2. the **subscriptions** and **unsubscriptions** fields in the response body

## Examples

{% code overflow="wrap" %}

```shell
### REQUEST
curl --location --request GET 'https://api.io.pagopa.it/api/v1/subscriptions-feed/2020-02-23' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__'
```

{% endcode %}

{% code overflow="wrap" %}

```shell
### RESPONSE
{
"dateUTC": "2020-02-23",
"subscriptions": [ "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" ],
"unsubscriptions": [ ]
}
```

{% endcode %}

## Useful resources

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getSubscriptionsFeedForDate](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getSubscriptionsFeedForDate)
