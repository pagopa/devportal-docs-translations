# Mandatory

To be able to publish a **service in production mode** the following information **must** be entered:

1. [`name`](attributes.md#service\_name)
2. [`description`](service-metadata.md#description)
3. `organization`
   1. [`organization_name`](attributes.md#organization\_name)
   2. [`organization_fiscal_code`](attributes.md#organization\_fiscal\_code)
4. [`service_metadata`](service-metadata.md)
   1. [`scope`](service-metadata.md#scope)
   2. [`privacy_url`](service-metadata.md#privacy\_url)
   3. At least one or more direct contact channels from which the citizen can request support ([`phone`](service-metadata.md#phone), [`email`](service-metadata.md#email), [`pec`](service-metadata.md#pec), [`support_url`](service-metadata.md#support\_url))

It is also **mandatory** to [upload the organization's logo](../../../apis-and-specifications/api-services/upload-organization-logo.md). It must:

* have a dimension of **300x300**;
* be in **png format**;
* have a **white or transparent background**.

{% hint style="warning" %}
If the service does not have all the mandatory data, it will be present in the list of IO with “pending”. The services with this status cannot send messages to citizens.
{% endhint %}
