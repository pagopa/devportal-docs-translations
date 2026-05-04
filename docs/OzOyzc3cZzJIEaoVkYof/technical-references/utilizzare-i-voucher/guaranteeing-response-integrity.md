---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/utilizzare-i-voucher/guaranteeing-response-integrity
---

# Guaranteeing response integrity

### Goal

**Producers** can offer **consumers** an **additional level of security** by signing their responses, thus guaranteeing the **integrity and authenticity of the data received**.

This mechanism ensures that the response content **has not been altered** during transmission and that it **comes from the legitimate producer**.

### General operation

The producer signs its response using a **private key**. The corresponding **public key** is **stored on PDND**, allowing consumers to **verify the signature** via the platform’s APIs.

Consumers can therefore:

1. Receive the signed response;
2. Request from PDND the public key associated with the producer;
3. Verify the signature and confirm the integrity of the received payload.

### Keychain management

The management of public keys takes place through the **keychain**, accessible from the e-service tab:

**Path:**\
\&#xNAN;_Producer → My e-services → \[select an e-service] → “Keychain” tab_

The producer can:

* Create one or more keychains;
* Associate each keychain with a specific e-service;
* Upload one or more public keys within each keychain.

For all configuration, creation, and maintenance operations, refer to the [**dedicated section**](../e-services/keychains.md) **on keychain management**.

### Preconditions

To sign responses, the following conditions must be met:

* The producer has created a **keychain**;
* The keychain is **associated with an e-service** via the relevant tab in the e-service section;
* A **security operator or administrator** has uploaded **at least one public key** to the keychain.

After completing these operations, the producer can sign responses using the corresponding private key, and consumers can retrieve the public key from PDND to verify its validity.

### Security and reference standards

Response signing uses the **same cryptographic standards** applied in **voucher workflows**, in compliance with international specifications (e.g., **RFC 7517, RFC 7518, RFC 8017**). For technical details, see the [**dedicated section**](types-of-voucher-requests.md).

### Implementation and examples

**ModI** leaves producers free to define **how to sign the payload** and **how consumers should perform verification**. PDND imposes no constraints, except for the use of **RSA asymmetric keys** compliant with the adopted security standards.

Dedicated tutorials are available for both the [**producer**](../../tutorials/tutorials-for-producers/how-to-sign-a-response-for-a-subscriber.md) and the [**consumer**](../../tutorials/tutorials-for-consumers/how-to-verify-a-response-signed-by-a-producer.md), illustrating a complete example of the response payload signing and verification process for an e-service.

***

Next page [→ FAQs](faqs.md)
