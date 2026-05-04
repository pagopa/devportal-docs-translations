# E-service with “keychain” functionality: Trial Keychain

The “Certification - API Trial Keychain” e-service published in the catalog offers a service through which it is possible to **see the keychain function in action:** this is a service that does not add any particular business logic to the sent response, but at the same time provides immediate evidence about the additional information the provider implementing the function sends to the user.

_add here use cases to clarify its use_

**Invocation of the e-service**

Let's see the e-service in action. After subscribing to the service, we can immediately generate the toucher and then invoke the APIs.

The first call we will make is as follows:

`GET /keychain-mock/signature`

**Header:**

```
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
```

**Header:**

```
x-payload-signature: {{signature}}
x-payload-signature-kid: {{kid}}
x-payload-signature-algorythm: SHA256withRSA
```

**Payload:**

```json
application/json
{
    "message": "response generated successfully"
}
```

As can be seen from the obtained output, the provider sends a response that includes not only the body of the response but also additional headers calculated based on the public key connected to the keychain.

Remember this is only one of the methods with which the information can be sent.

Specifically, the method for sending the information and it quantity is the responsibility of the provider.

The user that receives the added headers can verify the integrity of the response.

An example is provided below of the steps that can be taken for the verification.

Recovery of the public key connected to the keychain

By means of the value contained in the header x-payload-signature-kid, it is possible to recover the public key.

For this purpose, it is possible to invoke the APIs provided by interoperability and specifically

```
GET /keys/:kid
```

Setting the parameter :kid with the value obtained in the header.

The API will respond with the associated public key.

**Verification of the signature**

Thanks to the recovered pubic key and the remaining headers, it is possible to proceed with the verification.

For the verification, it is necessary to recover the value associated with x-payload-signatures and apply the algorithm indicated in _x-payload-signature-algorithm_ to the signature.

An excerpt of code is provided below for illustrative purposes

```python

# Upload the public key

public_key = load_pem_public_key(public_key_pem)

# Verify the signature

try:
    public_key.verify(
        signature,
        payload,
        padding.PKCS1v15(),
        hashes.SHA256()
    )
    print("Valid signature!")
except Exception as e:
    print("Invalid signature:", e)
```

If the algorithm is executed correctly, the integrity verification is correct.

The e-service presents an additional API that permit sending feedback to the provider following verification of the signature.

For this purpose, the user can send details by making the following request:

``` POST /keychain-mock/verify ```

**Header:**

```
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
x-payload-signature: {{signature}}
```

**Payload:**

```json
application/json
{
    "message": "Check Successful"
}
```

**Payload:**

```json
application/json
{
    "status": "OK",
    "message": "X-Payload-Signature verified"
}
```

In this way, the provider recognizes that the call flow was completed correctly.
