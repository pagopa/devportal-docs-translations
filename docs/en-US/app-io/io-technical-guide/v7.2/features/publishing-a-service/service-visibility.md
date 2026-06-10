# Visibilità del servizio in App

Quando un servizio viene approvato puoi gestire la sua visibilità in app IO.

{% hint style="info" %}
Un servizio **approvato** può essere **pubblicato** (e quindi reso _pubblico in app IO)_ o **nascosto** (e quindi reso _privato in app IO_) tutte le volte che si vuole.&#x20;
{% endhint %}

{% hint style="warning" %}
Ricorda, è necessario passare dal processo di revisione ogni volta che si vuole apportare una modifica alla scheda servizio.
{% endhint %}

### **Pubblicare un servizio in app IO**

#### Tramite Developer Portal

Ogni servizio per cui è stata [richiesta la revisione](revisione-del-servizio.md) tramite Developer Portal viene automaticamente attivato.

#### Tramite Area Riservata

Ogni servizio per cui è stata [richiesta la revisione](revisione-del-servizio.md) tramite l'Area Riservata viene automaticamente attivato.&#x20;

#### Tramite API

Hai due metodi a disposizione:

- Quando stai inviando una richiesta di revisione puoi richiedere l'auto pubblicazione e in caso di approvazione verrà eseguita automaticamente.
- Puoi usare l'[API specifica `service release`](../../api-e-specifiche/api-servizi/manage-service-release.md) per pubblicare un servizio approvato.

### Nascondere un servizio dall'app IO

Puoi nascondere un servizio che precedentemente è stato pubblicato in IO.

#### Tramite Developer Portal

<details>

<summary><mark style="color:blue;">Step 1</mark> - Accedi e identifica il servizio</summary>

1. [**Accedi**](https://developer.io.italia.it/) al Developer Portal;
2. Nella colonna sinistra, seleziona **“Servizi”**;
3. Nella lista dei tuoi servizi identifica il servizio che vuoi controllare e clicca sul box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Nascondi il servizio</summary>

1. Scorri la scheda servizio fino in fondo;
2. Nel box "Go Live!" clicca sul pulsante "Disattiva Servizio".

</details>

#### Tramite Area Riservata

<details>

<summary><mark style="color:blue;">Step 1</mark> - Accedi e identifica il servizio</summary>

1. [Accedi](https://selfcare.pagopa.it) all'Area Riservata con spid o cie;
2. Seleziona l'ente per il quale vuoi operare;
3. Nella zona centrale della pagina, individua i prodotti abilitati;
4. Clicca sul box IO;
5. Nella colonna di sinistra, seleziona "**Servizi**";
6. Nella lista dei tuoi servizi identifica il servizio che vuoi controllare e clicca sul box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Nascondi il servizio</summary>

1. In alto a destra del dettaglio servizio clicca sul pulsante **"Nascondi dall'app IO"**.

</details>

#### Tramite API

{% hint style="info" %}
Puoi usare solo la chiave apposita denominata [`manage`](chiave-manage/chiave-manage.md)
{% endhint %}

<details>

<summary><mark style="color:blue;">Step 1</mark> - identifica il servizio</summary>

Assicurati di recuperare il `service id` del servizio che vuoi rendere non visible in IO

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Effettua la chiamata</summary>

1. Effettua la chiamata all'api per [nascondere il servizio](../../api-e-specifiche/api-servizi/manage-service-unpublish.md)

</details>
