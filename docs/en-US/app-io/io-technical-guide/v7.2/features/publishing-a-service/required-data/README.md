# Dati obbligatori

Per poter pubblicare un **servizio in produzione** è **obbligatorio** inserire queste informazioni:

1. [`name`](attributi.md#service_name)
2. [`description`](service-metadata.md#description)
3. `organization`      <mark style="color:$warning;">**DEPRECATO**</mark>
   1. [`organization_name`](attributi.md#organization_name)      <mark style="color:$warning;">**DEPRECATO**</mark>
   2. [`organization_fiscal_code`](attributi.md#organization_fiscal_code)      <mark style="color:$warning;">**DEPRECATO**</mark>
4. [`service_metadata`](service-metadata.md)
   1. [`scope`](service-metadata.md#scope)
   2. [`privacy_url`](service-metadata.md#privacy_url)
   3. almeno uno o più canali di contatto diretto a cui i cittadini possono chiedere assistenza ([`phone`](service-metadata.md#phone), [`email`](service-metadata.md#email), [`pec`](service-metadata.md#pec), [`support_url`](service-metadata.md#support_url))

È inoltre **obbligatorio** [caricare il logo dell’organizzazione](../../../api-e-specifiche/api-servizi/upload-organization-logo.md). Questo deve:

- avere una dimensione di **300x300**;
- essere in **formato png**;
- avere **sfondo bianco o trasparente**.
