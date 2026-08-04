---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/posizioni-debitorie/modello-dei-dati-v3
---

# V3 Data Model

### Logical Schema (ER)

<figure><img src="../../.gitbook/assets/Screenshot 2025-12-24 alle 10.36.15.png" alt=""><figcaption></figcaption></figure>

The **Posizione Debitoria (Payment Position)** has the following relationships:

- A **Payment Position** can have multiple Payment Options. There is _at least one_. A **Payment Option** is linked to a single **Payment Position**.
- A **Payment Option** can have multiple **Installments** (i.e.). Installment). There is _at least one_. An **Installment** is linked to a single **Payment Option**.
- A **Payment Option** is linked to a **Debtor**. If a **Debtor** exists, there is _at least one_ **Payment Option** linked to it.

{% hint style="info" %}
This structure allows managing not only the models that are backward-compatible with the V1 APIs, but also advanced scenarios not previously supported, such as the management of **co-debtors** and **multi-installment payments**.
{% endhint %}

- An **Installment** can have multiple **Transfers** **(i.e.). Transfers)**, as many as there are Creditor Bodies (EC) to which it is directed. There is _at least one and a maximum of five_. A **Transfer** is linked to a single **Installment**.

{% hint style="info" %}
_For example, an installment might have the following breakdown:_

- _Single-beneficiary payment, with a single transfer (1 EC, 1 transfer);_
- _Single-beneficiary payment, with multiple transfers (1 EC, n transfers);_
- _Multi-beneficiary payment (n EC, n transfers);_
- _A combination of the above points (n EC, m transfers, where m>n)._
  {% endhint %}

The following paragraphs describe the main characteristics of a Payment Position. More technical details on the system logic and the state transitions that depend on the specified fields are provided in the section on Payment Position States.

#### Payment Position

The main characteristics of a Payment Position are as follows:

- **IUPD**: Unique payment position identifier.&#x20;

{% hint style="info" %}
It is the EC's responsibility to create a unique IUPD. If it is not unique, the system will return an error.
{% endhint %}

- **Creditor Body** `organization-fiscal-code`: The tax code of the creditor body that owns the Payment Position.
- **Creditor Body Details**: Company name `companyName`, office `officeName`.
- **Publication Date** `publishDate`: The date the Payment Position is published in the system.

#### Payment Option

The main characteristics of a Payment Option are as follows:

- **Description** `description`: Description of the Payment Option.
- **Validity Date** `validityDate`: The date from which the Payment Option and the Installments it contains are valid and payable.

{% hint style="info" %}
It is the EC's responsibility to manage the Payment Position and all associated information, including the validity date.
{% endhint %}

- **Expiration**_\[flag]_ `switchToExpired`: Indicates whether the Payment Position should be made unpayable upon expiration.

#### Installment

The main characteristics of an Installment are as follows:

- **Notice Number (NAV)** `nav`: The identifier of the Installment issued by a specific Creditor Body. This identifier will be used by the Payments Hub to initiate the transaction, issue the receipt, and report the payment.
- **Unique Payment Identifier (IUV)** `iuv`: Unique identifier for each Installment.
- **Amount** `amount`: The amount due for the Installment.
- **Description** `description`: Description of the Installment.
- **Due Date** `dueDate`: The date defining when the payment is due. This affects payability if the expiration flag is active.
- **Metadata** _\[optional]_ `installmentMetadata`: An array that allows ECs to insert custom information.

#### Debtor

The main characteristics of a Debtor are as follows:

- **Type** `type`: Indicates whether the debtor is a natural person or a legal entity.
- **Identifier** `fiscalCode`: The debtor's tax code (or VAT number for a legal entity).
- **Address** _\[optional]_ `streetName`, `civicNumber`, `postalCode`, `city`, `province`, `region`, `country`.
- **Email** _\[optional]_ `email`.
- **Phone number** _\[optional]_ `phone`.

#### Transfer

The main characteristics of a Transfer are as follows:

- **Id** `idTransfer`: The (sequential) identifier of a transfer within an Installment.
- **Creditor Body** `organizationFiscalCode`: The beneficiary of the transfer.
- **Amount** `amount`: The amount scheduled for the transfer.
- **Remittance Information** `remittanceInformation`: The reason for the individual transfer.
- **Taxonomy** `category`: Taxonomy of the service associated with the transfer.
- **IBAN** `iban`**,** `postalIban`: The IBAN to which the amount will be credited.
- **Metadata** _\[optional]_ `transferMetadata`: An array that allows ECs to insert custom information.

{% hint style="warning" %}
The IBAN is associated with the **Payment Position** when it is created. If the selected IBAN is modified from the [Back Office](https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/v1.0/manuale-operativo-back-office-pagopa-ente-creditore/funzionalita/gestione-iban/modifica-iban), a previously created **Payment Position** will remain associated with the IBAN assigned at the time of creation.
{% endhint %}
