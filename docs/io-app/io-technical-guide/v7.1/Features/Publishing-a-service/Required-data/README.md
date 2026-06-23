# Required data

To publish a **service in production**, it is **mandatory** to provide the following information:

1. [`name`](Attributes.md#service_name)
2. [`description`](Service-metadata.md#description)
3. `organization`
   1. [`organization_name`](Attributes.md#organization_name)
   2. [`organization_fiscal_code`](Attributes.md#organization_fiscal_code)
4. [`service_metadata`](Service-metadata.md)
   1. [`scope`](Service-metadata.md#scope)
   2. [`privacy_url`](Service-metadata.md#privacy_url)
   3. at least one or more direct contact channels where citizens can ask for assistance ([`phone`](Service-metadata.md#phone), [`email`](Service-metadata.md#email), [`pec`](Service-metadata.md#pec), [`support_url`](Service-metadata.md#support_url))

It is also **mandatory** to [upload the organization's logo](../../../APIs-and-specifications/Service-APIs/Upload-organization-logo.md). It must:

- be **300x300** pixels;
- be in **PNG format**;
- have a **white or transparent background**.
