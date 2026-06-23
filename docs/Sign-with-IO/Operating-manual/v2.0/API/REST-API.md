# REST API

Sign with IO exposes **REST APIs** that:

- are composed of endpoints with _predictable_ resource-based URLs;
- use _JSON_ as the interchange format, for both HTTP requests and responses;
- make use of standard HTTP _verbs_ and _response codes_;
- use [Problem Details (RFC7807)](https://www.rfc-editor.org/rfc/rfc7807) to describe errors;
- are documented according to the OpenAPI 3.0 specification.

The base URL for all APIs is [https://api.io.pagopa.it](https://api.io.pagopa.it/api/v1/sign)

### Authentication

The Sign with IO APIs use an **API Key** for request authentication.

For the testing phase, you can generate the **API Key** by accessing the Reserved Area directly.

The API Key must be included in every request using the header:

```
Ocp-Apim-Subscription-Key : "<API_KEY_HERE>"
```
