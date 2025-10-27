# Visibility of the service in app

When the service is approved, you can manage its visibility in the IO app.

{% hint style="info" %} An **approved** service can be **published** (and therefore made _public in the IO app)_ or **unpublished** (and therefore made _private in the IO app_) whenever you want. {% endhint %}

{% hint style="warning" %} Remember, the review process is necessary each time you want to make a change to the service tab. {% endhint %}

### **Publish a service in the IO app**

#### Via the Developer Portal

Each service for which [review is requested](service-review.md) via Developer Portal is activated automatically.

#### Via the Reserved Area

Each service for which [review is requested](service-review.md) via the Reserved Area is activated automatically. 

#### Via API

Two methods are available:

* When you are sending a review request you can ask for automatic publication and in the case of approval it will be published automatically.
* You can use the '[specific `service release` API](../../api-and-specifications/service-api/manage-service-release.md) to publish an approved service.

### Unpublish a service from the IO app

You can unpublish a service that was previously published in IO.

#### Via the Developer Portal

<details>

<summary><mark style="color:blue;">Step 1</mark>- Access and identify the service</summary>

1. [**Access**](https://developer.io.italia.it/) the Developer Portal;
2. In the left column, select **“Services”**;
3. Identify the service you want to check on the list of your services and click the box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>- Unpublish the service</summary>

1. Scroll to the bottom of the service tab;
2. In the "Go Live!" box, click the button "Deactivate service".

</details>

#### Via the Reserved Area

<details>

<summary><mark style="color:blue;">Step 1</mark>- Access and identify the service</summary>

1. [Access](https://selfcare.pagopa.it) the Reserved Area with SPID (Public Digital Identity System) or CIE (Electronic Identity Card);
2. Select the institution for which you want to operate;
3. In the central area of the page identify the enabled products;
4. Click the IO box;
5. In the left column, select “**Services**”;
6. Identify the service you want to check on the list of your services and click the box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>- Unpublish the service</summary>

1. To the top right of the service detail, click the button **"Unpublish from the IO app"**.

</details>

#### Via API

{% hint style="info" %} You can only use the specific key called [`manage`](manage-key/manage-key.md) {% endhint %}

<details>

<summary><mark style="color:blue;">Step 1</mark>- Identify the service</summary>

Make sure to retrieve the `service id` of the service you want to unpublish in IO

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>- Perform the call</summary>

1. Perform the call to the API to [unpublish the service](../../api-and-specifications/service-api/manage-service-unpublish.md)

</details>

