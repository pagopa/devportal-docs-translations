# Primitive

To manage the errors, refer to [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").

{% hint style="info" %}
Fields marked with﹡are mandatory
{% endhint %}

For details see [https://github.com/pagopa/pagopa-api/tree/SANP3.7.1](https://github.com/pagopa/pagopa-api/tree/SANP3.7.1)

## paVerifyPaymentNotice <a href="#pagetpayment" id="pagetpayment"></a>

## paVerifyPaymentNotice

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                           | Type   | Description                                                          |
| ---------------------------------------------- | ------ | -------------------------------------------------------------------- |
| idPA<mark style="color:red;">\*</mark>         | String | fiscal code of the structure that sends the payment request          |
| idBrokerPA<mark style="color:red;">\*</mark>   | String | identifier of the entity that operates as an intermediary for the EC |
| idStation<mark style="color:red;">\*</mark>    | String | Identifier of the EC's station in the pagoPa system                  |
| qrCode<mark style="color:red;">\*</mark>       | String | it is composed of the _fiscalCode_ and _noticeNumber_                |
| fiscalCode<mark style="color:red;">\*</mark>   | String | fiscal code of the EC                                                |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]              |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Header />
    <soapenv:Body>
      <nod:paVerifyPaymentNoticeReq>
        <idPA>77777777777</idPA>
        <idBrokerPA>77777777777</idBrokerPA>
        <idStation>77777777777_01</idStation>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
      </nod:paVerifyPaymentNoticeReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Header />
  <soapenv:Body>
    <paf:paVerifyPaymentNoticeRes>
      <outcome>OK</outcome>
      <paymentList>
        <paymentOptionDescription>
          <amount>30.00</amount>
          <options>EQ</options>
          <dueDate>2021-12-31</dueDate>
          <detailDescription>test</detailDescription>
          <allCCP>false</allCCP>
        </paymentOptionDescription>
      </paymentList>
      <paymentDescription>payment</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
    </paf:paVerifyPaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, to be mandatorily entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* paymentList: structure that contains details of the payment, at the moment it can contain only one _paymentOptionDescription_, to be mandatorily inserted in the case of an OK _outcome_
  * paymentOptionDescription﹡
    * amount﹡: amount in euros
    * options﹡: at the moment it must be set to _EQ_
    * dueDate: payment due date according to the format ISO 8601 \[YYYY]-\[MM]-\[DD]
    * detailDescription: free text for describing the subject of the payment
    * allCCP﹡: if TRUE this indicates that all bank transfers are associated with postal IBANs
* paymentDescription: free text for describing the subject of the payment, to be entered mandatorily in case of an OK _outcome_
* fiscalCodePA: fiscal code of the EC, to be entered mandatorily in the case of an OK _outcome_
* companyName: complete name of the EC, to be entered mandatorily in the case of an OK _outcome_
* officeName: complete name of the office of the EC
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## paGetPayment <a href="#pagetpayment" id="pagetpayment"></a>

## paGetPayment version 1

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                |
| ---------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA<mark style="color:red;">\*</mark>         | String | Fiscal code of the structure that sends the payment request                                                                                                |
| dueDate                                        | String | Payment due date according to the format ISO 8601 \[YYYY]-\[MM]-\[DD]                                                                                      |
| transferType                                   | String | Permitted value: POSTAL.                                                                                                                                   |
| paymentNote                                    | String | Payment description. Set with _idCart_, if the parameter is set in [payment-at-the-ecs-frontend.md](../use-cases/payment-at-the-ecs-frontend.md "mention") |
| amount                                         | String | Payment amount in euros.                                                                                                                                   |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                    |
| fiscalCode<mark style="color:red;">\*</mark>   | String | Fiscal code of the EC                                                                                                                                      |
| qrCode<mark style="color:red;">\*</mark>       | String | It is composed of the _fiscalCode_ and _noticeNumber_                                                                                                      |
| idStation<mark style="color:red;">\*</mark>    | String | Identifier of the EC's station in the pagoPa system                                                                                                        |
| idBrokerPA<mark style="color:red;">\*</mark>   | String | Identifier of the entity that operates as an intermediary for the EC                                                                                       |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
      <pafn:paGetPaymentReq>
        <idPA>77777777777</idPA>
        <idBrokerPA>77777777777</idBrokerPA>
        <idStation>77777777777_01</idStation>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
        <amount>30.00</amount>
      </pafn:paGetPaymentReq>
    </soapenv:Body>
  </soapenv:Envelope>    
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Header />
  <soapenv:Body>
    <paf:paGetPaymentRes>
      <outcome>OK</outcome>
      <data>
        <creditorReferenceId>11111111112222222</creditorReferenceId>
        <paymentAmount>30.00</paymentAmount>
        <dueDate>2021-12-31</dueDate>
        <retentionDate>2021-12-31T23:59:59</retentionDate>
        <lastPayment>0</lastPayment>
        <description>test</description>
        <companyName>company EC</companyName>
        <officeName>office EC</officeName>
        <debtor>
          <uniqueIdentifier>
            <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
            <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
          </uniqueIdentifier>
          <fullName>John Doe</fullName>
          <streetName>street</streetName>
          <civicNumber>12</civicNumber>
          <postalCode>89020</postalCode>
          <city>city</city>
          <stateProvinceRegion>MI</stateProvinceRegion>
          <country>IT</country>
          <e-mail>john.doe@test.it</e-mail>
        </debtor>
        <transferList>
          <transfer>
            <idTransfer>1</idTransfer>
            <transferAmount>20.00</transferAmount>
            <fiscalCodePA>77777777777</fiscalCodePA>
            <IBAN>IT0000000000000000000000000</IBAN>
            <remittanceInformation>remittanceInformation1</remittanceInformation>
            <transferCategory>0101100IM</transferCategory>
          </transfer>
          <transfer>
            <idTransfer>2</idTransfer>
            <transferAmount>10.00</transferAmount>
            <fiscalCodePA>77777777778</fiscalCodePA>
            <IBAN>IT0000000000000000000000001</IBAN>
            <remittanceInformation>remittanceInformation2</remittanceInformation>
            <transferCategory>0201102IM</transferCategory>
          </transfer>
        </transferList>
        <metadata>
          <mapEntry>
            <key>keytest</key>
            <value>1</value>
          </mapEntry>
        </metadata>
      </data>
    </paf:paGetPaymentRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, to be mandatorily entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* data: fall the details of the payment, to be entered mandatorily in case of an OK\_outcome\_
  * _creditorReferenceId_﹡: **IUV**: Univocal Payment Identifier;
  * _paymentAmount_﹡: amount, must be equal to the sums of the _TransferAmounts_ present in the _TransferList_
  * _dueDate_﹡: payment due date according to the format ISO 8601 \[YYYY]-\[MM]-\[DD]
  * retentionDate: timestamp that indicates the end of the retention period for the payment information by the Node
  * lastPayment
  * description: free text for describing the subject of the payment
  * companyName: complete name of the EC
  * officeName: complete name of the office of the EC
  * debtor﹡: identifies the debtor to which the debt position refers
    * uniqueIdentifier﹡
      * entityUniqueIdentifierType﹡
        * **F** : Physical person
        * **G** : Legal person
      * entityUniqueIdentifierValue﹡: fiscal code or VAT no., if they are not available ‘ANONYMOUS’ can be used
    * fullName: complete name of the debtor
    * streetName: address
    * civicNumber: civic number
    * postalCode: ZIP CODE
    * city: city
    * stateProvinceRegion: region
    * country: country
    * e-mail
  * transferList﹡: structure that contains the details of the _transfers_, currently up to 5 _transfers_ can be entered, there must be at least _1_
    * transfer﹡
      * idTransfer﹡: index of the list (from 1 to 5)
      * transferAmount﹡: amount
      * fiscalCode: fiscal code of the EC
      * IBAN﹡: IBAN to which the transfer will be made
      * remittanceInformation﹡: reason for the payment
      * transferCategory﹡: taxonomic code, composed of _Creditor type code + Progressive macro area + Service type code + Legal reason_ ( ex. **0101002IM** )
  * metadata: if is a key archiving field/value used exclusively by the EC. The data will be entered in the _receipt_ (_paSendRT_)
    * mapEntry﹡
      * key﹡
      * value﹡
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## paGetPayment version 2

<mark style="color:green;">`POST`</mark>

**In this version, it is possible to enter the metadata in every single** _**transfer**_, **it is also possible to manage the service @e.bollo.**

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                |
| ---------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA<mark style="color:red;">\*</mark>         | String | Fiscal code of the structure that sends the payment request                                                                                                |
| idBrokerPA<mark style="color:red;">\*</mark>   | String | Identifier of the entity that operates as an intermediary for the EC                                                                                       |
| idStation<mark style="color:red;">\*</mark>    | String | Identifier of the EC's station in the pagoPa system                                                                                                        |
| qrCode<mark style="color:red;">\*</mark>       | String | It is composed of the _fiscalCode_ and _noticeNumber_                                                                                                      |
| amount<mark style="color:red;">\*</mark>       | String | Payment amount in euros                                                                                                                                    |
| paymentNote                                    | String | Payment description. Set with _idCart_, if the parameter is set in [payment-at-the-ecs-frontend.md](../use-cases/payment-at-the-ecs-frontend.md "mention") |
| transferType                                   | String | <p>Permitted values</p><p>POSTAL</p><p>PAGOPA</p>                                                                                                          |
| dueDate                                        | String | payment due date according to the format ISO 8601 \[YYYY]-\[MM]-\[DD]                                                                                      |
| fiscalCode<mark style="color:red;">\*</mark>   | String | fiscal code of the EC                                                                                                                                      |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                    |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
      <pafn:paGetPaymentReq>
        <idPA>77777777777</idPA>
        <idBrokerPA>77777777777</idBrokerPA>
        <idStation>77777777777_01</idStation>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
        <amount>30.00</amount>
      </pafn:paGetPaymentReq>
    </soapenv:Body>
  </soapenv:Envelope>         
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Header />
  <soapenv:Body>
    <paf:paGetPaymentRes>
      <outcome>OK</outcome>
      <data>
        <creditorReferenceId>11111111112222222</creditorReferenceId>
        <paymentAmount>30.00</paymentAmount>
        <dueDate>2021-12-31</dueDate>
        <retentionDate>2021-12-31T23:59:59</retentionDate>
        <lastPayment>0</lastPayment>
        <description>test</description>
        <companyName>company EC</companyName>
        <officeName>office EC</officeName>
        <debtor>
          <uniqueIdentifier>
            <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
            <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
          </uniqueIdentifier>
          <fullName>John Doe</fullName>
          <streetName>street</streetName>
          <civicNumber>12</civicNumber>
          <postalCode>89020</postalCode>
          <city>city</city>
          <stateProvinceRegion>MI</stateProvinceRegion>
          <country>IT</country>
          <e-mail>john.doe@test.it</e-mail>
        </debtor>
        <transferList>
          <transfer>
            <idTransfer>1</idTransfer>
            <transferAmount>20.00</transferAmount>
            <fiscalCodePA>77777777777</fiscalCodePA>
            <companyName>company EC</companyName>
            <IBAN>IT0000000000000000000000000</IBAN>
            <remittanceInformation>remittanceInformation1</remittanceInformation>
            <transferCategory>0101100IM</transferCategory>
            <metadata>
              <mapEntry>
                <key>keytest</key>
                <value>1</value>
              </mapEntry>
            </metadata>
          </transfer>
          <transfer>
            <idTransfer>2</idTransfer>
            <transferAmount>10.00</transferAmount>
            <fiscalCodePA>77777777778</fiscalCodePA>
            <companyName>company EC</companyName>
            <IBAN>IT0000000000000000000000001</IBAN>
            <remittanceInformation>remittanceInformation2</remittanceInformation>
            <transferCategory>0201102IM</transferCategory>
          </transfer>
        </transferList>
        <metadata>
          <mapEntry>
            <key>keytest</key>
            <value>1</value>
          </mapEntry>
        </metadata>
      </data>
    </paf:paGetPaymentRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, to be mandatorily entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* data: fall the details of the payment, to be entered mandatorily in case of an OK\_outcome\_
  * _creditorReferenceId_﹡: **IUV**: Univocal Payment Identifier;
  * _paymentAmount_﹡: amount, must be equal to the sums of the _TransferAmounts_ present in the _TransferList_
  * _dueDate_﹡: indicates the payment due date according to the format ISO 8601 \[YYYY]-\[MM]-\[DD]
  * retentionDate: timestamp that indicates the end of the retention period for the payment information by the Node
  * lastPayment
  * description: free text for describing the subject of the payment
  * companyName﹡: complete name of the EC
  * officeName: complete name of the office of the EC
  * debtor﹡: identifies the debtor to which the debt position refers
    * uniqueIdentifier﹡
      * entityUniqueIdentifierType﹡
        * **F** : Physical person
        * **G** : Legal person
      * entityUniqueIdentifierValue﹡: fiscal code or VAT no., if they are not available ‘ANONYMOUS’ can be used
    * fullName: complete name of the debtor
    * streetName: address
    * civicNumber: civic number
    * postalCode: ZIP CODE
    * city: city
    * stateProvinceRegion: region
    * country: country
    * e-mail
  * transferList﹡: structure that contains the details of the _transfers_, currently up to 5 _transfers_ can be entered, there must be at least 1
    * transfer﹡
      * idTransfer﹡: index of the list (from 1 to 5)
      * transferAmount﹡: amount in euros
      * fiscalCode: fiscal code of the EC
      * companyName﹡: complete name of the EC
      * **CHOICE**\*
        * IBAN: IBAN to which the transfer will be made
        * richiestaMarcaDaBollo: data for the stamp duty request
          * _tipoBollo_: type of stamp duty
          * _hashDocumento_: contains the digest, in base64 format, of the electronic document or the protocol signature with which the digital stamp duty is associated;
          * _provinciaResidenza_: automotive abbreviation of the province of residency of the paying entity
      * remittanceInformation﹡: reason for the payment
      * transferCategory﹡: taxonomic code, composed of _Creditor type code + Progressive macro area + Service type code + Legal reason_ ( ex. **0101002IM** )
      * metadata: if is a key archiving field/value. The data will be entered in the _receipt_ (_paSendRT_)
        * mapEntry﹡
          * key﹡
          * value﹡
  * metadata: if is a key archiving field/value. The data will be entered in the _receipt_ (_paSendRT_)
    * mapEntry﹡
      * key﹡
      * value﹡
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## paSendRT <a href="#pasendrt" id="pasendrt"></a>

## paSendRT version 1

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                          | Type    | Description                                                                                                                        |
| ------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| idPA<mark style="color:red;">\*</mark>                        | String  | fiscal code of the structure that sends the payment request                                                                        |
| receiptId<mark style="color:red;">\*</mark>                   | String  | Unique identifier of the _receipt_ containing the _paymentToken_ assigned by pagoPa                                                |
| outcome<mark style="color:red;">\*</mark>                     | String  | the result of the operation that can contain the codes OK or KO                                                                    |
| receipt<mark style="color:red;">\*</mark>                     | String  | the payment receipt                                                                                                                |
| idStation<mark style="color:red;">\*</mark>                   | String  | Identifier of the EC's station in the pagoPa system                                                                                |
| idBrokerPA<mark style="color:red;">\*</mark>                  | String  | identifier of the entity that operates as an intermediary for the EC                                                               |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String  | <p><strong>F</strong> : Physical person</p><p><strong>G</strong> : Legal person</p>                                                |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String  |                                                                                                                                    |
| debtor<mark style="color:red;">\*</mark>                      | String  | identifies the debtor to which the debt position refers                                                                            |
| officeName                                                    | String  |                                                                                                                                    |
| companyName<mark style="color:red;">\*</mark>                 | String  | complete name of the EC                                                                                                            |
| description<mark style="color:red;">\*</mark>                 | String  |                                                                                                                                    |
| paymentAmount<mark style="color:red;">\*</mark>               | String  | amount expressed in euros                                                                                                          |
| creditorReferenceId<mark style="color:red;">\*</mark>         | String  | **IUV**: _Univocal Payment Identifier_                                                                                             |
| fiscalCode<mark style="color:red;">\*</mark>                  | String  | fiscal code of the EC                                                                                                              |
| noticeNumber<mark style="color:red;">\*</mark>                | String  | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                            |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String  | fiscal code or VAT no.                                                                                                             |
| e-mail                                                        | String  |                                                                                                                                    |
| country                                                       | String  |                                                                                                                                    |
| stateProvinceRegion                                           | String  |                                                                                                                                    |
| city                                                          | String  |                                                                                                                                    |
| postalCode                                                    | String  |                                                                                                                                    |
| civicNumber                                                   | String  |                                                                                                                                    |
| streetName                                                    | String  |                                                                                                                                    |
| fullName<mark style="color:red;">\*</mark>                    | String  | complete name of the debtor                                                                                                        |
| transferCategory<mark style="color:red;">\*</mark>            | String  | taxonomic code, composed of _Creditor type code + Progressive macro area + Service type code + Legal reason_ ( ex. **0101002IM** ) |
| remittanceInformation<mark style="color:red;">\*</mark>       | String  | reason for the payment                                                                                                             |
| IBAN<mark style="color:red;">\*</mark>                        | String  | IBAN to which the transfer will be made                                                                                            |
| fiscalCodePA<mark style="color:red;">\*</mark>                | String  | fiscal code of the EC                                                                                                              |
| transferAmount<mark style="color:red;">\*</mark>              | String  | amount                                                                                                                             |
| idTransfer<mark style="color:red;">\*</mark>                  | String  | index of the list (from 1 to 5)                                                                                                    |
| transfer<mark style="color:red;">\*</mark>                    | String  |                                                                                                                                    |
| transferList<mark style="color:red;">\*</mark>                | String  | structure that contains the details of the _transfers_                                                                             |
| channelDescription<mark style="color:red;">\*</mark>          | String  |                                                                                                                                    |
| idChannel<mark style="color:red;">\*</mark>                   | String  |                                                                                                                                    |
| PSPCompanyName<mark style="color:red;">\*</mark>              | String  |                                                                                                                                    |
| pspPartitaIVA                                                 | String  |                                                                                                                                    |
| pspFiscalCode                                                 | String  |                                                                                                                                    |
| idPSP<mark style="color:red;">\*</mark>                       | String  | PSP identifier                                                                                                                     |
| key<mark style="color:red;">\*</mark>                         | String  |                                                                                                                                    |
| mapEntry<mark style="color:red;">\*</mark>                    |         |                                                                                                                                    |
| metadata                                                      | String  |                                                                                                                                    |
| transferDate                                                  | String  | transfer date                                                                                                                      |
| applicationDate                                               | String  | application date                                                                                                                   |
| paymentDateTime                                               | String  | date and time of the payment                                                                                                       |
| fee                                                           | String  | amount of the commission expressed in euros                                                                                        |
| paymentMethod                                                 | String  |                                                                                                                                    |
| e-mail                                                        | String  |                                                                                                                                    |
| country                                                       | String  |                                                                                                                                    |
| stateProvinceRegion                                           | String  |                                                                                                                                    |
| city                                                          | String  |                                                                                                                                    |
| postalCode                                                    | String  |                                                                                                                                    |
| civicNumber                                                   | String  |                                                                                                                                    |
| streetName                                                    | String  |                                                                                                                                    |
| fullName<mark style="color:red;">\*</mark>                    | String  | complete name of the debtor                                                                                                        |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String  | fiscal code or VAT no.                                                                                                             |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String  | <p><strong>F</strong> : Physical person</p><p><strong>G</strong> : Legal person</p>                                                |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String  |                                                                                                                                    |
| payer                                                         | String  | identifies the payer                                                                                                               |
| value<mark style="color:red;">\*</mark>                       | String  |                                                                                                                                    |
| standin                                                       | Boolean | true: payment took place in Stand in                                                                                               |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <pafn:paSendRTReq>
        <idPA>77777777777</idPA>
        <idBrokerPA>77777777777</idBrokerPA>
        <idStation>77777777777_01</idStation>
        <receipt>
          <receiptId>c110729d258c4ab1b765fe902aae41d6</receiptId>
          <noticeNumber>311111111112222222</noticeNumber>
          <fiscalCode>77777777777</fiscalCode>
          <outcome>OK</outcome>
          <creditorReferenceId>11111111112222222</creditorReferenceId>
          <paymentAmount>30.00</paymentAmount>
          <description>test</description>
          <companyName>company EC</companyName>
          <officeName>office EC</officeName>
          <debtor>
            <uniqueIdentifier>
              <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
              <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
            </uniqueIdentifier>
            <fullName>John Doe</fullName>
            <streetName>street</streetName>
            <civicNumber>12</civicNumber>
            <postalCode>89020</postalCode>
            <city>city</city>
            <stateProvinceRegion>MI</stateProvinceRegion>
            <country>IT</country>
            <e-mail>john.doe@test.it</e-mail>
          </debtor>
          <transferList>
            <transfer>
              <idTransfer>1</idTransfer>
              <transferAmount>20.00</transferAmount>
              <fiscalCodePA>77777777777</fiscalCodePA>
              <IBAN>IT0000000000000000000000000</IBAN>
              <remittanceInformation>remittanceInformation1</remittanceInformation>
              <transferCategory>0101100IM</transferCategory>
            </transfer>
            <transfer>
              <idTransfer>2</idTransfer>
              <transferAmount>10.00</transferAmount>
              <fiscalCodePA>77777777778</fiscalCodePA>
              <IBAN>IT0000000000000000000000001</IBAN>
              <remittanceInformation>remittanceInformation2</remittanceInformation>
              <transferCategory>0201102IM</transferCategory>
            </transfer>
          </transferList>
          <idPSP>88888888888</idPSP>
          <pspFiscalCode>88888888888</pspFiscalCode>
          <pspPartitaIVA>88888888888</pspPartitaIVA>
          <PSPCompanyName>PSP name</PSPCompanyName>
          <idChannel>88888888888_01</idChannel>
          <channelDescription>app</channelDescription>
          <payer>
            <uniqueIdentifier>
              <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
              <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
            </uniqueIdentifier>
            <fullName>John Doe</fullName>
            <streetName>street</streetName>
            <civicNumber>12</civicNumber>
            <postalCode>89020</postalCode>
            <city>city</city>
            <stateProvinceRegion>MI</stateProvinceRegion>
            <country>IT</country>
            <e-mail>john.doe@test.it</e-mail>
          </payer>
          <paymentMethod>creditCard</paymentMethod>
          <fee>2.00</fee>
          <paymentDateTime>2021-10-01T17:48:22</paymentDateTime>
          <applicationDate>2021-10-01</applicationDate>
          <transferDate>2021-10-02</transferDate>
          <metadata>
            <mapEntry>
              <key>keytest</key>
              <value>1</value>
            </mapEntry>
          </metadata>
          <standin>false</standin>
        </receipt>
      </pafn:paSendRTReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <paf:paSendRTRes>
      <outcome>OK</outcome>
    </paf:paSendRTRes>
  </soapenv:Body>
</soapenv:Envelope
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, to be mandatorily entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## paSendRT version 2

<mark style="color:green;">`POST`</mark>

**In this version the metadata can be inserted in every single** _**transfer**_ **of the** _**receipt,**_ **furthermore the information obtained from** [advanced-commission-management.md](advanced-commission-management.md "mention") **and the @e.bollo service is managed**.

#### Request Body

| Name                                                          | Type    | Description                                                                                                                                                |
| ------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA<mark style="color:red;">\*</mark>                        | String  | fiscal code of the structure that sends the payment request                                                                                                |
| receiptId<mark style="color:red;">\*</mark>                   | String  | Unique identifier of the _receipt_ containing the _paymentToken_ assigned by pagoPa                                                                        |
| outcome<mark style="color:red;">\*</mark>                     | String  | the result of the operation that can contain the codes OK or KO                                                                                            |
| receipt<mark style="color:red;">\*</mark>                     | String  | the payment receipt                                                                                                                                        |
| idStation<mark style="color:red;">\*</mark>                   | String  | Identifier of the EC's station in the pagoPa system                                                                                                        |
| idBrokerPA<mark style="color:red;">\*</mark>                  | String  | identifier of the entity that operates as an intermediary for the EC                                                                                       |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String  | <p><strong>F</strong> : Physical person</p><p><strong>G</strong> : Legal person</p>                                                                        |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String  |                                                                                                                                                            |
| debtor<mark style="color:red;">\*</mark>                      | String  | identifies the debtor to which the debt position refers                                                                                                    |
| officeName                                                    | String  |                                                                                                                                                            |
| companyName<mark style="color:red;">\*</mark>                 | String  | complete name of the EC                                                                                                                                    |
| description<mark style="color:red;">\*</mark>                 | String  |                                                                                                                                                            |
| paymentAmount<mark style="color:red;">\*</mark>               | String  | amount expressed in euros                                                                                                                                  |
| creditorReferenceId<mark style="color:red;">\*</mark>         | String  | **IUV**: _Univocal Payment Identifier_                                                                                                                     |
| fiscalCode<mark style="color:red;">\*</mark>                  | String  | fiscal code of the EC                                                                                                                                      |
| noticeNumber<mark style="color:red;">\*</mark>                | String  | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                    |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String  | fiscal code or VAT no.                                                                                                                                     |
| e-mail                                                        | String  |                                                                                                                                                            |
| country                                                       | String  |                                                                                                                                                            |
| stateProvinceRegion                                           | String  |                                                                                                                                                            |
| city                                                          | String  |                                                                                                                                                            |
| postalCode                                                    | String  |                                                                                                                                                            |
| civicNumber                                                   | String  |                                                                                                                                                            |
| streetName                                                    | String  |                                                                                                                                                            |
| fullName<mark style="color:red;">\*</mark>                    | String  | complete name of the debtor                                                                                                                                |
| transferCategory<mark style="color:red;">\*</mark>            | String  | taxonomic code, composed of _Creditor type code + Progressive macro area + Service type code + Legal reason_ ( ex. **0101002IM** )                         |
| remittanceInformation<mark style="color:red;">\*</mark>       | String  | reason for the payment                                                                                                                                     |
| IBAN                                                          | String  | IBAN to which the transfer will be made                                                                                                                    |
| fiscalCodePA<mark style="color:red;">\*</mark>                | String  | fiscal code of the EC                                                                                                                                      |
| transferAmount<mark style="color:red;">\*</mark>              | String  | amount                                                                                                                                                     |
| idTransfer<mark style="color:red;">\*</mark>                  | String  | index of the list (from 1 to 5)                                                                                                                            |
| transfer<mark style="color:red;">\*</mark>                    | String  |                                                                                                                                                            |
| transferList<mark style="color:red;">\*</mark>                | String  | structure that contains the details of the _transfers_                                                                                                     |
| channelDescription<mark style="color:red;">\*</mark>          | String  |                                                                                                                                                            |
| idChannel<mark style="color:red;">\*</mark>                   | String  |                                                                                                                                                            |
| PSPCompanyName<mark style="color:red;">\*</mark>              | String  |                                                                                                                                                            |
| pspPartitaIVA                                                 | String  |                                                                                                                                                            |
| pspFiscalCode                                                 | String  |                                                                                                                                                            |
| idPSP<mark style="color:red;">\*</mark>                       | String  | PSP identifier                                                                                                                                             |
| key<mark style="color:red;">\*</mark>                         | String  |                                                                                                                                                            |
| mapEntry<mark style="color:red;">\*</mark>                    | String  |                                                                                                                                                            |
| metadata                                                      | String  |                                                                                                                                                            |
| transferDate                                                  | String  | transfer date                                                                                                                                              |
| applicationDate                                               | String  | application date                                                                                                                                           |
| paymentDateTime                                               | String  | date and time of the payment                                                                                                                               |
| fee                                                           | String  | amount of the commission expressed in euros                                                                                                                |
| paymentMethod                                                 | String  |                                                                                                                                                            |
| e-mail                                                        | String  |                                                                                                                                                            |
| country                                                       | String  |                                                                                                                                                            |
| stateProvinceRegion                                           | String  |                                                                                                                                                            |
| city                                                          | String  |                                                                                                                                                            |
| postalCode                                                    | String  |                                                                                                                                                            |
| civicNumber                                                   | String  |                                                                                                                                                            |
| streetName                                                    | String  |                                                                                                                                                            |
| fullName<mark style="color:red;">\*</mark>                    | String  | complete name of the debtor                                                                                                                                |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String  | fiscal code or VAT no.                                                                                                                                     |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String  | <p><strong>F</strong> : Physical person</p><p><strong>G</strong> : Legal person</p>                                                                        |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String  |                                                                                                                                                            |
| payer                                                         | String  | identifies the payer                                                                                                                                       |
| value<mark style="color:red;">\*</mark>                       | String  |                                                                                                                                                            |
| value                                                         | String  |                                                                                                                                                            |
| key                                                           | String  |                                                                                                                                                            |
| mapEntry                                                      | String  |                                                                                                                                                            |
| metadata                                                      | String  |                                                                                                                                                            |
| idCiBundle                                                    | String  | identifier of the attributes the EC added to the package [advanced-commission-management.md](advanced-commission-management.md "mention")                  |
| idBundle                                                      | String  | identifier of the package [advanced-commission-management.md](advanced-commission-management.md "mention")                                                 |
| primaryCiIncurredFee                                          | String  | amount of the commission paid to the EC, expressed in euros obtained from [advanced-commission-management.md](advanced-commission-management.md "mention") |
| CHOICE<mark style="color:red;">\*</mark>                      | String  | Choice between IBAN and marcaDaBollo                                                                                                                       |
| tipoBollo                                                     | String  | Type of stamp duty                                                                                                                                         |
| marcaDaBollo                                                  | String  | The data of the digital stamp duty                                                                                                                         |
| MBDAttachment                                                 | String  | The XML document that contains the digital stamp duty, in base64 format.                                                                                   |
| paymentNote                                                   | String  | Payment description. Set with _idCart_, if the parameter is set in [payment-at-the-ecs-frontend.md](../use-cases/payment-at-the-ecs-frontend.md "mention") |
| standin                                                       | Boolean | true: payment took place in Stand in                                                                                                                       |
| companyName                                                   | String  | complete name of the EC                                                                                                                                    |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <pafn:paSendRTReq>
        <idPA>77777777777</idPA>
        <idBrokerPA>77777777777</idBrokerPA>
        <idStation>77777777777_01</idStation>
        <receipt>
          <receiptId>c110729d258c4ab1b765fe902aae41d6</receiptId>
          <noticeNumber>311111111112222222</noticeNumber>
          <fiscalCode>77777777777</fiscalCode>
          <outcome>OK</outcome>
          <creditorReferenceId>11111111112222222</creditorReferenceId>
          <paymentAmount>30.00</paymentAmount>
          <description>test</description>
          <companyName>company EC1</companyName>
          <officeName>office EC</officeName>
          <debtor>
            <uniqueIdentifier>
              <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
              <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
            </uniqueIdentifier>
            <fullName>John Doe</fullName>
            <streetName>street</streetName>
            <civicNumber>12</civicNumber>
            <postalCode>89020</postalCode>
            <city>city</city>
            <stateProvinceRegion>MI</stateProvinceRegion>
            <country>IT</country>
            <e-mail>john.doe@test.it</e-mail>
          </debtor>
          <transferList>
            <transfer>
              <idTransfer>1</idTransfer>
              <transferAmount>20.00</transferAmount>
              <fiscalCodePA>77777777777</fiscalCodePA>
              <companyName>company EC1</companyName>
              <IBAN>IT0000000000000000000000000</IBAN>
              <remittanceInformation>remittanceInformation1</remittanceInformation>
              <transferCategory>0101100IM</transferCategory>
              <metadata>
                <mapEntry>
                  <key>keytest</key>
                  <value>1</value>
                </mapEntry>
              </metadata>            
            </transfer>
            <transfer>
              <idTransfer>2</idTransfer>
              <transferAmount>10.00</transferAmount>
              <fiscalCodePA>77777777778</fiscalCodePA>
              <companyName>company EC2</companyName>
              <IBAN>IT0000000000000000000000001</IBAN>
              <remittanceInformation>remittanceInformation2</remittanceInformation>
              <transferCategory>0201102IM</transferCategory>
            </transfer>
          </transferList>
          <idPSP>88888888888</idPSP>
          <pspFiscalCode>88888888888</pspFiscalCode>
          <pspPartitaIVA>88888888888</pspPartitaIVA>
          <PSPCompanyName>PSP name</PSPCompanyName>
          <idChannel>88888888888_01</idChannel>
          <channelDescription>app</channelDescription>
          <payer>
            <uniqueIdentifier>
              <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
              <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
            </uniqueIdentifier>
            <fullName>John Doe</fullName>
            <streetName>street</streetName>
            <civicNumber>12</civicNumber>
            <postalCode>89020</postalCode>
            <city>city</city>
            <stateProvinceRegion>MI</stateProvinceRegion>
            <country>IT</country>
            <e-mail>john.doe@test.it</e-mail>
          </payer>
          <paymentMethod>creditCard</paymentMethod>
          <fee>2.00</fee>
          <primaryCiIncurredFee>0.50</primaryCiIncurredFee>
          <idBundle>1</idBundle>
          <idCiBundle>2</idCiBundle>
          <paymentDateTime>2021-10-01T17:48:22</paymentDateTime>
          <applicationDate>2021-10-01</applicationDate>
          <transferDate>2021-10-02</transferDate>
          <metadata>
            <mapEntry>
              <key>keytest</key>
              <value>1</value>
            </mapEntry>
          </metadata>
          <standin>false</standin>
        </receipt>
      </pafn:paSendRTReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <paf:paSendRTRes>
      <outcome>OK</outcome>
    </paf:paSendRTRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, to be mandatorily entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## verifyPaymentNotice

## verifyPaymentNotice

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                                                     |
| ---------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>        | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p> |
| idBrokerPSP<mark style="color:red;">\*</mark>  | String | <p>Identifier of the intermediary, assigned by PagoPA.</p><p>Identification of the intermediary/broker of the PSP that provides access (channel) to the PSP to provide the service.</p><p>Note: the intermediary/broker can also be the PSP.</p>                                |
| idChannel<mark style="color:red;">\*</mark>    | String | <p>Identifier of the channel, identifies a payment service category and is used to perform the transaction.</p><p>A channel identifier belongs to a single PSP intermediary/broker and as a result must be unique with respect to the PSP.</p>                                  |
| qrCode<mark style="color:red;">\*</mark>       | String | it is composed of the _fiscalCode_ and _noticeNumber._                                                                                                                                                                                                                          |
| fiscalCode<mark style="color:red;">\*</mark>   | String | fiscal code of the EC.                                                                                                                                                                                                                                                          |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                                                                                         |
| password<mark style="color:red;">\*</mark>     | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                           |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <nod:verifyPaymentNoticeReq>
        <idPSP>88888888888</idPSP>
        <idBrokerPSP>88888888888</idBrokerPSP>
        <idChannel>88888888888_01</idChannel>
        <password>**********</password>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
      </nod:verifyPaymentNoticeReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:verifyPaymentNoticeRes>
      <outcome>OK</outcome>
      <paymentList>
        <paymentOptionDescription>
          <amount>30.00</amount>
          <options>EQ</options>
          <paymentNote>test</paymentNote>
        </paymentOptionDescription>
      </paymentList>
      <paymentDescription>payment</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
      <standin>false</standin>
    </nfpsp:verifyPaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope> 
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, only entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* paymentList: structure that contains details of the payment, at the moment it can contain only one _paymentOptionDescription_, a value is inserted in the case of an OK _outcome_
  * paymentOptionDescription﹡
    * amount﹡: amount in euros
    * options﹡: at the moment it is set to _EQ_
    * dueDate: payment due date according to the format ISO 8601 \[YYYY]-\[MM]-\[DD]
    * paymentNote: free text for describing the subject of the payment
* paymentDescription: free text for describing the subject of the payment, a value is entered only in case of an OK\_outcome\_
* fiscalCodePA: fiscal code of the EC, a value is entered only in the case of an OK _outcome_
* companyName: complete name of the EC, a value is entered only in the case of an OK _outcome_
* officeName: complete name of the office of the EC
* standin: true in case of a payment made in Stand in
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## verificaBollettino

## verificaBollettino

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                                                     |
| ---------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>        | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p> |
| idBrokerPSP<mark style="color:red;">\*</mark>  | String | <p>Identifier of the intermediary, assigned by PagoPA.</p><p>Identification of the intermediary/broker of the PSP that provides access (channel) to the PSP to provide the service.</p><p>Note: the intermediary/broker can also be the PSP.</p>                                |
| idChannel<mark style="color:red;">\*</mark>    | String | <p>Identifier of the channel, identifies a payment service category and is used to perform the transaction.</p><p>A channel identifier belongs to a single PSP intermediary/broker and as a result must be unique with respect to the PSP.</p>                                  |
| ccPost<mark style="color:red;">\*</mark>       | String | postal current account of the EC.                                                                                                                                                                                                                                               |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                                                                                         |
| password<mark style="color:red;">\*</mark>     | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                           |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <nod:verificaBollettinoReq>
        <idPSP>88888888888</idPSP>
        <idBrokerPSP>88888888888</idBrokerPSP>
        <idChannel>88888888888_01</idChannel>
        <password>**********</password>
        <ccPost>012345678912</ccPost>
        <noticeNumber>311111111112222222</noticeNumber>
      </nod:verificaBollettinoReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:verificaBollettinoRes>
      <outcome>OK</outcome>
      <paymentBollettinoList>
        <paymentOptionDescription>
          <amount>30.00</amount>
          <options>EQ</options>
          <dueDate>2021-12-31</dueDate>
          <paymentNote>test</paymentNote>
          <allCCP>true</allCCP>
        </paymentOptionDescription>
      </paymentBollettinoList>
      <paymentDescription>payment</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <noticeNumber>311111111112222222</noticeNumber>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
      <standin>false</standin>
    </nfpsp:verificaBollettinoRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, only entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* paymentBollettinoList: structure that contains details of the payment, at the moment it can contain only one _paymentOptionDescription_, a value is inserted in the case of an OK _outcome_, a value is inserted in the case of an OK _outcome_
  * paymentOptionDescription﹡
    * amount﹡: amount in euros
    * options﹡: at the moment it is set to _EQ_
    * dueDate: payment due date according to the format ISO 8601 \[YYYY]-\[MM]-\[DD]
    * paymentNote: free text for describing the subject of the payment
    * allCCP﹡: if TRUE this indicates that all bank transfers are associated with postal IBANs
* paymentDescription: free text for describing the subject of the payment
* fiscalCodePA: fiscal code of the EC, a value is entered only in the case of an OK _outcome_
* noticeNumber: \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit], a value is entered only in the case of an OK _outcome_
* companyName: complete name of the EC, a value is entered only in the case of an OK _outcome_
* officeName: complete name of the office of the EC
* standin: true in case of a payment made in Stand in
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## activatePaymentNotice <a href="#activatepaymentnotice" id="activatepaymentnotice"></a>

