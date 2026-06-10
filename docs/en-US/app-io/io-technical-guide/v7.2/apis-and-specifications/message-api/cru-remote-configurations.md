# CRU Configurazioni remote

## Descrizione

Questa API consente alla tua Organizzazione di registrarsi presso IO come _provider_ di contenuti remoti e di gestire nel tempo la registrazione.

La registrazione ha come oggetto le **configurazioni,** ossia l'insieme delle informazioni utili a creare la comunicazione tra IO e le infrastrutture della tua Organizzazione, secondo il protocollo definito nel paragrafo [messaggi a contenuto remoto](../../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md).

{% hint style="info" %}
Per maggiori informazioni puoi consultare la [pagina dedicata](../../setup-iniziale/configurazione-remota.md) nella sezione **Setup iniziale**
{% endhint %}

{% hint style="info" %}
Tutte le API descritte in questa pagina si riferiscono alle attività dell'Ente tramite [Area Riservata](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/axttcUGV65V2IVRggmvR/) e si basano sull'ottenimento e l'utilizzo della [chiave "manage"](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) che puoi [recuperare](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md#recupera-la-chiave-manage) nell'area di gestione dei Servizi di IO.
{% endhint %}

Le operazioni a disposizione comprendono:

1. La **creazione** di una nuova configurazione remota
2. La **modifica** di una configurazione remota esistente
3. Il recupero delle **configurazioni remote definite**
4. Il recupero di **una particolare configurazione** definita

{% hint style="info" %}
La cancellazione di una configurazione remota non è al momento supportata
{% endhint %}

