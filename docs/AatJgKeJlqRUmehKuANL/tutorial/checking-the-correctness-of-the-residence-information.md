# Checking the correctness of the residence information

The “Certification - Residence Verification” e-service published in the catalog makes it possible to **verify the presence and correctness of a certain physical address**, simulating an institution that has all the updated and centralized information related to all the physical residence/domicile addresses of the subjects.

This tutorial shows an actual case of using this service.

## **The use case**

As a user, I need to **verify the correctness of the information present in my database** related to the physical addresses status of the subjects.  To do so, I must subscribe to the “Certification - Residence Verification” e-service, which makes it possible to recover this data through the invocation of the following set of APIs:

`POST /residence-verification`

`POST /residence-verification/check`

## Data preparation

The first thing to do is to configure the data. Therefore we will proceed, for the first time, with the Data Preparation phase.

In reference to the problem indicated above, in this example we have the following database in our application

<table data-header-hidden><thead><tr><th width="235">ID</th><th width="96">Name</th><th width="143">Surname</th><th>ZIP CODE</th><th>City</th></tr></thead><tbody><tr><td>RSSMRA80A01H501U</td><td>Mario</td><td>Rossi</td><td>00100</td><td>Rome</td></tr><tr><td>LGUBCH80A01H501B</td><td>Luigi</td><td>Bianchi</td><td>NULL</td><td>NULL</td></tr></tbody></table>

Based on this, data preparation is performed by simulating the following scenario:

1. The ID **RSSMRA80A01H501U** is a known subject that is associated with the address of residence and is still valid
2. The ID **LGUBCH80A01H501B** is a known subject for which we do not know the current address of residence.

We can replicate the desired configuration as follows:

`POST /residence-verification/data-preparation`

**Header:**

```sh
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
```

**Payload:**

```json
application/json
{
    "subject": {
        "subjectId": "RSSMRA80A01H501U",
        "id": "123",
        "surname": "Rossi",
        "name": "Mario",
        "gender": "M"
       
    },
    "address": {
        "addressType": "Via",
        "noteaddress": "N/D",
        "address": {
            "cap": "00100",
            "municipality": {
                "nameMunicipality": "Roma",
                "istatCode": "123456",
                "acronymIstatProvince": "RM",
                "placeDescription": "N/D"
            }
        },
        "addressStartDate": "2024-01-01"
    }
}
```

**Response:**

```json
application/json
{
    "uuid": "2c41e733-e9ae-4b69-9243-6217d4cf26e3"
}
```

**Status codes:**

**`200`**` ``- Configuration saved successfully`

The second subject can now be registered, simulating that the provider knows the address.

**Header:**

``` Content-Type: application/json Authorization: Bearer {{bearerToken}} x-correlation-id: {{myUniqueCorrelationId}} ```

**Payload:**

<pre class="language-json"><code class="lang-json"><strong>application/json
</strong><strong>{
</strong>    "subject": {
        "subjectId": "LGUBCH80A01H501B",
        "id": "1234",
        "surname": "Bianchi",
        "name": "Luigi",
        "gender": "M"
       
    },
    "address": {
        "addressType": "Via",
        "noteaddress": "N/D",
        "address": {
            "cap": "10024",
            "municipality": {
                "nameMunicipality": "Torino",
                "istatCode": "123456",
                "acronymIstatProvince": "TO",
                "placeDescription": "N/D"
            }
        },
        "addressStartDate": "2024-01-01"
    }
}
</code></pre>

**Response:**

```
application/json
{
    "uuid": "bc830947-4772-44ce-94eb-7c8c538f785c"
}
```

**Status codes:**

**`200`**` ``- Configuration saved successfully`

Given our scenario, we have completed the configuration phase.

## Generation of the Agid tokens

### Agid-JWT-TrackingEvidence

To proceed with the invocation of the APIs, the user must present also the audit token "Agid-JWT-TrackingEvidence", as required by the pattern "AUDIT_REST_01"

The pattern guarantees the following points:

* The authenticity of the communication between the provided service and each user is associated by means of security on a message level, following the pattern "ID_AUTH_REST_01 via PDND".
* The audit information necessary for the supplier to identify the specific origin of each data access request performed by the user is included in an audit token that conforms with the pattern "AUDIT_REST_01". This information is transmitted by the user application to the HTTP header.

The guidelines to be used for the generation of the said token are provided below:

