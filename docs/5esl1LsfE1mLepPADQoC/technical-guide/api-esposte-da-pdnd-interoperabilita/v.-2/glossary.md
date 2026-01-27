# Glossary

The core APIs are written in the _lingua franca_ of programming: English.\
Below is the table for converting the terms used for general purpose in the concepts used in the API.

In the following pages, when a name appears with only the first letter capitalized, it refers to a domain object; when a name appears entirely in uppercase, it instead refers to a state of a domain object. In general, whenever English terms appear, they refer to the nomenclature used to describe the API.

{% hint style="info" %}
This page makes most sense when read from an Italian-to-English perspective. It is kept in the guide as slight differences might still be relevant (e.g. agreement = service request).
{% endhint %}

## Domain object

| Term used in the APIs | Meaning                         |
| --------------------- | ------------------------------- |
| Agreement             | service request                 |
| Attribute             | attribute                       |
| Client                | client                          |
| Consumer              | consumer                        |
| Delegation            | delegation                      |
| EService              | e-service                       |
| EServiceDescriptor    | e-service version               |
| EServiceTemplate      | e-service template              |
| Key                   | public key                      |
| Producer              | producer                        |
| Purpose               | purpose                         |
| PurposeVersion        | purpose version                 |
| RiskAnalysis          | risk analysis                   |
| Tenant                | a party who is a member of PDND |
| User                  | user                            |

## States

Domain objects can take on certain common states. Here, _state_ is understood as the state of a state machine. For convenience, a glossary is provided below, although not all objects implement all states, and some objects have specific states that are not listed here for brevity.

In the following pages of the guide, however, the life cycles of each domain object are provided.

| Term used in the APIs            | Meaning                                              |
| -------------------------------- | ---------------------------------------------------- |
| ACTIVE o PUBLISHED               | active                                               |
| ARCHIVED                         | archived                                             |
| DRAFT                            | draft                                                |
| PENDING o WAITING\_FOR\_APPROVAL | waiting for the approval of the other party involved |
| REJECTED                         | rejected                                             |
| SUSPENDED                        | suspended                                            |
