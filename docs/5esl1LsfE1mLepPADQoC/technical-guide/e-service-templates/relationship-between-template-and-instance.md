# Relationship between template and instance

### Who can create templates? <a href="#chi-puo-creare-i-template" id="chi-puo-creare-i-template"></a>

All parties authorized to act as producers in a given environment can create and evolve e-service templates. To create a new template, go to _**Producing**_**&#x20;>&#x20;**_**Your templates**_ and click on _**Create new**_.\
The creation of a template is very similar to that of an e-service: in fact, a template contains the same fields as an e-service. The only difference is that there is an extra field for the **template description with potential explanatory notes**, intended to support parties interested in deriving their own instance.

### Who can instatiate e-services from templates? <a href="#chi-puo-istanziare-gli-e-service-a-partire-dai-template" id="chi-puo-istanziare-gli-e-service-a-partire-dai-template"></a>

Similarly, all parties authorized to act as producers in a given environment can create instances from templates. They can do this via _**Producing**_**&#x20;>&#x20;**_**Template catalog**_, selecting the desired template and clicking on _**Use template**_ to generate their own instance.

### Management of access requirements (attributes) <a href="#gestione-dei-requisiti-di-accesso-attributi" id="gestione-dei-requisiti-di-accesso-attributi"></a>

As described in the [dedicated section](lifecycle.md), **the definition of attributes is at the discretion of the template creator**. The party deriving its instance from the template cannot modify them independently. If they believe there are inconsistencies, they must contact the template creator, who may correct them.

As with any other e-service, the attributes of the instance are the ones that will be required from potential consumers in order to submit a service request.

### Relationship between states <a href="#relazione-tra-gli-stati" id="relazione-tra-gli-stati"></a>

**The states** of a template and those of e-services instantiated from it **are completely independent from one another**. When a producer instantiates their e-service from a template, it does not inherit the template’s state updates.

For example, if a template is suspended while the instantiated e-service is active, the e-service remains active. Likewise, a producer can archive their instance of an e-service without affecting the template.

### Reception of template updates <a href="#recepimento-degli-aggiornamenti-a-un-template" id="recepimento-degli-aggiornamenti-a-un-template"></a>

An e-service template can be updated over time. These updates are categorized as either minor or critical.

**Minor updates are propagated immediately** to all instances. For example, if an error is identified and corrected in the template description, that correction will automatically appear in all e-service instances derived from that template.

**Critical updates** involve structural changes to the API interface, for which the template creator generates a new version of the template. In such cases, instances cannot be updated automatically. Each party that instantiated an e-service from the template **must update** it **manually** after making the necessary technical adjustments.

Due to its critical nature, this update results in a new version of the e-service instance. Consequently, **all consumers must update their service request to the latest version of the e-service** after completing tests and technical updates, just like with any other e-service.

### Upgrading an instance <a href="#aggiornamento-di-unistanza" id="aggiornamento-di-unistanza"></a>

If a party has published an e-service instance and needs to update it (e.g., to change the server URL or audience), a new version of the e-service instance must be created—just as with any e-service.

In this scenario, the version of the e-service instance may diverge from that of the template (e.g., the template may be at version 2 while the instance is at version 3).
