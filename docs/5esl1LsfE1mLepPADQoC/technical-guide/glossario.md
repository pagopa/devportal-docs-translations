# Glossary

## Membership

To access the functionalities provided by PDND, an entity must first complete the subscription process to the platform by uploading its membership agreement. Once enabled, it can act both as a producer and as a consumer.

## Administrator (administrative operator)

At the time of access onboarding, it is possible to designate up to three administrators (referred to as _administrative operators_ in the AgID Guidelines). These users are effectively delegated by the legal representative to operate with full authority on PDND.

Users with these permissions can submit, suspend, and reactivate service requests, create clients and purposes, add, remove, or suspend operational roles, fill out risk analyses, and perform all operations accessible to users with lower privilege levels.

## Attribute

An attribute is a quality that an entity possesses or declares to possess. The producer, when creating an e-service, sets which access requirements (attributes) the consumer must possess or declare to possess for the service request to be accepted. These access requirements are the attributes.

## Back office

The PDND user interface, accessed via the PagoPA Members' Area Platform (Piattaforma Area Riservata).

## E-service Catalog

The centralized repository of all e-services available on PDND. Any entity can virtually subscribe to any e-service for which it satisfies the minimum access requirements, i.e., possesses all the attributes requested by the producer.

In the AgID Guidelines, this is called the "Catalogo delle API" (Catalogue of APIs). A [public version](https://www.interop.pagopa.it/catalogo) is available for browsing.

## Client

Each client groups a set of security operators and a set of keys. Administrators of an entity can manage client composition at will and can associate the same security operator with multiple clients. Each client (and, by extension, each group of keys) can be associated with one or more purposes.

## Digital Administration Code — C.A.D.

A set of regulations governing the use of digital technologies in Public Administrations and in relations between citizens, businesses, and the PA. Article 50-ter is dedicated to PDND. Other articles define national databases of interest and the entities who must join.

## E-service

The term _e-service_ refers to services listed in the catalog. Each e-service is managed by a member who defines access requirements (attributes), the use case, and the structure of the API through which consumers access the producer’s information.

## Certifier (Certifying Body)

A party member of PDND who is authorized to create new certified attributes. The certifier can then assign and revoke the created attributes for other parties.

## Producer (erogatore)

A member that makes e-services available to others through PDND for consuming their information or integrating processes. A member can simultaneously act as a producer for some e-services and as a consumer for others.

## Purpose

A declaration submitted by the consumer detailing their reasons and methods for accessing information held by the producer. A purpose is usually associated with an e-service for which the consumer has an active service request.

## Consumer (fruitore)

A member that consumes the e-services made available by a producer via PDND.

## **AgID Guidelines on the technological infrastructure of the National Digital Data Platform (PDND)**

Named _Linee Guida sull’infrastruttura tecnologica della Piattaforma Digitale Nazionale Dati per l’interoperabilità dei sistemi informativi e delle basi di dati_ in Italian.

These guidelines regulate the functionality of PDND as an enabling tool for interoperability among Public Administrations, public service providers, and private entities accessing or providing data. They are one of the operational specifications derived from the Interoperability Model (ModI) defined by AgID.

The latest version is available [here](https://trasparenza.agid.gov.it/page/103/details/5374/adozione-delle-linee-guida-sullinfrastruttura-tecnologica-della-piattaforma-digitale-nazionale-dati-per-linteroperabilita-dei-sistemi-informativi-e-delle-basi-di-dati.html) (Italian only).

## Interoperability Model — ModI

The strategic reference document that establishes the principles, rules, and standards to ensure interoperability among the IT systems of Public Administrations. The principles of ModI are implemented in operational specifications through the Guidelines. The _Guidelines on the technological infrastructure of the National Digital Data Platform (PDND)_ are among them.

More details are available on the AgID website [dedicated page](https://www.agid.gov.it/it/infrastrutture/sistema-pubblico-connettivita/il-nuovo-modello-interoperabilita) (Italian only).

## API Operator

A technical user role that supports the producer administrators with regards to managing the e-services lifecycle.

## Security operator

A technical user role that supports the consumer administrators. It is dedicated to managing cryptographic keys and related material on PDND. They can only view the clients which they are associated with. For those clients, they can upload and delete public keys. Those keys can be used to obtain a valid voucher covering all purposes associated with those clients.

## Service request

A formal request submitted by a party to access an e-service that another member published on PDND. The request is evaluated by the platform and the producer, and only activated following successful checks. An active service request enables the creation of associated purposes to consume the e-service.

## **Service Level Agreement —** SLA

A Service Level Agreement is a **contract on service levels** between a provider and a client, defining the minimum performance standards guaranteed for a digital or technological service.

## Voucher (JWT token)

Within PDND, a voucher is a JWT token that the platform issues to a consumer. The consumer uses this voucher in every API call to the producer to obtain or send data.

The voucher contains all information needed for the producer to verify the consumer’s identity, the requested resource, and the purpose of the request. PDND guarantees issuance only if all authorization chain conditions are met (active e-service, active subscription, purpose completed and active, associated client, uploaded key, and correctly formatted and signed request).
