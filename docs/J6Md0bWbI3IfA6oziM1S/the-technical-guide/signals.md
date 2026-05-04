# Signals

## Types of signals

Communications between the producer and consumer in the form of signals belong to the following categories:

* signals related to the life cycle of an entity: the variation and/or reaching of a final status of an entity. The event of creating an entity can be managed using the inverse provision function of PDND
* signals that facilitate communication between the producer and consumer: this category includes the communications that allow the producer to align the consumer with the **pseudonymization methods** (hash function and seed)

The type is coded in the `signalType` attribute of the `SignalPayload` object (the signal sent by the producer). For the implementation details, see section “[How to deposit a signal](../tutorial/how-to-deposit-a-signal.md)".