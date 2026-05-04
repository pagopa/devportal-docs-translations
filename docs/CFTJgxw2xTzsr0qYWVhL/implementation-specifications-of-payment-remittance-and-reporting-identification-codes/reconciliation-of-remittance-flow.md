# Reconciliation of remittance flow

The remittance made by the PSP shall be reconciled by the Creditor taking into account the **\<Flowidentifier>** component present in Remittance Information (attribute AT-05) of the SEPA Credit Transfer with which the remittance to the Creditor was made ([fund-transfer-operation.md](fund-transfer-operation.md "mention")) and the Flowidentifier present in the [reporting-flow.md](reporting-flow.md "mention").

As feedback, the _TotalAmountPayments_ datum of the reporting flow must match the _Amount_ datum (attribute AT-04) of the aforementioned remittance SCT.
