# Signal recovery

1. for each scheduled time interval (see section on [periodic recovery of signals](../the-technical-guide/signals.md#retention-period-policy-e-recupero-periodico-dei-segnali)) the consumer requests the variation signals for the e-service of interest using the Signal Hub signal recovery service
2. the consumer requests and obtains the api voucher from PDND
3. the consumer sends the signal recovery request for the e-service of interest
4. the signal recovery service (_Signal Hub PULL_) authorizes the request and sends the list of signals
5. the consumer has the list of variation signals

<figure><img src="../.gitbook/assets/lettura segnale sh.png" alt=""><figcaption><p>signal recovery diagram</p></figcaption></figure>

`{% embed url="https://mermaid.live/edit#pako:eNptVNtu2zAM_RVCe9gK2KkvSVMbQx7WptiwrhtabA-DgUGxaUeALXmynK0p-i_7l_3YKLlJ4zV-sCXqkDw8ovnAclUgS5nv-5k0wtSYQo3G9JpDh5XkNWYyV7IUVZpJALPGhiAr3uF--41rwVc1dg4B0GrRcH1_oWqlU8jYq6urd1dBkLFMujSZ7PBnjzLHS8ErzZtM8t4o2Tcr1E8huDYiFy2XBpa3wDu4ULLrG26Uxidi4iX0y-XNpQW77wdpUKv2COrr9bVF3QkbBt73K2cagDfKIKgNasrrOXtKQIJTdoR8jVC_5gVqpOjQCQ69hPyAWyHG9DTmBnS1ehMmoQdRFNNrNjsZDmulWmgpl6qkAGEJb3hdKxvFYNMq0lJZhWzwwWV56y8Wtr4UtMjXAjvDocAaNqondhp4K6CJmgHNcyM2nJhaj8FkV_7J8jbdeRzUXWNpQJUwxOd9IewtpQMz1U5aXqmWT4Q5pQxvV_p0kdcEMT9EkcJsGq8mk4kzK11xKbbcCCXd4XT-K6HDIVeBI17WNByMBZtbwYIZveLk5BkwEq6m4qlXxxqMsYNi7iIpdk9eatfajiu8sYHQ70h8kbsbdPVi1-F_aZ9p7_tl9zz3jT3zhny2rbXYbvmWdMCxg0XsiZGfKEXOodS9cGBAKIVtI_P3zwG5ozHsZX7-CD7UwnbDqP92z6HmL8g7iWyUUYAUSJ8FGYw4Lbkx1NmqqtAuOGzsT3-kLJTF4W3S9sjGLZjHGtQNFwXNnwd7kDE3TzJmp0aBJe9rY6fGI0GtlHf3Mmep0T16rG8LquVpgOyMWAgS_NMw0txk8xj98t-V2kNoy9IH9pulYTidJGdBkCTxLInC2fzMY_cs9ckaJcEsOpsR4jwIo0ePbV2EcBKcx8n5NAjn8TwK4zD2mFZ9tWZpyetuz2rpaOwyVtpWOKxpbNDsuFC9NCxNHv8BciK2xg" %}`signal recovery `{% endembed %}`