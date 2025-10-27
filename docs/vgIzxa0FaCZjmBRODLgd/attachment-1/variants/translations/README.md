---

description: \>-  
The guidelines for the payment notices also include versions to support languages different than Italian, depending on the various contexts of use.
---

# Translations

## Use cases

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>Second language</strong></td><td>Use this model makes to insert a secondary language, such as English, without requiring additional pages.</td><td></td><td><a href="notice-with-second-language.md">notice-with-second-language.md</a></td><td><a href="../../../.gitbook/assets/Due lingue.png">Due lingue.png</a></td></tr><tr><td><strong>Perfect bilingualism</strong></td><td>This model is used to respect perfect administrative bilingualism, such as for example between Italian and German in the autonomous province of Bolzano-Alto Adige.</td><td></td><td><a href="bilingual-notice.md">bilingual-notice.md</a></td><td><a href="../../../.gitbook/assets/Bilinguismo.png">Bilinguismo.png</a></td></tr><tr><td><strong>Notice in another language</strong></td><td>It is also possible to produce the payment notice in only one language&mdash;other than Italian&mdash;if the institution knows the nationality of the notice recipient.</td><td></td><td><a href="notice-in-another-language.md">notice-in-another-language.md</a></td><td><a href="../../../.gitbook/assets/Altra lingua.png">Altra lingua.png</a></td></tr></tbody></table>

## Strings of fixed texts

### Italian

{% file src="../../../.gitbook/assets/pagoPA-avvisi-320-stringhe-it.json" %} Strings in Italian, in JSON format {% endfile %}

<details>

<summary>Show strings</summary>

{% code lineNumbers="true" %}
```json
{
  "avviso": {
    "datiPagamento": {
      "avviso": {
        "breve": "Cod. Avviso",
        "esteso": "Codice Avviso"
      },
      "cbill": {
        "breve": "Cod. CBILL",
        "esteso": "Codice CBILL"
      },
      "codiceFiscaleEnte": {
        "breve": "Cod. Fiscale Ente",
        "esteso": "Codice Fiscale Ente"
      },
      "destinatario": "Destinatario",
      "enteCreditore": "Ente Creditore",
      "istruzioni": {
        "qrCode": {
          "rataUnica": "Inquadra il codice QR con la tua app di pagamento o usa i dati accanto.",
          "rate": "Inquadra il codice QR con la tua app di pagamento o usa i dati sopra."
        }
      },
      "oggettoDelPagamento": "Oggetto del pagamento",
      "rataUnica": "Rata unica",
      "scadenza": "entro il",
      "titolo": "Dati per il pagamento",
      "numRata": "Rata {{Numero}}"
    },
    "dovePagare": {
      "cta": "vai su pagopa.gov.it",
      "estero": {
        "online": {
          "descrizione": {
            "noEnte": "Vai su pagopa.gov.it e scegli il canale che preferisci.",
            "sitoEnte": "Vai su pagopa.gov.it e scegli il canale che preferisci, o visita il sito di {{EnteNome}}."
          },
          "titolo": "Paga online"
        },
        "territorio": {
          "descrizione": "presso Banche e Sportelli ATM, negli Uffici Postali e Punti Postali, nei Bar, Edicole, Ricevitorie, Supermercati, Tabaccherie e altri Esercenti Convenzionati in Italia.",
          "titolo": "Paga sul territorio"
        }
      },
      "gps": {
        "online": {
          "descrizione": {
            "noEnte": "con l’app IO, dal tuo Home Banking, con la tua app di pagamento o con gli altri canali abilitati.",
            "sitoEnte": "con l’app IO, sul sito di {{EnteNome}}, dal tuo Home Banking, con la tua app di pagamento o con gli altri canali abilitati."
          },
          "titolo": "Paga online"
        }
      },
      "italia": {
        "territorio": {
          "descrizione": "presso Banche e Sportelli ATM, negli Uffici Postali e Punti Postali, nei Bar, Edicole, Ricevitorie, Supermercati, Tabaccherie e altri Esercenti Convenzionati.",
          "titolo": "Paga sul territorio"
        },
        "online": {
          "descrizione": {
            "noEnte": "oppure dal tuo Home Banking, con la tua app di pagamento o con gli altri canali abilitati.",
            "sitoEnte": "oppure sul sito di {{EnteNome}}, dal tuo Home Banking, con la tua app di pagamento o con gli altri canali abilitati."
          },
          "titolo": "Paga con l’app IO"
        }
      },
      "titolo": "Dove pagare?"
    },
    "importoScadenza": {
      "disclaimer": {
        "giacenza": {
          "descrizione": "La notifica corrisponde al giorno del ritiro, se questo avviene entro 10 giorni dalla data di deposito (la data più vecchia sull’avviso di giacenza). Se non ritiri il verbale entro i 10 giorni, calcola le scadenze iniziando a contare dall’undicesimo giorno.",
          "titolo": "Cosa succede in caso di giacenza?"
        },
        "legal": "In fase di pagamento, se previsto dall’ente, l’importo potrebbe essere aggiornato automaticamente e subire variazioni in diminuzione (per sgravi, note di credito) o in aumento (per sanzioni, interessi, ecc.).",
        "rate": {
          "molteRate": "Importi e scadenze sono riportati nel dettaglio di ogni singola rata.",
          "rate": "Puoi pagare per intero o in {{Numero}} rate",
          "soloRate": "Puoi pagare in {{Numero}} rate"
        },
        "scadenze": {
          "descrizione": "Il giorno della notifica non si conta. Se la scadenza è di domenica (o festivo), puoi pagare anche il primo giorno feriale successivo.",
          "titolo": "Come si calcolano le scadenze?"
        },
        "scelta": "Scegli l’importo corretto per i termini previsti, altrimenti riceverai altre richieste di pagamento per le somme residue ed eventuali somme aggiuntive."
      },
      "euro": "Euro",
      "importo": {
        "importo": "Importo",
        "ridotto": "Importo ridotto",
        "scontato": "Importo scontato del 30%"
      },
      "scadenza": {
        "cinqueGiorni": "entro 5 giorni dalla notifica del verbale",
        "scadenza": "entro il",
        "sessantaGiorni": "dal 6º al 60º giorno dalla notifica del verbale"
      },
      "titolo": "Quanto e quando pagare?"
    },
    "infoDestinatario": {
      "titolo": "Destinatario"
    },
    "infoEnteCreditore": {
      "titolo": "Ente Creditore"
    },
    "intestazione": {
      "titolo": "Avviso di pagamento"
    }
  }
}
```
{% endcode %}

