# #️⃣ Guida al Markdown

IO consente di arricchire i contenuti dei messaggi e delle schede servizio con testo formattato, link e altri elementi attivi al fine di offrire al Cittadino un'esperienza più completa e chiara.

A tal fine, app IO supporta una variante del popolare formato Markdown, per la quale troverai qui tutte le informazioni per il suo corretto utilizzo.

## Formattazione del testo

Con app IO puoi arricchire il testo delle comunicazioni evidenziando parti in grassetto e corsivo, creando liste puntate e separandolo con titoli.

<table><thead><tr><th width="182">Formattazione</th><th width="272">Sintassi</th><th>Risultato</th></tr></thead><tbody><tr><td>grassetto</td><td>Testo in **grassetto**<br>Testo in __grassetto__</td><td><img src="../.gitbook/assets/image (20).png" alt="" data-size="original"></td></tr><tr><td>corsivo</td><td><p>Testo in *corsivo*</p><p>Testo in _corsivo_</p></td><td><img src="../.gitbook/assets/image (21).png" alt="" data-size="original"></td></tr><tr><td>grassetto/corsivo</td><td>Testo in ***grassetto/corsivo***</td><td><img src="../.gitbook/assets/image (22).png" alt="" data-size="original"></td></tr><tr><td>spaziatura fissa<br>(nota il <em>backtick</em>!)</td><td><strong>`</strong>Testo a spaziatura fissa<strong>`</strong></td><td><img src="../.gitbook/assets/image (24).png" alt="" data-size="original"></td></tr><tr><td>liste puntate</td><td>* Primo elemento\n<br>* Secondo elemento\n<br>* Elemento indentato\n</td><td><img src="../.gitbook/assets/image (23).png" alt="" data-size="original"></td></tr><tr><td>titoli</td><td># Titolo 1\n<br>## Titolo 2\n<br>### Titolo 3\n</td><td><img src="../.gitbook/assets/image (25).png" alt="" data-size="original"></td></tr></tbody></table>

{% hint style="info" %}
Per ottenere l'apice inverso (_backtick_) necessario per il testo a spaziatura fissa puoi usare la combinazione di tasti:

- `ALT+096` (dal tastierino numerico) se usi Windows
- Option + `\` se usi Mac
- `ALTgr+'` se usi Linux
  {% endhint %}

{% hint style="info" %}
Ricorda di aggiungere `\n` alla fine di ogni elemento di un elenco puntato per consentire la corretta interpretazione del successivo carattere `*` , così come alla fine di ogni titolo
{% endhint %}

## Andare a capo

Il Markdown dell'app IO supporta le modalità standard per "andare a capo" (uno o più caratteri `\n`)

