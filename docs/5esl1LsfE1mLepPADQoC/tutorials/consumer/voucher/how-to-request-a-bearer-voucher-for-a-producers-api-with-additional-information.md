# How to request a Bearer voucher for a producer's API (with additional information)

The JWS containing the additional information complies with [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) and the identified pattern, that is, the one provided by AgID's ModI (_Audit REST 02_). For more information, see the [dedicated section](../../../technical-guide/utilizzare-i-voucher/types-of-voucher-requests.md#bearer-token-spendibile-presso-le-api-di-un-erogatore-con-informazioni-aggiuntive-pattern-modi-audit).

## Summary of the flow <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

Essentially, the end-to-end process requires seven steps:

1. the consumer generates a token based on the additional information;
2. the consumer calculates a hash from the token;
3. the consumer generates the client assertion by inserting into it the hash that refers to the token;
4. the consumer requests the voucher from the PDND authorization server;
5. the PDND authorization server performs the necessary checks. If successful, it returns a voucher;
6. the consumer makes a request to the producer’s e-service; they insert both the voucher issued by PDND in the `Authorization` header, and the JWS with the additional information generated in step 1 in the `AgID-JWT-TrackingEvidence` header;
7. the producer performs the necessary checks. If successful, it processes the consumer’s request.

## Prerequisites <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

It is assumed that the consumer has:

* created a client of type e-service ([read tutorial](../back-office/how-to-create-a-client.md));
* generated at least one set of cryptographic material and uploaded the corresponding public key to PDND within the client ([read tutorial](../back-office/how-to-generate-the-cryptographic-material-and-upload-a-public-key.md));
* associated the client with the purpose for which they want to obtain or send data to the producer ([read tutorial](../back-office/how-to-associate-a-client-with-a-purpose.md)).

## Step 1 - Generating the token containing the additional information <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

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

## Step 2 - Calculate the JWS hash <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

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

## Step 3 - Generating the client assertion <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

The next step is to build a valid _client assertion_. The client assertion is composed of a header and a payload containing the following fields.

Header:

<table><thead><tr><th width="128.4140625">Field name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>kid</code></td><td>the ID of the key used to sign the assertion, available on PDND</td></tr><tr><td><code>alg</code></td><td>the algorithm used to sign the JWT (for now, always <code>RS256</code>)</td></tr><tr><td><code>typ</code></td><td>the type of object being sent (always <code>JWT</code>)</td></tr></tbody></table>

Payload:

<table><thead><tr><th width="127.37109375">Field name</th><th>Meaning</th></tr></thead><tbody><tr><td>iss</td><td>the issuer, in this case the <em>clientId</em></td></tr><tr><td>sub</td><td>the subject, in this case always the <em>clientId</em></td></tr><tr><td>aud</td><td>the audience, available on PDND</td></tr><tr><td>jti</td><td>the JWT ID, a unique random ID assigned by whoever is creating the token, used to track the token itself. It is the caller’s responsibility to ensure that the ID of this token is unique for the client assertion</td></tr><tr><td>iat</td><td>issued at, the timestamp indicating when the token was created, expressed in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (numeric value, not a string)</td></tr><tr><td>exp</td><td>expiration, the timestamp indicating when the token expires, expressed in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (numeric value, not a string)</td></tr><tr><td>purposeId</td><td>The ID of the specific purpose for which you want to obtain a voucher, available in the back office</td></tr><tr><td>digest</td><td>Contains two values: <code>alg</code> (hashing algorithm, always SHA256) and <code>value</code> (hash from step 2)</td></tr></tbody></table>

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

For demonstration purposes, a Python script has been published showing how to perform the operation. All instructions are available in the back office, within your client.

A function is also available to check the validity of your client assertion and highlight any errors. The tool is available in the back office under _**Developers Tools > Debug client assertion**_.

## Step 4 - Requesting the voucher from the authorization server

The next step is to call PDND’s authorization server with the signed client assertion to obtain a voucher that can be used with the producer’s APIs.

The endpoint URL for the authorization server depends on the environment and will be clearly visible in the interface within the back office.

The endpoint must be called with the following parameters in the body:

| Field name              | Meaning                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `client_id`             | again, the _clientId_ used in the assertion                                                                        |
| `client_assertion`      | the signed client assertion from the first step                                                                    |
| `client_assertion_type` | the client assertion format, as indicated in RFC (always `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`) |
| `grant_type`            | the type of flow used, as indicated in RFC (always `client_credentials`)                                           |

## Step 5 - The authorization server verifies and issues the voucher

If everything is set up correctly, PDND will respond with a valid voucher in the `access_token` property of the response body.

Also in the response, you will find the voucher’s validity duration in seconds (e.g., `"expires_in": 600` means a voucher valid for 10 minutes, 10 × 60 seconds = 600). The voucher’s duration is chosen by the producer based on their security considerations.

The response returned by the PDND authorization server is as follows:

```
{
  "access_token": "eyJ0eXAiOiJhdCtqd3QiLC...",
  "expires_in": 600
}
```

If we decode the `access_token` field, we get

Header:

```
{
  "typ": "at+jwt",
  "alg": "RS256",
  "kid": "{KID_CHIAVE_PDND}"
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
  "digest": {
    "alg": "SHA256",
    "value": "5db26201b684761d2b970329ab8596773164ba1b43b1559980e20045941b8065"
  }
}
```

## Step 6 - Request data from the producer

The voucher must be included in the header of all subsequent calls to the producer's API. It must be placed in the `Authorization` header, as follows:

<pre><code><strong>Authorization: Bearer &#x3C;voucher>
</strong></code></pre>

Additionally, the JWS from step 1 is included in a custom header defined by AgID:

<pre><code><strong>Agid-JWT-TrackingEvidence: &#x3C;jws>
</strong></code></pre>

## Step 7 - Wait for producer verification

The producer performs all necessary checks. If successful, it processes the request, either returning data (if the e-service provides data) or accepting data (if the e-service receives data).

To consult the recommended verifications for producers, see the [dedicated section](../../../technical-guide/utilizzare-i-voucher/checks-on-a-bearer-voucher-by-a-producer.md). In addition, it is possible to consult the verifications to be carried out regarding the digest, specific to this flow, in the [dedicated section](../../../technical-guide/utilizzare-i-voucher/checks-of-the-digest-by-a-producer.md).
