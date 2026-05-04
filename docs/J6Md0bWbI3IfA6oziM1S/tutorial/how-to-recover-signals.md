# How to recover signals

### Requirements <a href="#requisiti.2" id="requisiti.2"></a>

It is assumed that the consumer is a user member who can access an e-service enabled for Signal Hub, that has an api client (see [the requirements for use](../how-to/prerequisites.md) of the Signal Hub).

It is assumed that the signal consumer acquired the relative data in pseudonymization mode (see [how to obtain cryptographic information](how-to-obtain-cryptographic-information.md)) and that they are located, for example:

| **cryptographic hashing function**| **seed**|
|----------|----------|
| `sha256`| `f3a7f54e-8e57-4a06-8bca-ac1857b6b045`|

It is assumed that the signal consumer has calculated the pseudonymized ids and is able to associate them to the free text identifiers of the subjects, for example:

It is assumed that the signal consumer is able to calculate the pseudonymized ids and is able to associate them to the free text identifiers of the subjects, for example:

| **internal identifier**| **identifier in clear text**| **pseudonymized**  **identifier**|
|----------|----------|----------|
| 1| `RSSMRA80A01H501U`| `82e98709e2f96efd...`|
| 2| `FNTPPL62H44D643P`| `F5e0f94f36a5eea4...`|
| 3| `FLZCRN65R02E202N`| `701c4489d6ac7fdb7...`|

#### **Retention Period and API Polling**

The signal deposited on the Signal Hub has a _retention period_ (see the specific section) and beyond this period they are no longer available to be read. As a result, the signals that exceed the _retention period_ cannot be recovered. See the relative section for the rules concerning polling to the signal recovery APIs without losing the updates.

### Signal recovery <a href="#recupero-dei-segnali.1" id="recupero-dei-segnali.1"></a>

#### Recovery of a signal related to an entity

