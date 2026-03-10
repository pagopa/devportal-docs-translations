# Client

A client is a container that includes the technical users authorized to upload public keys, as well as the public keys themselves.

The client is the tool that enables the actual extraction of data. For this reason, all operations related to adding technical staff and to associating clients and purposes can be performed only by an account with administrator permissions.

There are two types of client:

* those that target the **producers** of e-services;
* those that target the APIs exposed by **PDND**.

The first type of client, the _**E-service API client**_, can be associated with e-services for which a consumer has an active service request and at least one published purpose.

Each e-service client can be associated with one or more purposes. Once associated, the cryptographic material stored there will be considered valid to request from PDND a voucher for that purpose.

The second type, the _**PDND API client**_, is not associated with anything and can be used directly to obtain information from PDND through its APIs.

It is possible to add and remove users and public keys from any client at any time, as well as to associate or disassociate an e-service client from a purpose, even without deleting it.
