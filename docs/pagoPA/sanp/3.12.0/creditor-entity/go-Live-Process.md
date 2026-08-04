---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/processo-di-avvio-in-esercizio
---

# Go-Live Process

The go-live process for a directly connected EC involves meeting certain prerequisites concerning the setup of a testing environment, a production environment, and a disaster recovery plan.

The CE, based on the declared models, that wishes to make its payment services available on the pagoPA platform is required to activate:

- an external physical test connection;
- a production physical connection.

The CE must also provide all the necessary information for the activation of at least one station in the external test environment and at least one station in the production environment. The definition of the station is the responsibility of the entity directly connected to the platform.

Depending on the implemented payment models and the rules/preferences of the directly connected entity, each physical connection can have a variable number of stations. The configuration of a CE on the platform is completed by associating the CE with at least one of its stations. All these activities must be performed by the Technical Contact through the pagoPA BackOffice (for more details, please refer to the [User Manual](https://docs.pagopa.it/manuale-back-office-pagopa/)).

The CE must fill out an indemnity waiver for the execution of the services covered by the test cases indicated by PagoPA S.p.A.. The indemnity waiver must be delivered to PagoPA S.p.A. duly completed and digitally signed by the CE's Technical Contact.

In the indemnity waiver, the Technical Contact declares their intention to make their services available through the execution of payment transactions on the pagoPA platform and guarantees to have successfully completed, in both the external test environment and the production environment, all test cases required by PagoPA S.p.A. as of the date of signing the document.

For the go-live of a CE, the Technical Contact can proceed as follows:

1. decide whether or not to proceed with the tests planned for the external test environment, possibly with the support of PagoPA S.p.A. staff. If they decide to perform the tests, they must:
   - provide the credit IBANs to be used in the external test environment;
   - propose a start date for the tests to PagoPA S.p.A. in order to coordinate the planned activities;
2. once the external test IBANs are configured and the tests are completed with the support of PagoPA S.p.A., the Technical Contact fills out the "Testing Report" and waits for PagoPA S.p.A. to validate it and formally close the testing phase;
3. once the testing phase is finished (2), which can also occur without the direct involvement of PagoPA S.p.A., the Technical Contact decides whether to proceed with the execution of the tests planned for the production environment, possibly with the support of PagoPA S.p.A. staff.. If they decide to perform the tests, they must:
   - provide the credit IBANs to be used in the production environment (they can add new ones or use IBANs already active for that CE);
   - once the IBANs are configured in the Pre-production phase and the tests are completed with the support of PagoPA S.p.A., the TC fills out the "Pre-production Report" and waits for PagoPA S.p.A. to validate it to close the activities.
4. once the pre-production phase is completed, which can also occur without the direct involvement of PagoPA S.p.A., the TC fills out the indemnity waiver and waits for PagoPA S.p.A. to validate it and formally close the CE's activation on the platform;
5. PagoPA S.p.A. authorises the CE for production by inviting the Entity's Payments Contact to activate at least one credit IBAN on the pagoPA BackOffice, if none are present.
