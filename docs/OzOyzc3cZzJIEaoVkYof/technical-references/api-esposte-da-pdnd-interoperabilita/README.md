---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/api-esposte-da-pdnd-interoperabilita
---

# APIs exposed by PDND

## What they are and what they are for

The **PDND APIs** enable **application integration** with the platform, offering an alternative or complement to the **front office** for **automating** and **managing** the **producing** and **consuming** processes of e-services, in accordance with the party’s authorization profiles.

## Current version

The **current version**, and the subject of this documentation, is **v.2**. For more details, see the [**OpenAPI specification**](https://developer.pagopa.it/pdnd-interoperabilita/api/pdnd-core-v2#/).

## Prerequisites and roles

Write operations require the **appointment** of a party **administrator** as the **administrator of the associated PDND API client**. The association can be performed from the client page available within the front office.

## Functional scope (v.2)

Version 2 provides **read and write operations** on the platform’s main **domain objects**, in accordance with user permissions:

* **E-services** and **versions** (creation, update, lifecycle management);
* **Service requests** and **purposes** (submission, management, status);
* **Clients**, **keys**, and **security operators** (association, cryptographic material management);
* **Attributes** and **risk analyses** (compilation and management where required).

## Domain objects

The following tables are mostly relevant in languages different from English as the codebase and APIs specs are already written in that language.

| API term           | Meaning            |
| ------------------ | ------------------ |
| Agreement          | service request    |
| Attribute          | attribute          |
| Client             | client             |
| Consumer           | consumer party     |
| Delegation         | delegation         |
| EService           | e-service          |
| EServiceDescriptor | e-service version  |
| EServiceTemplate   | e-service template |
| Key                | public key         |
| Producer           | producer party     |
| Purpose            | purpose            |
| PurposeVersion     | purpose version    |
| RiskAnalysis       | risk analysis      |
| Tenant             | party              |
| User               | user               |

## States

Domain objects can assume **common states** (in the sense of a **state machine**).\
Not all objects implement the full set of states; some have specific ones not listed here for brevity. The **lifecycles** of each object are detailed in their respective sections of the guide.

| API term                         | Meaning              |
| -------------------------------- | -------------------- |
| ACTIVE / PUBLISHED               | active               |
| ARCHIVED                         | archived             |
| DRAFT                            | draft                |
| PENDING / WAITING\_FOR\_APPROVAL | waiting for approval |
| REJECTED                         | rejected             |
| SUSPENDED                        | suspended            |

***

Next page [→ Service request (Agreement)](service-request-agreement.md)
