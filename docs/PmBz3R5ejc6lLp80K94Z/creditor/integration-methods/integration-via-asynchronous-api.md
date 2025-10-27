# Integration via asynchronous API

If the creditors and/or their technological intermediaries and/or technical partners make use of integration via asynchronous API, this integration is made available by means of the Debt Position Management service (GPD), whose objective is to offer the technical management of the creditor's debt positions.

By registering with the Asynchronous Integration service for the management of their debt positions, they have the advantage of simplifying the technological infrastructure necessary for the interaction with the pagoPA platform, and in particular:

* respect the guidelines (the service is always updated to the latest functions of the pagoPA platform);
* guarantee the SLA (the service has load-based scalability mechanisms);
* ensure the measures of operational continuity that must be adopted by operators of payment systems and by critical suppliers of infrastructures or technical services in compliance with the obligations pursuant to art. 146 T.U.B. (Consolidated Banking Law) of monitoring performed by Banca d'Italia.

The service also enables new use cases for registered users, for example concerning spontaneous payment services and the management of payment notices, which is integrated in the service.

The objective of the service is not to supply specific solutions for creditors and/or their technological intermediaries and/or technological partners, such as interoperability with accounting and/or management software or the integration with SIOPE+, that is the mailing of the payment notices.

The creditor remains responsible in any case for ensuring the correctness of the debt position data communicated to PagoPA S.p.A. for the purposes of this service.

With reference to the processing of personal data, the creditor is the data controller for the personal data related to the debt position and, unless otherwise indicated formally in writing, adheres to the “Agreement on the processing of personal data by the data processor pursuant to article 28 or Regulation (EU) 2016/679”, thereby appointing PagoPA S.p.A. as the data processor. The agreement is available at the following link:

{% file src="../../.gitbook/assets/DPA_PagoPA_debt-positions_v1 (1).pdf" %}

If the creditor uses a technological intermediary and/or technological partner as the data processor for the debt position, the latter must adhere to the above mentioned Agreement, unless otherwise indicated formally in writing. PagoPA S.p.A. will therefore act as the sub-processor of the creditor, a prerequisite for this specific case is a general authorization from the data controller to the processor to make use of other processors.

If the creditor communicates that they do not want to adhere to the Data Processing Agreement and/or its amendments, registration to the service will remain suspended until the processing of personal data will be regulated by another agreement pursuant to art. 28 of Regulation (EU) 2016/679.

For more information about the functions offered by the service, refer to the appendix [ Debt positions](https://docs.pagopa.it/sanp/appendices/debt-positions), and, with reference to any other aspect concerning this integration, please contact the platform operator at [https://pagopa.atlassian.net/servicedesk/customer/portal/3](https://pagopa.atlassian.net/servicedesk/customer/portal/3) .

### Synchronous reception of the receipt

In consideration of the fact that the [ paSendRT vers. 2](https://docs.pagopa.it/sanp/appendices/primitive#pasendrt) is forwarded to: 

* the station of the primary creditor, from which the payment was activated;
* all stations of all the creditors configured as broadcast;

even if the creditor is integrated with the platform in asynchronous mode, they can activate a broadcast station for the synchronous reception of the receipt.

### Interaction with SEND

An entity registered with pagoPA that uses asynchronous integration, and if they are also registered with the platform as specified in art. 26 of Leg. Decree 76/2020 ( “SEND”), will benefit from a service that updates the notification costs thanks to the integration of the two platforms. This requires that the registered entity correctly indicates during the notice validation phase, for each IUV included in the notice; if that IUV is managed in synchronous or asynchronous mode.

The entity registered with pagoPA who uses asynchronous integration and is also registered with _SEND_ (hereafter jointly for both platforms “Registered entity”), accepts and acknowledges that:

**a)** PagoPA S.p.A. does not make any checks regarding the synchronicity/asynchronicity related to the IUV declared by the registered entity during the phase of creating the notice and, therefore:

**i.** if a notice declared as asynchronous is, instead, associated with synchronous IUVs, the notice will not be generated because the system will return an error;

**ii.** if a notice declared as synchronous is, instead, associated with asynchronous IUVs, the latter will not be updated and, as a result, the overall cost of the notices will not be updated. 

**b)** in the case specified above in letter a, ii., PagoPA S.p.A. is therefore entitled to reporting and invoicing the costs it paid in advance for the notice, even if it was not paid by the recipient to the registered entity due to the incorrect qualification of the notice as synchronous by the registered entity.