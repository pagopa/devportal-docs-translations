# Relationship between template and instance

### Who can create templates

All **parties authorized to produce** in a specific environment can **create and evolve** e-service templates.\
To create a new template:

1. Go to **Producing → My e-service templates**;
2. Click **Create new**.

Creating a template is similar to creating an **e-service**: it contains the **same fields**, plus one dedicated field for the **template description**, which may include **informative notes** useful for parties who will create their own instance from it.

### Who can instantiate e-services from templates

Similarly, all **parties authorized to produce** in a given environment can **create instances** from templates.\
To do so:

1. Go to **Producing → E-service templates**;
2. Select the **template of interest**;
3. Click **Use template** to generate your own instance.

### Access requirement (attribute) management

The **definition of attributes** is the **exclusive responsibility of the template creator**.\
The party deriving its instance **cannot modify them independently**.\
If it finds any **inconsistencies**, it must contact the **template creator** to request corrections.

As with any e-service, the **attributes of the instance** represent the **access requirements** that consumers must meet to **submit a service request**.

More details on attributes are provided in the [dedicated section](../attributi/).

### Relationship between states

The **states of the template** and those of the **instantiated e-services** are **independent**.

* If a **template is suspended**, the **instantiated e-services** remain unchanged.
* If an **instantiated e-service** is archived, it **does not affect** the template.

**Example:** a suspended template can no longer generate new instances, but an already active e-service continues to operate normally.

### Applying template updates

An e-service template can be **updated over time**. Updates are classified as **minor** or **critical**.

#### Minor updates

They are **automatically propagated** to all instances of the template.\
**Example:** correcting a typo in the template description → the modification immediately appears in all instances.

#### Critical updates

They require **publishing a new version** of the template (e.g., structural changes to the API interface).\
In these cases, the **derived e-services** must be **manually updated** by the managing parties, after completing any **necessary technical adjustments**.

Updating the instance creates a **new version of the e-service**, and as a result:

* all **consumers** must **update their service requests** to the latest version;
* any **tests or technical verifications** must be repeated as for any other e-service.

### Updating an instance

A party that has published an **e-service instance** may need to **update it independently** for specific reasons (e.g., changes to the **server URL** or **audience**).\
In such cases, it must create a **new version of its instance**, following the same procedure as for any e-service.

It may happen that the **template version** and the **instance version** **do not match**.

**Example:** the **template e-service** is at **version 2**, while the party’s **instance** is at **version 3**, due to specific adaptations.

***

Next page [→ Other information](../signal-hub.md)
