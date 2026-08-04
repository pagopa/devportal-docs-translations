---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/posizioni-debitorie/stati-della-posizione-debitoria-v1
---

# Payment Position States V1

According to the GPD V1 API data model, the **Debt Position** is represented by the _Payment Position_ entity, which acts as the main aggregator. It contains one or more **Payment Options** _(Payment Option)_. The latter are used to represent individual payment instances, including **Installments**.

### Payment Position FSM

Transitions marked with the **API** label indicate operations explicitly invoked by the client. All other transitions occur automatically based on internal logic (e.g. time-based deadlines) or are triggered by the payment lifecycle.

<figure><img src="../../.gitbook/assets/Screenshot 2026-01-14 alle 14.03.35.png" alt=""><figcaption></figcaption></figure>

**Creating the payment position**

When creating the payment position, the initial state is assigned based on the configuration of the `toPublish` and `validityDate` parameters. The validity date, if not provided, defaults to the request processing time.

1. Creation in DRAFT state: occurs when the position is instantiated with the `toPublish` flag set to `false`.
2. Creation in PUBLISHED state: occurs when the position is instantiated with the `toPublish=true` flag and `validityDate` is provided.
3. Creation in VALID state: occurs when the position is instantiated with the `toPublish=true` flag and `validityDate=null`.

**Managing the payment position**

4. Updates (_API Update 4, 5, 6, 7_): It is possible to move the position between DRAFT, PUBLISHED, and VALID by modifying the `toPublish` and `validityDate` fields.

If the request has the `toPublish=true` flag without specifying a validity date (`validityDate=null`), the system automatically moves the Payment Position from the DRAFT or PUBLISHED state to the VALID state.

When updating a position that is already in the VALID state, if `validityDate` is not specified and `toPublish=true`, the system keeps the original validity date unchanged.

**Publishing the payment position**

8. The API publish operation triggers the state transition from DRAFT to PUBLISHED, simultaneously setting the `publishDate` attribute to the current timestamp.

**Automatic transition to VALID state**

9. Automatic Transition: upon reaching the `validityDate` provided at the payment position level, the system automatically moves the position from PUBLISHED to VALID (_Time Trigger_).

**Payment and reporting**

10. Transition to PARTIALLY\_PAID: The partial payment of some of the payment options causes the position to transition to the PARTIALLY\_PAID state.
11. Transition to PAID: The full payment of the amount due, resulting from the payment of all scheduled payment options, triggers the transition to the PAID state.
12. Transition to REPORTED: A state reached at the end of the reporting phase, once all payments (_Transfer_) associated with the payment options have been reconciled.

**Expiring the payment position**

A position in the EXPIRED state is not payable.

13. Automatic transition to EXPIRED state: Exceeding the latest due date (`dueDate`) among all payment options, when the `switchToExpired` parameter is active, causes the position to automatically transition to the EXPIRED state.
14. Restoring the VALID state: Updating the position's data by entering a future and valid `dueDate` triggers the transition from the EXPIRED state to the VALID state, making the position payable again.

If `switchToExpired` is disabled, the position remains in the VALID state even if the latest `dueDate` has passed.

**Cancelling the payment position**

15. Transition to INVALID state: Cancelling the payment position causes the transition to the INVALID state. This state marks the definitive closure of the position's lifecycle, making it no longer payable.

#### Business Rules <a href="#regole-di-business" id="regole-di-business"></a>

**Date constraints**

1. During creation, update, and publication, the due date (`dueDate`) must be strictly after the validity start date (`validityDate`).
2. The `retentionDate` field is not managed in the current version (SANP-3.11.0).

**State types**

1. The _updatable_ states are`DRAFT`, `PUBLISHED`, `VALID`, `EXPIRED`. It is possible to update the Payment Position when it is in one of the mentioned states.
2. The _immutable_ states are`PARTIALLY_PAID`, `PAID`, `REPORTED`. No API modifications are allowed for the Payment Position once it has reached the mentioned states.
3. The _payable_ states are `VALID`, `PARTIALLY_PAID`: if the position is in these states, payment operations are allowed on one or more payment options.
   1. In the `VALID` state, all active options, i.e., those in the `UNPAID` state, are payable.
   2. In the `PARTIALLY_PAID` state, only the options (i.e. remaining installments) related to the already initiated payment method are payable.

**Payment logic**

1. Single Payment (`isPartialPayment = false`): Represents payment in a single installment. Paying the single option causes the Payment Position to transition to the **PAID** state.
2. Installment Payment (`isPartialPayment = true`): Represents a fractional payment (i.e. installments). The transition to the **PAID** state occurs _only if and when_ all partial options are settled. Until fully paid, the Payment Position remains in the **PARTIALLY PAID** state.
3. Mutual Exclusion of Payment Options: The two payment methods are alternative and mutually exclusive. If a payment is made on a _Single_ type option, the _Partial_ type options will become non-payable, and vice versa. Specifically, during the verification and activation of the alternative option, the Fault Code `PAA_PAGAMENTO_SCONOSCIUTO` will be issued.

### Payment Option FSM

<figure><img src="../../.gitbook/assets/Screenshot 2025-12-24 alle 11.52.18.png" alt=""><figcaption></figcaption></figure>

**Business rules**

It is the state of the Payment Position that determines whether the Payment Option can be updated: it is not possible to update Payment Options whose Payment Position is in a non-updatable state.

{% hint style="info" %}
The only mechanism allowed to specifically update a single Payment Option is by invoking the endpoint:\
`POST /organizations/{organizationfiscalcode}/paymentoptions/paids/{nav}`.\
This operation forces the option's transition to the PAID state, regardless of the Payment Position's current state.
{% endhint %}

**Meaning and management of dates in GPD (v1)**

Within the GPD service, dates are distributed across different entities (Payment Position, Payment Option, Installment) and are divided into two logical categories.

The following _**dates**_ are provided by the Entity and determine the behavior of the position's lifecycle.

1. `validityDate` (Payment Position): Determines the time constraint from which the Payment Options become due and the Position assumes the VALID state.
2. `dueDate` (Payment Option): Defines the option's expiration date. In combination with the active `switchToExpired` flag, it makes the Option no longer payable after the specified date has passed.

Conversely, there are _**dates**_ automatically generated and updated by the system, which the Entity can access in read-only mode.

1. `insertedDate` (Payment Position and Payment Option): Timestamp of the entity's technical creation in the system.
2. `publishDate` (Payment Position): Date on which the position assumed the PUBLISHED state.
3. `paymentDate` (Payment Option): Date of the actual payment, acquired through the _Receipt_ generated by the Payments Hub.
4. `reportingDate` (Payment Option): Date on which the option was fully reported (flow of _Transfers_ completed).
5. `last_updated_date`: Timestamp of the last modification made to the resource (both via API and through system processes).
6. `last_updated_date_notification_fee` (Payment Option): Date of the last update related to notification fees.