1. Use a JWT library: depending on the selected programming language, it is possible to use different libraries. For example, it is possible to use a library such as jsonwebtoken for Node.js or Java, pyjwt for Python, or other JWT libraries available in the various programming languages.
2. Define the token payload: The JWT payload must contain the information required by the pattern "AUDIT_REST_01":
   * **iat** (Issued At): the date and time the token was issued, expressed in seconds.
   * **exp** (Expiration): the date and time of token expiration.
   * **sub** (Subject): the identifier of the subject, that is the clientId registered in PDND.
   * **iss** (Issuer): the identifier of the subject, that is the clientId registered in PDND.
   * **aud**(Audience): the identifier of the audience, can also be found in the section dedicated to your client;
   *  **purposeId:** the ID of the purpose
   *  **jti** (JWT ID): a univocal identifier of the token.
3. [ ]Sign the token: After creating the payload, the token must be signed using the private key uploaded to PDND during client registration (reference to paragraph (https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guide+Operative+Environment+Certification#3.4.1-How to generate the voucher)[https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guida+Operativa+Ambiente+Attestazione#3.4.1-Come-generare-il-Voucher](https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guida+Operativa+Ambiente+Attestazione#3.4.1-Come-generare-il-Voucher)).  
 The signature must be generated using an algorithm RS256 (RSA with SHA-256) and private key PKCS#8. The private key used for the signature must be the one associated with the public key registered on PDND.
4. Generate the JWT: Once the payload and signature are prepared, the JWT library can be used to create the token.
5. Include the token in the header of the request: Once generated the token "Agid-JWT-TrackingEvidence" must be inserted in the HTTP header of the request.

If all the steps indicated above have been performed correctly, the provider will correctly verify the token and respond successfully to the request.

### Agid-JWT-Signature

The AgID-JWT-Signature, similar to the previous one, is a JSON Web Token (JWT).

The purpose of this token is to guarantee the integrity and authenticity of the communications, in compliance with the guidelines dictated by the Agency for Digital Italy (AgID).

Specifically, it implements the pattern model “INTEGRITY_REST_02”.

The guidelines to be used for the generation of the said token are provided below:

1. **Use a JWT library:** depending on the selected programming language, it is possible to use different libraries. For example, it is possible to use a library such as jsonwebtoken for Node.js or Java, pyjwt for Python, or other JWT libraries available in the various programming languages.
2. **Define the token payload:** The JWT payload must contain the information required by the pattern "AUDIT_REST_01":
   * **iat (Issued At)**: the date and time the token was issued, expressed in seconds.
   * **exp (Expiration):** the date and time of token expiration.
   * **sub (Subject)**: the identifier of the subject, that is the clientId registered in PDND.
   * **iss** (Issuer): the identifier of the subject, that is the clientId registered in PDND.
   * **aud(Audience):** the identifier of the audience, can also be found in the section dedicated to your client;
   * **kid:** the ID of the key used to sign the assertion\_,\_ which can be found in your client area, under the section _“Client assertion”_
   * **jti (JWT ID)**: a univocal identifier of the token.
   * **signed_header:** contains the digest of the content (data hash) calculated with the algorithm SHA-256 and the type of content, set (for example application/json).  
An explanatory snippet of code is shown below for setting this field

**Example in Java:**

```java
import java.security.MessageDigest;
import java.util.Base64;
import java.util.HashMap;
import java.nio.charset.StandardCharsets;

// jsonInputString is the request used to calculate the digest
String jsonInputString = "My request";

try {
// Calculate the digest using SHA-256
    MessageDigest digest = MessageDigest.getInstance("SHA-256");
    byte[] hash = digest.digest(jsonInputString.getBytes(StandardCharsets.UTF_8));
    String encodedBody = Base64.getEncoder().encodeToString(hash);

    // Creation of two maps to set as claims
    HashMap<String, String>m = new HashMap<String, String>();
    // Set the request calculated above
    m.put(&quot;digest&quot;, "SHA-256=" + encodedBody);

    HashMap<String, String>m2 = new HashMap<String, String>();
    // Set the content type of request
    m2.put("content-type", "application/json");

    // Use the maps created above HashMap for the claim
    HashMap<String, Object> claims = new HashMap<String, Object>();
    claims.put("signed_headers", new Object[] {m, m2});
 
    // Stampa per verificare il contenuto dei claims
    System.out.println("Claims: " + claims);
   
} catch (Exception e) {
    e.printStackTrace();
    }
```

The form of the payload obtained following this step will be similar to the following:

{% code overflow="wrap" %}
```json
{
  "aud": "https://{{host}}/residence-verification",
  "sub": "8532de2b-386f-4aac-adfc-e46d334d3ad0",
  "nbf": 1729853626,
  "iss": "8532de2b-386f-4aac-adfc-e46d334d3ad0",
  "signed_headers": [
    {
      "digest": "SHA-256=fb1kol0gIrP3ZxA9k0B/Z8Yt9hDBBVhWRVGU8ilWe8Q="
    },
    {
      "content-type": "application/json"
    }
  ],
  "exp": 1730453626,
  "iat": 1729853626,
  "jti": "dd37e0e6-e22d-40c1-a23f-081a8abe123a"
}
```
{% endcode %}

3. [ ]**Sign the token:** After creating the payload, the token must be signed using the private key uploaded to PDND during client registration (reference to paragraph (https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guide+Operative+Environment+Certification#3.4.1-How to generate the voucher)[https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guida+Operativa+Ambiente+Attestazione#3.4.1-Come-generare-il-Voucher](https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guida+Operativa+Ambiente+Attestazione#3.4.1-Come-generare-il-Voucher)).  
 The signature must be generated using an algorithm RS256 (RSA with SHA-256)
4. **Generate the JWT:** Once the payload and signature are prepared, the JWT library can be used to create the token.
5. **Include the token in the header of the request:** Once generated, the token "Agid-JWT-Signature" must be inserted in the HTTP header of the request.

If all the steps indicated above have been performed correctly, the provider will correctly verify the token and respond successfully to the request.

## E-service invocation for information verification

Now that all the tokens required by the service security checks have been generated, we can verify the information present in our database. For the subject “**Mario Rossi**”, whose residence address we know and for whom we have to check the correspondence of the information, we invoke the following API:

`POST /residence-verification/check`

```bash
curl --location '{host}/residence-verification/check' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-correlation-id: {{myUniqueCorrelationId}}' \
--header 'Agid-JWT-Signature: {{AgidJWTSignature}}' \
--header 'Agid-JWT-TrackingEvidence: {{AgidJWTTrackingEvidence}}' \
--header 'Authorization: Bearer {{bearerToken}}' \
--data '{
    "operationId": "123",
    "criteria": {
        "subjectId": "RSSMRA80A01H501U",
        "id": "123",
        "surname": "Rossi",
        "name": "Mario",
        "gender": "M"
    },
    "requestData": {
        "dateOfRequest": "2024-01-01",
        "useCase": "my test",
        "motivation": "Check information"
    },
    "check": {
        "address": {
            "addressType": "Via",
            "address": {
                "cap": "00100",
                "municipality": {
                    "nameMunicipality": "Roma",
                    "istatCode": "123456",
                    "acronymIstatProvince": "RO",
                    "placeDescription": "N/D"
                }
            }
        }
    }
}'

```

**Response:**

```json
application/json
{
    "idOp": "123",
    "subjects": {
        "infoSubject": [
            {
                "infoInstitution": [
                    {
                        "id": "94cfacfe-7beb-4c8f-bf4b-3c71207903c7",
                        "chiave": "addressType",
                        "valore": "S",
                        "valoreTesto": "Via",
                        "valoreData": "2024-9-5",
                        "dettaglio": "-"
                    },
                    {
                        "id": "faf003f7-3e2f-4b5d-967c-d9ad404d198e",
                        "chiave": "address",
                        "valore": "N",
                        "valoreTesto": {
                            "cap": "00100",
                            "municipality": {
                                "nameMunicipality": "Roma",
                                "istatCode": "123456",
                                "acronymIstatProvince": "RM",
                                "placeDescription": "N/D"
                            },
                            "fraction": "",
                            "toponym": {
                                "codType": "",
                                "type": "",
                                "originType": "",
                                "toponymCod": "",
                                "toponymDenomination": "",
                                "toponymSource": ""
                            },
                            "civicNumber": {
                                "civicCod": "",
                                "civicSource": "",
                                "civicNumber": "",
                                "metric": "",
                                "progSNC": "",
                                "letter": "",
                                "exponent1": "",
                                "color": "",
                                "internalCivic": {
                                    "court": "",
                                    "stairs": "",
                                    "internal1": "",
                                    "espInternal1": "",
                                    "internal2": "",
                                    "espInternal2": "",
                                    "externalStairs": "",
                                    "secondary": "",
                                    "floor": "",
                                    "nui": "",
                                    "isolated": ""
                                }
                            }
                        },
                        "valoreData": "2024-9-5",
                        "dettaglio": "-"
                    }
                ]
            }
        ]
    }
}

```

Status codes:

**`200`**` ``- Request made successfully””

From the received response, we can see that the information present in our database is coherent with the provider information

## E-service invocation for information request

For the subject “Luigi Bianchi”, whose address of we do not know, we invoke the following API:

`POST /residence-verification`

```json
curl --location '{{
  "operationId": "1",
  "criteria": {
    "subjectId": "LGUBCH80A01H501B",
    "id": "1234"
  },
  "requestData": {
    "dateOfRequest": "2024-11-01",
    "useCase": "my test",
    "motivation": "retrieve information"
  }
}'
```

**Response:**

```json
application/json
{
    "idOp": "1",
    "subjects": {
        "subject": [
            {
                "generality": {
                    "subjectId": {
                        "subjectId": "LGUBCH80A01H501B",
                        "subjectIdValidity": "",
                        "dataAttributionValidity": ""
                    },
                    "surname": "Bianchi",
                    "noSurname": "false",
                    "name": "Luigi",
                    "noName": "false",
                    "gender": "M",
                    "birthDate": "",
                    "noDay": "",
                    "noMonth": "",
                    "birthPlace": {
                        "exceptionalPlace": "",
                        "municipality": {
                            "nameMunicipality": "",
                            "istatCode": "",
                            "acronymIstatProvince": "",
                            "placeDescription": ""
                        },
                        "place": {
                            "placeDescription": "",
                            "countryDescription": "",
                            "codState": "",
                            "provinceCounty": ""
                        }
                    },
                    "AIRESubject": "",
                    "yearExpatriation": "",
                    "idSubjectData": "",
                    "note": ""
                },
                "address": [
                    {
                        "addressType": "Via",
                        "noteaddress": "N/D",
                        "address": {
                            "cap": "10024",
                            "municipality": {
                                "nameMunicipality": "Torino",
                                "istatCode": "123456",
                                "acronymIstatProvince": "TO",
                                "placeDescription": "N/D"
                            },
                            "fraction": "",
                            "toponym": {
                                "codType": "",
                                "type": "",
                                "originType": "",
                                "toponymCod": "",
                                "toponymDenomination": "",
                                "toponymSource": ""
                            },
                            "civicNumber": {
                                "civicCod": "",
                                "civicSource": "",
                                "civicNumber": "",
                                "metric": "",
                                "progSNC": "",
                                "letter": "",
                                "exponent1": "",
                                "color": "",
                                "internalCivic": {
                                    "court": "",
                                    "stairs": "",
                                    "internal1": "",
                                    "espInternal1": "",
                                    "internal2": "",
                                    "espInternal2": "",
                                    "externalStairs": "",
                                    "secondary": "",
                                    "floor": "",
                                    "nui": "",
                                    "isolated": ""
                                }
                            }
                        },
                        "foreignState": {
                            "foreignAddress": {
                                "cap": "",
                                "place": {
                                    "placeDescription": "",
                                    "countryDescription": "",
                                    "countryState": "",
                                    "provinceCounty": ""
                                },
                                "toponym": {
                                    "denomination": "",
                                    "civicNumber": ""
                                }
                            },
                            "consulate": {
                                "consulateCod": "",
                                "consulateDescription": ""
                            }
                        },
                        "presso": "",
                        "addressStartDate": "2024-01-01"
                    }
                ]
            }
        ]
    }
}
```

Status codes:

**`200`**`- Request made successfully`

From the received response, we can add the received information to our database.

## Final result

After querying the e-service, we can update our database based on the information we recovered.

An overview of the situation following the update is shown below

<table data-header-hidden><thead><tr><th width="259">ID</th><th width="97">Name</th><th>Surname</th><th>ZIP CODE</th><th>City</th></tr></thead><tbody><tr><td>RSSMRA80A01H501U</td><td>Mario</td><td>Rossi</td><td>00100</td><td>Rome</td></tr><tr><td>LGUBCH80A01H501B</td><td>Luigi</td><td>Bianchi</td><td>10024</td><td>Turin</td></tr></tbody></table>

Our database has been updated correctly and we have added the missing information to the subject Luigi Bianchi.