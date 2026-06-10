---
description: >-
  Questa sezione ti guida nella configurazione della funzionalità "Gruppi" di Area Riservata, che permette di definire la visibilità dei servizi rispetto a ad uno o più utenti (operatori).
---

# Gestire l'accesso ai servizi tramite i gruppi

## Cos'è un gruppo?

Un gruppo è un **insieme di delegati di un ente che vengono raggruppati secondo una caratteristica comune.** Ad esempio, un gruppo di utenti può rappresentare un ufficio specifico oppure un partner tecnologico che supporta l’ente.

Consulta il [Manuale Operativo di Area Riservata](https://docs.pagopa.it/area-riservata/area-riservata/come-funziona/gruppi) per ulteriori dettagli sui Gruppi.

## Perché creare un gruppo su IO?

Come amministratore di un ente, creando un gruppo di utenti per il prodotto IO, potrai:

- **Associare uno o più servizi ad un gruppo attivo**. In questo modo gli utenti (operatori) di quel gruppo potranno, tramite back-office, operare solo sui servizi a loro associati.
- **Creare delle API Key manage specifiche per quel gruppo.** Gli utenti (operatori) di quel gruppo che operano tramite API non potranno più visualizzare la [chiave-manage.md](chiave-manage/chiave-manage.md "mention")generale, ma solo quelle specifiche di quel gruppo, che permettono di operare solamente sui servizi "collegati" allo stesso gruppo.

{% hint style="warning" %}
Ricordati che, per ragioni di sicurezza, quando rimuovi un utente da un gruppo dovresti ruotare l'eventuale API Key associata. Per maggiori informazioni vedi [chiave-manage](chiave-manage/ "mention").
{% endhint %}

{% hint style="danger" %}
Un servizio può essere associato ad un solo gruppo.
{% endhint %}

## Quali sono le conseguenze della creazione di un gruppo per IO? <a href="#quale-il-beneficio-di-usare-i-gruppi-per-io" id="quale-il-beneficio-di-usare-i-gruppi-per-io"></a>

Come utente amministratore, utilizzando i gruppi potrai limitare il cono di visibilità e di operatività degli utenti operatori su alcuni servizi di IO.

{% hint style="info" %}
Come **amministratore** avrai sempre piena visibilità, indipendentemente dall'appartenenza ad uno o più gruppi.
{% endhint %}

Come utente operatore, potrai vedere e gestire solo i servizi che sono stati assegnati ai gruppi di cui fai parte.

{% hint style="info" %}
Come **operatore** non membro di alcun gruppo, vedrai tutti i servizi dell'ente, senza restrizioni.
{% endhint %}

## Cosa significa sospendere un gruppo?

Come amministratore dell'ente, in Area Riservata potrai sospendere un gruppo e di conseguenza:

- sospendere l'eventuale API Key associata ad esso, in modo da bloccare l'operatività degli utilizzatori di questa chiave.
- bloccare tutte le azioni sui servizi da parte degli operatori appartenenti a quel gruppo.

{% hint style="info" %}
Come **operatore** associato ad un gruppo sospeso non avrai accesso ai servizi associati a quel gruppo, né agli altri servizi dell'ente. Tuttavia, se sei associato ad altri gruppi attivi, continuerai ad avere accesso ai servizi di quei gruppi.
{% endhint %}

## **Chi può gestire i gruppi?** <a href="#chi-puo-gestire-i-gruppi" id="chi-puo-gestire-i-gruppi"></a>

I gruppi possono essere creati e gestiti dai soli utenti amministratori. Nello specifico:

<table data-full-width="false"><thead><tr><th width="298">Cosa può essere fatto</th><th width="135" data-type="checkbox">Amministratore</th><th width="186" data-type="checkbox">Operatore senza gruppo</th><th width="173" data-type="checkbox">Operatore con gruppo</th><th width="224" data-type="checkbox">Operatore con gruppo sospeso</th></tr></thead><tbody><tr><td>Creare un gruppo</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>Aggiungere utenti al gruppo</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>Modificare/Sospendere/Eliminare un gruppo</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>Creare e gestire le API Key del gruppo</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>Visualizzare tutte le API Key di gruppo</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>Visualizzare le API Key del gruppo di appartenenza</td><td>true</td><td>false</td><td>true</td><td>false</td></tr><tr><td>Gestire l'API Key Manage</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>Visualizzare l'API Key Manage</td><td>true</td><td>true</td><td>false</td><td>false</td></tr><tr><td>Visualizzare e gestire tutti i servizi</td><td>true</td><td>true</td><td>false</td><td>false</td></tr><tr><td>Visualizzare e gestire i servizi nel gruppo di appartenenza</td><td>true</td><td>false</td><td>true</td><td>false</td></tr></tbody></table>

## Procedura per configurare un gruppo su IO: <a href="#passaggi-da-fare-per-configurare-un-gruppo-su-io" id="passaggi-da-fare-per-configurare-un-gruppo-su-io"></a>

1. Crea un gruppo in Area Riservata ([Qui](https://docs.pagopa.it/area-riservata/area-riservata/come-funziona/gruppi) maggiori dettagli sulla funzionalità).
2. Accedi al back-office di IO
3. Vai nella sezione "Servizi" e associa al gruppo appena creato i soli servizi per cui vuoi che gli utenti possano operare.
   1. Puoi associare i servizi cliccando in alto a destra “Associa gruppo";
   2. Puoi entrare nel dettaglio di ciascun Servizio e, nel pannello delle informazioni, cliccare l’icona della matita accanto alla voce gruppi.
4. Se gli utenti del tuo ente lavorano tramite API:
   1. Vai nella sezione API Key;
   2. Crea una nuova API Key dei Gruppi per il gruppo appena creato;
   3. Informa gli utenti operatori del gruppo che ora hanno delle nuove API Key che possono usare per operare sui servizi e che possono recuperarle nel back-office.
