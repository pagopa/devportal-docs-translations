# Lifecycle

## States

Keychains do not have defined states. They can be created and destroyed, or associated and disassociated from e-services at the discretion of administrators of the party.

## Operations

### Creation of a keychain

Keychains can be created via **Producing > Producer Keychains**.

To create one, simply enter a name and a description to help you identify it.

You can add or remove technical personnel to the keychain during creation or later.

It's always possible to create new keychains—even with the same characteristics as previously deleted ones.

### Deletion of a keychain

An administrator can always delete a keychain completely. Upon deletion, it immediately loses the ability to sign responses for all associated e-services, and all public keys contained within the keychain are removed.

### Associating a keychain with an un e-service

Public keys in keychains can sign responses only for e-services to which the keychain is associated.

Within each e-service, in producing mode under the _**Keychains**_ tab, you can click _**Add**_ to associate an existing keychain. All keychains created via _**Producing > Producer Keychains**_ will be listed.

Once associated, the keychain can sign responses to consumers for requests made to that e-service.

Each keychain can be associated with multiple e-services simultaneously.

### Disassociating a keychain from an un e-service

An administrator can disassociate a keychain from an e-service at any time via the e-service's _**Keychains**_ tab.

Upon disassociation, the keychain is not deleted—it simply can no longer sign responses for that e-service, but remains functional for other associated e-services.

### Adding a user to a keychain

An administrator can always add new users to a keychain—but only if they are already registered in PDND.

To add a new user not yet registered, they must first be added through the _Members Area_ platform. More information in the [dedicated section](../../back-office/utenze.md).

### Removing a user from a keychain

An administrator can remove any user from a keychain at any time. Removing a user from the keychain does not delete their account—that is managed via the _Members Area_.

When a user is removed, PDND highlights the public keys they had uploaded and prompts their replacement to ensure response-signing keys are kept secure.

### Adding a public key

Any user associated with a keychain can upload public keys. The public key becomes part of the cryptographic assets used to sign responses sent to e-service consumers.

The corresponding private key is kept securely by the party and used to sign responses.

### Deleting a public key

A user who has uploaded a public key may choose to delete it. An administrator can delete any key from any member within the keychain.

Once deleted, the key can no longer be used, and any response received by the consumer will not be verifiable due to the missing public key.
