---
description: >-
  This section guides you through configuring the "Groups" feature of the Reserved Area, which allows you to define the visibility of services for one or more users (operators).
---

# Managing access to services via groups

## What is a group?

A group is a **set of an organization's delegates who are grouped according to a common characteristic.** For example, a group of users can represent a specific office or a technology partner that supports the organization.

Consult the [Reserved Area's Operational Manual](https://docs.pagopa.it/area-riservata/area-riservata/come-funziona/gruppi) for more details on Groups.

## Why create a group on IO?

As an organization's administrator, by creating a user group for the IO product, you will be able to:

- **Associate one or more services with an active group**. This way, the users (operators) of that group will be able to operate, via the back-office, only on the services associated with them.
- **Create specific Manage API Keys for that group.** The users (operators) of that group who operate via API will no longer be able to view the general [manage-key.md](chiave-manage/chiave-manage.md "mention"), but only the ones specific to that group, which allow operating only on the services "linked" to the same group.

{% hint style="warning" %}
Remember that, for security reasons, when you remove a user from a group, you should rotate any associated API Key. For more information, see [manage-key](chiave-manage/ "mention").
{% endhint %}

{% hint style="danger" %}
A service can only be associated with one group.
{% endhint %}

## What are the consequences of creating a group for IO? <a href="#what-is-the-benefit-of-using-groups-for-io" id="what-is-the-benefit-of-using-groups-for-io"></a>

As an administrator user, by using groups you can limit the scope of visibility and operation for operator users on certain IO services.

{% hint style="info" %}
As an **administrator**, you will always have full visibility, regardless of membership in one or more groups.
{% endhint %}

As an operator user, you will only be able to see and manage the services that have been assigned to the groups you are a part of.

{% hint style="info" %}
As an **operator** who is not a member of any group, you will see all of the organization's services, without restrictions.
{% endhint %}

## What does suspending a group mean?

As the organization's administrator, in the Reserved Area you can suspend a group, and consequently:

- suspend any API Key associated with it, thereby blocking the operations of users of this key.
- block all actions on services by operators belonging to that group.

{% hint style="info" %}
As an **operator** associated with a suspended group, you will not have access to the services associated with that group, nor to the organization's other services. However, if you are associated with other active groups, you will continue to have access to the services of those groups.
{% endhint %}

## **Who can manage groups?** <a href="#chi-puo-gestire-i-gruppi" id="chi-puo-gestire-i-gruppi"></a>

Groups can only be created and managed by administrator users. Specifically:

<table data-full-width="false"><thead><tr><th width="298">What can be done</th><th width="135" data-type="checkbox">Administrator</th><th width="186" data-type="checkbox">Operator without a group</th><th width="173" data-type="checkbox">Operator with a group</th><th width="224" data-type="checkbox">Operator with a suspended group</th></tr></thead><tbody><tr><td>Create a group</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>Add users to the group</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>Modify/Suspend/Delete a group</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>Create and manage the group's API Keys</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>View all group API Keys</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>View the API Keys of the group they belong to</td><td>true</td><td>false</td><td>true</td><td>false</td></tr><tr><td>Manage the Manage API Key</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>View the Manage API Key</td><td>true</td><td>true</td><td>false</td><td>false</td></tr><tr><td>View and manage all services</td><td>true</td><td>true</td><td>false</td><td>false</td></tr><tr><td>View and manage services in the group they belong to</td><td>true</td><td>false</td><td>true</td><td>false</td></tr></tbody></table>

## Procedure to configure a group on IO: <a href="#passaggi-da-fare-per-configurare-un-gruppo-su-io" id="passaggi-da-fare-per-configurare-un-gruppo-su-io"></a>

1. Create a group in the Reserved Area ([Here](https://docs.pagopa.it/area-riservata/area-riservata/come-funziona/gruppi) for more details on the feature).
2. Log in to the IO back-office
3. Go to the "Services" section and associate only the services you want users to be able to operate on with the newly created group.
   1. You can associate services by clicking “Associate group" in the top right;
   2. You can go into the details of each Service and, in the information panel, click the pencil icon next to the groups item.
4. If your organization's users work via API:
   1. Go to the API Key section;
   2. Create a new Group API Key for the newly created group;
   3. Inform the group's operator users that they now have new API Keys they can use to operate on the services and that they can retrieve them in the back-office.
