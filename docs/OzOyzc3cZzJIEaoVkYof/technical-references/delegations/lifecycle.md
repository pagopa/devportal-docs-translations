---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/delegations/lifecycle
---

# Operations and lifecycle

### Making availability known

Path: **My party → Delegation management → Availability**.

The party enables the option to **receive delegations** for **producing** and/or **consuming**.

Availability is **disabled by default**, and activating it **does not imply automatic assignments**: each delegation must be **evaluated and accepted** by the delegate.

### Creating and sending a delegation

Path: **My party → Delegation management → Delegations granted → Create new**.

Steps:

1. Select the **type of delegation** (producing/consuming).
2. Select the **e-service** and the **delegated party**.
3. For **producing delegations**, if the e-service does not exist, simply **enter the name and a short description**: it will be created and become delegable.
4. The **delegating party** appoints the **delegate** as **data processor** under the GDPR, **outside** the scope of PDND.
5. Send the **delegation request** to the potential delegate.

### Accepting or rejecting a delegation

Path: **My party → Delegation management → Delegations received**.

The potential delegate **reviews the request** and can **accept** or **reject** it, providing a **reason** visible to the delegating party.

### Operational management (day-by-day)

With an **active delegation**, the **delegate** manages the **administrative activities** of the e-service (producing or consuming) **on behalf of** the **delegating party**.\
For delegated objects, the **delegating party** **cannot perform administrative actions** until the delegation is revoked.

### Revoking a delegation

Path: **My party → Delegation management → Delegations granted → open the record → Revoke**.

**Effects:**

* **Producing delegation**
  * **Delegate**: loses **visibility** and **operational control** over e-services, service requests, and related purposes.
  * **Delegating party**: regains **management** of e-services and associated objects, which **retain their current state** (e.g., an “active” service remains “active”).
  * **Other parties (consumers)**: **no change** in access to the e-service.
* **Consuming delegation**
  * **Delegate**: the **service request is archived**; **purposes** are **archived** and can **no longer be used** to obtain vouchers; **clients** remain **active** but are **disassociated** from the archived purposes.
  * **Delegating party**: the **service request is archived**; **purposes** are **archived**; **clients** remain **active** but **disassociated**.

### States

<table><thead><tr><th width="134.5562744140625">State</th><th>Description</th><th>Allowed actions</th></tr></thead><tbody><tr><td><strong>Waiting for approval</strong></td><td>Delegation <strong>sent</strong> by the delegating party; the delegate must <strong>review</strong> it.</td><td>The delegate can <strong>accept</strong> or <strong>reject</strong> the delegation (with a <strong>reason</strong> visible to the delegating party).</td></tr><tr><td><strong>Active</strong></td><td>The delegate <strong>manages</strong> the e-service <strong>on behalf of</strong> the delegating party.</td><td>The delegating party can <strong>revoke</strong> it at any time; management returns to the delegating party, <strong>preserving the current state</strong> of all objects.</td></tr><tr><td><strong>Rejected</strong></td><td>The delegate <strong>did not accept</strong> the delegation and provided a <strong>reason</strong>.</td><td>The delegating party may <strong>propose a new delegation</strong> or <strong>adjust its terms</strong>.</td></tr><tr><td><strong>Revoked</strong></td><td>The delegating party <strong>withdraws</strong> the previously granted delegation.</td><td>Effects as above: for <strong>producing</strong> (management returns to delegating party, no impact on consumers) / for <strong>consuming</strong> (service request and purposes archived, clients remain active but <strong>disassociated</strong>).</td></tr></tbody></table>

***

Next page [→ Delegation for producing](delegation-for-producing.md)
