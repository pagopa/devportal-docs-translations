---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/payment-service-provider/payment-options/use-cases/single-installment-plan
---

# Single Installment Plan

This scenario involves a single installment plan within the debt position, composed of one Payment Option containing n Installments (installments) whose validity start dates and due dates are managed by the EC. For the debt position to be closed, all installments within the Payment Option must be paid.

Example of the response that ECs must provide and that PSPs must display for this use case:

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
        "status": unpaid,
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
            "status": unpaid,
            "statusReason": "desc"
          },
          {
            "nav": "346000000880099993",
            "iuv": "46000000880099993",
            "amount": 40,
            "description": "installment 2",
            "dueDate": "2024-11-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": unpaid,
            "statusReason": "desc"
          },
          {
            "nav": "345000000880099993",
            "iuv": "45000000880099993",
            "amount": 40,
            "description": "installment 3",
            "dueDate": "2024-12-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": unpaid,
            "statusReason": "desc"
          }
        ]
      }
    ]
  }
]

```
