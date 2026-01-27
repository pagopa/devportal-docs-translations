# Attributes

Attributes are characteristics that a party possesses, e.g., _being a Municipality_. Producers can use these attributes to restrict access to their e-services, effectively treating them as access requirements.

When creating a new e-service, the producer defines which attributes are required as a necessary condition for the consumer to submit a service request. If the consumer possesses— or can prove they meet — the requirements, they may register to access the e-service.

Attributes can be of three types:

* **certified**: verified by an authoritative source;
* **verified**: require verification by the producer;
* **declared**: are self-declarations made by the consumer.

All attributes are grouped. If more than one attribute belongs to the same group, the consumer needs to possess only one to satisfy the access requirement.

For example, if an e-service requires a certified attribute group defined as _“Municipality”_ or _“Region”_, any party that has either certified attribute satisfies the requirement.

#### Certified attributes

These attributes rely on an authoritative source that certifies a member’s possession of a given attribute. This source is known as the **certifying authority** and is responsible for correctly validating the attribute.

For example, one of the attributes available in the IPA Catalog—which is a certifying authority—is _Municipalities and their Consortia and Associations_. If a producer includes this attribute among access requirements for an e-service, when a consumer submits a service request, PDND checks with the certifying authority to confirm the consumer actually possesses that attribute and reports the result on the platform.

For **public administrations** (**PAs**) and **public service providers** (**GSPs**), the main authoritative source is currently [IPA](https://indicepa.gov.it/ipa-portale/), the Italian Public Administration Index. The verification of these attributes for the consumer is performed automatically by PDND and cannot be overridden by PagoPA (the platform manager).

If the consumer believes that IPA failed to recognize an attribute correctly, they must contact the service manager (AgID) directly to request a correction.

For **private e-procurement managers**, the attribution depends on the certification [process](https://www.agid.gov.it/it/piattaforme/procurement/certificazione-componenti-piattaforme) of platform components published by AgID. Once completed, PDND is notified of the name of the party to associate with the certified attributes required by the producer. Similarly, PAs and public service providers wanting to have attributes recognized to access ANAC services must follow the AgID recognition process.

#### Verified attributes

Verification responsibility for these attributes lies with the producer and follows their own review processes.

In the draft version of the service request, the consumer can upload documentation to facilitate the producer’s verification.

#### Declared attributes

Responsibility for this attribute type lies entirely with the declarant, i.e., the consumer.

A producer may require multiple declared attributes from the consumer. For each, the consumer must explicitly declare possession before submitting the service request. The declaration is recorded by PDND as a “click.” It is not implicit—it requires an explicit action by the consumer.
