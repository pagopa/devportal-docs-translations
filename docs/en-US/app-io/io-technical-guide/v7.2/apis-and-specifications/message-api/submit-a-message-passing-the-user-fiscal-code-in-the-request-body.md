# Submit a Message passing the user fiscal\_code in the request body

## Descrizione

Questa API consente l’invio di messaggi verso un cittadino identificato tramite Codice Fiscale. Prima di inviare un messaggio, dovrai [verificare](get-a-user-profile-using-post.md) che il cittadino sia iscritto a IO e che il servizio possa inviare comunicazioni al cittadino stesso.

{% hint style="info" %}
Per utilizzare questa API devi aggiungere alla chiamata l'header `Ocp-Apim-Subscription-Key` contenente la chiave "use" [primaria](../../funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#primary_key) o [secondaria](../../funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#secondary_key) del servizio scelto per l'invio del messaggio
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/messages" method="post" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## **`fiscal_code`**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="186"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Codice fiscale del destinatario del messaggio</td></tr><tr><td><strong>Obbligatorio</strong></td><td>Sì</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>AAAAAA00A00A000A</code></td></tr></tbody></table>

## **`time_to_live`**

{% hint style="danger" %} <mark style="color:red;">**Questo parametro è deprecato.**</mark>
{% endhint %}

<table data-header-hidden><thead><tr><th width="180"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Tempo espresso in secondi che specifica il tempo di retry di delivery del messaggio da parte di IO; passato tale tempo, non viene prodotta alcuna notifica push né email di inoltro</td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>3600</code></td></tr><tr><td><strong>Tipo</strong></td><td>Intero</td></tr><tr><td><strong>Esempio</strong></td><td><code>3600</code></td></tr></tbody></table>

## **`feature_level_type`**

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Indica se il messaggio è inviato nell'ambito di una sottoscrizione <strong>Premium</strong>, o se è da considerarsi un messaggio standard</td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>STANDARD</code></td></tr><tr><td><strong>Tipo</strong></td><td>Stringa enumerata</td></tr><tr><td><strong>Valori Accettati</strong></td><td><ul><li><code>STANDARD</code> -> il messaggio è da considerarsi un normale messaggio IO</li><li><code>ADVANCED</code> -> al messaggio sono correlate informazioni aggiuntive avanzate. È possibile specificare questo valore solo se si è titolari di una sottoscrizione Premium.</li></ul></td></tr><tr><td><strong>Esempio</strong></td><td><code>ADVANCED</code></td></tr></tbody></table>

## **`content`` `**<mark style="color:red;">**`*`**</mark>

### **`subject`` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="186"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Titolo del messaggio, la cui lunghezza deve essere compresa tra 10 e 120 caratteri</td></tr><tr><td><strong>Obbligatorio</strong></td><td>Sì</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>Rinnova la tua carta d'identità</code></td></tr></tbody></table>

