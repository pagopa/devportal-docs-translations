---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/tassonomia-dei-servizi-di-incasso
---

# Taxonomy of collection services

To improve the delivery of services by Creditor Entities through pagoPA, a "Taxonomy of services provided" is in place. This allows each Creditor Entity (EC) to uniformly identify the collection services and their respective debt positions that pass through the pagoPA platform, also for the purpose of enabling—through specific taxonomic prefixes—"digital notification" services, i.e., **Request To Pay** (details of which, including those relating to the taxonomic codes, are available in the [SEPA Request To Pay](sepa-rtp-request-to-pay.md) section).

If a collection type includes multiple revenue items (for example, both a percentage as a tax and a percentage as a fee), the taxonomic classification follows the type of the prevailing item/levy.

For each taxonomic code, the version number and the start and end validity dates are also indicated, so that any changes can be easily identified by the parties involved.

When creating the debt position, the CE must assign to the _transferCategory_ field, present in each transfer contained in the response to the [paGetPayment](../appendix/Primitives/Creditor-Entity/api-soap.md#pagetpayment), the value derived from the taxonomy based on the type of revenue requested.

The taxonomic code is composed as follows (example used: 9/**0101002IM**/):

| Segment                       | Regex                        | Example |
| ----------------------------- | ---------------------------- | ------- |
| Prefix\*                      | 9/\|6/\|7/\|8/               | 9/      |
| Creditor Entity type code     | `\d{2}`                     | 01      |
| Macro-area progressive number | `\d{2}`                     | 01      |
| Service type code             | `\d{3}`                     | 002     |
| Legal reason                  | `IM \| TS \| SP \| SA \| AP` | IM      |

{% hint style="warning" %}
\*When selecting the Prefix, Entities are required to consult the SEPA Request To Pay section.
{% endhint %}

The complete and updated list of the taxonomy is available at the following links:

- [Taxonomy.csv](https://api.platform.pagopa.it/taxonomy/service/v1/taxonomy?extension=csv)
- [Taxonomy.json](https://api.platform.pagopa.it/taxonomy/service/v1/taxonomy)

{% hint style="danger" %}
Warning: CEs are advised that it will not be possible to add new taxonomic codes until further notice from PagoPA S.p.A.
{% endhint %}
