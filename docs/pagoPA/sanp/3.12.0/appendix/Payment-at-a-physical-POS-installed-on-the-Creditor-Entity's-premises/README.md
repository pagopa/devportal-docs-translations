# Payment at a physical POS installed on the Creditor Entity's premises

This section describes the specific use case of a pagoPA payment via a physical POS installed on the Creditor Entity's (EC) premises.

Unlike payments made via physical POS terminals installed at Payment Service Provider (PSP) channels, such as tobacco shops and/or bank branches (which fall under the use case: [Payment of a notice at a PSP](https://developer.pagopa.it/it/pago-pa/guides/sanp/casi-duso/pagamento-di-un-avviso-presso-psp)), this use case is mainly characterized by two distinctive features:

- the physical POS is installed directly on the Creditor Entity's premises;
- the terminal is dedicated to collecting payments due issued by the Creditor Entity where the POS is installed.

The typical use cases that this solution is intended to enable involve over-the-counter payments at the time of service delivery. Examples include a citizen paying for a healthcare service at the local health authority's counters, or a visitor buying an admission ticket directly at a museum's physical ticket office.

The entity can freely choose the integration method that best suits its needs, opting between:

- [Direct Management System-POS Integration](Physical-POS.md)
- [Integration with pagoPA POS Gateway](integrazione-con-pos-gateway-pagopa/) (method currently being defined, which will be added to the direct one)
