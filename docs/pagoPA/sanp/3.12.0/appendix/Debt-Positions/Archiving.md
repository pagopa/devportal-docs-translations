# Archiving

Debt positions, created through synchronous or asynchronous integration, follow an automatic archiving and deletion process.

This process is triggered based on two rules:

- Position status: only debt positions _paid_, _reconciled_, or _invalidated_ by the Entity are considered;
- Time calculation: the start date for calculating the timeframes always corresponds to the date of the position's last modification.

The archiving and deletion times are listed below, broken down by integration method.

| Integration  | Environment | Archiving | Deletion |
| ------------ | ----------- | --------- | -------- |
| Synchronous  | Production  | 2 years   | 10 years |
| Asynchronous | Production  | 2 years   | 10 years |

### Recovering an archived debt position

Debt positions remain available for a period of 2 years from the status change indicated above.\nAfter this period, any recovery requests will be subject to evaluation, upon explanation of the reasons by opening a ticket with the Service Management team.