The consumer obtains the API voucher from PDND (see the [documentation](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/utilizzare-i-voucher#richiesta-di-un-voucher)):

`voucher = eyJ4eBMlOiDgdDtqe6P...`

The user reads the signals, invoking the signal recover service:

`$ curl --request GET `  
`--url https://api.signalhub.interop.pagopa.it/1.0/pull/signals/b1817321-0486-4c75-89e5-4ee297250418?size=5\&signalId=0 `  
`--header 'Authorization: Bearer eyJ4eBMlOiDgdDtqe6P...'`  
`$ {`  
`"signals": \[`  
`{`  
`"signalId": 1,`  
`"signalType": "UPDATE",`  
`"objectId": "dcc7b5b8-1e1a-4014-b765-de17de08e66c",`  
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`  
`"objectType": "domicile`"  
`},`  
`{`  
`"signalId": 2,`  
`"signalType": "UPDATE",`  
`"objectId": "9ef0f2bf-8ac4-45d6-8a41-4eacec9b1e8c",`  
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`  
`"objectType": "domicile`"  
`},`  
`{`  
`"signalId": 3,`  
`"signalType": "UPDATE",`  
`"objectId": "5f559b8e-7851-469f-9e94-657e1702faea",`  
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`  
`"objectType": "domicile`"  
`},`  
`{`  
`"signalId": 4,`  
`"signalType": "UPDATE",`  
`"objectId": "7b0b1ad9-6ac0-4670-86e0-eacadb3aa9d4",`  
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`  
`"objectType": "domicile`"  
`},`  
`{`  
`"signalId": 5,`  
`"signalType": "UPDATE",`  
`"objectId": "7b0b1ad9-6ac0-4670-86e0-eacadb3aa9d4",`  
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`  
`"objectType": "domicile`"  
`},`  
`],`  
`"lastSignalId": 5`

The service **request** must contain the following information (refer to the OpenAPI document for the default, min, max values)

* `eserviceId`: the id of the service from which to read the signals
* `signalId`: the identifier of the signal starting from which you want to receive additional signals (excluded): if `signalId=0` signals with a `signalId` greater than `0` will be returned, therefore: `1, 2, 3, 4, …`
* `size`: the quantity of signals to obtain in the response; if `size` is greater than the maximum value, the `size` will be overwritten with the maximum value (in this case the response will be a set of elements less than what was requested, equal to the maximum value). 

The **response** contains:

* the signals in order of ascending `signalId` starting from the next `signalId` to the `signalId` specified in the request for a quantity equal to the `size` specified in the request
* the `signalId` of the last signal returned, called `lastSignalId`
* Http Status `206 - Partial Content` if there are still signals to read: the number of total signals is greater than the signals present in the response
* Http Status `200 - OK` if there are no more signals to read: the signals in the response exhaust the total messages

**Example of a request that does not exhaust the signals in a call**

If we set the total number of signals present, related to an e-service, to `10`

Request no. 1

`$ curl --request GET `  
`--url https://api.signalhub.interop.pagopa.it/v1/pull/signals/b1817321-0486-4c75-89e5-4ee297250418?size=5\&signalId=0 `  
`--header 'Authorization: Bearer eyJ4eBMlOiDgdDtqe6P...'`

Response no. 1  
`Http Status 206`

`$ {`  
`"signals": \[`  
`...`  
`],`  
`"lastSignalId": 5`

The `Http Status 206` indicates that there are still signals, therefore the consumer will create the new request by setting the query param `signalId` equal to the `lastSignalId` value present in the response:

Request no. 2

`$ curl --request GET `  
`--url https://api.signalhub.interop.pagopa.it/v1/pull/signals/b1817321-0486-4c75-89e5-4ee297250418?size=5\&signalId=5 `  
`--header 'Authorization: Bearer eyJ4eBMlOiDgdDtqe6P...'`

Response no. 2  
`Http Status 200`

`$ {`  
`"signals": \[`  
`...`  
`],`  
`"lastSignalId": 10`

`Http Status 200` indicates that, currently there are no more signals to read: beyond the `"lastSignalId": 10` there is not a subsequent `signalId`.

From the point of view of long polling toward the service, the new request to make will be:

`$ curl --request GET `  
`--url https://api.signalhub.interop.pagopa.it/v1/pull/signals/b1817321-0486-4c75-89e5-4ee297250418?size=5\&signalId=10 `  
`--header 'Authorization: Bearer eyJ4eBMlOiDgdDtqe6P...'`

which would obtain this result:  
`Http Status 200`

`$ {`  
`"signals": [],`  
`"lastSignalId": null`

until the response changes (`Http Status 206` `signals` and `lastSignalId` set), that is until there are new signals.

**Example of a request that exhausts the signals in a call**

If we set the total number of signals present, related to an e-service, to `4`

Request no. 1

`$ curl --request GET `  
`--url https://api.signalhub.interop.pagopa.it/v1/pull/signals/b1817321-0486-4c75-89e5-4ee297250418?size=5\&signalId=0 `  
`--header 'Authorization: Bearer eyJ4eBMlOiDgdDtqe6P...'`

Response no. 1  
`Http Status 200`

`$ {`  
`"signals": \[`  
`...`  
`],`  
`"lastSignalId": 4`

`Http Status 200` indicates that, currently there are no more signals to read: beyond the `"lastSignalId": 4` there is not a subsequent `signalId`.

From the point of view of long polling toward the service, the new request to make will be:

`$ curl --request GET `  
`--url https://api.signalhub.interop.pagopa.it/v1/pull/signals/b1817321-0486-4c75-89e5-4ee297250418?size=5\&signalId=4 `  
`--header 'Authorization: Bearer eyJ4eBMlOiDgdDtqe6P...'`

Would obtain this result:

`$ {`  
`"signals": [],`  
`"lastSignalId": null`

until the response changes (`signals` and `lastSignalId` set), that is until there are new signals.

**Maintenance of the `lastSignalId`**

The signal consumer must keep track of the value of the `lastSignalId` present in the response of the signal recovery API. The `lastSignalId` makes it possible to obtain the subsequent signals starting from the specified value. See section”Example of a request that does not exhaust the signals in a call”.

#### Processing of signals and data update <a href="#elaborazione-dei-segnali-e-aggiornamento-del-dato" id="elaborazione-dei-segnali-e-aggiornamento-del-dato"></a>

Once the signal list has been recovered from the service, the consumer processes it by means of their internal status to determine whether a signal is relevant or not.

Assuming that the consumer has their own database of this type, able to associate an identifier in clear text (to be used to query the e-service) with a pseudonymized identifier.

Assuming that the consumer is able to associate an identifier in clear text (to be used to query the e-service) with a pseudonymized identifier, for example:

| **internal identifier**| **identifier in clear text**| **pseudonymized**  **identifier**|
|----------|----------|----------|
| 1| `RSSMRA80A01H501U`| `82e98709e2f96efd...`|
| 2| `FNTPPL62H44D643P`| `F5e0f94f36a5eea4...`|
| 3| `FLZCRN65R02E202N`| `701c4489d6ac7fdb7...`|

Assuming that the consumer received this list of signals:

| **signalId**| **objectId**|
|----------|----------|
| 1| `715a9864rt66`|
| 2| `0e25dc7684d7`|
| 3| `82e98709e2f96efd...`|
| 4| `7cb5786140d2`|
| 5| `4bdb-8b0bdfd`|

The consumer can identify as relevant the signal with `signalId = 3` considering that they can associate it with their own pseudonymized identifier. The other messages will be ignored as irrelevant, related to subjects for which the consumer does not have administrative procedures in progress.

In this way, the consumer has a list of identifiers in clear text of data subject to change:

| **internal identifier**| **identifier in clear text**| **pseudonymized**  **identifier**|
|----------|----------|----------|
| 1| `RSSMRA80A01H501U`| `82e98709e2f96efd...`|

Using this list, the consumer will invoke the e-service with the identifiers in clear text, requesting the updated data for each subject. If necessary, the consumer can activate additional internal processes due to the variation of the state of the data.

#### Recovery of an update signal for cryptographic information (type `seedUpdate)`  <a href="#recupero-di-un-segnale-di-tipo-seedupdate-ed-aggiornamento-delle-informazioni-crittografiche" id="recupero-di-un-segnale-di-tipo-seedupdate-ed-aggiornamento-delle-informazioni-crittografiche"></a>

In the case of a signal type `seedUpdate` based on the `signalId` the user can deduce that all signals with `signalId` greater than `signalId` of the `seedUpdate` will be impacted by the change to the calculation criterion of the `objectId`. See the section related to the cryptographic information update signal deposit.

For example, in this sequence, the signal consumer, after reading the message with "signald = 3` must query the e-service again to obtain the cryptographic information, and once it is obtained **recalculate** all the pseudonymized ids (see [how to obtain cryptographic information](how-to-obtain-cryptographic-information.md)).

| **signalId**| **objectId**| **signalType**| <p><br><strong>hash</strong><br><strong>seed</strong></p>|
|----------|----------|----------|----------|
| 1| `715a9864`| `domicile`| <p><code>sha256</code><br><code>f3a7f54e-8e57-4a06-8bca-ac1857b6b045</code></p>|
| 2| `0e25dc7684d7`| `domicile`| <p><code>sha256</code><br><code>f3a7f54e-8e57-4a06-8bca-ac1857b6b045</code></p>|
| 3| `-`| `seedupdate`| |
| 4| `7cb5786140d2`| `domicile`| <p><code>sha512</code><br><code>cbb70351-d2aa-4781-b861-d40c94413247</code></p>|
| 5| `4bdb-8b0b`| `domicile`| <p><code>sha512</code><br><code>cbb70351-d2aa-4781-b861-d40c94413247</code></p>|

\\