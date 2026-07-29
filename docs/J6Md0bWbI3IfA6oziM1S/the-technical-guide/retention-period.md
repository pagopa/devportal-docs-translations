# Retention Period and API Polling

Signals submitted to Signal Hub have a retention period of 30 days. Once this period has expired, the signal is deleted and can no longer be retrieved.

For example, if a signal is submitted at `2025-01-01T08:00:00Z`, it will remain available for retrieval up to and including `2025-01-31T08:00:00Z`. From `2025-01-31T08:00:01Z` onward, the signal will no longer be retrievable.

When using API polling—that is, calling the signal retrieval endpoint at regular intervals—a minimum frequency of one request per day is recommended. This helps prevent missing submitted change signals, avoids signal accumulation, and ensures a minimum level of data freshness.

Given the 30-day retention period, it is therefore recommended to retrieve signals at least once per day.

Signals submitted to Signal Hub have a retention period of 30 days. Once this period has expired, the signal is deleted and can no longer be retrieved.

For example, if a signal is submitted at `2025-01-01T08:00:00Z`, it will remain available for retrieval up to and including `2025-01-31T08:00:00Z`. From `2025-01-31T08:00:01Z` onward, the signal will no longer be retrievable.

When using API polling—that is, calling the signal retrieval endpoint at regular intervals—a minimum frequency of one request per day is recommended. This helps prevent missing submitted change signals, avoids signal accumulation, and ensures a minimum level of data freshness.

Given the 30-day retention period, it is therefore recommended to retrieve signals at least once per day.
