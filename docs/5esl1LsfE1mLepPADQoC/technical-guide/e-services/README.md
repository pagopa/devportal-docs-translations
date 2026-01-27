# E-services

E-services consist of two parts:

* A part containing **general information**, which includes essential details on how the e-service functions.
* A **versioned** part, managed through progressive automatic versioning; it contains data that are subject to change and evolve over time.

## Essential information

The general section requires:

* **Name and short description**: displayed within the _E-service Catalog_ on PDND.
* **Technology**: the technology used to develop the API through which the e-service will be provided, either REST or SOAP.
* **Mode**: whether the e-service handles data in **read** or **write**. If it writes, it means the producer receives data; if it reads, all endpoints return data to the subscriber. It is not possible to have a single e-service expose both read and write endpoints.
* **Risk analysis**: required only for services operating in **write** mode. In that case, the producer must indicate the use cases for which they plan to collect consumer data and complete the risk analysis questionnaire. More details are available in the [dedicated section](../finalita/risk-analysis.md).
* **Delegation authorization**: indicates whether consuming Public Administrations can delegate another Public Administration to complete administrative tasks (service request, purpose) on their behalf. More details in the [dedicated section](../delegations/).
* **Presence of data change notification (Signal Hub)**: indicates whether this e-service is integrated with the Signal Hub, enabling consumers to stay updated on changes to data of interest within the producer’s database. If disabled, the involved parties cannot write or read notifications via the Signal Hub. More details in the [dedicated guide](https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-signal-hub).

To ensure long-term robustness and service continuity, the values set in **technology** and **mode** cannot be modified once the first version of the e-service is published. However, it is still possible to create new e-services and archive obsolete ones.

## Version information

The versioned section requires:

* **API specification file for this e-service version**: must upload an OpenAPI file for REST services or a WSDL file for SOAP services, as indicated within the security perimeter of the ModI. This file contains the interface specification of the API the producer will expose in this version of the e-service.
* **Additional technical documentation**: the producer may attach supporting documentation for the API specification, such as a usage manual or examples. This is always recommended.
* **Changelog** (version description): a brief summary highlighting changes from the previous version(s).
* **Attributes**: list of access requirements the consumer must possess to have their service request activated and access the producer’s e-service. More details in the [dedicated section](../attributi/).
* **Policy for activating service requests**: by default, all service requests submitted by consumers are automatically activated if they possess all required access requirements; the producer may choose to activate them manually instead.
* **API call thresholds**: the expected load in API calls/day that the producer’s infrastructure can handle. More details in the [dedicated section](thresholds-and-load-estimates.md) describing the load estimation mechanism.
* **Voucher validity duration**: time period for which the voucher issued by PDND remains valid to access the service.
* **Audience parameter (`aud`)**: a standard claim representing the resource for which the request is authorized (e.g., a URL or unique identifier). The producer will receive this value in the voucher provided to the consumer by PDND.

All parameters can be updated over time only by creating a new version of the e-service, except for the **API specification file** and the **audience** parameter—those cannot be modified. **Attributes** (**access requirements**) may be changed without creating a new version only if they expand the pool of possible consumers.

More information on managing updates is available in the [dedicated tutorial](../../tutorials/producer/back-office/how-to-update-an-e-service.md).
