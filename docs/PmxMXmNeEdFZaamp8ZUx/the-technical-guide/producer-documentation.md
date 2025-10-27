# Producer documentation

The provider, as the signal producer, must prepare documentation that describes the domain of the data variations and the specific methods processing the data contained in the signals. This information integrates the e-service documentation and is provided to the members together with the documentation for the e-service enabled to use the Signal Hub.

In particular, it is suggested to describe the following:  

how to implement the cryptographic information (see section [How to present cryptographic information](../tutorial/how-to-present-the-cryptographic-information-pseudonymization.md))

how to manage the information contained in the signal (see section [How to deposit a signal](../tutorial/how-to-deposit-a-signal.md))

* the signal identifier, necessary for determining the reading order (`signalId` attribute)
* the type of signal (`signalType`)
* the object identifier (`objectId`)
* the type of object (`objectType`)