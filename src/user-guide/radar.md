<div style = "index-hero">

# The myB4<sup>TM</sup> Radar
When you have successfully executed the myB4<sup>TM</sup> algorithms, you can access the radar for that scope. You can do so from the Radar Dashboard, by clicking the right hand arrow (go to radar) under 'Actions' for that scope.
<p align="center">
        <img src="../static/img/radar1.png" width = 70%">
    </p>

Alternatively, you can open the PreCrime tab while you have the relevant scope active, then click the Radar tab underneath. 
<p align="center">
        <img src="../static/img/radar2.png" width = 70%">
    </p>

Great! Let's first get an understanding of the various components on this page

## The Radar
Below you can see an example of a Radar page. This one contains all three segments (Customers, Suppliers, and Loose Money), but depending on the data you have uploaded, your radar may contain anywhere from 1-3 segments. 
<p align="center">
        <img src="../static/img/radar2.png" width = 70%">
    </p>
Above each radar, you will see a blue button which reads **'Download Radar'**. If you click it, you will download that particular segment as a .csv-file.
<p align="center">
        <img src="../static/img/radar4.png" width = 70%">
    </p>
    
```admonish tip "Downloading Radars"
While many prefer to do all their work on the platform, the download feature allows you to work with a more flexible format, where you can filter, design and sort according to your needs.
```

### Interpret
In the top right-hand corner, you will see a light blue button which says **'Interpret'**.
<p align="center">
        <img src="../static/img/radar5.png" width = 70%">
    </p>

Clicking this button will run the Interpreter, which creates the automated comments from myB4 Interpret, as well as an Automated Summary for each of the top counterparties. After it has finished running, you will see small, blue 'i's next to the counterparties that have received comments.
<p align="center">
        <img src="../static/img/radar6.png" width = 70%">
    </p>

Clicking one of the counterparties will open the detailed window, were you will see the radar information for the counterparty, followed by the Automated Summary, and then the Interpret comments. You will also see user comments in this window, if any have been made (see: [**Chapter 3.7: The Workflow**](./workflow.md#making-comments)).

## The Searchbar
One more feature to note in the same top righthand corner is Searching. If you input text in the field, the radar(s) will be filtered to only display entities that contain that string. You can read more about searching as part of your analysis in [**Chapter 3.7: The Workflow**](./workflow.md#searching)
<p align="center">
        <img src="../static/img/radar5.png" width = 70%">
    </p>

## Columns in Common
First, let's have a look at the columns the different segments have in common:

### Customer/Supplier/Counterparty
Contains the name of the customer/Supplier/Counterparty as it was in the file uploaded. 
```admonish info "What's in a Name?"
Note that some of our algorithm features will use the name, as is. This means that if the name in your ERP-system contains additional information like a branch name, or C/O etc., that will also be included in the analysis.
```

### Customer/Supplier No. 
This is the unique identifier for each customer/supplier in your ERP-system.

### Risk Index
The Risk Index is a compound score, based on all the transactional flags, along with interaction terms, and materiality weights. The Risk Index runs from 0-100, and higher scores indicate a higher likelihood of fraud or financial damage associated with a counterparty. While this is not a hard rule, a score of 25-39 could be considered interesting, and a score of 40+ is severe. By default, each radar segment is sorted by Risk Index.

### Country
The country where the Customer/Supplier is based (or at least registered in your ERP-system). For the Loose Money segment, this is the *Bank Country* of the sender/receiver.

### Net Total
This is the net total value of transactions with the customer/supplier, expressed in the base accounting currency used in your system (currency code in parentheses). The net total is in other words the value of all invoices minus the value of all credit notes for a customer/supplier. Note that for Loose Money, this is replaced by Total Value, which is the *absolute* value of all transactions - money in plus money out. 

### Credits
This is the total value of credit notes with a customer/supplier.

### Volume 
This is the number of individual transactions with a customer/supplier/counterparty over the period of the data uploaded. 

### Footprint
This is a measure of the online presence of a customer/supplier/counterparty. It is created by getting the number of results obtained when googling the literal name of the company (replaced with Baidu for Chinese entities). 
While the actual algorithm is a bit more sophisticated, you can use this as a rule of thumb:
1. **Tiny** approx. 0-10 results
1. **Low** approx. 10-100 results
1. **Moderate** approx. 100-500 results
1. **Wide** more than 500 results

```admonish tip "Verifying Footprint"
Since the Footprint relies on search engine APIs, there are two pitfalls: Firstly, the API may fail, or get 'booted' by the search engine, in which case it may return artificially small footprints. Secondly, Since it uses the literal string in the 'Name' field, if that does not correspond to the common usage name, results may also be lower than expected. We reccommend that you verify any footprints you find interesting with a manual search.
```

### DMC
Dirty Money Constellations (DMCs) are systems of financial structures, often using secrecy jurisdictions and shell companies, designed to hide the origin of illegally obtained funds (dirty money) while maintaining a connection to the rightful owner. We maintain a ranked list of countries and territories which are frequently used in money laundering, to conceal ownership, and/or to bypass sanctions. The DMC indicator has four levels: 
1. **ABS: Absolute** - These are prime examples of money laundering centres, and dealings with entities based in these countries should be carefully evaluated.
1. **NRY: Nearly** - This category also includes many common dirty money centres/tax havens, and typically, you want to monitor dealings with entities in these locations.
1. **POS: Possibility** - Countries/territories in this category are at risk of being used in sanctions circumvention and/or money laundering, but this will be more situationally dependent. Monitor if a country you do *not* expect to have much dealings with shows up.
1. **SPC: Specific** - This category includes countries that are normally considered fairly safe to have dealings with, but where there are very specific scenarios that may cause concern (for instance countries with porous borders with sanctioned countries). 

We seek to keep our DMC list updated, but administrators can also curate their own DMC lists. You can read more about tailoring your DMC settings in [**Chapter 4.4: Tenant Calibration**](../admin/callibration.md).

### Xtra
The Xtra indicator is a binary indicator which is active if certain trigger-words or phrases are present with a counterparty. This includes names indicative of a risky industry, generic name indicators, names indicating potentially troublesome company structures etc. 

### T&T
Track and Trace is a feature that allows you to add company names (or parts thereof) to an internal register. Whenever the name shows up in a radar, this indicator will be triggered, to indicate that a customer/supplier/counterparty you may have had trouble with in the past, is present in the scope. 

## The Customer Radar
Here, you see an example of a customer radar. Each row represents the analysis of one customer entity, for the period uploaded. Let us go through each column to understand what they contain.
<p align="center">
        <img src="../static/img/radar7.png" width = 100%">
    </p>
