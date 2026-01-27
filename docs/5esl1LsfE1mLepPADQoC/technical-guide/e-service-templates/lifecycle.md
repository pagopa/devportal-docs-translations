# Lifecycle

## States

An **e-service template** can be in the following states:

* **draft**: the template is under creation and is not yet available to producers;
* **active**: the template can be instantiated by producers;
* **suspended**: the template cannot be instantiated by producers;
* **archived** (state not yet available): the template is no longer available in the template catalog.

## Operations

### Publishing a new template version <a href="#pubblicazione-di-una-nuova-versione-di-template" id="pubblicazione-di-una-nuova-versione-di-template"></a>

When a new template version is published, the previous version is automatically withdrawn. This means that new instances cannot be created from that version, and instances cannot be updated to that version anymore.

### Creation and management of versions <a href="#creazione-e-gestione-delle-versioni" id="creazione-e-gestione-delle-versioni"></a>

An e-service template behaves almost like an e-service. As long as it is in draft state, it is visible only to its creator. When the first version is published, it becomes available in the template catalog, and parties can instantiate their own e-service based on the template.

**If an e-service template needs structural changes** (e.g., change to the API interface file), **a new version must be published**.

The main difference from a simple e-service is that the fields to fill out are divided into required, suggested, and to complete.

**Locked fields** are filled in by the template creator and cannot be changed by the parties instantiating the e-service. The required fields are:

* e-service: name, description, technology, mode, purpose (only in the case of receiving data);
* e-service version: description, attributes, API interface, voucher duration, technical documentation.

**Fields with suggestions** relate to day-to-day management by the producer. The party instantiating the template can choose to accept the creator’s suggestion or adjust the values at their discretion. The suggested fields are:

* e-service: [Signal Hub](../integrations.md#signal-hub) availability;
* e-service version: API calls per day thresholds, policy for activating service requests.

**Fields to complete** are specific to each individual party. In this case, it is the e-service provider who must complete them. The fields to complete are:

* e-service: delegation authorization;
* e-service version: audience, API interface completion fields (server URL, contact name and address, terms and conditions URL).

For more details on the structure of the e-service, see the [dedicated section](../e-services/#informazioni-essenziali).

### Suspension and reactivation <a href="#sospensione-e-riattivazione" id="sospensione-e-riattivazione"></a>

When an e-service template is suspended, it is no longer available for creating new e-service instances. The change takes effect immediately and does not impact previously created instances, even those in draft state.

A suspended e-service template can be reactivated at any time.

### Using your own template <a href="#utilizzare-un-proprio-template" id="utilizzare-un-proprio-template"></a>

A party that has created a template can also use an instance of it for itself. The constraint is that it can instantiate only one e-service from its own template, to prevent the producer from having multiple e-services with the same name and purpose. Cases involving e-services received through delegation, as described in the [dedicated section](../delegations/), are exceptions.
