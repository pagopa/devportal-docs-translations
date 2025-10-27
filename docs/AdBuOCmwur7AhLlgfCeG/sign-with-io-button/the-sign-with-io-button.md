# 💡 The sign with IO button

## What is the “Sign with IO” button?

It is the component used to direct the user to the signature function of the IO app, starting from a channel provided by the institution (website, mobile app etc.).

<figure><img src="../.gitbook/assets/Screenshot 2023-04-28 alle 15.59.29.png" alt=""><figcaption></figcaption></figure>

The flow that refers to the product Sign with IO as a function that makes it possible to sign documents and contracts that were pre-compiled with user data does not permit the signature of templates to be compiled autonomously in the IO app. With respect to the flow, Message in IO offers a **second engagement method** (from the website of the institution and not via a message in the IO app)

The Sign with IO button, therefore, can only be used for users that were already identified (in the reserved areas of the institutions), because it is linked to a **specific fiscal code** and a specific **dossier**. The creation of the signature request takes place when the user clicks the Sign with IO button.

The sign with IO APIs created for the message flow remain the same for both flows. However, also the widget of the Sign with IO button is made available to the institutions

The information for integrating the Sign with IO button is provided below:

### What is the Sign with IO button? <a href="#differenze-con-il-flusso-standard-di-firma-con-io" id="differenze-con-il-flusso-standard-di-firma-con-io"></a>

The Sign with IO button propagates a _universal link_ that will permit:

* users who are navigating using a mobile device and have installed the IO app to wake up the app and proceed with the signature.
* users who are navigating from a desktop to access a method with a QR code to frame with the camera of their device to open the IO app and proceed with the signature.
* users who are registered on IO but do not have the app installed in their device to access the page of the store where they can obtain it.

{% hint style="info" %}

#### Remember to validate the documents <a href="#endpoint-per-la-validazione-dei-documenti" id="endpoint-per-la-validazione-dei-documenti"></a>

To prevent that clicking the button interrupts the flow due to problems in the uploaded documents (e.g. the signature fields were inserted incorrectly), it is recommended to [always validate the documents](../the-signature-process/prepare-the-documents/validate-documents.md) to be uploaded via the provided endpoint. {% endhint %}

{% content-ref url="installation-and-use.md" %} [installation-and-use.md](installation-and-use.md) {% endcontent-ref %}

{% content-ref url="use-guidelines.md" %} [use-guidelines.md](use-guidelines.md) {% endcontent-ref %}

{% content-ref url="graphic-standards.md" %} [graphic-standards.md](graphic-standards.md) {% endcontent-ref %}