# v. 1 (deprecated)

{% hint style="warning" %}
Version 1 APIs are currently being phased out. For new integrations, please use v. 2.
{% endhint %}

PDND exposes a set of APIs for performing checks in machine-to-machine mode. Version 1 offers read-only operations and an initial version of an event channel, through which participants can stay updated on state changes occurring on the platform for components of interest to them (e.g., e-services they produce, service requests they receive, etc.).

## Goals

* Allow producers to complete any checks necessary for providing e-services to consumers.
* Enable participants to automate part of their workflow based on the available information.

## Philosophy

The APIs are designed to be as generic and agnostic as possible. For this reason, each response returns the relevant IDs of other linked objects, which can be used to make further API calls to retrieve the desired information.

## Where to find them?

The service URL and the OpenAPI specification for the interface are available in the _**Consumption > Your Interop API clients**_ section, within any _machine-to-machine_ client that is created.

{% hint style="warning" %}
The server URL providing the APIs differs for each environment (Testing, Verification, Production).
{% endhint %}

## Notifications endpoint

Among its API endpoints, PDND also offers one that allows the participant to obtain a list of events. These events represent state changes that have occurred within the infrastructure. They can be used to receive timely updates and set up automations.

The model requires the producer to request the events of interest via polling.

{% hint style="info" %}
Producers may apply a polling policy at intervals no shorter than one minute. Event persistence is limited to no more than two months.
{% endhint %}

Each event is identified by an incrementing sequence number (event ID). The party can request all events starting from a specific `eventId`, specifying the pagination size, i.e., the number of events to return (`limit`).

The participant can then cache the obtained results and download further events starting from the last obtained `eventId`.

{% hint style="info" %}
Events cover state changes to purposes (`Purposes`), service requests (`Agreements`), and e-services (`EServices`).
{% endhint %}
