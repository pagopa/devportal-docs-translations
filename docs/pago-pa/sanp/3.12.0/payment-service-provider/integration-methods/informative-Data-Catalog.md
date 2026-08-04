---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/payment-service-provider/integration-methods/informative-data-catalog
---

# Informative Data Catalog

The Informative Data Catalog is the tool through which the PSP communicates to its potential customers, users of the pagoPA platform, the terms of use for the services it makes available and the maximum commission fee that may be applied.

For each activated service (channel), the PSP provides the information that the pagoPA platform makes available to payers through its product website and, during the payment phase, through the _Checkout_ component.

The PSP is autonomous in maintaining this information, provided it makes available a semantically correct catalog that passes the application checks based on the [https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/general/CatalogoDatiInformativiPSP.xsd](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/general/CatalogoDatiInformativiPSP.xsd) structure.

The PSP is responsible for the exact correspondence between what it declares in the Informative Data Catalog and what it makes available to the user during the payment phase.

The data to which particular attention should be paid, in addition to those related to [commissioni.md](../commissioni.md "mention"), are:

- _urlInformativaPSP_ which contains the link to the PSP's information sheets that is published on the pagoPA platform's product website, so that the pre- or post-contractual information for the payment transaction on the pagoPA platform is available;
- _urlConvenzioniPSP_ which contains the link to the page displaying any agreements between the PSP and the Creditor Entities; if present, this link is published on the pagoPA platform's product website.

![](<../../.gitbook/assets/image (35).png>)

PSPs can request a template of the Informative Data Catalog via a call to [nodoChiediTempateInformativaPSP](../../appendix/Primitives/psp/soap-api.md#nodochieditemplateinformativapsp); in response, they receive an XML with the aforementioned structure and with some fields pre-filled based on the information already available to the Node.

Updates to the information provided by the PSP are made available from the specified validity date, provided it is no earlier than the day after submission, and must be sent to the PagoPA S.p.A. Level I Support Service by writing to [pagamenti@assistenza.pagopa.it](mailto:pagamenti@assistenza.pagopa.it) or by opening a ticket on the Support Portal dedicated to PSPs.
