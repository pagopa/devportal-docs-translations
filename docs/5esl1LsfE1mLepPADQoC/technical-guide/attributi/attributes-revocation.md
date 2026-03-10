# Attributes revocation

## Revocation of a certified attribute

If PDND determines that a consumer no longer possesses an attribute previously recognized through the IPA Catalog or any other certifying authority, the status of the service request is automatically changed.

If the request was in draft or waiting for approval, it becomes _invalid_. To recover, either the IPA Catalog must recognize the attribute again, or the consumer can delete the draft.

If the request was waiting for approval at the time it became _invalid_, then upon renewed recognition of the certified attribute, it reverts to _draft_ and can be resubmitted to the producer.

## Revocation of a verified attribute

If the producer revokes a verified attribute that was previously accepted for the consumer, the request is not suspended immediately. PDND notifies all parties involved about the discrepancy. For example:

1. Producer A and Producer B both verified the same attribute for Consumer C;
2. Producer B revokes it;
3. A notification is sent to A, B, and C regarding the discrepancy in interpretation. PDND merely reports the issue without suspending any service requests. It's then up to the involved parties to resolve the situation.

{% hint style="warning" %}
This notification system is currently in development and is expected to be available by the end of 2025.
{% endhint %}

## Revocation of a declared attribute

The certification and revocation of declared attributes are the exclusive responsibility of the consumer.

If a consumer revokes a declared attribute while a service request is in draft and the attribute isn't strictly required, nothing changes. However, if the attribute is required, the request cannot be submitted until the attribute is declared again.

If the request is waiting for approval when the attribute is revoked, it reverts to draft. The consumer must declare the attribute again before it can be resubmitted.

If the request is active when the attribute is revoked, it is immediately suspended by the platform and cannot be reactivated by either the producer or the consumer. It will only be reactivated when the consumer declares the attribute again. If the request remains suspended, another actor (producer or consumer) may also have suspended it—and each actor who suspended it must manually reactivate it.
