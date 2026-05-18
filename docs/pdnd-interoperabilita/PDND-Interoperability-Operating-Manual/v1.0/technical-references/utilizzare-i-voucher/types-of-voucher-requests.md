# Types of voucher requests

### Introduction

It is possible to request from the **PDND** vouchers that comply with different specifications.\
For all the cases listed below, the **voucher type** to be used is specified by the **producer** in the **e-service settings** (API interface file and attached technical documentation).

If the producer **does not specify** any preference, the default voucher is the **Bearer** intended for the **producer’s APIs**, **without additional information**.

The available voucher types are:

* **Bearer** usable with **producer APIs**.
* **DPoP** usable with **producer APIs**.
* **Bearer** usable with the [**PDND APIs**](../api-esposte-da-pdnd-interoperabilita/).

For the **Bearer** and **DPoP** options toward the producer, both the **basic configuration** and the **variant with additional information** according to the **ModI Audit REST 02** pattern are available ([AgID Interoperability Guidelines, Annex 2](https://www.agid.gov.it/sites/agid/files/2024-07/Linee_guida_interoperabilit%C3%A0PA_All2_Pattern_sicurezza.pdf)).

### Basic request flow

All voucher requests follow three fundamental steps:

1. **Generate and sign** a **client assertion** containing the request details (client, purpose, etc.).
2. **Send the client assertion** to the PDND authorization server, which performs the required verifications and **issues the voucher**.
3. **Send the data request** to the producer, including the **voucher** in the header.

All variants are based on this flow and refer to specific **RFC standards**. Additional authorization checks may be defined between the **producer** and the **consumer**.

### Security and reference standards

Signing and verification follow international standards:

* [**RFC 8017**](https://datatracker.ietf.org/doc/html/rfc8017) **(PKCS #1)** — Use of RSA for digital signatures.
* [**RFC 7518**](https://datatracker.ietf.org/doc/html/rfc7518) **(JSON Web Algorithms)** — Signature algorithms (e.g., RSA, SHA-256).
* [**RFC 7517**](https://datatracker.ietf.org/doc/html/rfc7517) **(JSON Web Key — JWK)** — JSON representation of keys.
* Client authorization via **client assertion** follows [**RFC 7521**](https://datatracker.ietf.org/doc/html/rfc7521); additional RFCs depend on the voucher type.

### **Vouchers for producer APIs**

#### Bearer (standard version)

Used by the majority of services, it includes the **client assertion** with the **standard information** required by PDND, useful both for **audit** purposes and to allow the **producer** to assess the access requests.

**Further details:**

* Consumer side: [**tutorial**](../../tutorials/tutorials-for-consumers/how-to-request-a-bearer-voucher-for-a-producers-api-standard.md) for requesting a voucher.
* Producer side: [**standard verifications**](../../tutorials/tutorials-for-producers/checks-on-a-bearer-voucher-by-a-producer.md) recommended.

#### DPoP (standard version)

The **DPoP (Demonstrating Proof-of-Possession)** pattern uses **two tokens** — one toward **PDND** and one toward the **producer’s resource server** — with independent verifications: both must match for authorization. It is a **valid alternative to mTLS**, reducing certificate management overhead.

**Further details:**

* Consumer side: [**tutorial**](../../tutorials/tutorials-for-consumers/how-to-request-a-dpop-voucher-for-a-producers-api-standard.md) for requesting a voucher.
* Producer side: [**standard verifications**](../../tutorials/tutorials-for-producers/checks-on-a-dpop-voucher-by-a-producer.md) recommended.
* All users: [**dedicated focus**](focus-on-dpop.md).

### ModI Audit REST 02 pattern — additional information (applicable to Bearer and DPoP)

When the producer requires **additional audit metadata** (e.g., **caller IP**, **operator identifier**), the **ModI Audit REST 02** pattern is used:

1. The consumer generates a **second JWT** containing the additional information.
2. An **hash** of the second JWT is calculated and inserted into the **client assertion** in the `digest.value` field.
3. After PDND issues the **voucher**, the consumer sends the **voucher** together with the **second JWT** to the producer.
4. The producer recalculates the **hash** from the second JWT and compares it with `digest.value`: a match confirms the **authenticity** and **integrity** of the metadata.

In this model, **PDND** certifies the **authorization chain** but **does not access** the additional data exchanged directly between the producer and consumer. An example of this implementation is found in **ANPR (National Registry)** services.

**Further details:**

* Consumer side: tutorials for requesting a voucher [**Bearer**](../../tutorials/tutorials-for-consumers/how-to-request-a-bearer-voucher-for-a-producers-api-with-additional-information.md) or [**DPoP**](../../tutorials/tutorials-for-consumers/how-to-request-a-dpop-voucher-for-a-producers-api-with-additional-information.md) with additional information.
* Producer side: [**recommended verifications**](../../tutorials/tutorials-for-producers/checks-of-the-digest-by-a-producer.md).

### Vouchers for PDND APIs (Bearer)

**Characteristics:**

* Requested by **clients intended for the platform’s APIs (Interop API Clients)**.
* Do **not** require the indication of a **purpose**.

The **PDND APIs** provide information related only to the **PDND domain** (e.g., list of the party’s service requests) and do **not transmit data exchanged between producers and consumers**.

**Further details:**

* [**List of APIs**](https://developer.pagopa.it/pdnd-interoperabilita/api).
* [**Dedicated tutorial**](../../tutorials/tutorials-for-consumers/how-to-request-a-bearer-voucher-for-pdnd-apis.md).

***

Next page [→ Retrieve identifiers for verifications](retrieve-identifiers-for-verifications.md)
