# Operations

**Clients** can be **created** or **deleted**, and **associated** or **disassociated** from purposes, **at the discretion of the party’s administrators**.

### Creation

Clients are created from the front office:

* _Client management > E-service API_ for **E-service API clients**;
* _Client management > PDND API_ for clients intended for the **PDND APIs**.

It is sufficient to provide a **name** and **description** to identify them. During creation, it is also possible to **add security operators** and **upload the necessary public keys**.

The platform allows the creation of **multiple clients**, even with **identical configurations**.

### Deletion

A client can be **deleted at any time**. Deletion results in the **inability to obtain new vouchers for that client** and the **automatic removal of the public keys** it contains.

### Association with a purpose

**E-service API clients** can be **linked** to purposes for which the consumer has an **active service request**.

In the front office, the association is performed from the **Purpose** tab, in the _Associated clients_ section. Once associated, the client can **request vouchers** for the connected e-service.

**A single client can be associated with multiple purposes simultaneously.**

### Disassociation from a purpose

From the **Purpose** tab, a client can be **disassociated** when no longer needed.\
After disassociation, the client **remains available and operational** for all other connected purposes.

### User management

Administrators can **add or remove security operators** from clients at any time.\
Only **users already registered on PDND** can be associated with clients; new operators must first be **registered through the Members Area**.

When a user is **removed**, the platform **highlights the public keys** uploaded by that user and **recommends their replacement** to ensure system security.

### Public key management

**Security operators** can **upload public keys** required to **sign voucher requests**.

The **private key**, generated and stored internally within the party, is used to **sign requests** sent to PDND.

**Public keys** can be **deleted at any time**; from that moment on, any voucher requests **signed with the corresponding key** will **not be accepted** by the platform.

***

Next page [→ Client management](client-management.md)
