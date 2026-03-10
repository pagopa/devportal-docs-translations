# Exporting and importing

The **export and import** feature allows transferring an **e-service version** from one PDND environment to another, facilitating its deployment, reuse, and distribution among collaborating parties.

This feature is useful for:

* Promoting to production an e-service that has successfully passed testing;
* Transferring e-services between environments managed by the same party;
* Replicating an e-service across multiple parties (for example, in the case of Technology Partners).

## **Import caveats**

During import, the system provides useful information for **debugging** in case of consistency issues. Specifically:

1. **Attributes** – attributes **are not transferred** between environments and must be reassigned manually in the new environment.
2. **E-service duplication** – if an e-service with the **same name and same party** already exists in the destination environment, the import will not be executed. It is possible to rename the e-service within the `.zip` package before retrying.
3. **Archive structure** – the `.zip` package must be consistent with the **configuration file** (fields correctly present and formatted; listed files existing; no extraneous unmapped files).
4. **API interface** – **server URLs** in the interface file may vary across environments, depending on the party’s infrastructure choices.

## **Structure of the .zip package**

The import package contains everything needed to describe the version and documentation of the e-service.

* **`configuration.json`** – describes the e-service content and the location of other files in the `.zip`. The **file name must not be changed**. If it is missing, the import cannot proceed.
* **`file_name.[yaml|json|wsdl]`** – interface file (OpenAPI for REST or WSDL for SOAP). The name can be changed, updating the reference in `configuration.json`.
* **Other files** – technical documentation attached to the version (manuals, examples, etc.); paths must match those indicated in the configuration.

All fields in `configuration.json` are **mandatory**. Even if not used, they must be included with the **default value**.

**Eservice**

| Field name     | Type                  | Description                                                                                                                                                                                                |
| -------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`         | String                | Name of the e-service (5–60 characters, including spaces). Must be **unique** for each party.                                                                                                              |
| `description`  | String                | Description of the e-service (10–250 characters, including spaces).                                                                                                                                        |
| `technology`   | REST \| SOAP          | Technology of the produced API. The interface file extension must be consistent.                                                                                                                           |
| `mode`         | DELIVER \| RECEIVE    | Mode of the e-service (direct or reverse producing). In **RECEIVE**, at least one entry in `riskAnalysis` is required; in **DELIVER**, there must be none. \[**correction: corrected REICEVE to RECEIVE**] |
| `descriptor`   | Descriptor            | Content of the e-service **version** (see _Descriptor_ table).                                                                                                                                             |
| `riskAnalysis` | Array`<RiskAnalysis>` | Risk analyses required for e-services in **RECEIVE** mode (default: `[]`).                                                                                                                                 |

**Descriptor**

| Field name                | Type                | Description                                                                                       |
| ------------------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| `description`             | String              | Description of the **version** (10–250 characters, including spaces).                             |
| `interface`               | Document            | Document describing the produced **API interface**.                                               |
| `docs`                    | Array`<Document>`   | Documents attached to the version (e.g., technical documentation). Default: `[]`.                 |
| `audience`                | Array`<String>`     | Audience of the resource. Typically, **only one string** is included.                             |
| `voucherLifespan`         | Number              | **Voucher** validity in **seconds** (allowed values: `60`–`86_400`, i.e., **1 minute–24 hours**). |
| `dailyCallsPerConsumer`   | Number              | **Per-consumer** call threshold (API calls per day). Values ≥ 1.                                  |
| `dailyCallsTotal`         | Number              | **Total** call threshold (API calls per day) ≥ `dailyCallsPerConsumer`.                           |
| `agreementApprovalPolicy` | AUTOMATIC \| MANUAL | **Approval policy** for service requests.                                                         |

**Document**

| Field name   | Type   | Description                                                                |
| ------------ | ------ | -------------------------------------------------------------------------- |
| `prettyName` | String | User-friendly name displayed to users (5–60 characters, including spaces). |
| `path`       | String | Path of the file starting from `configuration.json`.                       |

**RiskAnalysis**

| Field name         | Type             | Description                                           |
| ------------------ | ---------------- | ----------------------------------------------------- |
| `name`             | String           | Name assigned to the risk analysis (5–60 characters). |
| `riskAnalysisForm` | RiskAnalysisForm | Structured content of the risk analysis.              |

**RiskAnalysisForm**

| Field name      | Type                              | Description                                                               |
| --------------- | --------------------------------- | ------------------------------------------------------------------------- |
| `version`       | String                            | Version of the analysis model (e.g., **3.0** for Public Administrations). |
| `singleAnswers` | Array`<RiskAnalysisSingleAnswer>` | **Single-choice** answers.                                                |
| `multiAnswers`  | Array`<RiskAnalysisMultiAnswer>`  | **Multiple-choice** answers.                                              |

**RiskAnalysisSingleAnswer**

| Field name | Type   | Description                                                                                            |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------ |
| `key`      | String | Key identifying the question in the template (e.g., `institutionalPurpose` for institutional purpose). |
| `value`    | String | Answer to the question identified by the key.                                                          |

**RiskAnalysisMultiAnswer**

| Field name | Type            | Description                                                                  |
| ---------- | --------------- | ---------------------------------------------------------------------------- |
| `key`      | String          | Key identifying the question in the template (e.g., `institutionalPurpose`). |
| `values`   | Array`<String>` | List of selected answers.                                                    |

***

Next page [→ Thresholds and approvals](thresholds-and-approvals.md)
