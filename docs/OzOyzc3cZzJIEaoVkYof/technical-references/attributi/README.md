---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/attributi
---

# Attributes

### What they are and what they are for

**Attributes** are **characteristics** that a **party possesses** (for example, “being a Municipality”). **Producers** use them to **restrict access** to their **e-services**, treating them as **access requirements**.

When **creating an e-service**, the producer **defines** the attributes **required** for a consumer to **submit a service request**. If the consumer **possesses** or can **prove possession** of these attributes, they can **subscribe** to consume the e-service.

### Grouping of attributes (groups)

Attributes are organized into **groups**. When a **group** contains **multiple attributes**, it is sufficient for the consumer to **possess at least one** of them to meet the **access requirement**.

**Example:** if an e-service requires an attribute group defined as “Municipality **or** Region,” any entity possessing either the **Municipality** or **Region** attribute satisfies the requirement.

### Types of attributes

* **Certified**: attributes **certified** by an **authoritative source**.
* **Verified**: attributes that **require verification** by the **producer**, according to its internal validation processes.
* **Declared**: attributes **self-declared** by the **consumer** through an **explicit action**.

### Certified attributes

Certification is based on an **authoritative source** called a **certifying body**; the **responsibility** for the **correct recognition** of the attribute lies with this body.

**Operational example:** the **IPA Catalog** (authoritative source) provides the attribute “Municipalities and their Consortia and Associations” and the list of parties possessing it.

* **Public Administrations (PA), Public Service Managers (GSP), Publicly Controlled Companies (SCP), Companies within the Consolidated Economic Account (SCEC):** the **main authoritative source** is [**IPA**](https://indicepa.gov.it/ipa-portale/); the **verification** of attribute possession is **automatic** on PDND. **Any updates** or **corrections** to attribute data must be **requested from the IPA manager (AgID)** according to the established procedures. The list is synchronized every 24 hours.
* **Private e-procurement platform managers:** certification is based on the [**certification process**](https://www.agid.gov.it/it/piattaforme/procurement/certificazione-componenti-piattaforme) of components published by **AgID**; once completed, PDND is **notified** of the entity to which the **certified attributes** required by producers must be assigned.
* **ANAC services:** Public Administrations and Public Service Managers seeking to **obtain** the attributes **required** to access **ANAC services** must follow the **recognition process** through **AgID**.
* **Other certified attributes:** these are directly **assigned by parties to other parties** through the process dedicated to **certifying bodies**. More details are available in the [dedicated section](certifying-authority.md).

### Verified attributes

* The **verification** is **carried out by the producer**, according to its **internal validation processes**.
* In the **draft** of the **service request**, the consumer must **upload any documentation** that can **support** the verification by the producer.

### Declared attributes

* The **responsibility** lies **entirely with the declarant (consumer)**.
* The producer may **require** one or more **declared attributes**; for each, the consumer must **explicitly declare possession** **before submitting** the **service request**.
* The declaration is **recorded** on PDND as an **explicit action** through a mandatory click to activate the attribute; it is **not implicit**.

***

Next page [→ Operations and lifecycle](lifecycle.md)
