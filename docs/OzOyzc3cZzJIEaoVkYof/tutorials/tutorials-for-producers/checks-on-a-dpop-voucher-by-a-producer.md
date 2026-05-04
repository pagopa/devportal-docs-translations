---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/tutorials/tutorials-for-producers/checks-on-a-dpop-voucher-by-a-producer
---

# Checks on a DPoP voucher by a producer

The producer of an e-service must be able to verify the **legitimacy of any incoming request**.\
Below are the verifications recommended by the **National Digital Data Platform (PDND)** for **DPoP vouchers**. Each producer may decide which checks to implement—or add others—according to their own application architecture.

In this case, verifications must be performed on **two separate tokens**:

* the **DPoP voucher** issued by PDND to the consumer and included in the `Authorization` header;
* the **DPoP token** built by the consumer and included in a separate `DPoP` header.

First, the producer extracts from the consumer’s request header the **voucher issued by PDND** and deserializes it.

### Example of a DPoP voucher issued by PDND (deserialized)

**Header:**

```
{
  "typ": "dpop+jwt",
  "alg": "RS256",
  "use": "sig",
  "kid": "{PDND_KEY_KID}"
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
  "descriptorId": "9525a54b-9157-4b46-8976-ec66f20b7d7e",
  "cnf": {
    "jkt": "L5TP6x6ved3p_jmIAtCiHMcNJeRrGWAusNnQkTTrnLY"
  }
}
```

The `cnf.jkt` field contains the **thumbprint** of the **public key (JWK format)** used in the DPoP sent by the consumer (client) to PDND (authorization server), as defined in [**RFC 7638**](https://datatracker.ietf.org/doc/html/rfc7638).

### Basic verifications on the PDND voucher

#### Header checks

The voucher must be of type `dpop+jwt`.

#### Signature verification

The producer downloads the list of keys used by PDND from a file exposed under its **`.well-known`** directory. The correct URL is displayed in the **front office** within each e-service’s technical details and varies depending on the environment (testing, validation, production).

Example: [https://interop.pagopa.it/.well-known/jwks.json](https://interop.pagopa.it/.well-known/jwks.json) — production environment.

Inside the file, the producer locates the object whose `kid` matches the voucher’s header value.\
That object contains the public key in the `n` parameter. The producer then verifies that the **private key used to sign the voucher** corresponds to the **retrieved public key**.

#### Payload checks

Key fields to be verified:

* `iss`: the issuer of the voucher — must match the domain of PDND’s authorization server that issued it (e.g., `interop.pagopa.it` in production);
* `exp`: the voucher expiration timestamp;
* `aud`: the audience, i.e., the producer’s service the consumer intends to access.

### Focus on the DPoP token

After completing the verifications on the voucher issued by PDND, the producer must verify the **DPoP token** contained in the `DPoP` header.

### Example of a DPoP token built by the consumer (deserialized)

**Header:**

```
{
  "typ": "dpop+jwt",
  "alg": "ES256",
  "jwk": "{CALLER_PUBLIC_KEY}"
}
```

**Payload:**

```
{
  "htm": "POST",
  "htu": "https://producer-resource-endpoint",
  "iat": 1747406361,
  "jti": "b60203a7-6f31-4d08-a3d1-f69ba308eee0",
  "ath": "PwqX1KUo2L2S5vSc9HYfgctjaAhBDrahit_fzESH5n8"
}
```

#### Header and signature checks

The key contained in the `jwk` header must correspond to the one used to sign the DPoP token itself.

#### Payload checks

The following must be verified:

* `htm`: matches the actual HTTP method used in the call;
* `htu`: matches the exact endpoint of the producer being called;
* the DPoP token must be issued no later than `iat + 60 seconds`, with a tolerance of ±10 seconds;
* the `jti` (unique ID) must not be already present in the e-service cache (to prevent replay attacks).

### Cross-verifications

Finally, two **cross-verifications** must be performed between the PDND voucher and the DPoP token:

#### Verification of `ath`

The `ath` field in the DPoP token must match the hash computed from the voucher issued by PDND. The hash is obtained using **SHA-256**, encoded in **Base64URL**, with the following formula:

```
BASE64URL(SHA-256(access_token_bytes))
```

#### Verification of the thumbprint

The thumbprint of the **public key** contained in the DPoP token (`jwk`) must be identical to the value of `cnf.jkt` in the voucher issued by PDND. This guarantees that both DPoP tokens were signed using the **same key pair**:

* the **first DPoP** was sent by the consumer to PDND in the authorization request;
* the **second DPoP** was sent directly by the consumer to the producer.

If all these verifications pass successfully, the request can be **authorized**.

***

Next page [→ Checks of the digest by a producer](checks-of-the-digest-by-a-producer.md)
