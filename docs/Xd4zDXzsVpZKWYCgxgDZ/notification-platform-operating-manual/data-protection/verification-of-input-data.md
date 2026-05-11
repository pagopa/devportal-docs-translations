# Verification of the input data

NP guarantees the correct attribution of electronic documents to the notification through the use of hash SHA-256. When the sending PA requests to send a notification, they provide NP also the SHA-256 of the document. NP calculates the SHA-256 of the received document and compares with what the PA provided. The notification is accepted only if the two hashes coincide.

Furthermore, NP verifies the existence of the fiscal codes provided by the sending PA and the availability of a physical address to guarantee the possibility to send the notification.