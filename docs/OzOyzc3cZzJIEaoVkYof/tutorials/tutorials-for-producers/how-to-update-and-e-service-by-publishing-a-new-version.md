---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/tutorials/tutorials-for-producers/how-to-update-and-e-service-by-publishing-a-new-version
---

# How to update and e-service by publishing a new version

{% hint style="danger" %}
**Consequence** Publishing a new version of an e-service in the catalog requires all subscribers to update their service requests.
{% endhint %}

### Step 1: Access the e-service to be modified

In the _**Producing > My e-services**_ view, click the three dots next to the e-service of interest and select _**Create draft**_.

You cannot have multiple drafts of the same e-service concurrently.

### Step 2: Fill in the e-service version form

* **Version description**: whether this is the first draft or a subsequent one, describe changes compared to previous versions.
* **Policy for service request**: activation policy—if manual, even when the subscriber meets all requirements for automatic activation, the producer may choose to activate manually; otherwise activation is automatic.
* **Technical parameters**:
  1. **Audience**: the resource identifier. Corresponds to the `aud` field the producer will find in vouchers from PDND in subscriber API requests.
  2. **Voucher validity duration**: how long the voucher issued by PDND remains valid for accessing this e-service.
  3. **API call thresholds**, per subscriber and total: thresholds beyond which purposes are no longer automatically activated by the platform.

Specify access requirements (attributes) that the subscriber must meet to register for and use the e-service.

### Step 4: Upload the interface file and the technical documentation

Upload the API specification file for this e-service version, which is an OpenAPI file for REST services and a WSDL for SOAP services, as per the ModI security perimeter.

{% hint style="info" %}
To ensure compliance of the published APIs with the interoperability model for Italian public administrations, an API checker tool is available at [this link](https://italia.github.io/api-oas-checker/) and a usage guide is available [here](https://github.com/italia/api-oas-checker-rules).
{% endhint %}

You must also upload additional technical documentation (user manual, examples, etc.).

At the end of the process, a summary of all entered data is displayed. You may choose to modify the draft, publish it, or delete it.

For details on specific fields or e-service lifecycle, see the [dedicated section](../../technical-references/e-services/).

***

Next page [→ How to create a new certified attribute](how-to-create-a-new-certified-attribute.md)
