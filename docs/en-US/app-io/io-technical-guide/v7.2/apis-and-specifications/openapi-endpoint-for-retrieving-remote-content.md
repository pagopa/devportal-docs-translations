# OpenAPI endpoint di recupero dei contenuti remotizzati

{% hint style="info" %}
Leggi [questa pagina](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md) per saperne di più sui messaggi a contenuto remoto.
{% endhint %}

{% hint style="warning" %}
Prima di poter inviare messaggi a contenuto remoto è necessario seguire la procedura illustrata in [configurazione-remota.md](../setup-iniziale/configurazione-remota.md "mention")
{% endhint %}

Nello scenario di invio tradizionale di un messaggio su IO, l'Ente richiama l'API esposta per la creazione del messaggio e IO procede alla sua gestione completa in app:

<figure><img src="../.gitbook/assets/[Sequence] Messaggi con contenuto statico.png" alt=""><figcaption></figcaption></figure>

Nel diagramma che segue ti mostriamo la sequenza di eventi che vede coinvolti il suo sistema e quello di IO nello scambio di informazioni col destinatario di un **messaggio a contenuto remoto**:

<figure><img src="../.gitbook/assets/[Sequence] Messaggi con contenuto remoto (alto livello).png" alt=""><figcaption><p>Messaggi a contenuto remoto: sequenza di alto livello</p></figcaption></figure>

<details>

<summary>Diagramma dettagliato</summary>

Segue, con maggiore livello di dettaglio, la sequenza degli eventi che costituiscono il ciclo di vita di un messaggio a contenuto remoto:

<img src="../.gitbook/assets/[Sequence] Messaggi con contenuto remoto.png" alt="" data-size="original">

Nei capitoli successivi troverai le sequenze di dettaglio di ciascuna fase.

</details>

## Endpoint di recupero delle precondizioni all'apertura del messaggio

