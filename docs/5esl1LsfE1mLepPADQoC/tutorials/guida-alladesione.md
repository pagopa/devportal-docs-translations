# How to join PDND

## Step 1 - Before joining

### PA or Public Service Managers (GSP)

Before starting the subscription process, check that the party’s data recorded in the [IPA](https://www.indicepa.gov.it/ipa-portale/consultazione/indirizzo-sede/ricerca-ente) catalog are correct. Ensure you have access to the PEC (certified email) used as the party’s official digital address in the IPA catalog.

### Publicly Controlled Companies (SCP)

Make sure you have all the company data that may be requested at the time of subscription and that you can access the PEC you will enter in the subscription form.

### Private e-procurement platform operators

Ensure you have completed the AgID certification [process](https://www.agid.gov.it/it/piattaforme/procurement/certificazione-componenti-piattaforme) for platform components. See the e-procurement process [news](https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2023/09/25/procurement-pubblicato-schema-operativo-supporto-del-processo-certificazione) on the AgID website for details.

### Companies and/or insurance groups

Check that your organization is listed in the IVASS [register](https://infostat-ivass.bancaditalia.it/RIGAInquiry-public/ng/#/home). More information is available in the IVASS [letter](https://www.ivass.it/normativa/nazionale/secondaria-ivass/lettere/2023/lm-22-11/index.html?dotcache=refresh) to the market.

{% hint style="info" %}
To assist with onboarding, a [video tutorial](https://www.youtube.com/watch?v=mLCAnUTL3QE) (Italian only) has been created and is included in this subscription guide.
{% endhint %}

## Step 2 - Go to the subscription page

{% embed url="https://selfcare.pagopa.it/onboarding/prod-interop" %}

## Step 3 - Login with SPID or CIE

Log in using SPID or CIE. The person logging in does not need to be the Legal Representative of the party. Legitimacy is still ensured, as the Subscription Agreement will be sent to the party’s digital domicile—automatically retrieved from IPA and not editable.

{% hint style="info" %}
SPID and CIE are eIDAS compliant authentication methods. For more information, see [AgID's news](https://www.agid.gov.it/it/piattaforme/eidas/cie-verso-eidas) (source in Italian).
{% endhint %}

## Step 4 - Select party type

<figure><img src="../.gitbook/assets/Selezione ente onboarding.png" alt=""><figcaption><p>The screen for selecting the party type</p></figcaption></figure>

Indicate the type of party according to articles 2 (paragraph 2) and 64-bis (paragraph 6) of the Digital Administration Code (CAD). If available via IPA, this will be pre-selected, but it can be changed manually.

## Step 5 - Select the party for subscription

<div><img src="../.gitbook/assets/selfcare.pagopa.it_onboarding_prod-interop(Macbook Pro – Screenshot).png" alt="The screen for selecting the party for PA and GSP"> <figure><img src="../.gitbook/assets/Screenshot 2024-10-09 alle 09.36.09.png" alt=""><figcaption><p>The screen for selecting the party for CSP</p></figcaption></figure></div>

* PA and GSP: use the auto-complete _**Search party**_ field (based on the IPA catalog). If your party isn’t listed, click the link below the field to learn how to register it.
* SCP: enter the party’s tax code; the name will appear after clicking _Continue_.

## Step 6 - Enter party data

![The screen where the party’s data is entered, usually pre-filled with the information from the IPA catalog](<../.gitbook/assets/uat.selfcare.pagopa.it_onboarding_prod-interop(Macbook Pro – Screenshot) (2).png>)

Fields like **Company Name**, **Legal Address**, **CEM** (Certified electronic mail), **Tax Code**, and **VAT** number are prefilled from IPA and cannot be edited. You may add a VAT number if it differs from the tax code by checking the appropriate box.

The _**Recipient Code**_ field is always editable.

## Step 7 - Enter the legal representative

![The screen where the information of the legal representative of the party is entered](<../.gitbook/assets/uat.selfcare.pagopa.it_onboarding_prod-interop(Macbook Pro – Screenshot) (3).png>)

Provide details for the Legal Representative. It doesn’t have to be the top manager; it may be a temporary representative or agent with signing authority. The digital signatory ([step 9](guida-alladesione.md#step-9-firmare-digitalmente-laccordo-di-adesione)) must match the person indicated when entering the form.

## Step 8 - Indicate administrators for PDND

![The screen where the data of users with administration privileges is entered](<../.gitbook/assets/uat.selfcare.pagopa.it_onboarding_prod-interop(Macbook Pro – Screenshot) (4).png>)

The people entered on this screen will have the role of _**Administrator**_ in PDND and will have full administrative powers. This is the same figure referred to in AgID guidelines as "Operatore Amministrativo". You can enter up to 3 administrators for the Production environment by clicking _**Add another Administrator**_.

{% hint style="info" %}
All operational roles (_API Operator_ and _Security Operator_) can be added, removed, and managed later, once the joining process is complete.
{% endhint %}

{% hint style="warning" %}
Additional administrators, beyond those indicated during joining, can be added directly from the party’s dashboard for each environment, while to remove them from the Production environment, you will need to fill in the document attached at the bottom of the page and send it to the indicated CEM.
{% endhint %}

* For PA and GSP: once the entry is complete, click _**Continue**_. If there are no errors, the Joining Agreement to be signed is generated and sent to the party’s digital domicile.
* For SCP: once the entry is complete, click _**Continue**_. If there are no errors, an email containing instructions for completing the joining process is sent to the PEC indicated during joining. At this point, you must wait to be contacted by the dedicated Account Team, which will request you to send the required documents mentioned earlier. Once the documents are checked, the Account Team will send the Joining Agreement in CAdES format (.p7m) to the PEC indicated.

## Step 9 - Firmare digitalmente l'Accordo di Adesione

Open the CEM received by your party. Download the attached agreement, which must be signed on behalf of the person indicated as legal representative at [step 7](guida-alladesione.md#step-7-enter-the-legal-representative). The data in the digital signature must match those of the person indicated as legal representative during the form completion phase. The digital signature must be applied once to the entire document, and the standard to use is CAdES.

## Step 10 - Upload the signed agreement

Inside the PEC email, there are two links.

The first is to complete the joining procedure. When you open it, you land on a page where you can upload the signed agreement, as shown in the screenshot below.

![The screen where the joining agreement received at the digital domicile,
signed by the party’s legal representative, is uploaded](<../.gitbook/assets/Screenshot 2022-07-28 at 17.15.59.png>)

If the upload is successful, you will receive positive feedback and also an email to the CEM address confirming the completion of the joining process.

If not, you will be notified of the error. The error may be one of the following types:

1. Generic error: an unidentified error that prevented registration from being completed.
2. Non-compliant attachment error: the agreement is not in the expected format or does not match the one sent by the platform (see the [dedicated section](../about-the-product/normativa-e-approfondimenti/membership-agreement.md) for more details).
3. Digital signature error: the signature does not match the legal representative indicated during the joining phase.
4. Invalid operation error: all cases where the request has already been completed, cancelled, or expired (more than 30 days have passed since the request was sent). If the link in the PEC is no longer valid, you will need to submit the service request again.

An error does not invalidate the procedure. For example, if it is the third type of error, you can have the document signed again and use the same link to upload the Agreement with the new signature.

The second link in the email allows you to cancel the joining request to PDND if it was made by mistake.

{% hint style="info" %}
To ensure the security of the parties, the links in the email are valid for 30 days from receipt of the CEM containing the agreement.
{% endhint %}
