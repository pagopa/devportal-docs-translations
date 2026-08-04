# Required data

To publish a **service in production**, it is **mandatory** to provide the following information:

1. [`name`](Attributes.md#service_name)
2. [`description`](Service-Metadata.md#description)
3. `organization`      <mark style="color:$warning;">**DEPRECATED**</mark>
   1. [`organization_name`](Attributes.md#organization_name)      <mark style="color:$warning;">**DEPRECATED**</mark>
   2. [`organization_fiscal_code`](Attributes.md#organization_fiscal_code)      <mark style="color:$warning;">**DEPRECATED**</mark>
4. [`service_metadata`](Service-Metadata.md)
   1. [`scope`](Service-Metadata.md#scope)
   2. [`privacy_url`](Service-Metadata.md#privacy_url)
   3. at least one or more direct contact channels where citizens can ask for assistance ([`phone`](Service-Metadata.md#phone), [`email`](Service-Metadata.md#email), [`pec`](Service-Metadata.md#pec), [`support_url`](Service-Metadata.md#support_url))

It is also **mandatory** to [upload the organization's logo](../../../APIs-and-Specifications/Service-APIs/Upload-Organization-Logo.md). It must:

- be **300x300** pixels;
- be in **PNG format**;
- have a **white or transparent background**.
