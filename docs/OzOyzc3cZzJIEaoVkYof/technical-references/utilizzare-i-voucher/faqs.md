---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/utilizzare-i-voucher/faqs
---

# FAQs

### My voucher request is rejected

To identify the reason for the rejection, the quickest method is to use the **Client Assertion Debug Tool**, available in the front office under: **Developers Tools → Client assertion debug**.

#### What the tool checks

The system verifies that the **entire authorization chain** is active:

* active e-service version;
* active service request;
* active purpose;
* correct client;
* client associated with the active purpose;
* public key uploaded within the client;
* matching signature between public and private keys.

If the chain is valid, the tool then checks that:

* the **client assertion** contains **only the allowed claims**;
* the **values** of the claims are of the **correct type**.

#### Allowed claims in the client assertion

* **Header**: `kid`, `alg`, `typ`
* **Payload**: `iss`, `sub`, `aud`, `jti`, `iat`, `exp`, `purposeId`
* **Optional**: `digest`, containing two fields (`alg`, `value`)

#### Expected data types

<table><thead><tr><th width="526.3250122070312">Field</th><th>Data type</th></tr></thead><tbody><tr><td><code>kid</code>, <code>alg</code>, <code>typ</code>, <code>iss</code>, <code>sub</code>, <code>aud</code>, <code>jti</code>, <code>purposeId</code>, <code>digest.alg</code>, <code>digest.value</code></td><td>string</td></tr><tr><td><code>iat</code>, <code>exp</code></td><td>long integer</td></tr></tbody></table>

A **practical example of a client assertion** is available in the [dedicated tutorial](../../tutorials/tutorials-for-consumers/how-to-request-a-bearer-voucher-for-pdnd-apis.md#il-flusso-in-breve-2) for voucher generation.

### The `nbf` field is missing

Correct: the `nbf` field is defined in the standard but **is not among the allowed claims** and **must not be included** in the client assertion.

### Where should I include new custom claims (`producerId`, `consumerId`, `eserviceId`, `descriptorId`)?

They do **not need to be added by the consumer**: **PDND** automatically includes them in the voucher issued to the consumer.

### Is the `digest` field mandatory?

No. In the context of a **Bearer Token voucher**, the `digest` field is **optional** and should be included **only if required by the producer** for a specific e-service.

### How can I pass additional information (e.g., `userId`, `userLocation`, etc.)?

These pieces of information **must not be inserted in the client assertion**. They are **additional data** requested by certain producers and fall within the **direct interaction** between producer and consumer.

To transmit them:

1. Create the **second token** required by **AgID Audit REST 02**;
2. Include it in the request header to the producer with the key `Agid-JWT-Tracking-Evidence`;
3. Compute the token’s hash using **SHA256**;
4. Insert the resulting value in the `digest` field of the client assertion, for example:

```
digest: {
  alg: "SHA256",
  value: "MY_HASH"
}
```

### How to verify if the client assertion works

Use the debug tool: **Developers Tools → Debug client assertion**.

### What does a voucher issued by PDND look like

The voucher structure depends on its type:

* **Bearer Token** ([**standard**](../../tutorials/tutorials-for-consumers/how-to-request-a-bearer-voucher-for-a-producers-api-standard.md) or [**with additional information**](../../tutorials/tutorials-for-consumers/how-to-request-a-bearer-voucher-for-a-producers-api-with-additional-information.md))
* **DPoP** ([**standard**](../../tutorials/tutorials-for-consumers/how-to-request-a-dpop-voucher-for-a-producers-api-standard.md) or [**with**](../../tutorials/tutorials-for-consumers/how-to-request-a-dpop-voucher-for-a-producers-api-with-additional-information.md) **additional information**)

Each **dedicated tutorial** shows the detailed format of the corresponding voucher.

### Where to find more information

* In this **technical manual**, under the [**dedicated section**](types-of-voucher-requests.md) on vouchers.
* In the [**technical webinar**](https://developer.pagopa.it/webinars/DevTalks-PDNDInterop-voucher), which demonstrates the full process.

***

Next page [→ Delegations](../delegations/)
