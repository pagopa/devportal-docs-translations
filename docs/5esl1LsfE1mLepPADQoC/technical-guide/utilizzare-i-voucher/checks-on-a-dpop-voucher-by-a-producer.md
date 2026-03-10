# Checks on a DPoP voucher by a producer

The producer of an e-service must be able to verify the legitimacy of any request received. Below are the checks that PDND recommends for DPoP vouchers. The producer may decide which checks to implement, or add others, depending on its application architecture.

In this case, the checks must be carried out on two different tokens, namely:

* the DPoP voucher issued by PDND to the subscriber, which the subscriber has included in the `Authorization` header of the request;
* the DPoP built by the subscriber and included in a separate `DPoP` header.

First, the producer extracts the voucher issued by PDND from the request header and deserializes it.

## Example of a DPoP voucher issued by PDND, deserialized

Header:

```
{
  "typ": "dpop+jwt",
  "alg": "RS256",
  "use": "sig",
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
  "descriptorId": "9525a54b-9157-4b46-8976-ec66f20b7d7e",
  "cnf": {
    "jkt" : "L5TP6x6ved3p_jmIAtCiHMcNJeRrGWAusNnQkTTrnLY"
  }
}
```

The `cnf.jkt` field contains the thumbprint of the public key in JWK format ([RFC 7638](https://datatracker.ietf.org/doc/html/rfc7638)) used in the DPoP sent by the subscriber (client) to PDND (authorization server).

It then makes several checks on this voucher

## Basic checks on the PDND voucher

### Header checks

The voucher must be of type `dpop+jwt`.

### Signature checks

The producer downloads the list of keys in use from a file exposed in the `.well-known` folder of **PDND**. The correct URL is available in the back office within each e-service’s tab and varies depending on the environment (Testing, Verification, Production).

For example, [https://interop.pagopa.it/.well-known/jwks.json](https://interop.pagopa.it/.well-known/jwks.json) is the URL for the Production environment well known.

<figure><img src="../../.gitbook/assets/screen well-known" alt="" width="563"><figcaption><p>Example of where to find the .well-known in the back office. Inside the file of your e-service<br>as a producer, click on "See the e-service technical details"</p></figcaption></figure>

Inside the file, the producer looks for the object with the same `kid` as in the voucher header. In that object, the public key is found in the `n` parameter. A signature verification is then performed to ensure that the private key used to sign the voucher corresponds to this public key.

### Payload checks

Fields relevant for verification are:

* `iss`: the voucher issuer, representing the domain corresponding to the PDND authorization server that issued the voucher (e.g., the production issuer is `interop.pagopa.it`);
* `exp`: the voucher expiration time;
* `aud`: the audience, i.e., the producer’s service that the subscriber intends to consume with the voucher.

## Focus on the DPoP token

Once the voucher checks are complete, attention shifts to the second token, the one in the `DPoP` header.

## Example of DPoP built by the subscriber, deserialized

Header:

```
{
  "typ": "dpop+jwt",
  "alg": "ES256",
  "jwk": "{CALLER_PUBLIC_KEY}"
}
```

Payload:

```
{
  "htm": "POST",
  "htu": "https://risorsa-dell-erogatore",
  "iat": 1747406361,
  "jti": "b60203a7-6f31-4d08-a3d1-f69ba308eee0",
  "ath": "PwqX1KUo2L2S5vSc9HYfgctjaAhBDrahit_fzESH5n8"
}
```

### Header and signature checks

The key in the `jwk` header must match the one used to sign the DPoP itself.

### Payload checks

Verification points include:

* `htm` matches the actual HTTP method invoked and `htu` matches the actual producer endpoint called;
* the DPoP must have been issued no later than `iat + 60` seconds, with a tolerance of ±10 seconds;
* the unique ID `jti` is not present in the e-service cache.

## Cross-checks between the two tokens

Two cross-checks must be performed between the PDND voucher and the DPoP.

### `ath` check

Verify that the `ath` in the DPoP matches the hash calculated from the voucher issued by PDND.

The hash is obtained using SHA-256 and encoded in Base64URL:

```
BASE64URL(SHA-256(access_token_bytes))
```

### Thumbprint check

Verify that the thumbprint of the public key in the DPoP (`jwk` field) matches the `cnf.jkt` value in the PDND voucher.

This ensures that the first and second DPoPs are signed with the same key. The subscriber sent the first DPoP to PDND in the authorization request; PDND then included it in the issued voucher. The subscriber sent the second DPoP directly to the producer.
