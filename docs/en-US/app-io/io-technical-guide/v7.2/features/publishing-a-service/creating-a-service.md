# Creare un servizio

Ecco quali sono gli step da seguire per creare un servizio.

#### Tramite Developer Portal

<details>

<summary><mark style="color:blue;">Step 1</mark> - Crea il servizio</summary>

1. [**Accedi**](https://developer.io.italia.it/) al Developer Portal;
2. Nella colonna sinistra, seleziona **“Servizi”**;
3. Verifica che i **campi precompilati** siano corretti e modificali se necessario;
4. Seleziona "**Aggiungi sottoscrizione**" per creare il servizio in bozza;
5. Visualizza e salva le **API key** associate al servizio.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Inserisci i dati richiesti</summary>

Per pubblicare il servizio in produzione, devi inserire i dati che trovi alla sezione[dati-obbligatori](dati-obbligatori/ "mention").&#x20;

</details>

#### Tramite Area Riservata

<details>

<summary><mark style="color:blue;">Step 1</mark> - Crea il servizio</summary>

1. [**Accedi**](https://selfcare.pagopa.it/) all'Area Riservata;
2. Seleziona l'ente per il quale vuoi operare dalla lista che ti viene mostrata;
3. Tra i prodotti attivi cerca App IO e clicca sul box relativo;
4. Nella colonna sinistra, seleziona "**Servizi**";
5. Clicca su "**Crea un servizio**";
6. Scrivi il "**Nome servizio**" (il nome che il cittadino vedrà in app: [sceglilo con cura](https://docs.pagopa.it/manuale-operativo-dei-servizi/come-si-crea-un-servizio/la-scheda-servizio/nome-del-servizio)!) e compila tutti gli altri campi richiesti;
7. Procedi cliccando **"Crea servizio"** per creare il servizio in bozza;
8. Visualizza e salva le **API key** associate al servizio.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Invia il servizio in revisione</summary>

1. Torna alla sezione **"Servizi"** nel menù di sinistra;
2. Clicca sul servizio appena creato per vederne il dettaglio;
3. Clicca in alto sul pulsante **"Invia in revisione"**;&#x20;
4. Attendi che il servizio venga validato o meno da PagoPA S.p.A.

</details>

#### Tramite API

<details>

<summary><mark style="color:blue;">Step 1</mark> - Recupera api-key apposita</summary>

Scopri che cos'è la [`chiave manage`](chiave-manage/chiave-manage.md) e [come recuperarla](chiave-manage/chiave-manage.md#recupera-la-chiave-manage).

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Prepara la scheda servizio</summary>

1. Recupera le [specifiche API](../../api-e-specifiche/api-servizi/manage-service-create.md) relative e leggi con attenzione i consigli
2. Prepara il payload relativo alla scheda servizio che vuoi creare
3. Utilizza [manage-service-create.md](../../api-e-specifiche/api-servizi/manage-service-create.md "mention") con la tua chiave `manage`

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Esegui la chiamata API</summary>

Effettua la chiamata e prendi nota del serviceId del servizio appena creato.&#x20;

Per recuperare le chiavi del servizio creato, puoi far riferimento a [Manage Service: Get keys. ](../../api-e-specifiche/api-servizi/manage-service-get-keys.md)

</details>

