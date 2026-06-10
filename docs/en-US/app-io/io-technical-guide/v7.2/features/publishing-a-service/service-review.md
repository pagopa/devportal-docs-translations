# Revisione del servizio

Quando la scheda del servizio è completa e aderente al [Manuale dei servizi](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/zcLztiq5qDSVw9rRjW7p/), puoi inviare una richiesta di revisione.&#x20;

Se il servizio viene **approvato** si può procedere con la pubblicazione (automatica se è stato specificato nella richiesta di review inviata tramite API). Nel caso in cui venga **respinto**, ti viene comunicata una motivazione che ti consente di apportare le modifiche necessarie per poterlo sottoporre nuovamente alla valutazione.

#### Tramite Developer Portal

<details>

<summary><mark style="color:blue;">Step 1</mark> - Accedi e identifica il servizio</summary>

1. [**Accedi**](https://developer.io.italia.it/) al Developer Portal;
2. Nella colonna sinistra, seleziona **“Servizi”**;
3. Nella lista dei tuoi servizi identifica il servizio che vuoi controllare e clicca sul box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Invia richiesta di valutazione del servizio</summary>

Prima di inviare la richiesta assicurati che il servizio sia completo e aderente al [Manuale dei servizi](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/zcLztiq5qDSVw9rRjW7p/).

1. Scorri la scheda servizio fino in fondo;
2. Nel box "Go Live!" clicca sul bottone "Pubblica Servizio".

Se il bottone non è abilitato significa che la scheda del servizio non è completamente compilata: controlla di aver inserito almeno tutti i dati obbligatori.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Consulta esito</summary>

1. Entra di nuovo nel Developer Portal e cerca la scheda del servizio;
2. In alto troverai un box informativo con l'indicazione dello [stato del servizio](stato-del-servizio.md).

🟢 Se il servizio è stato **approvato**, è stato anche pubblicato. Sarà visibile in App IO entro qualche ora.

🔴 Se il servizio è stato **respinto**, scorri fino alla fine della pagina, dove puoi trovare la motivazione. Correggi il servizio nelle modalità indicate, per poi sottoporlo nuovamente alla valutazione.

</details>

#### Tramite Area Riservata

<details>

<summary><mark style="color:blue;">Step 1</mark> - Accedi e identifica il servizio</summary>

1. [**Accedi**](https://selfcare.pagopa.it/) all'Area Riservata;
2. Seleziona l'ente per il quale vuoi operare dalla lista che ti viene mostrata;
3. Tra i prodotti attivi cerca App IO e clicca sul box relativo;
4. Nella colonna sinistra, seleziona "**Servizi**";
5. Nella lista dei tuoi servizi identifica il servizio che vuoi controllare e clicca sul box per vederne il dettaglio.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Invia richiesta di valutazione del servizio</summary>

Prima di inviare la richiesta assicurati che il servizio sia completo e aderente al [Manuale dei servizi](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/zcLztiq5qDSVw9rRjW7p/).

1. Clicca in alto sul pulsante **"Invia in revisione"**;&#x20;
2. Attendi che il servizio venga validato o meno da PagoPA S.p.A.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Consulta esito</summary>

1. Entra di nuovo in Area Riservata e cerca la scheda del servizio;
2. Accanto al nome del servizio troverai un tag con l'indicazione dello [stato del servizio](stato-del-servizio.md);

🟢 Se il servizio è stato **approvato**, procedi a pubblicarlo cliccando sul pulsante **"Pubblica in app IO"**. Sarà visibile in App IO entro qualche ora.

🔴 Se il servizio è stato **respinto**, puoi trovare il motivo del rifiuto. Correggi il servizio nelle modalità indicate, per poi sottoporlo nuovamente alla valutazione.

</details>

#### Tramite API

<details>

<summary><mark style="color:blue;">Step 1</mark> - Recupera api-key apposita</summary>

Scopri che cos'è la [`chiave manage`](chiave-manage/chiave-manage.md) e [come recuperarla](chiave-manage/chiave-manage.md#recupera-la-chiave-manage).

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Invia richiesta di valutazione del servizio</summary>

1. Identifica e recupera l'id del servizio che vuoi sottomettere alla revisione;
2. Interroga l'API per [richiedere la revisione](../../api-e-specifiche/api-servizi/manage-service-request-review.md). Potrai scegliere di procedere con la pubblicazione automatica del servizio in caso di approvazione.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Consulta esito</summary>

1. Interroga l'API di [lettura del dettaglio di un servizio](../../api-e-specifiche/api-servizi/manage-service-get.md);&#x20;
2. Consulta il campo `status.value` per conoscere l'esito della revisione;
3. Comprendi quali possono essere gli [stati del servizio](stato-del-servizio.md).

🟢  Se il servizio è in stato **`APPROVED`**, è pronto per essere attivato. Se hai scelto l'attivazione automatica, il servizio sarà già **`PUBLISHED`** (ovvero **attivato**)\

🔴 Se il servizio è in stato **`REJECTED`**:

1. Consulta `status.reason` per sapere perché è stato respinto;
2. Potrai correggere il servizio seguendo le indicazioni ricevute, per poi sottoporlo di nuovo.

</details>