## activatePaymentNotice version 1

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| idPSP<mark style="color:red;">\*</mark>        | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p>                                                            |
| idBrokerPSP<mark style="color:red;">\*</mark>  | String | <p>Identifier of the intermediary, assigned by PagoPA.</p><p>Identification of the intermediary/broker of the PSP that provides access (channel) to the PSP to provide the service.</p><p>Note: the intermediary/broker can also be the PSP.</p>                                                                                           |
| idChannel<mark style="color:red;">\*</mark>    | String | <p>Identifier of the channel, identifies a payment service category and is used to perform the transaction.</p><p>A channel identifier belongs to a single PSP intermediary/broker and as a result must be unique with respect to the PSP.</p>                                                                                             |
| qrCode<mark style="color:red;">\*</mark>       | String | It is composed of the _fiscalCode_ and _noticeNumber_                                                                                                                                                                                                                                                                                      |
| fiscalCode<mark style="color:red;">\*</mark>   | String | Fiscal code of the EC                                                                                                                                                                                                                                                                                                                      |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                                                                                                                                                    |
| password<mark style="color:red;">\*</mark>     | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                                                                                      |
| idempotencyKey                                 |        | Idempotency key                                                                                                                                                                                                                                                                                                                            |
| expirationTime                                 | String | <p>Token expiration time ( ms ), max 30 minutes.</p><p>The duration of the payment token can be set in 2 ways:</p><p>- Implicitly by the pagoPA platform, if it is not set in the request to activatePaymentNotice (default value duration = 30 minutes)</p><p>- Explicitly by the PSP, if set in the request to activatePaymentNotice</p> |
| paymentNote                                    | String | Free text for describing the subject of the payment                                                                                                                                                                                                                                                                                        |
| dueDate                                        | String | payment due date according to the format ISO 8601 \[YYYY]-\[MM]-\[DD]                                                                                                                                                                                                                                                                      |
| amount<mark style="color:red;">\*</mark>       | String | Amount in euros                                                                                                                                                                                                                                                                                                                            |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <nod:activatePaymentNoticeReq>
        <idPSP>88888888888</idPSP>
        <idBrokerPSP>88888888888</idBrokerPSP>
        <idChannel>88888888888_01</idChannel>
        <password>**********</password>
        <idempotencyKey>70000000001_100149bdWB</idempotencyKey>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
        <expirationTime>6000</expirationTime>
        <amount>30.00</amount>
      </nod:activatePaymentNoticeReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:activatePaymentNoticeRes>
      <outcome>OK</outcome>
      <totalAmount>30.00</totalAmount>
      <paymentDescription>test</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
      <paymentToken>c110729d258c4ab1b765fe902aae41d6</paymentToken>
      <transferList>
        <transfer>
          <idTransfer>1</idTransfer>
          <transferAmount>20.00</transferAmount>
          <fiscalCodePA>77777777777</fiscalCodePA>
          <IBAN>IT0000000000000000000000000</IBAN>
          <remittanceInformation>remittanceInformation1</remittanceInformation>
        </transfer>
        <transfer>
          <idTransfer>2</idTransfer>
          <transferAmount>10.00</transferAmount>
          <fiscalCodePA>77777777778</fiscalCodePA>
          <IBAN>IT0000000000000000000000001</IBAN>
          <remittanceInformation>remittanceInformation2</remittanceInformation>
        </transfer>
      </transferList>
      <creditorReferenceId>11111111112222222</creditorReferenceId>
      <standin>false</standin>
    </nfpsp:activatePaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, only entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* totalAmount: represents the total of the single transfer amounts, a value entered only in case of an OK _outcome_
