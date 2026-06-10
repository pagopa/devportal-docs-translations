# Manage Service: Release

## Descrizione

Questa API permette di pubblicare un servizio approvato. Per funzionare correttamente richiede l'inserimento del  **`service_id`** come path parameter.

{% hint style="info" %}
Devi usare la nuova chiave [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md) per la gestione dei servizi.&#x20;
{% endhint %}

{% hint style="warning" %}
Per utilizzare questa API è necessario richiedere un'[abilitazione specifica.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/release" method="post" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Risorse utili

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsReleaseService](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsReleaseService)
