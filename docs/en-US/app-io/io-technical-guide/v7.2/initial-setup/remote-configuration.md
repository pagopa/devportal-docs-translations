# Configurazione remota

Questa configurazione è necessaria se hai intenzione di utilizzare una delle seguenti funzionalità:

1. [inviare-un-messaggio-a-contenuto-remoto.md](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md "mention")
2. [aggiungere-allegati.md](../funzionalita/inviare-un-messaggio/aggiungere-allegati.md "mention")

Per entrambe le funzionalità è infatti necessario **mettere a disposizione un&#x20;**_**REST web service**_ conforme alla [relativa OpenAPI](../api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md).

Un web service esposto è caratterizzato da un **identificativo di configurazione**, cioè un codice alfanumerico univoco, generato da IO, che corrisponderà a un set di endpoint e alle relative API key.

{% hint style="info" %}
Devi usare la specifica chiave [`manage`](../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) per la gestione delle configurazioni: scopri [come recuperarla](../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md#recupera-la-chiave-manage)
{% endhint %}

Puoi definire una configurazione, richiamarla successivamente, elencare le configurazioni definite e modificarne una creata in precedenza.

{% hint style="info" %}
Puoi anche definire **più di una configurazione**, nell'ambito della [chiave manage ](../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md)in uso.

Ad esempio, se la tua Organizzazione si serve di più Partner Tecnologici che espongano ciascuno un REST web service per servire le funzionalità remote, per ciascuno di essi potrà essere definito un identificativo di configurazione differente per essere utilizzato successivamente per [inviare i messaggi](../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md) di propria competenza.
{% endhint %}

{% hint style="success" %}
Per gestire le configurazioni devi utilizzare l'API descritta in [cru-configurazioni-remote.md](../api-e-specifiche/api-messaggi/cru-configurazioni-remote.md "mention").
{% endhint %}

{% hint style="success" %}
**Ogni messaggio a contenuto remoto che invierai farà riferimento a una specifica configurazione**: per indicarla devi utilizzare, in fase di creazione, il parametro obbligatorio [#configuration\_id](../api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#configuration_id "mention").
{% endhint %}

Il servizio esposto deve essere costituito da un numero variabile di _endpoint_, a seconda di cosa si intenda remotizzare per i propri messaggi e del [tipo di accordo](https://docs.pagopa.it/kb-enti-accordi/domande-frequenti/domande-e-risposte-sugli-accordi#quali-sono-le-formule-contrattuali-possibili-per-aderire-allapp-io) che hai sottoscritto con PagoPA:

<table><thead><tr><th>Endpoint recupero di:</th><th width="275">Dati da tornare a IO</th><th>Dettagli</th></tr></thead><tbody><tr><td>precondizioni all'apertura</td><td>titolo e corpo delle precondizioni</td><td></td></tr><tr><td>dettagli del messaggio</td><td><ul><li>titolo e corpo del messaggio;</li><li>metadati degli allegati (solo enti Premium)</li></ul></td><td>i dettagli del messaggio devono corrispondere i flag di intento dichiarati alla creazione del messaggio</td></tr><tr><td>byte dell'allegato</td><td>byte del singolo allegato (solo enti Premium)</td><td></td></tr></tbody></table>

{% hint style="info" %}
Per maggiori informazioni su come progettare gli _endpoint_ e la relativa API esposta, fai riferimento a [openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md](../api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md "mention").
{% endhint %}

Una volta pronto, utilizza l'API descritta in [cru-configurazioni-remote.md](../api-e-specifiche/api-messaggi/cru-configurazioni-remote.md "mention") per registrare presso i sistemi di IO i dati necessari, tra cui:

- la **URL di base** che servirà a IO per comporre gli indirizzi degli _endpoint_ esposti dalla tua Organizzazione (per maggiori informazioni fai riferimento agli esempi riportati in [openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md](../api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md "mention"))
- &#x6C\*\*'API key\*\* che IO userà per autenticarsi presso i tuoi sistemi e il relativo header atteso
- l'eventuale preferenza di default relativa alle precondizioni all'apertura dei messaggi (per maggiori informazioni sulle precondizioni fai riferimento a [inviare-un-messaggio-a-contenuto-remoto.md](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md "mention"))

{% hint style="warning" %}
Allo scopo di garantire nel tempo la consistenza e il corretto funzionamento in app dei messaggi a contenuto remoto **non è possibile eliminare una configurazione** una volta definita.

Inoltre, per lo stesso motivo, è responsabilità del mittente **adeguare tempestivamente le configurazioni** ogni qualvolta si riveli necessario, utilizzando l'API di gestione descritta in [cru-configurazioni-remote.md](../api-e-specifiche/api-messaggi/cru-configurazioni-remote.md "mention").
{% endhint %}