* paymentDescription: free text for describing the subject of the payment, a value is entered only in case of an OK\_outcome\_
* fiscalCodePA: fiscal code of the EC, a value is entered only in the case of an OK _outcome_
* companyName: complete name of the EC, a value is entered only in the case of an OK _outcome_
* officeName: complete name of the office of the EC
* paymentToken: it is generated by the system during the phase of payment activation, it is the correlation identifier to be combined to the activation and result of the payment, and a value is entered only in the case of an OK _outcome_
* transferList: structure that contains details of the payment transfers, at the moment it can contain only a maximum of 5 entered values only in the case of an OK _outcome_
  * transfer﹡
    * idTransfer﹡: permitted values from 1 to 5
    * transferAmount﹡: amount in euros
    * fiscalCodePA﹡: fiscal code of the beneficiary institution
    * IBAN﹡: IBAN to which the amount will be transfered
    * remittanceInformation: free text for describing the subject of the payment
* creditorReferenceId: **IUV** Univocal Payment Identifier, a value is entered only in the case of an OK _outcome_
* standin: true in case of a payment made in Stand in
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## activatePaymentNotice version 2

<mark style="color:green;">`POST`</mark>

**In this version it is possible for metadata to transit for every \_payment**_\*\*, and in every single \*\*_**transfer**\_\*\* of the response, furthermore the information obtained from\*\* [advanced-commission-management.md](advanced-commission-management.md "mention") is managed.

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| idPSP<mark style="color:red;">\*</mark>        | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p>                                                            |
| idBrokerPSP<mark style="color:red;">\*</mark>  | String | <p>Identifier of the intermediary, assigned by PagoPA.</p><p>Identification of the intermediary/broker of the PSP that provides access (channel) to the PSP to provide the service.</p><p>Note: the intermediary/broker can also be the PSP.</p>                                                                                           |
| idChannel<mark style="color:red;">\*</mark>    | String | <p>Identifier of the channel, identifies a payment service category and is used to perform the transaction.</p><p>A channel identifier belongs to a single PSP intermediary/broker and as a result must be unique with respect to the PSP.</p>                                                                                             |
| qrCode<mark style="color:red;">\*</mark>       | String | It is composed of the _fiscalCode_ and _noticeNumber_                                                                                                                                                                                                                                                                                      |
| fiscalCode<mark style="color:red;">\*</mark>   | String | Fiscal code of the EC                                                                                                                                                                                                                                                                                                                      |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                                                                                                                                                    |
| password<mark style="color:red;">\*</mark>     | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                                                                                      |
| idempotencyKey                                 |        | Idempotency key                                                                                                                                                                                                                                                                                                                            |
| expirationTime                                 | String | <p>Token expiration time ( ms ), max 30 minutes.</p><p>The duration of the payment token can be set in 2 ways:</p><p>- Implicitly by the pagoPA platform, if it is not set in the request to activatePaymentNotice (default value duration = 30 minutes)</p><p>- Explicitly by the PSP, if set in the request to activatePaymentNotice</p> |
| paymentNote                                    | String | Free text for describing the subject of the payment                                                                                                                                                                                                                                                                                        |
| dueDate                                        | String | payment due date according to the format ISO 8601 \[YYYY]-\[MM]-\[DD]                                                                                                                                                                                                                                                                      |
| amount<mark style="color:red;">\*</mark>       | String | Amount in euros                                                                                                                                                                                                                                                                                                                            |
| allCCP                                         | String | for internal use for PagoPA services                                                                                                                                                                                                                                                                                                       |
|                                                | String |                                                                                                                                                                                                                                                                                                                                            |
| paymentMethod                                  | String | payment method                                                                                                                                                                                                                                                                                                                             |
| touchPoint                                     | String | touchpoint used for the payment (e.g. physical POS, ATM, ..)                                                                                                                                                                                                                                                                               |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <nod:activatePaymentNoticeReq>
        <idPSP>88888888888</idPSP>
        <idBrokerPSP>88888888888</idBrokerPSP>
        <idChannel>88888888888_01</idChannel>
        <password>**********</password>
        <idempotencyKey>70000000001_100149bdWB</idempotencyKey>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
        <expirationTime>6000</expirationTime>
        <amount>30.00</amount>
      </nod:activatePaymentNoticeReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:activatePaymentNoticeRes>
      <outcome>OK</outcome>
      <totalAmount>30.00</totalAmount>
      <paymentDescription>test</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
      <paymentToken>c110729d258c4ab1b765fe902aae41d6</paymentToken>
      <transferList>
        <transfer>
          <idTransfer>1</idTransfer>
          <transferAmount>20.00</transferAmount>
          <fiscalCodePA>77777777777</fiscalCodePA>
          <companyName>Test EC</companyName>
          <IBAN>IT0000000000000000000000000</IBAN>
          <remittanceInformation>remittanceInformation1</remittanceInformation>
          <transferCategory>0101100IM</transferCategory>
          <metadata>
            <mapEntry>
              <key>keytest1</key>
              <value>1</value>
            </mapEntry>
          </metadata>        
        </transfer>
        <transfer>
          <idTransfer>2</idTransfer>
          <transferAmount>10.00</transferAmount>
          <fiscalCodePA>77777777778</fiscalCodePA>
          <companyName>Test EC 2</companyName>
          <IBAN>IT0000000000000000000000001</IBAN>
          <remittanceInformation>remittanceInformation2</remittanceInformation>
          <transferCategory>0201102IM</transferCategory>
        </transfer>
        <metadata>
          <mapEntry>
            <key>keytest2</key>
            <value>2</value>
          </mapEntry>
        </metadata> 
      </transferList>
      <creditorReferenceId>11111111112222222</creditorReferenceId>
      <suggestedUserFee>1.00</suggestedUserFee>
      <suggestedPaFee>0.50</suggestedPaFee>
      <suggestedIdBundle>1</suggestedIdBundle>
      <suggestedIdCiBundle>2</suggestedIdCiBundle>
      <standin>false</standin>
    </nfpsp:activatePaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, only entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* totalAmount: represents the total of the single transfer amounts, a value entered only in case of an OK _outcome_
