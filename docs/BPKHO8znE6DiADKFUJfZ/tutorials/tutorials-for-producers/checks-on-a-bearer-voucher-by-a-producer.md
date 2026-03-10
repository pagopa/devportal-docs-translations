# Checks on a Bearer voucher by a producer

The producer of an e-service must be able to verify the **legitimacy of any incoming request**.\
Below are the verifications recommended by the **National Digital Data Platform (PDND)** for **Bearer vouchers**. Each producer may decide which checks to implement—or add others—according to their own application architecture.

First, the producer extracts the **voucher** issued by PDND from the **header of the consumer’s request** and deserializes it.

### Example of a Bearer voucher issued by PDND (deserialized)

**Header:**

```
{
  "typ": "at+jwt",
  "alg": "RS256",
  "kid": "{KID_PDND_KEY}"
}
```

**Payload:**

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
  "producerId": "0e9e2dab-2e93-4f24-ba59-38d9f11198ca",
  "consumerId": "69e2865e-65ab-4e48-a638-2037a9ee2ee7",
  "eserviceId": "b8c6d7ad-93fc-4eaf-9018-3cd8bf98163f",
  "descriptorId": "9525a54b-9157-4b46-8976-ec66f20b7d7e"
}

```

### Meaning of the fields

#### Header fields

<table><thead><tr><th width="126.71563720703125">Field</th><th>Meaning</th></tr></thead><tbody><tr><td><code>kid</code></td><td>ID of the key used to sign the voucher, retrievable from PDND’s <em>well-known</em> endpoint (see <a href="https://chatgpt.com/c/68ee1500-942c-8331-97a2-9e2e3b898249#signature-verification">Signature verification</a>).</td></tr><tr><td><code>alg</code></td><td>Algorithm used to sign the JWT (<code>RS256</code>).</td></tr><tr><td><code>typ</code></td><td>Type of object being sent (<code>at+jwt</code>).</td></tr></tbody></table>

#### Payload fields

<table><thead><tr><th width="127.00936889648438">Field</th><th>Meaning</th></tr></thead><tbody><tr><td><code>iss</code></td><td>Issuer — corresponds to the domain of PDND’s authorization server that issued the voucher (e.g., <code>interop.pagopa.it</code> in the production environment).</td></tr><tr><td><code>nbf</code></td><td><em>Not before</em> — timestamp from which the voucher is valid, expressed in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a>. For PDND vouchers, this matches <code>iat</code>, meaning the voucher is immediately usable.</td></tr><tr><td><code>iat</code></td><td><em>Issued at</em> — timestamp when the voucher was issued, in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a>.</td></tr><tr><td><code>exp</code></td><td><em>Expiration</em> — timestamp indicating the voucher’s expiration time, in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a>. The duration (difference between <code>nbf</code> and <code>exp</code>) depends on the value configured by the producer in the e-service settings.</td></tr><tr><td><code>jti</code></td><td>JWT ID — a unique identifier assigned by PDND.</td></tr><tr><td><code>aud</code></td><td>Audience — indicates which producer’s service the consumer intends to access with the voucher. The value corresponds to what the producer entered in the e-service configuration.</td></tr><tr><td><code>sub</code></td><td>Subject — the ID of the client that requested the voucher from PDND.</td></tr><tr><td><code>client_id</code></td><td>Unique identifier of the consumer’s client that requested the voucher from PDND (same as <code>sub</code>).</td></tr><tr><td><code>purposeId</code></td><td>Unique identifier of the purpose for which the voucher was issued.</td></tr><tr><td><code>producerId</code></td><td>Unique identifier of the e-service producer.</td></tr><tr><td><code>consumerId</code></td><td>Unique identifier of the consumer.</td></tr><tr><td><code>eserviceId</code></td><td>Unique identifier of the e-service.</td></tr><tr><td><code>descriptorId</code></td><td>Unique identifier of the e-service version.</td></tr></tbody></table>

**Note:** The `client_id` field in the token uses **snake case** instead of camel case, in compliance with the relevant RFC.

### Basic verifications

#### Header checks

The voucher must be of type `at+jwt`.

#### Signature verification

The producer downloads the list of keys used by PDND from a file exposed under its **`.well-known`** directory. The correct URL is displayed in the **front office** within each e-service’s technical details section and **varies by environment** (testing, validation, production).

For example: [https://interop.pagopa.it/.well-known/jwks.json](https://interop.pagopa.it/.well-known/jwks.json) — production environment.

Inside the file, the producer locates the object whose `kid` matches the voucher’s header value.\
That object contains the public key in the `n` parameter. The producer then verifies that the **private key used to sign the voucher** corresponds to the **retrieved public key**.

#### Payload checks

The following fields are key for verification:

* `iss`: must match the domain of PDND’s authorization server that issued the voucher (e.g., `interop.pagopa.it` in production).
* `exp`: voucher expiration time.
* `aud`: identifies the producer’s service that the consumer intends to use.

### Best practices for resource verification

Recommended best practices suggest that producers perform **one of the following checks**:

* Verify both the `aud` (audience) and `producerId`. This ensures that the requested resource is the correct one and that it actually belongs to the producer’s organization.
* Verify the match between `eserviceId` and `descriptorId` (e-service ID and e-service version ID). This provides more granular validation.

For more details, see the [dedicated webinar](https://developer.pagopa.it/webinars/DevTalks-PDNDInterop-voucher).

***

Next page [→ Checks on a DPoP voucher by a producer](checks-on-a-dpop-voucher-by-a-producer.md)
