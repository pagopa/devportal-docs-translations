# Retrieve identifiers for verifications

### Goal

To perform the verifications required on **PDND**, the producer uses several **unique identifiers** related to specific components of the ecosystem.

### Environments and variability

The **IDs differ for each environment** (validation, testing, production).\
It is therefore necessary to use the identifiers **corresponding to the environment** in which the verification is performed.

### Where to find them in the front office

* **Producing e-service section** (_Producing → Your e-services_):
  * `producerId`
  * `eserviceId`
  * `descriptorId`
  * `aud` (_audience_)
* **Producing purpose section** (_Producing → Purposes_):
  * `purposeId`
  * `consumerId`

### Access via APIs

All parameters are also available through the **PDND APIs**, allowing integration within **automated verification workflows**.

### Stability and information profile

The identifiers **do not change over time** and **do not contain sensitive information**; they are designed to be **stably referenced** in application-level checks.

### Operational efficiency

* **Caching**: it is recommended to **cache the IDs** to improve verification performance.
* **Synchronization**: it is possible to **use the update notifications** exposed by the APIs to detect configuration changes and keep local records aligned.

***

Next page [→ Focus on DPoP](focus-on-dpop.md)
