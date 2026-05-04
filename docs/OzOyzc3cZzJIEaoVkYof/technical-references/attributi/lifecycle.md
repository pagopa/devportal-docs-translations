---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/attributi/lifecycle
---

# Operations and lifecycle

### Creation

Parties can **independently create** **verified** and **declared** attributes.

The creation of **certified** attributes is reserved for parties **accredited as certifying bodies**. More details are available in the dedicated section.

When **creating a new e-service**, if the desired attribute **is not available** in the database, it can be **created** and **used immediately**: the attribute will then be made **available in the repository** for all producers, who can reuse it in their own e-services.

### Revocation and reactivation

The **revocation** of an attribute **suspends all service requests** in which that attribute is an **access requirement**.

The **reactivation** of the attribute **reactivates the previously suspended service requests**, **provided that no other blocking conditions exist**.

**Example:** if a service request was **manually suspended** before the revocation, simply reactivating the attribute is **not sufficient**; the request itself must also be **reactivated**.

**Management responsibility:**

* **Verified attributes** of consumers are **managed by producers** according to their internal procedures.
* **Declared attributes** are **managed by the consumer**.
* **Certified attributes** are **managed by the certifying body or authoritative source**; the platform **records** any state changes but does not control them.

### Rejection (only for verified attributes)

**Rejection** applies **exclusively** to **verified attributes**.

The **producer** may **independently verify** the requirements: if it finds that the consumer **does not meet them**, it can **reject** the attribute.

The **presence of at least one rejection** **prevents activation** of the **service request**, rendering it **unusable**.

The **consumer** may **submit a new request** for the **same e-service**, providing **justifications** and **documentation** to allow the producer to **reassess and approve** the previously rejected attribute.

***

Next page [→ Attribute revocation](attributes-revocation.md)
