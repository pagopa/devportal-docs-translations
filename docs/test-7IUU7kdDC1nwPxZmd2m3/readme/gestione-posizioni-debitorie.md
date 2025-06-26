# Gestione Posizioni Debitorie

## PagoPA GPD API - Gestione Posizioni Debitorie

Versione: **v1**\
Ambiente UAT: `https://api.uat.platform.pagopa.it/gpd/api/v1`\
Ambiente PROD: `https://api.platform.pagopa.it/gpd/api/v1`

***

### Descrizione

Queste API permettono di:

* verificare la salute dell'applicazione
* gestire l'elenco delle organizzazioni
* creare, leggere, aggiornare, pubblicare, invalidare o eliminare posizioni debitorie
* gestire le opzioni di pagamento

***

### Autenticazione

Sono richieste:

* **API Key** negli header `Ocp-Apim-Subscription-Key` o query param `subscription-key`.

***

### Endpoints&#x20;

#### 1. `GET /info`

Controlla lo stato dell'applicazione.\
**Risposte:** `200 OK`, `401`, `403`, `500`

***

#### 2. `GET /organizations`

Restituisce l'elenco delle organizzazioni aggiornate a partire da una certa data.\
**Query param:** `since (yyyy-MM-dd)`\
**Risposte:** `200 OK`, `401`, `500`

***

#### 3. `GET /organizations/{organizationfiscalcode}`

Verifica l'esistenza di una organizzazione.\
**Path param:** `organizationfiscalcode`\
**Risposte:** `200 OK`, `404`, `401`, `500`

***

#### 4. `GET /organizations/{organizationfiscalcode}/debtpositions`

Restituisce l'elenco delle posizioni debitorie per un'organizzazione.\
**Query param obbligatori:** `page`, `due_date_from`, `due_date_to`\
**Risposte:** `200 OK`, `400`, `401`, `429`, `500`

***

#### 5. `POST /organizations/{organizationfiscalcode}/debtpositions`

Crea una nuova posizione debitoria.\
**Body:** `PaymentPositionModel`\
**Risposte:** `201 Created`, `400`, `401`, `409`, `500`

***

#### 6. `GET /organizations/{organizationfiscalcode}/debtpositions/{iupd}`

Restituisce i dettagli di una posizione debitoria.\
**Path param:** `iupd`\
**Risposte:** `200 OK`, `404`, `401`, `500`

***

#### 7. `PUT /organizations/{organizationfiscalcode}/debtpositions/{iupd}`

Aggiorna una posizione debitoria esistente.\
**Body:** `PaymentPositionModel`\
**Risposte:** `200 OK`, `400`, `404`, `409`, `500`

***

#### 8. `DELETE /organizations/{organizationfiscalcode}/debtpositions/{iupd}`

Elimina una posizione debitoria.\
**Risposte:** `200 OK`, `404`, `409`, `500`

***

#### 9. `POST /organizations/{organizationfiscalcode}/debtpositions/{iupd}/invalidate`

Annulla una posizione debitoria.\
**Risposte:** `200 OK`, `404`, `409`, `500`, `401`

***

#### 10. `POST /organizations/{organizationfiscalcode}/debtpositions/{iupd}/publish`

Pubblica una posizione debitoria.\
**Risposte:** `200 OK`, `404`, `409`, `500`, `401`

***

#### 11. `GET /organizations/{organizationfiscalcode}/paymentoptions/{iuv}`

Restituisce i dettagli di una opzione di pagamento.\
**Path param:** `iuv`\
**Risposte:** `200 OK`, `404`, `401`, `500`

***

#### 12. `POST /organizations/{organizationfiscalcode}/paymentoptions/{iuv}/pay`

Segnala l'avvenuto pagamento di una opzione.\
**Body:** `PayPaymentOptionModel`\
**Risposte:** `200 OK`, `400`, `404`, `409`, `422`, `401`, `500`

***

#### 13. `POST /organizations/{organizationfiscalcode}/paymentoptions/{iuv}/transfers/{transferid}/report`

Segnala la rendicontazione di una singola transazione.\
**Path param:** `transferid`\
**Risposte:** `200 OK`, `400`, `404`, `409`, `401`, `500`

***

### Schemi principali

#### PaymentPositionModel

Contiene i dati del debitore, l’identificativo univoco (iupd), e un array di `paymentOption`.

#### PaymentOptionModel

Contiene:

* `amount`, `iuv`, `dueDate`, `description`, `fee`, `transfer`

#### TransferModel

Dettagli del trasferimento economico, compresi `idTransfer`, `iban`, `amount`, `category`.

***

### Contatti e Termini

Per maggiori dettagli: [https://www.pagopa.gov.it](https://www.pagopa.gov.it)

