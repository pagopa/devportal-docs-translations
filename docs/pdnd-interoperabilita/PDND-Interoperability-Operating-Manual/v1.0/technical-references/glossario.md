# Glossary

### Administrator (administrative operator)

During the subscription process, it is possible to designate **up to three Administrators** (referred to as **administrative operators** in the AgID Guidelines), who are **delegated by the Legal Representative** to operate with **full privileges** on the platform. More details are provided in the dedicated section.

### API Operator

A **technical account** belonging to a party that operates in **producing mode**. It can **manage the e-service lifecycle** on behalf of **users with administrative privileges**. More details are provided in the dedicated section.

### Attribute

An **attribute** is a quality possessed or declared by a party. When creating an **e-service**, the producer **defines the access requirements** that the consumer must possess or declare to possess for the acceptance of the **service request**; these requirements are the **attributes**.

### Certifying body

A **certified entity** authorized to **create certified attributes** and to **assign or revoke them** for other parties.

### Client

A **client** groups together a **set of security operators** and a **set of keys**. Its composition is **managed by the administrators** of the party; the **same security operator** may be **associated with one or more clients**. Each **client** (and, consequently, its **set of keys**) may be **associated with one or more purposes**.

### Consumer

A party that **consumes e-services** made available by the **producer** through the PDND.

### Digital Administration Code (CAD)

A collection of regulations governing the use of digital technologies within the **Public Administration** and in relations between **citizens, businesses, and the PA**. **Article 50-ter** governs the **PDND**; other articles define **national databases** and the **categories of eligible parties**. More details are available in the dedicated section.

### E-service

It is a **digital service** made available by a public administration or a subscribing party, which enables the automatic and secure exchange of data and information between different administrations or between public parties and authorized private entities.

The e-service represents the logical unit for producing and consuming data within the PDND: through it, a party can expose (produce) or request (consume) data in a standardized way, according to the technical rules and protocols defined by the platform.

### E-service catalog

The centralized collection point for **all e-services** available on the PDND. Each party may **subscribe** to the e-services for which it **meets the minimum access requirements** (i.e., **possesses all required attributes** defined by the producer). In the AgID Guidelines, it is referred to as the **“API Catalog”**; a [**public version**](https://www.interop.pagopa.it/catalogo) is available for consultation.

### Front office

The user interface of the **PDND**, accessible through the **Members Area** of PagoPA, used to **manage the lifecycle** of e-services and related operational activities.

### Guidelines on the technological infrastructure of the PDND

Guidelines that **govern** the operation of the **PDND** as an enabler of **interoperability** among **Public Administrations**, **Public Service Managers**, and **private entities** that access or provide data. They constitute one of the **operational specifications** derived from AgID’s **Interoperability Model (ModI)**. More details are provided in the dedicated section.

### Interoperability Model (ModI)

A strategic reference document that defines the **principles, rules, and standards** to ensure **interoperability** among public administration information systems. The principles of ModI are **translated** into **operational specifications** through the **Guidelines**, including those on the technological infrastructure of the PDND. More details are available on [AgID’s dedicated page](https://www.agid.gov.it/it/infrastrutture/sistema-pubblico-connettivita/il-nuovo-modello-interoperabilita) and in the dedicated section.

### Producer

A party that **makes e-services available** to other parties through the PDND, for the **consumption of information** it holds or for **process integration**. A party may operate **simultaneously** as a **producer** for some e-services and as a **consumer** for others.

### Purpose

A declaration through which the **consumer** specifies the **reasons and methods** of accessing the information held by the producer. The purpose is **associated** with an e-service for which the consumer has an **active service request**.

### Security Operator

A **technical account** dedicated to managing cryptographic material. It can **view only** the **clients** and **keychains** to which it is **associated** and, for these objects, manage its own cryptographic material. More details are provided in the dedicated section.

### Service Level Agreement (SLA)

An agreement on **service levels** that defines the **minimum performance standards** guaranteed for a digital or technological service.

### Service request

A formal request through which a party **asks to access** an e-service **published** by another party via the PDND. The request is **verified** by the platform and the producer, and if **approved**, it becomes **active**. An **active request** allows the creation of **purposes** for consuming the e-service.

### Subscription

To use the functionalities of the **PDND**, the party **completes the subscription** by following the dedicated procedure and **uploads the Membership Agreement**. Once enabled, the party can operate **as both a producer and a consumer**.

### Voucher (JWT token)

Within the context of the PDND, the **voucher** is a **JWT token** issued by the platform to the **consumer**, to be **included in each API call** to producers in order to **obtain or send data**. The voucher **contains** the information required by the producer to **verify the consumer’s identity**, the **requested resource**, and the **purpose** of the request.

***

Next page [→ Platform APIs](api-esposte-da-pdnd-interoperabilita/)
