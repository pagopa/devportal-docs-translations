---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/client-e-materiale-crittografico
---

# Client

### What they are and what they are for

**Clients** represent the **application identity** of the party: they group together the **security operators (technical users)** authorized to **upload public keys**, as well as the **public keys themselves**.

They constitute the **enabling tool for data extraction**; therefore, **all operations** related to **adding technical personnel** and **associating clients with purposes** can be performed **exclusively** by users with **administrator privileges**.

### Types of clients

* **E-service API client (toward producers):** Can be **associated** with e-services for which the consumer has an **active service request** and **at least one published purpose**. Each e-service client can be **associated with one or more purposes**; once associated, the **cryptographic material** stored in the client becomes **valid** for **requesting from PDND a voucher** related to **that purpose**.
* **PDND API client (toward the platform’s APIs):** Does **not require associations** with e-services or purposes and can be **used directly** to **obtain information** from **PDND** through its APIs.

#### Operational management

It is possible to **add or remove** **security operators** and **public keys** **at any time**.

A **client (e-service)** can also be **associated or disassociated** from a **purpose** **without being deleted**, keeping its configuration **available for other associations** when necessary.

***

Next page [→ Operations](operations.md)
