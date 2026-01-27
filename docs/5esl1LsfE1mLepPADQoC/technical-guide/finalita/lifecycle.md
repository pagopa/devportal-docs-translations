# Lifecycle

## States

A **purpose** can be in one of the following states:

* **draft**: it is being created and has not yet been sent to the producer.
* **active**: clients can be associated and vouchers can be obtained to be used with the producer’s API for that purpose.
* **suspended**: the producer or the consumer has temporarily blocked the use of this purpose for obtaining vouchers.
* **waiting for approval**: the entire purpose or one of its adjustments has an estimated load that exceeds the capacity of the producer’s infrastructure. It requires manual approval by the producer to be activated.
* **rejected**: the producer has determined that the submitted load estimate is too high compared to its capabilities and has rejected the purpose or one of its adjustments, providing a reason.
* **archived**: the consumer no longer intends to use this purpose to obtain vouchers.

## Operations

### Creating a draft and submitting the request

It is possible to submit new purposes for any e-service for which there is an active service request. If the submitted purpose has a load estimate lower than both thresholds set by the producer, it is activated automatically. For more details on the load and threshold mechanism, see the dedicated section.

Purposes can remain in draft indefinitely. Once they are submitted to the producer, they are automatically activated by the platform. This happens until the maximum load thresholds set by the producer are reached. When the declared load exceeds what the producer has stated it can support, they may choose to activate it manually.

The producer may also indicate a planned activation date, to inform the consumer how long it will take to adapt the infrastructure to handle the new load.

### Aggiornamento della stima di carico

It is always possible to update the load estimate, increasing or decreasing the number of API calls per day requested from the producer.

If the request exceeds one or both thresholds set by the producer in their e-service version, that adjustment will not be immediately active or usable. It will be up to the producer to approve it manually. For more information on the threshold and load mechanism, see the [dedicated section](../e-services/thresholds-and-load-estimates.md).

### Approvazione o rifiuto di una finalità sopra soglia

When the consumer submits a new purpose, it may be below both API calls/day thresholds set by the producer. In that case, it is activated automatically. Otherwise, it must be activated manually by the producer.

In this case, the producer can manually activate it or reject it, providing the consumer with a specific reason that will be visible on PDND. The consumer is still free to submit new purposes.

### Sospendere o riattivare una finalità

A purpose can be suspended and reactivated independently by either the consumer or the producer. To return to active status, it must be reactivated by the actor who suspended it.

For example, if a purpose is suspended by the producer, it must be reactivated by the producer for it to become active again. It is also possible for both actors to suspend the purpose. In this case, it must be reactivated by both for it to return to active status.

When a purpose is suspended, none of the associated clients can obtain vouchers for that purpose. This will also be indicated in the _client assertion debug tool_ in the back office if a client assertion related to the suspended purpose is entered.

### Archiviare una finalità

If there is no longer a need to access an e-service for a specific purpose, it can be archived. This action is irreversible, but it is always possible to create new purposes, even identical to the archived ones.

The result of archiving will be a reduction of the estimated load on the producer equal to the load estimate for that purpose. The consumer can then use that freed capacity for other purposes on the same e-service, provided the producer’s total threshold has not already been exceeded.

Archiving a purpose means that the keys deposited on the associated clients will no longer be usable to obtain vouchers from the producer for that purpose. However, they will continue to work for all other purposes to which they are associated.

{% hint style="info" %}
Remember to periodically review your purposes and archive the ones you no longer use. This small measure will help ensure better service quality for everyone.
{% endhint %}
