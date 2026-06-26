# Required data

To publish a **service in production**, it is **mandatory** to provide the following information:

1. [`name`](attributi.md#service_name)
2. [`description`](service-metadata.md#description)
3. `organization`
   1. [`organization_name`](attributi.md#organization_name)
   2. [`organization_fiscal_code`](attributi.md#organization_fiscal_code)
4. [`service_metadata`](service-metadata.md)
   1. [`scope`](service-metadata.md#scope)
   2. [`privacy_url`](service-metadata.md#privacy_url)
   3. at least one or more direct contact channels where citizens can ask for assistance ([`phone`](service-metadata.md#phone), [`email`](service-metadata.md#email), [`pec`](service-metadata.md#pec), [`support_url`](service-metadata.md#support_url))

It is also **mandatory** to [upload the organization's logo](../../../api-e-specifiche/api-servizi/upload-organization-logo.md). It must:

- be **300x300** pixels;
- be in **PNG format**;
- have a **white or transparent background**.
