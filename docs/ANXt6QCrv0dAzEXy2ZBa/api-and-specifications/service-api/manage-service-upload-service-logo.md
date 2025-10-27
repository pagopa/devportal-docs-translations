# Manage Service: Upload service logo

## Description

This API makes it possible to upload the logo for a service. It is necessary to enter the **`service_id`** as the path parameter and enter the logo, in base64 format, in the “”body”” of the message

{% hint style="info" %} You must use the new key [`manage`](../../function/publish-a-service/manage-key/manage-key.md) for managing the services. {% endhint %}

{% hint style="warning" %} A [specific authorization](../../enabling/manage-services.md) is needed to use this API. {% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/logo" method="put" %} [https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml) {% endopenapi %}

{% hint style="warning" %} **Important**

* The logo dimensions must be 300x300 pixel. 
* The image must be in png format with a white or transparent background. {% endhint %}

{% hint style="info" %} If the logo is uploaded just after the service was created, it is possible that the API returns error `401`. If this happens, wait a few seconds and upload the logo again. {% endhint %}

To check that the logo of the service was loaded correctly, you can query the following URL:

```markup https://assets.cdn.io.italia.it/logos/services/\<SERVICE_ID>.png ```

where **`\<SERVICE_ID>`** is the [service id](../../function/publish-a-service/mandatory-data/attributes.md#service_id) in lowercase.

## Examples

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request PUT 'https://api.io.pagopa.it/api/v1/services/manage/SERVICE_ID/logo' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--header 'Content-Type: application/json' \
--data-raw '{
"logo": "<<Base64ImageString>>"
}'
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE
{}
```
{% endcode %}

## Useful resources

[https://developer.io.italia.it/openapi.html#operation/cmsUpdateServiceLogo](https://developer.io.italia.it/openapi.html#operation/cmsUpdateServiceLogo)