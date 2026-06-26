# Attributes

### service\_name

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="164"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Name of the service displayed in the app</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Required</td><td>Yes</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
"Electronic Identity Card"

"TARI"
{% endtab %}
{% endtabs %}

### **organization\_name**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Name of the entity providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Required</td><td>Yes</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“Municipality of Milan”
{% endtab %}
{% endtabs %}

### **organization\_fiscal\_code**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Fiscal Code of the entity providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Required</td><td>Yes</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“00907501001”
{% endtab %}
{% endtabs %}

### **department\_name**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Name of the department of the entity providing the service</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Required</td><td>Yes</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“Registry Office”
{% endtab %}
{% endtabs %}

### **authorized\_cidrs**

{% hint style="info" %}
By default no restrictions are applied. It is mandatory to enter IP restrictions before going into production.
{% endhint %}

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>List of authorized IPs/subnets to call the service</td></tr><tr><td>Type</td><td>List of strings in CIDR format</td></tr><tr><td>Required</td><td>Yes</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
1.2.3.4/32;2.3.4.5/32
{% endtab %}
{% endtabs %}

### **max\_allowed\_payment\_amount**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Maximum amount authorized in messages containing a pagoPA payment notice. The amount is in euro cents, i.e. as an integer part plus two decimal places. For example, to set a payment threshold of €1500.00 you must enter the value <code>150000</code></td></tr><tr><td>Type</td><td>Integer</td></tr><tr><td>Required</td><td>Yes, if the service involves sending pagoPA payment notices</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
1000000
{% endtab %}
{% endtabs %}

### **require\_secure\_channels**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td><p>Flag that allows anonymizing notifications sent to users (push and email). The default value is <code>false</code></p><p></p><p><span data-gb-custom-inline data-tag="emoji" data-code="1f514">🔔</span> <strong>Push Notification</strong></p><p>If <code>true</code>, the content is generic: "You have a new message"</p><p></p><p><span data-gb-custom-inline data-tag="emoji" data-code="2709">✉️</span> <strong>Email</strong></p><p>If <code>true</code>, no email is sent, regardless of the user's preferences.</p></td></tr><tr><td>Type</td><td>Boolean</td></tr><tr><td>Required</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
`false`
{% endtab %}
{% endtabs %}

### **service\_id**

{% hint style="info" %}
This property cannot be modified and is considered read-only.
{% endhint %}

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Service identifier. It is the reference to use as a parameter in the request path to invoke services such as <code>Update Service</code> and <code>Upload Service Logo</code></td></tr><tr><td>Type</td><td>String</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“01EXPKTF05Z2AWEN0PN99QZE79”
{% endtab %}
{% endtabs %}

### **id**

{% hint style="info" %}
This property cannot be modified and is considered read-only.
{% endhint %}

{% hint style="warning" %}
This property should not be sent in requests and will be automatically updated with each service modification.
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
When creating a service, you can only send messages to the test citizen with Fiscal Code **AAAAAA00A00A000A**. This restriction does not apply to users enabled to send to any Fiscal Code.
{% endhint %}

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>List of Fiscal Codes to which the service can send messages</td></tr><tr><td>Type</td><td>List of strings</td></tr><tr><td>Required</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
“AAAAAA00A00A000A”
{% endtab %}
{% endtabs %}

### **primary\_key**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Primary key of the service to be sent in the Ocp-Apim-Subscription-Key header. Primary and secondary keys are equivalent and are duplicated to change them without interrupting the service</td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Required</td><td>n/a.</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
"**YOUR_API_KEY**"
{% endtab %}
{% endtabs %}

### **secondary\_key**

{% tabs %}
{% tab title="Definition" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Description</td><td>Secondary key of the service to be sent as an alternative to the primary key in the Ocp-Apim-Subscription-Key header. Primary and secondary keys are equivalent and are duplicated to change them without interrupting the service</td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Required</td><td>n/a.</td></tr></tbody></table>
{% endtab %}

{% tab title="Example" %}
"**YOUR_API_KEY**"
{% endtab %}
{% endtabs %}
