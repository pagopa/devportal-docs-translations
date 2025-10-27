# The notification process

The notification process starts with the sending PA who requests the Notification Platform (NP) to accept the issuing of a notification.

This operation takes place in three phases: uploading the documents, creating the notification, checking the provided data.

During the first phase, the PA provides the NP with the documents to be notified together, if applicable, with what is necessary for payment by the recipient. It is mandatory to provide the pagoPA notice. If payment is available using the F24 form, the PA provides all the data necessary for compiling that form.

During the second phase, the PA generates the request to create the notification, providing the data of the recipient (fiscal code, indication if a physical or legal person, first and last name or company name, physical address of the domicile known to the PA, special digital domicile, notice code and fiscal code of the creditor related to the pagoPA notice), a protocol number, method to use for sending with an analog method (890/registered letter), amount and due date of the payment (if present), the list of documents part of the notification (using the identifiers provided by NP during the previous phase) and the hash SHA-256 of the documents. Once NP receives this information, it checks that it is syntactically correct and that no use was made of number combinations of protocol/ID of the PA/idempotence token or Notice Code/fiscal code of the creditor that were already used in other non-canceled notifications. If the checks are successful, it returns a token to the sender that will be useful to the PA to receive the result of the subsequent verification activity performed by NP.

During the third and last phase, NP checks that the SHA-256 supplied by the PA coincides with the one calculated by NP, based on the attached documents, that each fiscal code provided actually exists and that there is a known physical address for each recipient (the latter verifies to guarantee the possibility of notification to the recipient). If the verifications are successful, NP generates the IUN that is returned to the sending PA together with the token generated upon creation of the notification. This completes the notification for the sending PA. The completion date is the date of creation of the notification itself, corresponding to the start of the second phase of the process. If, instead, the verifications were not successful, NP informs the PA of the presence of errors in the forwarded request by sending an error code together with the token generated upon creation of the notification.

The attached documents must be in PDF format and compliant with what is required by articles 20 and 21 of the CAD (Digital Administration Code), therefore signed digitally by the sending PA. The documents produced by the PA are stored for 120 days starting from the date of completion of the notification for the recipient. NP generates a certificate enforceable against third parties related to the date and time of receipt of the request to create the notification from the sender and the addresses provided by the sender to reach the recipient. The provision of this document is notified to the PA to confirm the start of the notification operations.

If the sending PA is not able to determine if the fiscal code belongs to a physical person or a legal person, we recommend that they assume that the fiscal code belongs to a physical person.

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

Once a notification has been created correctly by the PA, NP generates the notice of completed reception (NCR ) that contains the information regarding the existence of the notification, its IUN and the information regarding the methods the recipient can uses to access the notified documents. At this point, NP checks if it is possible to issue the notification using digital channels. This is possible if the sending PA provided a digital domicile (special), or if the PN archives contain a digital domicile (platform) connected to the recipient or, finally, if it is possible to find a digital domicile (general) in public registers (IniPEC or INAD). If the public registers return more than one digital domicile for the recipient, as a physical or legal person as indicated by the sending PA, NP will use only the first address returned.

If it is not possible to determine a digital domicile, the notification will be sent using analog channels.

In both cases, if the recipient configured a digital address (e.g. a cell phone number to which an SMS can be sent or an e-mail address or they enabled NP courtesy notices on the IO app), a courtesy notice is generated, which does not have legal value, but permits the recipient to access the document also before receiving the notification through legally valid communication channels.

The courtesy notice is sent to all available addresses.

If it was possible to send the courtesy notice to a citizen to be reached with an analog notification, the notification will be delayed by 7 days to give the citizen the possibility to access the notification on NP and complete it as a result. In this case, the paper NCR will not be sent and the citizen saves costs.

Once the recipient has received the NCR, they can access the Notification Platform to view the notified documents and the relative certificates enforceable against third parties as follows:

* directly accessing the NP portal, using their digital identity, and then selecting the notification based on the respective IUN and then accessing the notified documents, with each having a link provided by the portal. By accessing the timeline of the notification, the recipient can also access the relative certificates enforceable against third parties;
* through the IO app, if the receipt of NP courtesy notices has been enabled. Selecting the message accesses the details of the notification that makes it possible to access the documents and, via the timeline, the relative certificates enforceable against third parties;
* using the quick access link present in the NCR, by accessing the timeline of the notification, the recipient can also access the relative certificates enforceable against third parties;
* through a person delegated by the recipient, after completing the delegation activity via the special function on the NP portal;
* using the methods described to access NP via the services provided by post offices.

In any case, if the recipient or their delegate access the notification using the methods previously described prior to what is specified by the methods described in the sections related to the digital and analog notification, the notification is completed by acknowledgment also in advance. NP generates a certificate enforceable against third parties that indicates the date and time of notification acknowledgment.