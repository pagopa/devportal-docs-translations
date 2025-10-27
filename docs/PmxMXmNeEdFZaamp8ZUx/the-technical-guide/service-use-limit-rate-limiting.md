# Service use limit: rate limiting

To guarantee service reliability and availability to users, there is a _rate limiting_ system that limits the number of requests that an be made within a specific period of time.

**The **_**rate limit**_** is set to 25 requests per second, for member institutions**, for signal deposit and recovery.

Information on _rate limiting_ is available as headers of the HTTP response and is applied **per single member** (signal producer or consumer). For example, the following headers

`x-rate-limit-interval: 1000`  
`x-rate-limit-limit: 25`  
`x-rate-limit-remaining: 24`  
`x-rate-limit-reset: 1733419765156`

mean that:

* the time interval is 1000 milliseconds (1 second)
* the maximum number of requests available for the period of time is 25
* the number of requests available to the caller for the period of time is 24
* the next time interval (therefore the reset of the request counter) calculated starting from the first request of the member institution made on December 5 2024 18:29:24.156 GMT+01:00, will start on December 5 2024 18:29:25.156 GMT+01:00 (expressed in epoch unix timestamp msec).

The fact that _rate limiting_ applies to the member level means that all the requests made by the member will be counted, regardless of the number of m2m API clients that are used. Therefore, if a member invokes the service with 2 m2m API clients (client “A”, client “B”) the number of requests “spent” per individual time interval will be the sum of (client “A”, client “B”).

Once the request limit for the time interval is exceeded, the service will return an error (HTTP Status Code `429`).