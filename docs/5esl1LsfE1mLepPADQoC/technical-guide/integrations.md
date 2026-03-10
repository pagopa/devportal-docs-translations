# Integrations

PDND consists of a central platform (core) and a set of integrations, as laid out in the AgID Guidelines.

## Signal Hub

Called _Process for distributing variation signals_ in the AgID Guidelines (Annex 4), the Signal Hub allows a producer to send a notification to PDND when a piece of data in its own database changes.

On the other side, it allows subscribers interested in that data to know in real time that the data has changed. The subscriber can then retrieve the updated data from the producer’s e-service.

Also in this case, the data from e-services never passes through the PDND infrastructure. For more information, see the [dedicated guide](https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-signal-hub) (Italian only).

## Tracing

Provides support to parties in correctly sizing their own infrastructure. In addition, it allows PDND to monitor the actual flow of traffic between producers and subscribers, evaluating the effectiveness of the platform itself.

It is the parties who send PDND the log of API calls made or received during a day. The log includes only the number of calls made or received and the status code related to the call itself.

The use of the service is mandatory for parties, and more information is available in the [dedicated guide](https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-tracing).

## Probing

Provides information in near real time on the health status of the APIs provided through e-services. The service allows knowing whether an API is currently available or if there are temporary technical issues affecting its operation. Commonly, this is called a “Status page.”

The Probing service is not yet in production.
