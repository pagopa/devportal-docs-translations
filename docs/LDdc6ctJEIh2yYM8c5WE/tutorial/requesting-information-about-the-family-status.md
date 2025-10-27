# Requesting information about the family status

The “Certification- Family Status” e-service published in the catalog offers a service through which it is possible to verify the correctness of the information related to a family status, simulating an institution that has the updated and centralized information related to the family status.

This tutorial shows an actual case of using this service.

## **The use case**

As a user, I need to **verify the information** present in my database and **related to the family status of the subjects.** To do so, I must subscribe to the “Certification - Family Status” e-service, which makes it possible to recover this data through the invocation of the following API:

`POST /family-status`

## Data Preparation

The first thing to do, as we have seen, is to configure the data. Therefore we will proceed, for the first time, with the Data Preparation phase.

In reference to the problem indicated above, in this example we have the following database in our application

| ID| Name| Surname| Civil status| Relationship start date| Relationship end date|
|----------|----------|----------|----------|----------|----------|
| RSSMRA80A01H501U| Mario| Rossi| MARRIED| 01/01/2022| NULL|
| LGUBCH80A01H501B| Luigi| Bianchi| SINGLE| 01/06/1988| NULL|

Based on this, data preparation is performed by simulating the following scenario:

●     The ID **RSSMRA80A01H501U** is a subject for which the family status is known as MARRIED

●     The ID **LGUBCH80A01H501B** is a subject for which the family status is known as SINGLE

We can replicate the desired configuration as follows:

`POST /family-status`

**Header:**