{% hint style="success" %}
Fai riferimento al paragrafo [#esempi](cru-configurazioni-remote.md#esempi "mention") per maggiori informazioni sull'utilizzo dei campi e sugli scenari d'uso censiti.
{% endhint %}

### API "Create"

Con questa API puoi creare una nuova configurazione per ottenere il `configuration_id` da utilizzare in tutte le chiamate successive, anche per la [creazione dei messaggi a contenuto remoto](../../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md).

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml" path="/remote-contents/configurations" method="post" %}
[https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml](https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml)
{% endopenapi %}

### API "Update"

Questa API ti consente di aggiornare una configurazione esistente, identificata dal `configuration_id`.

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml" path="/remote-contents/configurations/{configurationId}" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml](https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml)
{% endopenapi %}

{% hint style="danger" %}
Allo scopo di garantire nel tempo la consistenza e il corretto funzionamento in app dei messaggi a contenuto remoto, è onere del mittente **adeguare tempestivamente le configurazioni** ogni qualvolta si riveli necessario, utilizzando l'API di gestione qui descritta.
{% endhint %}

## API di recupero delle configurazioni definite

Con questa API puoi recuperare le configurazioni definite nell'ambito della sottoscrizione indicata negli header. Ciascun elemento ritornato nell'array `rcConfigList` riporta il nome, la descrizione, la presenza di precondizioni e i dati tecnici propri della configurazione (URL di base e informazioni di autenticazione).

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml" path="/remote-contents/configurations" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml](https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml)
{% endopenapi %}

## API di recupero di una configurazione

Con questa API, utilizzando come chiave il `configuration_id`, puoi recuperare i dati specifici della corrispondente configurazione.

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml" path="/remote-contents/configurations/{configurationId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml](https://raw.githubusercontent.com/pagopa/io-functions-service-messages/master/openapi/index_external.yaml)
{% endopenapi %}

## Esempi

### Creazione di una configurazione remota

Nell'esempio riportato, si richiede la creazione di una nuova configurazione relativa al solo ambiente di produzione, per il quale sono indicati:

- la URL di base nel campo **`base_url`** ("https://theremotecontentdomain.tld/basepath")
- la relativa API key con cui si autenticherà su IO (`"ac66427c-584b-4c81-9443-e761a226d33d"`, nel camp&#x6F\*\*`key`\*\*, valore che i tuoi sistemi si attenderanno nell'header con nome `"X-API-KEY"` indicato nel campo **`header_key_name`**)

{% code title="CURL" overflow="wrap" %}

```
curl --location 'https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Ocp-Apim-Subscription-Key: REDACTED' \
--data '{
  "name": "IoRemoteConfig01",
  "description": "Configurazione contenuti remoti per app IO - Server 1",
  "disable_lollipop_for": [],
  "has_precondition": "NEVER",
  "is_lollipop_enabled": false,
  "prod_environment": {
    "base_url": "https://theremotecontentdomain.tld/basepath",
    "details_authentication": {
      "header_key_name": "X-API-Key",
      "key": "ac66427c-584b-4c81-9443-e761a226d33d",
      "type": "API-KEY"
    }
  }
}'
```

{% endcode %}

Il campo **`has_precondition`** regola l'interpretazione, da parte di IO, del corrispondente campo [#has\_precondition](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition "mention") che indicherai in fase di creazione di un messaggio a contenuto remoto, secondo il seguente schema:

<table data-header-hidden><thead><tr><th width="296"></th><th></th></tr></thead><tbody><tr><td>[non specificato]</td><td>Le precondizioni all'apertura del messaggio saranno mostrate coerentemente con l'impostazione di <code>has_precondition</code> <a href="submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">a livello di singolo messaggio</a></td></tr><tr><td><code>has_precondition: NONE</code></td><td>Se il campo <code>has_precondition</code> non è specifciato <a href="submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">a livello di singolo messaggio</a>, questo non avrà precondizioni all'apertura; altrimenti, queste saranno mostrate coerentemente con quel valore</td></tr><tr><td><code>has_precondition: ONCE</code></td><td>Se il campo <code>has_precondition</code> non è specifciato <a href="submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">a livello di singolo messaggio</a>, questo avrà precondizioni all'apertura mostrate solo finché il messaggio stesso non sarà stato letto dal destinatario; altrimenti, le precondizioni saranno mostrate coerentemente con il valore indicato per quello specifico messaggio</td></tr><tr><td><code>has_precondition: ALWAYS</code></td><td>Se il campo <code>has_precondition</code> non è specifciato <a href="submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition">a livello di singolo messaggio</a>, le precondizioni all'apertura saranno mostrate sempre, ad ogni apertura; altrimenti, saranno mostrate coerentemente con il valore indicato per quello specifico messaggio</td></tr></tbody></table>

{% hint style="info" %}
Ricorda di impostare sempre il valore del campo **`details_authentication.type`** con la costante `"API-KEY"`
{% endhint %}

In risposta otterrai, nel campo `"configuration_id"`, l'**identificativo della configurazione** che dovrai usare in tutte le chiamate seguenti, comprese quelle di [creazione dei messaggi a contenuto remoto](../../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md) che dovranno essere serviti da essa.

{% code title="Esempio di risposta attesa" overflow="wrap" %}

```
{
    "configuration_id": "DFE12CC534E649CD8D63BF1BAA547029"
}
```

{% endcode %}

### Creazione di configurazioni remote distinte per test e produzione

In questo secondo esempio, puoi vedere come creare una configurazione relativa agli ambienti di **test** e **produzione**.

I due blocchi `"prod_environment"` e `"test_environment"` sono utilizzati da IO per contattare la tua infrastruttura secondo il seguente schema:

<table data-header-hidden><thead><tr><th width="381"></th><th></th></tr></thead><tbody><tr><td>indichi solo <code>"prod_environment"</code></td><td>IO ti contatterà usando sempre quella configurazione</td></tr><tr><td>indichi solo <code>"test_environment"</code></td><td>IO ti contatterà usando sempre quella configurazione</td></tr><tr><td>indichi sia <code>"prod_environment"</code> che <code>"test_environment"</code></td><td>IO ti contatterà usando la configurazione indicata in <code>"test_environment"</code> solo se il codice fiscale del destinatario del messaggio è incluso nell'array <code>"test_users"</code>, altrimenti lo farà usando la configurazione indicata in <code>"prod_environment"</code></td></tr></tbody></table>

{% hint style="warning" %}
Nel selezionare i destinatari da indicare in `"test_users"` ricorda che **non è consentito l'invio di messaggi di test all'utenza generale**: assicurati di avere il consenso degli interessati e che questi siano a conoscenza del test in corso.
{% endhint %}

{% code title="CURL" overflow="wrap" %}

```
curl --request POST --location 'https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Ocp-Apim-Subscription-Key: REDACTED' \
--data '{
  "name": "IoRemoteConfig01",
  "description": "Configurazione contenuti remoti per app IO - Server 1",
  "disable_lollipop_for": [],
  "has_precondition": "NEVER",
  "is_lollipop_enabled": false,
  "test_environment": {
    "base_url": "https://theremotecontentdomain_test.tld/basepath",
    "details_authentication": {
      "header_key_name": "X-API-Key",
      "key": "78aec1e4-f625-4644-b9d9-0f3fdc8cbe60",
      "type": "API-KEY"
    },
    "test_users": [
      "HGDZDH64P28G225I",
      "ZLMYPD56M70L669Y"
    ]
  },
  "prod_environment": {
    "base_url": "https://theremotecontentdomain.tld/basepath",
    "details_authentication": {
      "header_key_name": "X-API-Key",
      "key": "ac66427c-584b-4c81-9443-e761a226d33d",
      "type": "API-KEY"
    }
  }
}'
```

{% endcode %}

In risposta otterrai, nel campo `"configuration_id"`, l'**identificativo della configurazione** che dovrai usare in tutte le chiamate seguenti, comprese quelle di [creazione dei messaggi a contenuto remoto](../../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md) che dovranno essere serviti da essa.

{% code title="Esempio di risposta attesa" overflow="wrap" %}

```
{
    "configuration_id": "DFE12CC534E649CD8D63BF1BAA547029"
}
```

{% endcode %}

### Recupero delle configurazioni definite

In questo esempio ti mostriamo come recuperare l'elenco completo delle configurazioni che hai definito nell'ambito della tua sottoscrizione:

{% code title="CURL" overflow="wrap" %}

```
curl --location 'https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations' \
--header 'Accept: application/json' \
--header 'Ocp-Apim-Subscription-Key: REDACTED'
```

{% endcode %}

{% code title="Esempio di risposta attesa" overflow="wrap" %}

```
{
  "rcConfigList": [
    {
      "configuration_id": "DFE12CC534E649CD8D63BF1BAA547029",
      "name": "IoRemoteConfig01",
      "description": "Configurazione contenuti remoti per app IO - Server 1",
      "disable_lollipop_for": [],
      "has_precondition": "NEVER",
      "is_lollipop_enabled": false,
      "test_environment": {
        "base_url": "https://theremotecontentdomain_test.tld/basepath",
        "details_authentication": {
          "header_key_name": "X-API-Key",
          "key": "78aec1e4-f625-4644-b9d9-0f3fdc8cbe60",
          "type": "API-KEY"
        },
        "test_users": [
          "HGDZDH64P28G225I",
          "ZLMYPD56M70L669Y"
        ]
      },
      "prod_environment": {
        "base_url": "https://theremotecontentdomain.tld/basepath",
        "details_authentication": {
          "header_key_name": "X-API-Key",
          "key": "ac66427c-584b-4c81-9443-e761a226d33d",
          "type": "API-KEY"
        }
      }
    }
  ]
}
```

{% endcode %}

### Recupero di una specifica configurazione

In questo esempio puoi vedere come, essendo in possesso di un `configuration_id`, puoi recuperare tutte le informazioni relative a una configurazione definita in precedenza:

{% code title="CURL" overflow="wrap" %}

```
curl --location 'https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations/DFE12CC534E649CD8D63BF1BAA547029' \
--header 'Accept: application/json' \
--header 'Ocp-Apim-Subscription-Key: REDACTED'
```

{% endcode %}

{% code title="Esempio di risposta attesa" overflow="wrap" %}

```
{
    "configuration_id": "DFE12CC534E649CD8D63BF1BAA547029",
    "description": "Configurazione contenuti remoti per app IO - Server 1",
    "disable_lollipop_for": [],
    "has_precondition": "NEVER",
    "is_lollipop_enabled": false,
    "name": "IoRemoteConfig01",
    "prod_environment": {
        "base_url": "https://theremotecontentdomain.tld/basepath",
        "details_authentication": {
          "header_key_name": "X-API-Key",
          "key": "ac66427c-584b-4c81-9443-e761a226d33d",
          "type": "API-KEY"
        }
    }
}
```

{% endcode %}

### Modifica di una configurazione esistente

In questo esempio ti mostriamo come puoi aggiornare i dati di una configurazione definita in precedenza, nello specifico qui si modifica la sua descrizione:

{% code title="CURL" overflow="wrap" %}

```
curl --location --request PUT 'https://api.io.pagopa.it/api/v1/messages-sending/remote-contents/configurations/DFE12CC534E649CD8D63BF1BAA547029' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Ocp-Apim-Subscription-Key: REDACTED' \
--data '{
    "configuration_id": "DFE12CC534E649CD8D63BF1BAA547029",
    "description": "***NUOVA*** configurazione contenuti remoti per app IO - Server 1",
    "disable_lollipop_for": [],
    "has_precondition": "NEVER",
    "is_lollipop_enabled": false,
    "name": "IoRemoteConfig01",
    "prod_environment": {
        "base_url": "https://theremotecontentdomain.tld/basepath",
        "details_authentication": {
          "header_key_name": "X-API-Key",
          "key": "ac66427c-584b-4c81-9443-e761a226d33d",
          "type": "API-KEY"
        }
    }
}'
```

{% endcode %}

{% code title="Risposta attesa" overflow="wrap" %}

```
204 No content.
```

{% endcode %}

{% hint style="danger" %}
Allo scopo di garantire nel tempo la consistenza e il corretto funzionamento in app dei messaggi a contenuto remoto, è responsabilità del mittente **adeguare tempestivamente le configurazioni** ogni qualvolta si riveli necessario, utilizzando l'API di gestione qui descritta.
{% endhint %}

## Risorse utili

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/createRCConfiguration](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/createRCConfiguration)\
[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/listRCConfiguration](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/listRCConfiguration)\
[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getRCConfiguration](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getRCConfiguration)\
[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/updateRCConfiguration](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/updateRCConfiguration)
