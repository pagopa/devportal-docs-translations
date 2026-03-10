# How to request a Bearer voucher for PDND APIs

For a list of all APIs made available by PDND, see [here](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/zwqHiUqrZCs3zNnHdc9A/).

More information on this implementation is available in the [dedicated section](../../../technical-guide/utilizzare-i-voucher/types-of-voucher-requests.md#bearer-token-spendibile-presso-le-api-di-pdnd-interoperabilita).

## Summary of the flow <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

Essentially, the end-to-end process requires five steps:

1. The consumer generates the client assertion;
2. The consumer requests the voucher from the PDND authorization server;
3. The PDND authorization server performs the necessary checks. If successful, it returns a voucher;
4. The consumer makes a request to the PDND APIs, inserting the voucher issued by PDND in the `Authorization` header;
5. PDND performs the necessary checks. If successful, it processes the consumer’s request.

## Prerequisites <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

It is assumed that the consumer has:

* created an API Interop-type client ([read tutorial](../back-office/how-to-create-a-client.md));
* generated at least one set of cryptographic material and uploaded the corresponding public key to PDND within the client ([read tutorial](../back-office/how-to-generate-the-cryptographic-material-and-upload-a-public-key.md)).

## Step 1 - Generating the client assertion <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

The first step is to build a valid _client assertion_. The client assertion consists of a header and a payload containing the following fields.

Header:

<table><thead><tr><th width="128.4140625">Field name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>kid</code></td><td>the ID of the key used to sign the assertion, available on PDND</td></tr><tr><td><code>alg</code></td><td>the algorithm used to sign the JWT (for now, always <code>RS256</code>)</td></tr><tr><td><code>typ</code></td><td>the type of object being sent (always <code>JWT</code>)</td></tr></tbody></table>

Payload:

<table><thead><tr><th width="127.37109375">Field name</th><th>Meaning</th></tr></thead><tbody><tr><td>iss</td><td>the issuer, in this case the <em>clientId</em></td></tr><tr><td>sub</td><td>the subject, in this case always the <em>clientId</em></td></tr><tr><td>aud</td><td>the audience, available on PDND</td></tr><tr><td>jti</td><td>the JWT ID, a unique random ID assigned by whoever is creating the token, used to track the token itself. It is the caller’s responsibility to ensure that the ID of this token is unique for the client assertion</td></tr><tr><td>iat</td><td>issued at, the timestamp indicating when the token was created, expressed in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (numeric value, not a string)</td></tr><tr><td>exp</td><td>expiration, the timestamp indicating when the token expires, expressed in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (numeric value, not a string)</td></tr></tbody></table>

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
  "exp": 1616170668
}
```

After building a valid _client assertion_, it must be signed with your private key (which must match the public key uploaded to the client on PDND).

For demonstration purposes, a Python script has been published to show how to perform this operation. All instructions are available in the back office, within your client.

A function is also available to verify the validity of your client assertion and highlight any errors. This tool is available in the back office under _**Developers tools > Debug client assertion**_.

## Step 2 - Requesting the voucher from the authorization server

The second step is to call the PDND authorization server with the signed client assertion to obtain a voucher that can be used with the PDND APIs.

The endpoint URL of the authorization server changes depending on the environment and will be clearly visible on the back office interface.

The endpoint must be called with some parameters in the body:

| Field name              | Meaning                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `client_id`             | again, the _clientId_ used in the assertion                                                                        |
| `client_assertion`      | the signed client assertion from the first step                                                                    |
| `client_assertion_type` | the client assertion format, as indicated in RFC (always `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`) |
| `grant_type`            | the type of flow used, as indicated in RFC (always `client_credentials`)                                           |

## Step 3 - The authorization server verifies and issues the voucher

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
  "aud": "api.interop.pagopa.it/v2",
  "sub": "9b361d49-33f4-4f1e-a88b-4e12661f2309",
  "client_id": "9b361d49-33f4-4f1e-a88b-4e12661f2309",
  "purposeId": "1b361d49-33f4-4f1e-a88b-4e12661f2300",
  "producerId" : "0e9e2dab-2e93-4f24-ba59-38d9f11198ca",
  "consumerId" : "69e2865e-65ab-4e48-a638-2037a9ee2ee7",
  "eserviceId" : "b8c6d7ad-93fc-4eaf-9018-3cd8bf98163f",
  "descriptorId": "9525a54b-9157-4b46-8976-ec66f20b7d7e"
}
```

## Step 4 - Requesting data from PDND

The voucher must be included in the header of all subsequent calls to the PDND APIs. It must be placed in the `Authorization` header, as follows:

```
Authorization: Bearer <voucher>
```

## Step 5 - Wait for the response

PDND verifies the validity of the voucher (ensuring it is indeed a voucher for its APIs and that it is still valid). If so, and if the consumer’s request is well-formed, it performs the requested operation.
