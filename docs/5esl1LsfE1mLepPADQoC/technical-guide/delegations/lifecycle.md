# Lifecycle

## States <a href="#dare-la-disponibilita-a-divenire-delegato" id="dare-la-disponibilita-a-divenire-delegato"></a>

A **delegation** can be in one of the following states:

* **Waiting for approval**: it has been sent by the delegator to the delegate, who has yet to evaluate it.
* **Active**: the delegate has taken over the e-service management on behalf of the delegator.
* **Rejected**: the potential delegate has decided not to take over the e-service management on behalf of the delegator. In rejecting the delegation request, they provide a reason for the refusal.
* **Revoked**: the delegator has withdrawn a previously granted delegation from the delegate and has regained control over the provisioning or usage of the e-service.

## Operations <a href="#dare-la-disponibilita-a-divenire-delegato" id="dare-la-disponibilita-a-divenire-delegato"></a>

### Offering availability to become a delegate <a href="#dare-la-disponibilita-a-divenire-delegato" id="dare-la-disponibilita-a-divenire-delegato"></a>

A **party** entitled to offer themselves as a delegate for provisioning or usage on behalf of other parties can navigate to _**My party**_**&#x20;>&#x20;**_**Delegation management**_, go to the _**Availability**_ tab, and change their availability status.

Offering availability does not imply that other parties can delegate autonomously. Each delegation must still be accepted (or rejected) by the party who offered availability.

By default, availability to act as a delegate is disabled for both provisioning and usage.

### Creating and forwarding a delegation <a href="#creazione-e-inoltro-di-una-delega" id="creazione-e-inoltro-di-una-delega"></a>

A party wishing to delegate to another party can go to _**My party**_**&#x20;>&#x20;**_**Delegation management**_, select the _**Delegations granted**_ tab, and click _**Create new**_.

Select the type of delegation to grant.

Then choose the e-service to be delegated and the party to delegate to. For provisioning delegations, if the e-service does not yet exist, entering its name will suffice to create it and make it delegable.

The delegator must also appoint the delegate as a data processor under GDPR. This appointment must be performed outside PDND.

You can then submit the delegation request for evaluation by the prospective delegate.

### Accepting or refusing a delegation <a href="#accettazione-o-rifiuto-di-una-delega" id="accettazione-o-rifiuto-di-una-delega"></a>

A party that has received a delegation request can navigate to _**My party**_**&#x20;>&#x20;**_**Delegation management**_, go to the _**Delegations received**_ tab, and expand the relevant delegation card.

They can then either accept it or reject it, providing a justification for the rejection, which will be communicated to the delegator.

### Revoking a delegation <a href="#revoca-di-una-delega" id="revoca-di-una-delega"></a>

A party wishing to revoke a delegation can go to _**My party**_**&#x20;>&#x20;**_**Delegation management**_, open the _**Delegations granted**_ tab. It can then expand the relevant delegation card, and click _**Revoke**_.

#### Consequences of the revocation of a delegation for producing for the delegate

The delegate loses visibility and the ability to operate on the e-service that they had been given to manage, and on the service requests and the purposes associated with it.

#### Consequences of the revocation of a delegation for producing for the delegator <a href="#conseguenze-della-revoca-di-una-delega-per-lerogazione" id="conseguenze-della-revoca-di-una-delega-per-lerogazione"></a>

The delegator regains the ability to manage the e-service that they had given to be managed, and the service requests and purposes associated with it. All objects pass back under the control of the delegator in the same state in which they are found (e.g., if the current version of the e-service is in “active” status, it remains in “active” status when returned to the delegator).

#### Consequences of the revocation of a delegation for producing for the other parties <a href="#conseguenze-della-revoca-di-una-delega-per-lerogazione" id="conseguenze-della-revoca-di-una-delega-per-lerogazione"></a>

There are no changes. Any revocation of the delegation for producing has no impact on the consumers of the e-service.

#### Consequences of the revocation of a delegation for consuming for the delegate <a href="#conseguenze-della-revoca-di-una-delega-per-la-fruizione" id="conseguenze-della-revoca-di-una-delega-per-la-fruizione"></a>

The service request is archived and the delegate loses visibility of it. The purposes that the delegate created are automatically archived and therefore can no longer be used to obtain vouchers for that delegation. Any clients associated with the purposes remain active but are disassociated from the archived purposes.

#### Consequences of the revocation of a delegation for usage for the delegator <a href="#conseguenze-della-revoca-di-una-delega-per-la-fruizione" id="conseguenze-della-revoca-di-una-delega-per-la-fruizione"></a>

The service request is archived. The purposes that the delegator created are also automatically archived and therefore can no longer be used to obtain vouchers for that service request. Any clients associated with the purposes remain active but are disassociated from the archived purposes.