</details>

***

### French

{% file src="../../../.gitbook/assets/pagoPA-avvisi-320-stringhe-fr.json" %} Strings in French in JSON format {% endfile %}

<details>

<summary>Show strings</summary>

{% code lineNumbers="true" %}
```json
{
  "avviso": {
    "datiPagamento": {
      "avviso": {
        "breve": "Code Avis",
        "esteso": "Code de l’avis"
      },
      "cbill": {
        "breve": "Code CBILL",
        "esteso": "Code CBILL"
      },
      "codiceFiscaleEnte": {
        "breve": "Code Organisme fiscal",
        "esteso": "Code fiscal de l’organisme"
      },
      "destinatario": "Destinataire",
      "enteCreditore": "Organisme créancier",
      "istruzioni": {
        "qrCode": {
          "rataUnica": "Encadrez le code QR avec votre application de paiement ou utilisez les données ci-contre.",
          "rate": "Encadrez le code QR avec votre application de paiement ou utilisez les données ci-dessus."
        }
      },
      "oggettoDelPagamento": "Objet du paiement",
      "rataUnica": "Versement unique",
      "scadenza": "avant le",
      "titolo": "Données pour le paiement",
      "numRata": "Versement {{Numero}}"
    },
    "dovePagare": {
      "cta": "accédez au site pagopa.gov.it",
      "estero": {
        "online": {
          "descrizione": {
            "noEnte": "Accédez au site pagopa.gov.it et choisissez le canal que vous préférez.",
            "sitoEnte": "Accédez au site pagopa.gov.it et choisissez le canal que vous préférez ou visitez le site de {{EnteNome}}."
          },
          "titolo": "Payez en ligne"
        },
        "territorio": {
          "descrizione": "dans les banques, les guichets automatiques, les bureaux de poste, les points postaux, les bars, les kiosques à journaux, les détaillants, les supermarchés, les bureaux de tabac et les autres opérateurs agréés en Italie.",
          "titolo": "Payez sur le territoire"
        }
      },
      "gps": {
        "online": {
          "descrizione": {
            "noEnte": "avec l’application IO, depuis votre «Banque à domicile», avec votre application de paiement ou avec les autres canaux activés.",
            "sitoEnte": "avec l’application IO, sur le site de {{EnteNome}}, depuis votre « Banque à domicile », avec votre application de paiement ou avec les autres canaux activés."
          },
          "titolo": "Payez en ligne"
        }
      },
      "italia": {
        "territorio": {
          "descrizione": "dans les banques, les guichets automatiques, les bureaux de poste, les points postaux, les bars, les kiosques à journaux, les détaillants, les supermarchés, les bureaux de tabac et les autres opérateurs agréés.",
          "titolo": "Payez sur le territoire"
        },
        "online": {
          "descrizione": {
            "noEnte": "ou depuis votre « Banque à domicile », avec votre application de paiement ou avec les autres canaux activés.",
            "sitoEnte": "sur le site de {{EnteNome}}, depuis votre «Banque à domicile», avec votre application de paiement ou avec les autres canaux activés."
          },
          "titolo": "Paiement avec l’application IO"
        }
      },
      "titolo": "Où payer?"
    },
    "importoScadenza": {
      "disclaimer": {
        "giacenza": {
          "descrizione": "La notification correspond au jour du retrait, si celui-ci a lieu dans les 10 jours à compter de la date de dépôt (la date la plus ancienne figurant sur l’avis de passage). Si vous ne retirez pas le procès-verbal dans les 10 jours, calculez les échéances en commençant à compter à partir du onzième jour.",
          "titolo": "Que se passe-t-il en cas de conservation au bureau de poste ?"
        },
        "legal": "En phase de paiement, si l’organisme le prévoit, le montant pourrait être mis à jour automatiquement et subir des variations en diminution (pour les réductions, les notes de crédit) ou en augmentation (pour les sanctions, les intérêts, etc.).",
        "rate": {
          "molteRate": "Les montants et les échéances sont indiqués en détail pour chaque versement.",
          "rate": "Vous pouvez payer le montant total ou en {{Numero}} échéances",
          "soloRate": "Vous pouvez payer en {{Numero}} échéances"
        },
        "scadenze": {
          "descrizione": "Le jour de la notification n’est pas compté. Si l’échéance tombe un dimanche (ou à un jour férié), vous pouvez également payer le premier jour ouvrable suivant.",
          "titolo": "Comment sont calculées les échéances?"
        },
        "scelta": "Choisissez le montant correct pour les délais prévus, sinon vous recevrez d’autres demandes de paiement pour les sommes restantes et les frais supplémentaires éventuels."
      },
      "euro": "Euros",
      "importo": {
        "importo": "Montant",
        "ridotto": "Montant réduit",
        "scontato": "Montant réduit de 30%"
      },
      "scadenza": {
        "cinqueGiorni": "dans les 5 jours suivant la notification du procès-verbal",
        "scadenza": "avant le",
        "sessantaGiorni": "entre le 6e et le 60e jour à compter de la notification du procès-verbal"
      },
      "titolo": "Combien et quand payer?"
    },
    "infoDestinatario": {
      "titolo": "Destinataire"
    },
    "infoEnteCreditore": {
      "titolo": "Organisme créancier"
    },
    "intestazione": {
      "titolo": "Avis de paiement"
    }
  },
  "__variant-name": "Francese",
  "__variant-description": ""
}
```
{% endcode %}

