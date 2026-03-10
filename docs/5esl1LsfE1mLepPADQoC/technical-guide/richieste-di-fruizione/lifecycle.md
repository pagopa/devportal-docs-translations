# Lifecycle

## States

A service request can be in one of the following states:

* **Draft**: it is being created and has not yet been submitted to the producer. The member can always delete requests in draft status.
* **Pending approval**: it has been submitted to the producer, who must evaluate the request and possibly activate it.
* **Active**: the request is active and has been activated either by the producer or by PDND, depending on how the approval policy for service requests has been configured (for more information, [see the version settings](../e-services/#informazioni-di-versione) of the e-service). When a service request is active, new purposes can be created for that e-service.
* **Suspended**: the producer, the consumer, or the platform has temporarily blocked the use of this request.
* **Archived**: the consumer no longer needs access to the e-service and has withdrawn their request. They can always submit a new one.

There is also another state, required only for the platform's technical functioning:

* **Missing certified attributes**: this occurs when a party loses a certified attribute required for the e-service while the request is in draft status or pending approval. In that situation, the party has lost one of the minimum access requirements, and the platform prevents the request from being submitted to the producer until the revoked certified attribute is reassigned.

## Operations

### Creating a draft and submitting the request

It is possible to subscribe to e-services in the _E-service Catalog_ under two conditions:

* that the party does not already have an active service request for the same e-service;
* that the party meets the minimum requirements for subscription.

A draft service request can only be created if PDND verifies that the party possesses all the certified attributes required by the e-service. The party must then:

* self-declare possession of the required declared attributes;
* upload the necessary material for the producer to verify any required verified attributes.

Once the draft is complete, it can be submitted to the producer for approval.

#### Subscribing to one's own e-service

A party can always subscribe to its own e-services as a consumer without the attribute verification step. This mechanism is designed to allow parties to subscribe to their own e-services without additional burdens, also to simplify monitoring operations.

### Approval or rejection of a service request

A consumer’s service request can be approved either automatically or manually. The producer can change this setting in the e-service version, under the service _request approval policy_ (automatic or manual).

If approval is manual, the producer must manually activate the request. This occurs whether the party already possesses all the required attributes or if there are verified attributes that the producer must review.

If approval is automatic, PDND will perform the necessary checks. If the prospective consumer already possesses all the required attributes (certified, verified, declared), the request will be immediately activated. Otherwise, it will fall into the manual approval flow and await producer review.

The producer may reject a service request if, in their judgment, the consumer does not possess all the required attributes. They must, however, provide a reason, and the consumer may submit a new request by updating the documentation and/or motivations.

{% hint style="info" %}
It is possible to contact the producer directly using the contacts listed in the _General Information_ section (_View producer contacts_).
{% endhint %}

### Upgrading a service request

An update is necessary when a producer publishes a new e-service version. In such cases, the consumer will find an _**Upgrade**_ button in their service request’s page.

This is because the request is closely tied to the version of the e-service for which it was submitted. If a request was submitted for version 5 of an e-service and that e-service is updated to version 6, an update is required.

When the consumer updates the service request to the most recent e-service version, all their purposes will be migrated and will then use the new version. The operation is irreversible.

Special attention should be paid: a producer publishes a new version of an e-service when something changes in the access requirements (attributes) or in the API interface it exposes to consumers. Usually these are extensions, but it is also possible for the new API version to contain “breaking” changes, potentially interrupting the consumer’s flow. It is always best practice to check the changelog (version description) and the updated interface file to understand the changes before updating.

If the producer publishes multiple versions, the update always applies to the latest one. For example:

* the consumer is subscribed to version 3 of the e-service;
* the producer publishes version 4 of the e-service;
* the producer publishes version 5 of the e-service.

At this point, if the consumer updates their service request, the update will go directly to version 5, skipping version 4. The intended logic is that **subscription is always to the most recent version of the e-service published** in the _E-service Catalog_.

For some e-services, producers provide a test environment version. In such cases, testing can be done there before applying updates in production.

### Archiviare una richiesta di fruizione

A service request can be archived in two ways: automatically or manually.

Automatic archiving occurs when the consumer updates their request to the latest e-service version. In this case, the request for the previous version is automatically archived, and all purposes are associated with the new request.

Manual archiving can be performed by the consumer when they no longer need the service. They can still create a new service request in the future, provided they do not already have an active one for the same e-service.

For both organizational and security reasons, it is best practice to archive service requests for e-services the party no longer uses.

### Suspending or reactivating a service request

Suspension of a service request can be carried out by one or more actors: the producer, the consumer, or the platform (i.e., PDND). If at least one actor suspends a request, it remains suspended. Only the actor who suspended it can reactivate it.

Thus, if a service request is suspended by the producer, only the producer can reactivate it.

In general, these are the suspension rules:

* **suspension by the producer**: occurs when the producer manually suspends a service request;
* **suspension by the consumer**: occurs when the consumer manually suspends a service request;
* **suspension by the platform**: occurs when the platform detects that:
  * the producer has revoked one or more verified attributes from the consumer;
  * the consumer has self-revoked one or more declared attributes;
  * an authoritative source has revoked one or more certified attributes from the consumer.

To reactivate a service request, all actors who suspended it must request its reactivation: if a request is suspended by both the producer and the platform, it is not enough for the producer to reactivate it; the platform must also do so.

Additionally, all required attributes for the service request must be granted: if a producer tries to reactivate a consumer’s service request after revoking a verified attribute from them, reactivation will fail. The attribute must first be verified again before the request can be reactivated.
