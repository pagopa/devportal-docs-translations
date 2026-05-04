---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/getting-started/guida-alladesione
---

# First access and initial configuration

Once the subscription is completed, the administrators appointed by the Legal Representative can access the platform and begin configuring it. This chapter outlines the key steps to become fully operational.

## Access to the front office

To access the PDND front office, follow these steps:

1. **Login** – Access the platform’s Members Area and authenticate using your **SPID** or **CIE** digital identity.
2. **Select party** – If you are associated with multiple parties, select the one you wish to operate for.
3. **Select product** – From the list of available products, choose **“Interoperabilità.”**
4. **Select environment** – Choose the desired working environment.

## Understanding operational environments

The platform provides three separate environments, each with a specific purpose:

* **Production** – The real operational environment, where official data exchanges between parties take place.
* **Testing** – An environment identical to production, used to test integrations and verify that e-services function correctly before making them available to everyone. Real data must not be used here.
* **Validation** – A test environment open also to parties that have not yet completed the subscription (e.g., private companies). It uses only simulated data and is intended to familiarize users with the platform’s functionalities.

<table><thead><tr><th width="175.14996337890625">Environment name</th><th width="311">Authorized for producing</th><th>Real data exchanged</th></tr></thead><tbody><tr><td><strong>Production</strong></td><td>Public Administrations (PA), Public Service Managers (GSP), Publicly Controlled Companies (SCP), Companies within the Consolidated Economic Account (SCEC)</td><td>Yes</td></tr><tr><td><strong>Testing</strong></td><td>Public Administrations (PA), Public Service Managers (GSP), Publicly Controlled Companies (SCP), Companies within the Consolidated Economic Account (SCEC)</td><td>No</td></tr><tr><td><strong>Validation</strong></td><td>All parties</td><td>No</td></tr></tbody></table>

## User and role management

The **administrator** is responsible for managing the users of their party. They can create or revoke accounts and assign one of three available roles.

### User roles

* **Administrator** – Has full control over the front office. Can manage users, create e-services, manage purposes and service requests, and handle cryptographic material (clients and keys).
* **Security Operator** – The technical role responsible for managing cryptographic material (e.g., uploading public keys). Cannot manage users or e-services.
* **API Operator** – The technical role that manages e-services and the technical aspects of purposes. Cannot manage users or cryptographic material.

### Permissions

| Activity                          | Administrator | API Operator | Security Operator |
| --------------------------------- | ------------- | ------------ | ----------------- |
| Appoint and revoke Administrators | ✅             | ❌            | ❌                 |
| Create and remove operators       | ✅             | ❌            | ❌                 |
| Manage e-service status           | ✅             | ❌            | ❌                 |
| Edit e-service attributes         | ✅             | ❌            | ❌                 |
| Manage e-service creation         | ✅             | ✅            | ❌                 |
| Submit a service request          | ✅             | ❌            | ❌                 |
| Manage e-service consumption      | ✅             | ✅            | ❌                 |
| Manage cryptographic material     | ✅             | ✅            | ✅                 |

### Creating and managing users

The administrator can create new operator or administrator accounts directly from the front office. Detailed procedures for creating and revoking accounts are available in the Tutorial section.

{% hint style="info" %}
Follow the dedicated tutorials:

[→ **How to create and revoke administrator users**](../tutorials/general-tutorials/how-to-create-and-revoke-administrator-users.md)\
[→ **How to create and revoke operator users**](../tutorials/general-tutorials/utenze.md)
{% endhint %}

## Initial configuration checklist

Upon first access, the administrator is advised to **set up the party’s contact information** — verifying and entering the contact email address to receive important communications from the platform and from consumers.

### Attribute allocation

It is necessary to wait up to 24 hours to ensure that all attributes are correctly assigned to the new party by the authoritative sources. More details about the attributes are available in the dedicated section.

***

Next page [→ Tutorials for producers](../tutorials/tutorials-for-producers/)
