# Single installment plan

This scenario involves a single installment plan in the debt position comprised of an OdP that has n installments, whose start of validity and due dates are managed by the creditor. To be able to close the debt position, it is necessary that all installments in the payment option have been paid.  

Example of a response that the EC must provide and that the PSP must expose for this case:

```json
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - Single Option - Installment plan",
        "numberOfInstallments": 3,
        "amount": 120,
        "dueDate": "2024-12-31T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": not paid,
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
            "status": not paid,
            "statusReason": "desc"
          },
          {
            "nav": "346000000880099993",
            "iuv": "46000000880099993",
            "amount": 40,
            "description": "installment 2",
            "dueDate": "2024-11-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": not paid,
            "statusReason": "desc"
          },
          {
            "nav": "345000000880099993",
            "iuv": "45000000880099993",
            "amount": 40,
            "description": "installment 3",
            "dueDate": "2024-12-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": not paid,
            "statusReason": "desc"
          }
        ]
      }
    ]
  }
]

```
