# API Key

The API Key is a key (secret) that you can add to a specific request header to invoke the APIs (for more details, see the [Authentication section of the OpenAPI](https://developer.io.italia.it/openapi.html#section/Authentication)).

As the entity's administrator, you can view and regenerate the keys.&#x20;

## Why are there two keys?

Each API Key consists of a pair of keys: a _primary_ and a _secondary_ key. These keys are equivalent and allow you to change (regenerate) them without interrupting the service.

- **avoid service interruptions**: you can change (regenerate) the key pair without causing service disruptions;
- **share the key temporarily**: on some occasions, you may want to share the API Key with your colleagues. Instead of sharing the primary key (which is used in your applications), share the secondary key. When you want to revoke that person's access, regenerate the secondary key. Once you have regenerated the secondary key, the old secondary key will no longer be valid.

## Best practices for managing API Keys

When you use API keys in your applications, make sure they are protected both during storage and transmission.

### Delete unneeded API Keys to minimize exposure to attacks <a href="#delete-unneeded-keys" id="delete-unneeded-keys"></a>

Only keep the API Keys you are currently using to minimize the attack surface.

### Rotate API Keys periodically <a href="#rotate" id="rotate"></a>

By periodically rotating API Keys, you can limit the impact of any compromised keys.

To avoid service interruptions, proceed as follows:

1. update your applications to use the secondary key
2. regenerate the primary key
3. update your applications to use the newly regenerated primary key
4. regenerate the secondary key

### Do not include API Keys in client-side code or commit them to code repositories <a href="#no-commits" id="no-commits"></a>

API Keys hardcoded in source code or stored in a repository are subject to interception or theft by malicious actors. In client-side environments (such as browsers or mobile applications), the client must pass requests to its own backend server, which can then add the key and issue the request.

### Implement advanced monitoring and logging <a href="#logging-monitoring" id="logging-monitoring"></a>

Monitoring API usage can help you detect unauthorized use.
