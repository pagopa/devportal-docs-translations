# APIs

PDND can also be accessed by invoking the APIs it exposes. The current version (v. 2) supports both read and write operations—mirroring the capabilities available through the graphical back-office interface.

To ensure the legitimacy of write operations, an administrator must be specified within your _**PDND API client**_. This user will serve as the user who is responsible, from an administrative standpoint, for all write actions executed via the APIs.

Every API endpoint always returns the ID of the requested object, along with additional IDs that may be useful for subsequent calls. For example, if you request a service request, the response will also include the IDs of the associated e-service and the specific version of that e-service.

## Notifications endpoint

The API also provides an events endpoint known as the "notifications endpoint." Subscribers can poll this endpoint to stay updated on all operations occurring within the platform—and potentially build automated triggers based on these events.

For example: When a new version of an e-service of interest is published, an event is emitted via the notifications endpoint. Upon receiving this event, users could trigger an automation that sends the updated interface file to their email.

{% hint style="info" %}
In v. 2, the notifications endpoint is currently under development, with release scheduled for early November 2025.
{% endhint %}