* paymentDescription: free text for describing the subject of the payment, a value is entered only in case of an OK\_outcome\_
* fiscalCodePA: fiscal code of the EC, a value is entered only in the case of an OK _outcome_
* companyName: complete name of the EC, a value is entered only in the case of an OK _outcome_
* officeName: complete name of the office of the EC
* paymentToken: it is generated by the system during the phase of payment activation, it is the correlation identifier to be combined to the activation and result of the payment, and a value is entered only in the case of an OK _outcome_
* transferList: structure that contains details of the payment transfers, at the moment it can contain only a maximum of 5 entered values only in the case of an OK _outcome_
  * transfer﹡
    * idTransfer﹡: permitted values from 1 to 5
    * transferAmount﹡: amount in euros
    * fiscalCodePA﹡: fiscal code of the beneficiary institution
    * companyName: complete name of the EC, a value is entered only in the case of an OK _outcome_
    * IBAN﹡: IBAN to which the amount will be transfered
    * remittanceInformation: free text for describing the subject of the payment
    * transferCategory﹡: taxonomic code, composed of _Creditor type code + Progressive macro area + Service type code + Legal reason_ ( ex. **0101002IM** )
    * metadata: if is a key archiving field/value.
      * mapEntry﹡
        * key﹡
        * value﹡
