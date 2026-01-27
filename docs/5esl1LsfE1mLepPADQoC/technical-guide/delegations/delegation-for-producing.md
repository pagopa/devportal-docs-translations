# Delegation for producing

The delegation for producing allows a party to delegate the administrative operations related to the provisioning of an e-service on the platform. The delegation does not concern the technical component of provisioning, that is, the construction and management of the API to which the e-service refers and any technical interactions with subscribers. These may be managed by the delegator as they see fit.

In the case of delegation for producing, the delegate:

1. creates and manages e-service versions;
2. publishes e-service versions (subject to approval by the delegator);
3. evaluates and manages incoming requests for subscribing;
4. evaluates and manages incoming purposes with related risk analyses.

Within the AgID Guidelines, this functionality is called “Delegato dell’Erogatore”.

## Day-to-day management <a href="#delega-per-lerogazione-gestione-del-day-by-day" id="delega-per-lerogazione-gestione-del-day-by-day"></a>

### The delegate

#### Publishing an e-service or its version

The party that has received a delegation for producing of an e-service manages its entire life cycle on the platform as if they were the provider. The only exception is this: the publication of a new version of the e-service occurs only after approval by the delegator.

#### Managing requests for subscribing

The delegate manages requests for subscribing arrived for the e-service received in delegation on behalf of the delegator. This means that the delegate must approve, on behalf of the delegator, any verified attributes and will have the ability to suspend and reactivate the requests for subscribing present.

#### Managing purposes

The delegate manages purposes received for active requests for subscribing. They can therefore suspend them, reactivate them, accept or reject proposed plan changes by the subscriber.

### The delegator <a href="#il-delegante" id="il-delegante"></a>

#### Visibility and operability <a href="#il-delegante" id="il-delegante"></a>

The delegator retains visibility over both the e-service and the related requests for subscribing and purposes. They cannot act on any of these components, except to approve or reject the publication of a new version of the e-service, or to manage the provider key store.

#### Approval for the publication of an e-service or its version

Once a delegate has finalized a draft of a new version of the e-service, they forward it to the delegator for approval. The delegator may approve the version, which thus becomes published and present in the e-service catalog. They may also reject it, giving reasons for the choice. Once a version of the e-service is rejected, it returns to the delegate in a “draft” state, with the detail of the reason for rejection.

#### Managing the producer keychain

The delegator retains the exclusive opportunity to operate on the producer keychain for the e-services given in delegation. The delegate will not have access to this functionality.
