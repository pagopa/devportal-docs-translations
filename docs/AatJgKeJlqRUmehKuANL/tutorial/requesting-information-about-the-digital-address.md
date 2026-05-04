# Requesting information about the digital address

The “Certification - Digital Address” e-service published in the catalog makes it possible to **verify the presence and correctness of a certain digital address**, simulating an institution that has all the registry information related to the digital addresses of the subjects.

This tutorial shows an actual case of using this service.

## The use case

As a user, I need to **expand my database by adding the digital addresses** of the subjects.  To do so, I must subscribe to the qs“Certification - Digital Address” e-service, which makes it possible to perform a massive extraction through the invocation of the following API:

`POST /digital-address-verification/list`

`GET /digital-address-verification/list/state/{id}`

`GET /digital-address-verification/list/response/{id}`

The methods shown above make it possible to perform a massive extraction of addresses, starting from the subject ids indicated in the request.

_add here the differences between the three APIs: in the rest of the document, the two GETS are POSTS, which is correct?_

## Data preparation

The first thing to do, as we have seen, is to configure the data. Therefore we will proceed, for the first time, with the Data Preparation phase.

In reference to the problem indicated above, in this example we have the following database in our application

| ID| Name| Surname| Pec|
|----------|----------|----------|----------|
| RSSMRA80A01H501U| Mario| Rossi| NULL|
| LGUBCH80A01H501B| Luigi| Bianchi| NULL|

Based on this, data preparation is performed by simulating the following scenario:

●     The ID **RSSMRA80A01H501U** is a known subject that is associated with a pec that is still valid

●     The ID **LGUBCH80A01H501B** is a known subject that is associated with a pec that is no longer valid

We can replicate the desired configuration as follows:

`POST /digital-address-verification/data-preparation`

**Header**:

```
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```

**Payload**:

```json
application/json
{
    "idSubject": "RSSMRA80A01H501U",
    "from": "2017-07-21T17:32:28Z",
    "digitalAddress": [
        {
            "digitalAddress": "example_1@pec.it",
            "profession": "Doctor",
            "information": {
                "reason": "TERMINATION_OFFICE",
                "endDate": "2999-12-31T17:32:28Z"
            }
        }
    ]
}
```

**Response**:

```
application/json
```

"_add here the missing response_".

**Status codes:**

●     **201** - Configuration saved successfully

●     **400** - Input data format error

We have configured the first subject, now we can configure the second

**Header:**

```json
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```

**Payload:**

```json
application/json
{
    "idSubject": "LGUBCH80A01H501B",
    "from": "2017-07-21T17:32:28Z",
    "digitalAddress": [
        {
            "digitalAddress": "example_2@pec.it",
            "profession": "Doctor",
            "information": {
                "reason": "TERMINATION_VOLUNTARY",
                "endDate": "2004-12-31T17:32:28Z"
            }
        }
    ]
}
```

**Response:**

``` // Some code ```

"_add here the missing response_".

Status codes:

●     **201** - Configuration saved successfully

●     **400** - Input data format error

We have configured also the second subject, specifying that the end of validity date of the pec is prior to today's date.

At this point we can invoke the APIs provided by the e-service.

## E-service invocation for massive extraction

The following call is made for the subject ID of Mario Rossi and Luigi Bianchi.

`POST /digital-address-verification/list`

```bash
curl --location '{host}/digital-address-verification/list' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 123456' \
--header 'Authorization: Bearer xxx' \
--data '{
  "idSubjects": [
    "RSSMRA80A01H501U",
    "LGUBCH80A01H501B"
  ],
  "idRequest": "00001"
}'
```

Response:

````json
application/json
{
    "state": "ACCEPTANCE",
    "message": "ACCEPTANCE",
    "id": "20d0c1e1-b9c2-460b-8f8a-c8c6f264bb81",
    "requestTimestamp": "2024-10-15T14:36:24.028Z"
}
```

Status codes:

●     200 - Request made successfully

The response indicates that our massive extraction request was accepted. We can use the ID present in the response to invoke the next API.

## E-service invocation for verification of massive extraction status

The following call is performed, using the ID received in the previous one

`POST /digital-address-verification/list/state/:id`

{% code overflow="wrap" %}
```bash
curl --location '{host}/digital-address-verification/list/state/20d0c1e1-b9c2-460b-8f8a-c8c6f264bb81' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 1' \
--header 'Authorization: Bearer xxx'
```
{% endcode %}

Response:

```json
application/json
{
    "status": "BEING PROCESSED",
    "message": "BEING PROCESSED"
}
```

Status codes:

●     200 - Request made successfully

The response indicates that our massive extraction request is still being processed.

## E-service invocation for verification of massive extraction status

The call is made again until a response is received that indicates that extraction was completed successfully.

As soon as the “status” field present in the response is AVAILABLE, proceed with the next invocation.

The following call is performed, using the ID received in the massive extraction request

`POST /digital-address-verification/list/response/:id`

{% code overflow="wrap" %}
```bash
curl --location 'host}/digital-address-verification/list/response/20d0c1e1-b9c2-460b-8f8a-c8c6f264bb81' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 1' \
--header 'Authorization: Bearer xxx'

```
{% endcode %}

Response:

```json
application/json
{
    "list": [
        {
            "idSubject": "RSSMRA80A01H501U",
            "from": "2017-07-21T17:32:28Z",
            "digitalAddress": [
                {
                    "digitalAddress": "example_1@pec.it",
                    "profession": "Doctor",
                    "information": {
                        "reason": "TERMINATION_OFFICE",
                        "endDate": "2999-12-31T17:32:28Z"
                    }
                }
            ]
        },
        {
            "idSubject": "LGUBCH80A01H501B",
            "from": "2017-07-21T17:32:28Z",
            "digitalAddress": [
                {
                    "digitalAddress": "example_2@pec.it",
                    "profession": "Doctor",
                    "information": {
                        "reason": "TERMINATION_VOLUNTARY",
                        "endDate": "2004-12-31T17:32:28Z"
                    }
                }
            ]
        }
    ]
}

```

Status codes:

●     200 - Request made successfully

The response returns the data present in the institution's database.