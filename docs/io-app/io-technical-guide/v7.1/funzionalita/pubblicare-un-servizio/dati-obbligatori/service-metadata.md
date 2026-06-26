---
description: Service metadata data
---

# Service Metadata

### **description**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th width="518"></th></tr></thead><tbody><tr><td>Description</td><td>Service description in markdown format</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>Yes, if the <code>is_visible</code> flag is <code>true</code></td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“sample text \[Example Link]\([https://example.it/](https://ioapp.it/))”
{% endtab %}
{% endtabs %}

{% hint style="info" %}
To test the markdown syntax, you can use an [online service like Stackedit](https://stackedit.io/app).
{% endhint %}

### **privacy\_url**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Web address containing the service's privacy policy</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>Yes</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“https://exmaple.it/privacy-policy/”
{% endtab %}
{% endtabs %}

### **scope**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td><p>Property that places the service in the list of local or national services. The possible values are:</p><ol><li><code>LOCAL</code> for local services (e.g. municipalities)</li><li><code>NATIONAL</code> for services of national interest (e.g. ministries, national agencies/bodies, regions)</li></ol></td></tr><tr><td>Type</td><td>String <code>(LOCAL|NATIONAL)</code></td></tr><tr><td>Mandatory</td><td>Yes</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“LOCAL”
{% endtab %}
{% endtabs %}

### **address**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Address of the entity or department providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“Via Roma, 56”
{% endtab %}
{% endtabs %}

### **app\_android**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>If the service requires the use of a specific app, provide the link to download it from the Google Play Store (Android) here</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“https://play.google.com/store/apps/details?id=it.pagopa.io.app”
{% endtab %}
{% endtabs %}

### **app\_ios**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>If the service requires the use of a specific app, provide the link to download it from the App Store (iOS) here</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“https://apps.apple.com/it/app/io/id1501681835”
{% endtab %}
{% endtabs %}

### cta

{% hint style="warning" %}
This feature is in beta: do not fill in this field.
{% endhint %}

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Property that allows the creation of custom buttons within the service card</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
not available
{% endtab %}
{% endtabs %}

### **email**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Email address of the entity or department providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>At least one direct contact channel for citizen support (<code>phone</code>, <code>email</code>, <code>pec</code>, <code>support_url</code>).</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“[info@mail.it](mailto:info@mail.it)”
{% endtab %}
{% endtabs %}

### **pec**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>PEC email address of the entity/operational unit providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>At least one direct contact channel for citizen support (<code>phone</code>, <code>email</code>, <code>pec</code>, <code>support_url</code>).</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“[info@mail.pec.it](mailto:info@mail.pec.it)”
{% endtab %}
{% endtabs %}

### **phone**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Phone number of the entity/operational unit providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>At least one direct contact channel for citizen support (<code>phone</code>, <code>email</code>, <code>pec</code>, <code>support_url</code>).</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“0825889988”
{% endtab %}
{% endtabs %}

### **support\_url**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Web address for assistance requests for the entity/operational unit providing the service</td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Mandatory</td><td>At least one direct contact channel for citizen support (<code>phone</code>, <code>email</code>, <code>pec</code>, <code>support_url</code>).</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“https://support.example.it/”
{% endtab %}
{% endtabs %}

### **token\_name**

{% hint style="danger" %}
This parameter is deprecated and will be removed from October 1, 2025
{% endhint %}

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Name of the token used for the Single Sign On (SSO) process between the IO app and a service provided by the entity</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
not available
{% endtab %}
{% endtabs %}

### **tos\_url**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Web address containing the service's terms and conditions of use</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“https://example.it/tos\\_privacy.html”
{% endtab %}
{% endtabs %}

### **web\_url**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Service website address</td></tr><tr><td>Type</td><td>Boolean</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“https://example.it”
{% endtab %}
{% endtabs %}
