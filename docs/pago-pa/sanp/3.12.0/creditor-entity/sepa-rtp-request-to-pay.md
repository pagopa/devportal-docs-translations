---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/sepa-rtp-request-to-pay
---

# SEPA RTP - Request To Pay

In particular, the **SEPA Request To Pay** (SRTP) consists of the delivery of a Creditor Entity's (EC) debt position (Pd) to the channel registered by the debtor for that specific debt position, subject to the PSP and/or the Service Provider that owns or manages the channel registered by the debtor adhering to the SRTP service.

This delivery, characteristic of RTP, is included in the services of the pagoPA platform. Therefore, starting from March 1, 2026, the pagoPA platform will carry out this delivery automatically without any ad hoc consent and/or contractual agreement from the EC. This delivery requires only and exclusively that 3 conditions are met, namely:

1. the PSP and/or Service Provider (that manages the channel registered by the Pd's debtor) must have already signed an agreement with PagoPA S.p.A. for the SRTP service;
2. the debtor of the Pd must have expressly chosen a channel to receive their Pds in push mode via the SRTP service;
3. the EC must not have used the prefix 6/, 7/, or 8/ in the taxonomy of the individual Pd.

However, it is understood that a taxonomy code different from prefixes 6/, 7/, 8/ signals to the platform the full delivery of the Pd on the channels of PSPs or Service Providers that have from time to time adhered to the SRTP service and to debtors who have from time to time registered the channels of said PSPs or Service Providers for receiving their Pds.

The Creditor Entity retains the option to deactivate (opt-out) the SEPA-RTP service; this feature is available in the Back-Office.

The taxonomy must be correctly specified by the EC when creating the debt position.

With reference to each Pd, the Creditor Entity has the right to modify the entered prefix, either by inserting prefix 6/, 7/, or 8/ in a Pd that did not previously have it, or by removing said prefix 6/, 7/, or 8/ from a Pd that previously had it, it being understood that the EC must always populate the field related to the prefix.

In the event of a modification involving the insertion of prefix 6/, 7/, or 8/, the pagoPA platform:

1. will never be able to recall Pds already delivered to the relevant debtor;
2. can only refrain from delivering Pds not yet delivered, as they are issued to a debtor who, at the date of the EC's modification, had not yet registered any channel for SRTP.

In the event of a modification involving the removal of prefix 6/, 7/, or 8/, if the debtor of the Pd is already registered for the SRTP service at the time of the EC's modification, the pagoPA platform will deliver said Pd to the channels already registered by the relevant debtor.

If the EC has made changes to the Pd and the debtor has in the meantime registered the channel for SRTP, said Pd will be delivered.

The taxonomy codes specified by the EC are stored by PagoPA S.p.A., together with any changes made to them over time.

PagoPA S.p.A. makes this evidence on debt positions available to the relevant EC, upon request by the latter.

The Creditor Entity acknowledges that the correct identification of the taxonomy codes associated with its individual Pds is the sole responsibility of the Entity itself, thus including any parties (e.g. Technology Partners or Technology Intermediaries) delegated by it to perform the related operational activity.

The EC therefore undertakes to provide, in a complete, accurate, and timely manner, all the information necessary for the correct management of the Pd for the activities for which PagoPA S.p.A. is responsible. The latter cannot under any circumstances be held liable, including with respect to third parties (including end users), for inaccuracies, omissions, or errors in the taxonomy codes indicated, nor for any direct or indirect consequences arising from incorrect or incomplete information provided by the EC.

The use of prefixes 6/, 7/, 8/ results in the exclusion of a given debt position from the "digital notification" services, i.e., Request to Pay. In fact, the position will be excluded only if both of the following conditions are met:

- the EC has specified prefix 6/, 7/, 8/;
- the taxonomy is syntactically correct.

In the case of a multi-beneficiary notice, if at least one of the transfers has specified prefix 6/, 7/, 8/ and the taxonomy is syntactically correct, it will be excluded.

### Syntactic specifications of the prefixes

This paragraph specifies the syntactic meaning of each individual prefix that determines the non-delivery of the individual Pd.

With prefix 6/, the EC signals to the platform that the speed of delivery of the Pd to its debtor could have a negative effect on the full payment of the credit amount of the said Pd. The assessment of whether or not this negative effect may occur is left to the free discretion of the Creditor Entity.

That said, by way of example only, it should be noted that, unless otherwise assessed by the Creditor Entity, it could consider the occurrence of the situation just described—i.e., a possible failure to pay the full amount of the Pd—in cases where the object of the payment may be subject to a "ravvedimento operoso" (voluntary amendment) by the debtor. This means the tax/service/amount due that generated the Pd could be paid by the debtor without the application of penalties, or with a reduction of the penalties, where the delivery of the Pd to the payer via SRTP precedes the formal knowledge of the underlying (assessment) act.

Again, by way of example only, and always subject to any different assessment by the Creditor Entity, it could consider the occurrence of the situation just described—i.e., a possible failure to pay the full amount of the Pd—where the Pd is connected to a notification process for the payment request to the debtor, as the full amount (including notification costs) of said Pd will be due from the debtor only after the related notification has been completed for them.

Indeed, notwithstanding its right to have the notification costs or other indirect costs fully refunded by the debtor as they are recoverable from them, it might be in the EC's interest to wait for the completion of the related notification in order to calculate and/or claim such costs from the debtor at the time of the Pd payment. A possible solution to this eventuality could be for the EC to choose to apply a flat-rate, ex-ante amount for notification costs and/or other expense items (e.g. for indirect costs) or to consider, if applicable, recovering the full payment of notification costs not previously calculated and paid from the debtor with a separate and subsequent Pd.

It should be noted, given the purely exemplary nature of the indications provided so far, that prefix 6/ can be used by the Creditor Entity for any other reason that, in the EC's opinion, justifies the request to the pagoPA platform not to deliver the debt position, as there is no obligation for the EC to state or indicate the underlying reason for using prefix 6/.

With prefix 7/, the EC signals to the pagoPA platform that the Pd cannot be delivered by the pagoPA platform because the EC has already exclusively contracted a delivery service for the same Pd with another operator and, therefore, cannot also assign the delivery of that same Pd to PagoPA S.p.A.

With prefix 8/, the EC signals to the pagoPA platform the occurrence of both cases referred to in prefix 6/ and prefix 7/.

<br>
