# 🗂️ Usage guidelines

The behavior of the Sign with IO button can be chosen by the Entity during the integration phase. Below we list some possible scenarios to manage and the related advice on how to handle them.

### Signature flow successfully completed via the Sign with IO button <a href="#flusso-di-firma-cta-terminato-con-successo" id="flusso-di-firma-cta-terminato-con-successo"></a>

1. The user is in their private area on the Entity's portal, chooses to proceed with signing a document, and therefore clicks the Sign with IO button
2. Clicking the button will initiate a signature request for that user, who will then have to wait a min. of. 30 seconds to a max of 1 minute to continue.

{% hint style="success" %}
On the UI side, a modal with a **waiting loader** has been provided for the Sign with IO button at this stage.
{% endhint %}

3. Once loading is complete, the user lands on the IO app via the _universal link_.

4. The user proceeds to sign on the IO app

### **Signature in progress (to be completed)**

The user enters the signature flow, then interrupts it before completing it. At this point, they click the Sign with IO CTA again to complete the signature.

{% hint style="info" %}
In this case, it is recommended that the Entity [check the signature status](../Checking-the-status-of-a-signature.md) and, if there is a **signature request in progress (WAIT\_FOR\_SIGNATURE)**, allow the user to reopen the same signature request via the CTA and complete the process.
{% endhint %}

### **Signature already completed**

After completing the signature process, the user clicks the Sign with IO CTA again.

{% hint style="info" %}
In this case, it is recommended that the Entity [check the signature status](../Checking-the-status-of-a-signature.md) and, if the **signature has already been completed by the user (SIGNED)**, prevent a new signature process from starting when the CTA is clicked again. The best solution might be to delete/disable the Sign with IO CTA and button and offer the user a thank you page on the channel, thanking them for the completed signature.
{% endhint %}

### **Signature in progress (completed on user side but in progress on QTSP side)**

{% hint style="info" %}
In this case, it is recommended that the Entity [check the signature status](../Checking-the-status-of-a-signature.md) and, **if the signature is being completed (WAIT\_FOR\_QTSP)**, offer the user an information page that directs them to the IO app to check the signature's status.
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-03-28 alle 17.42.12.png" alt=""><figcaption></figcaption></figure>

### **Signature error (document issues)**

The user proceeds correctly with the signature in the app, but at the end of the signature flow, they receive an error message informing them that it was not possible to proceed with signing the documents. At this point, they click the Sign with IO CTA again.

If it was not possible to complete the signature, the reason is related to technical problems in the documents sent by the Entity.

{% hint style="info" %}
In this case, it is recommended that the Entity [check the signature status](../Checking-the-status-of-a-signature.md) and, in case of a **rejected signature (REJECTED)**, not allow the user to start a new signature request with that same CTA. It is recommended to disable/delete the CTA or replace it with one linked to correct documents. Before this is addressed, it is recommended to provide an informational error page.
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-03-28 alle 17.40.30.png" alt=""><figcaption></figcaption></figure>

NB: Entities are provided with an endpoint for validating documents before sending the signature request to prevent this problem from occurring most of the time.

### **Signature error (temporary problems on the IO app)**

The user clicks on the Sign with IO CTA but the IO app is temporarily unresponsive.

{% hint style="info" %}
In this case, it is recommended that the Entity display a temporary error page advising the user to try signing again in a few minutes.
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-03-28 alle 17.41.10.png" alt=""><figcaption></figcaption></figure>
