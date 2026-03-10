# Collection service taxonomy

In order to improve the delivery of the services of the public administration for which payment is available via pagoPA, a “Taxonomy of services provided” is introduced that allows each creditor to uniformly identify the collection services and the respective debt positions that transit on the pagoPA platform.

When creating the debt position, the creditor must attribute the value inferred from the taxonomy based on the type of received request to the _transferCategory_ field, which is present in every transfer contained in the response to [paGetPayment](../appendices/primitive.md#pagetpayment).

The taxonomic code is composed of the following (example utilized: 9/**0101002IM**/):

| Segment                | Regex                        | Example |
| ---------------------- | ---------------------------- | ------- |
| Creditor type code     | `\d{2}`                      | 01      |
| Progressive macro area | `\d{2}`                      | 01      |
| Service type code      | `\d{3}`                      | 002     |
| Legal reason           | `IM \| TS \| SP \| SA \| AP` | IM      |

If there is a type of collection that contains both a percentage that is a general tax and a percentage that is a specific tax, the indication following the type of the _prevalent tax_.

For each taxonomic code, also the version number, start and end date of validity are indicated, so that all changes can be easily identified by the involved providers.

The complete and updated taxonomy list is available in:

* [excel format .xlsx](https://drive.google.com/file/d/13xOd\_\_Qd4pwKHr3wjE-73NAB2O7UKmIt/view)
* [csv format](https://api.platform.pagopa.it/taxonomy/service/v1/taxonomy?extension=csv)
* [json format](https://api.platform.pagopa.it/taxonomy/service/v1/taxonomy)

The excel format .xls will be available until June 2024, afterward the csv and json formats must be used.