</details>

***

### English

{% file src="../../../.gitbook/assets/pagoPA-avvisi-320-stringhe-en.json" %} Strings in English in JSON format {% endfile %}

<details>

<summary>Show strings</summary>

{% code lineNumbers="true" %}
```json
{
  "avviso": {
    "datiPagamento": {
      "avviso": {
        "breve": "Notice code",
        "esteso": "Notice code"
      },
      "cbill": {
        "breve": "CBILL code",
        "esteso": "CBILL code"
      },
      "codiceFiscaleEnte": {
        "breve": "Payee tax code",
        "esteso": "Payee tax code"
      },
      "destinatario": "Recipient",
      "enteCreditore": "Payee",
      "istruzioni": {
        "qrCode": {
          "rataUnica": "Scan the QR Code with your payment app or use the data printed here.",
          "rate": "Scan the QR Code with your payment app or use the data printed above."
        }
      },
      "oggettoDelPagamento": "Payment description",
      "rataUnica": "Full amount",
      "scadenza": "by",
      "titolo": "Payment details",
      "numRata": "Instalment #[n]"
    },
    "dovePagare": {
      "cta": "Go to pagopa.gov.it",
      "estero": {
        "online": {
          "descrizione": {
            "noEnte": "Go to pagopa.gov.it and choose your preferred channel.",
            "sitoEnte": "Go to pagopa.gov.it and choose your preferred channel, or visit [Ente.Nome] website."
          },
          "titolo": "Pay online"
        },
        "territorio": {
          "descrizione": "at banks and ATMs, in post offices, cafés, news stands, betting and tobacco Shops, supermarkets and other affiliated merchants in Italy.",
          "titolo": "Pay locally"
        }
      },
      "gps": {
        "online": {
          "descrizione": {
            "noEnte": "with the IO app, from your Home Banking, with your payment app or with other enabled channels.",
            "sitoEnte": "with the IO app, on the {{EnteNome}} website, from your Home Banking, with your payment app or with other enabled channels."
          },
          "titolo": "Pay online"
        }
      },
      "italia": {
        "territorio": {
          "descrizione": "at banks and ATMs, in post offices, cafés, news stands, betting and tobacco Shops, supermarkets and other affiliated merchants.",
          "titolo": "Pay locally"
        },
        "online": {
          "descrizione": {
            "noEnte": "or with your Home Banking, payment app or the other affiliated channels.",
            "sitoEnte": "or with [Ente.Nome] website, your Home Banking, payment app or the other affiliated channels."
          },
          "titolo": "Pay with the IO app"
        }
      },
      "titolo": "Where to pay?"
    },
    "importoScadenza": {
      "disclaimer": {
        "giacenza": {
          "descrizione": "The notification is the day of the collection, if this occurs within 10 days from the date printed on the non-delivery notice. If you don’t collect the notice within 10 days, count the deadlines starting from the 11th day.",
          "titolo": "What happens in case of a failed delivery attempt?"
        },
        "legal": "During the payment, if allowed by the payee, the amount may be updated automatically and be subject to decreases (in case of discounts or credit notes) or increases (in case of penalties, interest, etc.).",
        "rate": {
          "molteRate": "Amounts and due dates are shown in each instalment detail.",
          "rate": "You can pay in full or in [avviso.rate.totali] instalments.",
          "soloRate": "You can pay in [avviso.rate.totali] instalments."
        },
        "scadenze": {
          "descrizione": "The day of notification is not counted. If the due date is a Sunday (or a public holiday), you can also pay on the next working day.",
          "titolo": "How are deadlines calculated?"
        },
        "scelta": "Choose the correct amount depending on deadlines, otherwise you will receive other payment requests for the remaining and/or additional amounts."
      },
      "euro": "Euro",
      "importo": {
        "importo": "Amount",
        "ridotto": "Reduced amount",
        "scontato": "30% off"
      },
      "scadenza": {
        "cinqueGiorni": "Within 5 days from the notification",
        "scadenza": "by",
        "sessantaGiorni": "From the 6th to the 60th day from the notification"
      },
      "titolo": "How much and when to pay?"
    },
    "infoDestinatario": {
      "titolo": "Recipient"
    },
    "infoEnteCreditore": {
      "titolo": "Payee"
    },
    "intestazione": {
      "titolo": "Payment notice"
    }
  },
  "__variant-name": "Inglese",
  "__variant-description": ""
}
```
{% endcode %}

