# PSP Integration Method

The system is designed to standardize communication between the pagoPA POS Gateway and the PSP's POS Layer, without any direct interaction with the physical terminal. Consequently, just as it is today, the financial management of the transaction and the timely transmission of outcomes from the POS to the Creditor Entity remain the full responsibility of the payment terminal provider.

To connect to this centralized architecture, the PSP must comply with the interoperability specifications of the pagoPA POS Gateway presented in this section.

### Logical Integration Workflow

<img src="../../../.gitbook/assets/unknown (9).png" alt="" height="495.32878378119835" width="602">

The flow is divided into sequential phases between the pagoPA POS Gateway and the PSP's POS Layer:

- **PHASE 1: Retrieve POS terminal list** \
  The pagoPA POS Gateway will query the PSP's POS layer to retrieve the list of available POS terminals for that specific Creditor Entity.
- **PHASE 2: POS payment initialization**\
  The pagoPA POS Gateway will transmit the data needed to activate the payment on the terminal to the PSP's POS Layer. The PSP's POS Layer must activate the POS terminal for payment with the specified amount.
- **PHASE 3: Payment outcome communication**\
  The PSP's POS Layer will send the outcome and references of the payment transaction to the pagoPA POS Gateway.

In case of a successful payment transaction on the POS terminal, the pagoPA POS Gateway will transfer the outcome and references of the completed transaction to the pagoPA payments node, in order to transmit information to the PSP according to the established communication methods.

### System Resilience

The system is designed to ensure the consistency of payment sessions through the following properties:

- **Consistency between the PSP's POS Layer and the pagoPA POS Gateway**\
  The pagoPA POS Gateway will provide a reconciliation mechanism with the PSP's POS Layer regarding the authorization outcomes of payment sessions in order to keep track of transactions that have not reached a consistent state. This activity will allow for easier identification of potential refund cases that the PSP may be required to process.
- **Idempotency** \
  The interfaces of the PSP's POS Layer and the pagoPA POS Gateway must ensure the idempotency of each call and allow for retries.
- **Session expiration (Timeout)**\
  The pagoPA POS Gateway will impose a session timeout on the receipt of the authorization outcome from the PSP's POS Layer. Any outcome information (callback) sent by the PSP after this time limit will be automatically rejected by the pagoPA POS Gateway with a specific error code.
- **Retry**\
  In case of a transient error, the PSP must implement logic to resend the authorization outcome information for the entire duration of the session until an outcome is obtained.

### Technical Integration and Configuration

To use the pagoPA POS Gateway, the PSP must configure the necessary parameters for correct call routing within the pagoPA Back Office:

- **Communication interfaces**\
  The PSP must register the host where the APIs to be called by the pagoPA POS Gateway will be exposed.

<br>

\ <br>