* creditorReferenceId: **IUV** Univocal Payment Identifier, a value is entered only in the case of an OK _outcome_
* suggestedUserFee: amount of the commission expressed in euros obtained from [advanced-commission-management.md](advanced-commission-management.md "mention")
* suggestedPaFee: amount of the commission paid to the EC, expressed in euros obtained from [advanced-commission-management.md](advanced-commission-management.md "mention")
* suggestedIdBundle: identifier of the package [advanced-commission-management.md](advanced-commission-management.md "mention")
* suggestedIdCiBundle: identifier of the attributes the EC added to the package [advanced-commission-management.md](advanced-commission-management.md "mention")
* standin: true in case of a payment made in Stand in
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## sendPaymentOutcome <a href="#sendpaymentoutcome" id="sendpaymentoutcome"></a>

## sendPaymentOutcome version 1

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                          | Type   | Description                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>                       | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p> |
| details                                                       | String | Details of the operation result, to be entered mandatorily in the case of an OK _outcome_                                                                                                                                                                                       |
| outcome<mark style="color:red;">\*</mark>                     | String | <p>The result of the operation that can contain the following</p><p><strong>OK</strong> codes: operation performed successfully</p><p><strong>KO</strong> : operation completed with an error</p>                                                                               |
| paymentToken<mark style="color:red;">\*</mark>                | String | It is generated by the system during the phase of payment activation, it is the correlation identifier to be combined to the activation and result of the payment                                                                                                               |
| password<mark style="color:red;">\*</mark>                    | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                           |
| idChannel<mark style="color:red;">\*</mark>                   | String | <p>identifier of the channel, identifies a payment service category and is used to perform the transaction.</p><p>A channel identifier belongs to a single PSP intermediary/broker and as a result must be unique with respect to the PSP.</p>                                  |
| idBrokerPSP<mark style="color:red;">\*</mark>                 | String | <p>identifier of the intermediary, assigned by PagoPA.</p><p>Identification of the intermediary/broker of the PSP that provides access (channel) to the PSP to provide the service.</p><p>Note: the intermediary/broker can also be the PSP.</p>                                |
| payer                                                         | String | identifies the payer                                                                                                                                                                                                                                                            |
| fee<mark style="color:red;">\*</mark>                         | String | amount of the commission payed in euros                                                                                                                                                                                                                                         |
| paymentChannel                                                | String | <p>payment channel</p><p>enum: "frontOffice" "atm" "onLine" "app" "other"</p>                                                                                                                                                                                                   |
| paymentMethod<mark style="color:red;">\*</mark>               | String | <p>payment method</p><p>enum: "cash" "creditCard" "bancomat" "other"</p>                                                                                                                                                                                                        |
| transferDate<mark style="color:red;">\*</mark>                | String | date of the transfer to the EC                                                                                                                                                                                                                                                  |
| applicationDate<mark style="color:red;">\*</mark>             | String | application date of the payment                                                                                                                                                                                                                                                 |
| e-mail                                                        | String |                                                                                                                                                                                                                                                                                 |
| country                                                       | String |                                                                                                                                                                                                                                                                                 |
| stateProvinceRegion                                           | String |                                                                                                                                                                                                                                                                                 |
| city                                                          | String |                                                                                                                                                                                                                                                                                 |
| postalCode                                                    | String |                                                                                                                                                                                                                                                                                 |
| civicNumber                                                   | String |                                                                                                                                                                                                                                                                                 |
| streetName                                                    | String |                                                                                                                                                                                                                                                                                 |
| fullName<mark style="color:red;">\*</mark>                    | String | complete name of the payer                                                                                                                                                                                                                                                      |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String |                                                                                                                                                                                                                                                                                 |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String | fiscal code or VAT no., if they are not available ‘ANONYMOUS’ can be used                                                                                                                                                                                                       |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String | <p><strong>F</strong> : Physical person</p><p><strong>G</strong> : Legal person</p>                                                                                                                                                                                             |
| idempotencyKey                                                | String | Idempotency key.                                                                                                                                                                                                                                                                |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
        <nod:sendPaymentOutcomeReq>
          <idPSP>88888888888</idPSP>
          <idBrokerPSP>88888888888</idBrokerPSP>
          <idChannel>88888888888_01</idChannel>
          <password>**********</password>
          <idempotencyKey>70000000001_100149bdWB</idempotencyKey>
          <paymentToken>c110729d258c4ab1b765fe902aae41d6</paymentToken>
          <outcome>OK</outcome>
          <details>
              <paymentMethod>creditCard</paymentMethod>
              <paymentChannel>app</paymentChannel>
              <fee>2.00</fee>
              <payer>
                <uniqueIdentifier>
                    <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
                    <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
                </uniqueIdentifier>
                <fullName>John Doe</fullName>
                <streetName>street</streetName>
                <civicNumber>12</civicNumber>
                <postalCode>89020</postalCode>
                <city>city</city>
                <stateProvinceRegion>MI</stateProvinceRegion>
                <country>IT</country>
                <e-mail>john.doe@test.it</e-mail>
              </payer>
              <applicationDate>2021-10-01</applicationDate>
              <transferDate>2021-10-02</transferDate>
          </details>
        </nod:sendPaymentOutcomeReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:sendPaymentOutcomeRes>
      <outcome>OK</outcome>
    </nfpsp:sendPaymentOutcomeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, to be mandatorily entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## sendPaymentOutcome version 2

<mark style="color:green;">`POST`</mark>

**Used for the payment activated at the frontend of the EC, with respect to version 1 it is possible to send the outcome of multiple payment tokens at the same time, furthermore the information obtained from** [advanced-commission-management.md](advanced-commission-management.md "mention")\*\*and the @e.bollo.\*\* service is managed

#### Request Body

