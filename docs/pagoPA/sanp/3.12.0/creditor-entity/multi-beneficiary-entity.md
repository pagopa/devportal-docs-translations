---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/tributi-multi-beneficiario
---

# Multi-beneficiary tributes

The current payment workflows enabled on the pagoPA platform also have the following aims:

- to manage with a single notice cases where the amount paid is credited, in part, to the accounts of different Beneficiary Entities (so-called multi-beneficiary entity);
- to provide all Beneficiary Entities with the same information and notifications provided for the EC that issues the Notice.

For purely indicative and non-exhaustive purposes, other use cases provided by the pagoPA platform are listed below:

- notice whose amount is credited in full to a single account of the same Beneficiary Entity that created the debt position (so-called single-beneficiary single-payment entity);
- single notice whose amount is credited, in part, to different accounts of the same Beneficiary Entity that created the debt position (so-called single-beneficiary multi-payment multi-IBAN entity);
- single notice whose amount is credited to a single account of the same Beneficiary Entity that created the debt position but is split into multiple transfers within the response of the [paGetPayment](../appendix/Primitives/Creditor-Entity/api-soap.md#pagetpayment) (so-called single-beneficiary multi-payment multi-taxonomy entity);
- notice whose amount is credited in full to a single account of the Beneficiary Entity, which is different from the Entity that created the debt position (so-called single-beneficiary SUAP case);
- single notice whose amount is credited, in part, to the accounts of different Beneficiary Entities, not including the Entity that created the debt position (so-called multi-beneficiary SUAP case);

Please note that anything compatible with the syntactic and semantic checks, best practices, quality indicators, and all other operating instructions for the pagoPA platform provided in this document must be considered legitimate.
