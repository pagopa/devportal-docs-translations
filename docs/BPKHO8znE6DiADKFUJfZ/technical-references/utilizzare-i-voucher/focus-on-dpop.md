# Focus on DPoP

### What it is and how it works

**Demonstrating Proof-of-Possession (DPoP)** is an **IETF standard** ([**RFC 9449**](https://datatracker.ietf.org/doc/html/rfc9449)) introducing an advanced security mechanism: it renders a **voucher (JWT token)** unusable if stolen, binding it to a **public key uniquely associated with the caller**.

It is the **producer** who requires the use of DPoP, specifying it in the **API interface file** of their e-service. DPoP is recommended for use cases where **additional protection against theft and replay attacks** is desired. When this requirement is absent, traditional **Bearer vouchers** continue to be used.

### Simplified operation

The **consumer** generates a **dedicated asymmetric key pair** for DPoP:

* the **private key** always remains under their control (server or device) and is **never shared**;
* the **public key** is included in the DPoP header (`jwk` field), allowing verification.

This key pair:

* **must not** be registered on PDND,
* **must not coincide** with the one used for the _client assertion_,
* **is managed entirely by the consumer**.

DPoP encourages the use of **ephemeral or session-dedicated keys**: the same key can sign all requests within a single session, but each API call must include a DPoP with **unique identifiers** (`jti`, `iat`), creating a cryptographic context that cannot be reused by third parties. If necessary, the DPoP key may be retained for longer periods, provided it remains distinct from that used for the _client assertion_.

### Why use DPoP

Adopting DPoP:

* strengthens **authentication security** between consumer and producer;
* mitigates the risk of **unauthorized token reuse**;
* enables **finer control** over each request’s context;
* removes the need for complex mechanisms such as **mTLS**, while offering a comparable level of protection for many scenarios.

### Request and authorization flow

The end-to-end process consists of **seven main steps**:

1. The consumer generates the **standard client assertion** and signs it with the private key associated with their client registered on PDND.
2. They construct the **first DPoP**, intended for the **PDND authorization server**, signing it with a **second private key** (whose public key is specified in the `jwk` header).
3. The **voucher request** is sent to the authorization server, including the DPoP header.
4. The **PDND authorization server** verifies the validity of the request and, if successful, issues a **DPoP voucher**.
5. The consumer generates a **second DPoP**, intended for the **resource server** (the producer’s API), signed with the same private key from step 2.
6. The consumer sends the **data request** to the producer, including both the **voucher** issued by PDND and the **DPoP** generated for the call.
7. The producer performs **cryptographic verifications** and, if passed, returns the requested data to the consumer.

### Implementation

For implementation details, refer to the [**dedicated tutorial**](../../tutorials/tutorials-for-consumers/how-to-request-a-dpop-voucher-for-a-producers-api-standard.md).

***

Next page [→ Guaranteeing response integrity](guaranteeing-response-integrity.md)
