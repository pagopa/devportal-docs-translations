---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/tutorials/tutorials-for-producers/how-to-update-an-e-service
---

# How to update an e-service

The way to update the e-service changes depending on the field that needs to be updated.\
Modifying certain fields (such as the API interface file or the _audience_ parameter) is considered a potentially _breaking_ change, meaning it could cause disruptions to the consumers’ integrations. To modify one of these fields, you must create and publish a new version of the e-service.

Otherwise, it is possible to immediately update the e-service field without any further requirements.

### Step 1: Identify the field to modify

#### Fields the can be modified without creating a new version

* name of the e-service
* description of the e-service
* delegation authorization
* presence of the data change notification service (Signal Hub)
* additional technical documentation
* changelog (version description)
* activation policy for service requests
* API call thresholds
* voucher validity duration

#### Fields that can be modified only by creating a new version

* API interface file
* audience
* access requirements (attributes)\*

\*If attributes are extended, they can also be modified without creating a new version. For example, if the previous requirement was only _Municipalities and their Consortia and Associations_ and today it becomes _Municipalities and their Consortia and Associations_ OR _Regions_, the target audience is simply extended, and this change can be made without creating a new e-service version.

#### Fields that cannot be modified

* technology (REST or SOAP)
* mode (produces or receives data)

These fields can never be updated. You must create a new e-service.

### Step 2: Make the change

If a new version is not required, refer to the tutorial [How to update an e-service without publishing a new version](how-to-update-an-e-service-without-publishing-a-new-version.md). If a new version is required, refer to the tutorial [How to update an e-service by publishing a new version](how-to-update-and-e-service-by-publishing-a-new-version.md).

For more information, see the [dedicated webinar](https://developer.pagopa.it/webinars/e-service-erogazione-inversa) (from minute 8).

***

Next page [→ How to update an e-service without publishing a new version](how-to-update-an-e-service-without-publishing-a-new-version.md)
