---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/e-services/keychains
---

# Keychains

## **What it is and what it is for**

The **keychain** allows the producer to **digitally sign** the responses sent to consumers and to publish the **public keys** associated with e-services.\
This enables consumers to independently verify the origin and correctness of each response using the corresponding public key.

**Main advantages:**

1. **Non-repudiation / sender identity** — the **private key** is held **exclusively** by the producer: the signature can only originate from them. Verification with the public key confirms the sender’s identity and guarantees **non-repudiation**.
2. **Security / integrity** — the signature covers the **digest** of the response. If the content were altered or an error occurred, the recalculated digest would **not** match the **signed** one: during verification, the consumer detects this and **rejects** the response.

Keychains can be **created**, **deleted**, **associated**, or **disassociated** from e-services according to the operational needs of the party.

More information on response integrity assurance is available in the dedicated section.

## **Operations**

### **Creating a keychain**

* Assign a **name** and **description** for identification.
* It is possible to **add or remove** technical personnel both during and after creation.
* **Public keys** can be **added or removed** after the keychain has been created.
* New keychains can always be created, even with the same characteristics as previously deleted ones.

### **Deleting a keychain**

* An administrator can **delete it** at any time.
* Deletion **immediately revokes** the signing capability for **all** associated e-services.
* The contained **public keys** are **removed**.

### **Associating a keychain with an e-service**

* The keychain’s public keys can sign **only** for the e-services to which the keychain is **associated**.
* The association is managed in the e-service’s **Keychain** section.
* A keychain can be **associated with multiple e-services** simultaneously.

### **Disassociating a keychain from an e-service**

* An administrator can **disassociate** a keychain from an e-service.
* After disassociation, the keychain **no longer signs** for that e-service but continues to operate for the others it remains associated with.

### **Adding a user to a keychain**

* An administrator can **add** users already registered on PDND.
* To add a new user, they must first be registered in the **Members Area**. More information is available in the dedicated section.

### **Removing a user from a keychain**

* An administrator can **remove** users without deleting their account from the platform.
* After removal, PDND **highlights the public keys** uploaded by that user and **recommends** replacing them to ensure security.

### **Adding a public key**

* Authorized users can **upload public keys** to the keychain.
* The corresponding **private key** is held by the party and used to **sign** responses.

### **Deleting a public key**

* The user who uploaded the key (or an administrator) can **delete it**.
* After deletion, the key **can no longer be used**; subsequent responses **cannot** be verified with that key.

***

Next page [→ Tools and references](tools-and-references.md)
