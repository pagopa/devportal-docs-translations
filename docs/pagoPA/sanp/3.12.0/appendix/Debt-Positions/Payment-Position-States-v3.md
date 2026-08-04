---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendices/payment-positions/payment-position-states-v3
---

# Payment Position States V3

According to the GPD V3 API data model, the **Payment Position** is represented by the _Payment Position_ entity, which acts as the main aggregator. It contains one or more **Payment Options** (_Payment Option_), which in turn are structured into one or more **Installments** (_Installment_).

### Payment position FSM<br>

<figure><img src="../../.gitbook/assets/Screenshot 2026-01-19 alle 14.21.17.png" alt=""><figcaption></figcaption></figure>

**Creating the payment position**

When creating the payment position, the initial state is assigned based on the configuration of the `toPublish` and `validityDate` parameters. The validity date of payment options with `validityDate=null` is set by default to the time the request is processed.

1. Creation in DRAFT state: occurs when the position is instantiated with the `toPublish` flag set to `false`.
2. Creation in PUBLISHED state: occurs when the position is instantiated with the `toPublish=true` flag and all option `validityDate`s are set.
3. Creation in VALID state: occurs when the position is instantiated with the `toPublish=true` flag and at least one option contains `validityDate=null`.

**Managing the payment position**

4. Updates (_API Update 4, 5, 6, 7_): It is possible to move the position between DRAFT, PUBLISHED, and VALID by modifying the `toPublish` and `validityDate` fields.

If the request has the `toPublish=true` flag without specifying a validity date (`validityDate=null`) for at least one option, the system automatically moves the position from either the DRAFT or PUBLISHED states to the VALID state.

When updating a position that is already in the VALID state, if the `toPublish` flag is `true`, the system keeps the original validity date unchanged for existing options with `validityDate=null`.

**Publishing the payment position**

8. The API publication operation causes the state transition from DRAFT to PUBLISHED, while also setting the `publishDate` attribute to the current timestamp.

**Automatic transition to VALID state**

9. Automatic Transition: Upon reaching one of the `validityDate`s provided at the payment option level, the system automatically moves the position from PUBLISHED to VALID (_Time Trigger_). It is sufficient for one of the options to be _valid_.

**Payment Flow**

10. Transition to PARTIALLY\_PAID: The partial payment of some of the Installments (i.e. _Installments_) causes the position to transition to the PARTIALLY\_PAID state.
11. Transition to PAID: The full payment of the amount due, resulting from paying all Installments in the chosen Payment Option, triggers the transition to the PAID state.

**Expiration of the payment position**

A position in the UNPAYABLE state is not payable due to expiration.

12. Automatic transition to UNPAYABLE state: The system automatically transitions the Payment Position from the VALID state to UNPAYABLE, inhibiting payment, when two conditions are met jointly for all Payment Options:
    1. The `switchToExpired` flag (set as input on the Payment Option) is enabled.
    2. The latest due date (`dueDate`) among all Installments related to the Payment Option has been passed.
13. Restoration to VALID state: Updating the position data by entering a future and valid `dueDate` triggers the transition from the EXPIRED state to the VALID state, making the position payable again.

If a Payment Option exists with at least one Installment that has not reached its `dueDate` or with the `switchToExpired` flag disabled, the Payment Position remains in the VALID state.

#### Business Rules <a href="#regole-di-business" id="regole-di-business"></a>

**Date Constraints**

1. During creation, update, and publication, the due date (`dueDate`) of each Installment must be strictly after the start validity date (`validityDate`) of the corresponding Payment Option.
2. The `retentionDate` field is not handled in the current version (SANP-3.11.0).

**State Types**

1. The _updatable_ states are `DRAFT`, `PUBLISHED`, `VALID`, `UNPAYABLE`. It is permitted to update the Payment Position when it is in one of the mentioned states.
2. The _immutable_ states are `PARTIALLY_PAID`, `PAID`. API modifications to the Payment Position are not allowed once the mentioned states are reached.
3. The _payable_ states are `VALID`, `PARTIALLY_PAID`: if the position is in these states, payment operations are allowed on one or more Installments (i.e. _Installments_).
   1. In the `VALID` state, all active Installments are payable, i.e., those in the `UNPAID` state.
   2. In the case of `PARTIALLY_PAID`, only the Installments (i.e. Installments) remaining for the payment method already started are payable.

