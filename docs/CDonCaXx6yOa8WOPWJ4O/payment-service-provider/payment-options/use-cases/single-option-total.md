# Single total option

A more simple version of the debt position, at the moment in which the payment option is paid, the status of the entire position becomes **PAID**. This scenario does not involve any change to the logic for managing the life cycle of the debt position.

Example of a response that the EC must provide and that the PSP must expose for this case:

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
        "status": not paid,
        "statusReason": "desc",
        "allCCP": "false",
        "installments": [
          {
            "nav": "347000000880099993",
            "iuv": "47000000880099993",
            "amount": 120,
            "description": "Test Opt Inst - unica opzione",
            "dueDate": "2024-10-30T23:59:59",
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
