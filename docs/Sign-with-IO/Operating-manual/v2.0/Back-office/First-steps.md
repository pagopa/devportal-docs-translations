# 👩‍💻 First steps

Here are the steps you need to follow after signing the membership agreement to start integrating Sign with IO.

{% hint style="info" %}
Remember that you can always specify a **different support email address** for each dossier, as shown in the "[Create the Dossier](https://docs.pagopa.it/manuale-operativo-di-firma-con-io/creare-il-dossier#vuoi-aggiungere-una-email-di-assistenza-specifica-per-il-dossier)" section
{% endhint %}

<details>

<summary>Step 1 - Log in to the Reserved Area</summary>

![](<../.gitbook/assets/Screenshot 2023-09-15 alle 11.44.26.png>)

Log in to the [Reserved Area](https://selfcare.pagopa.it/auth/login) and select your Entity to start creating the API Keys you will need to integrate with Sign with IO.

</details>

<details>

<summary>Step 2 - Select Sign with IO</summary>

After entering your Entity's Reserved Area, select "Sign with IO" from the list of active products. You will then land on the "**Overview**" page, where you will always have the option to:

1. **Change the Entity's support email address**, which was provided during the subscription phase as a reference for citizens who might need support on matters under the Entity's responsibility (e.g., the submitted document contains an error)
2. View the **references for the integration and production phases to request technical support**.

The **Integration Phase** is the stage you're in when you are integrating Sign with IO for the first time and are therefore running various tests to understand how it works correctly. The **Production Phase**, on the other hand, begins when you are ready to send signature requests (at the costs established in the contract) to all users of the IO app!

</details>

<details>

<summary>Step 3 - Generate and manage API Keys</summary>

The "**API Key**" panel will allow you to generate and manage the API Keys for the test environment and manage the API Keys for the production environment.

For each **new test API Key**, you must:

1. **Assign an** identifying **name** to the API Key or use the one set automatically;
2. **Add one or more IP addresses** of the machines that will send the requests;
3. **Add one or more tax codes** of the people (who are already IO app users) who will be testing the various flows.

<mark style="color:red;">**Remember that without entering IP addresses or tax codes, you won't be able to test the flow!**</mark>

</details>

<details>

<summary>Step 4 - Start using your API Keys</summary>

After generating and populating the API Keys, all that's left is to start using them!

</details>
