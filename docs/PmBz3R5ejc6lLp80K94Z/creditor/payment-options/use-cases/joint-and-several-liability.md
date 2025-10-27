# Joint and several liability

In this scenario, each debtor can fulfill the entirety of the debt position. The first debtor who makes the payment closes the debt position. In this scenario, each debtor must be able to view their debt position but never the ones for the other joint and several debtors. The creditor must return as output only the payment options of the debtor associated with the NAV used by the caller (PSP) to query the service. 

{% hint style="info" %} The first debtor who makes the payment closes the debt position.{% endhint %}

Example of a response that the EC must provide for this case:

```javascript
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - Option 1 - Co-obligation 1",
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
            "description": "Test Opt Inst - only option",
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