</details>

***

### Slovenian

{% file src="../../../.gitbook/assets/pagoPA-avvisi-320-stringhe-sl.json" %} Strings in Slovenian in JSON format {% endfile %}

<details>

<summary>Show strings</summary>

{% code lineNumbers="true" %}
```json
{
  "avviso": {
    "datiPagamento": {
      "avviso": {
        "breve": "Št. obvestila",
        "esteso": "Št. obvestila"
      },
      "cbill": {
        "breve": "Št. CBILL",
        "esteso": "Koda CBILL"
      },
      "codiceFiscaleEnte": {
        "breve": "Davčna številka plačnika",
        "esteso": "Davčna številka plačnika"
      },
      "destinatario": "Prejemnik",
      "enteCreditore": "Plačnik",
      "istruzioni": {
        "qrCode": {
          "rataUnica": "Skenirajte QR-kodo z aplikacijo za plačila ali uporabite podatke, navedene ob kodi.",
          "rate": "Skenirajte QR-kodo z aplikacijo za plačila ali uporabite podatke, navedene nad njo."
        }
      },
      "oggettoDelPagamento": "Predmet plačila",
      "rataUnica": "Enkratni obrok",
      "scadenza": "do",
      "titolo": "Podatki za plačilo",
      "numRata": "Obrok št. {{Numero}}"
    },
    "dovePagare": {
      "cta": "pojdite na pagopa.gov.it",
      "estero": {
        "online": {
          "descrizione": {
            "noEnte": "Pojdite na pagopa.gov.it in izberite želeni kanal.",
            "sitoEnte": "Pojdite na pagopa.gov.it in izberite želeni kanal ali obiščite spletno mesto {{EnteNome}}."
          },
          "titolo": "Plačajte prek spleta"
        },
        "territorio": {
          "descrizione": "na bankah in okencih bankomatov, poštnih uradih in poštnih točkah, v barih, kioskih, sprejemnih pisarnah, supermarketih, trafikah in pri drugih pooblaščenih operaterjih v Italiji.",
          "titolo": "Plačajte lokalno"
        }
      },
      "gps": {
        "online": {
          "descrizione": {
            "noEnte": "z aplikacijo IO, prek svoje spletne banke, z aplikacijo za plačevanje ali prek drugih razpoložljivih kanalov.",
            "sitoEnte": "z aplikacijo IO, na spletnem mestu {{EnteNome}}, prek svoje spletne banke, z aplikacijo za plačevanje ali prek drugih razpoložljivih kanalov."
          },
          "titolo": "Plačajte prek spleta"
        }
      },
      "italia": {
        "territorio": {
          "descrizione": "na bankah in okencih bankomatov, poštnih uradih in poštnih točkah, v barih, kioskih, sprejemnih pisarnah, supermarketih, trafikah in pri drugih pooblaščenih operaterjih.",
          "titolo": "Plačajte lokalno"
        },
        "online": {
          "descrizione": {
            "noEnte": "ali prek svoje spletne banke, z aplikacijo za plačevanje ali prek drugih razpoložljivih kanalov.",
            "sitoEnte": "ali na spletnem mestu {{EnteNome}}, prek svoje spletne banke, z aplikacijo za plačevanje ali prek drugih razpoložljivih kanalov."
          },
          "titolo": "Plačajte z aplikacijo IO"
        }
      },
      "titolo": "Kje plačati?"
    },
    "importoScadenza": {
      "disclaimer": {
        "giacenza": {
          "descrizione": "Obvestilo ustreza dnevu prevzema, če se to zgodi v 10 dneh od datuma prispetja (najstarejši datum na obvestilu o prispelem pismu). Če zapisnika ne prevzamete v 10 dneh, izračunajte roke zapadlosti, ki začnejo teči z enajstim dnem.",
          "titolo": "Kaj se zgodi, če pismo ni izročeno?"
        },
        "legal": "Če upravičenec to predvidi, se lahko med fazo plačila znesek samodejno posodobi in tudi zmanjša (zaradi popustov, dobropisov) ali poveča (zaradi kazni, obresti itd.).",
        "rate": {
          "molteRate": "Zneski in roki zapadlosti so podrobno prikazani za vsak posamezen obrok.",
          "rate": "Plačate lahko v celoti ali v {{Numero}} obrokih",
          "soloRate": "Plačate lahko v {{Numero}} obrokih"
        },
        "scadenze": {
          "descrizione": "Dan izdaje obvestila se ne všteva. Če je rok zapadlosti nedelja (ali praznik), lahko plačilo izvedete tudi naslednji prvi delovni dan.",
          "titolo": "Kako se izračunajo roki zapadlosti?"
        },
        "scelta": "Izberite pravilen znesek za predvidene roke, sicer boste prejeli druge zahteve za plačilo za preostale zneske in morebitne dodatne zneske."
      },
      "euro": "EUR",
      "importo": {
        "importo": "Znesek",
        "ridotto": "Zmanjšan znesek",
        "scontato": "Znesek s 30-% popustom"
      },
      "scadenza": {
        "cinqueGiorni": "v 5 dneh od vročitve zapisnika",
        "scadenza": "do",
        "sessantaGiorni": "od 6. do 60. dne od vročitve zapisnika"
      },
      "titolo": "Koliko in kdaj plačati?"
    },
    "infoDestinatario": {
      "titolo": "Prejemnik"
    },
    "infoEnteCreditore": {
      "titolo": "Plačnik"
    },
    "intestazione": {
      "titolo": "Obvestilo o plačilu"
    }
  },
  "__variant-name": "Sloveno",
  "__variant-description": ""
}
```
{% endcode %}