Se in fase di [#creazione-del-messaggio-con-contenuto-remoto](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#creazione-del-messaggio-con-contenuto-remoto "mention") hai valorizzato il campo [#has\_precondition](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_precondition "mention") (o se l'avevi indicato in fase di [configurazione-remota.md](../setup-iniziale/configurazione-remota.md "mention")), al momento dell'apertura del messaggio da parte del destinatario, IO recupererà le precondizioni attraverso una chiamata `GET` ai tuoi sistemi, contenente in input i seguenti parametri:

- l'`id` di correlazione remota che avevi indicato nel blocco [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") in fase di invio del messaggio;
- il codice fiscale del destinatario (come header).

E' a carico dell'aderente la verifica del codice fiscale fornito in input, tramite opportuna chiamata ([Get a User Profile using POST](api-messaggi/get-a-user-profile-using-post.md)); in caso di esito positivo, verrà trasmesso ad IO il contenuto delle precondizioni.

<figure><img src="../.gitbook/assets/Sequenza recupero precondizioni remote.png" alt=""><figcaption></figcaption></figure>

IO utilizzerà la `base_url`, che avevi comunicato in fase di impostazione delle informazioni di configurazione remota, e l'identificativo di correlazione, che avevi specificato nel blocco [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") in fase di invio del messaggio, per comporre una chiamata GET nella forma `{base_url}/messages/{id}/precondition:`

{% openapi src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml" path="/messages/{id}/precondition" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml)
{% endopenapi %}

{% hint style="info" %}
Per maggiori informazioni sul significato dei singoli campi , fai riferimento a [inviare-un-messaggio-a-contenuto-remoto.md](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md "mention").
{% endhint %}

## Endpoint di **recupero dei dettagli del messaggio**

Se in fase di [#creazione-del-messaggio-con-contenuto-remoto](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#creazione-del-messaggio-con-contenuto-remoto "mention") avevi incluso il flag [#has\_remote\_content](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_remote_content "mention") o, essendo un Ente Premium, il flag [#has\_attachments](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_attachments "mention"), IO dovrà recuperare il contenuto del messaggio dai tuoi sistemi al momento della sua visualizzazione in app, e userà l'API di tipo `GET` con i seguenti parametri:

- l'`id` di correlazione remota che avevi indicato nel blocco [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") in fase di invio del messaggio;
- il codice fiscale del destinatario (come header).

Il tuo sistema potrà quindi recuperare il contenuto del messaggio verificando al contempo che la richiesta pervenuta sia relativa proprio a quel destinatario.

<figure><img src="../.gitbook/assets/Remoted Content - Details - Sequence Diagram.png" alt=""><figcaption></figcaption></figure>

IO utilizzerà la `base_url` creata in fase di impostazione delle informazioni di configurazione remota, e l'identificativo di correlazione, specificato nel blocco [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") in fase di invio del messaggio, per comporre una chiamata GET nella forma `{base_url}/messages/{id}:`

{% openapi src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml" path="/messages/{id}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml)
{% endopenapi %}

{% hint style="info" %}
Per maggiori informazioni sul significato dei singoli campi, fai riferimento a [inviare-un-messaggio-a-contenuto-remoto.md](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md "mention").
{% endhint %}

### Esempio di risposta attesa da IO

A seconda dei flag che avevi specificato in [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") al momento della [#creazione-del-messaggio-con-contenuto-remoto](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#creazione-del-messaggio-con-contenuto-remoto "mention"), in risposta all'API dovrai includere:

<table><thead><tr><th width="233">Se [flag]=true</th><th width="185">Struttura da inserire</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>has_remote_content</code></td><td><code>details</code></td><td>Completa titolo e corpo del messaggio. Per maggiori informazioni fai riferimento a <a data-mention href="openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#struttura-details-titolo-e-corpo-del-messaggio">#struttura-details-titolo-e-corpo-del-messaggio</a></td></tr><tr><td><code>has_attachments</code></td><td><code>attachments</code></td><td><strong>Solo per Enti Premium</strong>: compila i metadati degli allegati al messaggio. Per maggiori informazioni fai riferimento a <a data-mention href="openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md#struttura-attachments-allegati-pdf">#struttura-attachments-allegati-pdf</a></td></tr></tbody></table>

{% hint style="warning" %}
Fai attenzione a rispettare i flag che dichiari: IO effettua un controllo di coerenza tra il flag indicato in fase di creazione del messaggio e le strutture presenti nella risposta dell'API di dettaglio al momento della sua fruizione in app
{% endhint %}

#### Struttura `details`: titolo e corpo del messaggio

Di seguito un esempio di response nella struttura `details` in caso di messaggio a contenuto remoto (con flag `has_remote_content=true`):

```json
{
  "details":
  {
    "subject": "Questo è il titolo del messaggio",
    "markdown": "Questo è il corpo del messaggio in formato **markdown**"
  }
}
```

Ecco come apparirà in app il messaggio così impostato:

<figure><img src="../.gitbook/assets/image (19).png" alt="" width="375"><figcaption><p>Come l'esempio apparirà in app</p></figcaption></figure>

Il titolo mostrato nel messaggio con contenuto remoto può essere differente da quello che avevi indicato al momento della sua creazione (il campo `subject` in [submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md "mention")): quest'ultimo, infatti, è utilizzato come titolo nell'elenco dei messaggi in app ed è statico.

{% hint style="warning" %}
Ti ricordiamo che ai sensi delle [Linee Guida IO](https://www.agid.gov.it/sites/agid/files/2024-05/lg_punto_accesso_telematico_servizi_pa_3112021.pdf), nel titolo del messaggio , e ove necessarie nel corpo, per rispettare il principio di minimizzazione non devono essere inserite informazioni sensibili.
{% endhint %}

{% hint style="info" %}
Quando componi e trasmetti il testo del messaggio in formato markdown ricorda di impostare il charset `UTF-8` (per garantire la corretta visualizzazione dei caratteri accentati) e fai riferimento alla [Guida al Markdown](../risorse-utili/guida-al-markdown.md)
{% endhint %}

#### Struttura `attachments`: allegati PDF

In caso di sottoscrizione di un accordo Premium, di seguito un esempio di cosa puoi indicare se nella struttura `details` avevi specificato `has_remote_content=true`:

{% code overflow="wrap" %}

```json
{
  "attachments": [
    {
      "id": "7de61a5a-6829-4f76-9e37-dfd229cd3d62",
      "content_type": "application/pdf",
      "name": "Allegato 1.pdf",
      "url": "/io_attachments/410034f7-6cfd-43ef-b58b-2da1375ee218",
      "category": "DOCUMENT"
    },
    {
      "id": "1d9e3a59-2eed-496c-84dd-1fb9682d24eb",
      "content_type": "application/pdf",
      "name": "Allegato 2.pdf",
      "url": "/io_attachments/0004b1f5-7414-4db8-b9e0-1e38a7730fca",
      "category": "DOCUMENT"
    }
  ]
}
```

{% endcode %}

Nella tabella puoi trovare il significato di ciascun campo:

| Campo          | Formato ammesso                                                  | Note                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`           | stringa                                                          | <p>IO richiede che il campo <code>id</code> debba contenere un <strong>identificativo del singolo allegato</strong> che sia <strong>univoco all'interno del messaggio</strong>: è tua responsabilità definire questo campo e garantirne l'univocità presso i tuoi sistemi.</p><p>L'esempio riporta, a titolo esemplificativo, l'utilizzo di un GUID.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `content_type` | stringa enumerata                                                | Deve contenere il valore "`application/pdf`" in quanto IO accetta unicamente allegati in formato **PDF** conformi allo standard **PDF/A-2a**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `name`         | stringa (terminata in ".pdf") | <p>Deve contenere il nome dell'allegato come comparirà nel messaggio, all'interno della sezione "Allegati": sceglilo con cura in modo da comunicare correttamente con il tuo destinatario.<br><br><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span> È obbligatorio <strong>aggiungere sempre la desinenza ".pdf"</strong>.</p><p><strong>Limiti tecnici</strong><br>- <strong>127</strong> caratteri, estensione compresa (255 su iOS e Android moderni, ma 127 è il limite di sicurezza che copre il 100% dei dispositivi - Android)</p><p><strong>Indicazioni consigliate lato UX</strong> (per una visualizzazione che aiuta la comprensione del Cittadino):<br>- <strong>35</strong> caratteri, nel caso di nome dell'allegato privo di spazi (ad es. xxxyyyy_zzz-aaa.pdf)<br>- <strong>52</strong> caratteri, con max 26 caratteri per riga, quando il nome dell'allegato contiene spazi</p> |
| `url`          | stringa (in formato URL parziale)             | <p>Deve contenere il <strong>percorso relativo</strong> per il download dell’allegato. Questo perché IO scarica gli allegati tramite una richiesta <code>GET</code> all'indirizzo <code>{baseUrl}/messages/{id}/{url}</code>, dove:</p><ul><li><code>baseUrl</code> è la parte comune (iniziale) degli endpoint che hai comunicato al team di IO in fase di condivisione delle informazioni di configurazione remota;</li><li><code>id</code> è l'identificativo di correlazione remota che avevi specificato nel blocco <a data-mention href="api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data">#third_party_data</a> in fase di invio del messaggio</li></ul>                                                                                                                                                                                                       |
| `category`     | stringa enumerata                                                | Deve contenere il valore `"DOCUMENT"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Endpoint di **recupero dei byte del singolo allegato**

Se hai sottoscritto l'Accordo Premium e nella risposta all'API di dettaglio illustrata nel capitolo precedente hai incluso i metadati di uno o più allegati, quando il destinatario del messaggio vorrà visualizzarli, IO recupererà il contenuto presso i tuoi sistemi componendo la URL di una chiamata `GET` nel formato `{baseUrl}/{id}/{url}`, dove:

- `baseUrl` è la parte comune (iniziale) degli endpoint che hai comunicato al team di IO in fase di impostazione delle informazioni di configurazione remota;
- `{id}` è l'identificativo che avevi specificato nel blocco [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") in fase di invio del messaggio;
- `{url}` è il completamento della `baseUrl` specifico per l'allegato in questione, come restituito nei metadati con l'API di dettaglio.

{% hint style="warning" %}
Fai attenzione: in questo caso l'identificativo univoco è l'`id` di **correlazione remota** che avevi indicato in [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data "mention") in occasione dell'invio del messaggio.
{% endhint %}

<figure><img src="../.gitbook/assets/Remoted Content - Download allegato - Sequence Diagram.png" alt=""><figcaption></figcaption></figure>

{% openapi src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml" path="/messages/{id}/{attachment_url}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml)
{% endopenapi %}

{% hint style="info" %}
L'API deve restituire lo stream di byte del file allegato in formato `application/octet-stream` binario.
{% endhint %}

## Autorizzazioni

### API Key

IO garantisce che il codice fiscale nella _request_ corrisponda a quello dell'utente che sta provando a recuperare i dati del messaggio. Il codice fiscale viene inviato attraverso l'header `fiscal_code`.

{% hint style="warning" %}
È responsabilità dell'Ente individuare correttamente il codice fiscale dell'utente.
{% endhint %}

## Nota sugli header

Tutte le API qui descritte prevedono una serie di _header_ opzionali denominati "`x-pagopa-lollipop-...`" e due header di "`signature`", che non devono essere valorizzati, ma di cui ti chiediamo di non escludere la ricezione.

## Risorse utili

[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml)
