# Argomento del servizio

L'argomento è un'area tematica utile per classificare un servizio, in funzione di cosa il servizio stesso offre.&#x20;

{% hint style="info" %}
**Esempio**: L'iscrizione ad un nuovo asilo nido, il pagamento delle tasse universitarie e l’iscrizione ai corsi di lingua offerti da Comune, sono tutti servizi appartenenti al topic _**Educazione e Formazione**_.
{% endhint %}

### Classificare il servizio specificando l'argomento:&#x20;

Se intendi definire l'area tematica di riferimento per il servizio:

#### Tramite Area Riservata

Seleziona l'argomento del servizio dal selettore del campo "**Argomento del servizio" quando crei o modifichi la scheda del servizio.** Troverai questa informazione tra i dati di dettaglio del servizio.

#### Tramite API

Valorizza l'attributo `metadata.topic_id` con l'id del topic che identifica l'area tematica di riferimento per il servizio.&#x20;

Per recuperare la lista dei topic (aree tematiche/argomenti) disponibili puoi invocare l'API `/services/topics`.
