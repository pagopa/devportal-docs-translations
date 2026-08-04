# EC Integration Method

The integration of the Creditor Entity with the pagoPA POS Gateway enables a _real-time_ payment model that meets the immediacy needs of the physical counter, while reducing the constraints related to the specific hardware model (POS) adopted.

To connect to this centralized architecture, the Entity must align its counter management software with the interoperability specifications of the pagoPA POS Gateway.

### Logical Integration Workflow

<img src="../../../.gitbook/assets/unknown (7).png" alt="" height="570" width="533">

The flow is designed to ensure a payment experience between the EC's Management System, the POS terminal, and the pagoPA POS Gateway:&#x20;

- **PHASE 1: Session initialization**
  The EC will query the pagoPA POS Gateway to obtain the payment session identifier and possibly retrieve the list of available terminals.
- **PHASE 2: pagoPA and POS payment initialization**
  The EC will transmit the debt position data to the pagoPA POS Gateway, which will manage the orchestration between the different actors in the ecosystem and initialize the payment on the POS terminal.
- **PHASE 3: Payment outcome communication**
  The EC's management system will await the outcome of the financial authorization from the PSP through the pagoPA POS Gateway via callback (push).

### System resilience

The system is designed to ensure the consistency of payment sessions through the following properties:

- **Consistency of the payment session outcome among the various actors**
  The payment session can be considered correctly concluded only when the outcome received by the EC's management system from the pagoPA POS Gateway is consistent with the authorization outcome of the payment session executed on the POS terminal.
- **Idempotency**
  The interfaces exposed by the pagoPA POS Gateway and those implemented by the EC must ensure idempotency. In case of a retry due to network errors or timeouts, the EC and the pagoPA POS Gateway must be able to handle receiving the same outcome without generating duplicates or logical errors.
- **Session expiration (Timeout)**
  The pagoPA POS Gateway will impose a session timeout for the completion of the initialization phase and outcome reception.
- **Retry**
  Sending the outcome to the EC will be subject to _retry_ by the pagoPA POS Gateway in case of transient communication errors.

### Technical integration and configuration

To use the pagoPA POS Gateway, the EC must configure the necessary parameters for correct call routing within the pagoPA Back Office:

- **Identification of the POS terminal provider**

  The EC must register the data of the entity providing the collection service via POS. This configuration will enable the pagoPA POS Gateway to correctly route requests to the specific PSP layer that manages the EC's POS terminals.
- **Communication interfaces**
  The EC must register the host on which the APIs to be called by the pagoPA POS Gateway will be exposed.

<br>
