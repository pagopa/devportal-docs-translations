---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/bollo-digitale/servizio-e.bollo-2.0/pagamento-dovuto
---

# Due payment

The scenario described in this use case is that of a citizen who accesses the website of a Creditor Entity (EC) to download a document on which they need to affix a Digital Stamp Duty (MBD).\
The EC can direct the citizen to the PagoPA systems for the payment of the MBD. Additionally, after the payment process, two methods will be available to retrieve the MBD receipt with the unique identifier to be associated with the document, plus all the necessary information to potentially generate a receipt to send to the citizen.

## How to join the service

Joining the **@e.bollo 2.0 Due Payment** service is done (for the initial application) by opening a [ticket](https://pagopa.atlassian.net/servicedesk/customer/portal/3) with the pagoPA Service Management team. The request must specify the fiscal code of the joining EC, the segregation code to be used for creating debt positions, and the service to be joined (in this specific case, **@e.bollo 2.0 Due Payment**).

{% hint style="warning" %}
In order to use the APIs described later in the document, you must create the relevant `subscription-key` via the Backoffice-pagoPA portal. For more details, please refer to the [API Key Generation](https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/manuale-operativo-back-office-pagopa-ente-creditore/funzionalita/generazione-api-key) section of the manual.
{% endhint %}

## MBD payment flow

Below is the diagram showing the complete payment flow for an MBD:

<figure><img src="../../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

The payment flow starts from the EC's website when the need arises for the citizen to pay for an MBD to be uniquely associated with a digital document.\
For this purpose, _**@e.bollo 2.0**_ provides the EC with an API that allows setting up the payment on the PagoPA systems and receiving a URL to which the citizen can be directed to purchase the MBD. The details are as follows:

> _**POST**_ https://api.platform.pagopa.it/pagopa-mbd-service/v1/organizations/{EC\\_FISCAL\\_CODE}/mbd

the request body is of type `application/json` and must contain a document with the fields listed below:

```json
{
    "paymentNotices": [
        {
            "firstName": "mario",
            "lastName": "rossi",
            "fiscalCode": "MRRNSR75R05H501I",
            "email": "mario.rossi@mydomain.it",
            "amount": 1600,
            "province": "RM",
            "documentHash": "1trA5qyjSZNwiwtGG46dyjRpL16TFgGCFvnfFzQrFHbB"
        }
    ],
    "idCIService": "00005",
    "returnUrls": {
        "successUrl": "https://testok",
        "cancelUrl": "https://testcancel",
        "errorUrl": "https://testerror"
    }
}
```

Input field details:

- `paymentNotices.firstName` - user first name
- `paymentNotices.lastName` - user last name
- `paymentNotices.fiscalCode` - user fiscal code
- `paymentNotices.email` - user email
- `paymentNotices.amount` - MBD amount
- `paymentNotices.province` - reference province for the stamp duty
- `paymentNotices.documentHash` - hash of the document to which the MBD will be associated/applied
- `idCIService` - identifier code for the _**@e.bollo 2.0 Due Payment**_ service (to be set to `00005`)
- `returnUrl.successUrl` - URL chosen by the EC for redirection in case of a successful payment
- `returnUrl.cancelUrl` - URL chosen by the EC for redirection if the user cancels the operation
- `returnUrl.errorUrl` - URL chosen by the EC for redirection in case of an error during the payment phase

The service responds to the EC with a response body of the following type:

```json
{
    "checkoutRedirectUrl": "https://api.uat.platform.pagopa.it/ecommerce/checkout/v1/carts/537d6dff-b087-4ff1-96f6-c759a1ff6c3d/redirect?clientId=CHECKOUT_CART",
    "mbdDownloadLink": "https://api.uat.platform.pagopa.it/pagopa-mbd-service/v1/organizations/99999000013/receipt/348175498304559315",
    "nav": "348175498304559315"
}
```

Output field details:

- `checkoutRedirectUrl` - URL for redirection to direct the citizen to the pagoPA Checkout site for the MBD payment. The user will need to confirm the email and proceed with the payment:

<figure><img src="../../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

- `mbdDownloadLink` - link to retrieve the MBD receipt (for details, refer to [MBD receipt service](due-payment.md#servizio-mbd-receipt))
- `nav` - notice number related to the MBD payment

### Retrieving the MBD receipt

The MBD receipt is in `xml` format, the structure of which is defined and available on the [Agenzia delle Entrate website](https://www.agenziaentrate.gov.it/portale/archivio/archivioschedeadempimento/schede-adempimento-2018/pagamenti-e-rimborsi/imposta-di-bollo-per-le-istanze-trasmesse-alla-pa-ebollo/normativa-e-linee-guida-ebollo). The `xsd` schema can be downloaded from the [pagoPA repository](https://github.com/pagopa/pagopa-api/blob/master/xsd-common/MarcaDaBollo.xsd).\
Two methods are available for retrieving the receipt, as described below in the document.

#### MBD receipt service

A service is available that allows you to retrieve the `xml` file for the MBD receipt:

> _**GET** https://api.platform.pagopa.it/pagopa-mbd-service/v1/organizations/{EC\\_FISCAL\\_CODE}/receipt/{NAV}_

The complete URL to use is present in the `mbdDownloadLink` field in the response from the payment initiation service described previously. Alternatively, to build the URL, you can use the `nav` field, which contains the notice number associated with the payment.\
The service responds with a `json` response body of the following type:

```json
{
    "content": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48bWF..."
}
```

The `content` field contains the `xml` file for the MBD receipt encoded in Base64.

#### Broadcast station

An alternative method for retrieving the receipt is to configure a broadcast station. If present, the Payments Hub (NDP) will invoke the `paSendRTV2` primitive using the endpoint configured in the station, and the EC will be able to retrieve the MBD receipt from the [MBDAttachment](https://github.com/pagopa/pagopa-api/blob/05207a1759914675eb606316c2abcbe317f79f98/wsdl/xsd/paForNode.xsd#L389C24-L389C37) field of the receipt.

{% hint style="info" %}
For the complete API specifications, please refer to the [@e.bollo 2.0](../../../appendici/primitive/ente-creditore/api-rest/#e.bollo-2.0) section
{% endhint %}
