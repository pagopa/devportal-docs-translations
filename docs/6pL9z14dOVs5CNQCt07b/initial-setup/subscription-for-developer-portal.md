# Registration with the Developer Portal

{% hint style="warning" %}
The Developer Portal is still functioning, but will be discontinued in the upcoming months.
{% endhint %}

The first step to use the IO APIs is [**registration with the Developer Portal**](https://developer.io.italia.it/)**.**

To complete the registration, you must validate an email address, cell number and enter the data in reference to the institution.

<figure><img src="../.gitbook/assets/0" alt="Example of the registration screen"><figcaption><p>Data to be entered to register the institution with the Developer Portal</p></figcaption></figure>

\## Sandbox

At the end of these preliminary steps, you can only test the following IO APIs using the test citizen with the fiscal code **`AAAAAA00A00A000A`**:

* [Submit a Message passing the user fiscal\_code in the request body](https://developer.io.italia.it/openapi.html#operation/submitMessageforUserWithFiscalCodeInBody);
* [Submit a Message passing the user fiscal\_code as path parameter](https://developer.io.italia.it/openapi.html#operation/submitMessageforUser);
* [Get Message](https://developer.io.italia.it/openapi.html#operation/getMessage);
* [Get a User Profile using POST](https://developer.io.italia.it/openapi.html#operation/getProfileByPOST);
* [Get a User Profile](https://developer.io.italia.it/openapi.html#operation/getProfile);
