# How to obtain cryptographic information

### Requirements <a href="#requisiti" id="requisiti"></a>

It is assumed that the signal consumer is a user member and can access the e-service of interest (see the [requirements for use](../how-to/prerequisites.md) of the Signal Hub).

### Recovery of cryptographic information <a href="#recupero-informazioni-crittografiche" id="recupero-informazioni-crittografiche"></a>

The consumer, user of the e-service of interest, calls the operation for reading the information concerning the pseudonymization algorithm with seeds and the parameters for its execution. For example:

`curl -X 'GET' "https://some.api.it/pseudonymization" -H "Authorization: Bearer eyJhbGciOi...`"

`{`  
`"seed": "f3a7f54e-8e57-4a06-8bca-ac1857b6b045",`  
`"cryptoHashFunction": "sha256`"  
`}`

The consumer keeps this information in order to guarantee confidentiality.

Once the cryptographic information is obtained, the consumer is able to calculate the pseudonyms only for the subjects for which there is an active administrative procedure that requires the constant update of the statuses and facts.

Example:

`fiscalCode= RSSMRA80A01H501U`  
`cryptoHashFunction = sha256`  
`seed = f3a7f54e-8e57-4a06-8bca-ac1857b6b045`

  
`pseudonym(fiscalCode, cryptoHashFunction, seed) = 82e98709e2f96ef...`

At this point, the signal consumer is able to associate a pseudonym with each subject, to compare with the pseudonyms contained in the received signals.

| **internal identifier**| **identifier in clear text**| **pseudonymized**  **identifier**|
|----------|----------|----------|
| 1| `RSSMRA80A01H501U`| `82e98709e2f96efd...`|
| 2| `FNTPPL62H44D643P`| `F5e0f94f36a5eea4...`|
| 3| `FLZCRN65R02E202N`| `701c4489d6ac7fdb7...`|

