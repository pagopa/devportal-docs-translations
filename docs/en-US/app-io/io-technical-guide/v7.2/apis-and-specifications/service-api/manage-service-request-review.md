# Manage Service: Request Review

## Descrizione

Questa API sottopone il servizio alla revisione di PagoPA. Per funzionare correttamente richiede l'inserimento del **`service_id`** come path parameter. Puoi richiedere che il servizio venga automaticamente attivato in caso di approvazione specificandolo nel `body` della richiesta.

{% hint style="info" %}
Devi usare la nuova chiave [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) per la gestione dei servizi.&#x20;
{% endhint %}

{% hint style="warning" %}
Per utilizzare questa API è necessario richiedere un'[abilitazione specifica.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/review" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Risorse utili

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsReviewService](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsReviewService)
