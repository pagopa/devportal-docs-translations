# Get Subscriptions Feed

{% hint style="info" %}
Questa modalità è riservata agli enti centrali o di livello nazionale.\
[**Scopri come richiedere l'autorizzazione ->** ](../../abilitazioni/subscription-feed.md)
{% endhint %}

## Descrizione

L'API [get-subscriptions-feed.md](get-subscriptions-feed.md "mention") permette di effettuare il download degli _hash_ dei Codici Fiscali dei cittadini iscritti/disiscritti a un servizio per una specifica data (UTC-YYYY-MM-DD).&#x20;

Lo scopo del _subscription feed_ è mettere a disposizione degli enti centrali uno strumento per minimizzare le chiamate verso l'infrastruttura di IO attraverso un filtro costruito dall'ente stesso.&#x20;

Le informazioni del _subscription feed_ **sono aggiornate al giorno precedente**. Per la costruzione del _subscription feed_, dovrai interrogare il servizio per ogni giorno a partire dalla data del 24/03/2020 fino alla data attuale e salvare i dati nella tua infrastruttura.&#x20;

{% hint style="danger" %}
In nessun caso sarà possibile richiedere i codici fiscali in chiaro.&#x20;
{% endhint %}

{% hint style="info" %}
Per i dettagli tecnici su come codificare i Codici Fiscali del tuo sistema per poterli confrontare con quelli tornati dal _subscription feed_, espandi la sezione che segue.
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/subscriptions-feed/{date}" method="get" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

Per una risposta corretta si ottiene:

1. lo status code della risposta è `200`
2. nel body di risposta il campo **subscriptions** e **unsubscriptions**

## Esempi

{% code overflow="wrap" %}

```shell
### REQUEST
curl --location --request GET 'https://api.io.pagopa.it/api/v1/subscriptions-feed/2020-02-23' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__'
```

{% endcode %}

{% code overflow="wrap" %}

```shell
### RESPONSE
{
"dateUTC": "2020-02-23",
"subscriptions": [ "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" ],
"unsubscriptions": [ ]
}
```

{% endcode %}

## Risorse utili

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getSubscriptionsFeedForDate](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getSubscriptionsFeedForDate)
