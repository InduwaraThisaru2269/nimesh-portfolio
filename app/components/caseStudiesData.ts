export const caseStudies = [
  {
    id: "01",
    title: "Optimizing Supply Chain Velocity for a Multi-Site Manufacturer",
    industry: "Discrete Manufacturing / Wholesale Distribution",
    coreStack: ["D365 Business Central", "Power BI", "Power Automate"],
    challenge:
      "The client was managing a $40M inventory across three warehouses using legacy on-premise software and disconnected Excel sheets. This led to a 22% discrepancy in stock levels, frequent production delays, and a complete lack of real-time visibility into COGS.",
    actions: [
      "Led the end-to-end migration to Business Central, implementing advanced Location and Bin mandatory configurations.",
      "Developed a Power Automate workflow that triggered automated low-stock alerts to the procurement team based on dynamic reorder points.",
      "Engineered a Power BI Inventory Executive Dashboard that unified data from Business Central and the production floor to track Days Sales of Inventory.",
    ],
    impacts: [
      {
        metric: "99.2%",
        label: "Inventory Accuracy",
        detail: "Increased from 78% within the first 6 months.",
      },
      {
        metric: "30 hrs",
        label: "Weekly Time Saved",
        detail:
          "Reduced manual data entry through automated bank reconciliations and procurement workflows.",
      },
      {
        metric: "$450k",
        label: "Capital Freed",
        detail:
          "Unlocked stagnant capital by identifying over-stocked non-performing SKUs.",
      },
    ],
  },
  {
    id: "02",
    title: "Harmonizing Global Finance & Reporting for a Multi-Entity Group",
    industry: "Professional Services / International Trade",
    coreStack: ["D365 Business Central", "Microsoft Fabric", "Power BI"],
    challenge:
      "A global organization with five legal entities across different tax jurisdictions was struggling with manual financial consolidation. The month-end close took 15 business days, and the CFO had no way to view consolidated global cash flow without manual intervention and high risk of human error.",
    actions: [
      "Implemented Business Central with a global chart of accounts and automated intercompany postings to eliminate manual journal entries.",
      "Configured automated exchange rate adjustments and multi-currency reporting.",
      "Used Microsoft Fabric to build a unified data lake feeding a Power BI CFO Command Center for real-time consolidated P&L and balance sheet visibility.",
    ],
    impacts: [
      {
        metric: "4 Days",
        label: "Month-End Close",
        detail: "Reduced closing time from 15 business days.",
      },
      {
        metric: "100%",
        label: "Audit Trail Transparency",
        detail:
          "Enabled full digital traceability and reduced external audit costs by 15%.",
      },
      {
        metric: "Instant",
        label: "Liquidity Visibility",
        detail:
          "Enabled executives to view group-wide cash flow immediately for faster decisions.",
      },
    ],
  },
] as const;

export const futureTag =
  "Currently evaluating how similar logic can be applied to SAP S/4HANA Finance and Oracle NetSuite modules.";
