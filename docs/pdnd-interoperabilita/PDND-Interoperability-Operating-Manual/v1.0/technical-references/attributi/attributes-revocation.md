# Attribute revocation

### Revocation of a certified attribute

When PDND detects that a consumer **no longer possesses** a **certified** attribute, the **state of the service request** is **automatically updated**.

The **request** moves to an invalid state called **“Missing certified attributes.”**\
To **restore** it, the **authoritative source or certifying body** must **reassign** the attribute to the consumer.

If the request was in **draft** or **waiting for approval**, once the attribute is **reassigned**, it returns to **draft** and can be **submitted** again to the producer.

### Revocation of a verified attribute

If the producer **revokes** a previously recognized **verified** attribute, the platform **keeps unchanged** the **state of the service requests** and **notifies** the relevant parties of the **discrepancy**.

**Example:** producer **A** and producer **B** had verified the same attribute for consumer **C**; **B** revokes it; **A**, **B**, and **C** all receive a **discrepancy notification**.

The **resolution** of the issue lies with the **involved parties** (producers/consumer); the platform ensures **notification** and preserves **current states**.

### Revocation of a declared attribute

The **management** of declared attributes — from declaration to revocation — is the **exclusive responsibility of the consumer**.

If the revocation occurs while the **service request is in draft**, the process continues in two ways:

* if the attribute **is not required** for submitting the request, the user can proceed without additional steps;
* if the attribute **is required**, the **submission** becomes possible **only after** the consumer **redeclares** the attribute.

If the revocation occurs while the request is **waiting for approval**, the request is **returned to draft** for the consumer; it can be **resubmitted to the producer** once the attribute has been **redeclared**.

If the revocation affects an **active** request, the platform **immediately suspends** it.\
The **reactivation** occurs **automatically** as soon as the consumer **redeclares** the attribute.\
If the request **remains suspended** even after redeclaration, this means that **other suspensions** (by one or more actors, e.g., producer or consumer) are still in effect: each actor that applied a suspension must **reactivate** their own in order to complete the process.

***

Next page [→ Certifying body](certifying-authority.md)
