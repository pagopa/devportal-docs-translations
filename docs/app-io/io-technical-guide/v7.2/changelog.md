# 🕗 Changelog

{% hint style="info" %}
Changes indicated as `minor` versions (the digit to the right of the decimal point) are not considered substantial; their purpose is to improve the experience.
{% endhint %}

### Version 7.2 (September 30, 2025)

- Deprecated the [attributi.md](funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md "mention") attributes: [#organization\_name](Features/Publishing-a-Service/Required-Data/Attributes.md#organization_name "mention"), [#organization\_fiscal\_code](Features/Publishing-a-Service/Required-Data/Attributes.md#organization_fiscal_code "mention") and [#department\_name](Features/Publishing-a-Service/Required-Data/Attributes.md#department_name "mention") for the _request body_ of the following [services-api](api-e-specifiche/api-servizi/ "mention"): [manage-service-create.md](api-e-specifiche/api-servizi/manage-service-create.md "mention"), [manage-service-update.md](api-e-specifiche/api-servizi/manage-service-update.md "mention").
- Deprecated the [#department\_name](Features/Publishing-a-Service/Required-Data/Attributes.md#department_name "mention") attribute for the _response body_ of the following [services-api](api-e-specifiche/api-servizi/ "mention"): [manage-service-create.md](api-e-specifiche/api-servizi/manage-service-create.md "mention"), [manage-service-update.md](api-e-specifiche/api-servizi/manage-service-update.md "mention"), [manage-service-get.md](api-e-specifiche/api-servizi/manage-service-get.md "mention"), [manage-service-get-user-services.md](api-e-specifiche/api-servizi/manage-service-get-user-services.md "mention"), [manage-service-get-released.md](api-e-specifiche/api-servizi/manage-service-get-released.md "mention")
- Removed the [#token\_name](Features/Publishing-a-Service/Required-Data/Service-Metadata.md#token_name "mention") field of [service-metadata.md](funzionalita/pubblicare-un-servizio/dati-obbligatori/service-metadata.md "mention") for the following [services-api](api-e-specifiche/api-servizi/ "mention"): [manage-service-create.md](api-e-specifiche/api-servizi/manage-service-create.md "mention"), [manage-service-update.md](api-e-specifiche/api-servizi/manage-service-update.md "mention"), [manage-service-get.md](api-e-specifiche/api-servizi/manage-service-get.md "mention"), [manage-service-get-user-services.md](api-e-specifiche/api-servizi/manage-service-get-user-services.md "mention"), [manage-service-get-released.md](api-e-specifiche/api-servizi/manage-service-get-released.md "mention")

### Version 7.1 (July 9, 2025)

- Address change confirmation [public-ip-address.md](api-e-specifiche/indirizzo-ip-pubblico.md "mention")

### Version 7.0 (June 30, 2025)

- Updated [#membership-agreement](setup-iniziale/#accordo-di-adesione "mention")
- Restored the [initial-setup](setup-iniziale/ "mention") section from version v6.0
- Deprecated the [#token\_name](Features/Publishing-a-Service/Required-Data/Service-Metadata.md#token_name "mention") field of [service-metadata.md](funzionalita/pubblicare-un-servizio/dati-obbligatori/service-metadata.md "mention") for the following [services-api](api-e-specifiche/api-servizi/ "mention"): [manage-service-create.md](api-e-specifiche/api-servizi/manage-service-create.md "mention"), [manage-service-update.md](api-e-specifiche/api-servizi/manage-service-update.md "mention"), [manage-service-get.md](api-e-specifiche/api-servizi/manage-service-get.md "mention"), [manage-service-get-user-services.md](api-e-specifiche/api-servizi/manage-service-get-user-services.md "mention"), [manage-service-get-released.md](api-e-specifiche/api-servizi/manage-service-get-released.md "mention")
- updated the [Markdown Guide](Useful-Resources/Markdown-Guide.md) section with updated instructions on "line breaks"

### Version 6.1 (June 25, 2025)

- Announcement of the Developer Portal decommissioning date
- Updated the [initial-setup](setup-iniziale/ "mention") section
- Added useful information on the length of a PDF attachment's name in the [openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md](api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md "mention") section
- Changed `io.italia.it` domain references

### Version 6.0 (March 31, 2025)

- Address change [public-ip-address.md](api-e-specifiche/indirizzo-ip-pubblico.md "mention")
- Added the [managing-access-to-services-via-groups.md](funzionalita/pubblicare-un-servizio/gestire-laccesso-ai-servizi-tramite-i-gruppi.md "mention") section
- Added the [manage-key](funzionalita/pubblicare-un-servizio/chiave-manage/ "mention") section
- Renamed the **Manage Key** section to [manage-key.md](funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md "mention") and moved it to a subsection of [manage-key](funzionalita/pubblicare-un-servizio/chiave-manage/ "mention")
- Added the [manage-key-1.md](funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage-1.md "mention") section

### Version 5.1 (May 13, 2024)

- Added the `configuration_id` field to the `third_party_data` structure in the [Messages API](api-e-specifiche/api-messaggi/) section
- Updated the [Sending a message with remote content](Features/Sending-a-Message/Sending-a-Message-with-Remote-Content.md) section
- Added the [CRU Remote Configurations](APIs-and-Specifications/Message-APIs/CRU-Remote-Configurations.md) section
- Added the [Markdown Guide](Useful-Resources/Markdown-Guide.md) section
- Minor fixes

### Version 5.0 (January 2, 2024)

- Added "[Remote Content](Features/Sending-a-Message/Sending-a-Message-with-Remote-Content.md)" model for Messages
- Added the "[Service Topic](Features/Publishing-a-Service/Service-Topic.md)" section to the [Publish a service](funzionalita/pubblicare-un-servizio/) section
- Removed "version" from the [Publish a service](funzionalita/pubblicare-un-servizio/) section
- Added the [Service Topics: Get all service topics](APIs-and-Specifications/Service-APIs/Service-Topics-Get-All-Service-Topics.md) API to the [Services API](api-e-specifiche/api-servizi/) section
- Updated [Manage Service: Get](APIs-and-Specifications/Service-APIs/Manage-Service-Get.md) and [Manage Service: Create](APIs-and-Specifications/Service-APIs/Manage-Service-Create.md) examples
- Removed the [message testing](Features/Sending-a-Message/Test-Messages.md) procedure for dummy tax codes (no longer supported)
- Minor fixes

### Version 4.0 (September 30, 2023)

- Removed legacy service management APIs
- New section on services that handle [sensitive information](Features/Publishing-a-Service/Sensitive-Information.md)

### Version 3.0 (June 30, 2023)

- [New flow with mandatory review for service publication](funzionalita/pubblicare-un-servizio/)
- Deprecated the service management APIs
- Published the new [service management APIs](api-e-specifiche/api-servizi/), i.e., the `manage` services

### Version 2.4 (June 2023)

- [New, much richer section for Frequently Asked Questions](https://docs.pagopa.it/kb-enti)
- [Specific key for service management](Features/Publishing-a-Service/Creating-a-Service.md#tramite-api)

### Version 2.3 (March 2023)

- [Service management via the Private Area](Features/Publishing-a-Service/Creating-a-Service.md#tramite-area-riservata)
- [Importing services into the Private Area](Features/Publishing-a-Service/Importing-Services-into-the-Private-Area.md)
- [Onboarding via the Private Area](../../../5uSKCP8mvg5tKATILDRb/broken-reference/)
- [Onboarding for aggregator institutions](setup-iniziale/)
- [How to change delegates](https://docs.pagopa.it/kb-enti-adesione/domande-frequenti/domande-e-risposte-sulladesione-a-io#come-posso-variare-referente-e-o-delegati-del-mio-ente)

### Version 2.2 (November 2022)

- New IO Premium program

### [Version 1.3 (September 2022)](https://docs.pagopa.it/io-guida-tecnica-1.3/)

- New reading experience
- Improved text formatting and simplified language

### [Version 1.2 (July 17, 2022) ->](https://io.italia.it/assets/download/it/onboarding/220725_guida_tecnica_all_integrazione_dei_servizi_in_app_io-v_1.2.pdf)
