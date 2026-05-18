# How to request a DPoP voucher for a producer's API (with additional information)

This tutorial explains how to request a voucher that uses Demonstrating Proof-of-Possession (DPoP) — the IETF standard ([RFC 9449](https://datatracker.ietf.org/doc/html/rfc9449)) that makes a voucher (JWT token) unusable if stolen, because it is bound to a public key owned by the caller. For more details, see the [focus section](../../technical-references/utilizzare-i-voucher/focus-on-dpop.md).

The JWS containing the additional information complies with [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) and the identified pattern, that is, the one provided by AgID's ModI (_Audit REST 02_). For more information, see the [dedicated section](../../technical-references/utilizzare-i-voucher/types-of-voucher-requests.md#bearer-token-spendibile-presso-le-api-di-un-erogatore-con-informazioni-aggiuntive-pattern-modi-audit).

### Summary of the flow <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

Essentially, the end-to-end process requires nine steps:

1. The consumer generates a token from the additional information.
2. The consumer calculates a hash from the token.
3. The consumer generates the client assertion by inserting into it the hash referring to the token; signs it with the private key whose public counterpart is stored on its client in PDND.
4. The consumer builds the DPoP intended for the PDND authorization server; signs it with a second private key whose public counterpart will be included in the DPoP header, in the `jwk` field.
5. The consumer requests the voucher from the PDND authorization server, adding the DPoP header.
6. The PDND authorization server performs the necessary checks. If successful, it returns a DPoP-type voucher.
7. The consumer builds a second DPoP, this time intended for the resource server, i.e., the producer’s e-service API; signs it with the same private key as the DPoP in step 3, also including again the corresponding public key in the DPoP header, in the `jwk` field.
8. The consumer makes a request to the producer’s e-service; inserts the voucher issued by PDND in the `Authorization` header, the DPoP generated in the previous step in the `DPoP` header, and the JWS with the additional information generated in step 1 in the `AgID-JWT-TrackingEvidence` header.
9. The producer performs the necessary checks. If successful, it processes the consumer’s request.

### Prerequisites <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

It is assumed that the consumer has:

* created a client of type e-service ([read tutorial](how-to-create-a-client.md));
* generated at least one set of cryptographic material and uploaded the corresponding public key to PDND within the client ([read tutorial](how-to-generate-the-cryptographic-material-and-upload-a-public-key.md));
* associated the client with the purpose for which they want to obtain or send data to the producer ([read tutorial](how-to-associate-a-client-with-a-purpose.md)).

### Step 1: Generating the token containing the additional information <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

The consumer builds a JWS, inserting in the header the `kid` of a public key uploaded to PDND. With the corresponding private key, they will sign this JWS. In the body (payload) of the JWS, they insert the complementary information to send to the producer.

Example JWS header:

```
{
  "alg": "RS256",
  "kid": "ZmYxZGE2YjQtMzY2Yy00NWI5LThjNGItMDJmYmQyZGIyMmZh",
  "typ": "JWT"
}
```

Note: the private key used to sign and the `kid` of the corresponding public key uploaded to PDND do not necessarily have to be the same used to sign the client assertion in step 3.

### Step 2: Calculate the JSW hash <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

From the encoded JWS (i.e., the JWS encoded according to the algorithm in the header, usually starting with `ey`), the consumer applies the SHA256 hashing algorithm to obtain a fixed-length non-reversible hash.

Example command (after installing the `openssl` package):

```
echo -n {JWS} | openssl sha256
```

The output is the JWS hash. For example, given the sample JWS

```
eyJhbGciOiJIUzI1NiIsImtpZCI6IlptWXhaR0UyWWpRdE16WTJZeTAwTldJNUxUaGpOR0l0TURKbVltUXlaR0l5TW1aaCIsInR5cCI6ImF0K2p3dCJ9.eyJqdGkiOiJkc2Zkc2Zkc2ZkcyIsImEiOiJiIn0.2QcY5UpoE2PgJhe1FKnHx-SZZq_NS6AKDTlfFdpVP9Q
```

the output is the fixed-length hash

```
5db26201b684761d2b970329ab8596773164ba1b43b1559980e20045941b8065
```

Note: the `-n` flag in the command removes any unseen “newlines.” A newline in the token would change the hash value, causing a mismatch during the producer’s verification.

### Step 3: Generating the client assertion <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

The next step is to build a valid _client assertion_. The client assertion is composed of a header and a payload containing the following fields.

Header:

<table><thead><tr><th width="128.4140625">Field name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>kid</code></td><td>the ID of the key used to sign the assertion, available on PDND</td></tr><tr><td><code>alg</code></td><td>the algorithm used to sign the JWT (for now, always <code>RS256</code>)</td></tr><tr><td><code>typ</code></td><td>the type of object being sent (always <code>JWT</code>)</td></tr></tbody></table>

Payload:

<table><thead><tr><th width="127.37109375">Field name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>iss</code></td><td>the issuer, in this case the <code>clientId</code></td></tr><tr><td><code>sub</code></td><td>the subject, in this case always the <code>clientId</code></td></tr><tr><td><code>aud</code></td><td>the audience, available on PDND</td></tr><tr><td><code>jti</code></td><td>the JWT ID, a unique random ID assigned by whoever is creating the token, used to track the token itself. It is the caller’s responsibility to ensure that the ID of this token is unique for the client assertion</td></tr><tr><td><code>iat</code></td><td>issued at, the timestamp indicating when the token was created, expressed in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (numeric value, not a string)</td></tr><tr><td><code>exp</code></td><td>expiration, the timestamp indicating when the token expires, expressed in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (numeric value, not a string)</td></tr><tr><td><code>purposeId</code></td><td>The ID of the specific purpose for which you want to obtain a voucher, available in the front office</td></tr><tr><td><code>digest</code></td><td>Contains two values: <code>alg</code> (hashing algorithm, always SHA256) and <code>value</code> (hash from step 2)</td></tr></tbody></table>

As an example, here is a deserialized client assertion to highlight its contents.

Header:

```
{
  "alg": "RS256",
  "kid": "2MJFa7aSSveFte8ULX9U-MaaygcoL5fBIJDTXBdba64",
  "typ": "jwt"
}
```

Payload:

```
{
  "iss": "8e9f24ca-78f5-4c69-9e4f-0efbeac7bb2b", 
  "sub": "8e9f24ca-78f5-4c69-9e4f-0efbeac7bb2b",
  "aud": "auth.interop.pagopa.it/client-assertion",
  "jti": "23387ac1-c192-4573-8350-207a4213d4be",
  "iat": 1616170068,
  "exp": 1616170668,
  "purposeId": "34f1624b-91cb-4b05-b8c0-cad208a30222",
  "digest": {
    "alg": "SHA256",
    "value": "5db26201b684761d2b970329ab8596773164ba1b43b1559980e20045941b8065"
  }
}
```

After building a valid _client assertion_, it must be signed with your private key (the counterpart of the public key uploaded to the client in PDND).

For demonstration purposes, a Python script has been published showing how to perform the operation. All instructions are available in the front office, within your client.

A function is also available to check the validity of your client assertion and highlight any errors. The tool is available in the front office under _**Developers Tools > Debug client assertion**_.

### Step 4: Generating the first DPoP <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

The consumer then builds the DPoP intended for the PDND authorization server, which is a JWT with

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
  "htu": "https://auth.interop.pagopa.it/token.oauth2",
  "iat": 1747406361,
  "jti": "b60203a7-6f31-4d08-a3d1-f69ba308eee0"
}
```

where

<table><thead><tr><th width="112.5546875">Field name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>typ</code></td><td>must be set to <code>dpop+jwt</code></td></tr><tr><td><code>alg</code></td><td>Indicates the algorithm used to sign the DPoP. The recommended algorithm is <code>ES256</code></td></tr><tr><td><code>jwk</code></td><td>The public key in JWK format corresponding to the private key used to sign the DPoP</td></tr><tr><td><code>htm</code></td><td>Indicates the HTTP method being invoked. For obtaining a voucher from PDND, the method is <code>POST</code></td></tr><tr><td><code>htu</code></td><td>Indicates the URL being invoked. For obtaining a voucher from PDND in the Production environment it is <code>https://auth.interop.pagopa.it/token.oauth2</code> (for Testing and Validation environments use the specific one provided in the front office)</td></tr><tr><td><code>iat</code></td><td><em>Issued at</em> — the timestamp (<a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a>, numeric) indicating the date and time when the DPoP is created</td></tr><tr><td><code>jti</code></td><td>Unique identifier of the DPoP. It is the consumer’s responsibility to ensure that the ID of this token is unique and not reused</td></tr></tbody></table>

### Step 5: Requesting the voucher from the authorization server

The third step is to call the PDND authorization server with the signed client assertion to obtain in return a voucher that can be used with the PDND APIs.

In the request header, you must insert a `DPoP` header containing the DPoP generated in the previous step:

<pre><code><strong>DPoP: &#x3C;DPoP_proof>
</strong></code></pre>

The endpoint URL for the authorization server depends on the environment and will be clearly visible in the front office interface.

The endpoint must be called with the following body parameters:

<table><thead><tr><th width="255.26251220703125">Field name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>client_id</code></td><td>again, the <code>clientId</code> used in the assertion</td></tr><tr><td><code>client_assertion</code></td><td>the signed client assertion from the first step</td></tr><tr><td><code>client_assertion_type</code></td><td>the client assertion format, as indicated in RFC (always <code>urn:ietf:params:oauth:client-assertion-type:jwt-bearer</code>)</td></tr><tr><td><code>grant_type</code></td><td>the type of flow used, as indicated in RFC (always <code>client_credentials</code>)</td></tr></tbody></table>

### Step 6: The authorization server verifies and issues the voucher

The PDND authorization server performs the necessary checks, specifically:

* verifies the `client-assertion` according to the usual controls;
* verifies the DPoP signature using the public key in the `jwk` field of the header;
* checks that the `htm` and `htu` fields match the expected values for the current request;
* considers a proof valid only if presented within 60 seconds from its creation time (`iat`);
* verifies that the `jti` value has not already been used for another call to the PDND authorization server.

If valid, the PDND authorization server returns a DPoP-type voucher (`token_type`), signed as a JWT with a header `"typ": "at+jwt"` and containing a `cnf.jkt` claim.

Example of server response:

```
{
  "access_token": "eyJ0eXAiOiJhdCtqd3QiLC...",
  "expires_in": 600,
  "token_type": "DPoP"
}
```

If we decode the `access_token` field, we get

Header:

```
{
  "typ": "dpop+jwt",
  "alg": "RS256",
  "use": "sig",
  "kid": "{PDND_KEY_KID}"
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
  },
  "digest": {
    "alg": "SHA256",
    "value": "5db26201b684761d2b970329ab8596773164ba1b43b1559980e20045941b8065"
  }
}
```

The `cnf.jkt` field contains the thumbprint of the public key in JWK format ([RFC 7638](https://datatracker.ietf.org/doc/html/rfc7638)) used in the DPoP sent by the consumer (client) to the PDND authorization server.

### Step 7: The consumer builds a second DPoP

The consumer builds a second DPoP, this time intended for the producer’s e-service APIs. This second DPoP is similar to the one produced in step 2, with two differences:

* the `htm` and `htu` fields must refer to the resource being called on the producer’s server (as specified in the API interface file) instead of the PDND authorization server;
* another field, `ath`, must be added.

The `ath` field contains the hash of the voucher issued by PDND. This hash is obtained using SHA256 and must be Base64URL-encoded, as follows:

```
BASE64URL(SHA-256(access_token_bytes))
```

{% hint style="warning" %}
This second DPoP must be signed with the same private key used for the first DPoP in step 2, intended for the PDND authorization server.
{% endhint %}

### Step 8: Requesting data from the producer

The voucher must be inserted in the header of all subsequent calls to the producer’s APIs:

```
Authorization: DPoP <voucher_issued_by_PDND>
```

The consumer must also insert another two headers. `DPoP` , which contains the DPoP generated at the previous step:

<pre><code><strong>DPoP: &#x3C;DPoP_proof_generated_at_previous_step>
</strong></code></pre>

Additionally, the JWS from step 1 is included in a custom header defined by AgID:

<pre><code><strong>Agid-JWT-TrackingEvidence: &#x3C;jws>
</strong></code></pre>

### Step 9: Waiting for the producer’s checks

The producer carries out all necessary checks. If everything is in order, it processes the consumer’s request, returning the requested data in the case of a data-providing e-service, or accepting the data from the consumer in the case of a data-receiving e-service.

To consult the recommended checks for producers, see the [dedicated section](../tutorials-for-producers/checks-on-a-dpop-voucher-by-a-producer.md). In addition, it is possible to consult the verifications to be carried out regarding the digest, specific to this flow, in the [dedicated section](../tutorials-for-producers/checks-of-the-digest-by-a-producer.md).

***

Next page [→ How to verify a response signed by a producer](how-to-verify-a-response-signed-by-a-producer.md)
