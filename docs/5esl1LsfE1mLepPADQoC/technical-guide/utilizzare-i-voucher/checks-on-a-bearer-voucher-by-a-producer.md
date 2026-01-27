# Checks on a Bearer voucher by a producer

The producer of an e-service must be able to verify the legitimacy of any request received. Below are the verifications that PDND suggests for Bearer vouchers. It is always at the producer’s discretion to decide which verifications to implement, or to add additional ones, depending on their own application architecture.

First, the producer extracts the voucher issued by PDND from the request header sent by the subscriber and deserializes it.

## Example of a Bearer voucher issued by PDND, deserialized

Header:

```
{
  "typ": "at+jwt",
  "alg": "RS256",
  "kid": "{KID_PDND_KEY}"
}
```

Payload:

```
{
  "iss": "interop.pagopa.it", 
  "nbf": 1747408537,
  "iat": 1747408537,
  "exp": 1747409537,
  "jti": "12297ac1-c192-4573-8350-207a4213e5ac",
  "aud": "https://eservice.pa.it/api/v1",
  "sub": "9b361d49-33f4-4f1e-a88b-4e12661f2309",
  "client_id": "9b361d49-33f4-4f1e-a88b-4e12661f2309",
  "purposeId": "1b361d49-33f4-4f1e-a88b-4e12661f2300",
  "producerId" : "0e9e2dab-2e93-4f24-ba59-38d9f11198ca",
  "consumerId" : "69e2865e-65ab-4e48-a638-2037a9ee2ee7",
  "eserviceId" : "b8c6d7ad-93fc-4eaf-9018-3cd8bf98163f",
  "descriptorId": "9525a54b-9157-4b46-8976-ec66f20b7d7e"
}
```

### Meaning of the fields

Header contains three field&#x73;_:_

<table><thead><tr><th width="123.4765625">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>kid</code></td><td>The ID of the key used to sign the voucher, available in the PDND <code>.well-known</code> (see <a href="checks-on-a-bearer-voucher-by-a-producer.md#verifica-sulla-firma">Signature checks</a> below)</td></tr><tr><td><code>alg</code></td><td>The algorithm used to sign the JWT ( <code>RS256</code>)</td></tr><tr><td><code>typ</code></td><td>The type of object being sent (<code>at+jwt</code>)</td></tr></tbody></table>

Payload contains thirteen mandatory fields:

<table><thead><tr><th width="152.84765625">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>iss</code></td><td>The issuer — represents the domain corresponding to the PDND authorization server that issued the voucher (for example, the issuer for production is <code>interop.pagopa.it</code>)</td></tr><tr><td><code>nbf</code></td><td><em>Not before</em> — the timestamp from which the voucher is valid, expressed in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (numeric value, not string). For PDND vouchers, <code>nbf</code> matches <code>iat</code>, meaning the voucher is usable immediately</td></tr><tr><td><code>iat</code></td><td><em>Issued at</em> — the timestamp when the voucher was issued, in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (numeric).</td></tr><tr><td><code>exp</code></td><td><em>Expiration</em> — the timestamp of the voucher's expiry date/time, in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (numeric). The voucher duration (difference between <code>nbf</code> and <code>exp</code>) depends on the value set by the producer in the e-service configuration</td></tr><tr><td><code>jti</code></td><td>The JWT ID — a unique random ID assigned by PDND</td></tr><tr><td><code>aud</code></td><td>The audience — indicates which producer service the subscriber intends to consume with the voucher. The value is set in the e-service configuration by the producer</td></tr><tr><td><code>sub</code></td><td>The subject — in this case, the ID of the client that requested the voucher from PDND</td></tr><tr><td><code>client_id</code></td><td>The unique identifier of the subscriber’s client that requested the voucher from PDND (same as <code>sub</code>)</td></tr><tr><td><code>purposeId</code></td><td>The unique identifier of the purpose for which the voucher is issued</td></tr><tr><td><code>producerId</code></td><td>The unique identifier of the producer of the e-service</td></tr><tr><td><code>consumerId</code></td><td>The unique identifier of the subscriber</td></tr><tr><td><code>eserviceId</code></td><td>The unique identifier of the e-service</td></tr><tr><td><code>descriptorId</code></td><td>The unique identifier of the e-service version</td></tr></tbody></table>

NB: `client_id` is present in the token and uses snake case instead of camel case, in compliance with the relevant RFC.

## Basic checks

### Header checks

The voucher must be of type `at+jwt`.

### Signature checks

The producer downloads the list of keys in use from a file exposed in the PDND `.well-known` directory. The correct URL is available in the back office interface within the tab of each e-service and varies depending on the environment (Testing, Verification, Production).

For example, [https://interop.pagopa.it/.well-known/jwks.json](https://interop.pagopa.it/.well-known/jwks.json) is the URL for the Production environment well known.

<figure><img src="../../.gitbook/assets/screen well-known" alt="" width="563"><figcaption><p>Example of where to find the .well-known in the back office. Inside the file of your e-service<br>as a producer, click on "See the e-service technical details"</p></figcaption></figure>

In this file, the producer finds the object whose `kid` matches the one in the voucher header. In that same object, the public key is in parameter `n`. The producer then verifies that the private key used to sign the voucher matches the public key retrieved.

### Payload checks

The relevant fields for verification are:

* `iss`: must match the PDND authorization server domain that issued the voucher (e.g., `interop.pagopa.it` in production).
* `exp`: voucher expiry date.
* `aud`: indicates the producer service the subscriber intends to consume with the voucher.

## Best practice for checking the requested resource

Emerging best practices suggest that the producer may perform one of the following checks:

1. Verify both the audience (`aud`) and the `producerId`. This ensures that the requested resource is correct and truly belongs to the producer’s organization.
2. Verify the match between `eserviceId` and `descriptorId` (e-service and its version) against the producer’s resource. This provides a more granular verification.

For further information, see the [dedicated webinar](https://developer.pagopa.it/webinars/DevTalks-PDNDInterop-voucher).
