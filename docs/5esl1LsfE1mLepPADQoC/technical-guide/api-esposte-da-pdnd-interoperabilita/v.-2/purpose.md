# Purpose

## Overview

The document describes the lifecycle of a purpose, technically referred to as a **Purpose**, detailing the states it can assume and the conditions required for transitions between states.\
Refer to the [documentation](../../finalita/) for further information on purposes.

## Purpose versions

A Purpose is composed of one or more versions:

* `currentVersion`: if present, contains a version in the **ACTIVE** or **SUSPENDED** state
* `waitingForApprovalVersion`: if present, contains a version in the **WAITING\_FOR\_APPROVAL** state
* `rejectedVersion`: if present, contains the last rejected version in the **REJECTED** state

There may also be additional versions within a Purpose in the following states:

* **ARCHIVED**: the version contains a previous load estimate.
* **REJECTED**: the version has been rejected by the producer.

Changing the load estimate always generates a new version within the Purpose. If the load estimate is below the thresholds set by the version of the e-service (EServiceDescriptor), or it is approved by the producer, the previous version of the Purpose is archived.

## States

The states that a **PurposeVersion** can assume are:

* [DRAFT](purpose.md#draft)
* [WAITING\_FOR\_APPROVAL](purpose.md#waiting_for_approval)
* [ACTIVE](purpose.md#active)
* [SUSPENDED](purpose.md#suspended)
* [ARCHIVED](purpose.md#archived)
* [REJECTED](purpose.md#rejected)

The details and transition conditions are provided in the diagram and in the descriptions in the following sections.

<figure><img src="../../../.gitbook/assets/interop_api_v2_lifecycle_purpose.png" alt="" width="563"><figcaption><p>Diagramma di flusso che descrive i passaggi di stato</p></figcaption></figure>

### DRAFT

Initial state of the first version of a created Purpose.

**Features:**

* Initial state

**Possible transitions:**

* **ACTIVE**: the load estimate is below the thresholds set by the version of the e-service (EServiceDescriptor)
* **WAITING\_FOR\_APPROVAL**: the load estimate is above the thresholds set by the version of the e-service (EServiceDescriptor)
* _Deletion_

### WAITING\_FOR\_APPROVAL

The load estimate exceeds the thresholds set by the version of the e-service (EServiceDescriptor) and is awaiting approval by the producer.

**Features:**

* If the current version is in the **ACTIVE** state, the Purpose can be used to generate the voucher
* Any activation archives the current version of the Purpose
* Deletion and rejection have no effect on the current version

**Possible transitions:**

* **ACTIVE**: the load estimate has been approved by the producer
* **REJECTED**: the load estimate has been rejected by the producer. If a current version exists, it remains unchanged
* _Deletion_

### ACTIVE

Operational Purpose.

**Features:**

* The only state that allows voucher generation

**Possible transitions:**

* **ACTIVE**: the load estimate is modified and remains below the thresholds set by the version of the e-service (EServiceDescriptor). A new version is created, and the version with the previous load estimate is archived
* **SUSPENDED**: manual suspension
* **WAITING\_FOR\_APPROVAL**: the updated load estimate is above the thresholds set by the version of the e-service (EServiceDescriptor). A new version is created, and the version with the previous load estimate remains unchanged
* **ARCHIVED**: manual archiving by the consumer, or automatic archiving following the activation of a new load estimate

### SUSPENDED

Temporary suspension of the Purpose. Can be reached following one or more of the following conditions:

* Manual suspension by the consumer
* Manual suspension by the producer

**Features:**

* Purpose is temporarily non-operational
* Reversible state

**Possible transitions:**

* **ACTIVE**: not suspended by the producer and reactivated by the consumer, and the load estimate is below the thresholds set by the version of the e-service (EServiceDescriptor); or not suspended by the consumer and reactivated by the producer, regardless of the load estimate value
* **WAITING\_FOR\_APPROVAL**: not suspended by the producer, reactivated by the consumer, and the load estimate is above the thresholds set by the version of the e-service (EServiceDescriptor). A new version is created, and the version with the previous load estimate remains unchanged
* **SUSPENDED**: manual suspension, or activation by the consumer but suspended by the producer, or vice versa
* **ARCHIVED**: manual archiving by the consumer, or automatic archiving following the activation of a new load estimate

### ARCHIVED

Purpose version no longer in use. Reached following manual archiving or the activation of a version with a new load estimate.

**Features:**

* Irreversible state
* If no current version exists, the Purpose is considered permanently archived

**Possible transitions:**

* No possible transitions

### REJECTED

The load estimate of the version has been rejected by the producer.\
The consumer may request the load estimate change again.

**Features:**

* Irreversible state

**Possible transitions:**

* No possible transitions
