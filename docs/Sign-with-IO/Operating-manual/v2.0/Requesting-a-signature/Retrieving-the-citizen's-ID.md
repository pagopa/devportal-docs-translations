# Retrieving the Citizen's ID

To retrieve the **Citizen's ID** (`signer_id`), you must make a call to the `POST /api/v1/sign/signers` **endpoint**

In the message body, you will need to specify the user's **Fiscal Code**:

```json
{ 
  "fiscal_code": "AAABBB00A00A000A"
}
```

You will receive the user's `signer_id` as output:

```json
{ 
  "id": "01GG4TG9FP2D3JPWFTAM0WEFTG"
}
```

{% hint style="info" %}
If the user has never registered on IO - that is, if they have never authenticated with SPID or CIE on the IO app - you will not be able to retrieve their `signer_id.` Before sending a signature request, make sure to ask the user to log in to the IO app.
{% endhint %}

{% hint style="warning" %}
During the testing phase, only the Fiscal Codes entered in the Back Office on the Reserved Area will be enabled for the service, and therefore it will only be possible to retrieve the ID for these.
{% endhint %}
