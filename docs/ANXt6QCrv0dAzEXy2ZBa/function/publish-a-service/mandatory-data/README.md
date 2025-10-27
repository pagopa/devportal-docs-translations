# Mandatory data

To be able to publish a **service in production mode** the following information **must** be entered:

1. [`name`](attributes.md#service_name)
2. [`description`](service-metadata.md#description)
3. `organization`
   1. [`organization_name`](attributes.md#organization_name)
   2. [`organization_fiscal_code`](attributes.md#organization_fiscal_code)
4. [`service_metadata`](service-metadata.md)
   1. [`scope`](service-metadata.md#scope)
   2. [`privacy_url`](service-metadata.md#privacy_url)
   3. At least one or more direct contact channels from which citizens can request support ([`phone`](service-metadata.md#phone), [`email`](service-metadata.md#email), [`pec`](service-metadata.md#pec), [`support_url`](service-metadata.md#support_url))

It is also **mandatory** to [upload the organization's logo](../../../api-and-specifications/service-api/upload-organization-logo.md). It must:

* have a dimension of **300x300**;
* be in **png format**;
* have a **white or transparent background**.