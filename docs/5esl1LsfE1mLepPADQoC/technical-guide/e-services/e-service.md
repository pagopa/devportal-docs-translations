# Exporting and importing an e-service

It is possible to **export a version of an e-service** from one PDND environment and import it into another environment as a new draft e-service. Currently, this feature is available only through the UI.

This functionality facilitates moving an e-service into production after it has passed the testing phase, but it can also be used to export and import e-services from one environment to another, or to replicate an e-service across multiple entities (for example, in the case of Technology Partners).

In addition to exporting, it is possible to **import a version of an e-service** into a PDND environment as a new draft e-service. Currently, this feature is available only through the UI.

### Import caveats

The import caveats are shown within the side drawer of the user interface. For technical reasons, it is not possible to provide the user with an exact indication of the specific error encountered. Instead, all the useful information for debugging is provided.

Specifically:

1. **attributes**: it is not possible to transfer attributes from one environment to another. As a result, the user must manually reassign the attributes in the new environment;
2. **e-service duplication**: if there is already an e-service with the same name for the same entity in the import environment, it will not be possible to import the e-service. The e-service name can be modified within the `.zip` file, as explained in the following paragraph;
3. **archive structure**: to ensure the consistency of the uploaded material, the `.zip` contains a configuration file indicating which files to upload, their location, and the necessary fields for the e-service. If one or more fields are incorrectly formatted, missing, pointing to unavailable files, or if the `.zip` contains extra files not mapped in the configuration file, the e-service cannot be imported;
4. **API interface**: remember that the server URLs you specify inside the API interface file may differ from one environment to another, depending on how your entity manages its infrastructure and testing process.

### The `.zip` package

It may be useful to manually edit the contents of the `.zip` file to be imported.\
To do so, here is the detailed structure. The `.zip` package contains:

* **configuration.json**: this file describes the content of the e-service, the location of the other files contained in the `.zip`, and their function. The name of this file must not be changed. If it is not found, the e-service cannot be imported;
* **file\_name.\[yaml | json | wsdl]**: the interface file; its name can be changed by updating the corresponding value in the configuration file;
* **other files**: all other files are most likely the technical documentation attached to the e-service. Their folder path must match what is specified in the configuration file.

All the fields in the `configuration.json` are mandatory. Even those not used must still be included, retaining their default value.

**E-service**

<table><thead><tr><th width="122.53125">Nome campo</th><th width="123.5390625">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>The name of the e-service. Length between 5 and 60 characters, including spaces. It must not be the same as that of any other e-service provided by the same entity.</td></tr><tr><td>description</td><td>String</td><td>The description of the e-service. Length between 10 and 250 characters, including spaces.</td></tr><tr><td>technology</td><td>REST| SOAP</td><td>The technology of the API that the participant provides. The interface file (<code>descriptor.interface</code>) must have the corresponding extension. For example, if REST is specified, the expected interface file will be <code>.yaml</code> or <code>.json</code>.</td></tr><tr><td>mode</td><td>DELIVER | REICEVE</td><td>The mode of the e-service, whether direct provision (DELIVER) or reverse provision (RECEIVE). In the case of reverse provision, at least one risk analysis (<code>riskAnalysis</code>) must be present; in the case of direct provision, there must be none.</td></tr><tr><td>descriptor</td><td>Descriptor</td><td>The descriptor, i.e., the content of the e-service version. The fields are detailed below.</td></tr><tr><td>riskAnalysis</td><td>Array&#x3C;RiskAnalysis></td><td>The risk analyses required for e-services in reverse provision, as described in the <em>mode</em> parameter. The default value is an empty array (<code>[]</code>).</td></tr></tbody></table>

**Descriptor**

<table><thead><tr><th width="124.99609375">Nome campo</th><th width="120.73828125">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>description</td><td>String</td><td>The description of the e-service version. Length between 10 and 250 characters, including spaces.</td></tr><tr><td>interface</td><td>Document</td><td>The document that describes the API interface provided by the participant.</td></tr><tr><td>docs</td><td>Array&#x3C;Document></td><td>The list of documents attached to the e-service version (e.g., technical documentation). It is possible not to include any accompanying documents. The default value is an empty array (<code>[]</code>).</td></tr><tr><td>audience</td><td>Array&#x3C;String></td><td>The audience of your resource to which the consumer's request will be forwarded. Although the data structure is in the form of an array of strings, usually only one string is inserted.</td></tr><tr><td>voucherLifespan</td><td>Number</td><td>The duration of the voucher that PDND will issue to the consumer. The value is expressed in seconds. Allowed values range from 60 (1 minute) to 86,400 (1,440 minutes, i.e., 24 hours).</td></tr><tr><td>dailyCallsPerConsumer</td><td>Number</td><td>The API calls/day limit allowed for each consumer. Values lower than 1 cannot be set.</td></tr><tr><td>dailyCallsTotal</td><td>Number</td><td>The API calls/day limit allowed when summing those from all consumers. This value cannot be lower than the <code>dailyCallsPerConsumer</code>.</td></tr><tr><td>agreementApprovalPolicy</td><td>AUTOMATIC | MANUAL</td><td>The approval policy for <strong>service requests</strong> to the e-service, either automatic (i.e., without requiring manual intervention from the producer) or manual.</td></tr></tbody></table>

**Document**

<table><thead><tr><th width="127.734375">Nome campo</th><th width="113.09765625">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>prettyName</td><td>String</td><td>The file name displayed to users, and it must be meaningful for them. Length between 5 and 60 characters, including spaces.</td></tr><tr><td>path</td><td>String</td><td>The path where the file to be uploaded is located, starting from the location of the configuration file.</td></tr></tbody></table>

**RiskAnalysis**

<table><thead><tr><th width="127.2578125">Nome campo</th><th width="108.93359375">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>The name to assign to the risk analysis to facilitate its identification. Length between 5 and 60 characters, including spaces.</td></tr><tr><td>riskAnalysisForm</td><td>RiskAnalysisForm</td><td>The content of the risk analysis.</td></tr></tbody></table>

**RiskAnalysisForm**

<table><thead><tr><th width="125.50390625">Nome campo</th><th width="109.7109375">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>version</td><td>String</td><td>The version of the risk analysis for that specific type of entity. For example, the latest version of the risk analysis released for Public Administrations is 3.0.</td></tr><tr><td>singleAnswers</td><td>Array&#x3C;RiskAnalysisSingleAnswer></td><td>The content of the single-choice answers of the risk analysis.</td></tr><tr><td>multiAnswers</td><td>Array&#x3C;RiskAnalysisMultiAnswer></td><td>The content of the multiple-choice answers of the risk analysis.</td></tr></tbody></table>

**RiskAnalysisSingleAnswer**

<table><thead><tr><th width="126.11328125">Nome campo</th><th width="107.9453125">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>key</td><td>String</td><td>The key that identifies the specific question with respect to the template included in the codebase. For example, the key <code>institutionalPurpose</code> identifies the free-text field where the answer to which purpose is being pursued is entered.</td></tr><tr><td>value</td><td>String</td><td>The answer to the question identified by the key.</td></tr></tbody></table>

**RiskAnalysisMultiAnswer**

<table><thead><tr><th width="125.84375">Nome campo</th><th width="111.05078125">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>key</td><td>String</td><td>The key that identifies the specific question with respect to the template included in the codebase. For example, the key <code>institutionalPurpose</code> identifies the free-text field where the answer to which purpose is being pursued is entered.</td></tr><tr><td>values</td><td>Array&#x3C;String></td><td>The answers to the question identified by the key.</td></tr></tbody></table>
