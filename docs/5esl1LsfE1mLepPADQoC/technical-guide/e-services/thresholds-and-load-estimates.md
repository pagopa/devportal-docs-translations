# Thresholds and load estimates

When a producer creates a new version of an e-service, they must indicate two tolerance thresholds for their infrastructure:

* the number of API calls per day allowed for each individual consumer;
* the total threshold given by the sum of API calls per day from all consumers.

This measure is provided for in the AgID Guidelines to protect the producer’s infrastructure and to support proper sizing of their infrastructure in relation to the expected load from consumers.

{% hint style="info" %}
The goals are:

* to allow the producer to plan the availability of their resources;
* to guide consumers towards a responsible practice of sizing their needs;
* to build a model that is observable and can, over time, lead to resource optimization.
{% endhint %}

## Administrative and privacy matters

**The threshold and load estimate mechanism is a technical tool** to support PDND parties and to ensure the proper functioning of services for all.

There may be **administrative and privacy considerations** regarding the amount of data extracted, especially if personal data is processed. **The correct tool** to track this information is not thresholds and load estimates, but rather the declaration made by the consumer in the **risk analysis**. The risk analysis includes the question: _“Indicate whether you know the amount of personal data you will obtain through the use of this E-service.”_ Any justifications and reasons can be discussed in that context.

## Manual approval

A consumer with an active service request for a version of an e-service may continue to declare purposes until reaching one of the two thresholds. Once a threshold is exceeded, new purposes will no longer be automatically approved.

It will be up to the producer to manually activate the purposes after verifying the declared load. If the consumer’s request is excessive, the producer may contact them or provide a date by which they expect to have upgraded their infrastructure to handle the new load. The completion date is indicative and can be changed unilaterally by the producer via the PDND UI or API.

## Aggiornamento delle soglie

The producer may update their thresholds at any time without creating a new version of the e-service. This change is applied immediately and only affects purposes received from that moment onwards.

Purposes that were _Waiting for approval_ before the update must still be approved manually by the producer.

## Pratical examples

### Per-consumer threshold

1. Version 1 of the e-service _Example E-service_ provided by Party A has 2,000 API calls/day per consumer and 50,000 API calls/day total.
2. Party B registers as a consumer; the service request is activated.
3. Party B creates and submits its first purpose, _Purpose 1_, with 1,000 API calls/day.
4. The purpose is activated automatically by the platform.
5. Party B creates and submits a second purpose, _Purpose 2_, with 1,000 API calls/day.
6. The purpose is activated automatically by the platform.
7. Party B creates _Purpose 3_ with 1 API call/day.

In this case, _Purpose 3_ is placed by the platform in **Waiting for approval** status. It will be up to the producer to manually activate it. Purposes 1 and 2 continue to operate regularly.

This happens because adding up the API calls/day of the three purposes from consumer Party B (1,000 + 1,000 + 1) exceeds the per-consumer threshold set by the producer (2,000). This threshold applies only to this e-service and not to other e-services provided by the same producer.

All subsequent purposes submitted by that consumer for that e-service version must be manually activated by the producer, unless the producer decides to **raise the per-consumer threshold**.

### Total threshold

1. Version 1 of the e-service _Example e-service_ provided by Party A sets 5,000 API calls/day per consumer and 10,000 API calls/day in total
2. Party B subscribes as a consumer; the service request is activated.
3. Party B creates and submits a purpose for _Example e-service_, _Purpose 1_, with 5,000 API calls/day.
4. The purpose is automatically activated by the platform.
5. Party C subscribes as a consumer; the service request is activated.
6. Party C creates and submits a purpose for _Example e-service_, _Purpose 1_, with 5,000 API calls/day.
7. The purpose is automatically activated by the platform.
8. Party D subscribes as a consumer; the service request is activated.
9. Party D creates and submits a purpose for _Example e-service_, _Purpose 1_, with 1 API call/day.

In this case, _Purpose 1_ from Party D is placed by the platform in **Waiting for approval** status. It will be up to the producer to manually activate it. The purposes previously published by Parties B and C continue to operate regularly.

This happens because adding up the API calls/day from three consumers (5,000 + 5,000 + 1) exceeds the total threshold set by the producer (10,000).

