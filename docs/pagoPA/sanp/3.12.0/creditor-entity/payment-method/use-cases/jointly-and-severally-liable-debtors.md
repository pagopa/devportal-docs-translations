---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/opzioni-di-pagamento/casi-duso/co-obbligati-in-solido
---

# Jointly and Severally Liable

In this scenario, each debtor can settle the entire debt position. The first debtor to make the payment closes the debt position. The scenario requires that each debtor must be able to view their own debt positions and never those of the other jointly liable debtors. The Creditor Entity must only output the Payment Options for the debtor associated with the NAV used by the caller (PSP) to query the service.

{% hint style="info" %}
The first debtor to make the payment closes the debt position.
{% endhint %}

Example of a response that CEs must provide for this use case:

```javascript
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - Option 1 - Joint Debtor 1",
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
            "description": "Test Opt Inst - single option",
            "dueDate": "2024-10-30T23:59:59",
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
