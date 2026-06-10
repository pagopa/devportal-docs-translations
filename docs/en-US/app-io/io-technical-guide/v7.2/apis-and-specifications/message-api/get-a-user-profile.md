# ⚠️ Get a User Profile

{% hint style="danger" %}
**Attenzione**: la seguente API sarà a breve deprecata, pertanto se ne sconsiglia l’uso. Utilizzare [get-a-user-profile-using-post.md](get-a-user-profile-using-post.md "mention")
{% endhint %}

## Descrizione

Questa API permette di controllare che il cittadino identificato tramite codice fiscale sia iscritto ad IO, e che il servizio possa inviare comunicazioni al cittadino stesso.

La risposta è ritenuta positiva se sono verificate entrambe queste condizioni:

1. lo status code della risposta è **`200`**
2. nel body di risposta il campo **`sender_allowed=true`**

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/profiles/{fiscal_code}" method="get" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Esempi

{% code overflow="wrap" %}

```shell
### REQUEST
curl --location --request GET 'https://api.io.pagopa.it/api/v1/profiles/AAAAAA00A00A000A' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__'
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

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getProfile](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/getProfile)
