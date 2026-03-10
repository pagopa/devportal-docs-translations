# Types of voucher requests

It is possible to request vouchers from PDND that comply with different specifications. For all the cases listed below except the first, the voucher to request is detailed by the producer in the settings of their e-service (API interface file and attached technical documentation). If the producer does not specify anything, the voucher to produce is of the second type (Bearer) without additional information.

The possible types are as follows:

* Bearer voucher usable with PDND APIs;
* Bearer voucher usable with a producer's APIs;
* DPoP voucher usable with a producer's APIs.

For options 2 and 3, both a standard configuration and one including additional information are possible, according to the pattern described by AgID called _Audit REST 02_.

Below is a brief description of all voucher types.

## Basic request flow

In all cases, the voucher request consists of at least three steps:

1. **generating and signing a client assertion** that provides the request details (from which client, for which purpose, etc.);
2. **sending the client assertion to PDND’s authorization server** which, after verification, issues the voucher;
3. **sending the data request to the producer**, including in the request header the voucher obtained from PDND.

All the request types are variations of this flow and refer to specific RFCs.

{% hint style="info" %}
Additional authorization proofs may still be required in the communication between producer and subscriber, at the parties' discretion.
{% endhint %}

## Security and reference standards for signing and verification <a href="#sicurezza-e-standard-di-riferimento" id="sicurezza-e-standard-di-riferimento"></a>

The signing and verification process follows international specifications that ensure security. The reference standards include:

* [RFC 8017](https://datatracker.ietf.org/doc/html/rfc8017) (PKCS #1): defines the methods for using the RSA algorithm for digital signatures;
* [RFC 7518](https://datatracker.ietf.org/doc/html/rfc7518) (JSON Web Algorithms): specifies signature algorithms such as RSA and SHA-256;
* [RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517) (JSON Web Key — JWK): specifies the JSON format for representing cryptographic keys, both public and private.

## Bearer Token usable with PDND APIs

It has two distinctive features:

1. it must be made by a _PDND API client_;
2. it does not require specifying the reference purpose.

The PDND APIs are provided to all parties by contract, as required by AgID Guidelines. For this reason, there is no need to detail the purpose of the request.

The list of APIs exposed by PDND is available [here](https://developer.pagopa.it/pdnd-interoperabilita/api).

For more information, see the [practical tutorial](../../tutorials/consumer/voucher/how-to-request-a-bearer-voucher-for-pdnd-apis.md).

{% hint style="info" %}
PDND does not have visibility of the data exchanged between producer and subscriber. Its APIs only return information related to the PDND domain itself (e.g., the list of service requests submitted by the party).
{% endhint %}

## Bearer Token usable with a producer's APIs (standard)

Used by the vast majority of services, it requires creating a client assertion detailing the basic information requested by PDND. This is useful both for audit purposes and for allowing the producer to assess the incoming data access requests.

For more information, see:

* subscriber side: the [practical tutorial](../../tutorials/consumer/voucher/how-to-request-a-bearer-voucher-for-a-producers-api-standard.md) for requesting a voucher;
* producer side: the recommended [standard checks](checks-on-a-bearer-voucher-by-a-producer.md).

## Bearer Token usable with a producer's APIs (with additional information — ModI _Audit REST 02_ pattern)

Used by all those services for which the producer considers it necessary to obtain additional audit information not included in the standard fields required by PDND within the client assertion.

An example might be the caller's IP address or information related to the operator making the request.

The mechanism allows the producer to verify that the subscriber has deposited a record on PDND, which acts as a notary in this process. At the same time, the information is exchanged directly between subscriber and producer, without PDND knowing it.

An example of this pattern is the ANPR services.

In this flow, the subscriber forges a second JWT containing the additional information. From this JWT, a hash is derived, which is then included in the client assertion in the `digest.value` field.

Finally, after obtaining a voucher from PDND, the subscriber includes both the voucher and the second JWT in the call to the producer. The producer then compares the hash found in the digest in the PDND voucher with a value calculated from the contents of the second JWT. If they match, the additional data in the second JWT is intact.

For more information, see:

* subscriber side: the [practical tutorial](../../tutorials/consumer/voucher/how-to-request-a-bearer-voucher-for-a-producers-api-with-additional-information.md) for requesting a voucher;
* producer side: the recommended [standard](checks-on-a-bearer-voucher-by-a-producer.md) and [additional](checks-of-the-digest-by-a-producer.md) checks.

## DPoP usable with a producer's APIs (standard)

The _Demonstrating Proof-of-Possession (DPoP)_ pattern involves using two DPoP tokens, one for PDND and the other for the resource server from which the data is being requested. If the two independent verifications do not match, the request is not authorized.

This pattern provides an additional security layer, useful for example when the data is requested for a single specific operation, such as when a device requests authorization to access data.

It is a valid alternative to mTLS in some cases, with the advantage of not requiring a certificate exchange between the two parties and not needing special maintenance, especially by the producer.

For more information, see:

* subscriber side: the practical [practical tutorial](../../tutorials/consumer/voucher/how-to-request-a-dpop-voucher-for-a-producers-api-standard.md) for requesting a voucher;
* producer side: the recommended [standard checks](checks-on-a-dpop-voucher-by-a-producer.md);
* everyone: the [dedicated in-depth guide](focus-on-dpop.md).

## DPoP usable with a producer's APIs (with additional information — ModI _Audit REST 02_ pattern)

This mirrors the previous DPoP case, but includes the additional information a producer may require, as described in the [earlier case](types-of-voucher-requests.md#bearer-token-spendibile-presso-le-api-di-un-erogatore-con-informazioni-aggiuntive-pattern-modi-audit).

For more information, see:

* subscriber side: the [practical tutorial](../../tutorials/consumer/voucher/how-to-request-a-dpop-voucher-for-a-producers-api-with-additional-information.md) for requesting a voucher;
* producer side: the recommended [standard](checks-on-a-dpop-voucher-by-a-producer.md) and [additional](checks-of-the-digest-by-a-producer.md) checks;
* everyone: the [dedicated in-depth guide](focus-on-dpop.md).
