---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/e-services
---

# E-services

## What it is and what it is for

An e-service is a digital service that enables communication and data exchange between Public Administrations through the National Digital Data Platform (PDND). Its purpose is to make data and digital functionalities of an administration (called _producer_) securely, standardly, and controllably available to other administrations or public entities (consumers).

E-services represent the core of the PDND interoperability model: each party can either produce or consume digital services from other parties, ensuring traceability, security, and centralized permission management.

## Structure

### General section

Contains the essential information required for the publication and operation of the e-service.

### Versioned section

Contains the technical information specific to each version of the service, including APIs, documentation, and operational thresholds.

## Required general information

The general section requires:

* **Name and brief description:** visible in the e-service catalog on the PDND platform.
* **Technology:** indicates whether the API is developed in REST or SOAP.
* **Mode:** specifies whether the e-service produces or receives data. If it produces, all API endpoints expose data. If it receives, all endpoints collect data.
* **Personal data provision (or reception)**: indicates whether the information supplied or received through the e-service qualifies as personal data. This declaration binds all parties to complete the risk analysis in accordance with this statement. More details are provided in the [relevant section](../finalita/risk-analysis.md#personal-data).
* **Risk analysis:** required only if the mode is “receiving.” In this case, the producer specifies the use cases for which it collects data from consumers and completes the dedicated questionnaire. More details are provided in the [relevant section](../finalita/risk-analysis.md).
* **Authorization for delegation:** specifies whether the consuming Public Administrations can delegate another administration to complete administrative tasks (_service request_, purpose) on their behalf. More details are provided in the [relevant section](../delegations/).
* **Presence of the data change notification service (Signal Hub):** indicates whether the e-service is integrated with Signal Hub, allowing consumers to receive notifications in case of data changes of their interest. More details are provided in the [relevant section](../signal-hub.md).

The values set for technology and mode remain unchanged after the publication of the first version of the e-service, ensuring service stability and consistency over time. However, it is possible to create new e-services and archive those no longer in use.

### Version information

The versioned section requires the following information:

* **API specification file for the version:** an OpenAPI file (for REST) or WSDL file (for SOAP) that technically describes the API exposed by the producer.
* **Additional technical documentation:** may include manuals, examples, or other supporting materials.
* **Changelog (version description):** a brief textual description of the changes introduced compared to previous versions.
* **Attributes:** a set of access requirements that the consumer must meet to activate the service request. More details are provided in the relevant section.
* **Activation policy for service requests:** by default, requests are automatically activated if the consumer meets the required criteria. The producer may choose to activate them manually.
* **API call thresholds:** indicate the maximum load, expressed in API calls per day, that the infrastructure can handle. More details are provided in the relevant section.
* **Voucher validity period:** indicates the validity period of the voucher issued by PDND, which allows access to the service.
* **Audience parameter (aud):** standard claim that identifies the resource for which the request is authorized. The producer will receive this value within the voucher issued to the consumer by PDND.

All parameters can be updated over time without creating a new e-service version, except for:

* the API specification file,
* the audience parameter,
* the attributes, which may be modified without a new version only if the change expands the group of consumers.

More information on update management is available in the dedicated tutorial.

### Update rules

* E-services are automatically versioned in sequential order.
* PDND allows the creation of new versions for structural changes while maintaining consistency among published versions.
* It is possible to archive inactive versions and publish new ones.

***

Next page [→ Operations and lifecycle](operations-and-lifecycle.md)