| Name                                                          | Type   | Description                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>                       | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p> |
| details                                                       | String | details of the operation result, to be entered mandatorily in the case of an OK _outcome_                                                                                                                                                                                       |
| outcome<mark style="color:red;">\*</mark>                     | String | <p>the result of the operation that can contain the following</p><p><strong>OK</strong> codes: operation performed successfully</p><p><strong>KO</strong> : operation completed with an error</p>                                                                               |
| paymentToken<mark style="color:red;">\*</mark>                | String | it is generated by the system during the phase of payment activation, it is the correlation identifier to be combined to the activation and result of the payment.                                                                                                              |
| password<mark style="color:red;">\*</mark>                    | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                           |
| idChannel<mark style="color:red;">\*</mark>                   | String | <p>Identifier of the channel, identifies a payment service category and is used to perform the transaction.</p><p>A channel identifier belongs to a single PSP intermediary/broker and as a result must be unique with respect to the PSP.</p>                                  |
| idBrokerPSP<mark style="color:red;">\*</mark>                 | String | <p>Identifier of the intermediary, assigned by PagoPA.</p><p>Identification of the intermediary/broker of the PSP that provides access (channel) to the PSP to provide the service.</p><p>Note: the intermediary/broker can also be the PSP.</p>                                |
| payer                                                         | String | identifies the payer                                                                                                                                                                                                                                                            |
| fee<mark style="color:red;">\*</mark>                         | String | amount of the commission payed in euros                                                                                                                                                                                                                                         |
| paymentChannel                                                | String | <p>payment channel</p><p>enum: "frontOffice" "atm" "onLine" "app" "other"</p>                                                                                                                                                                                                   |
| paymentMethod<mark style="color:red;">\*</mark>               | String | <p>payment method</p><p>enum: "cash" "creditCard" "bancomat" "other"</p>                                                                                                                                                                                                        |
| transferDate<mark style="color:red;">\*</mark>                | String | date of the transfer to the EC                                                                                                                                                                                                                                                  |
| applicationDate<mark style="color:red;">\*</mark>             | String | application date of the payment                                                                                                                                                                                                                                                 |
| e-mail                                                        | String |                                                                                                                                                                                                                                                                                 |
| country                                                       | String |                                                                                                                                                                                                                                                                                 |
| stateProvinceRegion                                           | String |                                                                                                                                                                                                                                                                                 |
| city                                                          | String |                                                                                                                                                                                                                                                                                 |
| postalCode                                                    | String |                                                                                                                                                                                                                                                                                 |
| civicNumber                                                   | String |                                                                                                                                                                                                                                                                                 |
| streetName                                                    | String |                                                                                                                                                                                                                                                                                 |
| fullName<mark style="color:red;">\*</mark>                    | String | complete name of the payer                                                                                                                                                                                                                                                      |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String |                                                                                                                                                                                                                                                                                 |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String | fiscal code or VAT no., if they are not available ‘ANONYMOUS’ can be used                                                                                                                                                                                                       |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String | <p><strong>F</strong> : Physical person</p><p><strong>G</strong> : Legal person</p>                                                                                                                                                                                             |
| paymentTokens<mark style="color:red;">\*</mark>               | String | sequence that contains all the tokens                                                                                                                                                                                                                                           |
| idempotencyKey                                                | String | Idempotency key                                                                                                                                                                                                                                                                 |
| idCiBundle                                                    | String | identifier of the attributes the EC added to the package [advanced-commission-management.md](advanced-commission-management.md "mention")                                                                                                                                       |
| idBundle                                                      | String | identifier of the package [advanced-commission-management.md](advanced-commission-management.md "mention")                                                                                                                                                                      |
| primaryCiIncurredFee                                          | String | amount of the commission paid to the EC, expressed in euros obtained from [advanced-commission-management.md](advanced-commission-management.md "mention")                                                                                                                      |
| marcheDaBollo                                                 | String | The list of the digital stamp duties managed in the payment transaction                                                                                                                                                                                                         |
| paymentToken                                                  | String | The paymentToken with which the digital stamp duty request arrived                                                                                                                                                                                                              |
| idTransfer                                                    | String | The identifier of the transfer that contains the _richiestaMarcaDaBollo;_                                                                                                                                                                                                       |
| MBDAttachment                                                 | String | The XML document that contains the digital stamp duty, in base64 format                                                                                                                                                                                                         |
| marcaDaBollo                                                  | String | The data of every digital stamp duty                                                                                                                                                                                                                                            |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
        <nod:sendPaymentOutcomeReq>
          <idPSP>88888888888</idPSP>
          <idBrokerPSP>88888888888</idBrokerPSP>
          <idChannel>88888888888_01</idChannel>
          <password>**********</password>
          <idempotencyKey>70000000001_100149bdWB</idempotencyKey>
          <paymentTokens>
              <paymentToken>d221820d258c4ab1b765fe902aae6d14</paymentToken>
              <paymentToken>c110729d258c4ab1b765fe902aae41d6</paymentToken>
          </paymentTokens>
          <outcome>OK</outcome>
          <details>
              <paymentMethod>creditCard</paymentMethod>
              <paymentChannel>app</paymentChannel>
              <fee>2.00</fee>
              <primaryCiIncurredFee>0.50</primaryCiIncurredFee>
              <idBundle>1</idBundle>
              <idCiBundle>2</idCiBundle>
              <payer>
                <uniqueIdentifier>
                    <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
                    <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
                </uniqueIdentifier>
                <fullName>John Doe</fullName>
                <streetName>street</streetName>
                <civicNumber>12</civicNumber>
                <postalCode>89020</postalCode>
                <city>city</city>
                <stateProvinceRegion>MI</stateProvinceRegion>
                <country>IT</country>
                <e-mail>john.doe@test.it</e-mail>
              </payer>
              <applicationDate>2021-10-01</applicationDate>
              <transferDate>2021-10-02</transferDate>
          </details>
        </nod:sendPaymentOutcomeReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:sendPaymentOutcomeRes>
      <outcome>OK</outcome>
    </nfpsp:sendPaymentOutcomeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, to be mandatorily entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## pspNotifyPayment <a href="#pspnotifypayment" id="pspnotifypayment"></a>

## pspNotifyPayment version 1

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                    | Type    | Description                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String  | Fiscal code of the EC                                                                                                                                                                                                                                                           |
| paymentToken<mark style="color:red;">\*</mark>          | String  | It is generated by the system during the phase of payment activation, it is the correlation identifier to be combined to the activation and result of the payment                                                                                                               |
| idPSP<mark style="color:red;">\*</mark>                 | String  | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p> |
| idChannel<mark style="color:red;">\*</mark>             | String  | <p>Identifier of the channel, identifies a payment service category and is used to perform the transaction.</p><p>A channel identifier belongs to a single PSP intermediary/broker and as a result must be unique with respect to the PSP.</p>                                  |
| creditorReferenceId<mark style="color:red;">\*</mark>   | String  | **IUV**: Univocal Payment Identifier.                                                                                                                                                                                                                                           |
| companyName<mark style="color:red;">\*</mark>           | String  | Complete name of the EC                                                                                                                                                                                                                                                         |
| officeName                                              | String  | Complete name of the office of the EC                                                                                                                                                                                                                                           |
| idBrokerPSP<mark style="color:red;">\*</mark>           | String  | <p>Identifier of the intermediary, assigned by PagoPA.</p><p>Identification of the intermediary/broker of the PSP that provides access (channel) to the PSP to provide the service.</p><p>Note: the intermediary/broker can also be the PSP.</p>                                |
| debtAmount<mark style="color:red;">\*</mark>            | String  | Represents the sum of the amounts of the single transfers.                                                                                                                                                                                                                      |
| paymentDescription<mark style="color:red;">\*</mark>    | String  | Free text for describing the subject of the payment.                                                                                                                                                                                                                            |
| remittanceInformation<mark style="color:red;">\*</mark> | String  | Reason for the payment                                                                                                                                                                                                                                                          |
| IBAN<mark style="color:red;">\*</mark>                  | String  | IBAN to which the transfer will be made                                                                                                                                                                                                                                         |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String  | Fiscal code of the EC                                                                                                                                                                                                                                                           |
| transferAmount<mark style="color:red;">\*</mark>        | String  | Amount                                                                                                                                                                                                                                                                          |
| idTransfer<mark style="color:red;">\*</mark>            | String  | Index of the list (from 1 to 5).                                                                                                                                                                                                                                                |
| transfer<mark style="color:red;">\*</mark>              | String  |                                                                                                                                                                                                                                                                                 |
| transferList<mark style="color:red;">\*</mark>          | String  | Structure that contains details of the payment transfers, at the moment it can contain only a maximum of 5.                                                                                                                                                                     |
| specific data of the payment channel                    | String  | Structure of the specific data of the utilized payment channel.                                                                                                                                                                                                                 |
| standin                                                 | Boolean | true if the payment was made in stand in                                                                                                                                                                                                                                        |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
    <soapenv:Envelope>
      <soapenv:Body>
          <pspfn:pspNotifyPaymentReq>
            <idPSP>88888888888</idPSP>
            <idBrokerPSP>88888888888</idBrokerPSP>
            <idChannel>88888888888_01</idChannel>
            <paymentDescription>test</paymentDescription>
            <fiscalCodePA>77777777777</fiscalCodePA>
            <companyName>company EC</companyName>
            <officeName>office EC</officeName>                        
            <paymentToken>ac6536ab9967401fb6cfa98bef88ccf0</paymentToken>
            <creditorReferenceId>11111111112222222</creditorReferenceId>
            <debtAmount>30.00</debtAmount>
            <transferList>
                <transfer>
                  <idTransfer>1</idTransfer>
                  <transferAmount>20.00</transferAmount>
                  <fiscalCodePA>77777777777</fiscalCodePA>
                  <IBAN>IT0000000000000000000000000</IBAN>
                  <remittanceInformation>remittance info</remittanceInformation>
                </transfer>
                <transfer>
                  <idTransfer>2</idTransfer>
                  <transferAmount>10.00</transferAmount>
                  <fiscalCodePA>77777777778</fiscalCodePA>
                  <IBAN>IT0000000000000000000000001</IBAN>
                  <remittanceInformation>remittance info</remittanceInformation>
                </transfer>
            </transferList><!-- dati specifici del canale di pagamento --><standin>false</standin>
          </pspfn:pspNotifyPaymentReq>
      </soapenv:Body>
    </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
      <psp:pspNotifyPaymentRes>
        <outcome>OK</outcome>
      </psp:pspNotifyPaymentRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, to be mandatorily entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}

{% tab title="Dati specifici del canale di pagamento " %}
Credit card (discontinued 30/04/2023)

```xml
<creditCardPayment>
    <rrn>11223344</rrn>
    <outcomePaymentGateway>00</outcomePaymentGateway>
    <totalAmount>31.00</totalAmount>
    <fee>1.00</fee>
    <timestampOperation>2021-07-09T17:06:03</timestampOperation>
    <authorizationCode>123456</authorizationCode>
</creditCardPayment>
```

Paypal

```xml
<paypalPayment> 
    <transactionId>11223344</transactionId>
    <pspTransactionId>00</pspTransactionId>
    <totalAmount>31.00</totalAmount>
    <fee>1.00</fee>
    <timestampOperation>2021-07-09T17:06:03</timestampOperation>
</paypalPayment>
```

Bancomat Pay

```xml
<bancomatpayPayment> 
    <transactionId>11223344</transactionId>
    <outcomePaymentGateway>00</outcomePaymentGateway>
    <totalAmount>31.00</totalAmount>
    <fee>1.00</fee>
    <timestampOperation>2021-07-09T17:06:03</timestampOperation>
    <authorizationCode>123456</authorizationCode>
    <paymentGateway></paymentGateway>
</bancomatpayPayment>
```

Other payment channels

```xml
<additionalPaymentInformations>
    <metadata>
        <mapEntry>
            <key>keytest</key>
            <value>1</value>
        </mapEntry>
    </metadata>
</additionalPaymentInformations>
```
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## pspNotifyPayment version 2

<mark style="color:green;">`POST`</mark>

\*\*Used for the payment activated at the frontend of the EC, with respect to the previous version of pspNotifyPayment it is possible to send the PSP a **\_**payment**\_** list, furthermore the specific information for the utilized payment is entered in the **\_**additionalPaymentInformation**\_** section, which contains a list of metadata. It is also possible to enter the metadata for each **\_**payment**\_** and in every single **\_**transfer**\_** and to manage the @e.bollo.\*\* service.

#### Request Body

