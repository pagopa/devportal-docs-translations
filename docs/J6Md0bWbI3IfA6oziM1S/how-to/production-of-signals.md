# Signal production

1. Data variation is produced: change a status or fact in the data domain of the owner, provider of the e-service
2. The provider, as the signal producer, identifies the data that was changed and changes its pseudonymized identifier based on the cryptographic information (hash function and seed) shared with the signal consumers
3. The provider, as the signal producer, obtains the api voucher from PDND
4.  The provider, as the signal producer, sends the signal to the signal deposit service of the Signal Hub

    ```mermaid
    ---
    title: deposito segnale
    config:
      theme: base
      themeVariables:
        primaryColor: "#FFBF00"
    ---

    sequenceDiagram
    autonumber
        participant ER as Produttore segnali
        participant PDND as PDND Interop
        participant PUSH as Signal Hub PUSH
        Note over ER, PUSH: Si assume che l'aderente sia un produttore di segnali
        rect rgb(191, 223, 255)
        activate ER
        ER->>ER: si è prodotta una variazione<br>del dato di un soggetto
        deactivate ER
        opt
        activate ER
        ER->>ER: calcolo identificativo<br>pseudonimizzato del soggetto
        deactivate ER
        end
        ER->>PDND: richiesta del voucher api m2m
        activate PDND
        PDND-)ER: voucher
        Note left of PDND: audience: interop.pagopa.it/m2m<br/>client_id: 725a...<br/>organization_id: 69e2...
        deactivate PDND    
            rect rgb(171, 205, 239)
                loop per la durata del voucher
                ER->>PUSH: deposito segnale<br/> [se necessario  dato personale pseudonimizzato]
                activate PUSH
                Note over PUSH,PUSH: autorizzazione
                PUSH->>PUSH: verifica della titolarità dell'e-service 
                PUSH->>ER: OK
                deactivate PUSH
                end  
            end
        end

    ```

