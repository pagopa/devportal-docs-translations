# The types of services

## Standard and special services

There are two types of IO services: **standard** and **special**. Institutions can select which of the two to use according to their needs.

### Standard services

Standard services can use all the functions provided by IO. The state of communication of these services follows the general configuration (fast or manual) or can be managed service by service on the relative tab.

{% hint style="info" %}
You can find more information on the two configuration methods in the paragraph "What can citizens do with the services IO?" in section \[\*\*Who are the recipients of the services in\*\* \*\*IO\*\*]\(../io-service-providers-and-users/who-are-the-recipients-of-the-services-on-io.md).
{% endhint %}

### Special services

As compared to standard services, special services have an **ad hoc registration flow by the user**. The user can subscribe using the button located on the service tab or through a third-party channel, for example the website for the institution or the individual initiative.

Subscribing to these services involves the “automatic” activation of the “Contact you in-app” option. This is considered in fact a necessary component to use the service correctly and therefore cannot be deactivated regardless of the general configuration the user selected. On the other hand, unsubscribing from the service makes it possible again to manually manage the “Contact you in-app” option.

{% hint style="info" %}
\*\*Example: the National Youth Card (CGN)\*\*

The National Youth Card is a special service. The button “Request CGN” is located on its tab. After requesting and obtaining the CGN, the “Contact you in-app” option and the button on the service tab will become “Deactivate the card". From that moment, the option “Contact you in-app” cannot be deactivated unless the card is deactivated.
{% endhint %}

Once published, all services can be found in the “Services” section of IO, such as the items of the lists of the National or Local services and are associated with the name of the institution that provides them. By pressing the name of a service, the user can view the service tab that contains information about the service and can manage the communication.

<figure><img src="../.gitbook/assets/servizi.png" alt=""><figcaption><p>The Services sections of the app</p></figcaption></figure>

[<mark style="color:blue;">**To discover how to create a service, read the technical guide -->**</mark>](https://app.gitbook.com/s/coSKRte21UjDBRWKLtEs/funzionalita/creare-un-servizio)

## The preferences of citizens

In the “Preferences” section of the app, citizens can customize some preferences that have an impact on which services can send them communications and how. Let’s take a look at them together.

### Two types of configurations

A service can contact a user only if they gave consent to receive communications from it. There are two ways to express this preference:

* **upon first access or in the section Profile>Preferences on IO**, by selecting the quick configuration that activates communication for all current and future IO services;
* **on the tab for each service**, activating the option "Contact you in-app" in the item "This service can".

If the user selected manual configuration or did not activate the “Contact you in-app” option for a service, it cannot send them messages.

{% hint style="info" %}
The institution can \*\*know the state of activation\*\* of the service using the specific \[API]\(https://app.gitbook.com/s/coSKRte21UjDBRWKLtEs/api/api-messaggi/get-a-user-profile-using-post).
{% endhint %}

### Push notifications

The sending of a message triggers the receipt of a push notification on the user’s device. There are two ways to activate push notifications:

* **on a general level**, activating the push notification option for the IO app from the settings in your device
* **on the tab for each service**, activating the option "Send you push notifications" in the item "This service can".

In the section **Profile>Preferences>Push notifications**, users can customize the notifications they receive, choosing to:

* see a preview of the message in the push notification, that is the institution that sent it and the subject;
* receive, upon request of the institution, push notifications near deadlines or when there are unread messages.

### Forwarding messages to e-mail

The user can also select to receive a copy of each message that arrives in-app to their e-mail address. In this case, the forwarding is enabled in the section **Profile>IO preferences** in the item "Forwarding of messages via e-mail".

This selection is on the app level and not for a single service: if active all services will send a message in the app as well as an e-mail message. If not enabled, no service will send e-mail messages.

{% hint style="info" %}
\*\*Exception: sensitive services\*\*

Services that send information considered sensitive, such as health data, cannot send e-mails or push notifications with a preview of the message regardless of the general preference expressed by the user.
{% endhint %}
