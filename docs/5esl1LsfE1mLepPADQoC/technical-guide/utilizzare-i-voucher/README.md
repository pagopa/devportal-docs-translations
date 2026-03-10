# Vouchers

Vouchers are issued by PDND to subscribers in the form of **JWT (JSON Web Token)**.

Depending on the request, they may implement a different specification (Bearer Token, DPoP), or have a different destination (a producer’s API, one of PDND’s APIs).

PDND uses specifications based on [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750) (**OAuth 2.0**). Client authorization via client assertion is implemented according to the [RFC 7521](https://datatracker.ietf.org/doc/html/rfc7521) standard. Additional RFCs depend on the type of voucher issued and are indicated in detail in the relevant sections.

The type of voucher that a producer requires must always be specified in the API interface document and in the technical documentation that a producer includes within its e-service.

The possible voucher requests and their differences are detailed in the [dedicated section](types-of-voucher-requests.md).

For additional safeguards, the producer may also sign its own response, ensuring its integrity for the subscriber. To do so, it uses the producer keychain mechanism (called the "Server dell'Aderente" in the AgID Guidelines). More information is available in the [dedicated section](ensuring-response-integrity.md).

{% hint style="info" %}
Additional authorization proofs or information related to the subscriber’s domain may be provided in the communication between the producer and the subscriber, at the discretion of the parties.
{% endhint %}
