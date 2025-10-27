# Information Data Catalog

The Information Data Catalog is the tool with which the PSP communicates to its potential customers, users of the pagoPA platform, the conditions of use regarding the services it makes available and the maximum commission that can be charged. 

For each active service (channel), the PSP produces the information that the pagoPA platform makes available to the payers via its product website and, during payment, via the _Checkout_ component. 

The PSP maintains this information autonomously, providing that they make a semantically correct catalog available that passes the application controls based on the structure [https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/general/CatalogoDatiInformativiPSP.xsd](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/general/CatalogoDatiInformativiPSP.xsd).

The PSP is responsible for ensuring exact correspondence between what is declares in its Information Data Catalog and what it indicates to the user during the payment phase.

In addition to the data regarding the [commissions.md](../commissions.md "mention"), particular attention must also be paid to the following:

* _urlInformativaPSP_ which contains the link to the information sheet of the PSP that is published on the product website of the pagoPA platform, so that pre- or post-contractual disclosures to the payment transaction are available on the pagoPA platform;
* _urlConvenzioniPSP_ which contains the link to the page that contains any agreements between the PSP and the creditors, if present, this link is published on the product website of the pagoPA platform.

![](../../.gitbook/assets/image (23).png)

The PSPs can request a Information Data Catalog template by means of a call to [nodoChiediTempateInformativaPSP](../../appendices/primitive.md#nodochieditemplateinformativapsp), and in response they will receive an xml with the structure indicated above and with some fields already completed based on the information already available to the Node.

The updates to the information provided by the PSP are made available by the specified data of validity, providing it is at least the day after transmission, and must be sent to PagoPA S.p.A. to the Level I Support Service at the address [pagamenti@assistenza.pagopa.it](mailto:pagamenti@assistenza.pagopa.it) or by opening a support case on the Service Portal dedicated to PSPs.