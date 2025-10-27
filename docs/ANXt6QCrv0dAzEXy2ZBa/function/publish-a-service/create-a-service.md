# Create a service

Here are the steps to follow to create a service.

{% hint style="info" %} Is your institution still on the Developer Portal? As soon as it is available, you will receive a communication with instructions for accessing the new Reserved Area. {% endhint %}

#### Via the Developer Portal

<details>

<summary><mark style="color:blue;">Step 1</mark>- Create the service</summary>

1. [**Access**](https://developer.io.italia.it/) the Developer Portal;
2. In the left column, select **“Services”**;
3. Check that the **precompiled fields** are correct and change them if necessary;
4. Select "**Add subscription**" to create the service in draft form;
5. View and save the **API keys** associated with the service.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>- Enter the requested data</summary>

To publish the service in production mode, enter the data found in the section [mandatory-data](mandatory-data/ "mention"). 

</details>

#### Via the Reserved Area

{% hint style="warning" %} Not currently available for aggregators or aggregated institutions. {% endhint %}

<details>

<summary><mark style="color:blue;">Step 1</mark>- Create the service</summary>

1. [**Access**](https://selfcare.pagopa.it/) the Reserved Area;
2. Select the institution for which you want to operate from the list that is displayed;
3. The IO app searches among the active products and click the relative box;
4. In the left column, select “**Services**”;
5. Click on "**Create a service**";
6. Write the "**Name of the service**" (the name the citizen will see in app: [select it carefully](https://docs.pagopa.it/manuale-operativo-dei-servizi/come-si-crea-un-servizio/la-scheda-servizio/nome-del-servizio)!) and compile all the other required fields;
7. Proceed by clicking **"Create service"** to create the service in draft form;
8. View and save the **API keys** associated with the service.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>- Send the service for review</summary>

1. Return to the section **"Services"** in the left menu;
2. Click on the service that was just created to see the details;
3. Click at the top on the button **"Send for review"**; 
4. Wait for the service to be validated or not by PagoPA S.p.A.

</details>

#### Via API

<details>

<summary><mark style="color:blue;">Step 1</mark>- Get the specific api-key</summary>

Discover what the [`manage key`](manage-key/manage-key.md) is and [how to get it](manage-key/manage-key.md#recupera-la-manage-key).

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>- Prepare the service tab</summary>

1. Get the [specific APIs](../../api-and-specifications/service-api/manage-service-create.md) and read the suggestions carefully
2. Prepare the payload for the service tab you want to create
3. Use [manage-service-create.md](../../api-and-specifications/service-api/manage-service-create.md "mention") with your `manage` key

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark>- Execute the API call</summary>

Perform the call and take note of the serviceId of the service just created. 

To get the keys for the created service, refer to [Manage Service: Get keys. ](../../api-and-specifications/service-api/manage-service-get-keys.md)

</details>

