# Sensitive information

Services and messages that include **special categories of personal data** and/or **personal data relating to criminal convictions and offences** must comply with the provisions of privacy regulations and are governed by [paragraph 7.3](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto_allegati/213121604430O__OLG+Punto+accesso+telematico+servizi+PA_3.11.2021.pdf) of the IO Guidelines.

The data in question are those indicated in Articles. 9 and 10 GDPR, namely:&#x20;

- information revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership;
- genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation;
- personal data relating to criminal convictions and offences or related security measures.

### Flagging a sensitive service:&#x20;

If you intend to include sensitive data in your services and in the messages they will send:

#### Via the Developer Portal

Mark the service as "**Sensitive Service**" when you create the service profile.\*\* You will find this checkbox in the service details.

#### Via the Reserved Area

Mark the service as "**Sensitive Service**" when you create the service profile.\*\* You will find this checkbox in the service details.

#### Via API

Mark the service as "privacy-critical" [("require\_secure\_channel": true)](https://app.gitbook.com/s/mzwjFv2XaE1mjbz7I8gt/api/api-servizi/create-service).

{% hint style="info" %}
The same feature is also available at the individual message level: for more information, refer to [#require\_secure\_channels](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#require_secure_channels "mention")
{% endhint %}
