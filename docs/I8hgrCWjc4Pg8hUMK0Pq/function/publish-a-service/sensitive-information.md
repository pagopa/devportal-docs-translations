# Sensitive information

Services and messages that include **particular categories of personal data** and/or **personal data related to criminal convictions and crimes** must respect the provisions of the privacy regulation and are regulated by [paragraph 7.3](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto_allegati/213121604430O__OLG+Punto+accesso+telematico+servizi+PA_3.11.2021.pdf) of the IO guidelines.

The data in question is indicated in articles 9 and 10 GDPR, i.e.: 

* information that reveals the racial or ethnic origin, political opinions, religious or philosophical beliefs or trade union membership;
* generic data, biometric data means to univocally identify a physical person, data related to the heath or the sex life or sexual orientation of the person;
* personal data related to criminal convictions or crimes or connected safety measures.

### Report a sensitive service: 

If you intend to include sensitive data in your services and messages that they will send:

#### Via the Developer Portal

Mark the service as **"Sensitive service" when you create the service tab.** You will find this check among the detailed data of the service.

#### Via the Reserved Area

Mark the service as **"Sensitive service" when you create the service tab.** You will find this check among the detailed data of the service.

#### Via API

Mark the service as "privacy-critical" [(“require_secure_channel”: true)](https://app.gitbook.com/s/mzwjFv2XaE1mjbz7I8gt/api/service-api/create-service).

{% hint style="info" %} The same functionality is available on the level of a single message: for more information refer to [#require_secure_channels](../../api-and-specifications/message-api/submit-a-message-passing-the-user-fiscal-code-in-the-request-body.md#require_secure_channels "mention") {% endhint %}