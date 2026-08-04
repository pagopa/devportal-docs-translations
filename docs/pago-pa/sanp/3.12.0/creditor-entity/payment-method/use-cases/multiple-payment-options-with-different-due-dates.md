---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/opzioni-di-pagamento/casi-duso/piu-opzioni-di-pagamento-con-scadenze-differenti
---

# Multiple payment options with different due dates

This scenario adds the ability to include multiple Payment Options in the debt position with different due dates, as well as other data that might differ, such as the amount.

{% hint style="info" %}
When a citizen chooses one of the available **Payment Options**, the others are disabled and can no longer be paid.
{% endhint %}

Example of the response that CEs must provide for this use case:

```json
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - Single Option - Installment Plan",
        "numberOfInstallments": 3,
        "amount": 120,
        "dueDate": "2024-12-31T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": "unpaid",
        "statusReason": "desc",
        "allCCP": "false",
        "installments": [
          {
            "nav": "347000000880099993",
            "iuv": "47000000880099993",
            "amount": 40,
            "description": "installment 1",
            "dueDate": "2024-10-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "unpaid",
            "statusReason": "desc"
          },
          {
            "nav": "347000000880099993",
            "iuv": "46000000880099993",
            "amount": 40,
            "description": "installment 2",
            "dueDate": "2024-11-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "unpaid",
            "statusReason": "desc"
          },
          {
            "nav": "345000000880099993",
            "iuv": "46000000880099993",
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