</details>

***

### German

{% file src="../../../.gitbook/assets/pagoPA-avvisi-320-stringhe-de.json" %} Strings in German in JSON format {% endfile %}

<details>

<summary>Show strings</summary>

{% code lineNumbers="true" %}
```json
{
  "avviso": {
    "datiPagamento": {
      "avviso": {
        "breve": "Zahlungsmitteilungskodex"
      },
      "cbill": {
        "breve": "CBILL-Kodex"
      },
      "codiceFiscaleEnte": {
        "breve": "St.Nr. der Körperschaft"
      },
      "destinatario": "Empfänger",
      "enteCreditore": "Körperschaft",
      "istruzioni": {
        "qrCode": {
          "rataUnica": "Den QR-Code mit der Zahlungs-App scannen oder folgende Daten verwenden.",
          "rate": "Den QR-Code mit der Zahlungs-App scannen oder oben Daten verwenden."
        }
      },
      "oggettoDelPagamento": "Zahlungsgrund",
      "rataUnica": "Einzige Rate",
      "scadenza": "Fällig am",
      "titolo": "Zahlungsinformationen",
      "numRata": "Rate {{Numero}}"
    },
    "dovePagare": {
      "cta": "Liste der Zahlungsdienstleister: pagopa.gov.it",
      "gps": {
        "online": {
          "descrizione": {
            "noEnte": "mit der App IO, mittels Home Banking, einer Zahlungsapp oder anderer zugelassener Zahlungsdienstleister.",
            "sitoEnte": "mit der App IO, auf {{EnteNome}}, mittels Home Banking, einer Zahlungsapp oder anderer zugelassener Zahlungsdienstleister."
          },
          "titolo": "Online"
        }
      },
      "italia": {
        "territorio": {
          "descrizione": "bei Banken und ATM-Schaltern, in Postämtern und Poststellen, Tabaktrafiken und anderen angebundenen Dienstleistern.",
          "titolo": "In ihrer umgebung"
        }
      },
      "titolo": "Wo bezahlen?"
    },
    "importoScadenza": {
      "disclaimer": {
        "giacenza": {
          "descrizione": "Die Zustellung entspricht dem Tag der Abholung, wenn diese innerhalb von 10 Tagen nach dem Lagerdatum erfolgt. Wird der Bericht nicht innerhalb von 10 Tagen abgeholt, sind die Fristen ab dem elften Tag zu berechnen.",
          "titolo": "Was passiert bei Lagerung?"
        },
        "legal": "Der angeführte Betrag könnte sich auf Grund von allfälligen auch teilweisen Annullierungen oder Gutschriften,Verzugsgebühren, Strafen, Zinsen oder anderen Kosten ändern.",
        "rate": {
          "molteRate": "Die Beträge und Fälligkeiten sind in den Details der einzelnen Rate angegeben.",
          "rate": "Es ist möglich, den Betrag vollständig oder in {{Numero}} Raten zu zahlen",
          "soloRate": "Es ist möglich, den Betrag in {{Numero}} Raten zu zahlen"
        },
        "scadenze": {
          "descrizione": "Der Tag der Zustellung wird nicht mitgerechnet. Fällt die Frist auf einen Sonntag (oder Feiertag), kann am ersten folgenden Werktag bezahlt werden.",
          "titolo": "Wie werden die Fristen berechnet?"
        },
        "scelta": "Den zur eigenen Frist passenden Bereich auswählen."
      },
      "euro": "Euro",
      "importo": {
        "importo": "Betrag",
        "ridotto": "Reduzierte Zahlung",
        "scontato": "um 30% reduzierter Betrag"
      },
      "scadenza": {
        "cinqueGiorni": "innerhalb 5 Tagen ab Zustellungsdatum",
        "scadenza": "Fälligkeitsdatum",
        "sessantaGiorni": "vom 6ten bis 60ten Tag ab Zustellungsdatum"
      },
      "titolo": "Wieviel und wann bezahlen?"
    },
    "infoDestinatario": {
      "titolo": "Empfänger"
    },
    "infoEnteCreditore": {
      "titolo": "Körperschaft"
    },
    "intestazione": {
      "titolo": "Zahlungsmitteilung"
    }
  },
  "__variant-name": "Tedesco",
  "__variant-description": ""
}
```
{% endcode %}}

</details>

