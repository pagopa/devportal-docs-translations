# How to perform data preparation

The Certification Environment is based on fictitious data that can be configured and customized by every user based on their needs.

The data preparation phase is necessary in order to use the individual e-services.

This data can be personalized using what is called “Data Preparation”.

In order to correctly and completely invoke the e-services, every user must first of all carry out their own configuration by invoking the Data Preparation APIs.

This data and information are univocal for every user and, specifically for every purposeId.

The entered data does not expire. Therefore, once the first configuration is complete, it is possible to use it as a reference for all the subsequent invocations. The data can be removed using the APIs provided by Data Preparation.

The following e-services have this type of configuration:

* Check Id Subject
* Check Organization Id
* Check Digital Address
* Check Address

Let's see the steps for creating each of them

## Step 1: Data creation  

`POST /{baseUrl}/data-preparation`

The creation API that permits configuring the data.

It must be invoked in order to correctly set up the service based on your needs.

It is possible to perform multiple invocations of the API in order to create multiple entities, for example.

Refer to the paragraph [ ](https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guida+Operativa+Ambiente+Attestazione#4.-Casi-d%E2%80%99uso)[TUTORIAL ](broken-reference)for a concrete example of data preparation. 

## Step 2: Data recovery

`GET /{baseUrl}/data-preparation`

The API makes it possible to recover all the configurations performed.

It is, therefore, a verification method used by the user. It can be invoked as required for the internal analysis of the configuration performed up to that moment.

## Step 3: Massive data deletion

`DELETE/{baseUrl}/data-preparation`

The API makes it possible to delete all the data configured up to that moment.

## Step 4: Precise data deletion

`POST /{baseUrl}/data-preparation/remove`

The API makes it possible to precisely delete data.

Specifically, the data indicated in the body of the rquest is physically removed.

There is a univocal key for each e-service that identifies the entity (it can be, for example, the id of the subject in the case of the “check Id Subject e-service)

## Step 5: Send Certificate

`POST /{baseUrl}/data-preparation/handshake`

This API is not available for all e-services, but only those that require an additional security mechanism in addition to those already provided by the Interoperability PDND.

Each provider can in fact add additional levels of security for its services.

This requires a phase of configuration and exchange of this information in order to guarantee the correct invocation of the entire flow provided by the service.

Refer to the paragraph  [TUTORIAL ](broken-reference)for a concrete example.

Keep in mind that the certification environment is a simulation environment, therefore the data used in all the phases must not be real.

\\

\\