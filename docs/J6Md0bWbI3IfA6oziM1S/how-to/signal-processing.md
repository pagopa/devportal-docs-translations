# Signal processing

1. the consumer accesses the list of variation signals
2. If the signals include a _SeedUpdate_ type of signal (see the section on [types of signals](../the-technical-guide/signals.md)), the consumer must update the cryptographic information
3. The consumer searches in the received signals for the associated pseudonymized identifiers related to subjects for which there are current procedures. The search determines if the pseudonymized identifier is attributable to a subject with a current procedure by comparing
   1. the pseudonymized identifier contained in the message
   2. the pseudonymized identifier precalculated or calculated at runtime of each subject for which there is a current procedure
4. the consumer finds a pseudonymized identifier associated with one of the precalculated pseudonymized identifiers and identifies the identifier in clear text of the data subject to variation
5. after examining all the signals, the consumer has the list of identifiers in clear text of data subject to change, necessary for invoking the e-service of interest

```mermaid
---
title: elaborazione dei segnali
config:
  theme: base
  themeVariables:
    primaryColor: "#FFBF00"
---

sequenceDiagram
autonumber
participant D as e-service
    participant A as Consumatore segnali
    participant B as Consumatore segnali<br>lista soggetti con procedimento in essere
    participant C as Consumatore segnali<br>lista soggetti con variazioni
    
    rect rgb(191, 223, 255)
    note over A,C: Si assume che il consumatore abbia ottenuto una lista di segnali
    alt la lista dei segnali non è vuota
        loop per ogni segnale
            opt signalType = SeedUpdate
                note over D: aggiornamento <br>materiale crittografico
                A->>D: richiesta<br>funzione crittografica (hashing e seme)
                D->>A: OK - funzione crittografica e seme
                A->>A: aggiornamento <br>funzione crittografica e seme
                opt
                A->>A: calcolo e persistenza<br> degli identificativi dei soggetti
                end
            end

            A->>B: confronto identificativo pseudonimizzato del segnale
            alt è riconducibile a un soggetto con procedimento
                B->>A: dati del soggetto in chiaro
                A-->>A: lo stato del soggetto è variato
                A->>C: aggiunge identificativo per ottenere dati aggiornati
            else non è riconducibile
                A-->>A: soggetto non trovato
            end
        end
    end
    
    end


```

```mermaid
---
title: elaborazione dei segnali
config:
  theme: base
  themeVariables:
    primaryColor: "#FFBF00"
---

sequenceDiagram
autonumber
participant D as e-service
    participant A as Consumatore segnali
    participant B as Consumatore segnali<br>lista soggetti con procedimento in essere
    participant C as Consumatore segnali<br>lista soggetti con variazioni
    
    rect rgb(191, 223, 255)
    note over A,C: Si assume che il consumatore abbia ottenuto una lista di segnali
    alt la lista dei segnali non è vuota
        loop per ogni segnale
            opt signalType = SeedUpdate
                note over D: aggiornamento <br>materiale crittografico
                A->>D: richiesta<br>funzione crittografica (hashing e seme)
                D->>A: OK - funzione crittografica e seme
                A->>A: aggiornamento <br>funzione crittografica e seme
                opt
                A->>A: calcolo e persistenza<br> degli identificativi dei soggetti
                end
            end

            A->>B: confronto identificativo pseudonimizzato del segnale
            alt è riconducibile a un soggetto con procedimento
                B->>A: dati del soggetto in chiaro
                A-->>A: lo stato del soggetto è variato
                A->>C: aggiunge identificativo per ottenere dati aggiornati
            else non è riconducibile
                A-->>A: soggetto non trovato
            end
        end
    end
    
    end


```
