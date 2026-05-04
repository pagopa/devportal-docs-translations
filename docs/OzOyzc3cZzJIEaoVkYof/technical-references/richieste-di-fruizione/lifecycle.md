---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/richieste-di-fruizione/lifecycle
---

# Operations and lifecycle

### Creating a draft and submitting the request

A party can **subscribe** to the **e-services** available in the **e-service catalog** when both of the following conditions are met:

* the party **does not already have** an **active service request** for the same e-service;
* the party **possesses the minimum requirements** for subscription (**required attributes**).

The platform allows the creation of a **draft** only if **all required certified attributes** for the e-service are **satisfied**. The potential consumer is responsible for:

* **self-declaring** the required **declared attributes**;
* **uploading the documentation** necessary for the producer to **verify** any **verified attributes**.

Once the draft is completed, the request can be **submitted to the producer** for approval.

### Subscribing to one’s own e-service

A party can **subscribe to its own e-services as a consumer** without the attribute verification phase. This mechanism **simplifies monitoring activities** and reduces administrative burdens in cases of self-consumption.

### Approval or rejection of the request

The **approval policy** is configured in the **e-service version** and can be:

* **Automatic**: PDND performs the **verification**; if the consumer **possesses all required attributes** (certified, verified, declared), the request is **activated immediately**; otherwise, it enters the **manual approval flow**.
* **Manual**: the **producer activates** the request after performing its **own verifications** (including the evaluation of verified attributes).

The producer may **reject** the request if the **requirements (attributes)** are not met and must **justify** the decision.\
The consumer may then **submit a new request**, updating the **documentation** and/or **justifications**.

For any clarifications, the **producer’s contact information** is available on the e-service page.

### Updating a service request

An **update** is required when the producer **publishes a new version** of the e-service. The consumer will find the option to update directly on the request’s page.

Each request is **linked** to the **specific version** it was created for: if it was submitted for **version 5**, when the e-service is upgraded to **version 6**, it must be **updated**. Upon updating:

* **All purposes** are **migrated** to the new request without changing the purpose’s technical ID (`purposeId`);
* From that moment, they **use the new e-service version**;
* The operation is **irreversible**.

It is considered **good practice** to review the **changelog** and **updated interface files** to understand any modifications, especially if there are possible **“breaking changes”** in access requirements or API structure.

If the producer publishes **multiple versions**, the update always applies to the **latest one**.\
For example, if the consumer is on **v3** and the producer releases **v4** and then **v5**, the update takes the consumer **directly to v5**.

Some e-services offer a **testing environment version**, allowing **pre-production testing** before adoption in the production environment.

### Archiving a service request

Archiving can occur in two ways:

* **Automatic**: when the consumer **updates** the request to the **latest e-service version**, the request for the previous version is **archived**, and its **purposes** are **linked** to the new request;
* **Manual**: initiated by the **consumer** when the service is **no longer needed**.\
  Later, a **new request** may be created, provided that **no other active request** for the same e-service exists.

For **order and security**, it is considered **good practice** to archive requests for e-services that are **no longer in use**.

### Suspension and reactivation

Suspension may be initiated by the **producer**, **consumer**, or **platform**.\
If **any actor suspends**, the request is considered **suspended**.\
**Only** the actor who applied the suspension can **lift** their own suspension.

**Suspension rules**

* **Producer**: may **manually suspend** a request.
* **Consumer**: may **manually suspend** a request.
* **Platform**: suspends a request when it detects that:
  * the producer has **revoked** one or more **verified attributes** from the consumer;
  * the consumer has **self-revoked** one or more **declared attributes**;
  * an **authoritative source or certifying body** has **revoked** one or more **certified attributes**.

To **reactivate** a suspended request, **all actors** who suspended it must **lift their suspensions**, and **all required attributes** must again be **recognized**.

**Example:** if the producer attempts to reactivate a request for which it **revoked a verified attribute**, reactivation will **not succeed** until the attribute is **verified again**.

### States

The following table summarizes the **states** a service request can assume and their **operational impact**:

<table><thead><tr><th width="130.47503662109375">State</th><th>Description</th><th>Allowed actions</th></tr></thead><tbody><tr><td><strong>Draft</strong></td><td>Request in progress, not yet submitted to the producer.</td><td>The party can <strong>fill in</strong> the form, <strong>self-declare</strong> required attributes, <strong>upload documentation</strong> for verified attributes, and <strong>delete</strong> the draft. The request can be <strong>submitted</strong> once all minimum requirements are met.</td></tr><tr><td><strong>Waiting for approval</strong></td><td>Request submitted to the producer for review and potential activation.</td><td>Activation occurs <strong>manually by the producer</strong> or <strong>automatically</strong> by the platform, depending on the <strong>policy</strong> set in the e-service version.</td></tr><tr><td><strong>Active</strong></td><td>Request activated (by the producer or platform, based on the policy).</td><td>Allows the creation of <strong>new purposes</strong> for the e-service. The request can be <strong>suspended</strong> or <strong>archived</strong> according to the applicable rules.</td></tr><tr><td><strong>Suspended</strong></td><td>Temporarily disabled by the producer, consumer, or platform.</td><td><strong>Each actor</strong> that applied a suspension can <strong>lift</strong> their own. The request becomes operational again only when <strong>all suspensions</strong> are lifted and <strong>requirements</strong> are satisfied.</td></tr><tr><td><strong>Archived</strong></td><td>The consumer has withdrawn the request because the service is no longer needed.</td><td>A <strong>new request</strong> can be submitted in the future, as long as <strong>no other active request</strong> for the same e-service exists.</td></tr><tr><td><strong>Missing certified attributes</strong></td><td>Technical state applied when the party loses one or more required <strong>certified attributes</strong> while the request is in <strong>draft</strong> or <strong>waiting for approval</strong>.</td><td>The platform <strong>blocks submission</strong> until the <strong>authoritative source or certifying body</strong> <strong>reassigns</strong> the attribute. Alternatively, the consumer may <strong>delete the draft</strong>.</td></tr></tbody></table>

***

Next page [→ Purposes](../finalita/)
