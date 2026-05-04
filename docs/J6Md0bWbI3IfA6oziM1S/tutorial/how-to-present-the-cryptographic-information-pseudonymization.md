# How to present the cryptographic information - pseudonymization

### Exposition of the cryptographic information

The provider exposes an operation to read the cryptographic information so that the user can use it to read the signals and guarantee the confidentiality of the information. Pseudonymization is mandatory for personal data.

The producer identifies the pseudonymization algorithm with seeds and the parameters for its execution (seeds). This selection must be proportional to the type of personal data or the confidentiality of the information subject to the status and facts to which the variations can refer.

The value of the algorithm and the seed is univocal per e-service: all consumers will obtain the same algorithm and the same seed. The consumer must keep the received information confidential.

### Selection of the algorithm and the seed

For the selection of the algorithm and the seed, and as a reference for updates and evolutions, refer to:

* [LG PDND 4] "7.1.1. Pseudonymization algorithm"
* [the information regarding personal data protection can be referenced on the website of the Personal Data Protection Supervisor](https://www.garanteprivacy.it/temi/pseudonimizzazione)
* [the information provided by the Agency for National Cybersecurity](https://www.acn.gov.it/portale/documents/20119/85999/ACN_LineeGuida_Hash.pdf/e1d36f5c-c75e-06b7-9c5f-aa535ed39b33?version=1.0&t=1704377457344&download=true)

The recommendations of [LG PDND 4] "7.1.1. Pseudonymization algorithm” are provided below.

#### Selection of the algorithm

The recommended pseudonymization algorithms, or cryptographic hashing functions, are: 

* SHA-2: a set of cryptographic hash functions designed by the National Security Agency (NSA) to improve the security properties of its predecessor SHA-1
  * SHA-256 
  * SHA-512/256
  * SHA-384 
  * SHA-512
* SHA-3: a set of cryptographic hash functions designed by the NIST (National Institute of Standards and Technology) to improve the security properties of its predecessor SHA-2:
  * SHA3-256 
  * SHA3-384 
  * SHA3-512 
  * SHAKE128
  * SHAKE256

#### Selection of the seed

The pseudonymization algorithms recommended in the previous paragraph must be reinforced with the use of a secret.

With regard to the secret, it is recommended to:

* rotate it at regular time intervals, below “rs” is used to indicate the number of days of rotation of the secret;
* ensure an appropriate level of its entropy, below “be” is used to indicate the number of characters of the secret (employed as a set of characters [A-Za-z0-9]).

The recommendation for the producer is provided below in consideration of the type of data used for the e-services.

| type of data| algorithm version| seed rotation dd| seed dimension|
|----------|----------|----------|----------|
| Data used for the indirect identification of the physical person| No specific recommendation| | |
| Data used for the direct identification of the physical person| No specific recommendation| <= 120 dd| \>= 16 characters|
| Sensitive data of the physical person (racial or ethnic origin, religious, philosophical beliefs, political opinions, trade union membership, regarding health or sex life)| <ul><li>SHA-384</li><li>SHA-512</li><li>SHA3-384</li><li>SHA3-512</li><li>SHAKE128</li><li>SHAKE256</li></ul>| <= 80 dd| \>= 32 characters|
| Legal data of the physical person (existence of certain legal measures subject to entry in the criminal record)| <ul><li>SHA-512</li><li>SHA3-512</li><li>SHAKE128</li><li>SHAKE256</li></ul>| <= 60 dd| \>= 64 characters|
| Other data of the physical person (concerning electronic communications and that permit geolocalization)| No specific recommendation| <= 120 dd| \>= 16 characters|

### Implementation of the sharing of cryptographic information

The producer informs the consumer of their selection of the pseudonymization algorithm and the parameters for its execution through the presentation of a specific operation on the provided e-service.

The producer must make it possible for the consumer to calculate the same _digest_ by applying the _hash function_ on the concatenation of the _input string_ and _seed_.

The order in which the _input_ and _seed_ should be concatenated should be communicated (in the documentation). 

The producer exposes an endpoint of this type (they provide an illustrative, non-reference operation for the implementation) for sharing the cryptographic information:

``` /pseudonymization: get: summary: Gets a pseudonymization info description: Info about crypto hash function and seed responses: "200": description: Success content: application/json: schema: type: object properties: seed: example: 3b9942ce-1f07-4512-8f34-f31b1a7b0061 type: string cryptoHashFunction: example: sha256 type: string required: \- seed \- cryptoHashFunction description: Success ```