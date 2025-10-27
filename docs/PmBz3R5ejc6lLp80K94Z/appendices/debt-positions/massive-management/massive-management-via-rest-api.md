---

description: \>-  
Procedure for loading, changing and massive deletion of the debt positions on GPD
---

# ⚙️ Massive management via API REST

Massive management can be triggered via API, whose specifications are indicated below in the document.  
Via the API `/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file` it is possible to trigger the massive loading, change and deletion of the debt positions present in a compressed file, as described in the [Input trace specifications](input-trace-specifications.md).   
In a positive case, the method responds immediately with a code `HTTP 202`, once a positive response is obtained, it is possible check the status of the massive operation using the API `/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{fileId}/status`. To obtain a complete report, including the outcomes for every debt position, query the API  
 `/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{fileId}/report`

{% hint style="info" %} The URI that permit consulting the `status` and the `report` of the operation performed by means of loading can be accessed by entering as the path param the `fileID` contained in the `Location` header of the responses to the following `API`  
`POST /organizations/{organization-fiscal-code}/debtpositions/file`

`PUT /organizations/{organization-fiscal-code}/debtpositions/file`

`DELETE /organizations/{organization-fiscal-code}/debtpositions/file`

<mark style="color:blue;">"Location" : "brokers/{broker-code}/organizations/{ec-code}/debtpositions/file/{</mark><mark style="color:blue;">**fileID**</mark><mark style="color:blue;">}/status"</mark> {% endhint %}

### API specifications <a href="#specifiche-api" id="specifiche-api"></a>

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="post" %} [https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json) {% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="put" %} [https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json) {% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="delete" %} [https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json) {% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-id}/report" method="get" %} [https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json) {% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-id}/status" method="get" %} [https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json) {% endswagger %}