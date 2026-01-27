# Ensuring response integrity

It is possible for producers to offer subscribers an additional level of security by ensuring the integrity of the response they receive.

In essence, producers sign their own response with a private key. The corresponding public key is uploaded to PDND for verification purposes.

The public key is uploaded by the producer within a keychain (available under _**Producing > My e-services**_, then select an e-service and go to the _**Keychains**_ tab). Subscribers can verify the signature by retrieving the public key via the PDND API.

For all operations related to keychain management, see the [dedicated section](../client-e-materiale-crittografico/).

## Preconditions

* The producer must have created a keychain;
* The keychain must be associated with the appropriate e-service via the _Keychains_ tab;
* A security operator or administrator must have uploaded at least one public key into that keychain.

Once these conditions are met, the producer can sign their response with their private key, and the subscriber can verify the corresponding public key stored in PDND.

## Security and reference standards

The same standards that apply to voucher-related flows are used here. For more information on the applicable RFCs, consult the [dedicated section](ensuring-response-integrity.md#sicurezza-e-standard-di-riferimento).

## Example

The ModI gives producers discretion over the response signing and subscriber verification procedure.

For this reason, PDND does not impose any specific rules, except for the use of RSA asymmetric keys in compliance with already adopted security standards.

In the dedicated tutorials for [producer](../../tutorials/producer/voucher/how-to-sign-a-response-for-a-subscriber.md) and [consumer](../../tutorials/consumer/voucher/how-to-verify-a-response-signed-by-a-producer.md), a sample implementation of the response payload signing mechanism is provided.
