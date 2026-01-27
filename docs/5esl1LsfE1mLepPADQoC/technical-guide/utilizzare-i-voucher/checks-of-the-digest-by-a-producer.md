# Checks of the digest by a producer

When a request is received from a subscriber, it is always necessary to perform verifications on the voucher. These verifications depend on the type of voucher: [Bearer](checks-on-a-bearer-voucher-by-a-producer.md) or [DPoP](checks-on-a-dpop-voucher-by-a-producer.md).

In both cases, if the subscriber has been asked to include additional audit information according to the AgID _Audit REST 02_ pattern, an extra verification will be needed, specifically on the digest.

In both Bearer and DPoP vouchers, an additional field named `digest` will be present.\
In addition, there will be a second token in the request header — a JWS produced according to the [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) standard — which will be in the header `AgID-JWT-TrackingEvidence`.

## Contents of the JWS

An example JWS may have the following header:

```
{
  "alg": "RS256",
  "kid": "ZmYxZGE2YjQtMzY2Yy00NWI5LThjNGItMDJmYmQyZGIyMmZh",
  "typ": "JWT"
}
```

The fields in the payload will instead contain the audit information that the subscriber sends to the producer, as described in the e-service documentation. They may vary and depend on the producer’s requirements for the specific e-service.

## Checks to perform

The verification must ensure that the hash calculated from the JWS matches the hash in the `digest` field of the voucher issued by PDND.

The producer will therefore:

1. Extract the JWS from the `AgID-JWT-TrackingEvidence` header and verify the JWS signature.
2. Verify that the hash of the JWS matches the hash in the `digest` field of the voucher issued by PDND.

### Signature checks

To verify the authenticity and validity of the private key used to sign the JWS, the producer will:

1. Authenticate on the PDND APIs as described in the [dedicated flow](../../tutorials/consumer/voucher/how-to-request-a-bearer-voucher-for-pdnd-apis.md).
2. Make a `GET /keys/{kid}` call, where `kid` is the value from the JWS header.
3. Obtain from PDND a public key in the `n` field of the response.
4. Verify that the JWS signature, created by the subscriber using the private key, matches the public key just obtained.

Note: If the producer receives a `404 - Not found` status code from the PDND API, it means the key is not present on PDND and the request should be considered unreliable.

### Hash calculation and comparison

If the key is present and matches, the producer can proceed with a second verification — the notarial verification. In practice, this verifies that the trace deposited by the subscriber on PDND, together with the request to the authorization server, matches the one in the voucher issued by PDND.

If there is a match, it means that the complementary information in the JWS is exactly what the subscriber declared to PDND.

To perform this, the producer takes the JWS and performs the same operation as the subscriber in the second step, obtaining the non-reversible hash of the JWS.

Then, it compares this hash with the one in the `digest.value` field of the voucher issued by PDND, found in the `Authorization` header. If the two hashes are identical, the subscriber has made a declaration that matches and is tracked on PDND.
