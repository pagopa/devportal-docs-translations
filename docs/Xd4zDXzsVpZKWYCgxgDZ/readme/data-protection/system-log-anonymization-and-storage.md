# System log - anonymization and storage

NP anonymizes the information that could lead to the identification of persons. For example, NP uses a service that generates an anonymized version of the fiscal code and permanently maintains the relationship between the fiscal code and its anonymized version.

The information present in the system log and in the notification system are anonymized.

Only the documents attached to the notifications and the certificates enforceable against third parties can contain information in clear text.

The system logs are produced in a database, indexed by anonymized version of the fiscal code and partitioned by date. Every log record can contain an anonymized fiscal code.

NP does not perform update or delete operations on log records.

The logs are stored for a maximum of 10 years. The logs of the last 120 days are always present in the DB for quick access, the logs are transferred daily to file systems and stored using the same methods used for the certificates enforceable against third parties.

The log of accesses via SPID or CIE are stored for 24 months.

The logs necessary for demonstrating the information contained in the certificate enforceable against third parties are stored for 10 years.

The audit logs that are not necessary for demonstrating the information contained in the certificate enforceable against third parties are stored for 5 years.

The NP system logs necessary for demonstrating the information contained in the certificate enforceable against third parties are stored for 36 months.