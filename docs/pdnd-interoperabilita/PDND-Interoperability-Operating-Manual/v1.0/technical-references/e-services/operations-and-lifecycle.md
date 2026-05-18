# Operations and lifecycle

## **Operations**

Operations represent the main actions that the _producer_ can perform to create, update, or suspend the versions of an e-service.

#### **Creation and publication of a draft**

The lifecycle begins with the **creation of a draft**, during which the e-service is not yet available to consumers.\
The draft can be deleted in two cases:

1. **If at least one version has already been published**, only the draft of the new version being developed can be deleted.
2. **If the service is at its first version and has never been published**, the entire e-service can be deleted.

Once completed, the draft can be **published** immediately or at a later time.

Upon publication, the e-service moves to the **published** state, becomes available in the **E-service Catalog**, and can be consumed by consumers.

### **Creation of a new version and deprecation of the previous one**

After publication, to introduce structural changes (for example, to the API interface), it is necessary to **create a new version**.\
When the new version is published, the previous one becomes **deprecated**, remaining available until all consumers have updated their service requests. That version will be **automatically archived** once the last consumer has archived their service request.

E-service versions are **automatically numbered** in ascending order.\
The release of a new version **does not trigger an automatic update** for all consumers: each consumer manually performs the update when their integration is stable.

### **Cloning**

To facilitate the management of similar services, it is possible to **clone an e-service**, modify some parts of it, and publish it as a **new, independent e-service**.

The new e-service starts from **version 1**, regardless of the number of versions of the service from which it was cloned.

### **Suspension and reactivation**

The producer can **suspend** a version of an e-service in the **published** or **deprecated** state, temporarily stopping access to the service.\
A suspended version can be **reactivated**, restoring access for consumers.

For planned suspensions (for example, maintenance), advance notice to consumers is recommended in accordance with the conditions set out in the Guidelines:

> The producer MAY temporarily suspend the availability of the e-service, notifying the consumer in advance of such circumstance, in compliance with the conditions that may be specified in the SLAs agreed with the consumer outside the PDND interoperability infrastructure ([AgID Guidelines](https://trasparenza.agid.gov.it/download/9591.html) – Annex 2, Chapter 4, p. 9)

{% hint style="warning" %}
**Suspension causes a service interruption** for consumers and connected end users.
{% endhint %}

## **States**

The following table summarizes the **states** in which an e-service version may be, along with their impact on visibility and operability.

| State                    | Description                                                                                                                                                             | Visibility to consumers | Allowed actions                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------- |
| **Draft**                | Version being created and not yet published. If it is the first version, the entire e-service is not visible in the catalog.                                            | Not visible             | Edit; delete (in allowed cases)       |
| **Published**            | Current new version. New consumers subscribe to this version; existing consumers are notified to update to the latest version.                                          | Visible                 | Subscription; manage service requests |
| **Deprecated**           | Version still active but no longer the most recent; remains usable by already subscribed consumers until archiving.                                                     | Visible                 | Continue existing consumptions        |
| **Suspended**            | Use temporarily blocked by the producer.                                                                                                                                | Not available           | Reactivation                          |
| **Archived**             | Version withdrawn from the catalog and no longer in use.                                                                                                                | Not visible             | None                                  |
| **Waiting for approval** | Applies only to the delegation flow: the delegate has finalized the draft and sent it to the delegator for approval; after approval, the version becomes **published**. | Not visible             | Approval or rejection                 |

***

Next page [→ Exporting and importing](e-service.md)
