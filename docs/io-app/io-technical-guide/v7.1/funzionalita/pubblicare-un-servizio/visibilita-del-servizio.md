# Service visibility in the App

When a service is approved, you can manage its visibility in the IO app.

{% hint style="info" %}
An **approved** service can be **published** (and therefore made _public in the IO app)_ or **hidden** (and therefore made _private in the IO app_) as many times as you want.&#x20;
{% endhint %}

{% hint style="warning" %}
Remember, you must go through the review process every time you want to make a change to the service profile.
{% endhint %}

### **Publishing a service in the IO app**

#### Via the Developer Portal

Every service for which a [review has been requested](revisione-del-servizio.md) via the Developer Portal is automatically activated.

#### Via the Reserved Area

Every service for which a [review has been requested](revisione-del-servizio.md) via the Reserved Area is automatically activated.&#x20;

#### Via API

You have two methods available:

- When you are submitting a review request, you can request auto-publishing, and if approved, it will be performed automatically.
- You can use the [specific `service release` API](../../api-e-specifiche/api-servizi/manage-service-release.md) to publish an approved service.

### Hiding a service from the IO app

You can hide a service that was previously published in IO.

#### Via the Developer Portal

<details>

<summary><mark style="color:blue;">Step 1</mark> - Log in and identify the service</summary>

1. [**Log in**](https://developer.io.italia.it/) to the Developer Portal;
2. In the left column, select **“Services”**;
3. In your list of services, identify the service you want to manage and click on its box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Hide the service</summary>

1. Scroll to the bottom of the service profile;
2. In the "Go Live!" box click the "Deactivate Service" button.

</details>

#### Via the Reserved Area

<details>

<summary><mark style="color:blue;">Step 1</mark> - Log in and identify the service</summary>

1. [Log in](https://selfcare.pagopa.it) to the Reserved Area with SPID or CIE;
2. Select the organization you want to operate for;
3. In the central area of the page, locate the enabled products;
4. Click on the IO box;
5. In the left column, select "**Services**";
6. In your list of services, identify the service you want to manage and click on its box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Hide the service</summary>

1. At the top right of the service details, click the **"Hide from the IO app"** button.

</details>

#### Via API

{% hint style="info" %}
You can only use the specific key named [`manage`](chiave-manage/chiave-manage.md)
{% endhint %}

<details>

<summary><mark style="color:blue;">Step 1</mark> - Identify the service</summary>

Make sure to retrieve the `service id` for the service you want to make invisible in IO

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Make the API call</summary>

1. Make the API call to [hide the service](../../api-e-specifiche/api-servizi/manage-service-unpublish.md)

</details>
