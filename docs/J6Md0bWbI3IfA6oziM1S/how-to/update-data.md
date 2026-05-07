# Data update

1. The consumer has the list of identifiers in clear text of data subject to change
2. The consumer invokes the e-service of interest requesting the updated data by means of the identifier in clear text
3. The consumer has the updated data and can activate additional internal processes triggered by updating the data

```mermaid
---
title: aggiornamento del dato
config:
  theme: base
  themeVariables:
    primaryColor: "#FFBF00"
---

sequenceDiagram
autonumber
    participant CS as Consumatore segnali
    participant ES as e-service di interesse
    participant PDND as PDND Interop

    Note over CS, ES: Si assume che il consumatore abbia ottenuto<br>una lista soggetti che hanno subito variazioni
    rect rgb(171, 205, 239)        
        opt la lista dei soggetti non è vuota
            CS->>PDND: richiesta del voucher e-service
            activate PDND
            PDND-)CS: voucher
            deactivate PDND
            loop per la durata del voucher
                loop per ogni soggetto
                    CS->>ES: richiesta all'e-service con identificativo in chiaro
                    ES-->>CS: restituzione delle informazioni richieste
                    CS->>CS: aggiornamento del dato 
                    CS->>CS: attivazione eventuali processi interni
                end
            end
        end
    end

```
