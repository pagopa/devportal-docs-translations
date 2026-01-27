# Lifecycle

## States

An attribute can be:

* **never assigned to the party**: the party does not possess it and it has never been assigned;
* **possessed**: the party possesses the attribute;
* **not possessed**: the party previously possessed the attribute, but it has since been revoked, or the attribute was refused to the party upon the first recognition request.

## Operations

### Creation

Members can autonomously create verified and declared attributes. To be able to create certified attributes, they must be accredited as **certifying authorities**. For more information on this functionality, see the [dedicated section](certifying-authority.md).

If, during the creation of a new e-service, the desired attribute is not present in the database, it can be created and used immediately. The attribute will automatically be available in the archive for all other providers, who can use it for their own e-services.

### Revocation e reactivation

The revocation of an attribute results in the suspension of all service requests for which the attribute was an access requirement.

Conversely, the reactivation of the attribute entails the reactivation of all service requests previously suspended. The reactivation of the service request will not occur only in cases where there are other blocking factors. For example, if the service request had already been manually suspended before the attribute’s revocation, reactivating the attribute will not be enough to reactivate it; the service request itself will also need to be reactivated.

The management of verified attributes of consumers is the responsibility of the providers. Consumers, on the other hand, are responsible for managing their own declared attributes. Certified attributes are managed directly by the certifying party, and the platform merely processes any status changes.

For more details on the impact that attribute revocation has on service requests, see the [dedicated section](attributes-revocation.md).

### Refusal

This mechanism applies exclusively to verified attributes.

The provider can choose to independently verify the requirements, without relying on certifying parties or other providers: in this case, if the provider finds that the consumer does not meet the requirements for a verified attribute, they can refuse it. The presence of at least one refusal prevents the activation of the service request, making it unusable. The consumer can submit a new request for the same e-service, providing reasons and asking the provider to subsequently accept the previously refused attribute.
