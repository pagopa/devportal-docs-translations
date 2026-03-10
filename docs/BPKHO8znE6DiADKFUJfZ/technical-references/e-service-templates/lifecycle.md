# Operations and lifecycle

### Creation and version management

A **template e-service** behaves similarly to an e-service. While it is **in draft**, it is **visible only to its creator**. Upon **publishing the first version**, the template becomes **available in the template catalog**, allowing parties to **instantiate** their own e-services from it.

When **structural modifications** are needed (e.g., updating the **API interface file**), a **new version** of the template must be **published**.

The main difference from an e-service lies in the **types of fields** to be filled in, divided into:

* **Fixed fields** (defined by the template creator and **not editable** by those who instantiate it):
  * **E-service**: name, description, technology, producing or receiving mode, purposes _(only in case of data receiving)_;
  * **E-service version**: description, attributes, API interface, voucher duration, technical documentation.
* **Suggested fields** (operational parameters, **editable** by the producer):
  * **E-service**: **Signal Hub** availability;
  * **E-service version**: API call thresholds/day, **automatic or manual** approval of service requests.
* **To be completed** (information **specific to the party**):
  * **E-service**: acceptance of **delegations**;
  * **E-service version**: **audience**, API interface completion fields _(server URL, contact info, terms and conditions URL)_.

For more details on the **e-service structure**, see the [dedicated section](../e-services/).

### Publishing a new template version

When a **new version** of the template is **published**, the **previous version is automatically retired**:

* no new **instances** can be created from the retired version;
* existing instances **cannot be updated** to the retired version.

### Suspension and reactivation

When a template is **suspended**, the ability to **create new instances** from it **ceases**.\
Suspension does **not affect** existing instances (including those **in draft**).\
A suspended template can be **reactivated** at any time.

### Using one’s own template

The party that **created** a template may also **instantiate it for itself**.\
However, only **one instance** may be created from the **same template**, to prevent duplication of **name** and **purpose**.\
An exception applies to **delegated e-services**, as described in the [dedicated section](../delegations/).

### States

<table><thead><tr><th width="127.1343994140625">State</th><th>Description</th><th>Allowed actions</th></tr></thead><tbody><tr><td><strong>Draft</strong></td><td>The template is being prepared and is visible only to the creator; it is not available in the template catalog.</td><td>By publishing the <strong>first version</strong>, it becomes <strong>active</strong> and can be instantiated.</td></tr><tr><td><strong>Active</strong></td><td>The template is published in the <strong>template catalog</strong> and can be <strong>instantiated</strong> by producers.</td><td><strong>Publishing a new version</strong> automatically marks the previous one as <strong>retired</strong> (no longer instantiable or updatable). It can also be <strong>suspended</strong> and later <strong>reactivated</strong>.</td></tr><tr><td><strong>Suspended</strong></td><td>The template remains in the catalog but is <strong>not instantiable</strong>; existing instances (even drafts) are unaffected.</td><td>It can be <strong>reactivated</strong> at any time to return to the <strong>active</strong> state.</td></tr></tbody></table>

***

Next page [→ Relationship between template and instance](relationship-between-template-and-instance.md)
