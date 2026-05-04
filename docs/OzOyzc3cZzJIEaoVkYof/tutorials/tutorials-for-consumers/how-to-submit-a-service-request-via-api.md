---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/tutorials/tutorials-for-consumers/how-to-submit-a-service-request-via-api
---

# How to submit a service request via API

Submitting a service request (Agreement) involves creating a draft, followed by a submission.

### Prerequisites

* Having created a [PDND API client](../../technical-references/client-e-materiale-crittografico/) and uploaded at least one public key to the client
* Having appointed a [client administrator](../../technical-references/api-esposte-da-pdnd-interoperabilita/#prerequisites-and-roles)

### Step 1: Create the Agreement in DRAFT

The Agreement must be created by specifying both the e-service and the specific e-service version (_**EServiceDescriptor**_) it refers to.

**Request**

```json
POST /agreements

{
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac"
}
```

If the creation request is successful, it produces an Agreement in DRAFT state.

**Response**

```json
{
    "id": "17bfba0b-85f2-44e1-9bfc-497605a0d8c7",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
    "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "state": "DRAFT",
    "createdAt": "2025-06-01T00:12:34Z"
}
```

### Step 2: Submit the Agreement for activation

The draft can be submitted to request its activation.

**Request**

```
POST /agreements/17bfba0b-85f2-44e1-9bfc-497605a0d8c7/submit

{}
```

#### Response — Requirements met

If the requesting consumer meets the necessary requirements, the Agreement is activated.

**Response**

```json
{
    "id": "17bfba0b-85f2-44e1-9bfc-497605a0d8c7",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
    "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "state": "ACTIVE",
    "createdAt": "2025-06-01T00:12:34Z",
    "updatedAt": "2025-06-02T00:12:34Z"
}
```

#### Response — Requirements not met

If the requesting consumer does not meet the necessary requirements, the Agreement moves to the waiting for approval (`PENDING`) state.

**Response**

```json
{
    "id": "17bfba0b-85f2-44e1-9bfc-497605a0d8c7",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
    "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "state": "PENDING",
    "createdAt": "2025-06-01T00:12:34Z",
    "updatedAt": "2025-06-02T00:12:34Z"
}
```

***

Next page [→ How to submit a purpose via API](how-to-submit-a-purpose-via-api.md)
