# Terms and conditions and SLAs

## Platform Manager

**PagoPA S.p.A.** is designated as the **Platform Manager** and acts as the **data controller** pursuant to **Paragraph 14 of the AgID Guidelines**, on which the **Italian Data Protection Authority** has expressed a favorable opinion.

## Terms and Conditions

The **Terms and Conditions of Use** are made available to the user **upon their first access** to the PDND front office and represent the **current reference** for using the platform. Users are required to **review any updates** published over time. The terms are provided in a **non-editable format**, and **acceptance** is a **mandatory condition** for continuing access to the services provided by PagoPA S.p.A.

In accordance with this approach, the Terms and Conditions of Use **are not an annex** to the party’s **Membership Agreement**. To facilitate review, it is possible to [**consult the terms**](https://selfcare.interop.pagopa.it/ui/it/termini-di-servizio) before completing the subscription to PDND.

### Limitations of Liability

The **Limitation of Liability clause** of **PagoPA S.p.A.** is **restricted to two specific areas**:

1. **Testing environment**: this environment is intended for tests and experiments; the service is provided with non-final characteristics and **may present** discontinuities or anomalies related to the underlying infrastructure.
2. **Maintenance operations** (scheduled or extraordinary): during technical activities, the service **may experience** temporary unavailability or performance degradation.

In these contexts, **the exclusion of additional infrastructure-related issues is outside the warranty scope**.

## SLA — Service Level Agreement

In accordance with the AgID Guidelines – §13 (“Service levels of the infrastructure”), PDND adopts the following **service commitments** for the **production environment**, concerning the **access token issuance endpoint**:

* **Indicator 13.1.1 – Response time percentile:**\
  P90 of 10 seconds over a 120-minute interval, meaning that “within 120 minutes, 90% of requests are processed within 10 seconds.”
* **Indicator 13.1.2 – Number of requests per unit of time:**
  * Production environment: 1,440,000 requests over 120 minutes (200 requests per second).
  * Other environments: 720,000 requests over 120 minutes (100 requests per second).
* **Indicator 13.1.3 – Number of error responses per unit of time:**\
  A maximum of 3% over a 120-minute interval.
