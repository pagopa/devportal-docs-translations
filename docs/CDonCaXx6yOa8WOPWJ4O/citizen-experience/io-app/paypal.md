# PayPal

## Addition of a PayPal account (Onboarding)

The following flow describes the user experience related to adding a PayPal account to the IO app waller.

#### Key steps

1. The user selects a PSP (which can be changed during every payment)
2. The user enters their PayPal credentials
3. The user performs the two-factor authentication (for example in the PayPal app)
4. The user accepts the conditions of use and gives PayPal the mandate to authorize pagoPA transactions managed by the selected PSP
5. The user verifies the functions related to the added method

{% @figma/embed fileId="ETsEpykVH0KNpo9EvcEOOE" nodeId="333:7168" url="https://www.figma.com/file/ETsEpykVH0KNpo9EvcEOOE/Paga-con-PayPal-su-IO?node-id=333%3A7168" %}

## Payment

The flow describes the Payment in IO app experience with the PayPal method.

{% hint style="info" %} Payments with PayPal do not require authorization with the second factor. {% endhint %}

{% hint style="info" %} The method can be added also while a payment is in progress; what is described in [#aggiunta-dellaccount-paypal-onboarding](paypal.md#aggiunta-dellaccount-paypal-onboarding "mention") applies. {% endhint %}

{% @figma/embed fileId="ETsEpykVH0KNpo9EvcEOOE" nodeId="340:9252" url="https://www.figma.com/file/ETsEpykVH0KNpo9EvcEOOE/Paga-con-PayPal-su-IO?node-id=340%3A9252" %}