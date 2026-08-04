---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/primitive/ente-creditore/api-soap
---

# SOAP API

For error handling, refer to [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").

{% hint style="info" %}
Fields marked with ﹡are mandatory
{% endhint %}

For details see [https://github.com/pagopa/pagopa-api/tree/SANP3.12.0](https://github.com/pagopa/pagopa-api/tree/SANP3.12.0)

## paVerifyPaymentNotice

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name           | Type   | Description                                                                                                                                                                                                                                                         |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA\*         | String | tax code of the entity sending the payment request                                                                                                                                                                                                                  |
| idBrokerPA\*   | String | identifier of the subject acting as an intermediary for the EC                                                                                                                                                                                                      |
| idStation\*    | String | identifier of the EC station in the pagoPA system                                                                                                                                                                                                                   |
| qrCode\*       | String | is composed of _fiscalCode_ and _noticeNumber_                                                                                                                                                                                                                      |
| fiscalCode\*   | String | tax code of the EC                                                                                                                                                                                                                                                  |
| noticeNumber\* | String | [auxDigit][segregationCode][IUVBase][IUVCheckDigit] |

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

- _outcome_\*:_ the result of the operation, which may contain the following codes
  - **OK**: operation successfully completed
  - **KO**: operation terminated with an error
- _fault_: all the error details, mandatory in case of KO _outcome_ [Error Management](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- paymentList: a structure containing payment details, it can currently contain only one _paymentOptionDescription_, which must be included in case of an OK _outcome_
  - paymentOptionDescription\*
    - amount\*: amount in euros
    - options\*: must currently be set to _EQ_
    - dueDate: payment expiration date in ISO 8601 format [YYYY]-[MM]-[DD]
    - detailDescription: free text describing the purpose of the payment
    - allCCP\*: if TRUE, indicates that all wire transfers can be associated with postal IBANs
- paymentDescription: free text describing the object of payment, to be entered mandatorily in case of _outcome_ OK
- fiscalCodePA: the EC's tax code, mandatory in the case of an OK _outcome_
- companyName: full name of the EC, which must be entered in the event of an OK _outcome_
- officeName: full name of the EC office
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## paGetPayment <a href="#pagetpayment" id="pagetpayment"></a>

## paGetPayment version 1

<mark style="color:green;">`POST`</mark>

#### Request Body

<table><thead><tr><th width="370">Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>idPA*</td><td>String</td><td>Tax code of the entity sending the payment request.</td></tr><tr><td>dueDate</td><td>String</td><td><p>If present, it represents the payment due date according to the ISO 8601 format [YYYY]-[MM]-[DD].</p><p>For more information, see the <a href="../../../ente-creditore/modalita-dintegrazione/best-practice.md">Best Practices.</a></p></td></tr><tr><td>transferType</td><td>String</td><td>Allowed value: POSTAL.</td></tr><tr><td>paymentNote</td><td>String</td><td>Payment description. Populated with <em>idCart</em>, if the parameter is populated in the <a data-mention href="../../../casi-duso/pagamento-presso-frontend-dellec.md">payment-at-the-ec-frontend.md</a></td></tr><tr><td>amount</td><td>String</td><td>Payment amount in euros.</td></tr><tr><td>noticeNumber*</td><td>String</td><td>[auxDigit][segregationCode][IUVBase][IUVCheckDigit]</td></tr><tr><td>fiscalCode*</td><td>String</td><td>EC tax code.</td></tr><tr><td>qrCode*</td><td>String</td><td>It consists of <em>fiscalCode</em> and <em>noticeNumber.</em></td></tr><tr><td>idStation*</td><td>String</td><td>Identifier of the EC station in the pagoPA system.</td></tr><tr><td>idBrokerPA*</td><td>String</td><td>Identifier of the subject acting as an intermediary for the EC.</td></tr></tbody></table>

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

- _outcome_\*:_ the result of the operation, which may contain the following codes
  - **OK**: operation successfully completed
  - **KO**: operation terminated with an error
- _fault_: all the error details, mandatory in case of KO _outcome_ [Error Management](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- data: all payment details, to be entered mandatorily in case of _outcome_ OK
  - _creditorReferenceId_\*: **IUV** Unique Payment Identifier
  - _paymentAmount_\*: amount, must be equal to the sums of _TransferAmount_ in the _TransferList_
  - _dueDate_\*: payment expiration date in ISO 8601 format [YYYY]-[MM]-[DD]
  - retentionDate: timestamp indicating the end of the retention period of payment information by the Node
  - lastPayment
  - description\*: free text describing the purpose of the payment
  - companyName: full name of the EC
  - officeName: full name of the EC's office
  - debtor\*: identifies the debtor to whom the debt position refers
    - uniqueIdentifier\*
      - entityUniqueIdentifierType\*
        - **F**: Natural person
        - **G**: Legal person
      - entityUniqueIdentifierValue\*: tax code or VAT number; if not available, 'ANONYMOUS' can be used
    - fullName\*: full name of the debtor
    - streetName: address
    - civicNumber: street number
    - postalCode: postal code
    - city: city
    - stateProvinceRegion: region
    - country: country
    - e-mail
  - transferList\*: structure that contains the details of the _transfers_; at the moment, up to 5 _transfers_ can be inserted, and there must be at least _1_
    - transfer\*
      - idTransfer\*: index of the list (from 1 to 5)
      - transferAmount\*: amount
      - fiscalCodePA\*: EC tax code
      - IBAN\*: IBAN to which the payment will be transferred
      - remittanceInformation\*: reason for payment
      - transferCategory\*: taxonomic code, composed of _Creditor Entity type code + Macro-area progressive + Service type code + Legal reason_ (e.g.  **0101002IM** )
  - metadata: is a key/value storage field for the exclusive use of the EC. The data will be entered in the _receipt_ (_paSendRT_)
    - mapEntry\*
      - key\*
      - value\*
        {% endtab %}
        {% endtabs %}
        {% endtab %}
        {% endtabs %}

## paGetPayment version 2

<mark style="color:green;">`POST`</mark>

**In this version it is possible to insert metadata in each individual&#x20;**_**transfer**_**, it is also possible to manage the @e.bollo service.**

#### Request Body

| Name           | Type   | Description                                                                                                                                                                                                                                                         |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA\*         | String | Tax code of the entity sending the payment request.                                                                                                                                                                                                 |
| idBrokerPA\*   | String | Identifier of the subject acting as an intermediary for the EC.                                                                                                                                                                                     |
| idStation\*    | String | Identifier of the EC station in the pagoPA system.                                                                                                                                                                                                  |
| qrCode\*       | String | It consists of _fiscalCode_ and _noticeNumber._                                                                                                                                                                                                     |
| amount\*       | String | Payment amount in Euro                                                                                                                                                                                                                                              |
| paymentNote    | String | Payment description. Populated with _idCart_, if the parameter is populated in the [payment-at-ec-frontend.md](../../../casi-duso/pagamento-presso-frontend-dellec.md "mention")                                                    |
| transferType   | String | <p>Allowed values</p><p>POSTAL</p><p>PAGOPA</p>                                                                                                                                                                                                                     |
| dueDate        | String | <p>If present, it represents the payment due date according to the ISO 8601 format [YYYY]-[MM]-[DD].</p><p>For more information, see the <a href="../../../ente-creditore/modalita-dintegrazione/best-practice.md">Best Practices</a>.</p>                          |
| fiscalCode\*   | String | tax code of the EC                                                                                                                                                                                                                                                  |
| noticeNumber\* | String | [auxDigit][segregationCode][IUVBase][IUVCheckDigit] |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}

```xml
<soapenv:Envelope>
    <soapenv:Body>
      <pafn:paGetPaymentV2Request>
        <idPA>77777777777</idPA>
        <idBrokerPA>77777777777</idBrokerPA>
        <idStation>77777777777_01</idStation>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
        <amount>30.00</amount>
      </pafn:paGetPaymentV2Request>
    </soapenv:Body>
  </soapenv:Envelope>         
```

{% endtab %}

{% tab title="Response example" %}

```xml
<soapenv:Envelope>
  <soapenv:Header />
  <soapenv:Body>
    <paf:paGetPaymentV2Response>
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
    </paf:paGetPaymentV2Response>
  </soapenv:Body>
</soapenv:Envelope>
```

{% endtab %}

{% tab title="Response schema" %}

- _outcome_\*:_ the result of the operation, which may contain the following codes
  - **OK**: operation successfully completed
  - **KO**: operation terminated with an error
- _fault_: all the error details, mandatory in case of KO _outcome_ [Error Management](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- data: all payment details, to be entered mandatorily in case of _outcome_ OK
  - _creditorReferenceId_\*: **IUV** Unique Payment Identifier
  - _paymentAmount_\*: amount, must be equal to the sums of _TransferAmount_ in the _TransferList_
  - _dueDate_\*: indicates the payment due date according to the ISO 8601 format [YYYY]-[MM]-[DD]
  - retentionDate: timestamp indicating the end of the retention period of payment information by the Node
  - lastPayment
  - description\*: free text describing the purpose of the payment
  - companyName\*: full name of the EC
  - officeName: full name of the EC's office
  - debtor\*: identifies the debtor to whom the debt position refers
    - uniqueIdentifier\*
      - entityUniqueIdentifierType\*
        - **F**: Natural person
        - **G**: Legal person
      - entityUniqueIdentifierValue\*: tax code or VAT number; if not available, 'ANONYMOUS' can be used
    - fullName\*: full name of the debtor
    - streetName: address
    - civicNumber: street number
    - postalCode: postal code
    - city: city
    - stateProvinceRegion: region
    - country: country
    - e-mail
  - transferList\*: structure that contains the details of the _transfers_, at the moment, up to 5 _transfers_ can be inserted, at least 1 must be present
    - transfer\*
      - idTransfer\*: index of the list (from 1 to 5)
      - transferAmount\*: amount in euros
      - fiscalCodePA\*: EC tax code
      - companyName\*: full name of the EC
      - **CHOICE** \*
        - IBAN: IBAN to which the payment will be transferred
        - richiestaMarcaDaBollo: the data of the request for the tax stamp
          - _tipoBollo_: type of stamp
          - _hashDocumento_: contains the computer fingerprint (digest), in base64 format, of the computer document or protocol signature with which the digital revenue stamp is associated
          - _provinciaResidenza_: vehicle code of the payer's province of residence
      - remittanceInformation\*: reason for payment
      - transferCategory\*: taxonomic code, composed of _Creditor Entity type code + Macro-area progressive + Service type code + Legal reason_ (e.g.  **0101002IM** )
      - metadata: is a key/value storage field. The data will be entered in the _receipt_ (_paSendRT_)
        - mapEntry\*
          - key\*
          - value\*
  - metadata: is a key/value storage field. The data will be entered in the _receipt_ (_paSendRT_)
    - mapEntry\*
      - key\*
      - value\*
        {% endtab %}
        {% endtabs %}
        {% endtab %}
        {% endtabs %}

## paSendRT <a href="#pasendrt" id="pasendrt"></a>

## paSendRT version 1

<mark style="color:green;">`POST`</mark>

#### Request Body

<table><thead><tr><th>Name</th><th width="223">Type</th><th>Description</th></tr></thead><tbody><tr><td>idPA*</td><td>String</td><td>tax code of the entity sending the payment request</td></tr><tr><td>idBrokerPA*</td><td>String</td><td>identifier of the subject acting as an intermediary for the EC</td></tr><tr><td>idStation*</td><td>String</td><td>identifier of the EC station in the pagoPA system</td></tr><tr><td>receipt*</td><td>String</td><td>the payment receipt</td></tr><tr><td>receiptId*</td><td>String</td><td>unique identifier of the <em>receipt</em> contains the <em>paymentToken</em> assigned by pagoPa</td></tr><tr><td>noticeNumber*</td><td>String</td><td>[auxDigit][segregationCode][IUVBase][IUVCheckDigit]</td></tr><tr><td>fiscalCode*</td><td>String</td><td>tax code of the EC</td></tr><tr><td>outcome*</td><td>String</td><td>the result of the operation that may contain the codes OK or KO</td></tr><tr><td>creditorReferenceId*</td><td>String</td><td><strong>IUV</strong> <em>Unique Payment Identifier</em></td></tr><tr><td>paymentAmount*</td><td>String</td><td>amount expressed in euros</td></tr><tr><td>description*</td><td>String</td><td></td></tr><tr><td>companyName</td><td>String</td><td>full name of the EC</td></tr><tr><td>officeName</td><td>String</td><td></td></tr><tr><td>debtor*</td><td>String</td><td>identifies the debtor to whom the debt position refers</td></tr><tr><td>uniqueIdentifier*</td><td>String</td><td></td></tr><tr><td>entityUniqueIdentifierType*</td><td>String</td><td><p><strong>F</strong>: Natural person</p><p><strong>G</strong>: Legal person</p></td></tr><tr><td>entityUniqueIdentifierValue*</td><td>String</td><td>tax code or VAT number</td></tr><tr><td>e-mail</td><td>String</td><td></td></tr><tr><td>country</td><td>String</td><td></td></tr><tr><td>stateProvinceRegion</td><td>String</td><td></td></tr><tr><td>city</td><td>String</td><td></td></tr><tr><td>postalCode</td><td>String</td><td></td></tr><tr><td>civicNumber</td><td>String</td><td></td></tr><tr><td>streetName</td><td>String</td><td></td></tr><tr><td>fullName*</td><td>String</td><td>full name of the debtor</td></tr><tr><td>transferList*</td><td>String</td><td>structure containing the details of the <em>transfers</em></td></tr><tr><td>transfer*</td><td>String</td><td></td></tr><tr><td>idTransfer*</td><td>String</td><td>index of the list (from 1 to 5)</td></tr><tr><td>fiscalCodePA*</td><td>String</td><td>tax code of the EC</td></tr><tr><td>transferAmount*</td><td>String</td><td>amount</td></tr><tr><td>IBAN*</td><td>String</td><td>IBAN to which the payment will be transferred</td></tr><tr><td>remittanceInformation*</td><td>String</td><td>reason for payment</td></tr><tr><td>transferCategory*</td><td>String</td><td>taxonomic code, composed of <em>Creditor Entity type code + Macro-area progressive + Service type code + Legal reason</em> (e.g.  <strong>0101002IM</strong> )</td></tr><tr><td>idPSP*</td><td>String</td><td>the PSP identifier</td></tr><tr><td>pspFiscalCode</td><td>String</td><td></td></tr><tr><td>pspPartitaIVA</td><td>String</td><td></td></tr><tr><td>PSPCompanyName*</td><td>String</td><td></td></tr><tr><td>idChannel*</td><td>String</td><td></td></tr><tr><td>channelDescription*</td><td>String</td><td></td></tr><tr><td>payer</td><td>String</td><td>identifies the payer</td></tr><tr><td>uniqueIdentifier*</td><td></td><td></td></tr><tr><td>entityUniqueIdentifierType*</td><td>String</td><td><p><strong>F</strong>: Natural person</p><p><strong>G</strong>: Legal person</p></td></tr><tr><td>entityUniqueIdentifierValue*</td><td>String</td><td>tax code or VAT number</td></tr><tr><td>fullName*</td><td>String</td><td>full name of the debtor</td></tr><tr><td>streetName</td><td>String</td><td></td></tr><tr><td>civicNumber</td><td>String</td><td></td></tr><tr><td>postalCode</td><td>String</td><td></td></tr><tr><td>city</td><td>String</td><td></td></tr><tr><td>stateProvinceRegion</td><td>String</td><td></td></tr><tr><td>country</td><td>String</td><td></td></tr><tr><td>e-mail</td><td>String</td><td></td></tr><tr><td>paymentMethod</td><td>String</td><td></td></tr><tr><td>fee</td><td>String</td><td>amount of the commission expressed in euros</td></tr><tr><td>paymentDateTime</td><td>String</td><td>payment date and time</td></tr><tr><td>applicationDate</td><td>String</td><td>application date</td></tr><tr><td>transferDate</td><td>String</td><td>date of transfer</td></tr><tr><td>metadata</td><td>String</td><td></td></tr><tr><td>mapEntry*</td><td></td><td></td></tr><tr><td>key*</td><td>String</td><td></td></tr><tr><td>value*</td><td>String</td><td>the PSP identifier</td></tr><tr><td>standin</td><td>Boolean</td><td>true: payment made in Stand-in</td></tr></tbody></table>

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

- _outcome_\*:_ the result of the operation, which may contain the following codes
  - **OK**: operation successfully completed
  - **KO**: operation terminated with an error
- _fault_: all the error details, mandatory in case of KO _outcome_ [Error Management](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## paSendRT version 2

<mark style="color:green;">`POST`</mark>

**In this version, metadata can be inserted into each single&#x20;**_**transfer**_**&#x20;of the&#x20;**_**receipt,**_**&#x20;in addition, information from** [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention") **and the @e.bollo service is managed.**

#### Request Body

| Name                          | Type    | Description                                                                                                                                                                                                                                                         |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA\*                        | String  | tax code of the entity sending the payment request                                                                                                                                                                                                                  |
| idBrokerPA\*                  | String  | identifier of the subject acting as an intermediary for the EC                                                                                                                                                                                                      |
| idStation\*                   | String  | identifier of the EC station in the pagoPA system                                                                                                                                                                                                                   |
| receipt\*                     | String  | the payment receipt                                                                                                                                                                                                                                                 |
| receiptId\*                   | String  | unique identifier of the _receipt_ contains the _paymentToken_ assigned by pagoPa                                                                                                                                                                                   |
| noticeNumber\*                | String  | [auxDigit][segregationCode][IUVBase][IUVCheckDigit] |
| fiscalCode\*                  | String  | tax code of the EC                                                                                                                                                                                                                                                  |
| outcome\*                     | String  | the result of the operation that may contain the codes OK or KO                                                                                                                                                                                                     |
| creditorReferenceId\*         | String  | **IUV** _Unique Payment Identifier_                                                                                                                                                                                                                                 |
| paymentAmount\*               | String  | amount expressed in euros                                                                                                                                                                                                                                           |
| description\*                 | String  |                                                                                                                                                                                                                                                                     |
| companyName\*                 | String  | full name of the EC                                                                                                                                                                                                                                                 |
| officeName                    | String  |                                                                                                                                                                                                                                                                     |
| debtor\*                      | String  | identifies the debtor to whom the debt position refers                                                                                                                                                                                                              |
| uniqueIdentifier\*            | String  |                                                                                                                                                                                                                                                                     |
| entityUniqueIdentifierType\*  | String  | <p><strong>F</strong>: Natural person</p><p><strong>G</strong>: Legal person</p>                                                                                                                                                                                    |
| entityUniqueIdentifierValue\* | String  | tax code or VAT number                                                                                                                                                                                                                                              |
| fullName\*                    | String  | full name of the debtor                                                                                                                                                                                                                                             |
| streetName                    | String  |                                                                                                                                                                                                                                                                     |
| civicNumber                   | String  |                                                                                                                                                                                                                                                                     |
| postalCode                    | String  |                                                                                                                                                                                                                                                                     |
| city                          | String  |                                                                                                                                                                                                                                                                     |
| stateProvinceRegion           | String  |                                                                                                                                                                                                                                                                     |
| country                       | String  |                                                                                                                                                                                                                                                                     |
| e-mail                        | String  |                                                                                                                                                                                                                                                                     |
| transferList\*                | String  | structure containing the details of the _transfers_                                                                                                                                                                                                                 |
| transfer\*                    | String  |                                                                                                                                                                                                                                                                     |
| idTransfer\*                  | String  | index of the list (from 1 to 5)                                                                                                                                                                                                                  |
| transferAmount\*              | String  | amount                                                                                                                                                                                                                                                              |
| fiscalCodePA\*                | String  | tax code of the EC                                                                                                                                                                                                                                                  |
| companyName                   | String  | full name of the EC                                                                                                                                                                                                                                                 |
| IBAN                          | String  | IBAN to which the payment will be transferred                                                                                                                                                                                                                       |
| remittanceInformation\*       | String  | reason for payment                                                                                                                                                                                                                                                  |
| transferCategory\*            | String  | taxonomic code, composed of _Creditor Entity type code + Macro-area progressive + Service type code + Legal reason_ (e.g.  **0101002IM** )                                                                       |
| metadata                      | String  |                                                                                                                                                                                                                                                                     |
| mapEntry                      | String  |                                                                                                                                                                                                                                                                     |
| key                           | String  |                                                                                                                                                                                                                                                                     |
| value\*                       | String  |                                                                                                                                                                                                                                                                     |
| idPSP\*                       | String  | the PSP identifier                                                                                                                                                                                                                                                  |
| pspFiscalCode                 | String  |                                                                                                                                                                                                                                                                     |
| pspPartitaIVA                 | String  |                                                                                                                                                                                                                                                                     |
| PSPCompanyName\*              | String  |                                                                                                                                                                                                                                                                     |
| idChannel\*                   | String  |                                                                                                                                                                                                                                                                     |
| channelDescription\*          | String  |                                                                                                                                                                                                                                                                     |
| payer                         | String  | identifies the payer                                                                                                                                                                                                                                                |
| uniqueIdentifier\*            | String  |                                                                                                                                                                                                                                                                     |
| entityUniqueIdentifierType\*  | String  | <p><strong>F</strong>: Natural person</p><p><strong>G</strong>: Legal person</p>                                                                                                                                                                                    |
| entityUniqueIdentifierValue\* | String  | tax code or VAT number                                                                                                                                                                                                                                              |
| fullName\*                    | String  | full name of the debtor                                                                                                                                                                                                                                             |
| streetName                    | String  |                                                                                                                                                                                                                                                                     |
| civicNumber                   | String  |                                                                                                                                                                                                                                                                     |
| postalCode                    | String  |                                                                                                                                                                                                                                                                     |
| city                          | String  |                                                                                                                                                                                                                                                                     |
| stateProvinceRegion           | String  |                                                                                                                                                                                                                                                                     |
| country                       | String  |                                                                                                                                                                                                                                                                     |
| e-mail                        | String  |                                                                                                                                                                                                                                                                     |
| paymentMethod                 | String  |                                                                                                                                                                                                                                                                     |
| fee                           | String  | amount of the commission expressed in euros                                                                                                                                                                                                                         |
| primaryCiIncurredFee          | String  | amount of the commission payable by the EC expressed in euros obtained from [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention")                                                                                           |
| idBundle                      | String  | identifier of the [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention") package                                                                                                                                             |
| idCiBundle                    | String  | identifier of the attributes added by the EC to the [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention") package                                                                                                           |
| paymentDateTime               | String  | date and time of payment                                                                                                                                                                                                                                            |
| applicationDate               | String  | application date                                                                                                                                                                                                                                                    |
| transferDate                  | String  | transfer date                                                                                                                                                                                                                                                       |
| metadata                      | String  |                                                                                                                                                                                                                                                                     |
| mapEntry                      | String  |                                                                                                                                                                                                                                                                     |
| key                           | String  |                                                                                                                                                                                                                                                                     |
| value                         | String  |                                                                                                                                                                                                                                                                     |
| CHOICE\*                      | String  | Choice between IBAN and marcaDaBollo                                                                                                                                                                                                                                |
| tipoBollo                     | String  | Stamp duty type                                                                                                                                                                                                                                                     |
| marcaDaBollo                  | String  | The digital stamp duty data                                                                                                                                                                                                                                         |
| MBDAttachment                 | String  | The XML document containing the digital stamp duty, in base64 format.                                                                                                                                                                               |
| paymentNote                   | String  | Description of the payment. Set with _idCart_, if the parameter is set in the [pagamento-presso-frontend-dellec.md](../../../casi-duso/pagamento-presso-frontend-dellec.md "mention")                                               |
| standin                       | Boolean | true: payment made in Stand-in                                                                                                                                                                                                                      |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}

```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <pafn:paSendRTV2Request>
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
      </pafn:paSendRTV2Request>
    </soapenv:Body>
  </soapenv:Envelope>
```

{% endtab %}

{% tab title="Response example" %}

```xml
<soapenv:Envelope>
  <soapenv:Body>
    <paf:paSendRTV2Response>
      <outcome>OK</outcome>
    </paf:paSendRTV2Response>
  </soapenv:Body>
</soapenv:Envelope>
```

{% endtab %}

{% tab title="Response schema" %}

- _outcome_\*:_ the result of the operation, which can contain the following codes
  - **OK**: operation completed successfully
  - **KO**: operation terminated with an error
- _fault_: all error details, mandatory in case of a KO _outcome_ [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## paDemandPaymentNotice

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                    | Type   | Description                                                                                                                                                                                                                                          |
| ----------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA\*                  | String | Tax code of the entity sending the payment request.                                                                                                                                                                                  |
| datiSpecificiServizio\* | String | They are registered in the Service Catalogue, which is the repository containing the list of generalized services activated by ECs, sent in base64 format.                                                                           |
| idServizio\*            | String | Identifier of the service for which the payment is to be activated.                                                                                                                                                                  |
| idStation\*             | String | Identifier of the EC's station in the pagoPa system.                                                                                                                                                                                 |
| idBrokerPA\*            | String | Identifier of the entity acting as an intermediary for the EC.                                                                                                                                                                       |
| idSoggettoServizio\*    | String | Identifier of the association between the service and the EC for which the payment is to be activated. Corresponds to the `elencoSoggettiEroganti.soggettoErogante.idSoggettoServizio` tag in the Service Catalogue. |

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
      <datiSpecificiServizio>Service-specific data base64 encoded</datiSpecificiServizio>
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

- _outcome_\*:_ the result of the operation, which can contain the following codes
  - **OK**: operation completed successfully
  - **KO**: operation terminated with an error
- _fault_: all error details, field set only in case of a KO _outcome_ [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- qrCode: composed of fiscalCode and noticeNumber, field set only in case of an OK _outcome_
  - fiscalCode: EC's tax code
  - noticeNumber: [auxDigit][segregationCode][IUVBase][IUVCheckDigit]
- paymentList: structure containing the payment details, at the moment it can contain only one _paymentOptionDescription_, field set only in case of an OK _outcome_
  - paymentOptionDescription\*
    - amount\*: amount in euros
    - options\*: currently set to _EQ_
    - dueDate: payment expiration date according to the ISO 8601 format [YYYY]-[MM]-[DD]
    - paymentNote: free text to describe the subject of the payment
- paymentDescription: free text to describe the subject of the payment, field set only in case of an OK _outcome_
- fiscalCodePA: EC's tax code, field set only in case of an OK _outcome_
- companyName: full name of the EC, field set only in case of an OK _outcome_
- officeName: full name of the EC's office
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## nodoChiediElencoFlussiRendicontazione

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                    | Type   | Description                                                                                                                                                                                                                                                    |
| --------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoIntermediarioPA\*         | String | Identifier of the entity acting as an intermediary for the EC.                                                                                                                                                                                 |
| identificativoPSP                       | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC, or to handle special situations, another code may be used, provided it uniquely identifies the PSP.</p> |
| identificativoDominio                   | String | EC's tax code.                                                                                                                                                                                                                                 |
| password\*                              | String | Station password, assigned by PagoPA.                                                                                                                                                                                                          |
| identificativoStazioneIntermediarioPA\* | String | Identifier of the EC's station in the pagoPa system.                                                                                                                                                                                           |

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

{% tab title="Response schema" %}

- _esito_\*:_ the result of the operation, which can contain the following codes
  - **OK**: operation completed successfully
  - **KO**: operation terminated with an error
- _fault_: all error details, field set only in case of a KO _esito_ [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- elencoFlussiRendicontazione: list of reconciliation flows, field set only in case of an OK _esito_
  - totRestituiti: number of flows in the list
  - idRendicontazione
    - identificativoFlusso: identifier of the Reconciliation Flow
    - dataOraFlusso: date and time of the Reconciliation Flow
      {% endtab %}
      {% endtabs %}
      {% endtab %}
      {% endtabs %}

## nodoChiediFlussoRendicontazione

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                    | Type   | Description                                                                                                                                                                                                                                                    |
| --------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoIntermediarioPA\*         | String | Identifier of the entity acting as an intermediary for the EC.                                                                                                                                                                                 |
| identificativoFlusso\*                  | String | Identifier of the Reconciliation Flow.                                                                                                                                                                                                         |
| identificativoPSP                       | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC, or to handle special situations, another code may be used, provided it uniquely identifies the PSP.</p> |
| identificativoDominio                   | String | EC's tax code.                                                                                                                                                                                                                                 |
| password\*                              | String | Station password, assigned by PagoPA.                                                                                                                                                                                                          |
| identificativoStazioneIntermediarioPA\* | String | Identifier of the EC's station in the pagoPa system.                                                                                                                                                                                           |

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
            <xmlRendicontazione>Reconciliation flow base64 encoded</xmlRendicontazione>
        </nodoChiediFlussoRendicontazioneResponse>
    </soapenv:Body>
</soapenv:Envelope>
```

{% endtab %}

{% tab title="Response schema" %}

- _esito_\*:_ the result of the operation, which can contain the following codes
  - **OK**: operation completed successfully
  - **KO**: operation terminated with an error
- _fault_: all error details, field set only in case of a KO _esito_ [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- xmlRendicontazione: content of the reconciliation flow in base64 format, field set only in case of an OK _esito_
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}
