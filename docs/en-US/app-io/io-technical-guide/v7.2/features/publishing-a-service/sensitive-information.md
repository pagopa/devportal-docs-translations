# Informazioni sensibili

I servizi e i messaggi che includono **categorie particolari di dati personali** e/o **dati personali relativi a condanne penali e reati** devono rispettare la disposizioni della normativa privacy e sono regolati dal [paragrafo 7.3](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto_allegati/213121604430O__OLG+Punto+accesso+telematico+servizi+PA_3.11.2021.pdf) delle Linee Guida di IO.

I dati in questione sono quelli indicati agli artt. 9 e 10 GDPR, ovvero:&#x20;

- informazioni che rivelano l'origine razziale o etnica, le opinioni politiche, le convinzioni religiose o filosofiche, o l'appartenenza sindacale;
- dati genetici, dati biometrici intesi a identificare in modo univoco una persona fisica, dati relativi alla salute o alla vita sessuale o all'orientamento sessuale della persona;
- dati personali relativi alle condanne penali e ai reati o a connesse misure di sicurezza.

### Segnalare un servizio sensibile:&#x20;

Se intendi includere dati sensibili nei tuoi servizi e nei messaggi che questi invieranno:

#### Tramite Developer Portal

Contrassegna il servizio come "**Servizio sensibile" quando crei la scheda del servizio.** Troverai questa spunta tra i dati di dettaglio del servizio.

#### Tramite Area Riservata

Contrassegna il servizio come "**Servizio sensibile" quando crei la scheda del servizio.** Troverai questa spunta tra i dati di dettaglio del servizio.

#### Tramite API

Contrassegna il servizio come "privacy-critical" [(“require\_secure\_channel”: true)](https://app.gitbook.com/s/mzwjFv2XaE1mjbz7I8gt/api/api-servizi/create-service).

{% hint style="info" %}
La stessa funzionalità è disponibile anche a livello di singolo messaggio: per maggiori informazioni fai riferimento a [#require\_secure\_channels](../../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#require_secure_channels "mention")
{% endhint %}
