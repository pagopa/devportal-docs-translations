---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/tutorials/tutorials-for-producers/how-to-create-a-new-e-service
---

# How to create a new e-service

{% hint style="info" %}
Only parties of type PA, GSP, or SCP can publish e-services in the Testing and Production environments. In the Validation environment, there are no such limitations. For more information, see the [dedicated section](../../getting-started/guida-alladesione.md#understanding-operational-environments).
{% endhint %}

### Step 1: Create a new e-service

Administrators or API operators can navigate to _**Producing > My e-services > Create new**_.

### Step 2: Fill in the general information form

Required information for creating the e-service includes:

* **Name and description**: these will be displayed in the e-service catalog on the PDND platform (it’s recommended to read the [best practices guide](https://italia.github.io/pdnd-guida-nomenclatura-eservice/)).
* **Technology**: choose between REST or SOAP.
* **Mode**: define whether the e-service **produces** or **receives** data. If it produces data, all endpoints return data; if it receives, all endpoints accept data. For privacy reasons, an e-service cannot both produce and receive data simultaneously.
* **Authorization to delegate**: indicate if the producer allows the subscriber to delegate another PA to perform administrative actions on their behalf.
* **Signal Hub availability**: indicate if the e-service offers notification of data changes via the Signal Hub.

### **Step 3: Fill in the purpose form**

{% hint style="info" %}
This step is only for **e-services that receive data**.
{% endhint %}

To create an e-service that receives data, one or more purposes must be created with the associated risk analysis. This is necessary because the producer receives data from subscribers and must declare how it is processed.

For each intended purpose, the producer must complete a questionnaire. The subscriber can then choose the appropriate purpose when submitting the service request.

### Step 4: Fill in the e-service version form

* **Version description**: whether it's the initial or a subsequent version, including changes from previous versions.
* **Policy for service request activation**: if set to manual, even if the subscriber meets all access requirements, the producer reserves the right to activate the service request manually; otherwise, activation is automatic.
* **Technical parameters**:
  1. **Audience**: resource identifier, corresponding to the `aud` field the producer will find in vouchers from PDND.
  2. **Voucher validity duration**: how long the voucher issued by PDND remains valid for accessing this e-service.
  3. **API call thresholds**, per subscriber and total: limits beyond which purposes are no longer automatically activated by the platform.

### Step 5: Fill in the attributes form

Each e-service has access requirements that the subscriber must meet to register and use it. This step lists these requirements, defined as attributes.

### Step 6: Upload the interface file and the technical documentation

Upload the API specification file for this e-service version, which is an OpenAPI file for REST services and a WSDL for SOAP services, as per the ModI security perimeter.

{% hint style="info" %}
To ensure compliance of the published APIs with the interoperability model for Italian public administrations, an API checker tool is available at [this link](https://italia.github.io/api-oas-checker/) and a usage guide is available [here](https://github.com/italia/api-oas-checker-rules).
{% endhint %}

It is also recommended to upload all technical documentation needed to facilitate consumers’ integration activities and minimize any potential friction.

At the end of the process, a summary of all data entered during the creation of the e-service is available, and it is possible to choose whether to edit the draft, publish it, or delete it.

For details on individual fields or on mechanisms related to the e-service, see the [dedicated section](../../technical-references/e-services/).

***

Next page [→ How to update an e-service](how-to-update-an-e-service.md)
