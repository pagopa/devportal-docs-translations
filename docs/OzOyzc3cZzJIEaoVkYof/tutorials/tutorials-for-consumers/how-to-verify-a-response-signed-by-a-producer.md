---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/tutorials/tutorials-for-consumers/how-to-verify-a-response-signed-by-a-producer
---

# How to verify a response signed by a producer

The ModI leaves it to the producer’s discretion to indicate what the correct payload signing and verification procedure by the consumer should be.

Below is, by way of example, a possible management of the response payload signing mechanism of an e-service.

For more information, see the [dedicated section](../../technical-references/utilizzare-i-voucher/guaranteeing-response-integrity.md).

When a consumer receives a response signed by the producer, they can verify the authenticity and integrity of the data received in the response through the `kid` (key ID) inserted in the payload and the public key that the producer has stored in their _**Producer Keychain**_, associated with the e-service.

### Step 1: Deserializing the response

Once the payload created by the producer in the [previous tutorial](../tutorials-for-producers/how-to-sign-a-response-for-a-subscriber.md) has been deserialized, the consumer will find the JSON response that the producer sent, structured as follows:

```
{
  "data": {
    "field1": "value1",
    "field2": "value2"
  },
  "signature": "<rsa_signature_in_base64>",
  "kid": "<id_public_key>"
}

```

<table><thead><tr><th width="137.08123779296875">Field name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>data</code></td><td>contains the payload, i.e., the actual data that the e-service transmits to consumers</td></tr><tr><td><code>signature</code></td><td>contains the digital signature of the <code>data</code> field, calculated by the e-service using an RSA private key (belonging to an e-service keystore) and encoded in Base64 format</td></tr><tr><td><code>kid</code></td><td>identifier of the key used for signing; allows the consumer to know which public key to use to verify the signature</td></tr></tbody></table>

The process then continues with the signature verification.

### Step 2: Identification of the public key

The key corresponding to the `kid` is available on the [APIs](../../technical-references/api-esposte-da-pdnd-interoperabilita/) exposed by PDND.

To obtain the key from PDND, the consumer must have:

* created a client of type API Interop ([read tutorial](how-to-create-a-client.md));
* generated at least one set of cryptographic material and uploaded the corresponding public key to PDND within the client ([read tutorial](how-to-generate-the-cryptographic-material-and-upload-a-public-key.md));
* obtained a valid voucher for the APIs of PDND ([read tutorial](how-to-request-a-bearer-voucher-for-pdnd-apis.md)).

The consumer will find it at the path `GET /keys/{kid}` in JWK format.

### Step 3: Recalculating the hash

The consumer calculates the hash of the content of `data` using the same algorithm used by the producer: SHA256.

### Step 4: Verifying the signature

With the public key obtained in Step 2, the consumer verifies that the signature (the `signature` field) matches the hash calculated in Step 3. If the two values match, the payload is authentic and intact; otherwise, it may have been altered or may not come from the e-service, and it is possible to contact the producer for more information.

***

Next page [→ General tutorials](../general-tutorials/)
