---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/BPKHO8znE6DiADKFUJfZ/technical-references/e-services/thresholds-and-approvals
---

# Thresholds and approvals

When a producer creates a new e-service version, two **tolerance thresholds** are set for its infrastructure:

* the maximum number of API calls per day allowed to a **single consumer**;
* the maximum **total** number of API calls per day across **all consumers**.

These thresholds, defined by the Guidelines, help ensure proper service sizing and operational continuity.

{% hint style="info" %}
**Objectives:**

* planning the producer’s resources;
* guiding consumers toward consistent estimates;
* ensuring a sustainable and observable usage model over time.
{% endhint %}

## **Administrative and privacy considerations**

Thresholds and load estimates are **technical tools** supporting operational management.\
When **personal data** are processed, the quantity of extracted data and related justifications must be indicated in the **risk analysis**, which includes the question:

> “Indicate whether you are aware of the quantity of personal data you will have access to through the consumption of this e-service.”

Any explanations are provided within that section.

## **Manual approval**

A consumer with an **active service request** can declare new **purposes** until reaching one of the two thresholds.\
Once a threshold is exceeded, the **new purposes** enter the _waiting for approval_ state.

The producer verifies the declared estimate and can **manually activate** the purposes.\
If the request exceeds the declared capacity, the producer **contacts the consumer** or provides an **estimated date** for infrastructure adjustment.

## **Threshold updates**

The producer can **update thresholds** at any time **without** creating a new version of the e-service.\
The update is applied **immediately** and affects **only** the purposes received **after** the modification.

Purposes that were _waiting for approval_ **before** the change must be approved **manually**.

## **Practical examples**

### **Threshold per consumer**

1. Version 1 of “Sample e-service”: **2,000** API calls/day per consumer and **50,000** total.
2. Party B subscribes and the request is activated.
3. Party B creates three purposes: **1,000**, **1,000**, and **1** calls/day.

The third purpose is _waiting for approval_ (sum = **2,001** > **2,000** per consumer).\
The producer may **manually approve** it or **raise** the per-consumer threshold.

### **Total threshold**

1. Version 1 of “Sample e-service”: **5,000** API calls/day per consumer and **10,000** total.
2. Parties B, C, and D subscribe and their requests are activated.
3. Party B and Party C each create one purpose with **5,000** calls/day, reaching a total of **10,000** calls/day.
4. Party D creates one purpose with **1** call/day.

The purpose of Party D becomes _waiting for approval_.\
The producer may **manually approve** it or **raise** the total threshold.

### **Updating a purpose’s load estimate**

* Party B raises a purpose from **1,000** to **5,000** calls/day.
* The purpose remains **active** at **1,000** and **waiting for approval** at **5,000**.\
  → The consumer continues operating with the **previous estimate** until the new one is approved.\
  If the new estimate stays **below both thresholds**, it is **automatically activated**.

### **Updating an e-service threshold**

1. Version 1 of the e-service _Sample e-service_ produced by Party A sets 5,000 API calls/day per consumer and 10,000 total;
2. Party B subscribes as a consumer; the service request is activated;
3. Party B creates and submits a purpose for _Sample e-service_, _Purpose 1_, with 5,000 API calls/day;
4. The purpose is automatically activated by the platform;
5. Party C subscribes as a consumer; the service request is activated;
6. Party C creates and submits a purpose for _Sample e-service_, _Purpose 1_, with 5,000 API calls/day;
7. The purpose is automatically activated by the platform;
8. Party D subscribes as a consumer; the service request is activated;
9. Party D creates and submits a purpose for _Sample e-service_, _Purpose 1_, with 1 API call/day;
10. The producer, Party A, raises the total threshold to 15,000 API calls/day.

In this case, the _Purpose 1_ of Party D remains _waiting for approval_ and must be manually approved by the producer.

However, if any other party subscribed to the e-service creates new purposes that, when summed, stay below the new total capacity, those purposes will be directly _active_.\
The new availability is 5,000 API calls/day (originally 10,000, increased to 15,000).

## **Managing call peaks**

The threshold model is designed for **long-term load planning**; **peaks** (e.g., “click days”) and **real-time management** must be handled using the producer’s **monitoring** and **control** tools.

### **Best practices to avoid peaks**

* Prefer **distributed submissions over time** instead of simultaneous synchronous calls;
* Use **queues** and **asynchronous internal processes** to spread the load;
* Define **time windows** and **priorities** to manage high volumes.

{% hint style="info" %}
To better support parties in such cases, the new Guidelines foresee a feature for asynchronous/massive exchanges. This feature is under development.
{% endhint %}

## **Monitoring**

Producers and consumers **retain a trace** of all API calls received, as provided for in the MoDI, to:

* analyze **load trends**;
* identify **recurring patterns** (e.g., peaks in specific time windows);
* compare the **declared estimate** with the **actual traffic**.

More information is available in the dedicated section.

***

Next page [→ Keychains](keychains.md)
