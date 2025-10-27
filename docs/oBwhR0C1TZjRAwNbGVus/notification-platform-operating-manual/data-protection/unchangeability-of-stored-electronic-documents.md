# Unchangeability of the stored electronic documents

The electronic documents produced by the PA are stored temporarily in a bucket S3 with legal hold and retention of 7 days. Legal hold makes the documents unchangeable by PagoPA until expiration of the retention, when the documents will be deleted automatically by the system. The documents are subjected to versioning.

When the PA requests the creation of a notification, once the IUN is established, the documents associated by the PA to the notification via the list SHA-256, are associated logically with the notification that was just created. For documents, retention is updated to 120 days. Upon date of completion of the notification, the retention will be updated again to 120 days after that date.

The SHA-256 of the documents are stored in the notification record and in the certificate enforceable against third parties of completion for the sender. The record of notification also contains the exact version of each document.

The certificates enforceable against third parties are created, digitally signed, time stamped and stored. The legal hold and retention is set to 10 years. The version of the document is stored in the timeline record corresponding to the event that generated it. Within one year of creation of the document, it is sent for regulatory storage.

The documents related to the analog and digital notification supplied by the postal operator are stored by NP. The legal hold and retention is set to 10 years. The version of the document is stored in the timeline record corresponding to the event that generated it. Within one year of creation of the document, it is sent for regulatory storage.