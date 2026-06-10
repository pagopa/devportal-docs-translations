# API Key manage

L'API Key `manage` è la chiave con cui potrai gestire i servizi tramite API e quindi fare qualsiasi operazione relativa ai servizi.&#x20;

Attualmente esistono due tipi di chiavi `manage`:

- **master**: ne esiste solo una per ente e non ha alcune restrizioni di visibilità sui servizi;
- **di gruppo**: può essere utilizzata solo per gestire i servizi associati al gruppo di appartenenza.

{% hint style="info" %}
Sono le **uniche api-key** che potrai usare con le API appartenenti alla categoria `manage`, riconoscibili sia dal tag nella specifica openAPI che nel path.
{% endhint %}

## Recupera la chiave `manage`

#### Tramite Developer Portal

1. [**Accedi**](https://developer.io.italia.it/) al Developer Portal;
2. Nella colonna sinistra, seleziona **“Servizi”**;
3. Se sei abilitato, in alto troverai un box con la chiave `manage`, subito sotto le informazioni relative all'account;
4. Visualizza e copia la chiave per poterla usare nella tua integrazione.

{% hint style="warning" %}
Per utilizzare questa api-key tramite Developer Portal, è necessario avere l'[abilitazione alla gestione dei servizi](../../../abilitazioni/gestione-dei-servizi.md).
{% endhint %}

#### Tramite Area Riservata

1. [**Accedi**](https://selfcare.pagopa.it/) all'Area Riservata;
2. Seleziona l'ente per il quale vuoi operare dalla lista che ti viene mostrata;
3. Tra i prodotti attivi cerca App IO e clicca sul box relativo;
4. Nella **Panoramica** troverai subito le API Key manage che puoi copiare;
5. Se vuoi gestire le API Key manage, puoi selezionare la voce di menù **"API Key"** per poterle copiare o ruotare.
