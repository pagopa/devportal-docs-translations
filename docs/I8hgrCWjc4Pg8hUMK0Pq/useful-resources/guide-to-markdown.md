# #️⃣ Markdown guide

IO allows you to enrich the content of messages and service details with formatted text, links, and other interactive elements, providing citizens with a clearer and more complete experience.

For this purpose, the IO app supports a variant of the popular Markdown format. This page provides all the information you need to use it correctly. 

## Text formatting

With the IO app, you can enhance communication content by highlighting text in bold or italics, creating bulleted lists, and organizing it with headings.

<table><thead><tr><th width="182">Formatting</th><th width="272">Syntax</th><th>Result</th></tr></thead><tbody><tr><td>bold</td><td>Text in **bold**<br>Text in __bold__</td><td><img src="../.gitbook/assets/image (26).png" alt="" data-size="original"></td></tr><tr><td>italics</td><td><p>Text in *italics*</p><p>Text in _italics_</p></td><td><img src="../.gitbook/assets/image (27).png" alt="" data-size="original"></td></tr><tr><td>bold/italics</td><td>Text in ***bold/italics***</td><td><img src="../.gitbook/assets/image (28).png" alt="" data-size="original"></td></tr><tr><td>monospace<br>(note the <em>backtick</em>!)</td><td><strong>`</strong>Monospace text<strong>`</strong></td><td><img src="../.gitbook/assets/image (30).png" alt="" data-size="original"></td></tr><tr><td>bulleted lists</td><td>* First item\n<br>* Second item\n<br>  * Indented item\n</td><td><img src="../.gitbook/assets/image (29).png" alt="" data-size="original"></td></tr><tr><td>headings</td><td># Heading 1\n<br>## Heading 2\n<br>### Heading 3\n</td><td><img src="../.gitbook/assets/image (31).png" alt="" data-size="original"></td></tr></tbody></table>

{% hint style="info" %}
To enter the backtick required for monospace text, you can use the following keyboard shortcuts:

* `ALT+096` using the numeric keypad on Windows
* Option + `\` on Mac
* `ALTgr+'` on Linux
  {% endhint %}

{% hint style="info" %}
Remember to add `\n` at the end of each item in a bulleted list so that the following `*` character is interpreted correctly. You should also add it at the end of each heading.
{% endhint %}

## Line breaks

The IO app's Markdown supports two types of line break:

1. **a single \n preceded by two spaces** ("  `\n`") inserts a simple line break
2. **a double** "`\n\n`" starts a new paragraph, adding spacing from the previous one

{% hint style="info" %}
When writing Markdown text, special characters such as the apostrophe (`'`), quotation mark (`"`), or backslash (`\`) may cause interpretation issues in Markdown tools or systems that process Markdown. Understanding how to handle these characters is essential to preserve the clarity and accuracy of the document. Some guidelines are provided below:

* **Apostrophes and quotation marks (`' "` )**: These characters may be interpreted as string delimiters in many programming languages. When including text that uses these characters within code, you may need to double them or use escape characters to avoid conflicts. For example, to include an apostrophe in a string delimited by apostrophes, you may need to write `''` or `\'`.
* **Backslash (`\`)**: The backslash is commonly used as an escape character in Markdown and in many programming languages. To include a literal backslash in a Markdown document, you may need to double it, for example `\\`. 

**Also, avoid using escape sequences or sub-alphanumeric hexadecimal characters to format text.**

These precautions help ensure that Markdown text is interpreted and displayed as intended across different tools and platforms, preventing misunderstandings or formatting errors.
{% endhint %}

## Links

The IO app's Markdown supports standard link notation: `[text](link)`. For example, the Markdown "`Click [here](https://io.italia.it) to visit the IO website`" produces the following result: <img src="../.gitbook/assets/image (32).png" alt="" data-size="original">

{% hint style="info" %}
For security reasons, links are automatically removed or made non-clickable in email forwards of messages sent through the IO app. 
{% endhint %}

## Call-to-action buttons (CTAs)

The IO app optionally supports up to two buttons at the bottom of a message, each associated with a custom link.

To display buttons, or CTAs, within a message, you must include **front matter** using the following structure:

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

# The message content starts here
```

Front matter is a structured metadata section **placed at the beginning of the content**. Its position is essential because it must precede the main body and be **enclosed by the `---` separators**.

{% hint style="warning" %}
Make sure you preserve the **indentation** of the front-matter components as shown in the example. When composing the Markdown string, remember to include the required spaces. One space is sufficient, but for readability we recommend using two or four.

Example: `"---\nit:\n`    `cta_1:\n`        `text: \"Scrivi\"\n        action: \"iohandledlink://mailto:nome.cognome[...]"`
{% endhint %}

The system supports a maximum of two languages for translations: **it** and **en**. For each language, you can include up to two CTAs, identified respectively as **cta_1**, which is mandatory, and **cta_2**, which is optional.

{% hint style="info" %}
If the user has selected an unsupported language, such as German, the system uses the app's default language, which is **it**. However, if the default language is not defined in the front matter, the CTAs will not be recognized or displayed.
{% endhint %}

Each CTA has two properties:

1. **text**, representing the text displayed in the CTA
2. **action**, representing the action triggered when the user taps the CTA

### Available actions

The `action` property supports protocols for creating internal routes within the IO app and interacting with certain features of the device's operating system.

#### CTA with a link

To create a CTA that links to a website outside IO, as with a standard link, use the `iohandledlink://` protocol followed by the complete URL of the destination website, for example `iohandledlink://https://io.italia.it`. 

{% hint style="warning" %}
You must include the `https://` protocol between `iohandledlink://` and the website address.
{% endhint %}

#### Special actions

To enrich your messages while making them easier for recipients to use, IO supports CTAs that can:

1. start the **creation of an SMS** to a telephone number. In this case, use the syntax `iohandledlink://sms:+393211234567`, where "+393211234567" is the recipient's telephone number
2. start the **creation of an email** to an email address. In this case, use the syntax `iohandledlink://mailto:nome.cognome@email.com`, where "[nome.cognome@email.com](mailto:nome.cognome@email.com)" is the destination email address
3. start a **call to a telephone number**. In this case, use the syntax `iohandledlink://tel:+39061234567`, where "+39061234567" is the telephone number to call

{% hint style="info" %}
In all cases, the SMS, email, or call will be sent or started from the appropriate app installed on the user's device, subject to the user's confirmation.
{% endhint %}

{% hint style="warning" %}
Remember that these special actions are available only for CTAs. Links in the message body that trigger these actions are not currently supported.
{% endhint %}
