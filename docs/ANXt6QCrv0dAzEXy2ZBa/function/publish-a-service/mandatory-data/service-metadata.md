---

description: Data related to service_metadata
---

# Service metadata

### **description**

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th width="518"></th></tr></thead><tbody><tr><td>Description</td><td>Description of the service in markdown format</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>Yes, if the flag <code>is_visible</code> &egrave; <code>true</code></td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} “test text \[IO Italy]([https://io.italia.it/](https://io.italia.it/))” {% endtab %} {% endtabs %}

{% hint style="info" %} To test the syntax in markdown, you can use an [online service such as Stackedit](https://stackedit.io/app). {% endhint %}

### **privacy_url**

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Web address that contains the privacy policy for the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>Yes</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} “https://io.italia.it/privacy-policy/” {% endtab %} {% endtabs %}

### **scope**

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td><p>Property that inserts the service in the list of local or national services. The possible values are:</p><ol><li><code>LOCAL</code> for local services (e.g. municipalities)</li><li><code>NATIONAL</code> for national services (e.g. national, regional ministries, agencies/institutions)</li></ol></td></tr><tr><td>Type</td><td>String <code>(LOCAL|NATIONAL)</code></td></tr><tr><td>Mandatory</td><td>Yes</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} “LOCAL” {% endtab %} {% endtabs %}

### **address**

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Address of the institution or department providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} “Via Roma, 56” {% endtab %} {% endtabs %}

### **app_android**

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>If the service requires the use of a specific app, the link must be indicated here to download it from the Google Play Store (Android)</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} “https://play.google.com/store/apps/details?id=it.pagopa.io.app” {% endtab %} {% endtabs %}

### **app_ios**

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>If the service requires the use of a specific app, the link must be indicated here to download it from the App Store (iOS)</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} “https://apps.apple.com/it/app/io/id1501681835” {% endtab %} {% endtabs %}

### cta

{% hint style="warning" %} This function is in beta testing: do not use this field. {% endhint %}

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Property that makes it possible to create customized buttons on the service tab</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} not available {% endtab %} {% endtabs %}

### **email**

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Email address of the institution or department providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>At least one or more direct contact channels from which the citizen can request support (<code>phone</code>, <code>email</code>, <code>pec</code>, <code>support_url</code>).</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} “[info@mail.it](mailto:info@mail.it)” {% endtab %} {% endtabs %}

### **pec (certified email)**

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>PEC address (certified email) of the institution/operational unit providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>At least one or more direct contact channels from which the citizen can request support (<code>phone</code>, <code>email</code>, <code>pec</code>, <code>support_url</code>).</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} “[info@mail.pec.it](mailto:info@mail.pec.it)” {% endtab %} {% endtabs %}

### **phone**

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Telephone number of the institution/operational unit providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>At least one or more direct contact channels from which the citizen can request support (<code>phone</code>, <code>email</code>, <code>pec</code>, <code>support_url</code>).</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} “0825889988” {% endtab %} {% endtabs %}

### **support_url**

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Web address for requesting support from the institution/operational unit providing the service</td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Mandatory</td><td>At least one or more direct contact channels from which the citizen can request support (<code>phone</code>, <code>email</code>, <code>pec</code>, <code>support_url</code>).</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} “[https://io.italia.it/support](https://io.italia.it/support)” {% endtab %} {% endtabs %}

### **token_name**

{% hint style="warning" %} This function is in beta testing: do not use this attribute. {% endhint %}

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Name of the token used for the Single Sign On (SSO) process via the IO app and a service provided by the institution</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} not available {% endtab %} {% endtabs %}

### **tos_url**

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Web address that contains the terms and conditions of use for the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} “https://io.italia.it/app-content/tos_privacy.html” {% endtab %} {% endtabs %}

### **web_url**

{% tabs %} {% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Address of the website for the service</td></tr><tr><td>Type</td><td>Boolean</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>{% endtab %}

{% tab title="Esempio" %} “[https://io.italia.it](https://io.italia.it/)” {% endtab %} {% endtabs %}