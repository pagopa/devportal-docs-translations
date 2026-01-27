# Users

## User management

The menu item to manage users (_Users — Utenze_) is accessible only to administrators in the PDND back office left sidebar. Clicking it redirects you to the Members Area platform, where users are centrally managed across all PagoPA products.

Here, you can [create new administrators](../../tutorials/how-to-create-a-new-administrator.md) or [new operators](../../tutorials/utenze.md).

{% hint style="warning" %}
To access the Members Area, your organization must have completed the subscription process to PDND. If you're unsure how, follow the [_guide to joining_](../../tutorials/guida-alladesione.md).
{% endhint %}

## User roles

There are three roles: Administrator, API Operator, and Security Operator.

### Administrator

Referred to as "operatore amministrativo" in the AgID Guidelines. Administrators are delegated by the legal representative to operate on PDND with full authority.

While subiscribing the membership agreements, only up to three administrators can be specified. Additional administrators can be added or removed later via the Members Area.

Administrators can manage all administrative aspects for the organization, including submitting, suspending, and reactivating service requests, creating clients and purposes, adding/removing/suspending operators, and completing risk analyses.

They may also delegate technical tasks to other user types: API Operator or Security Operator.

### API Operator

A technical user dedicated to managing e-services on behalf of administrative users. They can:

* Manage the e-service lifecycle (publish new versions, suspend, reactivate).
* Approve load estimates associated with purposes submitted by consumers that require manual approval.

### Security operator

A technical user responsible for managing cryptographic material.

While acting on behalf of a consumer, it can upload public keys to clients. With these keys, the Security Operator can complete the process to obtain a voucher valid for all purposes linked to those clients — or a voucher usable with PDND APIs.

While acting on behalf of a producer, it can upload public keys to the producer's keychain. The Security Operator can sign responses sent by a producer to a consumer, who can then verify the response's integrity by retrieving the corresponding public key from the keychain.
