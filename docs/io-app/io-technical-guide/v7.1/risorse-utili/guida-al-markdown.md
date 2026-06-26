# #️⃣ Markdown Guide

IO allows you to enrich the content of messages and service cards with formatted text, links, and other active elements to offer the Citizen a more complete and clear experience.

To this end, the IO app supports a variant of the popular Markdown format, for which you will find all the information for its correct use here.&#x20;

## Text formatting

With the IO app, you can enrich the text of communications by highlighting parts in bold and italics, creating bulleted lists and separating them with headings.

<table><thead><tr><th width="182">Formatting</th><th width="272">Syntax</th><th>Result</th></tr></thead><tbody><tr><td>bold</td><td>Text in **bold**<br>Text in __bold__</td><td><img src="../.gitbook/assets/image (26).png" alt="" data-size="original"></td></tr><tr><td>italic</td><td><p>Text in *italic*</p><p>Text in _italic_</p></td><td><img src="../.gitbook/assets/image (27).png" alt="" data-size="original"></td></tr><tr><td>bold/italic</td><td>Text in ***bold/italic***</td><td><img src="../.gitbook/assets/image (28).png" alt="" data-size="original"></td></tr><tr><td>fixed-width<br>(note the <em>backtick</em>!)</td><td><strong>`</strong>Fixed-width text<strong>`</strong></td><td><img src="../.gitbook/assets/image (30).png" alt="" data-size="original"></td></tr><tr><td>bulleted lists</td><td>* First item\n<br>* Second item\n<br>  * Indented item\n</td><td><img src="../.gitbook/assets/image (29).png" alt="" data-size="original"></td></tr><tr><td>headings</td><td># Heading 1\n<br>## Heading 2\n<br>### Heading 3\n</td><td><img src="../.gitbook/assets/image (31).png" alt="" data-size="original"></td></tr></tbody></table>

{% hint style="info" %}
To get the backtick (_backtick_) needed for fixed-width text, you can use the key combination:

- `ALT+096`  (from the numeric keypad) if you use Windows
- Option + `\` if you use a Mac
- `ALTgr+'` if you use Linux
  {% endhint %}

{% hint style="info" %}
Remember to add `\n` at the end of each item in a bulleted list to allow for the correct interpretation of the next `*` character, as well as at the end of each heading
{% endhint %}

## Line breaks

The IO app's Markdown supports standard line breaks (one or more `\n` characters)

{% hint style="info" %}
When writing in Markdown, the use of special characters such as the apostrophe (`'`), double quote (`"`), or backslash (`\`), can introduce issues related to the interpretation of the text by Markdown tools or systems that process Markdown. Understanding how to handle these characters is essential to maintain the document's clarity and accuracy. Here are some guidelines:

- **Apostrophe and Double Quote (`' "`)**: These characters can be interpreted as string delimiters in many programming languages. When including text that requires the use of these characters in a code context, it may be necessary to double them or use escape characters to avoid conflicts. For example, to include an apostrophe in a string delimited by apostrophes, you might have to write `''` or `\'`.
- **Backslash (`\`)**: The backslash is typically used as an escape character in Markdown and in many programming languages. To include a literal backslash in a Markdown document, it is often necessary to double it (e.g.  `\\`).&#x20;

**Additionally, avoid using escape sequences or sub-alphanumeric hexadecimal characters to format text.**

These precautions ensure that the Markdown text is interpreted and displayed as intended across various tools and platforms, preventing misunderstandings or formatting errors.
{% endhint %}

## Links

The IO app's Markdown supports the standard notation for links: `[text](link)`. For example, the Markdown "`Click [here](https://io.italia.it) to go to the IO website`" will produce the following result:\ <img src="../.gitbook/assets/image (32).png" alt="" data-size="original">

{% hint style="info" %}
For security reasons, links are automatically removed or made unclickable in email forwards of messages sent on the IO app.&#x20;
{% endhint %}

## Action buttons (CTAs)

The IO app supports the optional addition of up to two buttons at the bottom of the message, which can be associated with custom links.

To display the buttons (CTAs) within a message, you must embed a **front-matter** with the following structure:

```markdown
---
it:
    cta_1: 
        text: "Write"
        action: "iohandledlink://mailto:name.surname@email.com"
    cta_2: 
        text: "IO App"
        action: "iohandledlink://https://ioapp.it/"
en:
    cta_1: 
        text: "Write email"
        action: "iohandledlink://mailto:name.surname@email.com"
    cta_2: 
        text: "IO App site"
        action: "iohandledlink://https://ioapp.it/"
---

# The message content starts here
```

The front-matter is a structured metadata section **placed at the beginning of the content**; its placement is crucial as it precedes the main body of the content and is **delimited by the --- separators**.

{% hint style="warning" %}
Be careful to respect the **indentation** of the front-matter components as shown in the example: when composing the markdown string, remember to insert the necessary spaces (one is enough, but for better readability we recommend inserting two or four).

E.g.  `"---\nit:\n`    `cta_1:\n`        `text: \"Write\"\n        action: \"iohandledlink://mailto:name.surname[...]"`
{% endhint %}

The system allows defining a maximum of two languages for translations, namely **it** and **en**. For each language, you can include a maximum of two CTAs, identified respectively as **cta_1** which is mandatory and **cta_2** which is optional.

{% hint style="info" %}
If the user has set an unsupported language, such as German, the system will use the app's default language, which is **it**. However, if the default language is not defined in the front-matter, the CTAs will not be recognised and displayed.
{% endhint %}

Two properties are defined for each CTA:

1. **text** which represents the text that will be displayed in the CTA
2. **action** which represents the action that will be triggered when the CTA is tapped

### Possible actions

For the action, protocols are defined for creating internal routes within the IO app and for interacting with some features of the device's operating system.

#### CTA with Link

To get a CTA with a link to a site external to IO, as with a normal link, you must use the `iohandledlink://` protocol followed by the full internet address of the destination site, for example `iohandledlink://https://example.it`&#x20;

{% hint style="warning" %}
You must add the `https://` protocol between `iohandledlink://` and the site address
{% endhint %}

#### Special actions

To enrich your messages while making them easier for the recipient to use, IO supports the creation of CTAs that can:

1. start **composing an SMS** to a phone number: in this case, you must use the syntax `iohandledlink://sms:+393211234567` where "+393211234567" is the recipient's number
2. start **composing an email** to an email address: in this case, you must use the syntax `iohandledlink://mailto:name.surname@email.com` where "name.surname@email.com" is the destination email address
3. start a **call to a phone number**: in this case, you must use the syntax `iohandledlink://tel:+39061234567` where "+39061234567" is the phone number to call

{% hint style="info" %}
In all cases, the actual sending of the SMS, email, or call will occur within the app designated for this purpose on the user's device, subject to their confirmation
{% endhint %}

{% hint style="warning" %}
Remember that these special actions are only available for CTAs: links in the text that activate them are not currently supported
{% endhint %}

