# Service request

## Overview

The document describes the lifecycle of a service request, technically referred to as an **Agreement**, detailing the states it can assume and the conditions required for transitions between states.

Refer to the [dedicated section](../../richieste-di-fruizione/) for more information on **service requests**.

## Attributes

Some states and transitions depend on the attributes required by the e-service and owned by the consumer.

In the documentation, the following terms will be used:

* "satisfied attributes" to refer to the attributes required by the e-service and assigned to the consumer;
* "lost attributes" to refer to the attributes required by the e-service that were previously assigned to the consumer and later revoked.

The attribute types are:

* **CERTIFIED**: certified attributes
* **DECLARED**: declared attributes
* **VERIFIED**: verified attributes

## States

The states that an **Agreement** can assume are:

* [DRAFT](service-request.md#draft)
* [PENDING](service-request.md#pending)
* [ACTIVE](service-request.md#active)
* [SUSPENDED](service-request.md#suspended)
* [ARCHIVED](service-request.md#archived)
* [REJECTED](service-request.md#rejected)
* [MISSING CERTIFIED ATTRIBUTES](service-request.md#missing-certified-attributes)

The details and transition conditions are provided in the diagram and in the descriptions in the following sections.

<figure><img src="../../../.gitbook/assets/interop_api_v2_lifecycle_agreement.png" alt="" width="375"><figcaption><p>Diagramma di flusso che descrive i passaggi di stato</p></figcaption></figure>

### DRAFT

Initial state of a newly created Agreement.

**Features:**

* Initial state of new Agreements
* Can only be reached if the consumer meets the CERTIFIED attributes required by the e-service (if any)

**Possible transitions:**

* **ACTIVE**: all requirements are met, and no further validations are needed
* **PENDING**: submission requires additional validations by the producer
* **MISSING\_CERTIFIED\_ATTRIBUTES**: the consumer loses at least one required CERTIFIED attribute
* _Deletion_

### PENDING

Agreement under validation by the producer.

**Features:**

* The consumer’s CERTIFIED and DECLARED attributes are satisfied
* One or more VERIFIED attributes are not satisfied, or manual approval from the producer is required
* The next state change is handled by the producer

**Possible transitions:**

* **ACTIVE**: all requirements are met, and no further validations are needed
* **REJECTED**: the producer rejects the request
* **DRAFT**: the consumer loses at least one required DECLARED attribute
* **MISSING\_CERTIFIED\_ATTRIBUTES**: the consumer loses at least one required CERTIFIED attribute

### ACTIVE

Operational Agreement.

**Features:**

* The only state that allows voucher generation
* All attributes are satisfied

**Possible transitions:**

* **SUSPENDED**: manual suspension or loss of the necessary requirements
* **ARCHIVED**: manual archiving by the consumer, or automatic archiving following an upgrade

### SUSPENDED

Temporary suspension of the Agreement. Can be reached following one or more of the following conditions:

* Manual suspension by the consumer
* Manual suspension by the producer
* Suspension by the platform due to the loss of one or more consumer attributes

**Features:**

* Agreement is temporarily non-operational
* Reversible state

**Possible transitions:**

* **ACTIVE**: not suspended by the consumer, not suspended by the producer, and the consumer satisfies all required attributes
* **SUSPENDED**: still suspended by the consumer, or by the producer, or the consumer does not satisfy all required attributes
* **ARCHIVED**: manual archiving by the consumer, or after an upgrade

### ARCHIVED

Agreement no longer in use. If the consumer wishes to access the e-service again, a new Agreement must be created.

**Features:**

* Irreversible state

**Possible transitions:**

* No possible transitions

### REJECTED

The service request has been rejected by the producer. The consumer may submit a new service request in compliance with the producer’s instructions.

**Features:**

* Irreversible state

**Possible transitions:**

* No possible transitions

### MISSING CERTIFIED ATTRIBUTES

The consumer has lost one or more required CERTIFIED attributes before the Agreement was activated. The Agreement cannot be modified until the missing attributes are restored.

**Features:**

* No operations on the Agreement are possible by the consumer or the producer

**Possible transitions:**

* **DRAFT**: the consumer satisfies all required CERTIFIED attributes
* _Deletion_

## Operations

### Service request upgrade

Upgrading a service request is an operation that allows a consumer using a deprecated version of an e-service to update the service request in order to use a more recent version of the e-service.

The upgrade operation consists of:

* Creating a new Agreement linked to the new version of the e-service, retaining the state of the existing Agreement.
* Archiving the existing Agreement.
