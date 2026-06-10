# Manage Service: Regenerate api key

## Descrizione

Questa API aggiorna le api-key di un servizio. Per funzionare correttamente richiede l'inserimento del **`service_id`** e del del tipo di chiave da rigenerare **`keyType`** (`PRIMARY` o `SECONDARY`) come path parameter.

{% hint style="info" %}
Devi usare la nuova chiave [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) per la gestione dei servizi.&#x20;
{% endhint %}

{% hint style="warning" %}
Per utilizzare questa API è necessario richiedere un'[abilitazione specifica.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/keys/{keyType}" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Risorse utili <a href="#o8mmtd1j7fhx" id="o8mmtd1j7fhx"></a>

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsRegenerateServiceKey](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsRegenerateServiceKey)
