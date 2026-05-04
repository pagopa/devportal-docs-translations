# Integrating with tracing

### What is a trace?

A trace identifies a specific CSV upload to the tracing API. The CSV presents the transactions that took place on a specific day. The tracing API returns a `tracingId`, a univocal identifier for that upload.

A trace can contain any number of records, according to the rules indicated in the following paragraph. 

### What does the CSV file contain?

The CSV file contains the list of operations performed by the members. For each row, the following fields must be indicated in this order:

<table><thead><tr><th width="200">Field</th><th>Description</th></tr></thead><tbody><tr><td><code>date</code></td><td>the date on which the operations were performed, with format YYYY-MM-DD</td></tr><tr><td><code>purpose_id</code></td><td>the ID of the purpose contained in the user&rsquo;s request</td></tr><tr><td><code>status</code></td><td>the HTTP status code with which the service responded to the caller</td></tr><tr><td><code>token_id</code></td><td>the ID of the token used to execute the HTTP request to the service</td></tr><tr><td><code>requests_count</code></td><td>the number of requests that generated this HTTP status code</td></tr></tbody></table>

#### An example

Let's analyze the following CSV file

```
date,purpose_id,status,token_id,requests_count 2024-07-25,0e1e4c98-6f2e-4f55-90e3-45f7d3f1dbf8,500,99382e29-b0cf-412b-a060-72e421b6d167,48
2024-07-25,1cafea11-08a0-4eaf-a3ee-3e9839c8c2a9,200,8f3e3665-5d89-4600-be2f-79aeb18f702d,22
2024-07-25,1cafea11-08a0-4eaf-a3ee-3e9839c8c2a9,404,8f3e3665-5d89-4600-be2f-79aeb18f702d,34
2024-07-25,1cafea11-08a0-4eaf-a3ee-3e9839c8c2a9,500,b1968f90-db88-4929-a032-ef04379b500d,5
```

The sent trace is related to July 25, 2024 and refers to:

* the purpose `0e1e4c98-6f2e-4f55-90e3-45f7d3f1dbf8`, which received 48 requests that had a negative outcome, with one status code 500; To be authorized to execute these requests, the token jwt with id `99382e29-b0cf-412b-a060-72e421b6d167` was used.
* the purpose `1cafea11-08a0-4eaf-a3ee-3e9839c8c2a9`, which received 22 requests authorized by token jwt `8f3e3665-5d89-4600-be2f-79aeb18f702d` that had a positive outcome (200) authorized, 34 with a negative outcome for 404 (authorized, in this case, by the same token jwt `8f3e3665-5d89-4600-be2f-79aeb18f702d`) and another 5 also with a negative outcome for 500 authorized by token `b1968f90-db88-4929-a032-ef04379b500d`.

### What is the operating mechanism?

Starting from the first day a member uploads a trace, a job is activated that verifies every day the presence of data related to two days ago. If this information is not present, the absence of this data for a specific day is recorded (`state = MISSING`).

Here is an example: 

* On January 19 I uploaded the data related to January 18. It was completed successfully. On January 20 the job changes. The system verifies that there are no errors.
* On January 20 I do NOT upload the data related to January 19. January 21 arrives, and the job changes. The job records the absence of the data expected for January 19, and inserts a new `tracingId` with state `MISSING` in the database.

To upload the missing data related to January 19, I must:

1. contact the endpoint `GET /tracings`;
2. recover the `tracingId` related to the trace with the `MISSING` state;
3. contact the endpoint `POST /tracings/{tracingId}/recover` uploading the CSV with the data related to January 19.

The system considers a trace to be "missing" if there is not even one record for a certain date.

### How can I upload a new trace?

Use the route `POST /tracings/submit`, inserting in the body of the request the `date` parameter (date on which the transactions took place), and the `csv` parameter (the CSV file containing the traces). 

{% hint style="info" %} If the date contained in the `date` parameter does not correspond to that contained in the records in the CSV, the system returns an error. {% endhint %}

### What happens if I send a record a second time for the same date?

If the route `POST /tracings/submit` is used, the system first verifies that there are no uploads present for the date indicated in the `date` parameter of the body of the request.

If a trace is already present in the database for that date, the system returns an error, and the file is not processed. 

Specifically, the error will be:

```
{ 
  "code": "TRACING_ALREADY_EXISTS", 
  "detail": "A tracing for the current tenant already exists on this date: YYYY-MM-DD" 
}
```

### What happens if the CSV contains errors in specific records for a date for which no uploads took place?

The file is processed in any case and the upload is successful. The `errors` parameter contained in the response will be set to `true`.

It will be possible to recover the indication of the incorrect records from the API using the route `GET /tracings/{tracingId}/errors`.

### How can I know if the file I uploaded contains errors?

Following a CSV upload request, the response will contain, in addition to the `tracingId`, also the `errors` parameter set to `true`. For example:

```
{
  "tracingId": "89ef5b79-cc18-4772-a318-d61c1d7644d0",
  "errors": true
}
````

indicates that the system contains errors for this institution.

{% hint style="warning" %} Attention: `errors: true` is a general indication. It means that there are errors for this institution in the trace log, not that the upload of the single trace contains errors.  {% endhint %}

### What is an example of an error that is returned?

The errors returned for a specific `tracingId` contain details of the purpose of reference (`purposeId`), details of the error and the row on which the error took place for the CSV of reference. For example, the error 

```
{
  "purposeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "errorCode": "INVALID_STATUS_CODE",
  "message": "status: Invalid HTTP status code",
  "rowNumber": 4
}
```

indicates that on row 4, with respect to the purpose with id `3fa85f64-5717-4562-b3fc-2c963f66afa6`, a status code was indicated that is not recognized among the standard of the expected HTTP responses.

### How can I load data for a prior date?

Any traces that were not uploaded for previous days are considered `MISSING`. A CSV related to a prior date can be inserted using the route `POST /tracings/{tracingId}/recover`, as described in a [previous section](integrate-with-tracing.md#What is the operating mechanism?).

### I uploaded a CSV that has missing or incorrect data. How can I update it?

It is possible to replace the data for a trace that does not have any error using the route `POST /tracings/{tracingId}/replace`. The records contained in the new CSV will fully replace those that were previously uploaded.

This means that all the records present for that trace will be deleted, and then the new ones that were just uploaded will be entered.

***

### Reporting missing traces

The system reports missing traces for the dates on which no CSV files were received. The notification is automatic and takes place daily.

The information can be found using the endpoint of `GET /tracings`. JSON array, each with a date, tracingId, and state field set, in this case, to `MISSING`.

### Notification of errors and missing traces

When the member sends a new CSV file, the system notifies if there are missing traces or traces containing errors related to previous days.

If there are errors, the member can view the details of the errors and send a new corrective CSV to update the information.

In the case of a missing tracing, the member can send the tracing for the missing date. Finally, the system permits replacing a tracing that was already inserted correctly.