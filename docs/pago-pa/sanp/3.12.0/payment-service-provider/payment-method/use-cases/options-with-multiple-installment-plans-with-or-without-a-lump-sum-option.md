---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/prestatore-di-servizi-di-pagamento/opzioni-di-pagamento/casi-duso/opzioni-con-molteplici-piani-rateali-con-o-senza-opzione-totale
---

# Options with multiple installment plans (with or without a lump-sum option)

This scenario allows you to manage several installment plans. Once the citizen begins paying for an installment plan, the Payment Options related to the other plans and/or any single payment option must be disabled and therefore not shown by the PSP. The output must only return the Payment Option with the installments that are still outstanding. Example of a response that CEs must provide and that PSPs must display for this use case:

```json
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - Option 1 - Lump Sum",
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
            "description": "Test Opt Inst - lump sum",
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
