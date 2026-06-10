# API Key

L'API Key è una chiave (secret) con cui, aggiungendola in uno specifico header della request, potrai invocare le API (per maggiori dettagli vedi la [sezione Authentication dell'OpenAPI](https://developer.io.italia.it/openapi.html#section/Authentication)).

Come amministratore dell'ente potrai visualizzare e rigenerare le chiavi.&#x20;

## Perché esistono due chiavi?

Ogni API Key è composta da una coppia di chiavi: _primaria_ ed una _secondaria_. Queste chiavi sono equivalenti e ti consentono di: cambiarle (rigenerarle) senza interrompere il servizio.

- **evitare interruzioni di servizio**: puoi cambiarle (rigenerarle) la coppia di chiavi evitando disservizi;
- **condividere temporaneamente la chiave**: in alcune occasioni potresti voler condividere l'API Key con i tuoi colleghi. Invece di condividere la chiave primaria (che viene utilizzata nelle tue applicazioni), condividi la chiave secondaria. Quando desideri revocare l'accesso a quella persona, rigenera la chiave secondaria. Una volta che hai rigenerato la chiave secondaria, la vecchia chiave secondaria non sarà più valida.

## Best practice per la gestione delle API Key

Quando utilizzi le chiavi API nelle tue applicazioni, assicurati che vengano protette sia durante lo stoccaggio sia durante la trasmissione.

### Elimina le API Key non necessarie per ridurre al minimo l'esposizione agli attacchi <a href="#delete-unneeded-keys" id="delete-unneeded-keys"></a>

Mantieni solo le API Key che stai utilizzando al momento per ridurre al minimo la superficie di attacco.

### Ruota periodicamente le API Key <a href="#rotate" id="rotate"></a>

Se ruoti periodicamente le API Key, puoi limitare l'impatto di eventuali chiavi compromesse.

Per evitare interruzioni del servizio, procedi nel seguente modo:

1. aggiorna le applicazioni in modo che utilizzino la chiave secondaria
2. rigenera la chiave primaria
3. aggiorna le applicazioni in modo che utilizzino la chiave primaria appena rigenerata
4. rigenera la chiave secondaria

### Non includere le API Key nel codice client e non eseguirne il commit nei repository di codice <a href="#no-commits" id="no-commits"></a>

Le API Key hardcoded nel codice sorgente o archiviate in un repository sono soggette ad intercettazione o furto da parte di malintenzionati. In ambienti client-side (come browser o applicazioni mobili) il client deve passare le richieste al proprio server di backend, che può aggiungere la chiave ed emettere la richiesta.

### Implementa monitoraggio e logging avanzati <a href="#logging-monitoring" id="logging-monitoring"></a>

Il monitoraggio dell'utilizzo delle API può aiutarti a rilevare un utilizzo non autorizzato.
