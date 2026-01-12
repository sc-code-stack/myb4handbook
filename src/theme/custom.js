// Simple glossary hover tooltips for mdBook
document.addEventListener("DOMContentLoaded", function() {
  // Define your glossary terms and definitions here, or load from glossary.md dynamically
  const glossary = {
    "myB4.ai": "myB4.ai is a secure cloud-platform, which allows organisations to analyse transactional data to spot fraud and financial damage early.",
    "Radar": "The Radar is an analysis tool with a ranked overview of the 'riskiness' of all counterparties in a scope. The ranking is based on various flags, which can also be seen in the radar.",
    "Insights": "myB4 Insights is a snapshot of the most interesting examples from the Radar. Unlike the Radar, it uses a different set of selection criteria to pick out just a handful of examples which are a good place to begin your investigation. ",
    "Dashboard": "An overview of all the scopes on your organisation's tenant.",
    "Tenant": "The tenant is your organisation's workspace. Each tenant are kept separate from one another so there is no data leak, and users are given access to tenants on an organisational basis.",
    "tenant": "The tenant is your organisation's workspace. Each tenant are kept separate from one another so there is no data leak, and users are given access to tenants on an organisational basis.", 
    "Scope": "A scope is one individual analysis, typically covering one or more business units for a specific time period (usually 12-18 months). Scopes are a way to segment your analysis between different units, and time frames.",
    "scope leader": "The user that created a given scope. The scope leader will have more change privileges than other users for their Scopes.",
    "scope period": "The time range covered by the data for a given scope, e.g. the date of the first transaction to the date of the last transaction in that upload. ",
    "scope rating": "A weighted average of all Risk Indices in a given scope, with more weight assigned to the highest ranked counterparties.",
    "security tag": "These tags can be associated with both users and scopes. In order to access any given scope, the user must have at least one corresponding security tag.",
    "security tags": "These tags restrict access to scopes, and are allocated to both users and scopes. In order to access any given scope, the user must have at least one corresponding security tag.",
    "ERP-system": "An ERP (Enterprise Resource Planning) system is a software that integrates and manages core business processes like finance, HR, manufacturing, and supply chain into a single platform. In the context of myB4, it will typically be the source of the transactional data which is uploaded to myB4.ai.",
    "Loose Money": "By the term 'loose money', we mean money in or money out of the organisation which is not part of the regular checks and balances. This could be cash-transactions, as well as bank transactions that are not recorded as 'normal' invoices or credit notes.",
    "loose money": "By the term 'loose money', we mean money in or money out of the organisation which is not part of the regular checks and balances. This could be cash-transactions, as well as bank transactions that are not recorded as 'normal' invoices or credit notes.",
    "signed": "In accounting terms, signed data means that positive amounts represent invoices, and negative amounts are used to designate credit notes. Note that in some cases, it might also be positive = money in, negative = money out.",
    "unsigned": "In accounting terms, unsigned data refers to data where all transactions (whether invoice or credit note) are in positive amounts. Normally, this data will have some other field to identify the document type.",
    "csv": "CSV stands for 'Comma Separated Values' and is a plain text file format for storing tabular data, where each line represents a row and commas separate the values within each row. In current usage, separators are not restricted to commas, and semicolons(;), pipes(|), and tabs(    ) are widely used as separators.",
    "Interpreter": "myB4 Interpret is a tool to help you understand what various flags may mean when viewed in combination. When you run it, it looks for specific combinations of warning signs with each counter-party, and leaves an Impression (a short explanation of what *might* be happening), and Suggested Actions (guidance on how you might further look into what might be going on.",
    "Interpret": "myB4 Interpret is a tool to help you understand what various flags may mean when viewed in combination. When you run it, it looks for specific combinations of warning signs with each counter-party, and leaves an Impression (a short explanation of what *might* be happening), and Suggested Actions (guidance on how you might further look into what might be going on.",
    "Automated Summary": "The Automated Summary is an attempt to provide some context about what information exists about a company. It utilises a Large Language Model (LLM) which is provided context from results generated by searching for the company name and location.",
    "Materiality": "Materiality is an accounting concept that deems an amount, error, or discrepancy as significant if its omission or misstatement could influence the economic decisions of users of financial statements. In simpler terms, if a mistake is large enough to make stakeholders make a different decision than they would have otherwise, then it is considered material.",
    "materiality": "Materiality is an accounting concept that deems an amount, error, or discrepancy as significant if its omission or misstatement could influence the economic decisions of users of financial statements. In simpler terms, if a mistake is large enough to make stakeholders make a different decision than they would have otherwise, then it is considered material.",
        "Risk Index": "The Risk Index is a compound score, based on all the transactional flags, along with interaction terms, and materiality weights. The Risk Index runs from 0-100, and higher scores indicate a higher likelihood of fraud or financial damage associated with a counterparty.",
        "API": "A set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.",
        "DMC": "Dirty Money Constellations (DMCs) are systems of financial structures, often using secrecy jurisdictions and shell companies, designed to hide the origin of illegally obtained funds (dirty money) while maintaining a connection to the rightful owner. These centres facilitate complex transactions to obscure the source of money and are used by criminals and corrupt officials to launder wealth through methods like fake invoices or anonymous trusts. ",
        "admin": "The tenant admin, or just admin, is a user type which has additional permissions to edit scopes, add and remove users, change permissions and access tags, and tweak the algorithms. Typically an organisation will only have 1-3 admin users at a time. ",
        "Viewer": "The Viewer is a tier in the tenant role hierarchy. It is the lowest tier, and they have completely uninvasive permissions. They are only permitted to open and observe radars, but are not able to create, edit or delete radars or scopes themselves. ",
        "Fraud Detective": "A Fraud Detective is a user role, which grants certain permissions, including creating, editing, deleting and uploading to their own scopes, as well as access to view and comment on any scopes they have security access to. "
  };

  // Find all paragraphs and inline elements
  const body = document.querySelector(".content");
  if (!body) return;

  body.innerHTML = body.innerHTML.replace(
    new RegExp("\\b(" + Object.keys(glossary).join("|") + ")\\b", "g"),
    (match) => `<span class="glossary-term" title="${glossary[match]}">${match}</span>`
  );
});
