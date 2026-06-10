# Get a User Profile using POST

## Descrizione

Questa API permette di controllare che il cittadino identificato tramite Codice Fiscale sia iscritto a IO, e che il servizio possa inviare comunicazioni al cittadino stesso.

Il Codice Fiscale del cittadino andrà inserito nel body della post request.

La risposta è ritenuta positiva se sono verificate entrambe queste condizioni:

1. lo status code della risposta è **`200`**
2. nel body di risposta il campo **`sender_allowed=true`**

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/profiles" method="post" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Esempi

{% code overflow="wrap" %}

```shell
### REQUEST
curl --location --request POST 'https://api.io.pagopa.it/api/v1/profiles' \
--header 'Content-Type: application/json' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--data-raw '{
"fiscal_code": "AAAAAA00A00A000A"
}'
```

{% endcode %}

{% code overflow="wrap" %}

```shell
### RESPONSE
{
"sender_allowed": true
}
```

{% endcode %}

## Risorse utili

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getProfileByPOST](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getProfileByPOST)
