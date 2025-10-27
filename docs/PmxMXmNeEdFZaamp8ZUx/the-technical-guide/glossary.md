# Glossary

For more details and clarifications, refer to the chapter “Definitions” of [LG PDND 4].

**Signal Hub**  
A set of PDND platform services that implements annex 4: “Variation signal distribution process” of [LG PDND]. It has two services: signal deposit and recovery.

**Variation signal**  
An event by means of which a member communicates to the PDND interoperability platform that known statuses and/or facts have changed in the data domain/information of which they are the owner.

**Producer**  
Member who communicates to consumers, via the PDND interoperability platform, the variation signals in order to make known the variations in known statuses and facts within the data domain/information of which they are the owner.

**Consumer**  
Member who recovers variation signals from the PDND interoperability platform in order to be aware of the changes in statuses and facts that pertain to and are of interest to them.

**Signal Deposit**  
Service with which a producer can forward messages with which they signal changes in their domain and that are related to e-services already published in the catalog.

**Signal Recovery**  
Service with which a signal consumer can recover signals related to changes in status or facts that took place within the domain of knowledge of the producer.

**Hashing function**  
A cryptographic hashing function (briefly, hashing) has the following properties:

* it must ensure the univocity of the input/output association, that is, it is not possible for two different inputs, even if similar, to have the same hash value
* must be deterministic, that is the same input must always produce the same hash
* must be almost possible to generate an input from its hash value except by trying all the possible inputs.

**Hash function with seed**  
A hash function with seed is a type of hash function that requires an additional input value called “seed”, used as a parameter. The addition of the seed makes the hash process more secure as it makes it more difficult for a potential attacker to anticipate or find a pattern in the hashing results, improving the resistance to attempted attacks.

**Pseudonymized identifier**  
A pseudonymized identifier is a value obtained by applying a hashing function to an original identifier, therefore making the direct association with the corresponding physical person difficult without the use of additional information.

<mark style="background-color:blue;">**Pseudonymization**</mark>

The personal data is processed such that personal data cannot be attributed to a specific data subject without using additional information, providing that this additional information is stored separately and subject to technical and organizational measures able to guarantee that this personal data is not attributed to an identified or identifiable physical person _(Art. 4 of regulation EU 2016 679_)