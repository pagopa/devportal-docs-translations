# Operations and lifecycle

### Creating a draft and submitting

It is possible to **create new purposes** for all **e-services** for which the party has an **active service request**.

If the **load estimate** indicated in the purpose is **below both thresholds** set by the producer, the purpose is **automatically activated**.

Purposes can **remain in draft** indefinitely. Once **submitted** to the producer, the activation **proceeds automatically** until the **maximum thresholds** defined by the producer are reached.

When the thresholds are **exceeded**, the **producer** can **manually activate** the purpose and **indicate an expected activation date** to allow the consumer to plan accordingly.

### Updating the load estimate

The **load estimate** (API calls/day) can be **updated at any time**.

If the new estimate **exceeds one or both thresholds** configured in the **e-service version**, the **update** is **not applied immediately**: it requires **manual approval** by the producer.

More details on the threshold/estimate mechanism are provided in the dedicated section.

### Approval or rejection above threshold

When a new purpose or an **update** to the load estimate **exceeds the thresholds**, the **producer** may:

* **manually activate** the purpose (or update);
* **reject it**, providing the consumer with a **reason** visible in the front office or via API.\
  The consumer may then **create new purposes** or **resubmit** the update with a different estimate.

### Suspending or reactivating a purpose

**Suspension** can be applied **independently** by the **consumer** or the **producer**; to become **active** again, the purpose must be **reactivated by the actor** who suspended it.

If **both suspend**, **both must reactivate**.

During suspension, **no associated client** can **obtain vouchers** for that purpose; this condition is also indicated in the **client assertion debug tool** available in the **front office**. More details on this tool are available in the [dedicated section](../utilizzare-i-voucher/faqs.md).

### Archiving a purpose

When a purpose is **no longer needed**, it can be **archived**.

Archiving is **irreversible**, but it is always possible to **create new purposes**, even with the same characteristics as those archived.

Archiving **reduces the estimated load** on the producer by an amount equal to the **estimate** associated with that purpose. The consumer can then **reuse** that capacity for **other purposes** on the same e-service, **within the overall threshold** set.

The **keys** stored on **associated clients** can **no longer be used** to obtain vouchers **for that purpose**, but **remain valid** for **other purposes** to which they are linked.

It is **best practice** to periodically review all purposes and **archive** those **no longer in use**, improving overall service quality.

### States

The following table summarizes the **states** a purpose can assume and their operational implications.

<table><thead><tr><th width="123.234375">State</th><th>Description</th><th>Allowed sections</th></tr></thead><tbody><tr><td><strong>Draft</strong></td><td>Purpose being created, not yet submitted to the producer.</td><td>It can remain in draft indefinitely; it can be <strong>submitted</strong>; the consumer can <strong>delete</strong> it.</td></tr><tr><td><strong>Active</strong></td><td>Active purpose; allows <strong>client association</strong> and <strong>voucher retrieval</strong> to access the producer’s API.</td><td>Activation is <strong>automatic below threshold</strong>; <strong>above threshold</strong> it requires <strong>manual approval</strong>.</td></tr><tr><td><strong>Suspended</strong></td><td>Temporarily disabled by the producer or consumer.</td><td>The <strong>actor who suspended</strong> it must <strong>reactivate</strong> it; if both suspended, <strong>both must reactivate</strong>. No vouchers are issued for the purpose while suspended.</td></tr><tr><td><strong>Waiting for approval</strong></td><td>The purpose (or an update) has a <strong>load estimate above threshold</strong>.</td><td>Requires <strong>manual approval</strong> by the producer to become <strong>active</strong>.</td></tr><tr><td><strong>Rejected</strong></td><td>The producer has <strong>rejected</strong> the purpose (or update) because the estimate is <strong>incompatible</strong> with their capacity.</td><td>The <strong>reason</strong> is available in the front office; the consumer can <strong>resubmit</strong> the purpose or update.</td></tr><tr><td><strong>Archived</strong></td><td>The purpose is <strong>no longer used</strong> to obtain vouchers.</td><td>The operation is <strong>irreversible</strong>; new purposes with similar content can be <strong>created</strong>.</td></tr></tbody></table>

***

Next page [→ Risk analysis](risk-analysis.md)
