# How to deposit a signal

### Requirements <a href="#requisiti.1" id="requisiti.1"></a>

It is assumed that the producer is a provider member that has an e-service enabled for Signal Hub they provide, that has an api client (seed [the requirements for use](../how-to/prerequisites.md) of the Signal Hub).

It is assumed that the signal producer has identified and exposed the data related to the pseudonymization method, for example:

| **cryptographic hashing function**| **seed**|
|----------|----------|
| `sha256`| `f3a7f54e-8e57-4a06-8bca-ac1857b6b045`|

The deposit of the signals is related to every single e-service and their deposit is determined by the variation of at least one item of data related to the entity subject to the single e-service.

When a status or a fact changes in the domain of the owner's data, the producer identifies the data that changed and calculates the pseudonymized identifier:

`fiscalCode= FLZCRN65R02E202N`  
`cryptoHashFunction = sha256`  
`seed = f3a7f54e-8e57-4a06-8bca-ac1857b6b045`

`pseudonym(fiscalCode, cryptoHashFunction, seed) = 701c4489d6ac7fdb7...`

#### **Retention Period**

Every signal available on the Signal Hub has a _retention period_ (see the [specific section](../the-technical-guide/signals.md#retention-period-policy-e-recupero-periodico-dei-segnali)): after this period of time has elapsed it will be deleted.

#### **Signal identifier and order criterion**

The producer, as the data owner, determines the variation signals and their order: they determine what and in what order they must be distributed and therefore consumed by the users. The producer must generate and keep track of the `signalId` identifier that counts as a signal identifier and order criterion.

The `signalId` is a _positive_ _ascending_ _whole_ number (represented as `int64bit`). When generating the `signalIds` the provider must not “reuse” identifiers that were already issued or prior to the last `signalId` sent.

If for example the last `signalId` sent is 10, the signal deposit service will only accept signal `signalIds` after 10. The following values are considered INVALID: 0, 1-10. The following values are considered valid: 11, 12, … .

The provider must keep track of the sent `signalIds` in order to always find the last `signalId` sent to correctly generate the next one.

### Signal deposit <a href="#deposito-del-segnale" id="deposito-del-segnale"></a>

It is possible to have the following [types](../the-technical-guide/signals.md) of signals:

* signals related to the life cycle of an entity
* cryptographic information update signals

#### Deposit of a signal related to an entity

The producer obtains the API voucher from PDND (see the [documentation](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/utilizzare-i-voucher#richiesta-di-un-voucher))

`voucher = eyJ0eXAiOiJhdCtqd3Q...`

The producer sends the signal to the signal deposit service of the Signal Hub:

`$ curl --request POST \`\
`--url https://api.signalhub.interop.pagopa.it/1.0/push/signals`` ``\`\
`--header 'Authorization: Bearer eyJ0eXAiOiJhdCtqd3Q...' \`\
`--header 'content-type: application/json' \`\
`--data '{`\
`"signalId": 1,`\
`"objectType": "``domicile``",`\
`"objectId": "701c4489d6ac7fdb7...",`\
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`\
`"signalType": "UPDATE"`\
`}'`\

`$ { "signalId": 1 }`

Details of the signal data:

* `signalId` represents the univocal signal identifier for `eserviceId`. The `signalId` is used as an order criterion: it is assumed that the signals are ordered by ascending `signalId`.
* `objectId` represents the pseudonymized identifier of the subject to which the signal refers.
* `signalType` represents the type of signal that can assume one of the following values
  * `UPDATE` if an existing element has been changed
  * `DELETE` if an existing element has been deleted
  * `SEEDUPDATE` if cryptographic information has been updated
* `objectType` represents the type of object to which the signal refers; it is a mandatory, free-text field in which the type of object concerned with the event is indicated. If the e-service exposes different entities, the `objectType` value can be used to discriminate between them. For example, in an administrative document domain, `objectType` can have the values:
  * `IDcard`
  * `driverslicense`
  * `passport`

The provider must integrate this information in the e-service documentation so that the user can manage it.

* `eserviceId` represents the identifier of the service to which the signal refers

The service responds with `{ "signalId": 1 }` to indicate that the signal was accepted for insertion.

#### Deposit of the cryptographic information update signal <a href="#deposito-del-segnale-di-aggiornamento-delle-informazioni-crittografiche" id="deposito-del-segnale-di-aggiornamento-delle-informazioni-crittografiche"></a>

The signal deposit service can be used both to send insert/update/delete signals related to the life cycle of the objects exposed by the producer, as well as to communicate to the consumer that the cryptographic information has changed (hash function and seed).

For this purpose, the producer sends the signal to the signal deposit service of the Signal Hub:

`$ curl --request POST `  
`--url https://api.signalhub.interop.pagopa.it/v1/push/signals `  
`--header 'Authorization: Bearer eyJ0eXAiOiJhdCtqd3Q...' `  
`--header 'content-type: application/json' `  
`--data '{`  
`"signalId": 2,`  
`"objectType": "-",`  
`"objectId": "-",`  
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`  
`"signalType": "SEEDUPDATE`"  
`}'`

`$ { "signalId": 2 }`

Also the cryptographic information update signal must have a `signalId` that respects the order of the messages. From the next `signalId` the pseudonymized ids must be calculated with the new hash + seed combination.

\\