# Lifecycle

## States

An e-service version can be in one of the following states:

* **draft**: it is being created and has not yet been published. If this is the first version of the e-service, it means that the entire e-service is not yet available in the _E-service Catalog_;
* **published**: the new version of the e-service is the current one. All parties interested in subscribing to the e-service from scratch will subscribe to this version. All parties already subscribed will be notified to update their request to the most recent version of the e-service;
* **deprecated**: a version of the e-service that is still active but not the most recent one; those subscribed to this version can continue to use it until it is archived;
* **suspended**: the producer has temporarily blocked the use of this version of the e-service;
* **archived**: the version of the e-service has been withdrawn from the catalog and is no longer in use.

There is also another state, available only in the delegation flow:

* **waiting for approval**: the delegate has finalized the draft of a new version of the e-service they manage and submitted it to the delegator for approval. When the delegator approves it, it will change to the **published** state and become the current version of the e-service.

## Operations

### Creating and publishing a draft

The lifecycle of an e-service begins with the **creation of a draft**. While in the draft state, it is not yet available to consumers.

The draft of an e-service can be deleted in two cases:

* **If there is already at least one published version**, only the draft of the new version being worked on can be deleted.
* **If the service is still at its first version and has never been published**, it is possible to delete the entire e-service.

Once completed, the e-service can be **published immediately** or later.

If it is published, it moves to the active state (**published**), becomes available in the _E-service Catalog_, and can be used by consumers.

### Creating a new version and deprecating the previous one

After an e-service is published, to make structural changes (e.g., to the API interface), **a new version must be created**. When a new version is published, the previous one becomes **deprecated**, remaining available until all consumers have updated their service requests. That e-service version will be automatically archived by PDND when the last consumer has archived their service request.

E-service versions are **automatically numbered** by the platform in ascending order.

Releasing a new version of an e-service does **not automatically update** all consumers. This is because each new version may differ from the previous one, and an automatic update could cause disruptions if the API or the audience has changed. Users have the option to manually update their service request to the latest version of the e-service when they believe their integration is stable.

### Cloning

To facilitate the management of similar services, it is possible to **clone an e-service**, modify some parts, and publish it as a new, independent service.

The new e-service will start its numbering from version 1, regardless of the number of versions released in the service it was cloned from. The _Clone_ option can be found among the actions available for your e-service.

### Sospensione e riattivazione

The producer can **suspend** a version of an e-service in **active** or **deprecated** state, temporarily interrupting access to the service. A suspended version can be **reactivated**, restoring access for consumers.

For scheduled suspension (for example, for maintenance), the Guidelines require that the producer give prior notice to consumers:

> The producer MAY temporarily suspend the availability of the e-service by notifying the consumer in advance of this circumstance, in compliance with the conditions possibly indicated in the SLAs agreed with the consumer outside the PDND infrastructure ([LLGG AgID](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto_allegati/213481832130O__O20211210_LG+Infrastruttura+Interoperabilit%26%23224%3B+PDND_v1_allegato+2.pdf) – annex 2, chapter 4, p. 17).

{% hint style="warning" %}
The suspension of a version of an e-service results in a service interruption for consumers and all intermediate and end users who use their e-services.
{% endhint %}
