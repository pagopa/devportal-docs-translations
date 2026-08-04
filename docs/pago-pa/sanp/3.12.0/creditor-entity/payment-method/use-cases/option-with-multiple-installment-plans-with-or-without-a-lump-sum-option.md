---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/opzioni-di-pagamento/casi-duso/opzione-con-molteplici-piani-rateali-con-o-senza-opzione-totale
---

# Option with multiple installment plans (with or without a single payment option)

This scenario allows for the management of different installment plans.

{% hint style="info" %}
When the citizen chooses a **Payment Option** (a specific installment plan), it disables the **Payment Options** for the other plans and/or any single payment option; the output must only return the Payment Option with the outstanding installments.
{% endhint %}

Example of the response that Creditor Entities must provide for this use case:

```json
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - Option 1 - Single Solution",
        "numberOfInstallments": 1,
        "amount": 120,
        "dueDate": "2024-10-30T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": "unpaid",
        "statusReason": "desc",
        "allCCP": "false",
        "installments": [
          {
            "nav": "347000000880099993",
            "iuv": "47000000880099993",
            "amount": 120,
            "description": "Test Opt Inst - single solution",
            "dueDate": "2024-10-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "unpaid",
            "statusReason": "desc"
          }
        ]
      },
      {
        "description": "Test PayOpt - Option 2 - Installment Plan - 2 installments",
        "numberOfInstallments": 2,
        "amount": 90,
        "dueDate": "2024-12-31T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": "unpaid",
        "statusReason": "desc",
        "allCCP": "false",
        "installments": [
          {
            "nav": "346000000880099993",
            "iuv": "46000000880099993",
            "amount": 30,
            "description": "installment 1",
            "dueDate": "2024-10-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "unpaid",
            "statusReason": "desc"
          },
          {
            "nav": "345000000880099993",
            "iuv": "45000000880099993",
            "amount": 30,
            "description": "installment 2",
            "dueDate": "2024-11-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "unpaid",
            "statusReason": "desc"
          }
        ]
      },
      {
        "description": "Test PayOpt - Option 3 - Installment Plan - 3 installments",
        "numberOfInstallments": 3,
        "amount": 90,
        "dueDate": "2024-12-31T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": "unpaid",
        "statusReason": "desc",
        "allCCP": false,
        "installments": [
          {
            "nav": "344000000880099993",
            "iuv": "44000000880099993",
            "amount": 18,
            "description": "installment 1",
            "dueDate": "2024-10-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "unpaid",
            "statusReason": "desc"
          },
          {
            "nav": "343000000880099993",
            "iuv": "43000000880099993",
            "amount": 18,
            "description": "installment 2",
            "dueDate": "2024-11-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "unpaid",
            "statusReason": "desc"
          },
          {
            "nav": "342000000880099993",
            "iuv": "42000000880099993",
            "amount": 18,
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