All subsequent purposes submitted by any consumer for that e-service version must be manually activated by the producer, unless the producer decides to **raise the total threshold**.

### Updating the load estimate of a purpose

1. Version 1 of the e-service _Example e-service_ provided by Party A sets 2,000 API calls/day per consumer and 50,000 API calls/day in total.
2. Party B subscribes as a consumer; the service request is activated.
3. Party B creates and submits a first purpose for _Example e-service_, _Purpose 1_, with 1,000 API calls/day.
4. The purpose is automatically activated by the platform.
5. Party B creates and submits a second purpose for _Example e-service_, _Purpose 2_, again with 1,000 API calls/day.
6. The purpose is automatically activated by the platform.
7. Party B updates its load estimate for Purpose 2 to 5,000 API calls/day instead of 1,000.

In this case, _Purpose 2_ has **two states simultaneously**:

* It is _Active_ with the load estimate of 1,000 API calls/day;
* It is _Waiting for approval_ with the load estimate of 5,000 API calls/day.

This arrangement allows the consumer to continue using the purpose with the previous estimate (1,000 API calls/day) while waiting for the producer to approve the new estimate that exceeds one of its thresholds.

**If the updated load estimate stays below both thresholds set by the producer, it will be automatically activated.**

### Updating an e-service threshold

1. Version 1 of the e-service _Example e-service_ provided by Party A sets 5,000 API calls/day per consumer and 10,000 API calls/day in total.
2. Party B subscribes as a consumer; the service request is activated.
3. Party B creates and submits a purpose for _Example e-service_, _Purpose 1_, with 5,000 API calls/day.
4. The purpose is automatically activated by the platform.
5. Party C subscribes as a consumer; the service request is activated.
6. Party C creates and submits a purpose for _Example e-service_, _Purpose 1_, with 5,000 API calls/day.
7. The purpose is automatically activated by the platform.
8. Party D subscribes as a consumer; the service request is activated.
9. Party D creates and submits a purpose for _Example e-service_, _Purpose 1_, with 1 API call/day.
10. The producer, Party A, raises the total threshold to 15,000 API calls/day.

In this case, _Purpose 1_ from Party D remains in **Waiting for approval** status and will need to be manually approved by the producer.

However, if any party subscribed to the e-service creates new purposes that, when summed, remain below the new availability, those purposes will be set to _Active_ immediately. The new availability is 5,000 API calls/day (originally 10,000, raised to 15,000).

## Handling API calls spikes

The load management model in place is rather simplified and does not address a very common problem: API call spikes (for example, during so-called “click days”).

The model is designed this way for several reasons, including:

* It is intended as a tool to support parties in sizing their requests and infrastructure consistently with the expected traffic over time. It is therefore not meant to be a real-time management tool — for which the producer’s monitoring and control tools are more effective.
* It does not intend to replace the producer’s own verification and monitoring tools.
* PDND has no real-time visibility of the actual number of calls the consumer makes to the producer. This can only be assessed in retrospect through the [Tracing](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/xgMmDloC8UwpLmzXPHfx/) tool, meaning all action would be left to individual parties, leading to sudden interruptions and a heavy additional operational burden.

### Producer monitoring tools

According to the indications in the ModI, both producer and consumer are required to keep a record of all API calls received.

In this way, the producer can over time:

* Monitor load trends on its infrastructure, even identifying recurring patterns (e.g., a load spike every Thursday night between 2:00 and 3:00).
* Identify potential critical situations (e.g., the load estimate declared on PDND does not match reality).

### Best practice to avoid "click day" scenarios

Where possible, it is always recommended to avoid immediate synchronous calls that could cause a load spike on a producer’s infrastructure.

In many cases, it is possible to:

* Defer calls, distributing them over time;
* Use _bulk/asynchronous exchange_ services.

{% hint style="info" %}
The bulk/asynchronous exchange functionality is not yet implemented; it is planned in the roadmap for the first half of 2026.
{% endhint %}

It is possible to do this by saving the minimum information and the priority acquired from the user for a limited time in your own database. Only later should you perform checks by contacting the producers’ e-services and completing the procedure.
