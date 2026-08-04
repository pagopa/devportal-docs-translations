---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/creditor-entity/payment-options/use-cases/single-total-option
---

# Single Total Option

Simplest version of a debt position; when the payment option is paid, the entire position is set to the **PAID** status. This scenario does not require any changes to the debt position's lifecycle management logic.

Example of a response that CEs must provide for this use case:

```json
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - single option",
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
            "description": "Test Opt Inst - single option",
            "dueDate": "2024-10-30T23:59:59",
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
