# Delegation for consuming

The delegation for subscribing allows a party to delegate the administrative operations related to the subscribing to an e-service.

In the case of delegation for consuming:

1. the delegate submits and manages the subscribing request for the e-service for which they have received the delegation;
2. the delegator and the delegate submit and manage the purposes with related risk analyses (each independently);
3. the delegator associates clients with the purposes that they have created;
4. the delegate associates clients with the purposes that they have created in delegation (only if the provider expressly allows it).

Within the AgID Guidelines, this functionality is called “Delegato del Fruitore”.

{% hint style="warning" %}
The delegation for consuming is possible only for e-services for which the subscribing request of the delegator is in active status.
{% endhint %}

## Day-to-day management <a href="#delega-per-la-fruizione-gestione-del-day-by-day" id="delega-per-la-fruizione-gestione-del-day-by-day"></a>

The delegation for consuming may not be available for all e-services. It is at the producer’s discretion to indicate, within the configuration, whether they authorize the granting of delegations for consuming to their e-service.

### The delegate <a href="#il-delegato-1" id="il-delegato-1"></a>

#### Managing the subscription request <a href="#il-delegato-1" id="il-delegato-1"></a>

The delegate manages the subscribing request for the e-service received in delegation on behalf of the delegator. They can declare any declared attributes and upload documentation for the verification of any verified attributes on behalf of the delegator. They have the ability to submit, suspend, reactivate, or archive the subscribing request.

#### Managing purposes

The delegate manages the purposes for the e-service received in delegation on behalf of the delegator. They can complete the risk analyses, select the load estimate (estimated API calls per day). They can submit, suspend, reactivate, or archive the purposes.

#### Managing clients and data access

The delegate can associate clients with the purposes that they have created in delegation only if the producer has expressly given their consent, authorizing data access for the e-service. As a cross-check, it is possible to go to the e-service page and verify whether the “Access to data for the e-service” entry allows it or not.

### The delegator <a href="#il-delegante-1" id="il-delegante-1"></a>

#### Visibility and operability <a href="#il-delegante-1" id="il-delegante-1"></a>

The delegator retains visibility over both the service request and the purposes created by the delegate. They cannot act on any of these components, except to associate their own clients with the purposes created by the delegate within the scope of the granted delegation.

#### Managing purposes

The delegator can independently create their own purposes for the service request managed by the delegate. The purposes created by the delegator will not be visible to the delegate, and are regularly managed by the delegator, who can activate, suspend, and archive them at their discretion.

#### Managing clients and data access

The delegator can always associate their own clients with both the purposes created by the delegate and their own purposes.