{% hint style="info" %}
Quando si compone testo in Markdown, l'uso di caratteri speciali come l'apice (`'`), il doppio apice (`"`), o il backslash (`\`), può introdurre problematiche legate all'interpretazione del testo da parte dei tool Markdown o dei sistemi che elaborano Markdown. La comprensione di come gestire questi caratteri è essenziale per mantenere la chiarezza e l'accuratezza del documento. Di seguito sono illustrate alcune linee guida:

- **Apice e Doppio Apice (`' "` )**: Questi caratteri possono essere interpretati come delimitatori per stringhe in molti linguaggi di programmazione. Quando si include testo che richiede l'uso di questi caratteri in un contesto di codice, può essere necessario raddoppiarli o usare caratteri di escape per evitare conflitti. Ad esempio, per includere un apice in una stringa delimitata da apici, si potrebbe dover scrivere `''` o `\'`.
- **Backslash (`\`)**: Il backslash è tipicamente utilizzato come carattere di escape in Markdown e in molti linguaggi di programmazione. Per includere un backslash letterale in un documento Markdown, spesso è necessario raddoppiarlo (es. `\\`).

**Inoltre, evita di utilizzare sequenze di escape o caratteri esadecimali sub-alfanumerici per formattare il testo.**

Queste precauzioni assicurano che il testo Markdown sia interpretato e visualizzato come desiderato attraverso vari strumenti e piattaforme, prevenendo malintesi o errori di formattazione.
{% endhint %}

## Link

Il Markdown dell'app IO supporta la notazione standard per i link: `[testo](link)`. Ad esempio, il Markdown "`Clicca [qui](https://io.italia.it) per andare sul sito di IO`" produrrà il seguente risultato:\ <img src="../.gitbook/assets/image (26).png" alt="" data-size="original">

{% hint style="info" %}
Per ragioni di sicurezza, i link sono automaticamente rimossi o resi non cliccabili negli inoltri via email dei messaggi inviati sull'app IO.
{% endhint %}

## Pulsanti azione (CTA)

L'app IO supporta l'aggiunta opzionale di fino a due pulsanti in calce al messaggio, associabili a link personalizzati.

Al fine di presentare i pulsanti (CTA) all’interno di un messaggio, devi incorporare un **front-matter** con la seguente struttura:

```markdown
---
it:
    cta_1: 
        text: "Scrivi"
        action: "iohandledlink://mailto:nome.cognome@email.com"
    cta_2: 
        text: "IO App"
        action: "iohandledlink://https://ioapp.it/"
en:
    cta_1: 
        text: "Write email"
        action: "iohandledlink://mailto:nome.cognome@email.com"
    cta_2: 
        text: "IO App site"
        action: "iohandledlink://https://ioapp.it/"
---

# Il contenuto del messaggio inizia qui
```

Il front-matter è una sezione strutturata di metadati **posizionata all’inizio del contenuto**; la sua collocazione è cruciale in quanto precede il corpo principale del contenuto ed è **delimitato dai separatori ---**.

{% hint style="warning" %}
Fai attenzione a rispettare **l'indentazione** delle componenti del front-matter come mostrato nell'esempio: nel comporre la stringa markdown, ricorda di inserire i necessari spazi (ne basta uno, ma per maggiore leggibilità consigliamo di inserirne due o quattro).

Es. `"---\nit:\n` `cta_1:\n` `text: \"Scrivi\"\n action: \"iohandledlink://mailto:nome.cognome[...]"`
{% endhint %}

Il sistema consente di definire al massimo due lingue utilizzate per le traduzioni, ovvero **it** ed **en**. Per ciascuna lingua, puoi includere un massimo di due CTA, identificate rispettivamente come **cta\_1** che è obbligatoria e **cta\_2** che è opzionale.

{% hint style="info" %}
Nel caso in cui l’utente abbia impostato una lingua non supportata, come ad esempio il tedesco, il sistema utilizzerà la lingua predefinita dell’app, ovvero **it**. Tuttavia, nel caso in cui la lingua predefinita non sia definita nel front-matter, le CTA non saranno riconosciute e visualizzate.
{% endhint %}

Per ogni CTA sono definite due proprietà:

1. **text** che rappresenta il testo che sarà visualizzato nella CTA
2. **action** che rappresenta l’azione che sarà scatenata al tap della CTA

### Action possibili

Per la action sono definiti protocolli per la creazione di rotte interne all'app IO e l'interazione con alcune funzionalità del sistema operativo del dispositivo in uso.

#### CTA con Link

Per ottenere una CTA con collegamento a un sito esterno a IO, come nel caso di un normale link, devi usare il protocollo `iohandledlink://` seguito dall'indirizzo internet completo del sito di destinazione, ad esempio `iohandledlink://https://example.it`

{% hint style="warning" %}
Dovrai obbligatoriamente aggiungere il protocollo `https://` tra `iohandledlink://` e l'indirizzo del sito
{% endhint %}

#### Azioni speciali

Al fine di arricchire i tuoi messaggi facilitandone al contempo la fruizione da parte del destinatario, IO supporta la creazione di CTA in grado di:

1. avviare la **creazione di un SMS** verso un numero telefonico: in questo caso, dovrai usare la sintassi `iohandledlink://sms:+393211234567` dove "+393211234567" è il numero del destinatario
2. avviare la **creazione di un email** verso un indirizzo di posta elettronica: in questo caso, dovrai usare la sintassi `iohandledlink://mailto:nome.cognome@email.com` dove "nome.cognome@email.com" è l'indirizzo email di destinazione
3. avviare la **chiamata verso un numero telefonico**: in questo caso, dovrai usare la sintassi `iohandledlink://tel:+39061234567` dove "+39061234567" è il numero telefonico da chiamare

{% hint style="info" %}
In tutti i casi, l'invio effettivo del SMS, dell'email o della chiamata avverrà all'interno dell'app predisposta allo scopo nel dispositivo dell'utente, previa sua conferma
{% endhint %}

{% hint style="warning" %}
Ricorda che queste azioni speciali sono disponibili unicamente per le CTA: non sono al momento supportati link nel testo che le attivino
{% endhint %}
