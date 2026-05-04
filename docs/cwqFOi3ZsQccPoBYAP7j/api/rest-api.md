# Rest API

Sign with IO exposes the **REST API** that:

* are comprised of an endpoint with _predictable_ URLs based on the resources;
* use _JSON_ as an exchange format, both for requests as well as for HTTP responses;
* use standard HTTP _verbs_ and _response codes_;
* use [Problem Details (RFC7807)](https://www.rfc-editor.org/rfc/rfc7807) to describe the errors;
* are documented according to the specification OpenAPI 3.0.

The base URL for all the APIs is [https://api.io.pagopa.it](https://api.io.pagopa.it/api/v1/sign)

{% hint style="warning" %} During the testing phase, the number of API calls that can be made is subject to a threshold of 150 invocations within a period of five seconds. {% endhint %}

### Authentication

The Sign with IO APIs use an **API Key** to authenticate the requests.

For the test phase, you can generate the **API Key** by directly accessing the reserved area.

The API Key must be included in every request using the header: 

``` Ocp-Apim-Subscription-Key : "\<API_KEY_HERE>" ```