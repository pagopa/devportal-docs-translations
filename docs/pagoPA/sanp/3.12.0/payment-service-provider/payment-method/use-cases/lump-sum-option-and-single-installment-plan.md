---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/prestatore-di-servizi-di-pagamento/opzioni-di-pagamento/casi-duso/opzione-totale-e-piano-rateale-unico
---

# Lump-sum option and (single) installment plan

This scenario provides the citizen with the option to pay the debt position via a lump-sum option and an installment plan.

{% hint style="info" %}
Choosing one of the two available **payment options** (lump-sum option or installment plan) disables the other **payment option**, which can no longer be paid.
{% endhint %}

Example of the response that CEs must provide and that PSPs must display for this use case:

```json
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - Option 1 - Single Payment",
        "numberOfInstallments": 1,
        "amount": 120,
        "dueDate": "2024-10-30T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": unpaid,
        "statusReason": "desc",
        "allCCP": "false",
        "installments": [
          {
            "nav": "347000000880099993",
            "iuv": "47000000880099993",
            "amount": 120,
            "description": "Test Opt Inst - single payment",
            "dueDate": "2024-10-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": unpaid,
            "statusReason": "desc"
          }
        ]
      },
      {
        "description": "Test PayOpt - Option 2 - Installment Plan",
        "numberOfInstallments": 3,
        "amount": 120,
        "dueDate": "2024-12-31T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": unpaid,
        "statusReason": "desc",
        "allCCP": "false",
        "installments": [
          {
            "nav": "346000000880099993",
            "iuv": "46000000880099993",
            "amount": 40,
            "description": "installment 1",
            "dueDate": "2024-10-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "unpaid",
            "statusReason": "desc"
          },
          {
            "nav": "345000000880099993",
            "iuv": "45000000880099993",
            "amount": 40,
            "description": "installment 2",
            "dueDate": "2024-11-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "unpaid",
            "statusReason": "desc"
          },
          {
            "nav": "344000000880099993",
            "iuv": "44000000880099993",
            "amount": 40,
            "description": "installment 3",
            "dueDate": "2024-12-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "unpaid",
            "statusReason": "desc"
          }
        ]
      }
    ]
  }
]

```
