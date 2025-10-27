# 🗂️ Use guidelines

The institution can select the behaviors of the Sign with IO button during the integration phase. The possible scenarios to be managed and consequent advice on how to handle them are listed below.

### Signature flow completed successfully with the Sign with IO button <a href="#flusso-di-firma-cta-terminato-con-successo" id="flusso-di-firma-cta-terminato-con-successo"></a>

1. The user is in their reserved area on the portal of their institution, decides to proceed with signing the document, and therefore clicks the Sign with IO button
2. Clicking the button will start a signature request for that user, who therefore must wait between 30 seconds to 1 minute to be able to proceed.

{% hint style="success" %} On the UI side, a mode with a **loading wait time** is provided for the Sign with IO button during this phase. {% endhint %}

 3\.  When loading is complete, the user will land in the IO app via the _universal link._

 4\. The user will proceed on the IO app and sign

### **Signature in progress (to be completed)**

The user accesses the signature flow, then interrupts it before finishing it. At this point, they return to click the Sign with IO CTA to complete the signature.

{% hint style="info" %} The institution is recommended in this phase to [check the status of the signature](../verify-the-status-of-a-signature.md) and, in the case of a **signature request in progress (WAIT_FOR_SIGNATURE)**, to permit the user via CTA to reopen the signature request and complete the process. {% endhint %}

### **Signature completed**

After completing the signature process, the user clicks the Sign with IO CTA.

{% hint style="info" %} In this case, the institution is recommended to [check the status of the signature](../verify-the-status-of-a-signature.md) and, if the **signature is completed by the user (SIGNED)**, prevent that clicking again on the CTA starts a new signature process. The best solution could be to eliminate/inhibit the CTA and the Sign with IO button and offer the user a thank you page on the channel, thanking them for signing. {% endhint %}

### **Signature in progress (user side completed but signature on the QTSP side in progress)**

{% hint style="info" %} In this case, the institution is recommended to [check the status of the signature](../verify-the-status-of-a-signature.md) and, **if the signature is being completed (WAIT_FOR_QTSP)** to offer the user an information page that refers to the IO app to check the status of the signature. {% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-03-28 alle 17.42.12.png" alt=""><figcaption></figcaption></figure>

### **Signature error (problems with the documents)**

The user proceeds correctly with the signature in app, but at the end of the signature flow they receive an error message that informs them that it was not possible to sign the documents. At this point, they return to click the Sign with IO CTA.

If it was not possible to complete the signature, the reason is related to technical problems in the document(s) sent by the institution. 

{% hint style="info" %} The institution is recommended in this phase to [check the status of the signature](../verify-the-status-of-a-signature.md) and, in the case of a **REJECTED** signature, to not permit the user to start a new signature request with the same CTA. It is recommended to inhibit/eliminate the CTA or to replace it with one linked to the correct documents. Before acceptance, it is recommended to provide an explanatory error page. {% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-03-28 alle 17.40.30.png" alt=""><figcaption></figcaption></figure>

NB: institutions are provided with an endpoint for the validation of documents before sending the signature request to prevent this problem from occurring most of the time.

### **Signature error (temporary problems on the IO APP)**

The user clicks the Sign with IO CTA but the IO app does not respond temporarily.

{% hint style="info" %} In this case, the institution is recommended to insert a temporary error page that suggests the user to wait a few minutes before trying to sign again. {% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-03-28 alle 17.41.10.png" alt=""><figcaption></figcaption></figure>