| Name                                                    | Type    | Description                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String  | Fiscal code of the EC                                                                                                                                                                                                                                                           |
| paymentToken<mark style="color:red;">\*</mark>          | String  | It is generated by the system during the phase of payment activation, it is the correlation identifier to be combined to the activation and result of the payment                                                                                                               |
| idPSP<mark style="color:red;">\*</mark>                 | String  | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p> |
| idChannel<mark style="color:red;">\*</mark>             | String  | <p>Identifier of the channel, identifies a payment service category and is used to perform the transaction.</p><p>A channel identifier belongs to a single PSP intermediary/broker and as a result must be unique with respect to the PSP.</p>                                  |
| creditorReferenceId<mark style="color:red;">\*</mark>   | String  | **IUV**: Univocal Payment Identifier.                                                                                                                                                                                                                                           |
| companyName<mark style="color:red;">\*</mark>           | String  | Complete name of the EC                                                                                                                                                                                                                                                         |
| officeName                                              | String  | Complete name of the office of the EC                                                                                                                                                                                                                                           |
| idBrokerPSP<mark style="color:red;">\*</mark>           | String  | <p>Identifier of the intermediary, assigned by PagoPA.</p><p>Identification of the intermediary/broker of the PSP that provides access (channel) to the PSP to provide the service.</p><p>Note: the intermediary/broker can also be the PSP.</p>                                |
| debtAmount<mark style="color:red;">\*</mark>            | String  | Represents the sum of the amounts of the single transfers.                                                                                                                                                                                                                      |
| paymentDescription<mark style="color:red;">\*</mark>    | String  | Free text for describing the subject of the payment.                                                                                                                                                                                                                            |
| remittanceInformation<mark style="color:red;">\*</mark> | String  | Reason for the payment                                                                                                                                                                                                                                                          |
| IBAN                                                    | String  | IBAN to which the transfer will be made                                                                                                                                                                                                                                         |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String  | Fiscal code of the EC                                                                                                                                                                                                                                                           |
| transferAmount<mark style="color:red;">\*</mark>        | String  | Amount                                                                                                                                                                                                                                                                          |
| idTransfer<mark style="color:red;">\*</mark>            | String  | Index of the list (from 1 to 5).                                                                                                                                                                                                                                                |
| transfer<mark style="color:red;">\*</mark>              | String  |                                                                                                                                                                                                                                                                                 |
| transferList<mark style="color:red;">\*</mark>          | String  | Structure that contains details of the payment transfers, at the moment it can contain only a maximum of 5.                                                                                                                                                                     |
| payment<mark style="color:red;">\*</mark>               | String  |                                                                                                                                                                                                                                                                                 |
| paymentList<mark style="color:red;">\*</mark>           | String  | List of payments                                                                                                                                                                                                                                                                |
| additionalPaymentInformation                            | String  | Structure that contains the specific data of the utilized payment channel.                                                                                                                                                                                                      |
| mapEntry<mark style="color:red;">\*</mark>              | String  |                                                                                                                                                                                                                                                                                 |
| key<mark style="color:red;">\*</mark>                   | String  |                                                                                                                                                                                                                                                                                 |
| value<mark style="color:red;">\*</mark>                 | String  |                                                                                                                                                                                                                                                                                 |
| CHOICE<mark style="color:red;">\*</mark>                | String  | Choice between IBAN and richiestaMarcaDaBollo                                                                                                                                                                                                                                   |
| provinciaResidenza                                      | String  | Automotive abbreviation of the province of residency of the paying entity                                                                                                                                                                                                       |
| hashDocumento                                           | String  | digest, in base64 format, of the electronic document or the protocol signature with which the digital stamp duty is associated                                                                                                                                                  |
| tipoBollo                                               | String  | Type of stamp duty                                                                                                                                                                                                                                                              |
| richiestaMarcaDaBollo                                   | String  | The data for the stamp duty request                                                                                                                                                                                                                                             |
| transactionId<mark style="color:red;">\*</mark>         | String  | Identifier of the payment operation.                                                                                                                                                                                                                                            |
| fee<mark style="color:red;">\*</mark>                   | String  | Amount of the commission.                                                                                                                                                                                                                                                       |
| totalAmount<mark style="color:red;">\*</mark>           | String  | Represents the amount paid by the user, including commission.                                                                                                                                                                                                                   |
| timestampOperation<mark style="color:red;">\*</mark>    | String  | Timestamp of the payment operation.                                                                                                                                                                                                                                             |
| IdCiBundle                                              | String  | identifier of the attributes the EC added to the package associated with [advanced-commission-management.md](advanced-commission-management.md "mention")                                                                                                                       |
| IdBundle                                                | String  | identifier of the package associated with [advanced-commission-management.md](advanced-commission-management.md "mention")                                                                                                                                                      |
| primaryCiIncurredFee                                    | String  | amount of the commission paid to the EC, expressed in euros associated with [advanced-commission-management.md](advanced-commission-management.md "mention")                                                                                                                    |
| standin                                                 | Boolean | true if the payment was made in stand in                                                                                                                                                                                                                                        |
| companyName                                             | String  | fiscal code of the EC                                                                                                                                                                                                                                                           |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
      <soapenv:Body>
          <pspfn:pspNotifyPaymentV2>
            <idPSP>CIPBITMM</idPSP>
            <idBrokerPSP>13212880150</idBrokerPSP>
            <idChannel>13212880150_02</idChannel>
            <transactionId>99910087308786</transactionId>
            <totalAmount>31.00</totalAmount>
            <fee>1.00</fee>
            <timestampOperation>2033-04-23T18:25:43Z</timestampOperation>
            <paymentList>
              <payment>
                <paymentDescription>test</paymentDescription>
                <fiscalCodePA>77777777777</fiscalCodePA>
                <companyName>company EC</companyName>
                <officeName>office EC</officeName>                        
                <paymentToken>ac6536ab9967401fb6cfa98bef88ccf0</paymentToken>
                <creditorReferenceId>11111111112222222</creditorReferenceId>
                <debtAmount>30.00</debtAmount>
                <transferList>
                  <transfer>
                    <idTransfer>1</idTransfer>
                    <transferAmount>20.00</transferAmount>
                    <fiscalCodePA>77777777777</fiscalCodePA>
                    <companyName>company EC1</companyName>
                    <IBAN>IT0000000000000000000000000</IBAN>
                    <remittanceInformation>remittance info</remittanceInformation>
                    <metadata>
                      <mapEntry>
                        <key>yyyy</key>
                        <value>abcde</value>
                      </mapEntry> 
                    </metadata>
                  </transfer>
                  <transfer>
                    <idTransfer>2</idTransfer>
                    <transferAmount>10.00</transferAmount>
                    <fiscalCodePA>77777777778</fiscalCodePA>
                    <companyName>company EC2</companyName>
                    <IBAN>IT0000000000000000000000001</IBAN>
                    <remittanceInformation>remittance info</remittanceInformation>
                  </transfer>
                </transferList> 
                <metadata>
                  <mapEntry>
                    <key>zzzz</key>
                    <value>g2f3</value>
                  </mapEntry> 
                </metadata>
              </payment>
            </paymentList>                       
            <additionalPaymentInformations>
              <mapEntry>
                <key>xxxx</key>
                <value>1234546</value>
              </mapEntry> 
            </additionalPaymentInformations>
            <standin>false</standin>
          </pspfn:pspNotifyPaymentV2>
      </soapenv:Body>
    </soapenv:Envelope>    
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
      <psp:pspNotifyPaymentV2Res>
        <outcome>OK</outcome>
      </psp:pspNotifyPaymentV2Res>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, to be mandatorily entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## demandPaymentNotice

## demandPaymentNotice

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>                 | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p>                                                                                                                           |
| datiSpecificiServizio<mark style="color:red;">\*</mark> | String | They are recorded in the service catalog, which is the repository that contains the list of generalized services activated by the ECs, sent in base64 format. The structure to insert is defined by the XSD scheme, whose name is indicated in the _xsdRiferimento_ element of the Service Catalog and can be consulted at [https://github.com/pagopa/pagopa-api](https://github.com/pagopa/pagopa-api) . |
| idSoggettoServizio<mark style="color:red;">\*</mark>    | String | Identifier of the association between the service and EC for which the payment is to be activated. Corresponds to the tag elencoSoggettiEroganti.soggettoErogante.idSoggettoServizio of the Service Catalog.                                                                                                                                                                                              |
| password<mark style="color:red;">\*</mark>              | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                                                                                                                                                     |
| idChannel<mark style="color:red;">\*</mark>             | String | <p>Identifier of the channel, identifies a payment service category and is used to perform the transaction.</p><p>A channel identifier belongs to a single PSP intermediary/broker and as a result must be unique with respect to the PSP.</p>                                                                                                                                                            |
| idBrokerPSP<mark style="color:red;">\*</mark>           | String | <p>Identifier of the intermediary, assigned by PagoPA.</p><p>Identification of the intermediary/broker of the PSP that provides access (channel) to the PSP to provide the service.</p><p>Note: the intermediary/broker can also be the PSP.</p>                                                                                                                                                          |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soap:Envelope>
  <soap:Body>
    <ns3:demandPaymentNoticeReq>
      <idPSP>88888888888</idPSP>
      <idBrokerPSP>88888888888</idBrokerPSP>
      <idChannel>88888888888_01</idChannel>
      <password>**********</password>
      <idSoggettoServizio>00003</idServizio>
      <datiSpecificiServizio>Service data base64 encoded</datiSpecificiServizio>
    </ns3:demandPaymentNoticeReq>
  </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <ppt:demandPaymentNoticeRes>
      <outcome>OK</outcome>
      <qrCode>
        <fiscalCode>77777777778</fiscalCode>
        <noticeNumber>311111111112222222</noticeNumber>
      </qrCode>
      <paymentList>
        <paymentOptionDescription>
          <amount>30.00</amount>
          <options>EQ</options>
          <paymentNote>test</paymentNote>
        </paymentOptionDescription>
      </paymentList>
      <paymentDescription>payment</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
    </ppt:demandPaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, only entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* qrCode: it is composed of the fiscalCode and noticeNumber, data entered only the case of an OK _outcome_
  * fiscalCode: fiscal code of the EC
  * noticeNumber: \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]
* paymentList: structure that contains details of the payment, at the moment it can contain only one _paymentOptionDescription_, a value is inserted in the case of an OK _outcome_
  * paymentOptionDescription﹡
    * amount﹡: amount in euros
    * options﹡: at the moment it is set to _EQ_
    * dueDate: payment due date according to the format ISO 8601 \[YYYY]-\[MM]-\[DD]
    * paymentNote: free text for describing the subject of the payment
* paymentDescription: free text for describing the subject of the payment, a value is entered only in case of an OK\_outcome\_
* fiscalCodePA: fiscal code of the EC, a value is entered only in the case of an OK _outcome_
* companyName: complete name of the EC, a value is entered only in the case of an OK _outcome_
* officeName: complete name of the office of the EC
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## paDemandPaymentNotice

## paDemandPaymentNotice

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                    | Type   | Description                                                                                                                                                                                                  |
| ------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| idPA<mark style="color:red;">\*</mark>                  | String | Fiscal code of the structure that sends the payment request                                                                                                                                                  |
| datiSpecificiServizio<mark style="color:red;">\*</mark> | String | They are recorded in the service catalog, which is the repository that contains the list of generalized services activated by the ECs, sent in base64 format.                                                |
| idServizio<mark style="color:red;">\*</mark>            | String | Identifier of the service for which the payment is to be activated.                                                                                                                                          |
| idStation<mark style="color:red;">\*</mark>             | String | Identifier of the EC's station in the pagoPa system                                                                                                                                                          |
| idBrokerPA<mark style="color:red;">\*</mark>            | String | Identifier of the entity that operates as an intermediary for the EC                                                                                                                                         |
| idSoggettoServizio<mark style="color:red;">\*</mark>    | String | Identifier of the association between the service and EC for which the payment is to be activated. Corresponds to the tag elencoSoggettiEroganti.soggettoErogante.idSoggettoServizio of the Service Catalog. |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <ppt:paDemandPaymentNoticeReq>
      <idPA>77777777777</idPA>
      <idBrokerPA>77777777777</idBrokerPA>
      <idStation>77777777777_01</idStation>
      <idServizio>00002</idServizio>
      <idSoggettoServizio>00003</idSoggettoServizio>       
      <datiSpecificiServizio>Service data base64 encoded</datiSpecificiServizio>
    </ppt:paDemandPaymentNoticeReq>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
  <soapenv:Body>
    <ns5:paDemandPaymentNoticeRes">
      <outcome>OK</outcome>
      <qrCode>
        <fiscalCode>77777777778</fiscalCode>
        <noticeNumber>311111111112222222</noticeNumber>
      </qrCode>
      <paymentList>
        <paymentOptionDescription>
          <amount>30.00</amount>
          <options>EQ</options>
          <paymentNote>test</paymentNote>
        </paymentOptionDescription>
      </paymentList>
      <paymentDescription>payment</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
    </ns5:paDemandPaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, only entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* qrCode: it is composed of the fiscalCode and noticeNumber, data entered only the case of an OK _outcome_
  * fiscalCode: fiscal code of the EC
  * noticeNumber: \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]
* paymentList: structure that contains details of the payment, at the moment it can contain only one _paymentOptionDescription_, a value is inserted in the case of an OK _outcome_
  * paymentOptionDescription﹡
    * amount﹡: amount in euros
    * options﹡: at the moment it is set to _EQ_
    * dueDate: payment due date according to the format ISO 8601 \[YYYY]-\[MM]-\[DD]
    * paymentNote: free text for describing the subject of the payment
* paymentDescription: free text for describing the subject of the payment, a value is entered only in case of an OK\_outcome\_
* fiscalCodePA: fiscal code of the EC, a value is entered only in the case of an OK _outcome_
* companyName: complete name of the EC, a value is entered only in the case of an OK _outcome_
* officeName: complete name of the office of the EC
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoInviaFlussoRendicontazione

