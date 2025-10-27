# 💼 Create the dossier

Now you must create the **dossier**, a container that identifies the **set of document metadata** to be signed within a signature request. It makes it possible to group the signature requests by type of contract. 

Each dossier represents a **specific use case**. For example, you can create a dossier for documents for scholarships, called “_**Scholarship request”**_, and another _**“Insurance contract”**_ for educational collaboration contracts. This makes it possible to create the signature requests for users, reusing the same dossier. In fact, all students who must sign contracts to request a scholarship must receive a `signature request` created based on the same dossier (in this example, “_Scholarship request”_).  
The `signature requests` for the same dossier can have in common the title, email of reference and often also the signatures to be inserted. For this reason it is easier to create a dossier also for the revision of signatures.

  
The **title of the dossier** will also be specified in the signature request message to the citizen: 

<img src=".gitbook/assets/Screenshot 2023-02-14 alle 17.08.30.png" alt="" data-size="original">

{% hint style="warning" %} **How to write the title of the dossier**

The title of the dossier is comprised of three elements: the name of the institution, the title of the dossier, which is also the subject of the request, the test “Signature request".

The title of the request must be **brief,** summarizing the reason for which the signature is requested (e.g. ID card, research contract...)

* it must have a maximum length of **75 characters**, spaces included
* it must be written in **lowercase** and not uppercase letters, unless it is an abbreviation or acronym (e.g. ID card and not ID CARD)
* it must not contain **abbreviations or acronyms that are not well known**
* it must not contain the words "**online**" or "**digital**", or words such as "**notification**" or "**service**".

The title of the dossier **may NOT be generic** or contain information that is already present (such as the name of the institution or the text “signature request"). {% endhint %}

### An example 

Here is an example of a call to the endpoint:

``` POST /api/v1/sign/dossiers ```

Imagine you have to create a dossier for the signature of a **150 hour contract** (`"title":"150 hour contract`"). 

The dossier has **only one document** (`"title":"Contract`"), which in turn requires only **one** **signature** (`"title":"Sign contract`") **required** (`"type":"REQUIRED`") by the user. 

#### Do you want to add other documents to the dossier?

A dossier can have **multiple documents**. You can send multiple PDF documents to be signed in a single request, entering a subject for each document in the list `documents_metadata`.

#### Do you want to add a specific support email for the dossier?

When creating a dossier, you can enter a **specific support email for that dossier**. `support_email` is an **optional** field. If it is not specified, the default mail entered during the onboarding phase will be used by default.

#### Did you create signature fields with coordinates?

In this case, the body of the message will be:

```json
{
   "title": "150 hour contract",
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

#### Did you not create the signature fields (transparent signature)?

In this case, the body of the message will be:

```json
{
   "title": "Sign contract",
   "documents_metadata":[
      {
         "title":"Contract",
         "signature_fields":[]
      }
   ]
}
```

In all cases, the response received will contain the dossier created with the relative **associated ID** (`dossier_id`). 

```json
{
   "id":"01GG4NFBCN4ZH8ETCCKX3766KX",
   "title": "150 hour contract",
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

In this case, of course, it is assumed that the only transparent signature needed to sign the document is required, for this reason the "type":"REQUIRED” was added. In general, in fact, at least one signature must be required or unfair, documents with only optional signatures are not accepted. 

{% hint style="warning" %} **Take note of the `dossier_id`**: you will need it in a following phase. {% endhint %}

**How can you indicate if signatures are required, optional or vessatorie?**

* To indicate that the signature is required, enter the `"type":"REQUIRED"`
* To indicate that the signature is unfair, insert the `"type":"UNFAIR"`
* To indicate that the signature is optional, enter the `"type":"OPTIONAL"`
