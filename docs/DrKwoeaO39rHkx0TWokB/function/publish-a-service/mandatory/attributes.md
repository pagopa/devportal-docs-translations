# Attributes

### service\_name

{% tabs %}
{% tab title="Definizione" %}
<table data-header-hidden><thead><tr><th width="164"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Name of the service displayed in the app</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>Yes</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
"Electronic Identity Card"

"TARI" (tax on waste)
{% endtab %}
{% endtabs %}

### **organization\_name**

{% tabs %}
{% tab title="Definition" %}
<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Name of the institution providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>Yes</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“Municipality of Milan”
{% endtab %}
{% endtabs %}

### **organization\_fiscal\_code**

{% tabs %}
{% tab title="Definition" %}
<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Fiscal code of the institution providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>Yes</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“00907501001”
{% endtab %}
{% endtabs %}

### **department\_name**

{% tabs %}
{% tab title="Definition" %}
<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Name of the department of the institution providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Mandatory</td><td>Yes</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“Registry office”
{% endtab %}
{% endtabs %}

### **authorized\_cidrs**

{% hint style="info" %}
No restrictions are applied by default. It is mandatory to enter the IP restrictions before switching to production.
{% endhint %}

{% tabs %}
{% tab title="Definition" %}
<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>List of IP/subnets authorized to call the service</td></tr><tr><td>Type</td><td>List of strings in CIDR format</td></tr><tr><td>Mandatory</td><td>Yes</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
1.2.3.4/32;2.3.4.5/32
{% endtab %}
{% endtabs %}

### **max\_allowed\_payment\_amount**

{% tabs %}
{% tab title="Definition" %}
<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Maximum amount authorized in the messages that contain a pagoPA payment notice. The amount is understood as in euro cents, that is an integer part plus two decimal places. For example, to set a payment threshold of €1500.00 the value <code>150000</code> must be entered</td></tr><tr><td>Type</td><td>Integer</td></tr><tr><td>Mandatory</td><td>yes, if the service provides a pagoPA payment notice</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
1000000
{% endtab %}
{% endtabs %}

### **require\_secure\_channels**

{% tabs %}
{% tab title="Definition" %}
<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td><p>Flag used to anonymize the notifications sent to users (push and email). The default value is <code>false</code></p><p><span data-gb-custom-inline data-tag="emoji" data-code="1f514">🔔</span> <strong>Push notification</strong></p><p>If <code>true</code>, the content is generic: "You have a new message"</p><p><span data-gb-custom-inline data-tag="emoji" data-code="2709">✉️</span> <strong>Email</strong></p><p>If <code>true</code>, no email is sent regardless of the user's preferences.</p></td></tr><tr><td>Type</td><td>Boolean</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
\`false\`
{% endtab %}
{% endtabs %}

### **service\_id**

{% hint style="info" %}
This property cannot be changed and is read-only.
{% endhint %}

{% tabs %}
{% tab title="Definition" %}
<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Service identifier. It is the reference to be used as a parameter in the request path to invoke services such as <code>Update Service</code> and <code>Upload Service Logo</code></td></tr><tr><td>Type</td><td>String</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“01EXPKTF05Z2AWEN0PN99QZE79”
{% endtab %}
{% endtabs %}

### **id**

{% hint style="info" %}
This property cannot be changed and is read-only.
{% endhint %}

{% hint style="warning" %}
This property is not sent in the requests and will be updated automatically each time the service is changed.
{% endhint %}

{% tabs %}
{% tab title="Definition" %}
<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Service identifier</td></tr><tr><td>Type</td><td>String</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“01EXPKTF05Z2AWEN0PN99QZE79-0000000000000001”
{% endtab %}
{% endtabs %}

### **authorized\_recipients**

{% hint style="warning" %}
When creating a service, it is possible to send messages only to test citizens with fiscal code \*\*AAAAAA00A00A000A\*\*. This restriction does not apply to users authorized to send to any fiscal code.
{% endhint %}

{% tabs %}
{% tab title="Definition" %}
<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>List of fiscal codes to which the service can send messages</td></tr><tr><td>Type</td><td>String list</td></tr><tr><td>Mandatory</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“AAAAAA00A00A000A”
{% endtab %}
{% endtabs %}

### **primary\_key**

{% tabs %}
{% tab title="Definition" %}
<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Primary key of the service to send in the header Ocp-Apim-Subscription-Key. The primary and secondary keys are equivalent and are duplicated so they can be changed without interrupting the service</td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Mandatory</td><td>n.a.</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
”\_\_YOUR\_API\_KEY\_\_”
{% endtab %}
{% endtabs %}

### **secondary\_key**

{% tabs %}
{% tab title="Definition" %}
<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Second key of the service to send as an alternative to the primary key in the header Ocp-Apim-Subscription-Key. The primary and secondary keys are equivalent and are duplicated so they can be changed without interrupting the service</td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Mandatory</td><td>n.a.</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
\\\_\_YOUR\_API\_KEY\_\_”
{% endtab %}
{% endtabs %}
