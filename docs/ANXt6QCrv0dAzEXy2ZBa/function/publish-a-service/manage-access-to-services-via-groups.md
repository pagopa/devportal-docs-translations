---

description: \>-  
This section guides you through the configuration of the “Groups” function in the Reserved area, which allows you to define the visibility of services with respect to one or more users (operators).
---

# Manage access to services via groups

## What is a group?

A group is a **set of delegates of an institution who are grouped together according to a common characteristic.** For example, a group of users can represent a specific office or a technological partner that supports the institution.

Consult the [Reserved Area Operating Manual](https://docs.pagopa.it/area-riservata/area-riservata/come-funziona/gruppi) for more details about groups.

## Why create a group in IO?

As the administrator of an institution, by creating a group of users for the IO product, you can:

* **Associate one or more services with an active group**. In this way, the users (operators) of that group can work, via the back-office, only with the services associated with them.
* **Create specific Manage API keys for that group.** The users (operators) of the group working via API will not be able to view the general [manage-key.md](manage-key/manage-key.md "mention"), rather only the those specific to that group, which allow them to work only with the services “connected” to their group.

{% hint style="warning" %} Keep in mind that for security reasons, when you remove a user from a group you should rotate any associated API Key. For more information, refer to [manage-key](manage-key/ "mention"). {% endhint %}

{% hint style="danger" %} A service can be associated with only one group. {% endhint %}

## What are the consequences of creating a group for IO? <a href="#quale-il-beneficio-di-usare-i-gruppi-per-io" id="quale-il-beneficio-di-usare-i-gruppi-per-io"></a>

As the administrator user, by using groups you can limit the cone of visibility and operation for the operator users for some IO services.

{% hint style="info" %} As an **administrator** you will always have full visibility, regardless of your membership in one or more groups. {% endhint %}

As an operator user, you can see and manage only the services that were assigned to the groups to which you belong.

{% hint style="info" %} As an **operator** that is not a member of any group, you will see all of the institution's services, without restrictions. {% endhint %}

## What does it mean to suspend a group?

As an institution administrator, in the Reserved Area you can suspend a group, and as a result:

* Suspend any API Key associated with it, in order to block the operation of the users of this key.
* Block all the actions on services by operators belonging to that group.

{% hint style="info" %} As an **operator** associated with a suspended group, you will not have access to the services associated with that group or to the other services of the institution. However, if you are associated with other active groups, you will still be able to access the services of those groups. {% endhint %}

## **Who can manage the groups?** <a href="#chi-puo-gestire-i-gruppi" id="chi-puo-gestire-i-gruppi"></a>

Groups can be created and managed only by administrator users. Specifically:

<table data-full-width="false"><thead><tr><th width="298">What can be done</th><th width="135" data-type="checkbox">Administrator</th><th width="186" data-type="checkbox">Operator without a group</th><th width="173" data-type="checkbox">Operator with a group</th><th width="224" data-type="checkbox">Operator with a suspended group</th></tr></thead><tbody><tr><td>Create a group</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>Add users to a group</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>Edit/Suspend/Delete a group</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>Create and manage group API keys</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>View all the group API keys</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>View the API keys of the group to which the user belongs</td><td>true</td><td>false</td><td>true</td><td>false</td></tr><tr><td>Manage the Manage API key</td><td>true</td><td>false</td><td>false</td><td>false</td></tr><tr><td>View the Manage API key</td><td>true</td><td>true</td><td>false</td><td>false</td></tr><tr><td>View and manage all the services</td><td>true</td><td>true</td><td>false</td><td>false</td></tr><tr><td>View and manage all the services in the group to which the user belongs</td><td>true</td><td>false</td><td>true</td><td>false</td></tr></tbody></table>

## Procedure for configuring a group in IO: <a href="#passaggi-da-fare-per-configurare-un-gruppo-su-io" id="passaggi-da-fare-per-configurare-un-gruppo-su-io"></a>

1. Create a group in the Reserved Area (click [here](https://docs.pagopa.it/area-riservata/area-riservata/come-funziona/gruppi) for more details about the functionality).
2. Access the IO back office
3. Go to the “Services” section and associate the group that was just created with only the services that you want the users to be able to use.
   1. You can associate the services by clicking “Associate group” to the top right;
   2. You can access the details of each Service and, on the information panel, click the pencil icon next to the group item.
4. If the users of your institution work via API:
   1. Go to the API key section;
   2. Create a new Group API key for the group that was just created;
   3. Inform the operator users of the group that now have the new API keys that they can use to work with the services and that they can retrieve in the back office.