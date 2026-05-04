---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/utilizzare-i-voucher
---

# Vouchers

### What they are and what they are for

**Vouchers** are **JWT tokens (JSON Web Tokens)** that act as an **authorization** issued by the platform to the _consumer_ to access an _e-service_ published by a _producer_.

The voucher ensures the **security, legitimacy, and traceability** of data exchanges between parties by guaranteeing that:

1. **The consumer is reliably identified**, since the voucher is issued only after PDND has verified the entire chain: active e-service version, active service request, active purpose linked to the e-service, client associated with the purpose, and public key associated with the client.
2. **The producer can verify the authorization of the request**, confirming that it originates from an authorized consumer, for the correct resource and an active purpose.
3. **Each interaction is secure and verifiable**, thanks to the **digital signature** applied by PDND to the token.

PDND implements authorization mechanisms based on the **OAuth 2.0** standard ([**RFC 6750**](https://datatracker.ietf.org/doc/html/rfc6750)).\
Client authentication follows what is defined in [**RFC 7521**](https://datatracker.ietf.org/doc/html/rfc7521).\
Any additional technical specifications (RFCs) depend on the type of voucher issued and are indicated in the respective sections of the manual.

### More information, examples, and tutorials

The following sections of this guide describe the different **voucher request methods** and their features. In the tutorial section, you can find step-by-step guides on how to [**obtain**](../../tutorials/tutorials-for-consumers/) and [**verify**](../../tutorials/tutorials-for-producers/) a voucher.

***

Next page [→ Types of voucher requests](types-of-voucher-requests.md)