**Payment Logic**

1. Single Payment: A Payment Option with a single Installment.\
   Represents payment in a single solution. Paying the single-installment option causes the Payment Position to transition to the `PAID` state.
2. Installment Payment: A Payment Option with multiple Installments.\
   Represents fractional payment (i.e. installments). The transition to the `PAID` state occurs _only if and when_ all installments of the partial option (i.e. installment plan) are paid. Until fully completed, the Payment Position remains in the `PARTIALLY PAID` state.
3. Multi-Installment Payment: Multiple Payment Options, each with multiple Installments.\
   A configuration that includes multiple alternative Payment Options, each divided into multiple installments.\
   The transition to the `PAID` state occurs _only if and when_ all installments belonging to the option chosen by the user are paid. Incomplete payment of the installments keeps the Payment Position in the `PARTIALLY PAID` state.
4. Mutual exclusion of Payment Options: The two payment methods are alternative and exclusive.\
   It is always possible to combine _Single_ _Options_ (with a single Installment) and _Installment Options_ (with multiple Installments, i.e. Installments)_ within the same payment position. If a payment is made on a Single Installment, the Installments (i.e. Installments) contained in the Installment Options will become non-payable, and vice versa.\
   In particular, during the verification and/or activation of the alternative option, the Fault Code `PAA_PAGAMENTO_SCONOSCIUTO` will be issued.

#### Installment FSM

Although the `EXPIRED` and `UNPAYABLE` states are present in the OpenAPI, there is no state transition in the application version corresponding to **SANP-3.11.0**. The meaning of these states is provided anyway.<br>

<figure><img src="../../.gitbook/assets/Screenshot 2025-12-24 alle 14.42.46 (1).png" alt=""><figcaption></figcaption></figure>

#### Business Rules <a href="#regole-di-business.1" id="regole-di-business.1"></a>

The updatability of the Installment depends on the state of the Payment Position. It is the state of the Payment Position that allows or disallows the updating of the Installment (i.e. Installment): it is not possible to update an Installment whose Payment Position is in a non-updatable state.

**Meaning and management of dates in GPD (v3)**

Within the GPD service, dates are distributed across different entities (Payment Position, Payment Option, Installment) and are divided into two logical categories.

The following _**dates**_ are provided by the Entity and determine the behavior of the position's lifecycle.

1. `validityDate` (Payment Option): Defines the moment from which the option's Installments become payable, triggering the transition of the Payment Position to the VALID state.
2. `dueDate` (Installment): Acts in combination with the `switchToExpired` flag. If the flag is active, the Installment is no longer payable from this date onwards.

On the other hand, there are _**dates**_ generated and updated automatically by the system, which are accessible by the Entity in read-only mode.

1. `insertedDate` (Payment Position and Payment Option): Timestamp of the entity's technical creation in the system.
2. `publishDate` (Payment Position): Date on which the position entered the PUBLISHED state.
3. `paymentDate` (Installment): Date of the actual payment, acquired through the _Receipt_ generated by the Payments Node.
4. `reportingDate` (Installment): Date on which the Installment was fully reported (_Transfer_ flow completed).
5. `last_updated_date`: Timestamp of the last modification made to the resource (either via API or through system processes).
6. `last_updated_date_notification_fee` (Installment): Date of the last update related to notification fees.

If a Payment Position is in the VALID state, but the citizen tries to pay an Installment whose `validityDate` has not yet been reached, the system will inhibit the payment, returning the `PAA_PAGAMENTO_SCONOSCIUTO` error. Although the Payment Position is formally in the VALID state (because at least one other Payment Option has reached its validity), only the Installments contained in the Options that have actually passed the time constraint imposed by their respective `validityDate` remain payable.
