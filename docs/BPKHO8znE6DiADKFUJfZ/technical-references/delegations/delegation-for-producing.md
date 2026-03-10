# Delegation for producing

### Definition and scope

The **delegation for producing** allows a **party (delegator)** to entrust another **party (delegate)** with the **administrative management** related to the producing of an e-service on PDND.

The delegation **does not include the technical component** of producing: the **development, maintenance, and operation of the API** behind the e-service, as well as the **technical interactions** with consumers, **remain under the responsibility of the delegator**, who may handle them independently.

Within the **AgID Guidelines on the technological infrastructure of the National Digital Data Platform (PDND)**, this function corresponds to the role of **“Producer Delegate.”**

### Delegate’s responsibilities

In a producing delegation, the **delegate**:

* creates and manages **e-service versions**;
* **publishes** e-service versions, **subject to the delegator’s approval**;
* reviews and manages **service requests** received;
* reviews and manages **purposes** and their corresponding **risk analyses**.

#### Operational management

**Publishing an e-service or version**

The **delegate** manages the **entire lifecycle** of the delegated e-service **as if they were the producer**. The only exception is the **publication**: every new e-service version must be **approved by the delegator** before appearing in the **e-service catalog**.

**Managing service requests**

The **delegate** handles **service requests** received for the delegated e-service. Specifically, they:

* approve **verified attributes** on behalf of the delegator;
* can **suspend** or **reactivate** active service requests.

**Managing purposes**

The **delegate** manages **purposes** linked to active service requests. They can:

* **suspend** and **reactivate** purposes;
* **approve** or **reject** changes to the **load estimate** proposed by consumers.

### Delegator’s responsibilities

#### Visibility and operational scope

The **delegator** retains **full visibility** over:

* the delegated e-service;
* the service requests;
* the linked purposes.

However, they **cannot act operationally** on these components, **except** to:

* approve or reject the **publication** of a new e-service version;
* **manage the producer’s keychain**.

#### Approval of e-service or version publication

When the **delegate** completes a **draft version** of an e-service, they **submit it to the delegator for approval**. The **delegator** can:

* **approve** it, making it public in the e-service catalog;
* **reject** it, providing a reason. If rejected, the version returns to the **delegate** in **draft** status, with the **motivation** detailed.

#### Managing the producer’s keychain

The **delegator** retains **exclusive control** over the **producer’s keychain** for delegated e-services. The **delegate** cannot access or modify the keys contained within the keychain.

***

Next page [→ Delegation for consuming](delegation-for-consuming.md)
