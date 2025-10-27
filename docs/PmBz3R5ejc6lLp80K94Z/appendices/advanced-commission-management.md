# Advanced commission management

PagoPA S.p.A has implemented this service that introduces a rules engine that acts as a converter for all of the platform's payment operations, making it possible for the PSP to create ad hoc commission package for specific payments, guaranteeing greater flexibility based on

* different commissions with respect to the EC
* touchpoint
* taxonomy of the debt position
* amount
* selected payment tool
* period

every creditor has the possibility, for each commission package of type "Upon request" and "Upon invitation", to set the fee they charge and also associate it with certain taxonomies.

## Marketplace

It is the tool that allows the creditors to participate in certain packages (“upon request” or “upon invitation”) exposed by the PSPs, being also able to complete the packages with information regarding their commissions.

Each PSP can define 3 types of commission packages

* “For all”→ available for the payments of any creditor;
* “Upon request” → available only for payments of the creditors who activated an “agreement” via the marketplace;
* “Upon invitation” → available only for payments of the creditors who activated an “agreement” via the marketplace upon invitation of the PSP;

<figure><img src="../.gitbook/assets/image (55).png" alt=""><figcaption></figcaption></figure>

### Use cases

* Each PSP has CRUD interfaces available for managing a package for each commission;
* each PSP can define an amount for each package;
* each PSP can define a range for the transaction amount for each package;
* each PSP can associate a payment method with each package;
* each PSP can associate a touchpoint with each package;
* each PSP can associate a taxonomic code with each package;
* each PSP can associate a validity period with each package;
* each PSP can offer their “upon request” packages to the creditors;
* each PSP can accept registration requests from creditors for their “upon request” packages;
* each PSP can accept registration changes from creditors for their “upon request” packages;
* each EC has CRUD interfaces available for managing the packages to which they have access;
* each creditor can charge a commission fee for each “upon request” or “upon invitation” package to which they have access;
* each EC can associate a filter for the taxonomic code for the commission fee they want to charge;
* each creditor can request to register for an “upon request” package;
* each creditor can change their registration with an “upon request” package;
* each creditor can accept or reject the offer of an “upon invitation” package.

For more information regarding the use of the functions, refer to:

Manual for the creditors -> [https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/manuale-operativo-back-office-pagopa-creditor/funzionalita/gestione-evoluta-commissioni](https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/manuale-operativo-back-office-pagopa-creditor/funzionalita/gestione-evoluta-commissioni)

Manual for the PSPs -> [https://developer.pagopa.it/pago-pa/guides/manuale-bo-psp/manuale-operativo-pagamenti-pagopa-payment-service-provider/funzionalita/gestione-evoluta-commissioni](https://developer.pagopa.it/pago-pa/guides/manuale-bo-psp/manuale-operativo-pagamenti-pagopa-payment-service-provider/funzionalita/gestione-evoluta-commissioni)