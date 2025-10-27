# 5️⃣ Landing page mode

If the operator decided to join the program through its own website and/or e-commerce website via the _landing page model_, they must communicate:

* The address of the web page (URL) the operator selected for the beneficiary to use the opportunities; 
* The relative _Referer_, i.e. a text string with a maximum of 20 characters, also predetermined by the operator and assigned to the individual opportunity.

{% hint style="warning" %} The page of the opportunities must be coherent with the description provided in the IO app and may not contain a set of similar initiatives that could make navigation difficult for beneficiaries and lead to complaints. {% endhint %}

 The operators who select this model are required to create “landings”, which clearly indicates that the opportunity refers to the CGN program (first of all, by using the relative logo, see the section dedicated to the brands) and they are carefully prepared in terms of their message and content so that they are consistent with the nature and spirit of the Program. For example, different opportunities should be associated with different and dedicated landing pages for greater security and greater clarity of intent.

The _Referer_ parameter must be controlled and accepted by the operator's systems for the entire duration of the opportunities provided by the beneficiaries. 

The beneficiary is identified by the operator as follows:

* The beneficiary accesses their CGN on the IO app and selects the operator of interest in the displayed list of operators; 
* The beneficiary selects the opportunity they are interested in and press the “Go to the opportunity” button; 
* The landing page configured by the operator for the use of the opportunity is opened in webview with the custom header HTTP **`X-PagoPa-CGN-Referer`**.

The check of the relative _header_ can be performed both on an infrastructural level (Apache/Nginx) as well as on a back-end application level of the operator's web page. Some implementation examples for the check of the _Referer_ are provided below in different languages: 

* [PHP](https://stackoverflow.com/questions/541430/how-do-i-read-any-request-header-in-php)
* [JAVA](https://mkyong.com/java/how-to-get-http-request-header-in-java/)
* [NodeJ](https://www.codegrepper.com/code-examples/javascript/expressjs+custom+header)[s](https://www.codegrepper.com/code-examples/javascript/expressjs+custom+header) 
* [Wordpress](https://wordpress.stackexchange.com/questions/288865/how-to-get-value-of-custom-http-header)
* [Nginx](https://www.nginx.com/resources/wiki/start/topics/examples/headers_management/)
* [Apache](https://serverfault.com/questions/751697/how-to-read-specific-character-out-of-request-header-in-apache-http-config)

{% hint style="info" %} The check of the header names must NOT be performed in a _case-sensitive_ manner {% endhint %}

## User experience

<figure><img src="../../.gitbook/assets/image (51).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (52).png" alt=""><figcaption><p><mark style="color:purple;">User experience to search for a discount code of an operator registered with the initiative with the landing page model</mark></p></figcaption></figure>

