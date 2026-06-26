# Create a service

Here are the steps to follow to create a service.

#### Via the Developer Portal

<details>

<summary><mark style="color:blue;">Step 1</mark> - Create the service</summary>

1. [**Log in**](https://developer.io.italia.it/) to the Developer Portal;
2. In the left-hand column, select **“Services”**;
3. Verify that the **pre-filled fields** are correct and edit them if necessary;
4. Select "**Add subscription**" to create the draft service;
5. View and save the **API keys** associated with the service.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Enter the required data</summary>

To publish the service in production, you must enter the data found in the[mandatory-data](dati-obbligatori/ "mention") section.&#x20;

</details>

#### Via the Reserved Area

<details>

<summary><mark style="color:blue;">Step 1</mark> - Create the service</summary>

1. [**Log in**](https://selfcare.pagopa.it/) to the Reserved Area;
2. Select the entity for which you want to operate from the list shown;
3. Among the active products, look for IO App and click on its box;
4. In the left-hand column, select "**Services**";
5. Click on "**Create a service**";
6. Enter the "**Service Name**" (the name the citizen will see in the app: [choose it carefully](https://docs.pagopa.it/manuale-operativo-dei-servizi/come-si-crea-un-servizio/la-scheda-servizio/nome-del-servizio)!) and fill in all the other required fields;
7. Proceed by clicking **"Create service"** to create the draft service;
8. View and save the **API keys** associated with the service.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Submit the service for review</summary>

1. Return to the **"Services"** section in the left-hand menu;
2. Click on the newly created service to see its details;
3. Click the **"Submit for review"** button at the top;&#x20;
4. Wait for the service to be validated or rejected by PagoPA S.p.A.

</details>

#### Via API

<details>

<summary><mark style="color:blue;">Step 1</mark> - Retrieve the specific API key</summary>

Find out what the [`manage key`](chiave-manage/chiave-manage.md) is and [how to retrieve it](chiave-manage/chiave-manage.md#recupera-la-chiave-manage).

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Prepare the service profile</summary>

1. Retrieve the relevant [API specifications](../../api-e-specifiche/api-servizi/manage-service-create.md) and read the advice carefully
2. Prepare the payload for the service profile you want to create
3. Use [manage-service-create.md](../../api-e-specifiche/api-servizi/manage-service-create.md "mention") with your `manage` key

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Make the API call</summary>

Make the call and take note of the serviceId of the newly created service.&#x20;

To retrieve the keys for the created service, you can refer to [Manage Service: Get keys. ](../../api-e-specifiche/api-servizi/manage-service-get-keys.md)

</details>

