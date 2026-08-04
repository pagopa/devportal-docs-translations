---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendices/srtp-service-integration/psp
---

# PSP

This appendix complements the "Implementing Specifications of the Payments Hub" (SANP), providing a detailed guide for Payment Service Providers (PSPs) on integrating the [European Payments Council's SEPA Request-To-Pay (SRTP)](https://www.europeanpaymentscouncil.eu/what-we-do/other-schemes/sepa-request-pay) (EPC) scheme into the PagoPA ecosystem.&#x20;

RTP represents a strategic evolution for public payments in Italy, improving efficiency and user experience. This document outlines the fundamentals of the operating model defined by the Bank of Italy for the PagoPA context and the technical and operational implications for PSPs.

#### 1. The Context: The Italy Payments Committee (CPI) and Its Mandate

The Italy Payments Committee (CPI), established by the Bank of Italy in 2015, aims to strengthen the Italian payments industry and coordinate with European initiatives such as the Euro Retail Payments Board (ERPB). The CPI's "Public Payments Workgroup" has developed the document "[Request To Pay in the PagoPA context: Operating model and application instructions](https://www.bancaditalia.it/compiti/sispaga-mercati/comitato-pagamenti-italia/CPI-Tavolo-Incassi-Pagamenti-Pubblici-RTP-PagoPA-ver-1.2.pdf)", providing instructions for implementing RTP that ensure adherence to the EPC scheme and coordination with the functionalities of the PagoPA platform.

More details are described [in the CPI workgroups section](https://www.bancaditalia.it/compiti/sispaga-mercati/comitato-pagamenti-italia/).

#### 2. Adhesion Process

To join the PagoPA system and offer SRTP services, PSPs must follow a structured process that combines formal and technical requirements.

The first formal step for a PSP is to sign the **Service Agreement with PagoPA**, which involves the following steps:

1. **Adherence to the EPC SRTP Scheme:** PSPs intending to act as SRTP Service Providers (SRTPSPs) must adhere to the EPC SRTP scheme. This implies accepting the rights and obligations defined in the EPC's SRTP Scheme Rulebook.
2. **Homologation Process:** Adherence to the EPC SRTP scheme requires passing a homologation process. This process, managed by an independent homologation body appointed by the EPC, assesses the PSP's technical, operational, security, and business continuity capabilities. There are different types of homologation, including simplified ones for PSPs that use a Referenced Technical Solution Provider (RTSP). The EPC Secretariat maintains a public register of homologated participants. &#x20;
3. **Technical Test Plans:** Once formal adhesion and homologation are complete, PSPs must pass specific test plans to go live. The documentation for the test plans is provided by PagoPA after formal adhesion.
4. **Technical Integration and APIs:** Technical implementation requires adopting an approach based on APIs available on the [PagoPA DevPortal](https://developer.pagopa.it/srtp/api).