```
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
        "gender": "M",
        "birthDate": {
            "eventDate": "1970-11-15",
            "placeOfBirth": {
                "municipality": {
                    "nameMunicipality": "Roma",
                    "istatCode": "123456",
                    "acronymIstatProvince": "RM",
                    "placeDescription": "N/D"
                },
                "place": {
                    "placeDescription": "N/D",
                    "countryDescription": "N/D",
                    "codState": "ITA",
                    "provinceCounty": "N/D"
                }
            }
        }
    },
    "subjectLink": {
        "relationshipType": "Spouse",
        "startDate": "2021-11-15",
        "relationshipCode": "SPOUSE",
        "memberSequence": "01",
        "startDateRelationship": "2022-01-01"
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

●     200 - Configuration saved successfully

The second subject can now be registered, simulating that the provider knows the address.

**Header:**

```
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
```

**Payload:**

```
application/json
{
    "subject": {
        "subjectId": "LGUBCH80A01H501B",
        "id": "1234",
        "surname": "Luigi",
        "name": "Bianchi",
        "gender": "M",
        "birthDate": {
            "eventDate": "1988-06-01",
            "placeOfBirth": {
                "municipality": {
                    "nameMunicipality": "Roma",
                    "istatCode": "123456",
                    "acronymIstatProvince": "RM",
                    "placeDescription": "N/D"
                },
                "place": {
                    "placeDescription": "N/D",
                    "countryDescription": "N/D",
                    "codState": "ITA",
                    "provinceCounty": "N/D"
                }
            }
        }
    },
    "subjectLink": {
        "relationshipType": "Spouse",
        "startDate": "2023-07-01",
        "relationshipCode": "SPOUSE",
        "memberSequence": "01",
        "startDateRelationship": "1988-06-01"
    }
}
```

**Response:**

```
application/json
{
    "uuid": "2456398c-e932-4e97-a7b9-f9f15e9c343f"
}
```

**Status codes:**

●     200 - Configuration saved successfully

Given our scenario, we have completed the configuration phase.

At this point we can invoke the APIs provided by the e-service.

## E-service invocation

Once the completion phase is completed, proceed with the invocation of the service performing the verification for the two subjects in my database.

Specifically, we will verify the correctness of the information by invoking the following API

`POST /family-status`

that allows us to recover the information using the ID of the subject.

Before invoking the above, it is important to know that the e-service in question requires another level of security. The APIs require in fact two additional headers to be sent:

●     [Agid-JWT-TrackingEvidence](broken-reference)

●     [Agid-JWT-Signature](broken-reference)

After correctly generating the above tokens and the voucher, we can proceed with the following requests.

First of all we will invoke the e-service for the subject “Mario Rossi”

```bash
curl --location '{host}/family-status' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 123' \
--header 'agid-jwt-signature: zzz' \
--header 'agid-jwt-trackingevidence: yyy' \
--header 'Authorization: Bearer xxx' \
--data '{
  "operationId": "001",
  "criteria": {
    "subjectId": "RSSMRA80A01H501U"
  },
  "requestData": {
    "dateOfRequest": "2024-11-13",
    "useCase": "Verification motivation",
    "motivation": "Verification information"
  }
}'
```

Response:

```json
application/json
{
    "idOp": "001",
    "subjects": {
        "subject": [
            {
                "generality": {
                    "subjectId": {
                        "subjectId": "RSSMRA80A01H501U",
                        "subjectIdValidity": "",
                        "dataAttributionValidity": ""
                    },
                    "surname": "Rossi",
                    "noSurname": "false",
                    "name": "Mario",
                    "noName": "false",
                    "gender": "M",
                    "birthDate": "1970-11-15",
                    "noDay": "",
                    "noMonth": "",
                    "placeOfBirth": {
                        "municipality": {
                            "nameMunicipality": "Roma",
                            "istatCode": "123456",
                            "acronymIstatProvince": "RM",
                            "placeDescription": "N/D"
                        },
                        "place": {
                            "placeDescription": "N/D",
                            "countryDescription": "N/D",
                            "codState": "ITA",
                            "provinceCounty": "N/D"
                        }
                    },
                    "AIRESubject": "",
                    "yearExpatriation": "",
                    "idSubjectData": "",
                    "note": ""
                },
                "subjectLink": {
                    "relationshipType": "Spouse",
                    "startDate": "2021-11-15",
                    "relationshipCode": "SPOUSE",
                    "memberSequence": "01",
                    "startDateRelationship": "2022-01-01"
                }
            }
        ]
    }
}
```

**Status codes:**

●     **200** - Request made successfully

Now we will proceed with “Luigi Bianchi”

```bash
curl --location '{host}/family-status' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 123' \
--header 'agid-jwt-signature: zzz' \
--header 'agid-jwt-trackingevidence: yyy' \
--header 'Authorization: Bearer xxx' \
--data '{
  "operationId": "002",
  "criteria": {
    "subjectId": "LGUBCH80A01H501B"
  },
  "requestData": {
    "dateOfRequest": "2024-11-13",
    "useCase": "Verification motivation",
    "motivation": "Verification information"
  }
}'
```

**Response:**

```json
application/json
{
    "idOp": "002",
    "subjects": {
        "subject": [
            {
                "generality": {
                    "subjectId": {
                        "subjectId": "LGUBCH80A01H501B",
                        "subjectIdValidity": "",
                        "dataAttributionValidity": ""
                    },
                    "surname": "Luigi",
                    "noSurname": "false",
                    "name": "Bianchi",
                    "noName": "false",
                    "gender": "M",
                    "birthDate": "1988-06-01",
                    "noDay": "",
                    "noMonth": "",
                    "placeOfBirth": {
                        "municipality": {
                            "nameMunicipality": "Roma",
                            "istatCode": "123456",
                            "acronymIstatProvince": "RM",
                            "placeDescription": "N/D"
                        },
                        "place": {
                            "placeDescription": "N/D",
                            "countryDescription": "N/D",
                            "codState": "ITA",
                            "provinceCounty": "N/D"
                        }
                    },
                    "AIRESubject": "",
                    "yearExpatriation": "",
                    "idSubjectData": "",
                    "note": ""
                },
                "subjectLink": {
                    "relationshipType": "Spouse",
                    "startDate": "2023-07-01",
                    "relationshipCode": "SPOUSE",
                    "memberSequence": "01",
                    "startDateRelationship": "1988-06-01"
                }
            }
        ]
    }
}
```

Status codes:

●     200 - Request made successfully

The received responses allow us to coherently update our database.

## Final result

After querying the e-service, we can update our database based on the information we recovered.

An overview of the situation following the update is shown below

| ID| Name| Surname| Civil status| Relationship start date| Relationship end date|
|----------|----------|----------|----------|----------|----------|
| RSSMRA80A01H501U| Mario| Rossi| MARRIED| 01/01/2022| NULL|
| LGUBCH80A01H501B| Luigi| Bianchi| MARRIED| 01/07/2023| NULL|

Our database was updated correctly. Specifically, it was confirmed that the information for the subject RSSMRA80A01H501U is correct, whereas for the second subject the relationship related to their family status was updated.