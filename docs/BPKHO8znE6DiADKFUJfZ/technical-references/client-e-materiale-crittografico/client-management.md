# Client management

### Client–purpose association

The client system is designed to offer **maximum flexibility** to parties, allowing them to structure the management of **application identities** according to their own organizational processes, **without having to adapt** to platform-specific rules.

Each party can choose the approach that best fits its operational and security needs, adopting one of the following models:

* **One client per e-service**, for precise and independent management of each service;
* **Multiple clients per e-service**, to divide responsibilities among different technical teams or suppliers;
* **One client for multiple e-services**, to simplify management in contexts with homogeneous workloads and centralized control.

```mermaid
flowchart LR
    %% Logical columns
    subgraph CLIENT
        C1[Client A]
        C2[Client B]
    end

    subgraph PURPOSE
        F1[Purpose 1]
        F2[Purpose 2]
        F3[Purpose 3]
    end

    subgraph ESERVICE
        E1[E-service X]
        E2[E-service Y]
    end

    %% Client --> Purpose (one arrow per pair)
    C1 --> F1
    C1 --> F2
    C2 --> F2
    C2 --> F3

    %% Purpose --> E-service
    F1 --> E1
    F2 --> E1
    F3 --> E2

    %% Graphic style
    style C1 fill:#e0f7fa,stroke:#00796b,stroke-width:1px
    style C2 fill:#e0f7fa,stroke:#00796b,stroke-width:1px
    style F1 fill:#fff3e0,stroke:#ef6c00,stroke-width:1px
    style F2 fill:#fff3e0,stroke:#ef6c00,stroke-width:1px
    style F3 fill:#fff3e0,stroke:#ef6c00,stroke-width:1px
    style E1 fill:#e8f5e9,stroke:#2e7d32,stroke-width:1px
    style E2 fill:#e8f5e9,stroke:#2e7d32,stroke-width:1px

```

### Choosing the management model

The choice of model depends on the **balance between security and maintainability**: the organization of clients must ensure that technical users have **visibility only over the purposes** for which they operate, preventing unauthorized access to unrelated purposes.

For an operational overview, see the [**dedicated client webinar**](https://developer.pagopa.it/webinars/e-service-erogazione-inversa) (starting at minute 24:20, free registration required).

{% hint style="info" %}
Assign **descriptive names** to clients to make them easier to identify — for example, linking them to the workgroup or supplier that uses them (e.g., “Software House X – Payments e-service”).
{% endhint %}

***

Next page [→ Vouchers](../utilizzare-i-voucher/)
