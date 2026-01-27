# How to sign a response for a subscriber

The ModI leaves it to the producer to define the correct procedure for signing the payload and for verification by the subscriber.

Below is an example of a possible way to manage the signing mechanism of an e-service’s response payload.

For more details, see the [dedicated section](../../technical-references/utilizzare-i-voucher/guaranteeing-response-integrity.md).

### Prerequisites

It is assumed that the producer has:

* created a **producer keychain** ([see guide](../../technical-references/e-services/keychains.md));
* generated at least one set of cryptographic material and uploaded the related public key to PDND within the client ([see tutorial](../tutorials-for-consumers/how-to-generate-the-cryptographic-material-and-upload-a-public-key.md));
* associated the _**producer keychain**_ with the e-service for which it wants to sign the response to the subscriber ([see tutorial](how-to-associate-a-producer-keychain-with-an-e-service.md)).

### Preparation: Define the structure of the response

The producer defines the structure for signing an HTTP response payload using RSA, to ensure that the data comes from an e-service and has not been modified.

The JSON response the producer sends to the subscriber will be structured as follows:

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

<table><thead><tr><th width="137.08123779296875">Field name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>data</code></td><td>contains the payload, i.e., the actual data that the e-service sends to subscribers</td></tr><tr><td><code>signature</code></td><td>contains the digital signature of the <em><strong>data</strong></em> field, calculated by the e-service using an RSA private key (belonging to a keychain associated with the e-service) and encoded in base64</td></tr><tr><td><code>kid</code></td><td>identifier of the key used for signing; allows the subscriber to know which public key to use for verifying the signature</td></tr></tbody></table>

Once defined, proceed to sign the response.

### Step 1: Create the hash

The content of the `data` field is converted into a byte string and passed through a hashing function such as SHA256.

### Step 2: Sign the hash

The calculated hash is then signed using the private key corresponding to one of the public keys uploaded to the _**producer keychain**_ associated with the e-service.

The signature ensures that only the holder of the private key corresponding to the `kid` (producer) can generate the specific signature for that content.\
The `kid` of the uploaded public key is available within the keychain, by opening the page for the individual key (_**Producing > Producer keychains**_, _**Public keys**_ tab, selecting the specific key of interest).

### Step 3: Integrate the signature in the response

As defined in the preparation step, the payload will contain:

* `data` – the actual data;
* `signature` – the newly created signature encoded in base64;
* `kid` – the `kid` of the key used for signing.

This way, the subscriber can uniquely identify the key to be used for verification.\
The response is then sent to the subscriber.

***

Next page [→ Checks on a Bearer voucher by a producer](checks-on-a-bearer-voucher-by-a-producer.md)
