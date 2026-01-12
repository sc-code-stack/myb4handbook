<div style = "index-hero">

# Data Requirements

myB4.ai can accept data covering Customer transactions, Supplier transactions, and Loose Money. Of those three, you can choose to upload just one data category, or any combination of the three, depending on the data you have available. **This data is at current always uploaded as .csv-files**

Customer and Supplier data consists of two files each. One master file, which contains key information about all customers/suppliers, and one transactional file, which contains all transactions for all customers/suppliers in the period. Loose Money is just a single file containing information about each transaction in the period.

myB4.ai performs optimally when the following data fields (see tables below) are extracted from  the accounts receivable/payable and general ledger modules of your accounting system. Fields that are absolutely necessary are marked in bold. 

After the data tables, you can find a section with more in-depth details about formatting and advice.

## Customer Data

### Customer Master Data

| Field Name | Description |
|:-----------|:------------|
| **Customer Name** | **The name of the customer** |
| **Customer ID Number** | **Unique identifier for each counterparty.**<br> Needs to match what is in the transactional data |
| **Country Code** | **The country where the customer is registered** <br> Must be in ISO 2-letter format: ex. Sweden = SE |
| City | The city in which the customer is registered. |
| Address | The address at which the customer is registered |
| Creation Date | When the customer was first created in the accounting system. |
| *Company Code (business unit)* | *If you upload data for multiple business entities, you can use this field to group the data* <br> Note: at v1.6, this is still an experimental feature. |
| *Customer Group* | *This was used for customer grouping, but is now a deprecated feature.* |

### Customer Transactional Data
| Field Name | Description |
|:-----------|:------------|
| **Customer ID Number** | **Unique identifier for each counterparty.**<br> Needs to match what is in the master data |
| Invoice or Credit Note Number | The invoice number as sent to the customer. |
| Your internal document number | Your internal voucher number (if different from invoice number) |
| **Invoice/Credit note date** | **The date at which the invoice/credit note was issued.** |
| Invoice/Credit note Currency | The currency in which the invoice/credit note was issued. |
| **Invoice/Credit note Amount** | **The value of the invoice in the currency in which it was issued** |
| **Invoice/Credit note Accounting** | **The value of the invoice/credit note in the base accounting currency** |
| Document Type | Field which designates whether a record is an invoice or credit note. **See Warning Below** |
| Text Field | Descriptive text of the invoice/credit note.|
| *Company Code (business unit)* | *If you upload data for multiple business entities, you can use this field to group the data* <br> Note: at v1.6, this is still an experimental feature. |

```admonish warning "Document Types" 
Document type is a field that is not strictly required *if* your accounting data is signed. However, if the transactions are unsigned, this field *must* be included so invoices and credit notes can be identified. Ask your ERP-manager if you are unsure about what the different codes mean.
```

## Supplier Data

### Supplier Master Data

| Field Name | Description |
|:-----------|:------------|
| **Supplier Name** | **The name of the supplier** |
| **Supplier ID Number** | **Unique identifier for each counterparty.**<br> Needs to match what is in the transactional data |
| **Country Code** | **The country where the supplier is registered** <br> Must be in ISO 2-letter format: ex. Sweden = SE |
| City | The city in which the supplier is registered. |
| Address | The address at which the supplier is registered |
| Creation Date | When the supplier was first created in the accounting system. |
| *Company Code (business unit)* | *If you upload data for multiple business entities, you can use this field to group the data* <br> Note: at v1.6, this is still an experimental feature. |
| *Supplier Group* | *This was used for supplier grouping, but is now a deprecated feature.* |

### Supplier Transactional Data
| Field Name | Description |
|:-----------|:------------|
| **Supplier ID Number** | **Unique identifier for each counterparty.**<br> Needs to match what is in the master data |
| **Invoice or Credit Note Number** | **The invoice number as received from the supplier.** |
| Your internal document number | Your internal voucher number |
| **Invoice/Credit note date** | **The date at which the invoice/credit note was issued.** |
| Invoice/Credit note Currency | The currency in which the invoice/credit note was issued. |
| **Invoice/Credit note Amount** | **The value of the invoice in the currency in which it was issued** |
| **Invoice/Credit note Accounting** | **The value of the invoice/credit note in the base accounting currency** |
| Document Type | Field which designates whether a record is an invoice or credit note. **See Warning Below** |
| Text Field | Descriptive text of the invoice/credit note.|
| *Company Code (business unit)* | *If you upload data for multiple business entities, you can use this field to group the data* <br> Note: at v1.6, this is still an experimental feature. |

