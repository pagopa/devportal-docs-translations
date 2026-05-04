# Sensitive information

Services and messages that include **particular categories of personal data** and/or **personal data related to criminal convictions and crimes** must respect the provisions of the privacy regulation and are regulated by [paragraph 7.3](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto\_allegati/213121604430O\_\_OLG+Punto+accesso+telematico+servizi+PA\_3.11.2021.pdf) of the IO guidelines.

The data in question is indicated in articles 9 and 10 GDPR, i.e.:

* information that reveals the racial or ethnic origin, political opinions, religious or philosophical beliefs or trade union membership;
* generic data, biometric data means to univocally identify a physical person, data related to the heath or the sex life or sexual orientation of the person;
* personal data related to criminal convictions or crimes or connected safety measures.

{% hint style="info" %}
**An example**

Services such as “Special diet for ethical-religious reasons” or “Gynecologist appointment” contain sensitive information in the title and must be reworded.
{% endhint %}

Therefore remember:

* **do not use sensitive information** in the title of the message and make sure to minimize it in the body of the message;
* **use** [**the models**](https://github.com/pagopa/devportal-docs/blob/docs/from-gitbook/docs/UPXI5qlLme7xci8KwDxf/catalogo-dei-servizi-e-modelli/i-modelli-dei-servizi-piu-frequenti/README.md) provided for the services.

### Report a sensitive service:

If you intend to include sensitive data in your services and messages that they will send:

* Via API, **mark the service as "privacy-critical"** [(“require\_secure\_channel”: true)](http://127.0.0.1:5000/s/mzwjFv2XaE1mjbz7I8gt/api/api-servizi/create-service);
* Via Developer Portal or Reserved Area, mark the service as "**Sensitive service" when you create the service tab.** You will find this check among the detailed data of the service.