## nodoInviaFlussoRendicontazione

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                             | Type   | Description                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoPSP<mark style="color:red;">\*</mark>              | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p> |
| xmlRendicontazione<mark style="color:red;">\*</mark>             | String | Contains the transfer flow in base64 format.                                                                                                                                                                                                                                    |
| dataOraFlusso<mark style="color:red;">\*</mark>                  | String | Date and time of the reporting flow.                                                                                                                                                                                                                                            |
| identificativoFlusso<mark style="color:red;">\*</mark>           | String | Identifier of the reporting flow                                                                                                                                                                                                                                                |
| identificativoDominio<mark style="color:red;">\*</mark>          | String | Fiscal code of the EC                                                                                                                                                                                                                                                           |
| password<mark style="color:red;">\*</mark>                       | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                           |
| identificativoCanale<mark style="color:red;">\*</mark>           | String | <p>Identifier of the channel, identifies a payment service category and is used to perform the transaction.</p><p>A channel identifier belongs to a single PSP intermediary/broker and as a result must be unique with respect to the PSP.</p>                                  |
| identificativoIntermediarioPSP<mark style="color:red;">\*</mark> | String | <p>Identifier of the intermediary, assigned by PagoPA.</p><p>Identification of the intermediary/broker of the PSP that provides access (channel) to the PSP to provide the service.</p><p>Note: the intermediary/broker can also be the PSP.</p>                                |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soap:Envelope>
    <soap:Body>
        <ns5:nodoInviaFlussoRendicontazione>
            <identificativoPSP>88888888888</identificativoPSP>
            <identificativoIntermediarioPSP>88888888888</identificativoIntermediarioPSP>
            <identificativoCanale>88888888888_01</identificativoCanale>
            <password>**********</password>
            <identificativoDominio>77777777777</identificativoDominio>
            <identificativoFlusso>2021-11-2188888888888-AABB648200001295</identificativoFlusso>
            <dataOraFlusso>2021-11-22T00:37:32</dataOraFlusso>
            <xmlRendicontazione>Transfer flow base64 encoded</xmlRendicontazione>
        </ns5:nodoInviaFlussoRendicontazione>
    </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
        <ppt:nodoInviaFlussoRendicontazioneRisposta>
            <esito>OK</esito>
        </ppt:nodoInviaFlussoRendicontazioneRisposta>
    </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, only entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoChiediElencoFlussiRendicontazione

## nodoChiediElencoFlussiRendicontazione

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                                    | Type   | Description                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoIntermediarioPA<mark style="color:red;">\*</mark>         | String | Identifier of the entity that operates as an intermediary for the EC                                                                                                                                                                                                            |
| identificativoPSP                                                       | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p> |
| identificativoDominio                                                   | String | Fiscal code of the EC                                                                                                                                                                                                                                                           |
| password<mark style="color:red;">\*</mark>                              | String | Station password, assigned by PagoPA.                                                                                                                                                                                                                                           |
| identificativoStazioneIntermediarioPA<mark style="color:red;">\*</mark> | String | Identifier of the EC's station in the pagoPa system                                                                                                                                                                                                                             |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soap:Envelope>
    <soap:Body>
        <ns5:nodoChiediElencoFlussiRendicontazione>
            <identificativoIntermediarioPA>77777777777</identificativoIntermediarioPA>
            <identificativoStazioneIntermediarioPA>77777777777_01</identificativoStazioneIntermediarioPA>
            <password>**********</password>
            <identificativoDominio>77777777777</identificativoDominio>
            <identificativoPSP>88888888888</identificativoPSP>
        </ns5:nodoChiediElencoFlussiRendicontazione>
    </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
        <nodoChiediElencoFlussiRendicontazioneResponse>
            <esito>OK</esito>
            <elencoFlussiRendicontazione>
                <totRestituiti>1</totRestituiti>
                <idRendicontazione>
                    <identificativoFlusso>2021-11-2188888888888-AABB648200001295</identificativoFlusso>
                    <dataOraFlusso>2021-11-22T00:37:32</dataOraFlusso>
                </idRendicontazione>
            </elencoFlussiRendicontazione>
        </nodoChiediElencoFlussiRendicontazioneResponse>
    </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, only entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* elencoFlussiRendicontazione: list of the transfer flows, a value is entered only in case of an OK _outcome_
  * totRestituiti: number of flows present in the list
  * idRendicontazione
    * identificativoFlusso: identifier of the reporting flow
    * dataOraFlusso: date and time of the reporting flow
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoChiediFlussoRendicontazione

## nodoChiediFlussoRendicontazione

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                                    | Type   | Description                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoIntermediarioPA<mark style="color:red;">\*</mark>         | String | Identifier of the entity that operates as an intermediary for the EC                                                                                                                                                                                                            |
| identificativoFlusso<mark style="color:red;">\*</mark>                  | String | Identifier of the reporting flow                                                                                                                                                                                                                                                |
| identificativoPSP                                                       | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p> |
| identificativoDominio                                                   | String | Fiscal code of the EC                                                                                                                                                                                                                                                           |
| password<mark style="color:red;">\*</mark>                              | String | Station password, assigned by PagoPA.                                                                                                                                                                                                                                           |
| identificativoStazioneIntermediarioPA<mark style="color:red;">\*</mark> | String | Identifier of the EC's station in the pagoPa system                                                                                                                                                                                                                             |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soap:Envelope>
    <soap:Body>
        <nodoChiediElencoFlussiRendicontazione>
            <identificativoIntermediarioPA>77777777777</identificativoIntermediarioPA>
            <identificativoStazioneIntermediarioPA>77777777777_01</identificativoStazioneIntermediarioPA>
            <password>**********</password>
            <identificativoDominio>77777777777</identificativoDominio>
            <identificativoPSP>88888888888</identificativoPSP>
            <identificativoFlusso>2021-11-2188888888888-AABB648200001295</identificativoFlusso>
        </nodoChiediElencoFlussiRendicontazione>
    </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
        <nodoChiediFlussoRendicontazioneResponse>
            <esito>OK</esito>
            <xmlRendicontazione>Transfer flow base64 encoded</xmlRendicontazione>
        </nodoChiediFlussoRendicontazioneResponse>
    </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, only entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlRendicontazione: contains the transfer flow in base64 format, a value is entered only in case of an OK _outcome_
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoChiediCatalogoServizi

## nodoChiediCatalogoServizi version 2

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                             | Type   | Description                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoPSP<mark style="color:red;">\*</mark>              | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p> |
| identificativoDominio                                            | String | Fiscal code of the EC                                                                                                                                                                                                                                                           |
| password<mark style="color:red;">\*</mark>                       | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                           |
| identificativoCanale<mark style="color:red;">\*</mark>           | String | <p>Identifier of the channel, identifies a payment service category and is used to perform the transaction.</p><p>A channel identifier belongs to a single PSP intermediary/broker and as a result must be unique with respect to the PSP.</p>                                  |
| identificativoIntermediarioPSP<mark style="color:red;">\*</mark> | String | <p>Identifier of the intermediary, assigned by PagoPA.</p><p>Identification of the intermediary/broker of the PSP that provides access (channel) to the PSP to provide the service.</p><p>Note: the intermediary/broker can also be the PSP.</p>                                |
| category                                                         | String | Filter based on the service category.                                                                                                                                                                                                                                           |
| commission                                                       | String | Filter based on the recommendation whether or not to apply the commissions entered by the EC that created the service.                                                                                                                                                          |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soap:Envelope>
    <soap:Body>
        <ns5:nodoChiediCatalogoServizi>
            <identificativoPSP>88888888888</identificativoPSP>
            <identificativoIntermediarioPSP>88888888888</identificativoIntermediarioPSP>
            <identificativoCanale>88888888888_01</identificativoCanale>
            <password>**********</password>
            <identificativoDominio>77777777777</identificativoDominio>
            <categoria>Donations</categoria>
            <commissione>N</commissione>
        </ns5:nodoChiediCatalogoServizi>
    </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
        <nodoChiediCatalogoServizi>
            <esito>OK</esito>
            <xmlCatalogoServizi>Service catalog base64 encoded</xmlCatalogoServizi>
        </nodoChiediCatalogoServizi>
    </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, only entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlCatalogoServizi: contains the service catalog in base64 format, a value is entered only in case of an OK _outcome_
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoChiediTemplateInformativaPSP

## nodoChiediTemplateInformativaPSP

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                             | Type   | Description                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoPSP<mark style="color:red;">\*</mark>              | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the BIC (Bank Identifier Code) of the PSP.</p><p>If the BIC is not available, or to manage particular situations, another code can be used providing that it uniquely identifies the PSP.</p> |
| identificativoIntermediarioPSP<mark style="color:red;">\*</mark> | String | <p>Identifier of the intermediary, assigned by PagoPA.</p><p>Identification of the intermediary/broker of the PSP that provides access (channel) to the PSP to provide the service.</p><p>Note: the intermediary/broker can also be the PSP.</p>                                |
| identificativoCanale<mark style="color:red;">\*</mark>           | String | <p>Identifier of the channel, identifies a payment service category and is used to perform the transaction.</p><p>A channel identifier belongs to a single PSP intermediary/broker and as a result must be unique with respect to the PSP.</p>                                  |
| password<mark style="color:red;">\*</mark>                       | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                           |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soap:Envelope>
    <soap:Body>
        <ns5:nodoChiediTemplateInformativaPSP>
            <identificativoPSP>88888888888</identificativoPSP>
            <identificativoIntermediarioPSP>88888888888</identificativoIntermediarioPSP>
            <identificativoCanale>88888888888_01</identificativoCanale>
            <password>**********</password>
        </ns5:nodoChiediTemplateInformativaPSP>
    </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
        <nodoChiediTemplateInformativaPSP>
            <esito>OK</esito>
            <xmlTemplateInformativa>Information template base64 encoded</xmlTemplateInformativa>
        </nodoChiediTemplateInformativaPSP>
    </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ the result of the operation that can contain the following codes
  * **OK** : operation performed successfully
  * **KO** : operation completed with an error
* _fault_: all the details of the error, only entered if the _outcome_ is KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlTemplateInformativa: template of the information in base64 format, a value is entered only in case of an OK _outcome_
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## EC Checkout API

{% swagger src="../.gitbook/assets/checkout (5).yaml" path="/carts" method="post" %}
[checkout (5).yaml](<../.gitbook/assets/checkout (5).yaml>)
{% endswagger %}

## New APIs - Reporting Flow Management

For the EC:

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml" path="/organizations/{organizationId}/fdrs/{fdr}/revisions/{revision}/psps/{pspId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml" path="/organizations/{organizationId}/fdrs/{fdr}/revisions/{revision}/psps/{pspId}/payments" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml" path="/organizations/{organizationId}/fdrs" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml" path="/info" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml)
{% endswagger %}

For the PSPs:

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/info" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}/payments/add" method="put" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}/publish" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/created/fdrs/{fdr}/organizations/{organizationId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/published/fdrs/{fdr}/revisions/{revision}/organizations/{organizationId}/payments" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}" method="delete" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/published/fdrs/{fdr}/revisions/{revision}/organizations/{organizationId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/created" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}/payments/del" method="put" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/created/fdrs/{fdr}/organizations/{organizationId}/payments" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/published" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

## getOrganizationReceipt

Recovery of the receipt via the `IUR` code

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml" path="/organizations/{organizationfiscalcode}/receipts/{iur}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml)
{% endswagger %}

Recovery of the receipt via the `IUV` codes

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml" path="/organizations/{organizationfiscalcode}/receipts/{iur}/paymentoptions/{iuv}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml)
{% endswagger %}

## paCreatePosition

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1_01/openapi/paCreatePosition.yaml" path="/paCreatePosition" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1_01/openapi/paCreatePosition.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1_01/openapi/paCreatePosition.yaml)
{% endswagger %}
