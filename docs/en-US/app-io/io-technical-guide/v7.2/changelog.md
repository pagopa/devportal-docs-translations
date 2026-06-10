# 🕗 Changelog

{% hint style="info" %}
Changes indicated as `minor` versions (the digit to the right of the dot) are not to be considered substantial; their purpose is to improve the experience.
{% endhint %}

### Version 7.2 (September 30, 2025)

- Deprecated the [attributes.md](funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md "mention"): [#organization\_name](funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#organization_name "mention"), [#organization\_fiscal\_code](funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#organization_fiscal_code "mention"), and [#department\_name](funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#department_name "mention") related to the _request body_ of the following [api-servizi](api-e-specifiche/api-servizi/ "mention"): [manage-service-create.md](api-e-specifiche/api-servizi/manage-service-create.md "mention"), [manage-service-update.md](api-e-specifiche/api-servizi/manage-service-update.md "mention").
- Deprecated the [#department\_name](funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#department_name "mention") attribute related to the _response body_ of the following [api-servizi](api-e-specifiche/api-servizi/ "mention"): [manage-service-create.md](api-e-specifiche/api-servizi/manage-service-create.md "mention"), [manage-service-update.md](api-e-specifiche/api-servizi/manage-service-update.md "mention"), [manage-service-get.md](api-e-specifiche/api-servizi/manage-service-get.md "mention"), [manage-service-get-user-services.md](api-e-specifiche/api-servizi/manage-service-get-user-services.md "mention"), [manage-service-get-released.md](api-e-specifiche/api-servizi/manage-service-get-released.md "mention")
- Removed the [#token\_name](funzionalita/pubblicare-un-servizio/dati-obbligatori/service-metadata.md#token_name "mention") field from [service-metadata.md](funzionalita/pubblicare-un-servizio/dati-obbligatori/service-metadata.md "mention") related to the following [api-servizi](api-e-specifiche/api-servizi/ "mention"): [manage-service-create.md](api-e-specifiche/api-servizi/manage-service-create.md "mention"), [manage-service-update.md](api-e-specifiche/api-servizi/manage-service-update.md "mention"), [manage-service-get.md](api-e-specifiche/api-servizi/manage-service-get.md "mention"), [manage-service-get-user-services.md](api-e-specifiche/api-servizi/manage-service-get-user-services.md "mention"), [manage-service-get-released.md](api-e-specifiche/api-servizi/manage-service-get-released.md "mention")

### Version 7.1 (July 9, 2025)

- Address change confirmation for [indirizzo-ip-pubblico.md](api-e-specifiche/indirizzo-ip-pubblico.md "mention")

### Version 7.0 (June 30, 2025)

- Updated [#accordo-di-adesione](setup-iniziale/#accordo-di-adesione "mention")
- Restored the [setup-iniziale](setup-iniziale/ "mention") section from version v6.0
- Deprecated the [#token\_name](funzionalita/pubblicare-un-servizio/dati-obbligatori/service-metadata.md#token_name "mention") field from [service-metadata.md](funzionalita/pubblicare-un-servizio/dati-obbligatori/service-metadata.md "mention") related to the following [api-servizi](api-e-specifiche/api-servizi/ "mention"): [manage-service-create.md](api-e-specifiche/api-servizi/manage-service-create.md "mention"), [manage-service-update.md](api-e-specifiche/api-servizi/manage-service-update.md "mention"), [manage-service-get.md](api-e-specifiche/api-servizi/manage-service-get.md "mention"), [manage-service-get-user-services.md](api-e-specifiche/api-servizi/manage-service-get-user-services.md "mention"), [manage-service-get-released.md](api-e-specifiche/api-servizi/manage-service-get-released.md "mention")
- updated the [Markdown Guide](risorse-utili/guida-al-markdown.md) section with updated instructions on "line breaks"

### Version 6.1 (June 25, 2025)

- Announcement of Developer Portal decommissioning date
- Updated [setup-iniziale](setup-iniziale/ "mention") section
- Added helpful guidance on PDF attachment name length in the [openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md](api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md "mention") section
- Changed domain references for `io.italia.it`

### Version 6.0 (March 31, 2025)

- Address change for [indirizzo-ip-pubblico.md](api-e-specifiche/indirizzo-ip-pubblico.md "mention")
- Added section [gestire-laccesso-ai-servizi-tramite-i-gruppi.md](funzionalita/pubblicare-un-servizio/gestire-laccesso-ai-servizi-tramite-i-gruppi.md "mention")
- Added [chiave-manage](funzionalita/pubblicare-un-servizio/chiave-manage/ "mention") section
- Renamed **Manage Key** section to [chiave-manage.md](funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md "mention") and moved it as a subsection of [chiave-manage](funzionalita/pubblicare-un-servizio/chiave-manage/ "mention")
- Added [chiave-manage-1.md](funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage-1.md "mention") section

### Version 5.1 (May 13, 2024)

- Added the `configuration_id` field to the `third_party_data` structure in the [Messages API](api-e-specifiche/api-messaggi/) section
- Updated the [Sending a remote content message](funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md) section
- Added the [CRU Remote Configurations](api-e-specifiche/api-messaggi/cru-configurazioni-remote.md) section
- Added the [Markdown Guide](risorse-utili/guida-al-markdown.md) section
- Minor fixes

### Version 5.0 (January 2, 2024)

- Added "[Remote Content](funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md)" model for Messages
- Added "[Service topic](funzionalita/pubblicare-un-servizio/argomento-del-servizio.md)" section in the [Publishing a service](funzionalita/pubblicare-un-servizio/) section
- Removed "version" from the [Publishing a service](funzionalita/pubblicare-un-servizio/) section
- Added [Service Topics: Get all service topics](api-e-specifiche/api-servizi/service-topics-get-all-service-topics.md) API to the [Services API](api-e-specifiche/api-servizi/) section
- Updated examples for [Manage Service: Get](api-e-specifiche/api-servizi/manage-service-get.md) and [Manage Service: Create](api-e-specifiche/api-servizi/manage-service-create.md)
- Removed the [message testing](funzionalita/inviare-un-messaggio/messaggi-di-test.md) procedure for fictitious tax codes (no longer supported)
- Minor fixes

### Version 4.0 (September 30, 2023)

- Removed legacy service management APIs
- New section for services that handle [sensitive information](funzionalita/pubblicare-un-servizio/informazioni-sensibili.md)

### Version 3.0 (June 30, 2023)

- [New flow with mandatory review for service publication](funzionalita/pubblicare-un-servizio/)
- Deprecated the service management APIs
- Published the new [service management APIs](api-e-specifiche/api-servizi/), i.e., the `manage` services

### Version 2.4 (June 2023)

- [New, more comprehensive section for Frequently Asked Questions](https://docs.pagopa.it/kb-enti)
- [Specific key for service management](funzionalita/pubblicare-un-servizio/creare-un-servizio.md#tramite-api)

### Version 2.3 (March 2023)

- [Service management via Reserved Area](funzionalita/pubblicare-un-servizio/creare-un-servizio.md#tramite-area-riservata)
- [Importing services in the Reserved Area](funzionalita/pubblicare-un-servizio/importare-servizi-nellarea-riservata.md)
- [Onboarding via Reserved Area](../../../5uSKCP8mvg5tKATILDRb/broken-reference/)
- [Onboarding for aggregator entities](setup-iniziale/)
- [How to change delegates](https://docs.pagopa.it/kb-enti-adesione/domande-frequenti/domande-e-risposte-sulladesione-a-io#come-posso-variare-referente-e-o-delegati-del-mio-ente)

### Version 2.2 (November 2022)

- New IO Premium program

### [Version 1.3 (September 2022)](https://docs.pagopa.it/io-guida-tecnica-1.3/)

- New reading experience
- Improved text formatting and simplified language

### [Version 1.2 (July 17, 2022) ->](https://io.italia.it/assets/download/it/onboarding/220725_guida_tecnica_all_integrazione_dei_servizi_in_app_io-v_1.2.pdf)
