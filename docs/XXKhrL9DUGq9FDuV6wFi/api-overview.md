# API overview

PDND Interoperability makes a REST API available, which permits all the CRUD operations necessary for managing the information to be stored.

The API is part of the Interoperability APIs and it can be accessed after obtaining a valid voucher related to an _Interop API client_.

The system permits managing traces only for your own institution. The identification of the caller by PDND Interoperability takes place using the information contained in the voucher (token JWT) included in the header of the call, according to [standard PDND standard patterns](https://app.gitbook.com/s/b8HnYwaAzhxRFAZdZBXL/manuale-operativo/utilizzare-i-voucher).

### Management of the information

The system allows members to manage the sending of CSV files containing information related to the transactions carried out. After receiving the single file, the system proceeds with CSV validation.

If there are no errors, the system processes the data, adding additional details and saves the individual records.

Otherwise, the errors can be checked and fixed. Or, if necessary, the previously entered data can be updated.

{% hint style="info" %} The data must be uploaded with a daily scan. For example, a CSV will be uploaded related to the exchanges that took place on January 20, 2025, and then another on January 21, 2025 etc. for all the days on which transactions were recorded. {% endhint %}

### Integration via OpenAPI

The system is designed to integrate services via OpenAPI.

#### Offered services

<table data-header-hidden><thead><tr><th width="97">Method</th><th width="329">Endpoint</th><th>Description</th></tr></thead><tbody><tr><td>POST</td><td><code>/tracings/submit</code></td><td>Submission of a trace for a day. Returns the <code>tracingId</code> of that trace</td></tr><tr><td>GET</td><td><code>/tracings</code></td><td>List of traces for the requesting institution</td></tr><tr><td>GET</td><td><code>/tracings/{tracingId}/errors</code></td><td>Detail of the errors contained in a single trace</td></tr><tr><td>POST</td><td><code>/tracings/{tracingId}/recover</code></td><td>Recovery of the information in a trace that has errors or missing data</td></tr><tr><td>POST</td><td><code>/tracings/{tracingId}/replace</code></td><td>Complete replacement of the data of a previously uploaded trace</td></tr></tbody></table>

#### OpenAPI specification

The OpenAPI specification of the tracing API is available at the [following address](https://github.com/pagopa/interop-tracing-core/blob/develop/packages/api/open-api/api-external-interop-v1.yaml).