---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/tutorials/general-tutorials/utenze
---

# How to create and revoke operator users

Operator roles are designed to delegate specific technical tasks to team members **without granting them full Administrator privileges**. This approach, based on the **“least privilege” principle**, increases security and ensures a clear division of responsibilities.

There are **two types of operational roles**:

* **API Operator:**\
  A technical role focused on managing the **lifecycle of e-services and purposes**.\
  It is ideal for developers or analysts responsible for the functional aspects of services.
* **Security Operator:**\
  A technical role with permissions limited to **client and cryptographic material management** (e.g., uploading and revoking public keys).\
  It is intended for staff in charge of **integration security**.

This tutorial explains how an **Administrator** can **create and revoke** these specialized accounts.

### Prerequisites

To perform these operations, you must access the **front office** with an account that has **Administrator** privileges. To add a new Operator, you need to know their **First Name**, **Last Name**, and **Fiscal Code**.

### Creating a new Operator

#### **Step 1: Access the “Users” section**

From the main dashboard, click on the **“Users”** menu item to access the list of currently authorized users.

#### **Step 2: Start creating a new user**

Click the **“Add a user”** button.

#### **Step 3: Enter the details and assign the role**

Fill in the form with the information of the person you want to authorize:

* **Fiscal Code:** Enter the user’s fiscal code.
* **First Name:** Enter the user’s first name.
* **Last Name:** Enter the user’s last name.
* **Role:** Select from the dropdown the specific role to assign — **“API Operator”** or **“Security Operator.”**

#### **Step 4: Confirm creation**

Click **“Add”** to complete the operation. The new user will be added to the list and will be able to access the platform immediately using their **SPID** or **CIE** credentials. Their permissions will be limited to the actions allowed by the assigned Operator role.

### Revoking an Operator

#### **Step 1: Access the “Users” section**

From the main dashboard, click on the **“Users”** menu item.

#### **Step 2: Locate the user to revoke**

Scroll through the list until you find the Operator whose access you want to revoke.

#### **Step 3: Start the revocation**

Click on the **trash can icon** or the **“Revoke”** button corresponding to the user’s row.

#### **Step 4: Confirm the revocation**

A confirmation dialog will appear. Click **“Confirm”** to proceed.

Access for that user will be **immediately revoked**, and they will no longer be able to perform any operations on the platform.

***

Next page [→ How to make your party available to receive delegations](how-to-make-your-party-available-to-receive-delegations.md)
