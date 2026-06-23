# Upload organization logo

## Description

This API allows you to upload an organization's logo. To work correctly, you must enter the **`organization_fiscal_code`** as a path parameter. You will also need to insert the logo, in Base64 format, into the message body.

{% hint style="warning" %}
It is mandatory to use the **api-key of the service itself**.
{% endhint %}

{% hint style="warning" %}
**Important**

- The logo dimensions must be 300x300 pixels.
- The image must be in PNG format with a white or transparent background.
  {% endhint %}

To check that the organization's logo has been uploaded correctly, you can query the following URL:

```markup
https://assets.cdn.io.pagopa.it/logos/organizations/<ORGANIZATION_FISCAL_CODE>.png
```

where **`<ORGANIZATION_FISCAL_CODE>`** is the [`organization_fiscal_code`](../../Features/Publishing-a-service/Required-data/Attributes.md#organization_fiscal_code) **without any leading zeros** from the organization's fiscal code.

{% openapi src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/organizations/{organization_fiscal_code}/logo" method="put" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endopenapi %}

## Examples

{% code overflow="wrap" %}

```shell
### REQUEST
curl --location --request PUT 'https://api.io.pagopa.it/api/v1/organizations/ORGANIZATION_FISCAL_CODE/logo' \
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

## Useful resources <a href="#ng5n9qrjnz38" id="ng5n9qrjnz38"></a>

[https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/uploadOrganizationLogo](https://developer.pagopa.it/app-io/api/app-io-main#/app-io/api/operations/uploadOrganizationLogo)
