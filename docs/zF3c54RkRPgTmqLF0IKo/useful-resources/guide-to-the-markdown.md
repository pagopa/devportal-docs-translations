# #️⃣ Guide to the Markdown

IO allows the content of messages and service boards to be enriched with formatted text, links and other active elements in order to offer the citizen a more complete and clearer experience.

To this end, the IO app supports a variant of the popular Markdown format. You can find all the information for its correct use here.

## Text Formatting

With the IO app you can enrich the text of communications by highlighting parts in bold and italics, creating bullet-pointed lists and separating it with headings.

<table><thead><tr><th width="182">Formatting</th><th width="272">Syntax</th><th>Result</th></tr></thead><tbody><tr><td>bold</td><td>Text in **bold**<br>Text in __bold__</td><td><img src="../.gitbook/assets/image (25).png" alt="" data-size="original"></td></tr><tr><td>italics</td><td><p>Text in *italics*</p><p>Text in_italics_</p></td><td><img src="../.gitbook/assets/image (26).png" alt="" data-size="original"></td></tr><tr><td>bold/italics</td><td>Text in ***bold/italics***</td><td><img src="../.gitbook/assets/image (27).png" alt="" data-size="original"></td></tr><tr><td>fixed spacing<br>(note the <em>backtick</em>!)</td><td><strong>`</strong>Fixed-spacing text<strong>`</strong></td><td><img src="../.gitbook/assets/image (29).png" alt="" data-size="original"></td></tr><tr><td>bullet-point lists</td><td>* First element<br>* Second element<br>* Indented element</td><td><img src="../.gitbook/assets/image (28).png" alt="" data-size="original"></td></tr><tr><td>headings</td><td># Heading 1<br>## Heading 2<br>### Heading 3</td><td><img src="../.gitbook/assets/image (30).png" alt="" data-size="original"></td></tr></tbody></table>

{% hint style="info" %}
To obtain the backtick required for fixed-spacing text you can use the key combination:

* `ALT+096` (from the numeric keypad) if you use Windows
* Option + `\` if you use Mac
* `ALTgr+'` if you use Linux
{% endhint %}

{% hint style="info" %}
Remember to add \`\n\` at the end of each bullet-pointed list item to allow the correct interpretation of the next character \`\*\` , as well as at the end of each heading
{% endhint %}

## Start a new line

The Markdown of the IO app supports two ways of “starting a new line”:

1. **a single \n preceded by two spaces** (" ") allows you to simply start a new line with a line break
2. **a double** "`\n`" allows you to start a new line by creating a new paragraph (with spacing from the previous one)

{% hint style="info" %}
When composing text in Markdown, the use of special characters such as superscript (\`'\`), double superscript (\`"\`), or backslash (\`\\\`), can introduce issues related to text interpretation by Markdown tools or systems that process Markdown. Understanding how to manage these characters is essential for maintaining the clarity and accuracy of the document. Some guidelines are outlined below:

* **Superscript and Double Superscript (`' "` )**: These characters can be interpreted as string delimiters in many programming languages. When including text that requires the use of these characters in a code context, it may be necessary to double them or use escape characters to avoid conflicts. For example, to include a superscript in a string delimited by superscripts, one might have to write `''` o `\'`.
* **Backslash (`\`)**: The backslash is typically used as an escape character in Markdown and many programming languages. To include a literal backslash in a Markdown document, it is often necessary to double it (e.g. `\\`).

These precautions ensure that the Markdown text is interpreted and displayed as desired across various tools and platforms, preventing misunderstandings or formatting errors.
{% endhint %}

## Link

The Markdown of the IO app supports standard notation for links: `[testo](link)`. For instance, the Markdown "`Clicca [qui](https://io.italia.it) per andare sul sito di IO`" will produce the following result:\
<img src="../.gitbook/assets/image (31).png" alt="" data-size="original">

{% hint style="info" %}
For security reasons, links are automatically removed or made unclickable in email forwards of messages sent on the IO app.
{% endhint %}

## Call to Action Buttons (CTA)

The IO app supports the optional addition of up to two buttons at the bottom of the message, which can be associated with customized links.

In order to present the buttons (CTA) within a message, you must incorporate a **front-matter** with the following structure:

```markdown
---
it:
    cta_1: 
        text: "Scrivi"
        action: "iohandledlink://mailto:nome.cognome@email.com"
    cta_2: 
        text: "IO Italia"
        action: "iohandledlink://https://io.italia.it/"
en:
    cta_1: 
        text: "Write email"
        action: "iohandledlink://mailto:nome.cognome@email.com"
    cta_2: 
        text: "IO Italia site"
        action: "iohandledlink://https://io.italia.it/"
---

# Il contenuto del messaggio inizia qui
```

The front-matter is a structured section of metadata **placed at the beginning of the content**; its placement is crucial as it precedes the main body of the content and it is **delimited by the --- separators**.

{% hint style="warning" %}
Take care to respect \*\*the indentation\*\* of the front-matter components as shown in the example: when composing the markdown string, remember to insert the necessary spaces (one is sufficient, but for readability we recommend inserting two or four).

e.g. `"---\nit:` `cta_1:` `text: \"Scrivi\"\n action: \"iohandledlink://mailto:nome.cognome[...]"`
{% endhint %}

The system allows you to define a maximum of two languages used for translations, i.e. **it** and **en**. For each language, you can include a maximum of two CTAs, identified respectively as **cta\_1** which is mandatory and **cta\_2** which is optional.

{% hint style="info" %}
In the event that the user has set an unsupported language, such as German, the system will use the app's default language, i.e. \*\*it\*\*. However, if the default language is not defined in the front-matter, the CTAs will not be recognized and displayed.
{% endhint %}

Two properties are defined for each CTA:

1. **text** representing the text that will be displayed in the CTA
2. **action** which represents the action that will be triggered on tapping the CTA

### Possible actions

For the action, protocols are defined for the creation of routes within the IO app and the interaction with certain features of the operating system of the device in use.

#### CTA with Link

To obtain a CTA with a link to a site external to IO, as in the case of a normal link, you must use the protocol `iohandledlink://` followed by the full Internet address of the destination site, e.g. `iohandledlink://https://io.italia.it`

{% hint style="warning" %}
You must add the protocol \`https://\` between \`iohandledlink://\` and the site address
{% endhint %}

#### Special actions

In order to enrich your messages while facilitating their use by the recipient, IO supports the creation of CTAs capable of

1. initiating the **creation of an SMS** to a telephone number: in this case, you must use the syntax `iohandledlink://sms:+393211234567` where "+393211234567" is the recipient’s number
2. initiating the **creation of an email** to an email address: in this case, you must use the syntax `iohandledlink://mailto:nome.cognome@email.com` where "name.surname@email.com" is the destination email address
3. initiating a **call to a telephone number**: in this case, you must use the syntax `iohandledlink://tel:+39061234567` where "+39061234567" is the telephone number to be called

{% hint style="info" %}
In all cases, the actual sending of the SMS, email or call will take place within the app set up for this purpose in the user's device, subject to confirmation by the user
{% endhint %}

{% hint style="warning" %}
Please note that these special actions are only available for CTAs: text links activating them are currently not supported
{% endhint %}
