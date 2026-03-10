# Retrieve the IDs for the checks

To perform some of the verifications required on PDND, the producer must be aware of certain IDs related to specific components.

These unique identifiers differ for each environment; that is, they are not the same in the testing and production environments.

The `producerId`, `eserviceId`, `descriptorId` and the audience (`aud`) can be retrieved via the back office interface in the delivery e-service tab (_**Producing > My e-services**_).\
The **purposeId** and **consumerId** can instead be found in the delivery purpose tab (_**Producing > Received purposes**_).

All the parameters are also available on the [APIs exposed by PDND](../api-esposte-da-pdnd-interoperabilita/).

The IDs do not change over time and do not contain sensitive information. It is therefore recommended to implement caching for more efficient verification, and possibly make use of [update notifications](../api-esposte-da-pdnd-interoperabilita/#canale-di-notifica) on the API to capture any changes.
