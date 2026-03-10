# How to submit a purpose via API

The use of a purpose (_**Purpose**_) requires creating a draft accompanied by the risk analysis, followed by activation.

### Prerequisites

* Having created a [PDND API client](../../technical-references/client-e-materiale-crittografico/) and uploaded at least one public key to the client
* Having appointed a [client administrator](../../technical-references/api-esposte-da-pdnd-interoperabilita/#prerequisites-and-roles)

### Step 1: Create the purpose in DRAFT

The purpose must be created by indicating the e-service it will be used for, the purpose information, the load estimate, and the risk analysis.

**Request**

```
POST /purposes

{
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "riskAnalysisForm": {
        version: 1,
        answers: [{...}]
    },
    "title": "Submission of the XYZ e-service complying to ABC law",
    "description": "<Long purpose description>",
    "isFreeOfCharge": true,
    "freeOfChargeReason": "I am a Public Administration",
    "dailyCalls": "1000"
}
```

Note: through the PDND [front office](https://selfcare.pagopa.it/), a developer tool is available that allows generating the `riskAnalysisForm` field value starting from the visual compilation of the form. It is available under _**Developers Tools > Risk analysis export**_.

If successful, the creation request produces a Purpose with a DRAFT version.

**Response**

```
{
    "id": "17bfba0b-85f2-44e1-9bfc-497605a0d8c7",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "title": "Submission of the XYZ e-service complying to ABC law",
    "description": "<Long purpose description>",
    "createdAt": "2025-06-01T00:12:34Z",
    "isRiskAnalysisValid": true,
    "isFreeOfCharge": true,
    "freeOfChargeReason": "I am a Public Admiinistration",
    "currentVersion": {
        "id": "b9297a6e-2d8a-4b43-b1e6-a1c74d55f1ea",
        "state": "DRAFT",
        "createdAt": "2025-06-01T00:12:34Z",
        "dailyCalls": "1000"
    }
}
```

### Step 2: Activate the purpose

Once completed, the Purpose must be submitted for activation.

**Request**

```
POST /purposes/17bfba0b-85f2-44e1-9bfc-497605a0d8c7/activate

{}
```

#### Case 1 — Load estimate below the maximum threshold

If the load estimate is below the thresholds set by the e-service version (_**EServiceDescriptor**_), the purpose is activated.

**Response**

```
{
    "id": "17bfba0b-85f2-44e1-9bfc-497605a0d8c7",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "title": "Submission of the XYZ e-service complying to ABC law",
    "description": "<Long purpose description>",
    "createdAt": "2025-06-01T00:12:34Z",
    "updatedAt": "2025-06-02T00:12:34Z",
    "isRiskAnalysisValid": true,
    "isFreeOfCharge": true,
    "freeOfChargeReason": "I am a Public Administration",
    "currentVersion": {
        "id": "b9297a6e-2d8a-4b43-b1e6-a1c74d55f1ea",
        "state": "ACTIVE",
        "createdAt": "2025-06-01T00:12:34Z",
        "updatedAt": "2025-06-02T00:12:34Z",
        "dailyCalls": "1000"
    }
}
```

#### Case 2 — Load estimate above the maximum threshold

If the load estimate is above the thresholds set by the e-service version (_**EServiceDescriptor**_), the Purpose goes into a _**WAITING\_FOR\_APPROVAL**_ state and requires confirmation by the producer.

**Response**

```
{
    "id": "17bfba0b-85f2-44e1-9bfc-497605a0d8c7",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "title": "Submission of the XYZ e-service complying to ABC law",
    "description": "<Long purpose description>",
    "createdAt": "2025-06-01T00:12:34Z",
    "updatedAt": "2025-06-02T00:12:34Z",
    "isRiskAnalysisValid": true,
    "isFreeOfCharge": true,
    "freeOfChargeReason": "Sono una Pubblica Amministrazione",
    "waitingForApprovalVersion": {
        "id": "b9297a6e-2d8a-4b43-b1e6-a1c74d55f1ea",
        "state": "WAITING_FOR_APPROVAL",
        "createdAt": "2025-06-01T00:12:34Z",
        "updatedAt": "2025-06-02T00:12:34Z",
        "dailyCalls": "1000"
    }
}
```

***

Next page [→ How to update the load estimate of a purpose via API](how-to-update-the-load-estimate-of-a-purpose-via-api.md)
