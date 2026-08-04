---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/primitive/psp/api-soap
---

# SOAP API

For error handling, please refer to [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").

{% hint style="info" %}
Fields marked with ﹡are mandatory
{% endhint %}

For details, see [https://github.com/pagopa/pagopa-api/tree/SANP3.12.0](https://github.com/pagopa/pagopa-api/tree/SANP3.12.0)

## verifyPaymentNotice <a href="#activatepaymentnotice" id="activatepaymentnotice"></a>

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                                                 |
| ---------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>        | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC, or to handle special situations, another code can be used, provided it uniquely identifies the PSP.</p>              |
| idBrokerPSP<mark style="color:red;">\*</mark>  | String | <p>Broker identifier, assigned by PagoPA.</p><p>Identifier for the PSP's intermediary/broker that provides access (channel) to the PSP for service delivery.</p><p>Note: The intermediary/broker can be the same as the PSP itself.</p>                                     |
| idChannel<mark style="color:red;">\*</mark>    | String | <p>Channel identifier, identifies a category of payment service through which the transaction is carried out.</p><p>A channel identifier belongs to a single PSP intermediary/broker and therefore must be unique with respect to the PSP.</p>                              |
| qrCode<mark style="color:red;">\*</mark>       | String | is composed of _fiscalCode_ and _noticeNumber._                                                                                                                                                                                                             |
| fiscalCode<mark style="color:red;">\*</mark>   | String | EC's fiscal code.                                                                                                                                                                                                                                           |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit] |
| password<mark style="color:red;">\*</mark>     | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                       |

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

- _outcome_﹡_:_ the result of the operation, which can contain the following codes
  - **OK** : operation completed successfully
  - **KO** : operation ended in error
- _fault_: all error details, populated only if _outcome_ is KO [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- paymentList: structure containing the payment details, can currently contain only one _paymentOptionDescription_, populated only if _outcome_ is OK
  - paymentOptionDescription﹡
    - amount﹡: amount in euros
    - options﹡: currently populated with _EQ_
    - dueDate: payment due date in ISO 8601 format \[YYYY]-\[MM]-\[DD]
    - paymentNote: free text to describe the payment subject
- paymentDescription: free text to describe the payment subject, populated only if _outcome_ is OK
- fiscalCodePA: EC's fiscal code, populated only if _outcome_ is OK
- companyName: full name of the EC, populated only if _outcome_ is OK
- officeName: full name of the EC's office
- standin: true if payment was made in Stand-in mode
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## verificaBollettino

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                                                 |
| ---------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>        | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC, or to handle special situations, another code can be used, provided it uniquely identifies the PSP.</p>              |
| idBrokerPSP<mark style="color:red;">\*</mark>  | String | <p>Broker identifier, assigned by PagoPA.</p><p>Identifier for the PSP's intermediary/broker that provides access (channel) to the PSP for service delivery.</p><p>Note: The intermediary/broker can be the same as the PSP itself.</p>                                     |
| idChannel<mark style="color:red;">\*</mark>    | String | <p>Channel identifier, identifies a category of payment service through which the transaction is carried out.</p><p>A channel identifier belongs to a single PSP intermediary/broker and therefore must be unique with respect to the PSP.</p>                              |
| ccPost<mark style="color:red;">\*</mark>       | String | EC's postal current account.                                                                                                                                                                                                                                |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit] |
| password<mark style="color:red;">\*</mark>     | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                       |

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

- _outcome_﹡_:_ the result of the operation, which can contain the following codes
  - **OK** : operation completed successfully
  - **KO**: operation terminated with an error
- _fault_: all error details, populated only if _outcome_ is KO [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- paymentBollettinoList: structure containing payment details, can currently contain only one _paymentOptionDescription_, populated only if _outcome_ is OK
  - paymentOptionDescription﹡
    - amount﹡: amount in euros
    - options﹡: currently populated with _EQ_
    - dueDate: payment due date in ISO 8601 format \[YYYY]-\[MM]-\[DD]
    - paymentNote: free text to describe the payment subject
    - allCCP﹡: if TRUE, indicates that all wire transfers can be associated with postal IBANs
- paymentDescription: free text to describe the payment subject
- fiscalCodePA: EC's fiscal code, populated only if _outcome_ is OK
- noticeNumber: \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit], populated only if _outcome_ is OK
- companyName: full name of the EC, populated only if _outcome_ is OK
- officeName: full name of the EC's office
- standin: true if payment was made in Stand-in mode
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## activatePaymentNotice <a href="#activatepaymentnotice" id="activatepaymentnotice"></a>

## activatePaymentNotice version 1

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>        | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC, or to handle special situations, another code can be used, provided it uniquely identifies the PSP.</p>                                                  |
| idBrokerPSP<mark style="color:red;">\*</mark>  | String | <p>Broker identifier, assigned by PagoPA.</p><p>Identifier for the PSP's intermediary/broker that provides access (channel) to the PSP for service delivery.</p><p>Note: The intermediary/broker can be the same as the PSP itself.</p>                                                                         |
| idChannel<mark style="color:red;">\*</mark>    | String | <p>Channel identifier, identifies a category of payment service through which the transaction is carried out.</p><p>A channel identifier belongs to a single PSP intermediary/broker and therefore must be unique with respect to the PSP.</p>                                                                  |
| qrCode<mark style="color:red;">\*</mark>       | String | It is composed of _fiscalCode_ and _noticeNumber._                                                                                                                                                                                                                                              |
| fiscalCode<mark style="color:red;">\*</mark>   | String | EC's fiscal code.                                                                                                                                                                                                                                                                               |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                     |
| password<mark style="color:red;">\*</mark>     | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                                           |
| idempotencyKey                                 |        | Idempotency key                                                                                                                                                                                                                                                                                                 |
| expirationTime                                 | String | <p>Token expiration time (ms), max 30 minutes.</p><p>The payment token duration can be set in 2 ways:</p><p>- Implicitly by the pagoPA platform, if not set in the activatePaymentNotice request (default duration = 30 minutes)</p><p>- Explicitly by the PSP, if set in the activatePaymentNotice request</p> |
| paymentNote                                    | String | Free text to describe the payment subject                                                                                                                                                                                                                                                                       |
| dueDate                                        | String | <p>If present, it represents the payment due date in ISO 8601 format [YYYY]-[MM]-[DD].</p><p>For more information, see the <a href="../../../ente-creditore/modalita-dintegrazione/best-practice.md">Best Practices</a>.</p>                                                                                    |
| amount<mark style="color:red;">\*</mark>       | String | Amount in euros                                                                                                                                                                                                                                                                                                 |

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

- _outcome_﹡_:_ the result of the operation, which can contain the following codes
  - **OK** : operation completed successfully
  - **KO** : operation ended in error
- _fault_: all error details, populated only if _outcome_ is KO [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- totalAmount: represents the sum of the amounts of the individual transfers, populated only if _outcome_ is OK
- paymentDescription: free text to describe the payment subject, populated only if _outcome_ is OK
- fiscalCodePA: EC's fiscal code, populated only if _outcome_ is OK
- companyName: full name of the EC, populated only if _outcome_ is OK
- officeName: full name of the EC's office
- paymentToken: generated by the system during the payment activation phase, it is the correlation identifier to be matched with the payment activation and outcome, populated only if _outcome_ is OK
- transferList: structure containing the payment transfer details, currently there can be a maximum of 5 transfers, populated only if _outcome_ is OK
  - transfer﹡
    - idTransfer﹡: allowed values from 1 to 5
    - transferAmount﹡: amount in euros
    - fiscalCodePA﹡: fiscal code of the beneficiary Entity
    - IBAN﹡: IBAN to which the amount will be credited
    - remittanceInformation﹡: free text to describe the payment subject
- creditorReferenceId: **IUV** Unique Payment Identifier, populated only if _outcome_ is OK
- standin: true if payment was made in Stand-in mode
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## activatePaymentNotice version 2

<mark style="color:green;">`POST`</mark>

**In this version, it is possible to pass metadata for each **_**&#x70;ayment**_\*\* and in each individual \*\*_**transfer**_\*\* of the response. Additionally, information derived from\*\* [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention") **is handled.**

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>        | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC, or to handle special situations, another code can be used, provided it uniquely identifies the PSP.</p>                                                  |
| idBrokerPSP<mark style="color:red;">\*</mark>  | String | <p>Broker identifier, assigned by PagoPA.</p><p>Identifier for the PSP's intermediary/broker that provides access (channel) to the PSP for service delivery.</p><p>Note: The intermediary/broker can be the same as the PSP itself.</p>                                                                         |
| idChannel<mark style="color:red;">\*</mark>    | String | <p>Channel identifier, identifies a category of payment service through which the transaction is carried out.</p><p>A channel identifier belongs to a single PSP intermediary/broker and therefore must be unique with respect to the PSP.</p>                                                                  |
| qrCode<mark style="color:red;">\*</mark>       | String | It is composed of _fiscalCode_ and _noticeNumber._                                                                                                                                                                                                                                              |
| fiscalCode<mark style="color:red;">\*</mark>   | String | EC's fiscal code.                                                                                                                                                                                                                                                                               |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                     |
| password<mark style="color:red;">\*</mark>     | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                                           |
| idempotencyKey                                 |        | Idempotency key                                                                                                                                                                                                                                                                                                 |
| expirationTime                                 | String | <p>Token expiration time (ms), max 30 minutes.</p><p>The payment token duration can be set in 2 ways:</p><p>- Implicitly by the pagoPA platform, if not set in the activatePaymentNotice request (default duration = 30 minutes)</p><p>- Explicitly by the PSP, if set in the activatePaymentNotice request</p> |
| paymentNote                                    | String | Free text to describe the payment subject                                                                                                                                                                                                                                                                       |
| dueDate                                        | String | <p>If present, it represents the payment due date in ISO 8601 format [YYYY]-[MM]-[DD].</p><p>For more information, see the <a href="../../../ente-creditore/modalita-dintegrazione/best-practice.md">Best Practices.</a></p>                                                                                    |
| amount<mark style="color:red;">\*</mark>       | String | Amount in euros                                                                                                                                                                                                                                                                                                 |
| allCCP                                         | String | for internal use by PagoPA services                                                                                                                                                                                                                                                                             |
|                                                | String |                                                                                                                                                                                                                                                                                                                 |
| paymentMethod                                  | String | payment method                                                                                                                                                                                                                                                                                                  |
| touchPoint                                     | String | touchpoint used for the payment (e.g.  physical POS, ATM, etc.)                                                                                                                                                                              |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}

```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <nod:activatePaymentNoticeV2Request>
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
      </nod:activatePaymentNoticeV2Request>
    </soapenv:Body>
  </soapenv:Envelope>
```

{% endtab %}

{% tab title="Response example" %}

```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:activatePaymentNoticeV2Response>
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
    </nfpsp:activatePaymentNoticeV2Response>
  </soapenv:Body>
</soapenv:Envelope>
```

{% endtab %}

{% tab title="Response schema" %}

- _outcome_﹡_:_ the result of the operation, which can contain the following codes
  - **OK** : operation completed successfully
  - **KO** : operation ended in error
- _fault_: all error details, populated only if _outcome_ is KO [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- totalAmount: represents the sum of the amounts of the individual transfers, populated only if _outcome_ is OK
- paymentDescription: free text to describe the payment subject, populated only if _outcome_ is OK
- fiscalCodePA: EC's fiscal code, populated only if _outcome_ is OK
- companyName: full name of the EC, populated only if _outcome_ is OK
- officeName: full name of the EC's office
- paymentToken: generated by the system during the payment activation phase, it is the correlation identifier to be matched with the payment activation and outcome, populated only if _outcome_ is OK
- transferList: structure containing the payment transfer details, currently there can be a maximum of 5 transfers, populated only if _outcome_ is OK
  - transfer﹡
    - idTransfer﹡: allowed values from 1 to 5
    - transferAmount﹡: amount in euros
    - fiscalCodePA﹡: fiscal code of the beneficiary Entity
    - companyName: full name of the EC, populated only if _outcome_ is OK
    - IBAN﹡: IBAN to which the amount will be credited
    - remittanceInformation﹡: free text to describe the payment subject
    - transferCategory﹡: taxonomic code, composed of _Creditor Entity Type Code + Macro-area progressive number + Service type code + Legal reason_ (e.g.  **0101002IM** )
    - metadata: is a key/value storage field.
      - mapEntry﹡
        - key﹡
        - value﹡
- creditorReferenceId: **IUV** Unique Payment Identifier, populated only if _outcome_ is OK
- suggestedUserFee: fee amount in euros derived from [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention")
- suggestedPaFee: fee amount payable by the EC in euros, derived from [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention")
- suggestedIdBundle: identifier for the bundle from [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention")
- suggestedIdCiBundle: identifier for the attributes added by the EC to the bundle from [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention")
- standin: true if payment was made in Stand-in mode
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## sendPaymentOutcome <a href="#sendpaymentoutcome" id="sendpaymentoutcome"></a>

## sendPaymentOutcome version 1

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                          | Type   | Description                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>                       | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC, or to handle special situations, another code can be used, provided it uniquely identifies the PSP.</p> |
| details                                                       | String | Details of the operation's result, mandatory if _outcome_ is OK                                                                                                                                                                                                |
| outcome<mark style="color:red;">\*</mark>                     | String | <p>The result of the operation, which can contain the following codes</p><p><strong>OK</strong> : operation completed successfully</p><p><strong>KO</strong> : operation ended in error</p>                                                                    |
| paymentToken<mark style="color:red;">\*</mark>                | String | Generated by the system during the payment activation phase, it is the correlation identifier to be matched with the payment activation and outcome.                                                                                           |
| password<mark style="color:red;">\*</mark>                    | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                          |
| idChannel<mark style="color:red;">\*</mark>                   | String | <p>Channel identifier, identifies a category of payment service through which the transaction is carried out.</p><p>A channel identifier belongs to a single PSP intermediary/broker and therefore must be unique with respect to the PSP.</p>                 |
| idBrokerPSP<mark style="color:red;">\*</mark>                 | String | <p>Broker identifier, assigned by PagoPA.</p><p>Identifier for the PSP's intermediary/broker that provides access (channel) to the PSP for service delivery.</p><p>Note: The intermediary/broker can be the same as the PSP itself.</p>                        |
| payer                                                         | String | identifies the payer                                                                                                                                                                                                                                           |
| fee<mark style="color:red;">\*</mark>                         | String | amount of the fee paid in euros                                                                                                                                                                                                                                |
| paymentChannel                                                | String | <p>payment channel</p><p>enum: "frontOffice" "atm" "onLine" "app" "other"</p>                                                                                                                                                                                  |
| paymentMethod<mark style="color:red;">\*</mark>               | String | <p>payment method</p><p>enum: "cash" "creditCard" "bancomat" "other"</p>                                                                                                                                                                                       |
| transferDate<mark style="color:red;">\*</mark>                | String | date of transfer to the EC                                                                                                                                                                                                                                     |
| applicationDate<mark style="color:red;">\*</mark>             | String | application date of the payment                                                                                                                                                                                                                                |
| e-mail                                                        | String |                                                                                                                                                                                                                                                                |
| country                                                       | String |                                                                                                                                                                                                                                                                |
| stateProvinceRegion                                           | String |                                                                                                                                                                                                                                                                |
| city                                                          | String |                                                                                                                                                                                                                                                                |
| postalCode                                                    | String |                                                                                                                                                                                                                                                                |
| civicNumber                                                   | String |                                                                                                                                                                                                                                                                |
| streetName                                                    | String |                                                                                                                                                                                                                                                                |
| fullName<mark style="color:red;">\*</mark>                    | String | payer's full name                                                                                                                                                                                                                                              |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String |                                                                                                                                                                                                                                                                |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String | fiscal code or VAT number; if not available, 'ANONIMO' can be used                                                                                                                                                                                             |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String | <p><strong>F</strong> : Natural person</p><p><strong>G</strong> : Legal entity</p>                                                                                                                                                                             |
| idempotencyKey                                                | String | Idempotency key.                                                                                                                                                                                                                               |

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

- _outcome_﹡_:_ the result of the operation, which can contain the following codes
  - **OK** : operation completed successfully
  - **KO** : operation ended in error
- _fault_: all error details, mandatory if _outcome_ is KO [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## sendPaymentOutcome version 2

<mark style="color:green;">`POST`</mark>

**Used for payments activated on the EC's frontend. Compared to version 1, it allows sending the outcome for multiple payment tokens simultaneously. Additionally, it handles information derived from** [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention")**and the @e.bollo service.**

#### Request Body

| Name                                                          | Type   | Description                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>                       | String | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC, or to handle special situations, another code can be used, provided it uniquely identifies the PSP.</p> |
| details                                                       | String | details of the operation's result, mandatory if _outcome_ is OK                                                                                                                                                                                                |
| outcome<mark style="color:red;">\*</mark>                     | String | <p>the result of the operation, which can contain the following codes</p><p><strong>OK</strong> : operation completed successfully</p><p><strong>KO</strong> : operation ended in error</p>                                                                    |
| paymentToken<mark style="color:red;">\*</mark>                | String | generated by the system during the payment activation phase, it is the correlation identifier to be matched with the payment activation and outcome                                                                                                            |
| password<mark style="color:red;">\*</mark>                    | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                          |
| idChannel<mark style="color:red;">\*</mark>                   | String | <p>Channel identifier, identifies a category of payment service through which the transaction is carried out.</p><p>A channel identifier belongs to a single PSP intermediary/broker and therefore must be unique with respect to the PSP.</p>                 |
| idBrokerPSP<mark style="color:red;">\*</mark>                 | String | <p>Broker identifier, assigned by PagoPA.</p><p>Identifier for the PSP's intermediary/broker that provides access (channel) to the PSP for service delivery.</p><p>Note: The intermediary/broker can be the same as the PSP itself.</p>                        |
| payer                                                         | String | identifies the payer                                                                                                                                                                                                                                           |
| fee<mark style="color:red;">\*</mark>                         | String | amount of the fee paid in euros                                                                                                                                                                                                                                |
| paymentChannel                                                | String | <p>payment channel</p><p>enum: "frontOffice" "atm" "onLine" "app" "other"</p>                                                                                                                                                                                  |
| paymentMethod<mark style="color:red;">\*</mark>               | String | <p>payment method</p><p>enum: "cash" "creditCard" "bancomat" "other"</p>                                                                                                                                                                                       |
| transferDate<mark style="color:red;">\*</mark>                | String | date of transfer to the EC                                                                                                                                                                                                                                     |
| applicationDate<mark style="color:red;">\*</mark>             | String | application date of the payment                                                                                                                                                                                                                                |
| e-mail                                                        | String |                                                                                                                                                                                                                                                                |
| country                                                       | String |                                                                                                                                                                                                                                                                |
| stateProvinceRegion                                           | String |                                                                                                                                                                                                                                                                |
| city                                                          | String |                                                                                                                                                                                                                                                                |
| postalCode                                                    | String |                                                                                                                                                                                                                                                                |
| civicNumber                                                   | String |                                                                                                                                                                                                                                                                |
| streetName                                                    | String |                                                                                                                                                                                                                                                                |
| fullName<mark style="color:red;">\*</mark>                    | String | payer's full name                                                                                                                                                                                                                                              |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String |                                                                                                                                                                                                                                                                |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String | fiscal code or VAT number; if not available, 'ANONIMO' can be used                                                                                                                                                                                             |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String | <p><strong>F</strong> : Natural person</p><p><strong>G</strong> : Legal entity</p>                                                                                                                                                                             |
| paymentTokens<mark style="color:red;">\*</mark>               | String | sequence containing all tokens                                                                                                                                                                                                                                 |
| idempotencyKey                                                | String | Idempotency key                                                                                                                                                                                                                                                |
| idCiBundle                                                    | String | identifier for the attributes added by the EC to the bundle from [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention")                                                                                                 |
| idBundle                                                      | String | identifier for the bundle from [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention")                                                                                                                                   |
| primaryCiIncurredFee                                          | String | fee amount payable by the EC in euros, derived from [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention")                                                                                                              |
| marcheDaBollo                                                 | String | The list of digital revenue stamps managed in the payment transaction                                                                                                                                                                                          |
| paymentToken                                                  | String | The paymentToken with which the digital revenue stamp request was received                                                                                                                                                                                     |
| idTransfer                                                    | String | The identifier of the transfer that contains the _richiestaMarcaDaBollo_ data                                                                                                                                                                                  |
| MBDAttachment                                                 | String | The XML document containing the digital revenue stamp, in base64 format                                                                                                                                                                                        |
| marcaDaBollo                                                  | String | The data for each individual digital revenue stamp                                                                                                                                                                                                             |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}

```xml
  <soapenv:Envelope>
    <soapenv:Body>
        <nod:sendPaymentOutcomeV2Request>
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
        </nod:sendPaymentOutcomeV2Request>
    </soapenv:Body>
  </soapenv:Envelope>
```

{% endtab %}

{% tab title="Response example" %}

```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:sendPaymentOutcomeV2Response>
      <outcome>OK</outcome>
    </nfpsp:sendPaymentOutcomeV2Response>
  </soapenv:Body>
</soapenv:Envelope>
```

{% endtab %}

{% tab title="Response schema" %}

- _outcome_﹡_:_ the result of the operation, which can contain the following codes
  - **OK** : operation completed successfully
  - **KO** : operation ended in error
- _fault_: all error details, mandatory if _outcome_ is KO [Error Handling](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## pspNotifyPayment <a href="#pspnotifypayment" id="pspnotifypayment"></a>

## pspNotifyPayment version 1

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                    | Type    | Description                                                                                                                                                                                                                                                    |
| ------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String  | EC's fiscal code.                                                                                                                                                                                                                              |
| paymentToken<mark style="color:red;">\*</mark>          | String  | Generated by the system during the payment activation phase, it is the correlation identifier to be matched with the payment activation and outcome.                                                                                           |
| idPSP<mark style="color:red;">\*</mark>                 | String  | <p>PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC, or to handle special situations, another code can be used, provided it uniquely identifies the PSP.</p> |
| idChannel<mark style="color:red;">\*</mark>             | String  | <p>Channel identifier, identifies a category of payment service through which the transaction is carried out.</p><p>A channel identifier belongs to a single PSP intermediary/broker and therefore must be unique with respect to the PSP.</p>                 |
| creditorReferenceId<mark style="color:red;">\*</mark>   | String  | **IUV** Unique Payment Identifier.                                                                                                                                                                                                             |
| companyName<mark style="color:red;">\*</mark>           | String  | Full name of the EC.                                                                                                                                                                                                                           |
| officeName                                              | String  | Full name of the EC's office.                                                                                                                                                                                                                  |
| idBrokerPSP<mark style="color:red;">\*</mark>           | String  | <p>Broker identifier, assigned by PagoPA.</p><p>Identifier for the PSP's intermediary/broker that provides access (channel) to the PSP for service delivery.</p><p>Note: The intermediary/broker can be the same as the PSP itself.</p>                        |
| debtAmount<mark style="color:red;">\*</mark>            | String  | Represents the sum of the amounts of the individual transfers.                                                                                                                                                                                 |
| paymentDescription<mark style="color:red;">\*</mark>    | String  | Free text to describe the payment subject.                                                                                                                                                                                                     |
| remittanceInformation<mark style="color:red;">\*</mark> | String  | Reason for payment.                                                                                                                                                                                                                            |
| IBAN<mark style="color:red;">\*</mark>                  | String  | IBAN to which the transfer will be made                                                                                                                                                                                                                        |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String  | EC's fiscal code.                                                                                                                                                                                                                              |
| transferAmount<mark style="color:red;">\*</mark>        | String  | Amount                                                                                                                                                                                                                                                         |
| idTransfer<mark style="color:red;">\*</mark>            | String  | Index of the list (from 1 to 5).                                                                                                                                                                                            |
| transfer<mark style="color:red;">\*</mark>              | String  |                                                                                                                                                                                                                                                                |
| transferList<mark style="color:red;">\*</mark>          | String  | Structure containing the payment transfer details, currently there can be a maximum of 5 transfers.                                                                                                                                            |
| specific payment channel data                           | String  | Data structure specific to the payment channel used.                                                                                                                                                                                           |
| standin                                                 | Boolean | true if payment was made in stand-in mode                                                                                                                                                                                                                      |

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
                  <remittanceInformation>info remittance</remittanceInformation>
                </transfer>
                <transfer>
                  <idTransfer>2</idTransfer>
                  <transferAmount>10.00</transferAmount>
                  <fiscalCodePA>77777777778</fiscalCodePA>
                  <IBAN>IT0000000000000000000000001</IBAN>
                  <remittanceInformation>info remittance</remittanceInformation>
                </transfer>
            </transferList>
            
            <!-- payment channel specific data -->
            
            <standin>false</standin>
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

- _outcome_﹡_:_ the result of the operation, which may contain the following codes
  - **OK** : operation completed successfully
  - **KO** : operation terminated with an error
- _fault_: all the error details, mandatory if the _outcome_ is KO [Error Management](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
  {% endtab %}

{% tab title="Payment channel-specific data " %}
Credit card (decommissioned 30/04/2023)

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

PayPal

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

**Used for payments activated on the EC's frontend. Compared to the previous version of pspNotifyPayment, this allows sending a list of **_**&#x70;ayments**_\*\* to the PSP. Additionally, specific information about the payment used is inserted into the \*\*_**additionalPaymentInformations**_\*\* section, which contains a list of metadata.\*\* It is also possible to insert metadata for each \*\*_**payment**_\*\* and in each individual \*\*_**transfer**_**, and to manage the @e.bollo service.**

#### Request Body

| Name                                                    | Type    | Description                                                                                                                                                                                                                                                             |
| ------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String  | The EC's fiscal code.                                                                                                                                                                                                                                   |
| paymentToken<mark style="color:red;">\*</mark>          | String  | Generated by the system during the payment activation phase, it is the correlation identifier to be matched with the activation and the payment outcome.                                                                                                |
| idPSP<mark style="color:red;">\*</mark>                 | String  | <p>The PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC code, or to handle special situations, another code can be used, provided it uniquely identifies the PSP.</p> |
| idChannel<mark style="color:red;">\*</mark>             | String  | <p>The channel identifier, which identifies a category of payment service through which the transaction is carried out.</p><p>A channel identifier belongs to a single PSP intermediary/broker and must therefore be unique to the PSP.</p>                             |
| creditorReferenceId<mark style="color:red;">\*</mark>   | String  | **IUV** (Unique Payment Identifier).                                                                                                                                                                                                 |
| companyName<mark style="color:red;">\*</mark>           | String  | Full name of the EC.                                                                                                                                                                                                                                    |
| officeName                                              | String  | Full name of the EC's office.                                                                                                                                                                                                                           |
| idBrokerPSP<mark style="color:red;">\*</mark>           | String  | <p>The intermediary's identifier, assigned by PagoPA.</p><p>Identification of the PSP's intermediary/broker that provides access (channel) to the PSP for the service delivery.</p><p>Note: the intermediary/broker may be the same as the PSP itself.</p>              |
| debtAmount<mark style="color:red;">\*</mark>            | String  | Represents the sum of the individual transfer amounts.                                                                                                                                                                                                  |
| paymentDescription<mark style="color:red;">\*</mark>    | String  | Free text to describe the payment subject.                                                                                                                                                                                                              |
| remittanceInformation<mark style="color:red;">\*</mark> | String  | Reason for payment.                                                                                                                                                                                                                                     |
| IBAN                                                    | String  | IBAN to which the payment will be transferred                                                                                                                                                                                                                           |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String  | The EC's fiscal code.                                                                                                                                                                                                                                   |
| transferAmount<mark style="color:red;">\*</mark>        | String  | Amount                                                                                                                                                                                                                                                                  |
| idTransfer<mark style="color:red;">\*</mark>            | String  | List index (from 1 to 5).                                                                                                                                                                                                            |
| transfer<mark style="color:red;">\*</mark>              | String  |                                                                                                                                                                                                                                                                         |
| transferList<mark style="color:red;">\*</mark>          | String  | Structure containing the payment transfer details. Currently, there can be a maximum of 5 transfers.                                                                                                                                    |
| payment<mark style="color:red;">\*</mark>               | String  |                                                                                                                                                                                                                                                                         |
| paymentList<mark style="color:red;">\*</mark>           | String  | List of payments.                                                                                                                                                                                                                                       |
| additionalPaymentInformations                           | String  | Structure containing specific data for the payment channel used.                                                                                                                                                                                        |
| mapEntry<mark style="color:red;">\*</mark>              | String  |                                                                                                                                                                                                                                                                         |
| key<mark style="color:red;">\*</mark>                   | String  |                                                                                                                                                                                                                                                                         |
| value<mark style="color:red;">\*</mark>                 | String  |                                                                                                                                                                                                                                                                         |
| CHOICE<mark style="color:red;">\*</mark>                | String  | Choice between IBAN and richiestaMarcaDaBollo                                                                                                                                                                                                                           |
| provinciaResidenza                                      | String  | Vehicle registration code for the payer's province of residence                                                                                                                                                                                                         |
| hashDocumento                                           | String  | The computer footprint (digest), in base64 format, of the electronic document or protocol record to which the digital revenue stamp is associated                                                                                                    |
| tipoBollo                                               | String  | Type of revenue stamp                                                                                                                                                                                                                                                   |
| richiestaMarcaDaBollo                                   | String  | The revenue stamp request data                                                                                                                                                                                                                                          |
| transactionId<mark style="color:red;">\*</mark>         | String  | Payment transaction identifier.                                                                                                                                                                                                                         |
| fee<mark style="color:red;">\*</mark>                   | String  | Fee amount.                                                                                                                                                                                                                                             |
| totalAmount<mark style="color:red;">\*</mark>           | String  | Represents the total amount paid by the user, including the fee.                                                                                                                                                                                        |
| timestampOperation<mark style="color:red;">\*</mark>    | String  | Timestamp of the payment transaction.                                                                                                                                                                                                                   |
| IdCiBundle                                              | String  | identifier of the attributes added by the EC to the package associated with [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention")                                                                                               |
| IdBundle                                                | String  | identifier of the package associated with [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention")                                                                                                                                 |
| primaryCiIncurredFee                                    | String  | amount of the fee charged to the EC, expressed in euros, associated with [advanced-fee-management.md](../../gestione-evoluta-commissioni.md "mention")                                                                                                  |
| standin                                                 | Boolean | true if the payment was made in stand-in mode                                                                                                                                                                                                                           |
| companyName                                             | String  | the EC's fiscal code                                                                                                                                                                                                                                                    |

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
                    <remittanceInformation>info remittance</remittanceInformation>
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
                    <remittanceInformation>info remittance</remittanceInformation>
                  </transfer>
                </transferList> 
                <metadata>
                  <mapEntry>
                    <key>zzzz</key>
                    <value>g2f3</value>
                  </mapEntry> 
                </metadata>
                <standin>false</standin>
              </payment>
            </paymentList>                       
            <additionalPaymentInformations>
              <mapEntry>
                <key>xxxx</key>
                <value>1234546</value>
              </mapEntry> 
            </additionalPaymentInformations>
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

- _outcome_﹡_:_ the result of the operation, which may contain the following codes
  - **OK** : operation completed successfully
  - **KO** : operation terminated with an error
- _fault_: all the error details, mandatory if the _outcome_ is KO [Error Management](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## demandPaymentNotice

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>                 | String | <p>The PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC code, or to handle special situations, another code can be used, provided it uniquely identifies the PSP.</p>                                                                                                                                                                                                      |
| datiSpecificiServizio<mark style="color:red;">\*</mark> | String | They are registered in the Service Catalogue, which is the repository containing the list of generalised services activated by ECs, sent in base64 format. The structure to be inserted is defined by the XSD schema whose name is reported in the _xsdRiferimento_ element of the Service Catalogue and can be consulted via [https://github.com/pagopa/pagopa-api](https://github.com/pagopa/pagopa-api) . |
| idSoggettoServizio<mark style="color:red;">\*</mark>    | String | Identifier of the association between the service and the EC for which payment is to be activated. Corresponds to the elencoSoggettiEroganti.soggettoErogante.idSoggettoServizio tag in the Service Catalogue.                                                                                                                                                                                               |
| password<mark style="color:red;">\*</mark>              | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| idChannel<mark style="color:red;">\*</mark>             | String | <p>The channel identifier, which identifies a category of payment service through which the transaction is carried out.</p><p>A channel identifier belongs to a single PSP intermediary/broker and must therefore be unique to the PSP.</p>                                                                                                                                                                                                                                  |
| idBrokerPSP<mark style="color:red;">\*</mark>           | String | <p>The intermediary's identifier, assigned by PagoPA.</p><p>Identification of the PSP's intermediary/broker that provides access (channel) to the PSP for the service delivery.</p><p>Note: the intermediary/broker may be the same as the PSP itself.</p>                                                                                                                                                                                                                   |

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

- _outcome_﹡_:_ the result of the operation, which may contain the following codes
  - **OK** : operation completed successfully
  - **KO** : operation terminated with an error
- _fault_: all the error details, a value that is only populated if the _outcome_ is KO [Error Management](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- qrCode: is composed of fiscalCode and noticeNumber, a value that is only populated if the _outcome_ is OK
  - fiscalCode: the EC's fiscal code
  - noticeNumber: \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]
- paymentList: a structure containing the payment details. At the moment, it can only contain one _paymentOptionDescription_, a value that is only populated if the _outcome_ is OK
  - paymentOptionDescription﹡
    - amount﹡: amount in euros
    - options﹡: at the moment, this is populated with the value _EQ_
    - dueDate: the payment's due date in ISO 8601 format [YYYY]-[MM]-[DD]
    - paymentNote: free text to describe the payment subject
- paymentDescription: free text to describe the payment subject, a value that is only populated if the _outcome_ is OK
- fiscalCodePA: the EC's fiscal code, a value that is only populated if the _outcome_ is OK
- companyName: the full name of the EC, a value that is only populated if the _outcome_ is OK
- officeName: the full name of the EC's office
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## nodoInviaFlussoRendicontazione

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                             | Type   | Description                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoPSP<mark style="color:red;">\*</mark>              | String | <p>The PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC code, or to handle special situations, another code can be used, provided it uniquely identifies the PSP.</p> |
| xmlRendicontazione<mark style="color:red;">\*</mark>             | String | Content of the reporting flow in base64 format.                                                                                                                                                                                                         |
| dataOraFlusso<mark style="color:red;">\*</mark>                  | String | Date and time of the reporting flow.                                                                                                                                                                                                                    |
| identificativoFlusso<mark style="color:red;">\*</mark>           | String | Identifier of the reporting flow.                                                                                                                                                                                                                       |
| identificativoDominio<mark style="color:red;">\*</mark>          | String | The EC's fiscal code.                                                                                                                                                                                                                                   |
| password<mark style="color:red;">\*</mark>                       | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                   |
| identificativoCanale<mark style="color:red;">\*</mark>           | String | <p>The channel identifier, which identifies a category of payment service through which the transaction is carried out.</p><p>A channel identifier belongs to a single PSP intermediary/broker and must therefore be unique to the PSP.</p>                             |
| identificativoIntermediarioPSP<mark style="color:red;">\*</mark> | String | <p>The intermediary's identifier, assigned by PagoPA.</p><p>Identification of the PSP's intermediary/broker that provides access (channel) to the PSP for the service delivery.</p><p>Note: the intermediary/broker may be the same as the PSP itself.</p>              |

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
            <xmlRendicontazione>Reporting flow base64 encoded</xmlRendicontazione>
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

- _esito_﹡_:_ the result of the operation, which may contain the following codes
  - **OK** : operation completed successfully
  - **KO** : operation terminated with an error
- _fault_: all the error details, a value that is only populated if the _esito_ is KO [Error Management](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## nodoChiediCatalogoServizi

## nodoChiediCatalogoServizi version 2

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                             | Type   | Description                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoPSP<mark style="color:red;">\*</mark>              | String | <p>The PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC code, or to handle special situations, another code can be used, provided it uniquely identifies the PSP.</p> |
| identificativoDominio                                            | String | The EC's fiscal code.                                                                                                                                                                                                                                   |
| password<mark style="color:red;">\*</mark>                       | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                   |
| identificativoCanale<mark style="color:red;">\*</mark>           | String | <p>The channel identifier, which identifies a category of payment service through which the transaction is carried out.</p><p>A channel identifier belongs to a single PSP intermediary/broker and must therefore be unique to the PSP.</p>                             |
| identificativoIntermediarioPSP<mark style="color:red;">\*</mark> | String | <p>The intermediary's identifier, assigned by PagoPA.</p><p>Identification of the PSP's intermediary/broker that provides access (channel) to the PSP for the service delivery.</p><p>Note: the intermediary/broker may be the same as the PSP itself.</p>              |
| categoria                                                        | String | Filter by service category.                                                                                                                                                                                                                             |
| commissione                                                      | String | Filter based on the recommendation of whether to apply the fees entered by the EC that created the service.                                                                                                                                             |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}

```xml
<soap:Envelope>
    <soap:Body>
        <ns5:nodoChiediCatalogoServiziV2Request>
            <identificativoPSP>88888888888</identificativoPSP>
            <identificativoIntermediarioPSP>88888888888</identificativoIntermediarioPSP>
            <identificativoCanale>88888888888_01</identificativoCanale>
            <password>**********</password>
            <identificativoDominio>77777777777</identificativoDominio>
            <categoria>Donations</categoria>
            <commissione>N</commissione>
        </ns5:nodoChiediCatalogoServiziV2Request>
    </soap:Body>
</soap:Envelope>
```

{% endtab %}

{% tab title="Response example" %}

```xml
<soapenv:Envelope>
    <soapenv:Body>
        <nodoChiediCatalogoServiziV2Response>
            <esito>OK</esito>
            <xmlCatalogoServizi>Service catalogue base64 encoded</xmlCatalogoServizi>
        </nodoChiediCatalogoServiziV2Response>
    </soapenv:Body>
</soapenv:Envelope>
```

{% endtab %}

{% tab title="Response schema" %}

- _esito_﹡_:_ the result of the operation, which may contain the following codes
  - **OK** : operation completed successfully
  - **KO** : operation terminated with an error
- _fault_: all the error details, a value that is only populated if the _esito_ is KO [Error Management](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- xmlCatalogoServizi: content of the service catalogue in base64 format, a value that is only populated if the _esito_ is OK
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}

## nodoChiediTemplateInformativaPSP

<mark style="color:green;">`POST`</mark>

#### Request Body

| Name                                                             | Type   | Description                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoPSP<mark style="color:red;">\*</mark>              | String | <p>The PSP identifier, assigned by PagoPA.</p><p>The code is generally represented by the PSP's BIC (Bank Identifier Code).</p><p>In the absence of a BIC code, or to handle special situations, another code can be used, provided it uniquely identifies the PSP.</p> |
| identificativoIntermediarioPSP<mark style="color:red;">\*</mark> | String | <p>The intermediary's identifier, assigned by PagoPA.</p><p>Identification of the PSP's intermediary/broker that provides access (channel) to the PSP for the service delivery.</p><p>Note: the intermediary/broker may be the same as the PSP itself.</p>              |
| identificativoCanale<mark style="color:red;">\*</mark>           | String | <p>The channel identifier, which identifies a category of payment service through which the transaction is carried out.</p><p>A channel identifier belongs to a single PSP intermediary/broker and must therefore be unique to the PSP.</p>                             |
| password<mark style="color:red;">\*</mark>                       | String | Channel password, assigned by PagoPA.                                                                                                                                                                                                                   |

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
            <xmlTemplateInformativa>Information notice template base64 encoded</xmlTemplateInformativa>
        </nodoChiediTemplateInformativaPSP>
    </soapenv:Body>
</soapenv:Envelope>
```

{% endtab %}

{% tab title="Response schema" %}

- _esito_﹡_:_ the result of the operation, which may contain the following codes
  - **OK** : operation completed successfully
  - **KO** : operation terminated with an error
- _fault_: all the error details, a value that is only populated if the _esito_ is KO [Error Management](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
- xmlTemplateInformativa: the information notice template in base64 format, a value that is only populated if the _esito_ is OK
  {% endtab %}
  {% endtabs %}
  {% endtab %}
  {% endtabs %}
