# 💼 Creating the Dossier

Now you will need to create the **Dossier**, a container that identifies the **set of metadata for the documents** to be signed within a signature request. It allows you to group signature requests by contract type.

Each dossier represents a **specific use case**. For example, you could create a dossier for scholarship documents, named “_**Scholarship Application”**_, and another one _**“Employment Contract”**_ for teaching collaboration contracts. This way, you can create signature requests for users by reusing the same dossier. In fact, all students who need to sign contracts to apply for a scholarship can receive a `signature request` created from the same dossier (in this example, “_Scholarship Application”_).\
The `signature requests` from the same dossier can share the title, support email, and often also the signatures to be included. For this reason, creating a dossier can also facilitate the review of signatures.

\
The **dossier title** will also be shown in the signature request message to the citizen:

![](<.gitbook/assets/Messaggio esempio Comune Ipazia_v2.png>)

{% hint style="warning" %}
**How to write the dossier title**

The dossier title must be **short,** summarizing the subject for which the signature is being requested _(e.g.  Identity Card, Research Contract...)_

- it must be written in **lowercase** and not uppercase, unless it involves initials or acronyms _(e.g.  Identity Card and not IDENTITY CARD)_
- it must not contain **unfamiliar acronyms or initials**
- it must not contain the words "**online**" or "**digital**", nor words like "**notification**" or "**service**".

The dossier title **must NOT be generic** or contain information that is already present _(such as the name of the institution or the text "signature request")._
{% endhint %}

### An example

Here is an example of a call to the endpoint:

```
POST /api/v1/sign/dossiers
```

Let's imagine we need to create a Dossier for signing a **150-hour contract** (`"title":"Contratto 150 ore"`).

The Dossier includes **a single document** (`"title":"Contratto"`), which in turn requires **one** single **mandatory signature** (`"title":"Firma contratto"`) (`"type":"REQUIRED"`) from the user.

#### Want to add more documents to the dossier?

A dossier can be **composed of multiple documents**. You can send multiple PDF documents for signature in a single request by inserting an object for each document into the `documents_metadata` list.

#### Want to add a specific support email for the dossier?

When creating a dossier, you have the option to add a **specific support email for that dossier**. `support_email` is an **optional** field. If it is not specified, the email provided during onboarding will be used as the default support email.

#### Have you created the signature fields using coordinates?

In this case, the message body will be:

```json
{
   "title": "150-hour contract",
   "documents_metadata":[
      {
         "title":"Contract",
         "signature_fields":[
            {
               "clause":{
                  "title":"Sign contract",
                  "type":"REQUIRED"
               },
               "attrs":{
                  "coordinates":{
                     "x":360,
                     "y":100
                  },
                  "size":{
                     "w":170,
                     "h":30
                  },
                  "page":1
               }
            }
         ]
      }
   ],
   "support_email": "demo@assistenza.it"
}
```

#### No signature fields created (transparent signature)?

In this case, the message body will be:

```json
{
   "title": "150-hour contract",
   "documents_metadata":[
      {
         "title":"Contract",
         "signature_fields":[]
      }
   ]
}
```

In all cases, in the response you will receive the created Dossier with its **associated ID** (`dossier_id`).

```json
{
   "id":"01GG4NFBCN4ZH8ETCCKX3766KX",
   "title": "150-hour contract",
   "documents":[
      {
         "title":"Contract",
         "signature_fields":[
            {
               "unique_name":"Signature1",
               "clause":{
                  "title":"Sign contract",
                  "type":"REQUIRED"
               }
            }
         ]
      }
   ]
}
```

In this case, of course, it is assumed that the only transparent signature needed to sign the document is mandatory, which is why "type":"REQUIRED" has been included. In general, in fact, at least one signature must be mandatory or unfair; documents with only optional signatures are not accepted.

{% hint style="warning" %}
**Take note of the `dossier_id`**: you will need it in a later stage.
{% endhint %}

**How to specify if signatures are mandatory, optional, or unfair?**

- To indicate that the signature is mandatory, enter `"type":"REQUIRED"`
- To indicate that the signature is unfair, enter `"type":"UNFAIR"`
- To indicate that the signature is optional, enter `"type":"OPTIONAL"`
