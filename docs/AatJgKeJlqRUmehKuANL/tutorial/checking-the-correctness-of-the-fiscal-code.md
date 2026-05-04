# Checking the correctness of the fiscal code

The fiscal code verification service uses a search criterion to simulate the obtainment of the fiscal code of a citizen.

Proceed as follows to correctly perform the fiscal code verification flow:

* Create ‘Voucher Interop' and insert it in the Header as a Bearer Token.
* Generate a client certificate, using the OpenSSL tool, starting with the generation of the private key (2048 bit in the example):

```bash openssl genrsa -out private-key.pem 2048 ```

and then generate also the certificate that contains the pubic key (which lasts 365 days in the example):

{% code overflow="wrap" %}
```bash
openssl req -new -x509 -key private-key.pem -out cert.pem -days 365
```
{% endcode %}

* Change the curl under the recovered information, then the bearerToken and the apikey
* Update the path of the file containing the certificate, with the exact path where the file is present on the machine from which the e-service is tested
* Create the apikey as described in the “Details” section and use it also for the following calls
* Contact the Handshake API to insert the certificate:\\

{% code overflow="wrap" %}
```bash
curl --location 'https://mtls.eservices.att.interop.pagopa.it/fiscalcode-verification/data-preparation/handshake'
--header 'apikey: apikey'
--header 'x-correlation-id: 123'
--header 'Authorization: Bearer {{bearerToken-fcv}}'
--form 'certificate=@"/C:/Users/test-cert/cert.pem"'
```
{% endcode %}

* Contact the Data Preparation API to insert the test data in the database.  
In the curl command example, the following parameters can be changed:
  * x-correlation-id: update with valid data, as indicated in the “Details” section.
  * authorization: update with a valid token.
  * apikey: created in the previous point.
  * data: JSON of the request; it is possible to change all the data it contains, keeping the attribute names unchanged. For example, if you want to send a new request, updating the fiscal code, also the value of the "fiscalCode" attribute must be changed with "NEW_CODE”.

{% code overflow="wrap" %}
```bash
curl --location 'https://mtls.eservices.att.interop.pagopa.it/fiscalcode-verification/data-preparation' \
--header 'x-correlation-id: id' \
--header 'Content-Type: application/json' \
--header 'Content-Encoding: identity' \
--header 'apikey: your_api_key' \
--header 'Authorization: Bearer {{bearerToken-fcv}}' \
--data '{ "codiceFiscale": "1231234" }'
```
{% endcode %}

* Contact API to verify the fiscal code:  
before executing the curl, update the data:
  * cert: path of the file containing the certificate, with the exact path where the file is present on the machine from which the e-service is tested
  * key: path of the file containing the key, with the exact path where the file is present on the machine from which the e-service is tested

{% code overflow="wrap" %}
```bash
curl --location 'https://mtls.eservices.att.interop.pagopa.it/fiscalcode-verification/verifica' \
--cert '/mnt/c/Users/test-cert/cert.pem' \
--key '/mnt/c/Users/test-cert/private-key.pem' \
--header 'x-correlation-id: ca8f8bc9-db92-486b-9e46-6c5596f80399' \
--header 'Content-Encoding: identity' \
--header 'apikey: apikey' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiIsInVzZSI6InNpZyIsImtpZCI6IjBlNWUxMDZlLTA4MDYtNDQwMi05ZTkzLTFlMGRlN2MwZTQ1OCJ9.eyJhdWQiOiJpbnRlcm9wLWF0dC1lc2VydmljZXMtZmlzLWNvZGUtdmVyIiwic3ViIjoiODUzMmRlMmItMzg2Zi00YWFjLWFkZmMtZTQ2ZDMzNGQzYWQwIiwibmJmIjoxNzE2NTU1MTI4LCJwdXJwb3NlSWQiOiI5MTBlYmYyMC1lMDVlLTQxNzMtYjY3NC00ZWI0NTQxMDAyZTYiLCJpc3MiOiJhdHQuaW50ZXJvcC5wYWdvcGEuaXQiLCJleHAiOjE3MTY1NjIzMjgsImlhdCI6MTcxNjU1NTEyOCwiY2xpZW50X2lkIjoiODUzMmRlMmItMzg2Zi00YWFjLWFkZmMtZTQ2ZDMzNGQzYWQwIiwianRpIjoiZDAwOTcwNjctNjUwZi00N2Y3LWJlZDgtNDBiOTYyZTQwODA2In0.j15xFa05OnnfHGaYnqnWHbWJNZJ4LQ5fP0eiVp6mp0vkepShpAW8JMdyINVg883In1omHfDnDD-J89-QprotO6Yu_QZCKeQ8DteVOolawfJHwYp9azyvrGP_Qth8fagAOJNEkKzwkC5keJrDKvx9Nq4cL5EUUlFYNR1vUawAh3lzfF1cHP2z6k455ApwmY5Cz7fmos-LzOkD-K4K9Yj2GlRHfMZPSqzIWLG-7s3NPYPpN3RvSRJY5DpuIPrY8g7OCcygQIy_ZUkjiQUtUArxM_0_Pb2Zkyp56u7KlPq25Vt-CUlcSw1Qu_kXuniOk1UsuJIcwqSCv3cI_ioHGPNO9Q' \
--data '{ "codiceFiscale": "BCCBBB88R61A125S" }' \
-k
```
{% endcode %}

\\