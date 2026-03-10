# Lifecycle

## States

I client non hanno veri e propri stati. Possono essere creati e distrutti, associati e disassociati dalle finalità a discrezione degli amministratori dell'ente.

## Operations

### Creating a client

E-service clients can be created from _**Client management**_**&#x20;>&#x20;**_**E-service APIs**_. Clients for PDND APIs can be created from _**Client management**_**&#x20;>&#x20;**_**PDND APIs**_.

To create a client, simply enter a name and a description that help you identify it.

It is possible to add and remove technical staff from the client both at the time of creation and afterwards.

It is always possible to create new clients, even with identical characteristics to clients that have already been deleted.

### Deleting a client

An account with administrator role can always completely delete a client. When a client is deleted, it immediately loses the ability to obtain vouchers for all purposes to which it was associated. All public keys contained in the client are deleted.

### Associating a client with a purpose

The public keys contained in e-service clients can obtain vouchers valid only for the purposes with which the client itself is associated.

Within each purpose, the feature to associate clients is always available. You can open the page for the specific purpose, go to the _**Associated clients**_ tab, and click _**Add**_. The list will show all e-service clients previously created from _**Client management**_**&#x20;>&#x20;**_**E-service APIs**_.

From the moment a client is associated with a purpose, it can request valid vouchers to be used for the e-service under that purpose.

Each client can be associated with multiple purposes at the same time.

### Disassociating a client from a purpose

An administrator can always disassociate a client from a purpose. This can be done by opening the specific purpose, going to the _**Associated clients**_ tab, selecting the client of interest, and disassociating it.

When a client is disassociated from a purpose, it is not deleted. It simply stops being able to obtain vouchers for the purpose from which it has been disassociated, while continuing to function correctly for all other purposes.

### Adding a user to a client

An administrator can always add new users to a client. Only users already registered in PDND can be added to clients.

If you want to add a completely new user, it must first be registered on the Members Area platform. More information can be found in the [dedicated section](../back-office/utenze.md).

### Removing a user from a client

An administrator always has the option to remove users from a client. Removing a user from the client does not entail deleting the account altogether, which must be managed from the Members Area platform.

When a user is removed from a client, PDND highlights the public keys uploaded by the removed account and prompts their replacement. This is to ensure that the keys used to obtain vouchers are always secure.

### Adding a public key

Any user added to a client can upload public keys. The public key will be part of the cryptographic material needed to obtain vouchers from PDND.

The private key corresponding to the public one will be kept secure by the party. The party will use it to sign requests to obtain vouchers from PDND.

### Deleting a public key

A user who has uploaded a public key can choose to delete it. An administrator can delete the keys of any other member present in the client.

From the moment the key is deleted, it is no longer usable. Any voucher request made to PDND with the private key corresponding to the public key just deleted will return an error.
