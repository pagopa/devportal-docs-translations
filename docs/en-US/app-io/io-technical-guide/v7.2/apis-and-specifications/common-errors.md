---
description: >-
  In questa sezione trovi alcuni dei possibili errori a fronte di un invio di una richiesta alle API.
---

# Errori comuni

## Errore 429

Tutte le API possono restituire lo status code `429` . Questo errore rappresenta un **segnale di sovraccarico** dell’infrastruttura di IO: in questo caso, è necessario implementare un meccanismo di retry e diminuire il rate delle richieste inserendo delle pause.

## Errore 400

{% code overflow="wrap" %}

```json
{
  "detail": "value [undefined] at [root.0] is not a valid [Exact<NewMessage>]\nvalue [undefined] at [root.1] is not a valid [{ time_to_live: (integer >= 3600 and < 604800 | 604800) }]",
  "status": 400,
  "title": "Invalid (Exact<NewMessage> & { time_to_live: (integer >= 3600 and < 604800 | 604800) })"
}
```

{% endcode %}

In questo caso, l’errore è dovuto a un'errata trasmissione del body, come ad esempio un body non inviato nel formato corretto (JSON).

## Errore 401

{% code overflow="wrap" %}

```json
{
  "statusCode": 401,
  "message": "Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription."
}
```

{% endcode %}

In questo caso, assicurati di aver inserito nell’header il valore corretto della chiave `Ocp-Apim-Subscription-Key` . Utilizza una delle due chiavi presenti nella sezione "Profilo (sottoscrizioni)" del portale.

{% code overflow="wrap" %}

```json
{
   "statusCode": 401,
   "message": "Access denied due to missing subscription key. Make sure to include subscription key when making requests to an API."
}
```

{% endcode %}

In questo caso, assicurati di avere inserito nell’header della richiesta il valore della chiave `Ocp-Apim-Subscription-Key` . Utilizza una delle due chiavi presenti nella sezione "Profilo (sottoscrizioni)" del portale.

## Errore 403

{% code overflow="wrap" %}

```json
{
  "detail": "You are not allowed to issue requests for the recipient.",
  "status": 403,
  "title": "Recipient forbidden"
}
```

{% endcode %}

In questo caso, assicurati di aver inserito un Codice Fiscale valido o presente nel test.

{% hint style="info" %}
Questo specifico errore può anche significare che il destinatario non è su app IO: per assicurarti che possa ricevere i messaggi, utilizza prima l'API [get-a-user-profile-using-post.md](api-messaggi/get-a-user-profile-using-post.md "mention")
{% endhint %}

{% code overflow="wrap" %}

```json
{
   "detail": "You do not have enough permission to complete the operation you requested",
   "status": 403,
   "title": "You are not allowed here"
}
```

{% endcode %}

In questo caso, assicurati di aver inserito un IP valido nella LISTA IP di origine autorizzati del servizio o di aver sottoscritto il contratto aggiuntivo Premium e di aver eseguito le procedure di _onboarding_ previste.

## Errore 404

{% code overflow="wrap" %}

```json
{
  "statusCode": 404,
  "message": "Resource not found"
}
```

{% endcode %}

In questo caso, assicurati di aver scritto correttamente il path della richiesta, es: `https://api.io.pagopa.it/api/v1/profiles`
