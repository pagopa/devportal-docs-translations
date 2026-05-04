# Options with multiple installment plans (with or without the total option)

With this scenario, it is possible to manage various installment plans. Once the citizen makes a payment for an installment plan, the OdP (payment options) for the other plans and/or the possible single-payment option must be disabled and therefore no longer shown by the PSP, the output returned must be only the OdP with the installments still to be paid. Example of a response that the EC must provide and that the PSP must expose for this case:

```json
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - Option 1 - One-time payment",
        "numberOfInstallments": 1,
        "amount": 120,
        "dueDate": "2024-10-30T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": not paid,
        "statusReason": "desc",
        "allCCP": "false",
        "installments": [
          {
            "nav": "347000000880099993",
            "iuv": "47000000880099993",
            "amount": 120,
            "description": "Test Opt Inst - soluzione unica",
            "dueDate": "2024-10-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": not paid,
            "statusReason": "desc"
          }
        ]
      },
      {
        "description": "Test PayOpt - Option 2 - Installment plan - 2 installments",
        "numberOfInstallments": 2,
        "amount": 90,
        "dueDate": "2024-12-31T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": not paid,
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
            "status": not paid,
            "statusReason": "desc"
          },
          {
            "nav": "345000000880099993",
            "iuv": "45000000880099993",
            "amount": 30,
            "description": "installment 2",
            "dueDate": "2024-11-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": not paid,
            "statusReason": "desc"
          }
        ]
      },
      {
        "description": "Test PayOpt - Option 3 - Installment plan - 3 installments",
        "numberOfInstallments": 3,
        "amount": 90,
        "dueDate": "2024-12-31T23:59:59",
        "validFrom": "2024-09-30T23:59:59"",
        "status": not paid,
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
            "status": not paid,
            "statusReason": "desc"
          },
          {
            "nav": "343000000880099993",
            "iuv": "43000000880099993",
            "amount": 18,
            "description": "installment 2",
            "dueDate": "2024-11-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": not paid,
            "statusReason": "desc"
          },
          {
            "nav": "342000000880099993",
            "iuv": "42000000880099993",
            "amount": 18,
            "description": "installment 3",
            "dueDate": "2024-12-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "not paid",
            "statusReason": "desc"
          }
        ]
      }
    ]
  }
]

```