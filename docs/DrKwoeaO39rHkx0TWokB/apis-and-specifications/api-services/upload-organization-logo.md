# Upload organization logo

## Description

This API makes it possible to upload the logo of an organization. To function correctly, it requires entering the **`organization_fiscal_code`** as the path parameter. You must also enter the logo, in base64 format, in the body of the message.

{% hint style="warning" %}
The \*\*api-key of the service\*\* must be used.
{% endhint %}

{% hint style="warning" %}
\*\*Important\*\*

* The logo dimensions must be 300x300 pixel.
* The image must be in png format with a white or transparent background.
{% endhint %}

To check that the logo of the institution was loaded correctly, you can query the following URL:

```markup
https://assets.cdn.io.italia.it/logos/organizations/<ORGANIZATION_FISCAL_CODE>.png
```

of which **`<ORGANIZATION_FISCAL_CODE>`** is the \[`organization_fiscal_code`]\(../../function/publish-a-service/mandatory data/attributes.md#organization\_fiscal\_code) **without any initial zeros** of the institution’s fiscal code.

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/organizations/{organization_fiscal_code}/logo" method="put" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Examples

{% code overflow="wrap" %}
```
```
{% endcode %}

```
```

\## Useful resources\[https://developer.io.italia.it/openapi.html#operation/uploadOrganizationLogo]\(https://developer.io.italia.it/openapi.html#operation/uploadOrganizationLogo)
