# Further details

PDND authenticates and authorizes members, enabling the exchange of information between parties. Data residing in the databases owned by data providers never transit through the platform.

The only data held by PDND are those uploaded or generated within the platform and related to its operation (e.g. a request by a member to consume another member’s e‑service, called "Richiesta di fruizione", _Service request_).

## Terms and conditions

The platform manager, identified as PagoPA S.p.A., is designated as the data controller under Paragraph 14 of the [AgID Guidelines](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto_allegati/213481831510O__O20211210_LG+Infrastruttura+Interoperabilit%26%23224%3B+PDND_v1.pdf), which have been given a favorable opinion by the Italian Data Protection Authority ([Garante per la Protezione dei Dati Personali](https://www.garanteprivacy.it/)).

The terms and conditions are presented to the user upon their first access to the PDND back office and should be reviewed for updates. These terms are not included in a separate, modifiable document, and acceptance is mandatory to proceed with accessing services provided by PagoPA S.p.A.

For this reason, they are not attached to the membership agreement for PDND. However, it is possible to review the [terms of service](https://selfcare.interop.pagopa.it/ui/it/termini-di-servizio) (currently Italian only) in advance to facilitate negotiation and understanding.

## Limitations of liability

PagoPA S.p.A.’s limitations of liability apply specifically to two areas: Testing environment and maintenance. In these cases, the absence of possible issues related to the infrastructure cannot be guaranteed.

## SLA — Service Level Agreement

In compliance with Paragraph 13 of the [Linee Guida AgID](https://www.agid.gov.it/sites/agid/files/2024-06/Linee_guida_infrastruttura_interoperabilita_pdnd.pdf) concerning infrastructure service levels for PDND, the platform guarantees the following SLAs for access token generation:

* **Indicator 13.1.1 – Response time per percentile:**\
  The P90 is 10 seconds within a 120-minute interval (i.e., “within any 120-minute window, 90% of requests are processed within 10 seconds”);
* **Indicator 13.1.2 – Number of requests per time unit:**
  * Production environment: 1,440,000 requests per 120 minutes (i.e., 200 requests per second);
  * Other environments: 720,000 requests per 120 minutes (i.e., 100 requests per second);
* **Indicator 13.1.3 – Error response rate per time unit:**\
  Maximum of 3% of requests resulting in an error response within a 120-minute window.
