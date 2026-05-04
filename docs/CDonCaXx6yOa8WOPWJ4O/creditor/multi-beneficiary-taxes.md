# Multi-beneficiary taxes

The current payment workflows activated on the pagoPA platform are used for the following purposes:

* Manage a single notice, also if the paid amount is credited, in parts, to accounts of different beneficiaries (e.g. multi-beneficiary institution);
* Provide all the beneficiaries with the same information and notices required for the creditor who issues the notice.

Other uses of the pagoPA platform include, but are not limited to:

* Notice whose amount is credited in full to a single account of the same beneficiary who created the debt position (e.g. single-beneficiary, single-payment);
* Single notice whose amount is credited, in parts, to different accounts of the same beneficiary who created the debt position (e.g. single-beneficiary, multi-payment, multi-iban);
* Single notice whose amount is credited to a single account of the same beneficiary who created the debt position but is divided into multiple transfers within the response of the [paGetPayment](../appendices/primitive.md#pagetpayment) (single-beneficiary, multi-payment, multi-taxonomy);
* Notice whose amount is credited in full to a single account of the beneficiary, which is different than the institution that created the debt position (e.g. SUAP case, single beneficiary);
* Single notice whose amount is credited, in parts, to accounts of different beneficiaries, which do not include the institution that created the debt position (e.g. SUAP case, multi beneficiaries);

Keep in mind that everything that is compatible with the syntactic and semantic checks, best practices, quality indicators and all the other information on the function of the pagoPA platform provided in this document must be considered legitimate.