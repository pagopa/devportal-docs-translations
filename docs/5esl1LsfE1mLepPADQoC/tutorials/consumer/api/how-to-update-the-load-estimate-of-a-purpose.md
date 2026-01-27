# How to update the load estimate of a purpose

Updating the load estimate of a Purpose can be applied directly, or require the producer’s approval if it exceeds the thresholds set by the e-service version (_**EServiceDescriptor**_).

## Step 1 - Update the load estimate

**Request**

```
POST /purposes/17bfba0b-85f2-44e1-9bfc-497605a0d8c7/versions

{
    "dailyCalls": "5000"
}
```

**Response**

If the load estimate is below the thresholds set by the e-service version (_**EServiceDescriptor**_):

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
    "freeOfChargeReason": "I am a Public Administration",
    "currentVersion": {
        "id": "0cd13c3d-1608-4bea-9efc-9fe12ebcc100",
        "state": "ACTIVE",
        "createdAt": "2025-06-01T00:12:34Z",
        "dailyCalls": "5000"
    }
}
```

**Response**

If the load estimate is above the thresholds set by the e-service version (_**EServiceDescriptor**_):

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
        "dailyCalls": "1000"
    }
    "waitingForApprovalVersion": {
        "id": "0cd13c3d-1608-4bea-9efc-9fe12ebcc100",
        "state": "WAITING_FOR_APPROVAL",
        "createdAt": "2025-06-02T00:12:34Z",
        "dailyCalls": "5000"
    }
}
```
