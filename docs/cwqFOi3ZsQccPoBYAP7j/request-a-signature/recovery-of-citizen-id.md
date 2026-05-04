# Recovery of the ID of the citizen

To recover the **ID of the citizen** (`signer_id`) you must make a call to the **endpoint** `POST /api/v1/sign/signers`

You must specify the **fiscal code** of the user in the body of the message:

```json
{ 
  "fiscal_code": "AAABBB00A00A000A"
}
```

You will receive the user `signer_id` as output:

```json
{ 
  "id": "01GG4TG9FP2D3JPWFTAM0WEFTG"
}
```

{% hint style="info" %} If the user never registered in IO - or never carried out the authentication process with SPID or CIE on the IO app - you will not be able to recover the `signer_id.`Before proceeding with sending a signature request make sure to ask the user to log in to the IO app. {% endhint %}

{% hint style="warning" %} During the test phase, only the fiscal codes entered in the back office of the reserved area will be enabled for the service, and therefore it will only be possible to recover the ids only for these. {% endhint %}