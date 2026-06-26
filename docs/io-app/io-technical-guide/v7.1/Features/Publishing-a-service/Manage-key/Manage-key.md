# Manage API Key

The `manage` API Key is the key you will use to manage services via API, allowing you to perform any operation related to your services.

There are currently two types of `manage` keys:

- **master**: only one exists per entity and it has no restrictions on service visibility;
- **group**: can only be used to manage the services associated with its group.

{% hint style="info" %}
These are the **only API keys** you can use with APIs belonging to the `manage` category, identifiable by the tag in the OpenAPI specification and in the path.
{% endhint %}

## Retrieve the `manage` key

#### Via the Developer Portal

1. [**Log in**](https://developer.io.italia.it/) to the Developer Portal;
2. In the left-hand column, select **“Services”**;
3. If you are authorised, you will find a box at the top with the `manage` key, just below the account information;
4. View and copy the key to use it in your integration.

{% hint style="warning" %}
To use this API key via the Developer Portal, you must have [authorisation to manage services](../../../Authorizations/Service-management.md).
{% endhint %}

#### Via the Reserved Area

1. [**Log in**](https://selfcare.pagopa.it/) to the Reserved Area;
2. Select the entity you want to operate for from the list shown;
3. Among the active products, find the IO App and click on its box;
4. In the **Overview**, you will immediately find the manage API Keys, which you can copy;
5. If you want to manage the manage API Keys, you can select the **"API Key"** menu item to copy or rotate them.
