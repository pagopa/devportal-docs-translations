# 📐 OpenAPI

### **Specifications**

The specifications are available at the address: [https://developer.io.italia.it/openapi.html](https://developer.io.italia.it/openapi.html)

### **File**

The openAPI 2.0 file is available at the address: [https://github.com/pagopa/io-functions-services/blob/master/openapi/index.yaml](https://github.com/pagopa/io-functions-services/blob/master/openapi/index.yaml)

### Notes

There are some customer extensions that are not well interpreted by tools compliant with the openAPI 2.0 standard (fka swagger [https://swagger.io/specification/v2/](https://swagger.io/specification/v2/)):

* `x-extensible-enum`: where used, it replaces the one that is expressed with `enum` in the standard. Its replacement with a standard `enum` is in progress;
* `x-import`: for some definitions, it specifies where the type definition is located in the PagoPA libraries (Typescript). It does not have an equivalent in the OpenAPI standard. It is not immediately clear what the format requirements are for a specific field and the definition provided by the reference must be retrieved manually;
* `x-one-of`: used in combination with `allOf`, it indicates that `allOf` does not represent an intersection of the listed type, but rather it behaves like `oneOf` introduced with version 3 of the OpenAPI standard. It is used in the type `ServicePayload`;
* `x-example`: adds an example where the standard does not permit using the tag `example`.