```admonish warning "Document Types" 
Document type is a field that is not strictly required *if* your accounting data is signed. However, if the transactions are unsigned, this field *must* be included so invoices and credit notes can be identified. Ask your ERP-manager if you are unsure about what the different codes mean.
```

## Loose Money

| Field Name | Description |
|:-----------|:------------|
| **Sender / Receiver** | **Where the money came from or went to.**<br> i.e. the name of the counterparty. |
| Transaction Date | The date of the transaction |
| Currency | The currency of the transaction |
| **Amount (transaction)** | **The amount of the transaction in the currency in which the transaction was made** |
| **Amount (base accounting)** | **The amount in your base accounting currency** |
| Bank Account Country | The country where the transaction was made to / received from (if known) <br> Must be in ISO 2-letter format. |
| Document Number | The internal unique general ledger (or similar) voucher number in your ERP-system. |
| Text Field | Descriptive text of the invoice/credit note.|
| *Company Code (business unit)* | *If you upload data for multiple business entities, you can use this field to group the data* <br> Note: at v1.6, this is still an experimental feature. |


## Preparing Data Files for myB4
We recognise that there are a multitude of different accounting systems with many options to download data. While we constantly seek to improve how flexible the system is in receiving data, there are also so many different formats and file types that it is difficult to accommodate them all. At current, this has resulted in a trade-off, where the user needs to ensure the data is obtained in .csv-format, following certain conventions. In future versions, we aim to eventually support a broader range of file formats. 

This short guide should help you ensure your data conforms to the expected standards, securing a smooth upload experience. Should you need it, B4 will provide support to obtain the correct data in .csv-format, and any assistance with conversion and pre-processing to get your data ready for upload to the myB4.ai platform. 

1. **How many of the 5 data files are needed?**
    - For myB4 to run, it is not necessary to upload all five data files. You can also run the algorithms on only the *pairing* of "customer master + customer transactions" data, the "supplier master + supplier transactions" data, or the "Loose Money" data alone - or, any combination of the above three sets. 
    
1. **Regarding Transactional Files**
    - myB4.ai has been designed to use a narrow set of data, that is obtainable from any (well-maintained) ERP-system. Data records which are payments and receipts should **not** be included. 
    ```admonish tip "Using Document Type"
    If you have payments/receipts in your transaction data, you can employ the 'document type' field to exclude them during the upload. Simply specify the codes for invoices and credit notes, and omit the codes for payments and receipts. See [**Chapter 3.4: Upload & Execute**](./upload.md) for a more thorough review. 
    ```
1. **The Loose Money File**
    - The term 'loose money' is the most flexible definition we employ, and it can cover a variety of transactions depending on the context. Most succinctly, it can be said that it is transactions in and out of the organisation which are not part of the regular checks and balances. This can include bank transfers, cash payments/receipts, donations, and similar transactions where a corresponding customer/supplier record has not been created.

1. **Text Fields**
    - The field “Text” appears in both the “Customer Invoice and Credit Note” as well as the “Supplier Invoice and Credit Note” files. Text is not a mandatory field, but since some ERP-systems allow a free-text line next to invoices and credit notes, should this field be extracted it should be extracted as a SINGLE field only. I.e., if multiple text lines exist, they should be concatenated. The maximum length a text field can be is 255 characters. Otherwise myB4 will truncate the field to the first 255 characters.
    ```admonish tip "Alternative use of the text field"
    Since the text field is not strictly used by the algorithms, but instead are used to inform the human aspect of the analysis (see: [**Chapter 3.7: The Workflow**](./workflow.md)), if you do not have a text field specifically, you could instead use that to import any other information which might be interesting, such as line items, approver, etc.
    ```
1. **Country Codes**
    - The 2-digit (ISO 3166) country code standard is currently used as standard.

1. **Date Fields**
    - We accept a variety of different date formats, and are happy to accommodate for more in future updates, upon request. The system standard is the ISO 8601 format: yyyy-mm-dd.

    
