# Exchange or update of cryptographic information

The management of cryptographic information is a necessary condition for signal deposit and recovery. Below

1. the provider makes the cryptographic information available in the API of the published service: hash function and seed
2. Before accessing the signal recovery service or when a _SeedUpdate_ type of signal is received (see the section on [types of signals](../the-technical-guide/signals.md)), the user requests the cryptographic information from the e-service of interest
3. The user possesses the updated cryptographic information and is able to calculate the pseudonymized identifiers for all subjects with a current administrative process that are contained in their database
4. The user can make the pseudonymized identifiers associated with subjects persistent based on how to decide to implement the search for the pseudonymized identifiers contained in the signals (see signal processing)

```mermaid
---
title: scambio materiale crittografico
config:
  theme: base
  themeVariables:
    primaryColor: "#FFBF00"
---

sequenceDiagram
autonumber

participant CS as Aderente Consumatore
box transparent Sistema Informativo Erogatore
participant ES as e-service
participant PR as Aderente Erogatore
end


rect rgb(191, 223, 255)
    note over PR,CS: scambio materiale crittografico
    PR-->ES: determinazione della <br/>funzione crittografica di hashing e seme
    PR-->ES: pubblicazione API <br/>funzione crittografica di hashing e seme
    opt al primo accesso al servizio di recupero segnali<br/>oppure<br/>in presenza di un segnale di "seed update"
        CS->>ES: richiesta della <br/>funzione crittografica di hashing e seme
        ES->>CS: funzione crittografica e seme
        CS->>CS: aggiornamento funzione crittografica e seme
        opt persistenza identificativi dei soggetti
        CS->>CS: calcolo degli identificativi pseudonimizzati per tutti i soggetti<br> con un procedimento amministrativo in essere
        end
    end
end

```

```mermaid
---
title: scambio materiale crittografico
config:
  theme: base
  themeVariables:
    primaryColor: "#FFBF00"
---

sequenceDiagram
autonumber

participant CS as Aderente Consumatore
box transparent Sistema Informativo Erogatore
participant ES as e-service
participant PR as Aderente Erogatore
end


rect rgb(191, 223, 255)
    note over PR,CS: scambio materiale crittografico
    PR-->ES: determinazione della <br/>funzione crittografica di hashing e seme
    PR-->ES: pubblicazione API <br/>funzione crittografica di hashing e seme
    opt al primo accesso al servizio di recupero segnali<br/>oppure<br/>in presenza di un segnale di "seed update"
        CS->>ES: richiesta della <br/>funzione crittografica di hashing e seme
        ES->>CS: funzione crittografica e seme
        CS->>CS: aggiornamento funzione crittografica e seme
        opt persistenza identificativi dei soggetti
        CS->>CS: calcolo degli identificativi pseudonimizzati per tutti i soggetti<br> con un procedimento amministrativo in essere
        end
    end
end

```
