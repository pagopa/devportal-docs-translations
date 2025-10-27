# Event journal

The function of the Event Journal is to permit the traceability of every payment operation activated on the pagoPA platform.

The payment operation takes place by means of the application cooperation between different systems of the ECs, the pagoPA platform and the PSPs, to reconstruct the total process it is necessary for all of the systems involved in the telematic payment to have specific functions for recording the main steps of the processing of the payment operation.

If a check is requested, the recorded traces of the individual systems must be extracted and compared with the analog information produced by all the collaboration systems involved in the concerned operations. 

For the purposes of comparison, two areas of payment operation identification have been identified: 

* identification of the telematic payment, based on key fields that make the payment reference unique;
* identification of the exchange of interface messages based on parameters of the messages that connect these messages with the specific payment in an unequivocal manner. 

The operations entered in the Event Journal must be kept for at least _24 months_.

The following table indicates the information and specifications for representing the data that all entities are required to provide for the above indicated checks.

| Value| Content|
|----------|----------|
| dataOraEvento| <p>Indicates the date and time of the event according to ISO 8601 format, with a millisecond resolution and always in reference to GMT.<br>Format [YYYY]-[MM]-[DD]T[hh]:[mm]:\[ss.sss]</p>|
| identificativoDominio| Alphanumeric field containing the fiscal code of the EC|
| identificativoUnivocoVersamento| Univocal reference assigned to the payment by the EC.|
| codiceContestoPagamento| Univocal code required for defining the context in which the payment is made.|
| numeroAvviso| Number of the notice issued by the EC.|
| identificativoPrestatoreServiziPagamento| PSP identifier univocal in the domain selected by the end user and/or by the EC.|
| tipoVersamento| Technical form of payment present in the message that originated the event.|
| component| System or subsystem that generated the event (e.g. FESP, WFESP).|
| categoriaEvento| INTERNAL/INTERFACE, indicates if the traced event is related to an interface operation with other systems or if it represents an internal operation (e.g. change of state) in the own system.|
| tipoEvento| Identifier of the event type. In the case of SOAP interactions, it is the name of the SOAP method.|
| sottoTipoEvento| In the case of synchronous SOAP interactions, it takes on the REQ/RESP values to indicate respectively SOAP Request and SOAP Response.|
| identificativoFruitore| <p>In the case of INTERFACE type events, the identifier must be used for the system of the requesting entity within the scope of the domain<br>(E.g. NodoDeiPagamentiSPC in the case of paGetPayment).<br>In the case of INTERNAL type events, it is possible to use a name of a component or subcomponent that generates the event.</p>|
| identificativoErogatore| <p>In the case of INTERFACE type events, it is necessary to use the identifier of the responding entity within the domain<br>(E.g. identificativoStazioneIntermediarioPA in the case of paGetPayment).<br>In the case of INTERNAL type events, it is possible to use a name of a component or subcomponent that processes the event. For the latter type, the value can coincide with the identificativoFruitore, if there is not a component that responds to the event itself.</p>|
| identificativoStazioneIntermediarioPA| Identifier of the intermediate station of the EC in the pagoPA platform system on which payments and receipts have transited.|
| canalePagamento| Identifier of the PSP channel in the pagoPA platform system on which payments and receipts have transited.|
| parametriSpecificiInterfaccia| Specific parameters used in the interface by the PSP or EC.|
| outcome| <p>Optional field based on the state of the operation at the moment the event is registered.<br>Mandatory in the case of SOAP requests.</p>|

