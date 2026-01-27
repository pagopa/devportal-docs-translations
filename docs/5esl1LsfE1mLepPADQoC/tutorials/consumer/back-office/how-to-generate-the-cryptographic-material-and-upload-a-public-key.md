# How to generate the cryptographic material and upload a public key

This tutorial serves as an example, but it is possible to generate your own cryptographic material in many other ways. The requirement to comply with is that it must be an RSA key, PEM-encoded, with a length of 2048 bits.

## Step 1 - Generate the cryptographic material

Open the terminal and paste the commands below. To change the key name, replace all occurrences of the string `client-test-keypair` with the desired name for the file containing the key.

```
openssl genrsa -out client-test-keypair.rsa.pem 2048
openssl rsa -in client-test-keypair.rsa.pem -pubout -out client-test-keypair.rsa.pub
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in client-test-keypair.rsa.pem -out client-test-keypair.rsa.priv
```

The command generates a public and private key pair and a certificate, which in this case is not required to be used.

The private key (`.priv`) remains with the party, who must keep it secure. The public key, on the other hand, is uploaded to PDND to enable the verifications that lead to the issuance of a valid voucher.

## Step 2 - Upload the public key

You must access the desired client from the back office, in the _**Client Management > e-service API**_\* section, and then open the desired client.

In the _**Public Keys**_ tab, click on _**Add**_. If this is not possible, it may be because your account is not registered among the members of the client.

Once the side panel opens, you need to copy the entire content of the public key file (the one ending in `.pub`), making sure to also include the beginning and ending lines (`-----BEGIN PUBLIC KEY-----` and `-----END PUBLIC KEY-----`).

\*Or _**Client Management > PDND API**_ if the client is intended to interact with the APIs exposed by PDND.
