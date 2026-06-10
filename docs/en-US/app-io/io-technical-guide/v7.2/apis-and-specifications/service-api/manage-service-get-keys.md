# Manage Service: Get keys

## Descrizione

Questa API permette di recuperare le api-key di un servizio, che ti permetteranno di usarlo per esempio per [inviare-un-messaggio](../../funzionalita/inviare-un-messaggio/ "mention"). Per funzionare correttamente richiede l'inserimento del `service_id` come path parameter.

{% hint style="info" %}
Devi usare la [chiave-manage.md](../../funzionalita/pubblicare-un-servizio/chiave-manage/chiave-manage.md "mention") per la gestione dei servizi
{% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/keys" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Risorse utili <a href="#o8mmtd1j7fhx" id="o8mmtd1j7fhx"></a>

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsGetServiceKeys](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/cmsGetServiceKeys)
