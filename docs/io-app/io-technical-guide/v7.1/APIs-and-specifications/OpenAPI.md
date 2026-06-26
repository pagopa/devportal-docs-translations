# 📐 OpenAPI

### **Specifications**

The specifications are available at: [https://developer.pagopa.it/app-io/api/app-io-main](https://developer.pagopa.it/app-io/api/app-io-main)

### **File**

The OpenAPI 2.0 file is available at: [https://github.com/pagopa/io-functions-services/blob/master/openapi/index.yaml](https://github.com/pagopa/io-functions-services/blob/master/openapi/index.yaml)

### Notes

There are some custom extensions that will not be correctly interpreted by tools adhering to the OpenAPI 2.0 standard (fka swagger [https://swagger.io/specification/v2/](https://swagger.io/specification/v2/)):

- `x-extensible-enum`: where used, it replaces what is expressed in the standard with `enum`. It is currently being replaced with the standard `enum`;
- `x-import`: for some definitions, specifies where the type definition is located in the PagoPA (TypeScript) libraries. It has no equivalent in the OpenAPI standard. It is not immediately clear what the format requirements are for a specific field, and the definition pointed to by the reference must be retrieved manually;
- `x-one-of`: used in combination with `allOf`, it indicates that `allOf` does not represent an intersection of the listed types, but rather behaves like `oneOf` as introduced in version 3 of the OpenAPI standard. It is used in the `ServicePayload` type;
- `x-example`: adds an example where the standard does not allow using the `example` tag.
