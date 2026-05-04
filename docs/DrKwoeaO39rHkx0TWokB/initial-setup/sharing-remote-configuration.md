# Sharing remote configuration

This configuration is necessary if you want to use one of the following functions:

1. [send-a-message-remote-content.md](../function/send-a-message/send-a-message-remote-content.md "mention")
2. [add-attachments.md](../function/send-a-message/add-attachments.md "mention")

For both functions, it is in fact necessary to \*\*provide a\*\*_**REST web service**_ in compliance with the [relative OpenAPI](https://editor.swagger.io/?url=https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api\_remote\_content.yaml).

The service must \*\*have 2 or 3 \*\*_**endpoints**_, depending on the [type of agreement](https://docs.pagopa.it/kb-enti-accordi/domande-frequenti/domande-e-risposte-sugli-accordi#quali-sono-le-formule-contrattuali-possibili-per-aderire-allapp-io) you signed with PagoPA, which the IO backend will call when necessary:

<table><thead><tr><th width="207">Signed agreement</th><th width="139" data-type="checkbox">Preconditions</th><th width="191" data-type="checkbox">Message details</th><th data-type="checkbox">Attachments</th></tr></thead><tbody><tr><td>Standard</td><td>true</td><td>true</td><td>false</td></tr><tr><td>Fast</td><td>true</td><td>true</td><td>false</td></tr><tr><td>Premium</td><td>true</td><td>true</td><td>true</td></tr></tbody></table>

For details about how to design the endpoints and the relative APIs, refer to \[openapi-recovery-endpoint-of-remote-content.md]\(../api-and-specifications/openapi-recovery-endpoint-of-remote-content.md "mention").

Once ready, inform the IO team of the _endpoints_ (indicating the base URL) and the relative [#api-key](sharing-remote-configuration.md#api-key "mention") that IO will use for authentication at your systems.

{% hint style="info" %}
To communicate the configuration to the IO team, use the email address \[io-service-management@pagopa.it]\(mailto:io-service-management@pagopa.it).

For all other requests, remember that the address to use to communicate with IO is [onboarding@pagopa.it](mailto:onboarding@pagopa.it).
{% endhint %}
