---
description: Dati relativi al service_metadata
---

# Service Metadata

### **description**

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th width="518"></th></tr></thead><tbody><tr><td>Descrizione</td><td>Descrizione del servizio in formato markdown</td></tr><tr><td>Tipo</td><td>Stringa</td></tr><tr><td>Obbligatorio</td><td>Sì, se il flag <code>is_visible</code> è <code>true</code></td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“testo di prova \[Example Link]\([https://example.it/](https://ioapp.it/))”
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Per testare la sintassi in markdown, puoi utilizzare un [servizio online come Stackedit](https://stackedit.io/app).
{% endhint %}

### **privacy\_url**

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Descrizione</td><td>Indirizzo web che contiene l’informativa privacy del servizio</td></tr><tr><td>Tipo</td><td>Stringa</td></tr><tr><td>Obbligatorio</td><td>Sì</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“https://exmaple.it/privacy-policy/”
{% endtab %}
{% endtabs %}

### **scope**

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Descrizione</td><td><p>Proprietà che inserisce il servizio nella lista dei servizi locali o nazionali. I possibili valori sono:</p><ol><li><code>LOCAL</code> per i servizi a carattere locale (es. comuni)</li><li><code>NATIONAL</code> per i servizi di interesse nazionale (es. ministeri, agenzie/enti nazionali, regioni)</li></ol></td></tr><tr><td>Tipo</td><td>Stringa <code>(LOCAL|NATIONAL)</code></td></tr><tr><td>Obbligatorio</td><td>Sì</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“LOCAL”
{% endtab %}
{% endtabs %}

### **address**

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Descrizione</td><td>Indirizzo dell’ente o del dipartimento che eroga il servizio</td></tr><tr><td>Tipo</td><td>Stringa</td></tr><tr><td>Obbligatorio</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“Via Roma, 56”
{% endtab %}
{% endtabs %}

### **app\_android**

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Descrizione</td><td>Se il servizio prevede l'utilizzo di una specifica app, bisogna indicare qui il link per scaricarla da Google Play Store (Android)</td></tr><tr><td>Tipo</td><td>Stringa</td></tr><tr><td>Obbligatorio</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“https://play.google.com/store/apps/details?id=it.pagopa.io.app”
{% endtab %}
{% endtabs %}

### **app\_ios**

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Descrizione</td><td>Se il servizio prevede l'utilizzo di una specifica app, bisogna indicare qui il link per scaricarla dall'App Store (iOS)</td></tr><tr><td>Tipo</td><td>Stringa</td></tr><tr><td>Obbligatorio</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“https://apps.apple.com/it/app/io/id1501681835”
{% endtab %}
{% endtabs %}

### cta

{% hint style="warning" %}
Questa funzionalità è in beta: non compilare questo campo.
{% endhint %}

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Descrizione</td><td>Proprietà che permette la creazione di pulsanti personalizzati all’interno della scheda servizio</td></tr><tr><td>Tipo</td><td>Stringa</td></tr><tr><td>Obbligatorio</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
non disponibile
{% endtab %}
{% endtabs %}

### **email**

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Descrizione</td><td>Indirizzo email dell’ente o del dipartimento che eroga il servizio</td></tr><tr><td>Tipo</td><td>Stringa</td></tr><tr><td>Obbligatorio</td><td>Almeno uno o più canali di contatto diretto a cui il cittadino può chiedere assistenza (<code>phone</code>, <code>email</code>, <code>pec</code>, <code>support_url</code>).</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“[info@mail.it](mailto:info@mail.it)”
{% endtab %}
{% endtabs %}

### **pec**

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Descrizione</td><td>Indirizzo email PEC dell’ente/unità operativa che eroga il servizio</td></tr><tr><td>Tipo</td><td>Stringa</td></tr><tr><td>Obbligatorio</td><td>Almeno uno o più canali di contatto diretto a cui il cittadino può chiedere assistenza (<code>phone</code>, <code>email</code>, <code>pec</code>, <code>support_url</code>).</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“[info@mail.pec.it](mailto:info@mail.pec.it)”
{% endtab %}
{% endtabs %}

### **phone**

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Descrizione</td><td>Numero di telefono dell’ente/unità operativa che eroga il servizio</td></tr><tr><td>Tipo</td><td>Stringa</td></tr><tr><td>Obbligatorio</td><td>Almeno uno o più canali di contatto diretto a cui il cittadino può chiedere assistenza (<code>phone</code>, <code>email</code>, <code>pec</code>, <code>support_url</code>).</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“0825889988”
{% endtab %}
{% endtabs %}

### **support\_url**

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Descrizione</td><td>Indirizzo web per le richieste di assistenza dell’ente/unità operativa che eroga il servizio</td></tr><tr><td>Tipo</td><td>stringa</td></tr><tr><td>Obbligatorio</td><td>Almeno uno o più canali di contatto diretto a cui il cittadino può chiedere assistenza (<code>phone</code>, <code>email</code>, <code>pec</code>, <code>support_url</code>).</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“https://support.example.it/”
{% endtab %}
{% endtabs %}

### **tos\_url**

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Descrizione</td><td>Indirizzo web che contiene i termini e condizioni d’uso del servizio</td></tr><tr><td>Tipo</td><td>Stringa</td></tr><tr><td>Obbligatorio</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“https://example.it/tos\\_privacy.html”
{% endtab %}
{% endtabs %}

### **web\_url**

{% tabs %}
{% tab title="Definizione" %}

<table data-header-hidden><thead><tr><th width="165"></th><th></th></tr></thead><tbody><tr><td>Descrizione</td><td>Indirizzo del sito web del servizio</td></tr><tr><td>Tipo</td><td>Booleano</td></tr><tr><td>Obbligatorio</td><td>No</td></tr></tbody></table>
{% endtab %}

{% tab title="Esempio" %}
“https://example.it”
{% endtab %}
{% endtabs %}
