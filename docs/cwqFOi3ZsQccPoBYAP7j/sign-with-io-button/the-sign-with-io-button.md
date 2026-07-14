# 💡 The sign with IO button

## What is the “Firma con IO” button?

It is the component used to direct the user to the signature feature in the IO app from a channel made available by the Entity, such as a website, mobile app, and so on.

<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

This flow is part of the Firma con IO product and allows users to sign documents and contracts that have already been pre-filled with their data. It does not allow users to sign templates that they fill in independently in the IO app.

Compared with the “Message on IO” flow, it offers a second engagement method: from the Entity’s website, rather than through a message in the IO app.

The Firma con IO button can therefore only be shown to users who have already been identified, for example in the Entity’s reserved areas, because it is linked to a specific tax code and a specific dossier. The signature request is created when the user clicks the Firma con IO button.

The Firma con IO APIs, originally created for the message flow, remain the same for both flows. However, Entities are also provided with the Firma con IO button widget.

Below you can find the information needed to integrate the Firma con IO button.

### What is the Firma con IO button?

Through the Firma con IO button, a universal link will be propagated that allows:

* users browsing from mobile who have the IO app installed to open the app and proceed with the signature;
* users browsing from desktop to access a modal with a QR code, which they can scan with their device camera to open the IO app and proceed with the signature;
* users who are registered on IO but do not have the app installed on their device to access the store page where they can download it.

{% hint style="info" %}
Remember to validate the documents

To prevent the flow from being interrupted when the user clicks the button due to issues with the uploaded documents, such as signature fields being added incorrectly, we recommend always validating the documents before uploading them by using the dedicated endpoint.
{% endhint %}

{% content-ref url="installation-and-use.md" %}
[installation-and-use.md](installation-and-use.md)
{% endcontent-ref %}

{% content-ref url="use-guidelines.md" %}
[use-guidelines.md](use-guidelines.md)
{% endcontent-ref %}

{% content-ref url="graphic-standards.md" %}
[graphic-standards.md](graphic-standards.md)
{% endcontent-ref %}
