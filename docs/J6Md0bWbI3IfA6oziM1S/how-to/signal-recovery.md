# Signal recovery

1. for each scheduled time interval (see section on [periodic recovery of signals](../the-technical-guide/signals.md#retention-period-policy-e-recupero-periodico-dei-segnali)) the consumer requests the variation signals for the e-service of interest using the Signal Hub signal recovery service
2. the consumer requests and obtains the api voucher from PDND
3. the consumer sends the signal recovery request for the e-service of interest
4. the signal recovery service (_Signal Hub PULL_) authorizes the request and sends the list of signals
5. the consumer has the list of variation signals

```mermaid
---
title: lettura segnale
config:
  theme: base
  themeVariables:
    primaryColor: "#FFBF00"
---

sequenceDiagram
autonumber
    participant ER as Consumatore segnali
    participant PDND as PDND Interop
    participant PULL as Signal Hub PULL
    Note over ER, PULL: Si assume che l'aderente sia un consumatore di segnali
    rect rgb(191, 223, 255)
    loop per ogni intervallo di tempo programmato
    ER->>PDND: richiesta del voucher api m2m
    activate PDND
    PDND-)ER: voucher
    Note left of PDND: audience: interop.pagopa.it/m2m<br/>client_id: 543b...<br/>organization_id: 47w9...
    deactivate PDND    
        rect rgb(171, 205, 239)
            loop per la durata del voucher
            ER->>PULL: recupero segnale<br/> (per e-service di interesse)
            activate PULL
            Note over PULL,PULL: autorizzazione
            PULL->>PULL: verifica fruizione e finalità e-service 
            PULL->>ER: OK - lista segnali
            deactivate PULL
            ER->>ER: lista segnali: <br>stati/fatti soggetti a variazione
            end  
        end
        end
    end

```
