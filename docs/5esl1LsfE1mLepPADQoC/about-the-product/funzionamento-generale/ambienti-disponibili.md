# Available environments

Three environments are available: Production, Testing, and Validation. Each has distinct characteristics, as shown in the table below:

| Environment name | Who can provide e-services? | Do I receive real data? |
| ---------------- | --------------------------- | ----------------------- |
| Production       | Only PA, GSP, SCP, SCEC     | Yes                     |
| Testing          | Only PA, GSP, SCP, SCEC     | No                      |
| Validation       | All parties                 | No                      |

## Production environment

This environment enables integrations that access real data. It is the most closely and robustly monitored environment and is subject to the [applicable SLAs](../normativa-e-approfondimenti/further-details.md#sla-service-level-agreement).

## Testing environment

Intended for validating and testing one’s own e‑services or for consumption-use simulations. All data returned by the producer’s APIs in this environment must be fictitious (dummy data only).

## Validation environment

Functionally similar to the Testing environment but more inclusive in scope. It is open to all parties, including technology partners and other interested organizations, allowing them to test PDND features.

PagoPA also provides a set of e‑services that mimic common access patterns to support integration testing. All responses must again use dummy data only.
