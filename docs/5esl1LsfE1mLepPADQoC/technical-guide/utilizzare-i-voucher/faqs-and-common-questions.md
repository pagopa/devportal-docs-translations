# FAQs and common questions

## My voucher request is rejected

The simplest way to understand why is to use the _**Debug Client Assertion**_ tool available in the back office (found in the _**Developer Tools**_ menu).

Specifically, the tool verifies that the entire authorization chain is active, namely:

* active e-service version;
* active service request;
* active purpose;
* correct client;
* client associated with the active purpose;
* public key uploaded within the client;
* matching signature between public and private key.

If the entire chain is active, it verifies that in the client assertion the party has only included allowed claims, and that the claim values are of the correct type.

The allowed claims are as follows: in the header — `kid`, `alg`, and `typ`. In the payload — `iss`, `sub`, `aud`, `jti`, `iat`, `exp`, and `purposeId`. Optionally, you can include the `digest` field, containing two values: `alg` and `value`.

The fields `kid`, `alg`, `typ`, `iss`, `sub`, `aud`, `jti`, and `purposeId` must be strings. The fields `iat` and `exp` are long integers. The fields `digest.alg` and `digest.value` are also strings.

For any doubts, a practical example of a client assertion is available [here](../../tutorials/consumer/voucher/how-to-request-a-bearer-voucher-for-pdnd-apis.md#il-flusso-in-breve-2).

## The "nbf" field is required by the standard but I don't see it

Correct — the `nbf` field is not among the allowed claims and should not be included in the client assertion.

## Where should I insert the new custom claims? I mean "producerId", "consumerId", "eserviceId", "descriptorId"

It is not the consumer party who must insert them. PDND will automatically return them in the voucher it issues to the consumer.

## Is the "digest" field mandatory?

No — in the context of a Bearer Token–type voucher it is optional and should be included only if the producer requires additional information from the party for a specific e-service.

## In the client assertion, should I also insert the fields expected in the "digest", such as "userId", "userLocation", etc. How do I do that?

They should not be inserted in the client assertion. These fields are additional information requested by specific producers for specific e-services and are part of the interaction between producer and party. They must not be known to PDND.

To pass them to the producer, those fields must be inserted in the second token required by AgID, _Audit REST 02_. This second token will be sent to the producer in the header of the call to their API, with the key `Agid-JWT-Tracking-Evidence`.

From the token created for _Audit REST 02_, calculate the hash using the SHA256 algorithm. Then insert the resulting value into the `digest` field of the client assertion, as:

```
digest: {
  alg: “SHA256”,
  value: “IL_MIO_HASH”
}
```

## How can I know if my client assertion works?

You can use the debug tool available in the back office under _**Developers Tools**_**&#x20;>&#x20;**_**Debug client assertion**_.

## What does a voucher issued by PDND look like?

It depends on the type of voucher: Bearer Token ([basic](../../tutorials/consumer/voucher/how-to-request-a-bearer-voucher-for-a-producers-api-standard.md) o [with additional information](../../tutorials/consumer/voucher/how-to-request-a-bearer-voucher-for-a-producers-api-with-additional-information.md)) or DPoP ([basic](../../tutorials/consumer/voucher/how-to-request-a-dpop-voucher-for-a-producers-api-standard.md) o [with additional information](../../tutorials/consumer/voucher/how-to-request-a-dpop-voucher-for-a-producers-api-with-additional-information.md)). In each dedicated tutorial, the structure of the voucher is explained.

## Where can I find more information?

In this technical manual, in the [dedicated section](types-of-voucher-requests.md). Also, for a complete flow, in the [dedicated webinar](https://developer.pagopa.it/webinars/DevTalks-PDNDInterop-voucher).
