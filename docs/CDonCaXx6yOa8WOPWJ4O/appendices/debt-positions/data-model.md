# Data model

## Debt position management

The **debt position** **(PD)** has the following relationships

* A **PD** is connected to a **debtor (Deb)** **.** If there is a **Deb**, _at least one_ **PD** is connected to it.
* A **PD** can have multiple **payment options (OdP).** _At least one_ exists. One **OdP** is connected to only one **PD**.

{% hint style="info" %} _For example, the most common payment options for a annual tax are:_

* _single installment_

* _first installment_

* _..._

* _n-th installment_ {% endhint %}

* An **OdP** can have multiple **payments**, equal to the number of Creditors (EC) to which they refer. _At least one_ exists. One **payment** is connected to only one **OdP**.

{% hint style="info" %} _For example, the following payment options are possible:_

* _payment with a single beneficiary, with a single payment (1 EC, 1 payment)_
* _payment with a single beneficiary, with multiple payments (1 EC, n payments)_
* _multi-beneficiary payment (n ECs, n payments)_
* _a combination of the previous points (n EC, m payments with m>n)_ {% endhint %}

### Logical scheme (ER)

![](../../.gitbook/assets/image (47).png)

#### Debt position (PD) <a href="#posizione-debitoria-pd" id="posizione-debitoria-pd"></a>

At a high-level the debt position has the following characteristics

* **IUPD** : univocal debt position identifier

{% hint style="info" %} A possible format for it is: < _**CodiceFiscale EC**_ + [UUID](https://tools.ietf.org/html/rfc4122) >

The EC is responsible for creating the IUPD and making sure it is univocal. The service is responsible for guaranteeing it (check that the IUPD is univocal in the _**pagoPa**_ system), informing the EC if it is not. {% endhint %}

* **Creditor -** Fiscal code of the creditor “operator” of the PD.
* **Creditor registry office** - (company name, department, office, …)
* **Date of validity** (start)- date from which the PD is valid and payable

{% hint style="info" %} The EC is responsible for managing the PD and all information associated with it, including the date of validity. {% endhint %}

* **Date of publication -** date on which the PD is published on the system
* **Expiration**_\[flag]_: indicates if the PD must be invalidated upon expiration or no

#### Debtor <a href="#debitore" id="debitore"></a>

At a high-level the debtor has the following characteristics

* **Type**: indicates if it is a physical or legal person
* **Identifier**: Fiscal code (or also VAT no. in case of a legal person) of the debtor
* **Address** _\[optional]_ : City, province, address, etc.
* **Email** _\[optional]_
* **Telephone number** _\[optional]_

#### Payment option (OdP) <a href="#opzione-di-pagamento-odp" id="opzione-di-pagamento-odp"></a>

At a high-level a payment option has the following characteristics

* **IUV** - Univocal Payment Identifier, the identifier used by the NodoSPC for the payment will be univocal for each OdP
* **Creditor -** CF of the creditor “operator” of the PD. It is used together with the IUV to univocally identify a payment.
* **Amount** - amount foreseen for the OdP.
* **Description** - a brief description of the content of the OdP (e.g.: in case of a reduction, it could be “_30% reduction if the payment is made within 7 days of issue of the PD_“ )
* **Installment** \[_flag_] - indicates if the option is part of an installment payment. In the case of an installment payment, the associated PD is to be considered “paid” only when all the installments are paid.
* **Date of expiration** (end) - date by which the OdP is payable
* **Metadata** _\[optional]_ - array that permits the ECs to enter information useful to them, typically related to account reconciliation, alignment of management programs, etc. It must have a limit and explicit size (with relative error msg in case of saturation)

#### Payment <a href="#versamento" id="versamento"></a>

At a high-level the payment has the following characteristics

* **Payment ID:** (progressive) identifier of a payment within an OdP
* **Creditor:** institution beneficiary of the payment
* **Amount:** amount foreseen for the payment
* **Payment reason:** Reason for the individual payment
* **Taxonomy:** Taxonomy of the service associated with payment.
* **IBAN:** IBAN to which the amount will be transferred.

## Spontaneous payment

We can consider a **spontaneous payment** as a  _“special case”_ of a **Debt position** that is created at the moment of the request by the user.

In case of a spontaneous payment:

* A **OdP** corresponds to the request for a **Spontaneous payment (PS).**
* An **OdP** can be associated with multiple possible **payments** (based on the type of spontaneous payment).
* The **PD** connected to the **OdP** will have only that **OdP.**
* A **CIT** can have one or more **PDs** (if a CIT exists in the system, there must be _at least one_).

### Enrollment to spontaneous payment services (logical scheme)

![](../../.gitbook/assets/EnrollmentPS.drawio (3).png)

A **Creditor** who has registered for spontaneous payment management, can register with multiple **services.** The availability of the services depends on the service catalog of the pagoPA platform.

Some relevant properties of the relationships in question are provided below.

#### Creditor

* **identifier:** Fiscal code of the creditor that registered for management of spontaneous payment services
* **company name:** The company name of the creditor.

#### **Service**

* **idServizio:** ID of the service, as defined by the pagoPa platform with the service catalog
* **name**: name of the service
* **description:** description of the service
* **service properties**: for managing the specific characteristics of the service
* **taxonomy**: taxonomy of the service

{% hint style="info" %} If the Creditor needs to manage particular payment options for a specific service that require specific actions for data recovery, the _GPS_ platform makes it possible for Creditors and Technological intermediaries to expose a service for the creation of ad-hoc payment options. This service will be invoked by the _GPS_ platform for recovering the payment option curing the creation of the debt position.

This service can be configured by setting two `properties` that are part of the _service_ entity:  

**`endpoint`**: Service _URL_ for recovery of the payment option

**`basePath`**: _context root_ of the service for the recovery of the payment option

If it would become necessary, _PagoPA_ will provide the specifications for implementing the service. {% endhint %}

#### Enrollment

* **IBAN**: IBAN for collecting the spontaneous payments generated for a specific service
* **office name:** office of reference for the specific service
* **payment reason**: payment reason to be assigned to spontaneous payments generated for a specific service

## PA postal payment slip

If the EC has at least one postal current account for collections, it is necessary that it follows what is indicated in [#bollettino-postale-pa](../../creditor/integration-methods/best-practice.md#bollettino-postale-pa "mention") for the creation of the **PD.** 