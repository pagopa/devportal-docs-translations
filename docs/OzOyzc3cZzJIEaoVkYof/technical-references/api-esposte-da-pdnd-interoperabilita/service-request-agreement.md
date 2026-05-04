---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/api-esposte-da-pdnd-interoperabilita/service-request-agreement
---

# Service request (Agreement)

This section describes the concepts and operations related to the **service request** within the **PDND APIs**. For the functional context and lifecycle of the service request on the platform, refer to the [dedicated section](../richieste-di-fruizione/).

## Attributes

Certain states and transitions of service requests depend on the **attributes** required by the e-service and **held** by the consumer. Specifically:

* **Satisfied attributes**: attributes **required by the e-service** and **assigned** to the consumer.
* **Lost attributes**: attributes **required** and **previously assigned**, but later **revoked**.

**Attribute types**:

* **CERTIFIED**, **DECLARED**, **VERIFIED**

## States and transitions — Overview

<table><thead><tr><th width="141.06561279296875">State</th><th>Description</th><th>Outgoing transitions</th></tr></thead><tbody><tr><td><strong>DRAFT</strong></td><td>Initial state upon creation of the Agreement; requires <strong>CERTIFIED</strong> attributes to be satisfied (if applicable).</td><td>→ <strong>ACTIVE</strong> (all requirements satisfied);<br>→ <strong>PENDING</strong> (requires producer validation);<br>→ <strong>MISSING_CERTIFIED_ATTRIBUTES</strong> (loss of a <strong>CERTIFIED</strong> attribute);<br>→ <em>deletion</em>.</td></tr><tr><td><strong>PENDING</strong></td><td>Under validation by the producer; <strong>CERTIFIED</strong> and <strong>DECLARED</strong> satisfied; <strong>VERIFIED</strong> attributes not satisfied <strong>or</strong> manual approval required.</td><td>→ <strong>ACTIVE</strong> (all requirements satisfied);<br>→ <strong>REJECTED</strong> (producer rejection);<br>→ <strong>DRAFT</strong> (loss of <strong>DECLARED</strong> attribute);<br>→ <strong>MISSING_CERTIFIED_ATTRIBUTES</strong> (loss of <strong>CERTIFIED</strong> attribute).</td></tr><tr><td><strong>ACTIVE</strong></td><td>Operational Agreement; the <strong>only state</strong> enabling <strong>voucher generation</strong>; all attributes satisfied.</td><td>→ <strong>SUSPENDED</strong> (manual suspension or loss of requirements);<br>→ <strong>ARCHIVED</strong> (manual or automatic archiving following an <em>upgrade</em>).</td></tr><tr><td><strong>SUSPENDED</strong></td><td>Temporary suspension initiated by the consumer, producer, or platform (attribute loss). <strong>Reversible</strong> state.</td><td>→ <strong>ACTIVE</strong> (no suspension in progress and requirements satisfied);<br>→ <strong>SUSPENDED</strong> (suspension or incomplete requirements persist);<br>→ <strong>ARCHIVED</strong> (manual or post-<em>upgrade</em> archiving).</td></tr><tr><td><strong>ARCHIVED</strong></td><td><strong>Final</strong> state for agreements no longer in use; to regain access to the e-service, a <strong>new Agreement</strong> must be created.</td><td>— (no further transitions).</td></tr><tr><td><strong>REJECTED</strong></td><td>Rejection by the producer; the consumer may <strong>submit a new request</strong> following the feedback received.</td><td>— (final state).</td></tr><tr><td><strong>MISSING_CERTIFIED_ATTRIBUTES</strong></td><td>Lack of one or more <strong>CERTIFIED</strong> attributes required <strong>before activation</strong>; the Agreement remains <strong>unmodifiable</strong> until restoration.</td><td>→ <strong>DRAFT</strong> (restoration of all <strong>CERTIFIED</strong> attributes);<br>→ <em>deletion</em>.</td></tr></tbody></table>

### State details

<figure><img src="../../.gitbook/assets/interop_api_v2_lifecycle_agreement.png" alt="" width="375"><figcaption><p>Flow diagram describing the state transitions.</p></figcaption></figure>

#### DRAFT

**Characteristics**

* Initial state for new Agreements.
* Reachable only when the required **CERTIFIED** attributes are **satisfied** (if applicable).

**Transitions**

* **ACTIVE**: all requirements satisfied; no further validation needed.
* **PENDING**: requires producer validation.
* **MISSING\_CERTIFIED\_ATTRIBUTES**: loss of at least one required **CERTIFIED** attribute.
* _Deletion._

#### PENDING

**Characteristics**

* **CERTIFIED** and **DECLARED** attributes satisfied.
* **VERIFIED** attributes not satisfied **or** manual approval required by the producer.
* The next state change depends on the **producer**.

**Transitions**

* **ACTIVE**: complete requirements, no additional validation.
* **REJECTED**: rejection by the producer.
* **DRAFT**: loss of at least one required **DECLARED** attribute.
* **MISSING\_CERTIFIED\_ATTRIBUTES**: loss of at least one required **CERTIFIED** attribute.

#### ACTIVE

**Characteristics**

* **Operational Agreement**.
* **Only state** allowing **voucher generation**.
* **All attributes** satisfied.

**Transitions**

* **SUSPENDED**: manual suspension or loss of requirements.
* **ARCHIVED**: manual archiving by the consumer **or** automatic archiving following an _upgrade_.

#### SUSPENDED

**Access conditions**

* **Manual suspension** by the consumer.
* **Manual suspension** by the producer.
* **Platform suspension** due to loss of one or more attributes.

**Characteristics**

* **Temporarily inactive Agreement**.
* **Reversible** state.

**Transitions**

* **ACTIVE**: no ongoing suspension and complete requirements.
* **SUSPENDED**: ongoing suspension or incomplete requirements.
* **ARCHIVED**: manual archiving by the consumer **or** following an _upgrade_.

#### ARCHIVED

**Characteristics**

* **Final state** (no outgoing transitions).
* To regain access to the e-service, a **new Agreement** must be created.

#### REJECTED

**Characteristics**

* Result of **rejection** by the producer.
* **Final** state; the consumer may **submit a new request** according to the feedback provided.

#### MISSING\_CERTIFIED\_ATTRIBUTES

**Characteristics**

* Loss of one or more **CERTIFIED** attributes required **before** activation.
* The Agreement remains **unmodifiable** for both the consumer and producer until restoration.

**Transitions**

* **DRAFT**: restoration of **all required CERTIFIED** attributes.
* _Deletion._

### Operations

#### Updating a service request (upgrade)

The **upgrade** allows a consumer using a **deprecated version** of an e-service to **update** its service request to the **latest version**. The operation includes:

* **Creation** of a **new Agreement** linked to the **new version** of the e-service, while **retaining the state** of the existing Agreement.
* **Archiving** of the **previous Agreement**.

***

Next page [→ Purpose](purpose.md)
