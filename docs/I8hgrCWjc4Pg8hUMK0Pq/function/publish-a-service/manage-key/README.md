# API Key

The API key is a (secret) key with which, by adding it to a specific request header, you can invoke the APIs (for more details refer to the [section Authentication of OpenAPI](https://developer.io.italia.it/openapi.html#section/Authentication)).

You can view and regenerate the keys as the institution administrator. 

## Why are there two keys?

Each API key is comprised of a pair of keys: _primary_ and _secondary_. These keys are equivalent and permit: changing them (regenerating them) without interrupting the service.

* **avoiding service interruptions**: you can change (regenerate) the key pair without malfunctions;
* **sharing the key temporarily**: in some occasions, you may want to share the API key with your colleagues. Instead of sharing the primary key (which is used in your applications), share the secondary key. Regenerate the second key when you want to revoke access for that person. Once you have regenerated the second key, the old secondary key will no longer be valid.

## Best practices for managing the API keys

When you use the API keys in your applications, make sure they are protected both during storage as well as during transmission.

### Eliminate unnecessary API keys to minimize exposure to attacks <a href="#delete-unneeded-keys" id="delete-unneeded-keys"></a>

Only keep the API keys that you are using at the moment to minimize the attack surface.

### Periodically rotate the API keys <a href="#rotate" id="rotate"></a>

If you rotate the API keys periodically, you can limit the impact of any compromised keys.

To avoid service interruptions, proceed as follows:

1. Update the applications such that they use the secondary key
2. Regenerate the primary key
3. Update the applications such that they use the primary key that was just regenerated
4. Regenerate the secondary key

### Do not include the API keys in the client code and do not perform commit in the code repository <a href="#no-commits" id="no-commits"></a>

The API keys hardcoded in the source code or archived in a repository are subject to interception and theft by criminals. In client-side environments (such as a browser or mobile applications) the client must pass the requests to its backend server, which can add the key and issue the request.

### Implement advanced monitoring and logging <a href="#logging-monitoring" id="logging-monitoring"></a>

Monitoring the use of the APIs can help you detect unauthorized use.