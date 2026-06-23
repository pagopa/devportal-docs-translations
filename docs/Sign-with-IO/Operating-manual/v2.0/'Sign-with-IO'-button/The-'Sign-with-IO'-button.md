# 💡 The Sign with IO Button

## What is the "Sign with IO" button?

It is the component used to direct the user to the IO app's signing feature from a channel provided by the Public Administration body (website, mobile app, etc.).

<figure><img src="../.gitbook/assets/Screenshot 2023-04-28 alle 15.59.29.png" alt=""><figcaption></figcaption></figure>

The flow is part of the Sign with IO product, a feature that allows users to sign documents and contracts already pre-filled with their data. It does not allow for signing templates to be filled out independently in the IO app. Compared to the Message on IO flow, it offers a **second engagement method** (from the Public Administration body's website and not via a message in the IO app)

Therefore, the Sign with IO button can only be provided to already identified users (in the private areas of Public Administration bodies), as it is linked to a **specific tax code** and a specific **dossier**. The Signature Request is created when the user clicks the Sign with IO button.

The Sign with IO APIs, created for the message flow, remain the same for both flows. However, the Sign with IO button widget is also made available to Public Administration bodies

Below is the information for integrating the Sign with IO button:

### What is the Sign with IO button? <a href="#differenze-con-il-flusso-standard-di-firma-con-io" id="differenze-con-il-flusso-standard-di-firma-con-io"></a>

A _universal link_ will be propagated through the Sign with IO button, which will allow:

- users browsing from a mobile device who have the IO app installed to wake up the app and proceed with the signature.
- users browsing from a desktop to access a modal with a QR code to scan with their device's camera to open the IO app and proceed with the signature.
- users who are registered on IO but do not have the app installed on their device to access the store page where they can get it.

{% hint style="info" %}
**Remember to validate documents**

To prevent the flow from being interrupted when the button is clicked due to issues with the uploaded documents (e.g. the signature fields have been entered incorrectly), we recommend that you always [validate the documents](../The-signing-process/Preparing-documents/Validating-documents.md) to be uploaded via the endpoint provided.
{% endhint %}

{% content-ref url="Installation-and-use.md" %}
[installazione-e-uso.md](Installation-and-use.md)
{% endcontent-ref %}

{% content-ref url="Usage-guidelines.md" %}
[linee-guida-di-utilizzo.md](Usage-guidelines.md)
{% endcontent-ref %}

{% content-ref url="Graphic-standards.md" %}
[standard-grafici.md](Graphic-standards.md)
{% endcontent-ref %}