{% hint style="info" %}
Se stai inviando un **messaggio con contenuti remoti**, fai riferimento a [#informazioni-importanti-circa-il-titolo-subject-del-messaggio](../../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#informazioni-importanti-circa-il-titolo-subject-del-messaggio "mention")
{% endhint %}

{% hint style="warning" %}
Ricorda che, ai sensi dell'art. 7.3 delle [Linee Guida AgID](https://www.agid.gov.it/it/linee-guida#index-8), il titolo del messaggio non può contenere **dati personali** e ne va assicurata la minimizzazione all'interno del [#markdown](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#markdown "mention")
{% endhint %}

### **`markdown`` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="187"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Testo del messaggio in formato markdown la cui lunghezza deve essere compresa tra 80 e 10000 caratteri</td></tr><tr><td><strong>Obbligatorio</strong></td><td>Sì</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>Gentile Mario,\n\nsiamo lieti di comunicarti che la tua **Carta di Identità** è disponibile per il ritiro presso i nostri sportelli.  \nPuoi consultare gli orari sul [Portale del servizio](https://www.miosito.it/).\n\n*Lo Staff*</code></td></tr></tbody></table>

{% hint style="info" %}
Se stai inviando un **messaggio con contenuti remoti**, fai riferimento a[#informazioni-importanti-circa-il-corpo-markdown-del-messaggio](../../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#informazioni-importanti-circa-il-corpo-markdown-del-messaggio "mention") per i dettagli su come valorizzare questo campo.
{% endhint %}

{% hint style="info" %}
Quando componi e trasmetti il testo del messaggio in formato markdown, ricorda di impostare il charset UTF-8, così da garantire la corretta visualizzazione dei caratteri accentati.
{% endhint %}

{% hint style="info" %}
Puoi formattare il testo e attivare funzioni speciali nei tuoi messaggi usando [la sintassi Markdown](../../risorse-utili/guida-al-markdown.md).
{% endhint %}

### **`require_secure_channels`**

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Indica che il messaggio contiene informazioni sensibili e/o riservate; se impostato a <code>true</code> saranno prodotte notifiche push anonimizzate e non saranno inoltrate copie email dei messaggi</td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td>Se non includi questo campo, il fallback è sulla configurazione del servizio (fai riferimento a <a data-mention href="../../funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi.md#require_secure_channels">#require_secure_channels</a>)</td></tr><tr><td><strong>Tipo</strong></td><td>Booleano</td></tr><tr><td><strong>Esempio</strong></td><td><code>true</code></td></tr></tbody></table>

### **`due_date`**

<table data-header-hidden><thead><tr><th width="189"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Permette di associare al messaggio un promemoria. Il formato data deve essere ISO-8601 e fuso orario UTC</td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>2018-10-13T00:00:00.000Z</code></td></tr></tbody></table>

{% hint style="warning" %}
**Fai attenzione al fuso orario!** La data deve essere espressa nel fuso orario UTC (Z). \
In Italia si usa il fuso UTC+1 quando è in vigore l'ora solare, mentre si usa il fuso UTC+2 quando è in vigore l'ora legale.

**Esempio:**

`2022-09-30T22:00:00Z` --> In Italia è la mezzanotte del 1° ottobre 2022

`2022-11-30T23:00:00Z` --> In Italia è la mezzanotte del 1° dicembre 2022
{% endhint %}

{% hint style="warning" %}
**Fai attenzione all'orario!** Se la data di scadenza non prevede un orario specifico, solitamente si fa riferimento alla fine della giornata. Inserisci correttamente l'orario per evitare di mostrare una data di scadenza errata.

**Esempio:**

✅ 12 gennaio (23:59:59) --> L'utente può pagare entro la giornata del 12 gennaio

❌ 12 gennaio (00:00:01) --> L'utente può pagare entro la giornata dell'11 gennaio
{% endhint %}

{% hint style="success" %}
La data di scadenza del messaggio è separata rispetto a quella dell'eventuale posizione debitoria associata e può essere specificata anche a in assenza di di quest'ultima
{% endhint %}

{% hint style="info" %}
Se hai sottoscritto l'accordo Premium, IO genererà per te **promemoria** [di lettura](https://docs.pagopa.it/kb-enti-messaggi/domande-frequenti/domande-e-risposte-sui-messaggi#come-funziona-il-reminder-per-i-messaggi-non-letti) o [di pagamento](https://docs.pagopa.it/kb-enti-messaggi/domande-frequenti/domande-e-risposte-sui-messaggi#come-funziona-il-reminder-per-i-messaggi-con-avvisi-non-pagati) in prossimità della data di scadenza indicata: i promemoria saranno inviati al dispositivo del destinatario sotto forma di notifiche push
{% endhint %}

### **`payment_data`**

{% hint style="info" %}
Per l’invio degli avvisi di pagamento è necessario richiedere [specifica l’abilitazione.](../../abilitazioni/test-invio-avvisi-pagopa.md)
{% endhint %}

#### **`amount`` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="202"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Importo in centesimi di euro dell’avviso di pagamento emesso su piattaforma pagoPA</td></tr><tr><td><strong>Obbligatorio</strong></td><td>Sì, per pagamenti pagoPA</td></tr><tr><td><strong>Tipo</strong></td><td>Intero</td></tr><tr><td><strong>Esempio</strong></td><td><code>100</code></td></tr></tbody></table>

#### **`notice_number`` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="203"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Codice avviso di un avviso di pagamento emesso su piattaforma pagoPA</td></tr><tr><td><strong>Obbligatorio</strong></td><td>Sì, per i pagamenti pagoPA</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>301011100007347557</code></td></tr></tbody></table>

{% hint style="warning" %}
È importante che il codice fiscale del servizio mittente corrisponda al codice fiscale dell’ente creditore che emette l’avviso pagoPA.
{% endhint %}

#### **`invalid_after_due_date`**

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>In app visualizza il pagamento come scaduto se la data attuale è successiva a <code>due_date</code></td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>false</code></td></tr><tr><td><strong>Tipo</strong></td><td>Booleano</td></tr><tr><td><strong>Esempio</strong></td><td><code>false</code></td></tr></tbody></table>

#### [`payee`](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#descrizione)

{% hint style="info" %}
Questa funzionalità è riservata agli enti che hanno concordato con PagoPA l'abilitazione alla separazione tra i codici fiscali del mittente _del messaggio_ e del beneficiario della posizione debitoria.
{% endhint %}

### `third_party_data`

#### `configuration_id`` `<mark style="color:red;">`*`</mark>

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>identificativo univoco, ritornato dall'API descritta in <a data-mention href="cru-configurazioni-remote.md">cru-configurazioni-remote.md</a>, che indica la configurazione remota (<em>third party</em>) di riferimento per il messaggio</td></tr><tr><td><strong>Obbligatorio</strong></td><td>Sì</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td>0e9852ccb8a04128bd637c807b9d80d3</td></tr></tbody></table>

{% hint style="info" %}
Per maggiori informazioni fai riferimento alla sezione  [configurazione-remota.md](../../setup-iniziale/configurazione-remota.md "mention")
{% endhint %}

#### `id`` `<mark style="color:red;">`*`</mark>

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>identificativo <em>third party</em> univoco, <strong>generato dall'ente</strong>, necessario per poter associare il messaggio ai suoi contenuti remoti</td></tr><tr><td><strong>Obbligatorio</strong></td><td>Sì</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91</code></td></tr></tbody></table>

#### `has_precondition`

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Indica la presenza di precondizioni all'apertura del messaggio; il contenuto delle precondizioni dovrà essere servito dall'ente esponendo la corrispondente API descritta in <a data-mention href="../openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-delle-precondizioni-allapertura-del-messaggio">#endpoint-di-recupero-delle-precondizioni-allapertura-del-messaggio</a></td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>NEVER</code></td></tr><tr><td><strong>Tipo</strong></td><td>Stringa enumerata</td></tr><tr><td><strong>Valori Accettati</strong></td><td><ul><li><code>NEVER</code> -> il messaggio non ha precondizioni</li><li><code>ONCE</code> -> le precondizioni sono mostrate prima dell'apertura in app solo finché il messaggio non viene letto dal destinatario</li><li><code>ALWAYS</code> -> le precondizioni sono mostrate prima di ogni apertura del messaggio in app</li></ul></td></tr><tr><td><strong>Esempio</strong></td><td><code>ONCE</code></td></tr></tbody></table>

{% hint style="info" %}
Se popolato, il valore di questo campo ridefinisce, per il messaggio corrente, il comportamento di default indicato in fase di configurazione (per maggiori informazioni fai riferimento a [configurazione-remota.md](../../setup-iniziale/configurazione-remota.md "mention"))
{% endhint %}

#### `has_remote_content`

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Indica che <code>subject</code> e <code>markdown</code> del messaggio sono remotizzati; il contenuto di tali campi dovrà essere servito dall'ente esponendo la corrispondente API descritta in <a data-mention href="../openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-dettagli-del-messaggio">#endpoint-di-recupero-dei-dettagli-del-messaggio</a></td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>false</code></td></tr><tr><td><strong>Tipo</strong></td><td>Booleano</td></tr><tr><td><strong>Esempio</strong></td><td><code>true</code></td></tr></tbody></table>

#### `has_attachments`

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Indica la presenza di allegati relativi al messaggio; i metadati degli allegati dovranno essere serviti dall'ente esponendo la corrispondente API descritta in <a data-mention href="../openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-dettagli-del-messaggio">#endpoint-di-recupero-dei-dettagli-del-messaggio</a>, mentre i byte dei singoli allegati esponendo l'API descritta in <a data-mention href="../openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#endpoint-di-recupero-dei-byte-del-singolo-allegato">#endpoint-di-recupero-dei-byte-del-singolo-allegato</a></td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>false</code></td></tr><tr><td><strong>Tipo</strong></td><td>Booleano</td></tr><tr><td><strong>Esempio</strong></td><td><code>false</code></td></tr></tbody></table>

<details>

<summary><span data-gb-custom-inline data-tag="emoji" data-code="1f6a7">🚧</span> Campi riservati per utilizzi futuri</summary>

#### `original_sender`

#### `original_receipt_date`

#### `summary`

</details>

### **`prescription_data`**

{% hint style="info" %}
Questa funzionalità è in sperimentazione interna.
{% endhint %}

### `eu_covid_cert`

{% hint style="info" %}
Questa funzionalità è riservata ai soggetti autorizzati.
{% endhint %}

### `legal_data`

{% hint style="info" %}
Questa funzionalità è in sperimentazione interna.
{% endhint %}

## **Esempi**

### **Messaggio non remotizzato (statico)**

{% code overflow="wrap" %}

```shell
### REQUEST
curl --location --request POST 'https://api.io.pagopa.it/api/v1/messages' \
--header 'Content-Type: application/json' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--data-raw '{
"content": {
"subject": "Welcome new user !",
"markdown": "# This is a markdown header\n\nto show how easily markdown can be converted to **HTML**\n\nRemember: this has to be a long text."
},
“feature_level_type”: “STANDARD”,
"fiscal_code": "AAAAAA00A00A000A"
}'
```

{% endcode %}

### Messaggio con titolo e corpo remoti

{% code title="Contenuto della richiesta" overflow="wrap" %}

```json
{
     "content": {
        "subject": "Titolo del messaggio mostrato in inbox",
        "markdown": "Questo testo sarà sostituito con il markdown remoto specificato al momento della fruizione del messaggio",
        "third_party_data": {
            "id": "2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91",
            //-----------------------------------------------------
            "configuration_id": "0e9852ccb8a04128bd637c807b9d80d3",
            "has_remote_content": true
            //-----------------------------------------------------
        }
    },
    "fiscal_code": "AAAAAA00A00A000A"
}
```

{% endcode %}

### Messaggio con precondizioni

{% code title="Contenuto della richiesta" overflow="wrap" %}

```json
{
     "content": {
        "subject": "Titolo del messaggio",
        "markdown": "Testo del messaggio lungo almeno ottanta caratteri nel rispetto delle specifiche di integrazione con IO",
        "third_party_data": {
            "id": "2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91",
            "configuration_id": "0e9852ccb8a04128bd637c807b9d80d3",
            //----------------------
            "has_precondition": true
            //----------------------
        }
    },
    "fiscal_code": "AAAAAA00A00A000A"
}
```

{% endcode %}

### Messaggio remotizzato con allegati

{% code title="Contenuto della richiesta" overflow="wrap" %}

```json
{
     "content": {
        "subject": "Titolo del messaggio",
        "markdown": "Testo del messaggio lungo almeno ottanta caratteri nel rispetto delle specifiche di integrazione con IO",
        "third_party_data": {
            "id": "2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91",
            "configuration_id": "0e9852ccb8a04128bd637c807b9d80d3",
            //---------------------
            "has_attachments": true
            //---------------------
        }
    },
    "fiscal_code": "AAAAAA00A00A000A"
}
```

{% endcode %}

{% hint style="info" %}
Nel blocco [#third\_party\_data](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") è possibile specificare più combinazioni dei flag [#has\_precondition](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition "mention"), [#has\_remote\_content](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_remote_content "mention") e [#has\_attachments](submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_attachments "mention") (quest'ultimo solo se hai sottoscritto l'Accordo relativo alle [funzionalita-premium.md](../../abilitazioni/funzionalita-premium.md "mention")), come nell'esempio:
{% endhint %}

{% code title="Contenuto della richiesta" overflow="wrap" %}

```json
{
     "content": {
        "subject": "Titolo del messaggio",
        "markdown": "Testo del messaggio lungo almeno ottanta caratteri nel rispetto delle specifiche di integrazione con IO",
        "third_party_data": {
            "id": "2d5e0bcf-7ac3-4afc-a8bd-ac3c27582b91",
            "configuration_id": "0e9852ccb8a04128bd637c807b9d80d3",
            //-------------------------
            "has_precondition": true,
            "has_remote_content": true,
            "has_attachments": true
            //-------------------------
        }
    },
    "fiscal_code": "AAAAAA00A00A000A"
}
```

{% endcode %}

{% hint style="warning" %}
IO effettua controlli di coerenza tra i flag indicati in questa fase e quanto ritornato coi dettagli del messaggio remoto; come esempio, se indichi `"has_attachments": true` ma in fase di recupero dei dettagli del messaggio non includi la struttura `"attachments"`, il tuo destinatario riceverà un errore e non potrà visualizzare il messaggio.

Per maggiori dettagli fai riferimento a [openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md](../openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md "mention")
{% endhint %}

### Risposta attesa

In tutti i casi sopra descritti, IO ritorna l'identificativo del messaggio che puoi usare per interrogarne lo stato tramite l'API [get-message.md](get-message.md "mention").

{% code title="Contenuto della risposta" overflow="wrap" %}

```shell
{
    "id": "01EM6X4JB9VSZTQ8H16KMQFCEJ"
}
```

{% endcode %}

{% hint style="info" %}
Se hai sottoscritto l'[accordo Premium](../../abilitazioni/funzionalita-premium.md), oltre a sapere se sia stato correttamente inviato potrai conoscerne lo stato di lettura e, se presente, di pagamento della posizione debitoria associata.
{% endhint %}

{% hint style="success" %}
:bulb: È importante che i tuoi sistemi siano istruiti a **conservare gli identificativi dei messaggi spediti tramite IO**, mantenendone la correlazione coi rispettivi destinatari e le eventuali informazioni di contesto remoto.
{% endhint %}

## Risorse utili

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/submitMessageforUserWithFiscalCodeInBody](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/submitMessageforUserWithFiscalCodeInBody)
