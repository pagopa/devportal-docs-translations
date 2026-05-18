# How to approve a pending service request via API

On the API, the state **In attesa di approvazione** (Waiting for approval) in the context of an Agreement is identified as **PENDING**.

An Agreement in **PENDING** state requires one or more actions by the **producer** of the e-service.

### Prerequisites

* Having created a [PDND API client](../../technical-references/client-e-materiale-crittografico/) and uploaded at least one public key to the client
* Having appointed a [client administrator](../../technical-references/api-esposte-da-pdnd-interoperabilita/#prerequisites-and-roles)

### Case 1 — Manual approval required

Use this when activation of an Agreement requires manual approval by the producer. The producer can choose manual approval when defining a version of the e-service. For more information, see the [dedicated section](../../technical-references/e-services/#informazioni-di-versione).

**Request**

```
POST /agreements/4ed64879-2568-4117-9b34-2322cbcdf90d/approve

{}
```

**Response**

```json
{
    "id": "4ed64879-2568-4117-9b34-2322cbcdf90d",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
    "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "state": "ACTIVE",
    "createdAt": "2025-06-01T00:12:34Z",
    "updatedAt": "2025-06-02T00:12:34Z"
}
```

### Case 2 — Verified attribute required

Use this if the e-service requires the consumer to have one or more verified attributes that are not yet assigned.

#### Step 1: Assign a verified attribute to the consumer

{% hint style="warning" %}
This endpoint is not yet available, but can be executed manually via the front office. For more information, see the [dedicated section](../../technical-references/attributi/).
{% endhint %}

The assignment requires reference to the Agreement for which the attribute is needed.

**Request**

```json
POST /tenants/172c89fe-62d1-4f3e-82bc-1ff034a85567/verifiedAttributes

{
    "id": "727e9cc7-de40-4c03-8f37-e604b8de32f4",
    "agreementId": "4ed64879-2568-4117-9b34-2322cbcdf90d"
}
```

#### Step 2: Approval of the Agreement by the producer

The producer can now confirm activation of the Agreement.

**Request**

```
POST /agreements/4ed64879-2568-4117-9b34-2322cbcdf90d/approve

{}
```

**Response**

```json
{
    "id": "4ed64879-2568-4117-9b34-2322cbcdf90d",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
    "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "state": "ACTIVE",
    "createdAt": "2025-06-01T00:12:34Z",
    "updatedAt": "2025-06-02T00:12:34Z"
}
```

***

Next page [→ How to retrieve pending service requests via API](how-to-retrieve-pending-service-requests-via-api.md)
