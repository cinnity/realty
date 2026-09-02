(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/PortfolioDashboard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bar-chart-3.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scroll-text.js [app-client] (ecmascript) <export default as ScrollText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
// ---------- design tokens ----------
const T = {
    paper: "#F6F4EF",
    ink: "#1E2A24",
    inkSoft: "#5B6660",
    pine: "#2D5A4A",
    pineSoft: "#E4EEE8",
    brick: "#A63D40",
    brickSoft: "#F5E4E2",
    amber: "#B08D57",
    amberSoft: "#F1E7D3",
    line: "#D8D2C0",
    card: "#FFFFFF"
};
const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

/* mobile-first: base rules target small screens, min-width queries widen the layout up */

.app-shell {
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  margin: 0 auto;
}
@media (min-width: 860px) {
  .app-shell { flex-direction: row; }
}

.app-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 16px 16px 14px;
  border-bottom: 1px solid #D8D2C0;
}
@media (min-width: 640px) {
  .app-header { flex-direction: row; justify-content: space-between; align-items: flex-start; padding: 28px 32px 22px; }
}

.side-nav {
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  gap: 6px;
  padding: 10px 12px;
  border-bottom: 1px solid #D8D2C0;
  scrollbar-width: none;
}
.side-nav::-webkit-scrollbar { display: none; }
@media (min-width: 860px) {
  .side-nav { flex-direction: column; overflow-x: visible; width: 168px; flex-shrink: 0; padding: 28px 0 0; border-bottom: none; }
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  flex: 0 0 auto;
  white-space: nowrap;
  padding: 9px 14px;
  border-radius: 20px;
  border: 1px solid #D8D2C0;
  background: transparent;
  color: #5B6660;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}
.nav-btn.active {
  background: #FFFFFF;
  color: #2D5A4A;
  font-weight: 600;
  border-color: #2D5A4A;
}
@media (min-width: 860px) {
  .nav-btn {
    width: 100%;
    text-align: left;
    border-radius: 8px 0 0 8px;
    padding: 11px 14px 11px 18px;
    margin-left: 10px;
    margin-bottom: 8px;
    border: 1px solid transparent;
  }
  .nav-btn.active {
    margin-left: 0;
    border: 1px solid #D8D2C0;
    box-shadow: inset 3px 0 0 #B08D57;
  }
}

.main-panel {
  flex: 1;
  min-width: 0;
  background: #FFFFFF;
  border: 1px solid #D8D2C0;
  padding: 16px;
  min-height: 400px;
}
@media (min-width: 860px) {
  .main-panel { border-radius: 10px 10px 0 0; padding: 28px; margin-top: 28px; min-height: 560px; }
}

.ledger-columns {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media (min-width: 760px) {
  .ledger-columns { flex-direction: row; gap: 24px; }
}
.ledger-property-list {
  display: flex;
  overflow-x: auto;
  gap: 6px;
  -webkit-overflow-scrolling: touch;
}
@media (min-width: 760px) {
  .ledger-property-list { flex-direction: column; overflow-x: visible; width: 190px; flex-shrink: 0; gap: 4px; }
}

.table-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
`;
// ---------- sample properties ----------
// Loaded from the 2024/2025 cash flow sheet. Tenant names and city for #3
// weren't in the source data — left blank. Lease dates aren't tracked as a
// field yet, so they're summarized here instead:
//   #1  810B Stratford Way: lease 05/07/22–04/30/23 (expired)
//   #2  11510 Little Patuxent Pkwy #407: lease 10/30/22–11/30/23
//   #3  10249 Prince Pl: lease ended 12/31/2023, city not given in source
//   #4  1624 Northbourne Rd: lease 06/15/22–06/30/23; rent was $1,800 Jan–Mar, $1,975 Aug–Dec
//   #5  2061 Alice Ave #203: lease 11/01/21–11/30/22 (expired)
//   #6  2000 Alice Ave #301: lease 07/01/22–07/31/24; ran a small monthly loss (~-$23.81) per source sheet
//   #7  11415 Little Patuxent Pkwy #4-108: lease 01/15/22–12/31/22 (expired); ran a small monthly loss (~-$9.70)
//   #8  5809 Greenlawn Dr: lease 04/01/21–04/30/23; source notes "tax, ins escrowed" — these are the lender-escrowed amounts, not separately billed
//   #9  267 Cobblestone Ct: ~04/2022–04/2023, only 11 of 12 months occupied
//   #10 11410 Little Patuxent Pkwy #1001: no lease dates given in source
const SEED_PROPERTIES = [
    {
        id: 1,
        name: "810B Stratford Way",
        city: "Frederick, MD",
        tenant: "",
        rent: 1800,
        leaseStart: "2022-05-07",
        leaseEnd: "2023-04-30",
        owningEntity: "",
        bedrooms: "",
        sqft: "",
        propertyType: "",
        dateAcquired: "",
        purchasePrice: "",
        renovationSpend: "",
        insuranceCompany: "",
        insurancePolicy: "",
        insuranceExpiration: "",
        rentEstimate: "",
        bathrooms: "",
        tenantPhone: "",
        tenantEmail: "",
        hoaManagementName: "",
        hoaManagementPhone: "",
        hoaManagementWebsite: "",
        annualPropertyTax: "",
        annualLicense: ""
    },
    {
        id: 2,
        name: "11510 Little Patuxent Pkwy #407",
        city: "Columbia, MD",
        tenant: "",
        rent: 2100,
        leaseStart: "2022-10-30",
        leaseEnd: "2023-11-30",
        owningEntity: "",
        bedrooms: "",
        sqft: "",
        propertyType: "",
        dateAcquired: "",
        purchasePrice: "",
        renovationSpend: "",
        insuranceCompany: "",
        insurancePolicy: "",
        insuranceExpiration: "",
        rentEstimate: "",
        bathrooms: "",
        tenantPhone: "",
        tenantEmail: "",
        hoaManagementName: "",
        hoaManagementPhone: "",
        hoaManagementWebsite: "",
        annualPropertyTax: 3022.08,
        annualLicense: ""
    },
    {
        id: 3,
        name: "10249 Prince Pl",
        city: "",
        tenant: "",
        rent: 1700,
        leaseStart: "",
        leaseEnd: "2023-12-31",
        owningEntity: "",
        bedrooms: "",
        sqft: "",
        propertyType: "",
        dateAcquired: "",
        purchasePrice: "",
        renovationSpend: "",
        insuranceCompany: "",
        insurancePolicy: "",
        insuranceExpiration: "",
        rentEstimate: "",
        bathrooms: "",
        tenantPhone: "",
        tenantEmail: "",
        hoaManagementName: "",
        hoaManagementPhone: "",
        hoaManagementWebsite: "",
        annualPropertyTax: "",
        annualLicense: ""
    },
    {
        id: 4,
        name: "1624 Northbourne Rd",
        city: "Baltimore, MD",
        tenant: "",
        rent: 1975,
        leaseStart: "2022-06-15",
        leaseEnd: "2023-06-30",
        owningEntity: "",
        bedrooms: "",
        sqft: "",
        propertyType: "",
        dateAcquired: "",
        purchasePrice: "",
        renovationSpend: "",
        insuranceCompany: "",
        insurancePolicy: "",
        insuranceExpiration: "",
        rentEstimate: "",
        bathrooms: "",
        tenantPhone: "",
        tenantEmail: "",
        hoaManagementName: "",
        hoaManagementPhone: "",
        hoaManagementWebsite: "",
        annualPropertyTax: 3282.96,
        annualLicense: ""
    },
    {
        id: 5,
        name: "2061 Alice Ave #203",
        city: "Oxon Hill, MD",
        tenant: "",
        rent: 1750,
        leaseStart: "2021-11-01",
        leaseEnd: "2022-11-30",
        owningEntity: "",
        bedrooms: "",
        sqft: "",
        propertyType: "",
        dateAcquired: "",
        purchasePrice: "",
        renovationSpend: "",
        insuranceCompany: "",
        insurancePolicy: "",
        insuranceExpiration: "",
        rentEstimate: "",
        bathrooms: "",
        tenantPhone: "",
        tenantEmail: "",
        hoaManagementName: "",
        hoaManagementPhone: "",
        hoaManagementWebsite: "",
        annualPropertyTax: 2830.2,
        annualLicense: ""
    },
    {
        id: 6,
        name: "2000 Alice Ave #301",
        city: "Oxon Hill, MD",
        tenant: "",
        rent: 1775,
        leaseStart: "2022-07-01",
        leaseEnd: "2024-07-31",
        owningEntity: "",
        bedrooms: "",
        sqft: "",
        propertyType: "",
        dateAcquired: "",
        purchasePrice: "",
        renovationSpend: "",
        insuranceCompany: "",
        insurancePolicy: "",
        insuranceExpiration: "",
        rentEstimate: "",
        bathrooms: "",
        tenantPhone: "",
        tenantEmail: "",
        hoaManagementName: "",
        hoaManagementPhone: "",
        hoaManagementWebsite: "",
        annualPropertyTax: 2828.04,
        annualLicense: ""
    },
    {
        id: 7,
        name: "11415 Little Patuxent Pkwy #4-108",
        city: "Columbia, MD",
        tenant: "",
        rent: 1650,
        leaseStart: "2022-01-15",
        leaseEnd: "2022-12-31",
        owningEntity: "",
        bedrooms: "",
        sqft: "",
        propertyType: "",
        dateAcquired: "",
        purchasePrice: "",
        renovationSpend: "",
        insuranceCompany: "",
        insurancePolicy: "",
        insuranceExpiration: "",
        rentEstimate: "",
        bathrooms: "",
        tenantPhone: "",
        tenantEmail: "",
        hoaManagementName: "",
        hoaManagementPhone: "",
        hoaManagementWebsite: "",
        annualPropertyTax: 2379.84,
        annualLicense: ""
    },
    {
        id: 8,
        name: "5809 Greenlawn Dr",
        city: "Bethesda, MD",
        tenant: "",
        rent: 4200,
        leaseStart: "2021-04-01",
        leaseEnd: "2023-04-30",
        owningEntity: "",
        bedrooms: "",
        sqft: "",
        propertyType: "",
        dateAcquired: "",
        purchasePrice: "",
        renovationSpend: "",
        insuranceCompany: "",
        insurancePolicy: "",
        insuranceExpiration: "",
        rentEstimate: "",
        bathrooms: "",
        tenantPhone: "",
        tenantEmail: "",
        hoaManagementName: "",
        hoaManagementPhone: "",
        hoaManagementWebsite: "",
        annualPropertyTax: 7883.76,
        annualLicense: ""
    },
    {
        id: 9,
        name: "267 Cobblestone Ct",
        city: "Schaumburg, IL",
        tenant: "",
        rent: 2700,
        leaseStart: "2022-04-01",
        leaseEnd: "2023-04-30",
        owningEntity: "",
        bedrooms: "",
        sqft: "",
        propertyType: "",
        dateAcquired: "",
        purchasePrice: "",
        renovationSpend: "",
        insuranceCompany: "",
        insurancePolicy: "",
        insuranceExpiration: "",
        rentEstimate: "",
        bathrooms: "",
        tenantPhone: "",
        tenantEmail: "",
        hoaManagementName: "",
        hoaManagementPhone: "",
        hoaManagementWebsite: "",
        annualPropertyTax: 2518.2,
        annualLicense: ""
    },
    {
        id: 10,
        name: "11410 Little Patuxent Pkwy #1001",
        city: "Columbia, MD",
        tenant: "",
        rent: 1900,
        leaseStart: "",
        leaseEnd: "",
        owningEntity: "",
        bedrooms: "",
        sqft: "",
        propertyType: "",
        dateAcquired: "",
        purchasePrice: "",
        renovationSpend: "",
        insuranceCompany: "",
        insurancePolicy: "",
        insuranceExpiration: "",
        rentEstimate: "",
        bathrooms: "",
        tenantPhone: "",
        tenantEmail: "",
        hoaManagementName: "",
        hoaManagementPhone: "",
        hoaManagementWebsite: "",
        annualPropertyTax: 3034.2,
        annualLicense: ""
    }
];
// No transaction history was in the source sheet (it's an annual summary,
// not a payment log) — starting clean rather than inventing a fake history.
const SEED_LEDGER = [];
// License fees were the one clearly recurring cost that didn't fit the
// Reserves categories (Property Tax / Insurance / HOA / Other) — logged
// here as a single representative annual entry per property.
const SEED_EXPENSES = [
    {
        id: 1,
        propertyId: 2,
        category: "Other",
        amount: 93.85,
        date: "2025-01-01",
        note: "Rental license fee"
    },
    {
        id: 2,
        propertyId: 5,
        category: "Other",
        amount: 126.5,
        date: "2025-01-01",
        note: "Rental license fee"
    },
    {
        id: 3,
        propertyId: 6,
        category: "Other",
        amount: 126.5,
        date: "2025-01-01",
        note: "Rental license fee"
    },
    {
        id: 4,
        propertyId: 7,
        category: "Other",
        amount: 93.85,
        date: "2025-01-01",
        note: "Rental license fee"
    },
    {
        id: 5,
        propertyId: 8,
        category: "Other",
        amount: 140,
        date: "2025-01-01",
        note: "Rental license fee"
    },
    {
        id: 6,
        propertyId: 9,
        category: "Other",
        amount: 65,
        date: "2025-01-01",
        note: "Rental license fee"
    },
    {
        id: 7,
        propertyId: 10,
        category: "Other",
        amount: 93.85,
        date: "2025-01-01",
        note: "Rental license fee"
    }
];
const CATEGORIES = [
    "Maintenance",
    "Repairs",
    "Insurance",
    "Property Tax",
    "Legal",
    "Utilities",
    "Other"
];
const PIE_COLORS = [
    T.pine,
    T.amber,
    T.brick,
    "#5B6660",
    "#7A9E8E",
    "#C9A26A",
    "#8E5B5D"
];
const UTILITY_TYPES = [
    "Electric",
    "Gas",
    "Water/Sewer",
    "Trash",
    "Internet"
];
// no utility account numbers were in the source sheet
const SEED_UTILITIES = {};
const ESCROW_CATEGORIES = [
    "Property Tax",
    "Insurance",
    "HOA",
    "Other"
];
// monthly rates from the source sheet, logged as one reference contribution
// per category per property (not a full contribution history — just the
// known current rate to start from). Two rows (#1, #3) had ambiguous
// columns after Insurance — logged as "Other" with a note rather than
// guessing which was HOA vs Property Tax.
const SEED_ESCROW = {
    1: [
        {
            id: 1,
            type: "contribution",
            category: "Insurance",
            amount: 23.4,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 2,
            type: "contribution",
            category: "Other",
            amount: 465.7,
            date: "2025-01-01",
            note: "HOA + Property Tax combined (~$204 + $261.70) — source columns unclear, please split"
        }
    ],
    2: [
        {
            id: 1,
            type: "contribution",
            category: "Insurance",
            amount: 32.49,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 2,
            type: "contribution",
            category: "HOA",
            amount: 372.73,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 3,
            type: "contribution",
            category: "Property Tax",
            amount: 251.84,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 4,
            type: "contribution",
            category: "Other",
            amount: 43.77,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        }
    ],
    3: [
        {
            id: 1,
            type: "contribution",
            category: "Insurance",
            amount: 28.1,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 2,
            type: "contribution",
            category: "Other",
            amount: 586.39,
            date: "2025-01-01",
            note: "HOA + Property Tax combined (~$365 + $221.39) — source columns unclear, please split"
        }
    ],
    4: [
        {
            id: 1,
            type: "contribution",
            category: "Insurance",
            amount: 63.98,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 2,
            type: "contribution",
            category: "HOA",
            amount: 50,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 3,
            type: "contribution",
            category: "Property Tax",
            amount: 273.58,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        }
    ],
    5: [
        {
            id: 1,
            type: "contribution",
            category: "Insurance",
            amount: 60.91,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 2,
            type: "contribution",
            category: "HOA",
            amount: 340,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 3,
            type: "contribution",
            category: "Property Tax",
            amount: 235.85,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        }
    ],
    6: [
        {
            id: 1,
            type: "contribution",
            category: "Insurance",
            amount: 37.58,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 2,
            type: "contribution",
            category: "HOA",
            amount: 340,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 3,
            type: "contribution",
            category: "Property Tax",
            amount: 235.67,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        }
    ],
    7: [
        {
            id: 1,
            type: "contribution",
            category: "Insurance",
            amount: 35.93,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 2,
            type: "contribution",
            category: "HOA",
            amount: 380.23,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 3,
            type: "contribution",
            category: "Property Tax",
            amount: 198.32,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 4,
            type: "contribution",
            category: "Other",
            amount: 45.22,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        }
    ],
    8: [
        {
            id: 1,
            type: "contribution",
            category: "Insurance",
            amount: 228.5,
            date: "2025-01-01",
            note: "Escrowed with mortgage — per source sheet note"
        },
        {
            id: 2,
            type: "contribution",
            category: "Property Tax",
            amount: 656.98,
            date: "2025-01-01",
            note: "Escrowed with mortgage — per source sheet note"
        }
    ],
    9: [
        {
            id: 1,
            type: "contribution",
            category: "Insurance",
            amount: 25.75,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 2,
            type: "contribution",
            category: "HOA",
            amount: 322.76,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 3,
            type: "contribution",
            category: "Property Tax",
            amount: 209.85,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        }
    ],
    10: [
        {
            id: 1,
            type: "contribution",
            category: "Insurance",
            amount: 34.41,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 2,
            type: "contribution",
            category: "HOA",
            amount: 405.76,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 3,
            type: "contribution",
            category: "Property Tax",
            amount: 252.85,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        },
        {
            id: 4,
            type: "contribution",
            category: "Other",
            amount: 43.77,
            date: "2025-01-01",
            note: "Monthly rate per source sheet"
        }
    ]
};
const DEFAULT_MORTGAGE = {
    hasMortgage: false,
    lender: "",
    loanNumber: "",
    rate: "",
    balance: "",
    monthlyPayment: ""
};
// monthly P&I from the source sheet. Lender, loan number, rate, and loan
// balance weren't in the sheet — left blank for you to fill in on each
// property's ledger page.
const SEED_MORTGAGES = {
    2: {
        hasMortgage: true,
        lender: "",
        loanNumber: "",
        rate: "",
        balance: "",
        monthlyPayment: "1399.17"
    },
    4: {
        hasMortgage: true,
        lender: "",
        loanNumber: "",
        rate: "",
        balance: "",
        monthlyPayment: "1587.44"
    },
    5: {
        hasMortgage: true,
        lender: "",
        loanNumber: "",
        rate: "",
        balance: "",
        monthlyPayment: "1113.24"
    },
    6: {
        hasMortgage: true,
        lender: "",
        loanNumber: "",
        rate: "",
        balance: "",
        monthlyPayment: "1185.56"
    },
    7: {
        hasMortgage: true,
        lender: "",
        loanNumber: "",
        rate: "",
        balance: "",
        monthlyPayment: "1000.00"
    },
    8: {
        hasMortgage: true,
        lender: "",
        loanNumber: "",
        rate: "",
        balance: "",
        monthlyPayment: "1974.52"
    },
    9: {
        hasMortgage: true,
        lender: "",
        loanNumber: "",
        rate: "",
        balance: "",
        monthlyPayment: "980.37"
    },
    10: {
        hasMortgage: true,
        lender: "",
        loanNumber: "",
        rate: "",
        balance: "",
        monthlyPayment: "1064.00"
    }
};
// no market values were in the source sheet — add these on each property's ledger page
const SEED_MARKET_VALUES = {};
const money = (n)=>n.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    });
const STORAGE_KEY = "portfolio-data";
// today's date, computed from local calendar date components directly
// (avoiding a UTC round-trip, which would shift the date by one near midnight
// in timezones behind UTC — the classic source of off-by-a-day bugs)
function getTodayISO() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
}
const TODAY = getTodayISO();
// service provider directory — plumbers, HVAC techs, handymen, etc.
const SEED_PROVIDERS = [
    {
        id: 1,
        name: "Metro HVAC Services",
        trade: "HVAC",
        phone: "(301) 555-0142",
        email: "service@metrohvac.com",
        notes: "Responsive, does most of our HVAC work"
    },
    {
        id: 2,
        name: "Reyes Plumbing Co.",
        trade: "Plumbing",
        phone: "(301) 555-0198",
        email: "info@reyesplumbing.com",
        notes: ""
    },
    {
        id: 3,
        name: "Bright Spark Electric",
        trade: "Electrical",
        phone: "(240) 555-0176",
        email: "",
        notes: "Licensed, insured — used for panel upgrades"
    },
    {
        id: 4,
        name: "Dan's Handyman Service",
        trade: "General Handyman",
        phone: "(301) 555-0210",
        email: "dan@dansfixit.com",
        notes: "Good for small repairs, not licensed for major work"
    },
    {
        id: 5,
        name: "ClearView Roofing",
        trade: "Roofing",
        phone: "(410) 555-0133",
        email: "contact@clearviewroof.com",
        notes: ""
    }
];
// equipment tracked per property, for age and replacement planning
const SEED_EQUIPMENT = {
    1: [
        {
            id: 1,
            type: "HVAC",
            makeModel: "Carrier 24ACC6",
            installDate: "2016-05-10",
            lifespan: 15
        },
        {
            id: 2,
            type: "Water Heater",
            makeModel: "Rheem 50 gal",
            installDate: "2019-02-20",
            lifespan: 10
        }
    ],
    4: [
        {
            id: 1,
            type: "HVAC",
            makeModel: "Trane XR16",
            installDate: "2021-06-01",
            lifespan: 16
        },
        {
            id: 2,
            type: "Roof",
            makeModel: "Asphalt shingle",
            installDate: "2010-08-15",
            lifespan: 20
        }
    ],
    5: [
        {
            id: 1,
            type: "HVAC",
            makeModel: "Goodman GSX13",
            installDate: "2011-04-12",
            lifespan: 14
        },
        {
            id: 2,
            type: "Water Heater",
            makeModel: "AO Smith 40 gal",
            installDate: "2014-09-01",
            lifespan: 10
        }
    ],
    8: [
        {
            id: 1,
            type: "HVAC",
            makeModel: "Lennox XC16",
            installDate: "2022-03-18",
            lifespan: 16
        }
    ]
};
// scheduled and completed maintenance visits
const SEED_MAINTENANCE = [
    {
        id: 1,
        propertyId: 1,
        equipmentId: 1,
        providerId: 1,
        description: "Annual HVAC tune-up",
        status: "completed",
        scheduledDate: "2026-06-15",
        completedDate: "2026-06-15",
        cost: 165,
        note: ""
    },
    {
        id: 2,
        propertyId: 5,
        equipmentId: 1,
        providerId: 1,
        description: "HVAC not cooling — diagnostic",
        status: "scheduled",
        scheduledDate: "2026-09-04",
        completedDate: "",
        cost: "",
        note: "Tenant available after 4pm weekdays"
    },
    {
        id: 3,
        propertyId: 2,
        equipmentId: null,
        providerId: 2,
        description: "Kitchen faucet leak",
        status: "scheduled",
        scheduledDate: "2026-09-02",
        completedDate: "",
        cost: "",
        note: "Confirmed access with tenant for 10am"
    },
    {
        id: 4,
        propertyId: 4,
        equipmentId: 2,
        providerId: 5,
        description: "Roof inspection — approaching expected lifespan",
        status: "scheduled",
        scheduledDate: "2026-09-20",
        completedDate: "",
        cost: "",
        note: ""
    },
    {
        id: 5,
        propertyId: 8,
        equipmentId: null,
        providerId: 4,
        description: "Replace door lock",
        status: "completed",
        scheduledDate: "2026-08-05",
        completedDate: "2026-08-05",
        cost: 85,
        note: ""
    }
];
// compliance reminders — property-specific (licenses, insurance) and entity-wide (LLC filings)
// propertyId: null means it applies to the business as a whole, not one property
const SEED_COMPLIANCE = [
    {
        id: 1,
        propertyId: 3,
        itemType: "Rental License",
        description: "Annual rental license renewal, Montgomery County",
        dueDate: "2026-08-20",
        recurrence: "annual",
        status: "upcoming"
    },
    {
        id: 2,
        propertyId: 5,
        itemType: "Insurance Renewal",
        description: "Landlord policy renewal — Travelers",
        dueDate: "2026-09-15",
        recurrence: "annual",
        status: "upcoming"
    },
    {
        id: 3,
        propertyId: 1,
        itemType: "Rental License",
        description: "Annual rental license renewal, Montgomery County",
        dueDate: "2027-03-15",
        recurrence: "annual",
        status: "upcoming"
    },
    {
        id: 4,
        propertyId: 8,
        itemType: "Lead Paint Certification",
        description: "Required for pre-1978 construction",
        dueDate: "2027-01-10",
        recurrence: "annual",
        status: "upcoming"
    },
    {
        id: 5,
        propertyId: 4,
        itemType: "Insurance Renewal",
        description: "Landlord policy renewal — State Farm",
        dueDate: "2026-12-01",
        recurrence: "annual",
        status: "upcoming"
    },
    {
        id: 6,
        propertyId: null,
        itemType: "LLC Annual Report",
        description: "Maryland SDAT annual report filing",
        dueDate: "2027-04-30",
        recurrence: "annual",
        status: "upcoming"
    },
    {
        id: 7,
        propertyId: 10,
        itemType: "Rental License",
        description: "Annual rental license renewal, Rockville",
        dueDate: "2026-10-01",
        recurrence: "annual",
        status: "upcoming"
    }
];
function balanceFor(ledger, propertyId) {
    return ledger.filter((e)=>e.propertyId === propertyId).reduce((s, e)=>s + (e.type === "charge" ? e.amount : -e.amount), 0);
}
function escrowBalanceFor(escrow, propertyId) {
    return (escrow[propertyId] || []).reduce((s, e)=>s + (e.type === "contribution" ? e.amount : -e.amount), 0);
}
// current monthly rate per category, taken from the most recent contribution
// logged for that category (contributions represent "what's set aside this
// month," so the latest one is the best read of today's rate). Also returns
// the note on the latest "Other" entry, so it can be shown as "Other (note)".
function escrowMonthlyRates(escrow, propertyId) {
    const entries = (escrow[propertyId] || []).filter((e)=>e.type === "contribution");
    const rates = {
        "Property Tax": 0,
        Insurance: 0,
        HOA: 0,
        Other: 0
    };
    let otherNote = "";
    [
        "Property Tax",
        "Insurance",
        "HOA",
        "Other"
    ].forEach((cat)=>{
        const forCat = entries.filter((e)=>e.category === cat).sort((a, b)=>a.date.localeCompare(b.date));
        if (forCat.length) {
            rates[cat] = forCat[forCat.length - 1].amount;
            if (cat === "Other") otherNote = forCat[forCat.length - 1].note || "";
        }
    });
    return {
        ...rates,
        otherNote
    };
}
// "Other" entries show their note in parentheses (e.g. "Other (Columbia Assoc. fees)"); everything else shows plain
function escrowCategoryLabel(entry) {
    if (entry.category === "Other" && entry.note) return `Other (${entry.note})`;
    return entry.category;
}
function equipmentAgeYears(installDate) {
    const install = new Date(installDate);
    const today = new Date(TODAY);
    return (today - install) / (1000 * 60 * 60 * 24 * 365.25);
}
function equipmentStatus(age, lifespan) {
    if (age >= lifespan) return {
        label: "Past expected life",
        bg: T.brickSoft,
        fg: T.brick
    };
    if (age >= lifespan - 2) return {
        label: "Plan replacement soon",
        bg: T.amberSoft,
        fg: "#8A6A2F"
    };
    return {
        label: "Within expected life",
        bg: T.pineSoft,
        fg: T.pine
    };
}
function daysUntil(dateStr) {
    const due = new Date(dateStr);
    const today = new Date(TODAY);
    return Math.round((due - today) / (1000 * 60 * 60 * 24));
}
function complianceUrgency(item) {
    if (item.status === "completed") return {
        label: "Completed",
        bg: "#EFEBE1",
        fg: T.inkSoft
    };
    const d = daysUntil(item.dueDate);
    if (d < 0) return {
        label: `Overdue ${Math.abs(d)}d`,
        bg: T.brickSoft,
        fg: T.brick
    };
    if (d <= 30) return {
        label: `Due in ${d}d`,
        bg: T.amberSoft,
        fg: "#8A6A2F"
    };
    return {
        label: `Due in ${d}d`,
        bg: T.pineSoft,
        fg: T.pine
    };
}
function nextDueDate(dateStr, recurrence) {
    // pure numeric arithmetic on the y/m/d components — avoids the bug where
    // new Date(dateStr) parses as UTC midnight but setMonth/setFullYear mutate
    // in local time, which can shift the result by a day depending on timezone
    let [y, m, d] = dateStr.split("-").map(Number);
    if (recurrence === "quarterly") m += 3;
    else if (recurrence === "semi_annual") m += 6;
    else y += 1; // default annual
    y += Math.floor((m - 1) / 12);
    m = ((m - 1) % 12 + 12) % 12 + 1;
    const daysInTargetMonth = new Date(y, m, 0).getDate(); // day 0 of next month = last day of this month
    d = Math.min(d, daysInTargetMonth);
    return `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}
// tiered lease-expiration reminder: flags at 90, 60, and 30 days out, then overdue once past end date
function leaseUrgency(leaseEnd) {
    if (!leaseEnd) return null;
    const d = daysUntil(leaseEnd);
    if (d < 0) return {
        label: `Lease expired ${Math.abs(d)}d ago`,
        bg: T.brickSoft,
        fg: T.brick,
        tier: "expired"
    };
    if (d <= 30) return {
        label: `Lease expires in ${d}d`,
        bg: T.brickSoft,
        fg: T.brick,
        tier: "30"
    };
    if (d <= 60) return {
        label: `Lease expires in ${d}d`,
        bg: T.amberSoft,
        fg: "#8A6A2F",
        tier: "60"
    };
    if (d <= 90) return {
        label: `Lease expires in ${d}d`,
        bg: T.amberSoft,
        fg: "#8A6A2F",
        tier: "90"
    };
    return {
        label: `Lease renews/expires ${leaseEnd}`,
        bg: T.pineSoft,
        fg: T.pine,
        tier: "ok"
    };
}
// same tiered 90/60/30-day pattern as leaseUrgency, applied to insurance policy expiration
function insuranceUrgency(expirationDate) {
    if (!expirationDate) return null;
    const d = daysUntil(expirationDate);
    if (d < 0) return {
        label: `Insurance expired ${Math.abs(d)}d ago`,
        bg: T.brickSoft,
        fg: T.brick,
        tier: "expired"
    };
    if (d <= 30) return {
        label: `Insurance expires in ${d}d`,
        bg: T.brickSoft,
        fg: T.brick,
        tier: "30"
    };
    if (d <= 60) return {
        label: `Insurance expires in ${d}d`,
        bg: T.amberSoft,
        fg: "#8A6A2F",
        tier: "60"
    };
    if (d <= 90) return {
        label: `Insurance expires in ${d}d`,
        bg: T.amberSoft,
        fg: "#8A6A2F",
        tier: "90"
    };
    return {
        label: `Insurance renews/expires ${expirationDate}`,
        bg: T.pineSoft,
        fg: T.pine,
        tier: "ok"
    };
}
function statusFor(balance, rent) {
    if (balance <= 0) return {
        label: "Current",
        bg: T.pineSoft,
        fg: T.pine
    };
    if (balance < rent) return {
        label: `Owes ${money(balance)}`,
        bg: T.amberSoft,
        fg: "#8A6A2F"
    };
    return {
        label: `Behind ${money(balance)}`,
        bg: T.brickSoft,
        fg: T.brick
    };
}
// pulls together value, debt, rent, and recurring-cost data into a full
// monthly P&L for one property, plus investment-performance metrics
function propertyPerformance(property, { marketValues, mortgages, expenses, escrow }) {
    const marketValue = Number(marketValues[property.id]) || 0;
    const m = mortgages[property.id];
    const loanBalance = m && m.hasMortgage ? Number(m.balance) || 0 : 0;
    const debtService = m && m.hasMortgage ? Number(m.monthlyPayment) || 0 : 0;
    const equity = marketValue - loanBalance;
    const annualRent = property.rent * 12;
    const expensesLogged = expenses.filter((e)=>e.propertyId === property.id).reduce((s, e)=>s + e.amount, 0);
    const noi = annualRent - expensesLogged; // approximate — based on expenses on file, not a full-year actual
    const capRate = marketValue > 0 ? noi / marketValue * 100 : 0;
    const grossYield = marketValue > 0 ? annualRent / marketValue * 100 : 0;
    const rates = escrowMonthlyRates(escrow, property.id);
    const monthlyPropertyTax = (Number(property.annualPropertyTax) || 0) / 12;
    const totalMonthlyExpenses = monthlyPropertyTax + rates.Insurance + rates.HOA + rates.Other + debtService;
    const netMonthlyIncome = property.rent - totalMonthlyExpenses;
    return {
        marketValue,
        loanBalance,
        equity,
        debtService,
        expensesLogged,
        capRate,
        grossYield,
        propertyTax: monthlyPropertyTax,
        insurance: rates.Insurance,
        hoa: rates.HOA,
        other: rates.Other,
        otherNote: rates.otherNote,
        totalMonthlyExpenses,
        netMonthlyIncome,
        estMonthlyCashFlow: netMonthlyIncome
    };
}
function PortfolioDashboard() {
    _s();
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_PROPERTIES);
    const [newPropertyForm, setNewPropertyForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        city: "",
        tenant: "",
        rent: ""
    });
    const updateProperty = (id, field, value)=>setProperties((ps)=>ps.map((p)=>p.id === id ? {
                    ...p,
                    [field]: field === "rent" ? Number(value) || 0 : value
                } : p));
    const addProperty = ()=>{
        if (!newPropertyForm.name) return;
        const id = Date.now();
        setProperties((ps)=>[
                ...ps,
                {
                    id,
                    name: newPropertyForm.name,
                    city: newPropertyForm.city,
                    tenant: newPropertyForm.tenant,
                    rent: Number(newPropertyForm.rent) || 0,
                    leaseStart: "",
                    leaseEnd: "",
                    owningEntity: "",
                    bedrooms: "",
                    bathrooms: "",
                    sqft: "",
                    propertyType: "",
                    dateAcquired: "",
                    purchasePrice: "",
                    renovationSpend: "",
                    insuranceCompany: "",
                    insurancePolicy: "",
                    insuranceExpiration: "",
                    rentEstimate: "",
                    tenantPhone: "",
                    tenantEmail: "",
                    hoaManagementName: "",
                    hoaManagementPhone: "",
                    hoaManagementWebsite: "",
                    annualPropertyTax: "",
                    annualLicense: ""
                }
            ]);
        setNewPropertyForm({
            name: "",
            city: "",
            tenant: "",
            rent: ""
        });
    };
    // removing a property cleans up everything that referenced it, so nothing is left orphaned
    const removeProperty = (id)=>{
        setProperties((ps)=>ps.filter((p)=>p.id !== id));
        setLedger((ls)=>ls.filter((e)=>e.propertyId !== id));
        setExpenses((es)=>es.filter((e)=>e.propertyId !== id));
        setUtilities((u)=>{
            const { [id]: _drop, ...rest } = u;
            return rest;
        });
        setEscrow((es)=>{
            const { [id]: _drop, ...rest } = es;
            return rest;
        });
        setMortgages((m)=>{
            const { [id]: _drop, ...rest } = m;
            return rest;
        });
        setMarketValues((mv)=>{
            const { [id]: _drop, ...rest } = mv;
            return rest;
        });
        setEquipment((eq)=>{
            const { [id]: _drop, ...rest } = eq;
            return rest;
        });
        setMaintenance((ms)=>ms.filter((m)=>m.propertyId !== id));
        setCompliance((cs)=>cs.filter((c)=>c.propertyId !== id));
        if (selectedId === id) {
            const remaining = properties.filter((p)=>p.id !== id);
            if (remaining[0]) setSelectedId(remaining[0].id);
        }
    };
    const [ledger, setLedger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_LEDGER);
    const [expenses, setExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_EXPENSES);
    const [utilities, setUtilities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_UTILITIES);
    const [escrow, setEscrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_ESCROW);
    const [mortgages, setMortgages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_MORTGAGES);
    const [marketValues, setMarketValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_MARKET_VALUES);
    const [providers, setProviders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_PROVIDERS);
    const [equipment, setEquipment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_EQUIPMENT);
    const [maintenance, setMaintenance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_MAINTENANCE);
    const [compliance, setCompliance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_COMPLIANCE);
    const [annualExpenses, setAnnualExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [taxRate, setTaxRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("22");
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_PROPERTIES[0].id);
    const [ledgerForm, setLedgerForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: "payment",
        amount: "",
        date: "",
        note: ""
    });
    const [expenseForm, setExpenseForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        propertyId: SEED_PROPERTIES[0].id,
        category: CATEGORIES[0],
        vendor: "",
        amount: "",
        date: "",
        note: ""
    });
    const [utilityForm, setUtilityForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: UTILITY_TYPES[0],
        provider: "",
        account: "",
        payer: "Tenant"
    });
    const [escrowForm, setEscrowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: "contribution",
        category: ESCROW_CATEGORIES[0],
        amount: "",
        date: "",
        note: ""
    });
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveStatus, setSaveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle"); // idle | saving | saved | error
    const hasLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const addEscrowEntry = ()=>{
        if (!escrowForm.amount || !escrowForm.date) return;
        setEscrow((es)=>({
                ...es,
                [selectedId]: [
                    ...es[selectedId] || [],
                    {
                        id: Date.now(),
                        type: escrowForm.type,
                        category: escrowForm.category,
                        amount: Number(escrowForm.amount),
                        date: escrowForm.date,
                        note: escrowForm.note || (escrowForm.type === "contribution" ? "Monthly set-aside" : "Disbursement")
                    }
                ]
            }));
        setEscrowForm({
            type: "contribution",
            category: ESCROW_CATEGORIES[0],
            amount: "",
            date: "",
            note: ""
        });
    };
    const removeEscrowEntry = (propertyId, id)=>setEscrow((es)=>({
                ...es,
                [propertyId]: es[propertyId].filter((x)=>x.id !== id)
            }));
    // quick-edit from the P&L box: posts a new dated contribution so the rate
    // updates going forward while keeping the prior rate in the Reserves history
    const setCurrentRate = (propertyId, category, amount, note)=>setEscrow((es)=>({
                ...es,
                [propertyId]: [
                    ...es[propertyId] || [],
                    {
                        id: Date.now(),
                        type: "contribution",
                        category,
                        amount: Number(amount) || 0,
                        date: TODAY,
                        note: note !== undefined ? note : "Rate updated"
                    }
                ]
            }));
    const updateMortgage = (propertyId, field, value)=>setMortgages((m)=>({
                ...m,
                [propertyId]: {
                    ...m[propertyId] || DEFAULT_MORTGAGE,
                    [field]: value
                }
            }));
    const updateMarketValue = (propertyId, value)=>setMarketValues((mv)=>({
                ...mv,
                [propertyId]: value
            }));
    const [providerForm, setProviderForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        trade: "",
        phone: "",
        email: "",
        notes: ""
    });
    const addProvider = ()=>{
        if (!providerForm.name.trim()) return;
        setProviders((ps)=>[
                ...ps,
                {
                    id: Date.now(),
                    ...providerForm,
                    trade: providerForm.trade.trim() || "General"
                }
            ]);
        setProviderForm({
            name: "",
            trade: "",
            phone: "",
            email: "",
            notes: ""
        });
    };
    const removeProvider = (id)=>setProviders((ps)=>ps.filter((p)=>p.id !== id));
    const [equipmentForm, setEquipmentForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: "HVAC",
        makeModel: "",
        installDate: "",
        lifespan: ""
    });
    const addEquipment = (propertyId)=>{
        if (!equipmentForm.installDate || !equipmentForm.lifespan) return;
        setEquipment((eq)=>({
                ...eq,
                [propertyId]: [
                    ...eq[propertyId] || [],
                    {
                        id: Date.now(),
                        type: equipmentForm.type,
                        makeModel: equipmentForm.makeModel,
                        installDate: equipmentForm.installDate,
                        lifespan: Number(equipmentForm.lifespan)
                    }
                ]
            }));
        setEquipmentForm({
            type: "HVAC",
            makeModel: "",
            installDate: "",
            lifespan: ""
        });
    };
    const removeEquipment = (propertyId, id)=>setEquipment((eq)=>({
                ...eq,
                [propertyId]: eq[propertyId].filter((x)=>x.id !== id)
            }));
    const [maintenanceForm, setMaintenanceForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        propertyId: SEED_PROPERTIES[0].id,
        equipmentId: "",
        providerId: "",
        description: "",
        scheduledDate: "",
        note: ""
    });
    const addMaintenance = ()=>{
        if (!maintenanceForm.description || !maintenanceForm.scheduledDate) return;
        setMaintenance((ms)=>[
                ...ms,
                {
                    id: Date.now(),
                    propertyId: Number(maintenanceForm.propertyId),
                    equipmentId: maintenanceForm.equipmentId ? Number(maintenanceForm.equipmentId) : null,
                    providerId: maintenanceForm.providerId ? Number(maintenanceForm.providerId) : null,
                    description: maintenanceForm.description,
                    status: "scheduled",
                    scheduledDate: maintenanceForm.scheduledDate,
                    completedDate: "",
                    cost: "",
                    note: maintenanceForm.note
                }
            ]);
        setMaintenanceForm({
            propertyId: SEED_PROPERTIES[0].id,
            equipmentId: "",
            providerId: "",
            description: "",
            scheduledDate: "",
            note: ""
        });
    };
    const updateMaintenanceStatus = (id, status)=>setMaintenance((ms)=>ms.map((m)=>m.id === id ? {
                    ...m,
                    status,
                    completedDate: status === "completed" ? TODAY : m.completedDate
                } : m));
    const removeMaintenance = (id)=>setMaintenance((ms)=>ms.filter((m)=>m.id !== id));
    const [complianceForm, setComplianceForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        propertyId: "",
        itemType: "Rental License",
        description: "",
        dueDate: "",
        recurrence: "annual",
        amount: ""
    });
    const addComplianceEntry = (propertyId, fields)=>{
        if (!fields.dueDate) return;
        setCompliance((cs)=>[
                ...cs,
                {
                    id: Date.now(),
                    propertyId,
                    itemType: fields.itemType,
                    description: fields.description,
                    dueDate: fields.dueDate,
                    recurrence: fields.recurrence,
                    amount: fields.amount ? Number(fields.amount) : null,
                    status: "upcoming"
                }
            ]);
    };
    const addCompliance = ()=>{
        addComplianceEntry(complianceForm.propertyId ? Number(complianceForm.propertyId) : null, complianceForm);
        setComplianceForm({
            propertyId: "",
            itemType: "Rental License",
            description: "",
            dueDate: "",
            recurrence: "annual",
            amount: ""
        });
    };
    const markComplianceDone = (id, renew)=>setCompliance((cs)=>cs.map((c)=>{
                if (c.id !== id) return c;
                if (renew && c.recurrence !== "none") {
                    return {
                        ...c,
                        dueDate: nextDueDate(c.dueDate, c.recurrence),
                        status: "upcoming"
                    };
                }
                return {
                    ...c,
                    status: "completed"
                };
            }));
    const removeCompliance = (id)=>setCompliance((cs)=>cs.filter((c)=>c.id !== id));
    const addAnnualExpense = (propertyId, description, amount)=>{
        if (!description || !amount) return;
        setAnnualExpenses((ae)=>({
                ...ae,
                [propertyId]: [
                    ...ae[propertyId] || [],
                    {
                        id: Date.now(),
                        description,
                        amount: Number(amount) || 0
                    }
                ]
            }));
    };
    const removeAnnualExpense = (propertyId, id)=>setAnnualExpenses((ae)=>({
                ...ae,
                [propertyId]: (ae[propertyId] || []).filter((x)=>x.id !== id)
            }));
    // load saved data once on mount; fall back to seed data if nothing saved yet
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioDashboard.useEffect": ()=>{
            ({
                "PortfolioDashboard.useEffect": async ()=>{
                    try {
                        const res = await fetch("/api/portfolio");
                        const json = await res.json();
                        const data = json?.data || {};
                        if (data.properties) setProperties(data.properties);
                        if (data.ledger) setLedger(data.ledger);
                        if (data.expenses) setExpenses(data.expenses);
                        if (data.utilities) setUtilities(data.utilities);
                        if (data.escrow) setEscrow(data.escrow);
                        if (data.mortgages) setMortgages(data.mortgages);
                        if (data.marketValues) setMarketValues(data.marketValues);
                        if (data.providers) setProviders(data.providers);
                        if (data.equipment) setEquipment(data.equipment);
                        if (data.maintenance) setMaintenance(data.maintenance);
                        if (data.compliance) setCompliance(data.compliance);
                        if (data.annualExpenses) setAnnualExpenses(data.annualExpenses);
                        if (data.taxRate) setTaxRate(data.taxRate);
                    } catch (err) {
                        // no saved data yet, or a read error — start from seed data
                        console.log("No saved portfolio data found, starting fresh:", err);
                    } finally{
                        hasLoadedRef.current = true;
                        setLoaded(true);
                    }
                }
            })["PortfolioDashboard.useEffect"]();
        }
    }["PortfolioDashboard.useEffect"], []);
    // persist ledger, expenses, and utilities together whenever any of them change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioDashboard.useEffect": ()=>{
            if (!hasLoadedRef.current) return; // skip the initial render before load completes
            setSaveStatus("saving");
            const timer = setTimeout({
                "PortfolioDashboard.useEffect.timer": async ()=>{
                    try {
                        const res = await fetch("/api/portfolio", {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                properties,
                                ledger,
                                expenses,
                                utilities,
                                escrow,
                                mortgages,
                                marketValues,
                                providers,
                                equipment,
                                maintenance,
                                compliance,
                                annualExpenses,
                                taxRate
                            })
                        });
                        const json = await res.json();
                        setSaveStatus(json?.ok ? "saved" : "error");
                    } catch (err) {
                        console.error("Failed to save portfolio data:", err);
                        setSaveStatus("error");
                    }
                }
            }["PortfolioDashboard.useEffect.timer"], 500); // debounce so rapid edits don't fire a save per keystroke
            return ({
                "PortfolioDashboard.useEffect": ()=>clearTimeout(timer)
            })["PortfolioDashboard.useEffect"];
        }
    }["PortfolioDashboard.useEffect"], [
        properties,
        ledger,
        expenses,
        utilities,
        escrow,
        mortgages,
        marketValues,
        providers,
        equipment,
        maintenance,
        compliance,
        annualExpenses,
        taxRate
    ]);
    const addUtility = ()=>{
        if (!utilityForm.provider || !utilityForm.account) return;
        setUtilities((u)=>({
                ...u,
                [selectedId]: [
                    ...u[selectedId] || [],
                    {
                        id: Date.now(),
                        ...utilityForm
                    }
                ]
            }));
        setUtilityForm({
            type: UTILITY_TYPES[0],
            provider: "",
            account: "",
            payer: "Tenant"
        });
    };
    const removeUtility = (propertyId, id)=>setUtilities((u)=>({
                ...u,
                [propertyId]: u[propertyId].filter((x)=>x.id !== id)
            }));
    const balances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PortfolioDashboard.useMemo[balances]": ()=>{
            const m = {};
            properties.forEach({
                "PortfolioDashboard.useMemo[balances]": (p)=>m[p.id] = balanceFor(ledger, p.id)
            }["PortfolioDashboard.useMemo[balances]"]);
            return m;
        }
    }["PortfolioDashboard.useMemo[balances]"], [
        ledger,
        properties
    ]);
    const addLedgerEntry = ()=>{
        if (!ledgerForm.amount || !ledgerForm.date) return;
        setLedger((ls)=>[
                ...ls,
                {
                    id: Date.now(),
                    propertyId: selectedId,
                    type: ledgerForm.type,
                    amount: Number(ledgerForm.amount),
                    date: ledgerForm.date,
                    note: ledgerForm.note || (ledgerForm.type === "charge" ? "Rent charge" : "Payment")
                }
            ]);
        setLedgerForm({
            type: "payment",
            amount: "",
            date: "",
            note: ""
        });
    };
    const addExpense = ()=>{
        if (!expenseForm.amount || !expenseForm.date) return;
        setExpenses((es)=>[
                {
                    id: Date.now(),
                    propertyId: Number(expenseForm.propertyId),
                    category: expenseForm.category,
                    vendor: expenseForm.vendor,
                    amount: Number(expenseForm.amount),
                    date: expenseForm.date,
                    note: expenseForm.note
                },
                ...es
            ]);
        setExpenseForm((f)=>({
                ...f,
                vendor: "",
                amount: "",
                date: "",
                note: ""
            }));
    };
    const removeExpense = (id)=>setExpenses((es)=>es.filter((e)=>e.id !== id));
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PortfolioDashboard.useMemo[stats]": ()=>{
            const rentRoll = properties.reduce({
                "PortfolioDashboard.useMemo[stats].rentRoll": (s, p)=>s + p.rent
            }["PortfolioDashboard.useMemo[stats].rentRoll"], 0);
            const collectedAugust = ledger.filter({
                "PortfolioDashboard.useMemo[stats].collectedAugust": (e)=>e.type === "payment" && e.date.startsWith("2026-08")
            }["PortfolioDashboard.useMemo[stats].collectedAugust"]).reduce({
                "PortfolioDashboard.useMemo[stats].collectedAugust": (s, e)=>s + e.amount
            }["PortfolioDashboard.useMemo[stats].collectedAugust"], 0);
            const outstanding = Object.values(balances).reduce({
                "PortfolioDashboard.useMemo[stats].outstanding": (s, b)=>s + Math.max(b, 0)
            }["PortfolioDashboard.useMemo[stats].outstanding"], 0);
            const expenseTotal = expenses.reduce({
                "PortfolioDashboard.useMemo[stats].expenseTotal": (s, e)=>s + e.amount
            }["PortfolioDashboard.useMemo[stats].expenseTotal"], 0);
            const reservesHeld = properties.reduce({
                "PortfolioDashboard.useMemo[stats].reservesHeld": (s, p)=>s + escrowBalanceFor(escrow, p.id)
            }["PortfolioDashboard.useMemo[stats].reservesHeld"], 0);
            const debtService = properties.reduce({
                "PortfolioDashboard.useMemo[stats].debtService": (s, p)=>{
                    const m = mortgages[p.id];
                    return s + (m && m.hasMortgage ? Number(m.monthlyPayment) || 0 : 0);
                }
            }["PortfolioDashboard.useMemo[stats].debtService"], 0);
            const mortgageDebt = properties.reduce({
                "PortfolioDashboard.useMemo[stats].mortgageDebt": (s, p)=>{
                    const m = mortgages[p.id];
                    return s + (m && m.hasMortgage ? Number(m.balance) || 0 : 0);
                }
            }["PortfolioDashboard.useMemo[stats].mortgageDebt"], 0);
            const marketValueTotal = properties.reduce({
                "PortfolioDashboard.useMemo[stats].marketValueTotal": (s, p)=>s + (Number(marketValues[p.id]) || 0)
            }["PortfolioDashboard.useMemo[stats].marketValueTotal"], 0);
            const netPortfolioValue = marketValueTotal - mortgageDebt;
            const net = collectedAugust - expenseTotal - debtService;
            // portfolio-wide P&L, built from the same per-property rates used on each
            // property's ledger page — so the totals here always tie out to the sum
            // of each property's own "Net monthly income" figure
            let totalPropertyTax = 0, totalInsurance = 0, totalHOA = 0, totalOtherRecurring = 0;
            properties.forEach({
                "PortfolioDashboard.useMemo[stats]": (p)=>{
                    const rates = escrowMonthlyRates(escrow, p.id);
                    totalPropertyTax += (Number(p.annualPropertyTax) || 0) / 12;
                    totalInsurance += rates.Insurance;
                    totalHOA += rates.HOA;
                    totalOtherRecurring += rates.Other;
                }
            }["PortfolioDashboard.useMemo[stats]"]);
            const totalMonthlyExpenses = totalPropertyTax + totalInsurance + totalHOA + totalOtherRecurring + debtService;
            const netMonthlyIncome = rentRoll - totalMonthlyExpenses;
            const complianceDueSoon = compliance.filter({
                "PortfolioDashboard.useMemo[stats]": (c)=>c.status !== "completed" && daysUntil(c.dueDate) <= 30
            }["PortfolioDashboard.useMemo[stats]"]).length;
            const leasesExpiringSoon = properties.filter({
                "PortfolioDashboard.useMemo[stats]": (p)=>{
                    const lu = leaseUrgency(p.leaseEnd);
                    return lu && lu.tier !== "ok";
                }
            }["PortfolioDashboard.useMemo[stats]"]).length;
            const insuranceExpiringSoon = properties.filter({
                "PortfolioDashboard.useMemo[stats]": (p)=>{
                    const iu = insuranceUrgency(p.insuranceExpiration);
                    return iu && iu.tier !== "ok";
                }
            }["PortfolioDashboard.useMemo[stats]"]).length;
            const totalNotifications = complianceDueSoon + leasesExpiringSoon + insuranceExpiringSoon;
            return {
                rentRoll,
                collectedAugust,
                outstanding,
                expenseTotal,
                net,
                reservesHeld,
                debtService,
                mortgageDebt,
                marketValueTotal,
                netPortfolioValue,
                complianceDueSoon,
                leasesExpiringSoon,
                insuranceExpiringSoon,
                totalNotifications,
                totalPropertyTax,
                totalInsurance,
                totalHOA,
                totalOtherRecurring,
                totalMonthlyExpenses,
                netMonthlyIncome
            };
        }
    }["PortfolioDashboard.useMemo[stats]"], [
        properties,
        ledger,
        balances,
        expenses,
        escrow,
        mortgages,
        marketValues,
        compliance
    ]);
    const byProperty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PortfolioDashboard.useMemo[byProperty]": ()=>properties.map({
                "PortfolioDashboard.useMemo[byProperty]": (p)=>{
                    const exp = expenses.filter({
                        "PortfolioDashboard.useMemo[byProperty].exp": (e)=>e.propertyId === p.id
                    }["PortfolioDashboard.useMemo[byProperty].exp"]).reduce({
                        "PortfolioDashboard.useMemo[byProperty].exp": (s, e)=>s + e.amount
                    }["PortfolioDashboard.useMemo[byProperty].exp"], 0);
                    return {
                        name: p.name.split(" ").slice(0, 2).join(" "),
                        net: p.rent - exp
                    };
                }
            }["PortfolioDashboard.useMemo[byProperty]"])
    }["PortfolioDashboard.useMemo[byProperty]"], [
        properties,
        expenses
    ]);
    const byCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PortfolioDashboard.useMemo[byCategory]": ()=>{
            const m = {};
            expenses.forEach({
                "PortfolioDashboard.useMemo[byCategory]": (e)=>m[e.category] = (m[e.category] || 0) + e.amount
            }["PortfolioDashboard.useMemo[byCategory]"]);
            return Object.entries(m).map({
                "PortfolioDashboard.useMemo[byCategory]": ([name, value])=>({
                        name,
                        value
                    })
            }["PortfolioDashboard.useMemo[byCategory]"]);
        }
    }["PortfolioDashboard.useMemo[byCategory]"], [
        expenses
    ]);
    const NAV = [
        {
            id: "overview",
            label: "Overview",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
        },
        {
            id: "snapshot",
            label: "Snapshot",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
        },
        {
            id: "properties",
            label: "Properties",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
        },
        {
            id: "ledgers",
            label: "Ledgers",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__["ScrollText"]
        },
        {
            id: "maintenance",
            label: "Maintenance",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"]
        },
        {
            id: "compliance",
            label: "Tasks",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"]
        },
        {
            id: "providers",
            label: "Providers",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
        },
        {
            id: "expenses",
            label: "Expenses",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"]
        },
        {
            id: "reports",
            label: "Reports",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: T.paper,
            minHeight: "100vh",
            fontFamily: "'IBM Plex Sans', sans-serif",
            color: T.ink
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: FONTS
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 811,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "app-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Source Serif 4', serif",
                                    fontSize: 26,
                                    fontWeight: 700,
                                    letterSpacing: "-0.01em"
                                },
                                children: "Cinnity Realty"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 815,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: T.inkSoft,
                                    fontSize: 13,
                                    marginTop: 2
                                },
                                children: "Property Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 818,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 814,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            saveStatus === "saving" && "Saving…",
                            saveStatus === "saved" && "✓ Saved",
                            saveStatus === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: T.brick
                                },
                                children: "Save failed — check connection"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 823,
                                columnNumber: 38
                            }, this),
                            saveStatus === "idle" && loaded && "Data loaded"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 820,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 813,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "app-shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "side-nav",
                        children: NAV.map(({ id, label, icon: Icon })=>{
                            const active = tab === id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab(id),
                                className: `nav-btn${active ? " active" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 834,
                                        columnNumber: 17
                                    }, this),
                                    label
                                ]
                            }, id, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 833,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 829,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "main-panel",
                        children: [
                            tab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Overview, {
                                stats: stats,
                                properties: properties,
                                balances: balances,
                                compliance: compliance,
                                equipment: equipment,
                                maintenance: maintenance,
                                goToLedger: (id)=>{
                                    setSelectedId(id);
                                    setTab("ledgers");
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 842,
                                columnNumber: 34
                            }, this),
                            tab === "snapshot" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Snapshot, {
                                stats: stats,
                                properties: properties,
                                balances: balances,
                                marketValues: marketValues,
                                mortgages: mortgages,
                                expenses: expenses,
                                escrow: escrow,
                                equipment: equipment,
                                compliance: compliance,
                                maintenance: maintenance,
                                taxRate: taxRate,
                                setTaxRate: setTaxRate,
                                goToLedger: (id)=>{
                                    setSelectedId(id);
                                    setTab("ledgers");
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 844,
                                columnNumber: 13
                            }, this),
                            tab === "properties" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Properties, {
                                properties: properties,
                                balances: balances,
                                goToLedger: (id)=>{
                                    setSelectedId(id);
                                    setTab("ledgers");
                                },
                                mortgages: mortgages,
                                updateMortgage: updateMortgage,
                                updateProperty: updateProperty,
                                addProperty: addProperty,
                                removeProperty: removeProperty,
                                newPropertyForm: newPropertyForm,
                                setNewPropertyForm: setNewPropertyForm
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 860,
                                columnNumber: 36
                            }, this),
                            tab === "ledgers" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ledgers, {
                                properties: properties,
                                ledger: ledger,
                                balances: balances,
                                selectedId: selectedId,
                                setSelectedId: setSelectedId,
                                form: ledgerForm,
                                setForm: setLedgerForm,
                                addEntry: addLedgerEntry,
                                utilities: utilities,
                                utilityForm: utilityForm,
                                setUtilityForm: setUtilityForm,
                                addUtility: addUtility,
                                removeUtility: removeUtility,
                                escrow: escrow,
                                escrowForm: escrowForm,
                                setEscrowForm: setEscrowForm,
                                addEscrowEntry: addEscrowEntry,
                                setCurrentRate: setCurrentRate,
                                removeEscrowEntry: removeEscrowEntry,
                                mortgages: mortgages,
                                updateMortgage: updateMortgage,
                                marketValues: marketValues,
                                updateMarketValue: updateMarketValue,
                                expenses: expenses,
                                equipment: equipment,
                                updateProperty: updateProperty,
                                equipmentForm: equipmentForm,
                                setEquipmentForm: setEquipmentForm,
                                addEquipment: addEquipment,
                                removeEquipment: removeEquipment,
                                compliance: compliance,
                                markComplianceDone: markComplianceDone,
                                removeCompliance: removeCompliance,
                                annualExpenses: annualExpenses,
                                addAnnualExpense: addAnnualExpense,
                                removeAnnualExpense: removeAnnualExpense
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 862,
                                columnNumber: 13
                            }, this),
                            tab === "maintenance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Maintenance, {
                                properties: properties,
                                equipment: equipment,
                                providers: providers,
                                maintenance: maintenance,
                                form: maintenanceForm,
                                setForm: setMaintenanceForm,
                                addMaintenance: addMaintenance,
                                updateStatus: updateMaintenanceStatus,
                                removeMaintenance: removeMaintenance
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 902,
                                columnNumber: 13
                            }, this),
                            tab === "providers" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Providers, {
                                providers: providers,
                                form: providerForm,
                                setForm: setProviderForm,
                                addProvider: addProvider,
                                removeProvider: removeProvider
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 915,
                                columnNumber: 13
                            }, this),
                            tab === "compliance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Compliance, {
                                properties: properties,
                                compliance: compliance,
                                form: complianceForm,
                                setForm: setComplianceForm,
                                addCompliance: addCompliance,
                                markDone: markComplianceDone,
                                removeCompliance: removeCompliance
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 918,
                                columnNumber: 13
                            }, this),
                            tab === "expenses" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Expenses, {
                                expenses: expenses,
                                properties: properties,
                                form: expenseForm,
                                setForm: setExpenseForm,
                                addExpense: addExpense,
                                removeExpense: removeExpense
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 929,
                                columnNumber: 13
                            }, this),
                            tab === "reports" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reports, {
                                byProperty: byProperty,
                                byCategory: byCategory,
                                stats: stats
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 931,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 841,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 828,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 810,
        columnNumber: 5
    }, this);
}
_s(PortfolioDashboard, "PGqSA0nWLa6P69pF0FiIGCJLuDM=");
_c = PortfolioDashboard;
function KpiCard({ label, value, tone = "ink" }) {
    const color = tone === "pine" ? T.pine : tone === "brick" ? T.brick : T.ink;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: T.paper,
            border: `1px solid ${T.line}`,
            borderRadius: 8,
            padding: "16px 18px",
            flex: 1,
            minWidth: 150
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 12,
                    color: T.inkSoft,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 942,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 24,
                    fontWeight: 600,
                    color,
                    marginTop: 6
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 943,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 941,
        columnNumber: 5
    }, this);
}
_c1 = KpiCard;
function MiniStat({ label, value, tone = "ink", small = false }) {
    const color = tone === "pine" ? T.pine : tone === "brick" ? T.brick : T.ink;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 11,
                    color: T.inkSoft,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 952,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: small ? 14 : 16,
                    fontWeight: 600,
                    color,
                    marginTop: 2
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 953,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 951,
        columnNumber: 5
    }, this);
}
_c2 = MiniStat;
function Collapsible({ title, subtitle, defaultOpen = true, children }) {
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 24,
            border: `1px solid ${T.line}`,
            borderRadius: 8,
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((o)=>!o),
                style: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 16px",
                    background: T.paper,
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Source Serif 4', serif",
                                    fontSize: 16,
                                    fontWeight: 600
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 967,
                                columnNumber: 11
                            }, this),
                            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: T.inkSoft,
                                    marginTop: 2
                                },
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 968,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 966,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 18,
                        style: {
                            transform: open ? "rotate(180deg)" : "none",
                            transition: "transform 0.15s ease",
                            color: T.inkSoft,
                            flexShrink: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 970,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 962,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 16,
                    borderTop: `1px solid ${T.line}`,
                    background: T.card
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 972,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 961,
        columnNumber: 5
    }, this);
}
_s1(Collapsible, "pG0khZI24VrkSmCZcWM9qqrVMh4=");
_c3 = Collapsible;
function SectionTitle({ title, subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 14
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: 18,
                    fontWeight: 600
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 980,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 12.5,
                    color: T.inkSoft,
                    marginTop: 2
                },
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 981,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 979,
        columnNumber: 5
    }, this);
}
_c4 = SectionTitle;
function Overview({ stats, properties, balances, compliance, equipment, maintenance, goToLedger }) {
    const overdueCompliance = compliance.filter((c)=>c.status !== "completed" && daysUntil(c.dueDate) < 0);
    const dueSoonCompliance = compliance.filter((c)=>c.status !== "completed" && daysUntil(c.dueDate) >= 0 && daysUntil(c.dueDate) <= 30);
    const equipmentNeedingReplacement = properties.flatMap((p)=>(equipment[p.id] || []).map((eq)=>({
                ...eq,
                propertyName: p.name,
                age: equipmentAgeYears(eq.installDate)
            })).filter((eq)=>eq.age >= eq.lifespan - 2));
    const openMaintenance = maintenance.filter((m)=>m.status === "scheduled" || m.status === "in_progress");
    const leasesNeedingAttention = properties.map((p)=>({
            property: p,
            urgency: leaseUrgency(p.leaseEnd)
        })).filter((x)=>x.urgency && x.urgency.tier !== "ok");
    const insuranceNeedingAttention = properties.map((p)=>({
            property: p,
            urgency: insuranceUrgency(p.insuranceExpiration)
        })).filter((x)=>x.urgency && x.urgency.tier !== "ok");
    const propertyName = (id)=>properties.find((p)=>p.id === id)?.name || "—";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "This month, at a glance",
                subtitle: "Net cash flow reflects rent actually collected — see the P&L below for scheduled rent minus full recurring costs"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1005,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 14,
                    flexWrap: "wrap",
                    marginBottom: 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Rent roll",
                        value: money(stats.rentRoll)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1007,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Collected in August",
                        value: money(stats.collectedAugust),
                        tone: "pine"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1008,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Total outstanding",
                        value: money(stats.outstanding),
                        tone: "brick"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1009,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Expenses",
                        value: money(stats.expenseTotal)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1010,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Debt service",
                        value: money(stats.debtService)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1011,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Net cash flow",
                        value: money(stats.net),
                        tone: stats.net >= 0 ? "pine" : "brick"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1012,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Reserves held",
                        value: money(stats.reservesHeld)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1013,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1006,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Notifications",
                subtitle: "Leases and insurance expiring soon, task deadlines, equipment nearing end of life, open maintenance"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1016,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    marginBottom: 28
                },
                children: [
                    leasesNeedingAttention.map(({ property, urgency })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttentionRow, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__["ScrollText"],
                            tone: urgency.tier === "expired" || urgency.tier === "30" ? "brick" : "amber",
                            label: `Lease — ${property.name}`,
                            detail: urgency.label
                        }, `l-${property.id}`, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1019,
                            columnNumber: 11
                        }, this)),
                    insuranceNeedingAttention.map(({ property, urgency })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttentionRow, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                            tone: urgency.tier === "expired" || urgency.tier === "30" ? "brick" : "amber",
                            label: `Insurance — ${property.name}`,
                            detail: urgency.label
                        }, `i-${property.id}`, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1022,
                            columnNumber: 11
                        }, this)),
                    overdueCompliance.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttentionRow, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                            tone: "brick",
                            label: `${c.itemType} overdue — ${propertyName(c.propertyId ?? null)}`,
                            detail: [
                                `Was due ${c.dueDate}`,
                                c.amount ? money(c.amount) : null,
                                c.description || null
                            ].filter(Boolean).join(" · ")
                        }, `c-${c.id}`, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1025,
                            columnNumber: 11
                        }, this)),
                    dueSoonCompliance.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttentionRow, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                            tone: "amber",
                            label: `${c.itemType} due soon — ${propertyName(c.propertyId ?? null)}`,
                            detail: [
                                `Due ${c.dueDate}`,
                                c.amount ? money(c.amount) : null,
                                c.description || null
                            ].filter(Boolean).join(" · ")
                        }, `cs-${c.id}`, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1034,
                            columnNumber: 11
                        }, this)),
                    equipmentNeedingReplacement.map((eq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttentionRow, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
                            tone: eq.age >= eq.lifespan ? "brick" : "amber",
                            label: `${eq.type} — ${eq.propertyName}`,
                            detail: `${eq.age.toFixed(1)} of ${eq.lifespan} expected years`
                        }, `e-${eq.id}-${eq.propertyName}`, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1043,
                            columnNumber: 11
                        }, this)),
                    openMaintenance.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttentionRow, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
                            tone: "pine",
                            label: `${m.description} — ${propertyName(m.propertyId)}`,
                            detail: `${m.status === "in_progress" ? "In progress" : "Scheduled"} for ${m.scheduledDate}`
                        }, `m-${m.id}`, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1046,
                            columnNumber: 11
                        }, this)),
                    leasesNeedingAttention.length + insuranceNeedingAttention.length + overdueCompliance.length + dueSoonCompliance.length + equipmentNeedingReplacement.length + openMaintenance.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: T.inkSoft,
                            fontStyle: "italic"
                        },
                        children: "Nothing needs attention right now."
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1049,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1017,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Balances by property",
                subtitle: "Click a property to open its ledger"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1053,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 6
                },
                children: properties.map((p)=>{
                    const s = statusFor(balances[p.id], p.rent);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goToLedger(p.id),
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "9px 4px",
                            borderBottom: `1px solid ${T.line}`,
                            background: "none",
                            border: "none",
                            borderBottomWidth: 1,
                            borderBottomStyle: "solid",
                            borderBottomColor: T.line,
                            width: "100%",
                            cursor: "pointer",
                            font: "inherit",
                            color: "inherit"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 14,
                                        color: T.inkSoft
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1064,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 500
                                        },
                                        children: p.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1065,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: T.inkSoft,
                                            fontSize: 13
                                        },
                                        children: p.tenant
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1066,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1063,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: s.bg,
                                    color: s.fg,
                                    fontSize: 12,
                                    fontWeight: 600,
                                    padding: "3px 10px",
                                    borderRadius: 20
                                },
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1068,
                                columnNumber: 15
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1058,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1054,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 1004,
        columnNumber: 5
    }, this);
}
_c5 = Overview;
function Snapshot({ stats, properties, balances, marketValues, mortgages, expenses, escrow, equipment, compliance, maintenance, taxRate, setTaxRate, goToLedger }) {
    const performanceRows = properties.map((p)=>({
            property: p,
            perf: propertyPerformance(p, {
                marketValues,
                mortgages,
                expenses,
                escrow
            })
        }));
    const propertiesWithBasis = properties.filter((p)=>Number(p.purchasePrice) > 0);
    const depreciableBasis = propertiesWithBasis.reduce((s, p)=>s + Number(p.purchasePrice), 0);
    const annualDepreciation = depreciableBasis / 27.5; // standard US residential rental, straight-line, ignores land value split
    const monthlyDepreciation = annualDepreciation / 12;
    const estTaxableIncome = stats.netMonthlyIncome - monthlyDepreciation;
    const rate = Number(taxRate) || 0;
    const estMonthlyTax = estTaxableIncome > 0 ? estTaxableIncome * (rate / 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "The business, at a glance",
                subtitle: "Pulled together from ledgers, expenses, mortgages, and valuations"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1093,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 14,
                    flexWrap: "wrap",
                    marginBottom: 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Net portfolio value",
                        value: money(stats.netPortfolioValue),
                        tone: "pine"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1095,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Monthly rent roll",
                        value: money(stats.rentRoll)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1096,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Reserves held",
                        value: money(stats.reservesHeld)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1097,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1094,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Portfolio monthly income & expenses",
                subtitle: "Rent roll minus current Tax/Insurance/HOA/Other rates and mortgage payments — the same math as each property's own P&L, summed"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: T.card,
                    border: `1px solid ${T.line}`,
                    borderRadius: 8,
                    padding: "16px 18px",
                    marginBottom: 28,
                    maxWidth: 480
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "6px 0",
                            fontSize: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Rent roll"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'IBM Plex Mono', monospace",
                                    color: T.pine,
                                    fontWeight: 600
                                },
                                children: [
                                    "+",
                                    money(stats.rentRoll)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1102,
                        columnNumber: 9
                    }, this),
                    [
                        [
                            "Property tax (escrow)",
                            stats.totalPropertyTax
                        ],
                        [
                            "Insurance",
                            stats.totalInsurance
                        ],
                        [
                            "HOA",
                            stats.totalHOA
                        ],
                        [
                            "Mortgage (P&I)",
                            stats.debtService
                        ],
                        [
                            "Other",
                            stats.totalOtherRecurring
                        ]
                    ].map(([label, amount])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "6px 0",
                                fontSize: 14,
                                borderTop: `1px solid ${T.line}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: T.inkSoft
                                    },
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'IBM Plex Mono', monospace",
                                        color: amount > 0 ? T.brick : T.inkSoft
                                    },
                                    children: amount > 0 ? `−${money(amount)}` : "—"
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1113,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "8px 0 4px",
                            fontSize: 13,
                            fontWeight: 600,
                            borderTop: `2px solid ${T.ink}`,
                            marginTop: 4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Total expenses"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'IBM Plex Mono', monospace"
                                },
                                children: [
                                    "−",
                                    money(stats.totalMonthlyExpenses)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px 0 2px",
                            fontSize: 18,
                            fontWeight: 700,
                            borderTop: `3px double ${T.ink}`,
                            marginTop: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Net monthly income"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'IBM Plex Mono', monospace",
                                    color: stats.netMonthlyIncome >= 0 ? T.pine : T.brick
                                },
                                children: money(stats.netMonthlyIncome)
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Estimated tax reserve",
                subtitle: "A rough planning number, not a tax return — see the caveats below"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: T.amberSoft,
                    border: `1px solid ${T.amber}`,
                    borderRadius: 8,
                    padding: "16px 18px",
                    marginBottom: 28,
                    maxWidth: 480
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            marginBottom: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 4,
                                    fontSize: 12,
                                    color: "#6B5220"
                                },
                                children: [
                                    "Marginal tax rate (%)",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: taxRate,
                                        onChange: (e)=>setTaxRate(e.target.value),
                                        placeholder: "e.g. 22",
                                        style: {
                                            width: 90,
                                            border: `1px solid ${T.amber}`,
                                            borderRadius: 6,
                                            padding: "6px 8px",
                                            fontSize: 14,
                                            background: "#fff",
                                            color: T.ink
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 12,
                                    color: "#6B5220",
                                    marginTop: 18
                                },
                                children: "You enter this — the app can't know your bracket"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "5px 0",
                            fontSize: 13.5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#6B5220"
                                },
                                children: "Net monthly income (cash)"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'IBM Plex Mono', monospace"
                                },
                                children: money(stats.netMonthlyIncome)
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "5px 0",
                            fontSize: 13.5,
                            borderTop: "1px solid rgba(176,141,87,0.35)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#6B5220"
                                },
                                children: "Est. monthly depreciation"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'IBM Plex Mono', monospace"
                                },
                                children: [
                                    "−",
                                    money(monthlyDepreciation)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "6px 0",
                            fontSize: 14,
                            fontWeight: 600,
                            borderTop: "1px solid rgba(176,141,87,0.35)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Est. taxable income"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'IBM Plex Mono', monospace",
                                    color: estTaxableIncome >= 0 ? T.ink : T.brick
                                },
                                children: money(estTaxableIncome)
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px 0 2px",
                            fontSize: 17,
                            fontWeight: 700,
                            borderTop: "2px solid #8A6A2F",
                            marginTop: 4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Est. monthly tax reserve"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'IBM Plex Mono', monospace"
                                },
                                children: money(estMonthlyTax)
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 11,
                            color: "#6B5220",
                            marginTop: 12,
                            lineHeight: 1.5
                        },
                        children: [
                            "Depreciation is estimated as total purchase price ÷ 27.5 years (",
                            propertiesWithBasis.length,
                            " of ",
                            properties.length,
                            " properties have a purchase price on file — add it under each property's Annual expenses section to include it here). This estimate does ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "not"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1162,
                                columnNumber: 263
                            }, this),
                            " account for: the split between mortgage interest (deductible) and principal (not deductible — we don't track that split), land value (not depreciable), passive activity loss limitations, depreciation recapture on sale, or state taxes. Treat this as a rough amount to set aside, not a filing figure — talk to a CPA for actual numbers."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Performance by property",
                subtitle: "Click a property to see its full ledger"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "table-scroll",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: 13.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    borderBottom: `2px solid ${T.ink}`
                                },
                                children: [
                                    "Property",
                                    "Market value",
                                    "Equity",
                                    "Cash flow/mo",
                                    "Gross yield",
                                    "Cap rate"
                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            textAlign: [
                                                "Market value",
                                                "Equity",
                                                "Cash flow/mo",
                                                "Gross yield",
                                                "Cap rate"
                                            ].includes(h) ? "right" : "left",
                                            padding: "8px 6px",
                                            fontSize: 11.5,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            color: T.inkSoft
                                        },
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1172,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1170,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1169,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: performanceRows.map(({ property, perf })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        borderBottom: `1px solid ${T.line}`,
                                        cursor: "pointer"
                                    },
                                    onClick: ()=>goToLedger(property.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px",
                                                fontWeight: 500,
                                                color: T.pine
                                            },
                                            children: property.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px",
                                                textAlign: "right",
                                                fontFamily: "'IBM Plex Mono', monospace"
                                            },
                                            children: money(perf.marketValue)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1182,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px",
                                                textAlign: "right",
                                                fontFamily: "'IBM Plex Mono', monospace"
                                            },
                                            children: money(perf.equity)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px",
                                                textAlign: "right",
                                                fontFamily: "'IBM Plex Mono', monospace",
                                                color: perf.estMonthlyCashFlow >= 0 ? T.pine : T.brick
                                            },
                                            children: money(perf.estMonthlyCashFlow)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px",
                                                textAlign: "right",
                                                fontFamily: "'IBM Plex Mono', monospace"
                                            },
                                            children: [
                                                perf.grossYield.toFixed(1),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1185,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px",
                                                textAlign: "right",
                                                fontFamily: "'IBM Plex Mono', monospace"
                                            },
                                            children: [
                                                perf.capRate.toFixed(1),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1186,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, property.id, true, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1180,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1178,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PortfolioDashboard.jsx",
                    lineNumber: 1168,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 11,
                    color: T.inkSoft,
                    marginTop: 10,
                    fontStyle: "italic"
                },
                children: "Cap rate and yield are estimates based on data on file, not a full-year audited actual."
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 1092,
        columnNumber: 5
    }, this);
}
_c6 = Snapshot;
function AttentionRow({ icon: Icon, tone, label, detail }) {
    const colors = {
        brick: T.brick,
        amber: "#8A6A2F",
        pine: T.pine
    };
    const bgs = {
        brick: T.brickSoft,
        amber: T.amberSoft,
        pine: T.pineSoft
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: bgs[tone],
            border: `1px solid ${T.line}`,
            borderRadius: 8,
            padding: "9px 14px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 15,
                color: colors[tone]
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: T.ink
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 12.5,
                    color: T.inkSoft,
                    marginLeft: "auto"
                },
                children: detail
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 1203,
        columnNumber: 5
    }, this);
}
_c7 = AttentionRow;
function Properties({ properties, balances, goToLedger, mortgages, updateMortgage, updateProperty, addProperty, removeProperty, newPropertyForm, setNewPropertyForm }) {
    const inputStyle = {
        border: `1px solid ${T.line}`,
        borderRadius: 6,
        padding: "6px 8px",
        fontSize: 13,
        background: T.paper,
        color: T.ink,
        width: "100%"
    };
    const cellInputStyle = {
        border: "1px solid transparent",
        borderRadius: 4,
        padding: "4px 6px",
        fontSize: 14,
        background: "transparent",
        color: T.ink,
        width: "100%",
        fontFamily: "inherit"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Add a property",
                subtitle: "New properties start with an empty ledger, expenses, and everything else"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    marginBottom: 26,
                    alignItems: "flex-end"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft,
                            flex: 1,
                            minWidth: 160
                        },
                        children: [
                            "Property name / address",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "text",
                                placeholder: "e.g. 100 Main St",
                                value: newPropertyForm.name,
                                onChange: (e)=>setNewPropertyForm((f)=>({
                                            ...f,
                                            name: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1221,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "City",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "text",
                                value: newPropertyForm.city,
                                onChange: (e)=>setNewPropertyForm((f)=>({
                                            ...f,
                                            city: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Tenant",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "text",
                                placeholder: "Optional",
                                value: newPropertyForm.tenant,
                                onChange: (e)=>setNewPropertyForm((f)=>({
                                            ...f,
                                            tenant: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Monthly rent",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: {
                                    ...inputStyle,
                                    width: 110
                                },
                                type: "number",
                                placeholder: "0",
                                value: newPropertyForm.rent,
                                onChange: (e)=>setNewPropertyForm((f)=>({
                                            ...f,
                                            rent: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: addProperty,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            background: T.pine,
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            padding: "9px 16px",
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            height: 37
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1236,
                                columnNumber: 11
                            }, this),
                            " Add"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Properties",
                subtitle: "Click into any field to edit — changes save automatically. Rent is edited on each property's Ledgers page; rent estimate here is editable for market comparison."
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "table-scroll",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: 14
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    borderBottom: `2px solid ${T.ink}`
                                },
                                children: [
                                    "Property",
                                    "City",
                                    "Tenant",
                                    "Rent estimate",
                                    "Monthly rent",
                                    "Balance",
                                    "Mortgage",
                                    "Loan balance",
                                    "Monthly P&I",
                                    ""
                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            textAlign: [
                                                "Rent estimate",
                                                "Monthly rent",
                                                "Balance",
                                                "Loan balance",
                                                "Monthly P&I"
                                            ].includes(h) ? "right" : h === "Mortgage" ? "center" : "left",
                                            padding: "8px 6px",
                                            fontSize: 12,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            color: T.inkSoft
                                        },
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1246,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1244,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1243,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                properties.map((p)=>{
                                    const bal = balances[p.id];
                                    const s = statusFor(bal, p.rent);
                                    const m = mortgages[p.id] || DEFAULT_MORTGAGE;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: `1px solid ${T.line}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "4px 4px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: {
                                                        ...cellInputStyle,
                                                        fontWeight: 500
                                                    },
                                                    type: "text",
                                                    value: p.name,
                                                    onChange: (e)=>updateProperty(p.id, "name", e.target.value),
                                                    onFocus: (e)=>e.target.style.border = `1px solid ${T.line}`,
                                                    onBlur: (e)=>e.target.style.border = "1px solid transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1260,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "4px 4px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: cellInputStyle,
                                                    type: "text",
                                                    value: p.city,
                                                    onChange: (e)=>updateProperty(p.id, "city", e.target.value),
                                                    onFocus: (e)=>e.target.style.border = `1px solid ${T.line}`,
                                                    onBlur: (e)=>e.target.style.border = "1px solid transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1263,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1262,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "4px 4px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: cellInputStyle,
                                                    type: "text",
                                                    value: p.tenant,
                                                    onChange: (e)=>updateProperty(p.id, "tenant", e.target.value),
                                                    onFocus: (e)=>e.target.style.border = `1px solid ${T.line}`,
                                                    onBlur: (e)=>e.target.style.border = "1px solid transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1266,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "4px 4px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: {
                                                        ...cellInputStyle,
                                                        textAlign: "right",
                                                        fontFamily: "'IBM Plex Mono', monospace",
                                                        color: T.inkSoft
                                                    },
                                                    type: "number",
                                                    placeholder: "—",
                                                    value: p.rentEstimate,
                                                    onChange: (e)=>updateProperty(p.id, "rentEstimate", e.target.value),
                                                    onFocus: (e)=>e.target.style.border = `1px solid ${T.line}`,
                                                    onBlur: (e)=>e.target.style.border = "1px solid transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1269,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "10px 6px",
                                                    textAlign: "right"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "'IBM Plex Mono', monospace"
                                                        },
                                                        children: money(p.rent)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1280,
                                                        columnNumber: 19
                                                    }, this),
                                                    p.rentEstimate && Number(p.rentEstimate) !== p.rent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: p.rent < Number(p.rentEstimate) ? T.brick : T.pine,
                                                            marginTop: 2
                                                        },
                                                        children: [
                                                            p.rent < Number(p.rentEstimate) ? "↓" : "↑",
                                                            " ",
                                                            money(Math.abs(p.rent - Number(p.rentEstimate))),
                                                            " vs. est."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1282,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1279,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "10px 6px",
                                                    textAlign: "right"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: s.bg,
                                                        color: s.fg,
                                                        fontSize: 12,
                                                        fontWeight: 600,
                                                        padding: "3px 10px",
                                                        borderRadius: 20
                                                    },
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1288,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1287,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "10px 6px",
                                                    textAlign: "center"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: m.hasMortgage,
                                                    onChange: (e)=>updateMortgage(p.id, "hasMortgage", e.target.checked),
                                                    style: {
                                                        width: 16,
                                                        height: 16,
                                                        cursor: "pointer",
                                                        accentColor: T.pine
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1291,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1290,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "4px 4px"
                                                },
                                                children: m.hasMortgage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: {
                                                        ...cellInputStyle,
                                                        textAlign: "right",
                                                        fontFamily: "'IBM Plex Mono', monospace"
                                                    },
                                                    type: "number",
                                                    placeholder: "0",
                                                    value: m.balance,
                                                    onChange: (e)=>updateMortgage(p.id, "balance", e.target.value),
                                                    onFocus: (e)=>e.target.style.border = `1px solid ${T.line}`,
                                                    onBlur: (e)=>e.target.style.border = "1px solid transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1300,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: "right",
                                                        color: T.inkSoft,
                                                        padding: "4px 6px"
                                                    },
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1310,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1298,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "4px 4px"
                                                },
                                                children: m.hasMortgage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: {
                                                        ...cellInputStyle,
                                                        textAlign: "right",
                                                        fontFamily: "'IBM Plex Mono', monospace"
                                                    },
                                                    type: "number",
                                                    placeholder: "0",
                                                    value: m.monthlyPayment,
                                                    onChange: (e)=>updateMortgage(p.id, "monthlyPayment", e.target.value),
                                                    onFocus: (e)=>e.target.style.border = `1px solid ${T.line}`,
                                                    onBlur: (e)=>e.target.style.border = "1px solid transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1315,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: "right",
                                                        color: T.inkSoft,
                                                        padding: "4px 6px"
                                                    },
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1325,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1313,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "10px 6px",
                                                    textAlign: "right",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>goToLedger(p.id),
                                                        style: {
                                                            background: "none",
                                                            border: `1px solid ${T.line}`,
                                                            borderRadius: 6,
                                                            padding: "5px 10px",
                                                            fontSize: 12,
                                                            cursor: "pointer",
                                                            color: T.pine,
                                                            marginRight: 6
                                                        },
                                                        children: "View ledger"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1329,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            if (confirm(`Remove ${p.name}? This deletes its ledger, expenses, and all other records.`)) removeProperty(p.id);
                                                        },
                                                        style: {
                                                            background: "none",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            color: T.inkSoft,
                                                            verticalAlign: "middle"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1336,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1332,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1328,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1258,
                                        columnNumber: 15
                                    }, this);
                                }),
                                properties.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 9,
                                        style: {
                                            padding: "16px 6px",
                                            color: T.inkSoft,
                                            fontStyle: "italic"
                                        },
                                        children: "No properties yet — add one above."
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1344,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1343,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1252,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 4,
                                        style: {
                                            padding: "12px 6px",
                                            fontWeight: 600
                                        },
                                        children: "Total rent roll"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1350,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "12px 6px",
                                            textAlign: "right",
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            fontWeight: 600,
                                            borderTop: `3px double ${T.ink}`
                                        },
                                        children: money(properties.reduce((s, p)=>s + p.rent, 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1351,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            borderTop: `3px double ${T.ink}`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1354,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            borderTop: `3px double ${T.ink}`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1355,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "12px 6px",
                                            textAlign: "right",
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            fontWeight: 600,
                                            borderTop: `3px double ${T.ink}`
                                        },
                                        children: money(properties.reduce((s, p)=>s + (mortgages[p.id]?.hasMortgage ? Number(mortgages[p.id].balance) || 0 : 0), 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1356,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "12px 6px",
                                            textAlign: "right",
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            fontWeight: 600,
                                            borderTop: `3px double ${T.ink}`
                                        },
                                        children: money(properties.reduce((s, p)=>s + (mortgages[p.id]?.hasMortgage ? Number(mortgages[p.id].monthlyPayment) || 0 : 0), 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1359,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            borderTop: `3px double ${T.ink}`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1362,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1349,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1348,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PortfolioDashboard.jsx",
                    lineNumber: 1242,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 1216,
        columnNumber: 5
    }, this);
}
_c8 = Properties;
function Ledgers({ properties, ledger, balances, selectedId, setSelectedId, form, setForm, addEntry, utilities, utilityForm, setUtilityForm, addUtility, removeUtility, escrow, escrowForm, setEscrowForm, addEscrowEntry, removeEscrowEntry, setCurrentRate, mortgages, updateMortgage, marketValues, updateMarketValue, expenses, equipment, equipmentForm, setEquipmentForm, addEquipment, removeEquipment, updateProperty, compliance, markComplianceDone, removeCompliance, annualExpenses, addAnnualExpense, removeAnnualExpense }) {
    _s2();
    const property = properties.find((p)=>p.id === selectedId);
    const perf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Ledgers.useMemo[perf]": ()=>propertyPerformance(property, {
                marketValues,
                mortgages,
                expenses,
                escrow
            })
    }["Ledgers.useMemo[perf]"], [
        property,
        marketValues,
        mortgages,
        expenses,
        escrow
    ]);
    const [newAnnualExpenseDraft, setNewAnnualExpenseDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        description: "",
        amount: ""
    });
    const [tenantMessageDraft, setTenantMessageDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tenantSmsStatus, setTenantSmsStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle"); // idle | sending | sent | error
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Ledgers.useEffect": ()=>{
            setTenantMessageDraft("");
            setTenantSmsStatus("idle");
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Ledgers.useEffect"], [
        selectedId
    ]);
    const [rateDrafts, setRateDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        insurance: "",
        hoa: "",
        otherAmount: "",
        otherNote: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Ledgers.useEffect": ()=>{
            setRateDrafts({
                insurance: perf.insurance ? String(perf.insurance) : "",
                hoa: perf.hoa ? String(perf.hoa) : "",
                otherAmount: perf.other ? String(perf.other) : "",
                otherNote: perf.otherNote || ""
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Ledgers.useEffect"], [
        selectedId
    ]);
    const commitRate = (category, draftKey)=>{
        const value = Number(rateDrafts[draftKey]) || 0;
        const current = category === "Insurance" ? perf.insurance : perf.hoa;
        if (value !== current) setCurrentRate(selectedId, category, value);
    };
    const commitOther = ()=>{
        const value = Number(rateDrafts.otherAmount) || 0;
        if (value !== perf.other || rateDrafts.otherNote !== (perf.otherNote || "")) {
            setCurrentRate(selectedId, "Other", value, rateDrafts.otherNote);
        }
    };
    const propertyNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Ledgers.useMemo[propertyNotifications]": ()=>compliance.filter({
                "Ledgers.useMemo[propertyNotifications]": (c)=>c.propertyId === selectedId
            }["Ledgers.useMemo[propertyNotifications]"]).sort({
                "Ledgers.useMemo[propertyNotifications]": (a, b)=>(a.status === "completed") - (b.status === "completed") || a.dueDate.localeCompare(b.dueDate)
            }["Ledgers.useMemo[propertyNotifications]"])
    }["Ledgers.useMemo[propertyNotifications]"], [
        compliance,
        selectedId
    ]);
    const entries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Ledgers.useMemo[entries]": ()=>{
            const rows = ledger.filter({
                "Ledgers.useMemo[entries].rows": (e)=>e.propertyId === selectedId
            }["Ledgers.useMemo[entries].rows"]).sort({
                "Ledgers.useMemo[entries].rows": (a, b)=>a.date === b.date ? a.type === "charge" ? -1 : 1 : a.date.localeCompare(b.date)
            }["Ledgers.useMemo[entries].rows"]);
            let running = 0;
            return rows.map({
                "Ledgers.useMemo[entries]": (e)=>{
                    running += e.type === "charge" ? e.amount : -e.amount;
                    return {
                        ...e,
                        running
                    };
                }
            }["Ledgers.useMemo[entries]"]);
        }
    }["Ledgers.useMemo[entries]"], [
        ledger,
        selectedId
    ]);
    const escrowEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Ledgers.useMemo[escrowEntries]": ()=>{
            const rows = [
                ...escrow[selectedId] || []
            ].sort({
                "Ledgers.useMemo[escrowEntries].rows": (a, b)=>a.date === b.date ? a.type === "contribution" ? -1 : 1 : a.date.localeCompare(b.date)
            }["Ledgers.useMemo[escrowEntries].rows"]);
            let running = 0;
            return rows.map({
                "Ledgers.useMemo[escrowEntries]": (e)=>{
                    running += e.type === "contribution" ? e.amount : -e.amount;
                    return {
                        ...e,
                        running
                    };
                }
            }["Ledgers.useMemo[escrowEntries]"]);
        }
    }["Ledgers.useMemo[escrowEntries]"], [
        escrow,
        selectedId
    ]);
    const escrowBalance = escrowEntries.length ? escrowEntries[escrowEntries.length - 1].running : 0;
    const inputStyle = {
        border: `1px solid ${T.line}`,
        borderRadius: 6,
        padding: "8px 10px",
        fontSize: 13,
        background: T.paper,
        color: T.ink
    };
    const selectedStatus = statusFor(balances[selectedId], property.rent);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Property",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedId,
                                onChange: (e)=>setSelectedId(Number(e.target.value)),
                                style: {
                                    border: `1px solid ${T.line}`,
                                    borderRadius: 6,
                                    padding: "9px 10px",
                                    fontSize: 14,
                                    background: T.paper,
                                    color: T.ink,
                                    minWidth: 220,
                                    fontWeight: 500
                                },
                                children: properties.map((p)=>{
                                    const s = statusFor(balances[p.id], p.rent);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: p.id,
                                        children: [
                                            p.name,
                                            " — ",
                                            s.label
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1450,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1442,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1440,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            background: selectedStatus.bg,
                            color: selectedStatus.fg,
                            fontSize: 12,
                            fontWeight: 600,
                            padding: "5px 12px",
                            borderRadius: 20,
                            marginTop: 18
                        },
                        children: selectedStatus.label
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1457,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                        title: `${property.name} — ledger`,
                        subtitle: `${property.tenant} · rent ${money(property.rent)}/mo`
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1463,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 32
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                title: "Notifications",
                                subtitle: "Outstanding items for this property — add or manage new tasks from the Tasks tab"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1466,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 8
                                },
                                children: [
                                    propertyNotifications.filter((c)=>c.status !== "completed").map((c)=>{
                                        const u = complianceUrgency(c);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                flexWrap: "wrap",
                                                gap: 8,
                                                background: u.bg,
                                                border: `1px solid ${T.line}`,
                                                borderRadius: 8,
                                                padding: "9px 14px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontWeight: 500,
                                                                color: T.ink
                                                            },
                                                            children: c.itemType
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1476,
                                                            columnNumber: 23
                                                        }, this),
                                                        c.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: T.inkSoft,
                                                                fontSize: 13
                                                            },
                                                            children: [
                                                                " — ",
                                                                c.description
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1477,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 12,
                                                                color: T.inkSoft,
                                                                marginTop: 2
                                                            },
                                                            children: [
                                                                "Due ",
                                                                c.dueDate,
                                                                c.amount ? ` · ${money(c.amount)}` : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1478,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1475,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 8
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: u.fg,
                                                                fontSize: 12,
                                                                fontWeight: 700
                                                            },
                                                            children: u.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1484,
                                                            columnNumber: 23
                                                        }, this),
                                                        c.recurrence !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>markComplianceDone(c.id, true),
                                                            style: {
                                                                background: "rgba(255,255,255,0.6)",
                                                                border: `1px solid ${T.line}`,
                                                                borderRadius: 6,
                                                                padding: "4px 8px",
                                                                fontSize: 11.5,
                                                                cursor: "pointer",
                                                                color: T.pine
                                                            },
                                                            children: "Done & renew"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1486,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>markComplianceDone(c.id, false),
                                                            style: {
                                                                background: "rgba(255,255,255,0.6)",
                                                                border: `1px solid ${T.line}`,
                                                                borderRadius: 6,
                                                                padding: "4px 8px",
                                                                fontSize: 11.5,
                                                                cursor: "pointer",
                                                                color: T.inkSoft
                                                            },
                                                            children: "Mark done"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1490,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeCompliance(c.id),
                                                            style: {
                                                                background: "none",
                                                                border: "none",
                                                                cursor: "pointer",
                                                                color: T.inkSoft
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 1494,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1493,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1483,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, c.id, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1474,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    propertyNotifications.filter((c)=>c.status !== "completed").length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: T.inkSoft,
                                            fontStyle: "italic"
                                        },
                                        children: "No outstanding notifications for this property."
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1501,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1468,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1465,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Collapsible, {
                        title: "Property info",
                        subtitle: "Description, ownership, purchase history, insurance, and utility accounts",
                        defaultOpen: false,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 18,
                                    flexWrap: "wrap",
                                    marginBottom: 18
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Owning entity",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "text",
                                                placeholder: "e.g. Cinnity Realty LLC",
                                                value: property.owningEntity || "",
                                                onChange: (e)=>updateProperty(selectedId, "owningEntity", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1510,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1508,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Property type",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                style: inputStyle,
                                                value: property.propertyType || "",
                                                onChange: (e)=>updateProperty(selectedId, "propertyType", e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1515,
                                                        columnNumber: 17
                                                    }, this),
                                                    [
                                                        "Single Family",
                                                        "Condo",
                                                        "Townhouse",
                                                        "Multi-Family",
                                                        "Other"
                                                    ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: t,
                                                            children: t
                                                        }, t, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1517,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1514,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1512,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Bedrooms",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: {
                                                    ...inputStyle,
                                                    width: 80
                                                },
                                                type: "number",
                                                value: property.bedrooms || "",
                                                onChange: (e)=>updateProperty(selectedId, "bedrooms", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1523,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1521,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Bathrooms",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: {
                                                    ...inputStyle,
                                                    width: 80
                                                },
                                                type: "number",
                                                step: "0.5",
                                                value: property.bathrooms || "",
                                                onChange: (e)=>updateProperty(selectedId, "bathrooms", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1527,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1525,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Sq. footage",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: {
                                                    ...inputStyle,
                                                    width: 100
                                                },
                                                type: "number",
                                                value: property.sqft || "",
                                                onChange: (e)=>updateProperty(selectedId, "sqft", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1531,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1529,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1507,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 18,
                                    flexWrap: "wrap",
                                    marginBottom: 18,
                                    paddingTop: 14,
                                    borderTop: `1px solid ${T.line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Date acquired",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "date",
                                                value: property.dateAcquired || "",
                                                onChange: (e)=>updateProperty(selectedId, "dateAcquired", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1538,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1536,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Purchase price",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: {
                                                    ...inputStyle,
                                                    width: 130
                                                },
                                                type: "number",
                                                placeholder: "0",
                                                value: property.purchasePrice || "",
                                                onChange: (e)=>updateProperty(selectedId, "purchasePrice", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1542,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1540,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Renovation spend",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: {
                                                    ...inputStyle,
                                                    width: 130
                                                },
                                                type: "number",
                                                placeholder: "0",
                                                value: property.renovationSpend || "",
                                                onChange: (e)=>updateProperty(selectedId, "renovationSpend", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1546,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1544,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1535,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 18,
                                    flexWrap: "wrap",
                                    marginBottom: 18,
                                    paddingTop: 14,
                                    borderTop: `1px solid ${T.line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Source Serif 4', serif",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            width: "100%",
                                            marginBottom: -4
                                        },
                                        children: "Current tenant contact"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1551,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Name",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "text",
                                                value: property.tenant || "",
                                                onChange: (e)=>updateProperty(selectedId, "tenant", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1554,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1552,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Phone",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "text",
                                                value: property.tenantPhone || "",
                                                onChange: (e)=>updateProperty(selectedId, "tenantPhone", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1558,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1556,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Email",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "email",
                                                value: property.tenantEmail || "",
                                                onChange: (e)=>updateProperty(selectedId, "tenantEmail", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1562,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1560,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "100%",
                                            marginTop: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft
                                                },
                                                children: [
                                                    "Text this tenant",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: tenantMessageDraft,
                                                        onChange: (e)=>setTenantMessageDraft(e.target.value),
                                                        placeholder: property.tenantPhone ? "Type a message…" : "Add a phone number above first",
                                                        rows: 2,
                                                        style: {
                                                            ...inputStyle,
                                                            width: "100%",
                                                            resize: "vertical",
                                                            fontFamily: "inherit"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1568,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1566,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 10,
                                                    marginTop: 6
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: !property.tenantPhone || !tenantMessageDraft.trim() || tenantSmsStatus === "sending",
                                                        onClick: async ()=>{
                                                            setTenantSmsStatus("sending");
                                                            try {
                                                                const res = await fetch("/api/send-tenant-sms", {
                                                                    method: "POST",
                                                                    headers: {
                                                                        "Content-Type": "application/json"
                                                                    },
                                                                    body: JSON.stringify({
                                                                        to: property.tenantPhone,
                                                                        body: tenantMessageDraft
                                                                    })
                                                                });
                                                                const json = await res.json();
                                                                if (json.ok) {
                                                                    setTenantSmsStatus("sent");
                                                                    setTenantMessageDraft("");
                                                                } else {
                                                                    setTenantSmsStatus("error");
                                                                }
                                                            } catch  {
                                                                setTenantSmsStatus("error");
                                                            }
                                                        },
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 6,
                                                            border: "none",
                                                            borderRadius: 6,
                                                            padding: "8px 16px",
                                                            fontSize: 13,
                                                            fontWeight: 600,
                                                            height: 34,
                                                            background: !property.tenantPhone || !tenantMessageDraft.trim() ? T.line : T.pine,
                                                            color: !property.tenantPhone || !tenantMessageDraft.trim() ? T.inkSoft : "#fff",
                                                            cursor: !property.tenantPhone || !tenantMessageDraft.trim() ? "not-allowed" : "pointer"
                                                        },
                                                        children: tenantSmsStatus === "sending" ? "Sending…" : "Send text"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1577,
                                                        columnNumber: 17
                                                    }, this),
                                                    tenantSmsStatus === "sent" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: T.pine
                                                        },
                                                        children: "✓ Sent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1607,
                                                        columnNumber: 48
                                                    }, this),
                                                    tenantSmsStatus === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: T.brick
                                                        },
                                                        children: "Failed to send — check Twilio setup"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1608,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1576,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1565,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1550,
                                columnNumber: 11
                            }, this),
                            property.propertyType === "Condo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 18,
                                    flexWrap: "wrap",
                                    marginBottom: 18,
                                    paddingTop: 14,
                                    borderTop: `1px solid ${T.line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Source Serif 4', serif",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            width: "100%",
                                            marginBottom: -4
                                        },
                                        children: "HOA management"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1615,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft,
                                            flex: 1,
                                            minWidth: 160
                                        },
                                        children: [
                                            "Company name",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "text",
                                                value: property.hoaManagementName || "",
                                                onChange: (e)=>updateProperty(selectedId, "hoaManagementName", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1618,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1616,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Phone",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "text",
                                                value: property.hoaManagementPhone || "",
                                                onChange: (e)=>updateProperty(selectedId, "hoaManagementPhone", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1622,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1620,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft,
                                            flex: 1,
                                            minWidth: 160
                                        },
                                        children: [
                                            "Website",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "text",
                                                placeholder: "https://",
                                                value: property.hoaManagementWebsite || "",
                                                onChange: (e)=>updateProperty(selectedId, "hoaManagementWebsite", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1626,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1624,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1614,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingTop: 14,
                                    borderTop: `1px solid ${T.line}`,
                                    marginBottom: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Source Serif 4', serif",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            marginBottom: 10
                                        },
                                        children: "Insurance"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1632,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 18,
                                            flexWrap: "wrap",
                                            alignItems: "flex-end"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft
                                                },
                                                children: [
                                                    "Company",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: inputStyle,
                                                        type: "text",
                                                        value: property.insuranceCompany || "",
                                                        onChange: (e)=>updateProperty(selectedId, "insuranceCompany", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1636,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1634,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft
                                                },
                                                children: [
                                                    "Policy #",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: inputStyle,
                                                        type: "text",
                                                        value: property.insurancePolicy || "",
                                                        onChange: (e)=>updateProperty(selectedId, "insurancePolicy", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1640,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1638,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft
                                                },
                                                children: [
                                                    "Expiration date",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: inputStyle,
                                                        type: "date",
                                                        value: property.insuranceExpiration || "",
                                                        onChange: (e)=>updateProperty(selectedId, "insuranceExpiration", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1644,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1642,
                                                columnNumber: 15
                                            }, this),
                                            (()=>{
                                                const iu = insuranceUrgency(property.insuranceExpiration);
                                                return iu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: iu.bg,
                                                        color: iu.fg,
                                                        fontSize: 12,
                                                        fontWeight: 600,
                                                        padding: "5px 12px",
                                                        borderRadius: 20,
                                                        marginBottom: 2
                                                    },
                                                    children: iu.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1649,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: T.inkSoft,
                                                        marginBottom: 8
                                                    },
                                                    children: "No expiration date on file"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1651,
                                                    columnNumber: 19
                                                }, this);
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1633,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: T.inkSoft,
                                            marginTop: 8,
                                            fontStyle: "italic"
                                        },
                                        children: "Flags at 90, 60, and 30 days before expiration — shows up in Notifications and the Overview count too."
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1655,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1631,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingTop: 18,
                                    borderTop: `1px solid ${T.line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Source Serif 4', serif",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            marginBottom: 10
                                        },
                                        children: "Utility accounts"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1661,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 10,
                                            flexWrap: "wrap",
                                            marginBottom: 16,
                                            alignItems: "flex-end"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft
                                                },
                                                children: [
                                                    "Utility",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        style: inputStyle,
                                                        value: utilityForm.type,
                                                        onChange: (e)=>setUtilityForm((f)=>({
                                                                    ...f,
                                                                    type: e.target.value
                                                                })),
                                                        children: UTILITY_TYPES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: t,
                                                                children: t
                                                            }, t, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 1667,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1665,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1663,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft,
                                                    flex: 1,
                                                    minWidth: 140
                                                },
                                                children: [
                                                    "Provider",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: inputStyle,
                                                        type: "text",
                                                        placeholder: "e.g. Pepco",
                                                        value: utilityForm.provider,
                                                        onChange: (e)=>setUtilityForm((f)=>({
                                                                    ...f,
                                                                    provider: e.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1673,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1671,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft,
                                                    flex: 1,
                                                    minWidth: 160
                                                },
                                                children: [
                                                    "Account #",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: inputStyle,
                                                        type: "text",
                                                        placeholder: "Account number",
                                                        value: utilityForm.account,
                                                        onChange: (e)=>setUtilityForm((f)=>({
                                                                    ...f,
                                                                    account: e.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1677,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1675,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft
                                                },
                                                children: [
                                                    "Pays",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        style: inputStyle,
                                                        value: utilityForm.payer,
                                                        onChange: (e)=>setUtilityForm((f)=>({
                                                                    ...f,
                                                                    payer: e.target.value
                                                                })),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Tenant",
                                                                children: "Tenant"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 1682,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Landlord",
                                                                children: "Landlord"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 1683,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1681,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1679,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: addUtility,
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 6,
                                                    background: T.pine,
                                                    color: "#fff",
                                                    border: "none",
                                                    borderRadius: 6,
                                                    padding: "9px 16px",
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                    cursor: "pointer",
                                                    height: 37
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1687,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Add"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1686,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1662,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "table-scroll",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            style: {
                                                width: "100%",
                                                borderCollapse: "collapse",
                                                fontSize: 14
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            borderBottom: `2px solid ${T.ink}`
                                                        },
                                                        children: [
                                                            "Utility",
                                                            "Provider",
                                                            "Account #",
                                                            "Pays",
                                                            ""
                                                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    textAlign: "left",
                                                                    padding: "8px 6px",
                                                                    fontSize: 12,
                                                                    textTransform: "uppercase",
                                                                    letterSpacing: "0.05em",
                                                                    color: T.inkSoft
                                                                },
                                                                children: h
                                                            }, h, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 1696,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1694,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1693,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: [
                                                        (utilities[selectedId] || []).map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                style: {
                                                                    borderBottom: `1px solid ${T.line}`
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "9px 6px",
                                                                            fontWeight: 500
                                                                        },
                                                                        children: u.type
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                        lineNumber: 1705,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "9px 6px"
                                                                        },
                                                                        children: u.provider
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                        lineNumber: 1706,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "9px 6px",
                                                                            fontFamily: "'IBM Plex Mono', monospace",
                                                                            color: T.inkSoft
                                                                        },
                                                                        children: u.account
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                        lineNumber: 1707,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "9px 6px"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                background: u.payer === "Tenant" ? T.pineSoft : T.amberSoft,
                                                                                color: u.payer === "Tenant" ? T.pine : "#8A6A2F",
                                                                                fontSize: 12,
                                                                                fontWeight: 600,
                                                                                padding: "3px 10px",
                                                                                borderRadius: 20
                                                                            },
                                                                            children: u.payer
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                            lineNumber: 1709,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                        lineNumber: 1708,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "9px 6px",
                                                                            textAlign: "right"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>removeUtility(selectedId, u.id),
                                                                            style: {
                                                                                background: "none",
                                                                                border: "none",
                                                                                cursor: "pointer",
                                                                                color: T.inkSoft
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                size: 15
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                                lineNumber: 1715,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                            lineNumber: 1714,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                        lineNumber: 1713,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, u.id, true, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 1704,
                                                                columnNumber: 19
                                                            }, this)),
                                                        (!utilities[selectedId] || utilities[selectedId].length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 5,
                                                                style: {
                                                                    padding: "16px 6px",
                                                                    color: T.inkSoft,
                                                                    fontStyle: "italic"
                                                                },
                                                                children: "No utility accounts on file yet."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 1722,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1721,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1702,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1692,
                                            columnNumber: 1
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1691,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1660,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1506,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Collapsible, {
                        title: "Value & Equity",
                        subtitle: "Market value, loan balance, and investment metrics",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 18,
                                    alignItems: "flex-end",
                                    flexWrap: "wrap",
                                    marginBottom: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Current market value",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "number",
                                                placeholder: "0",
                                                value: marketValues[selectedId] ?? "",
                                                onChange: (e)=>updateMarketValue(selectedId, e.target.value === "" ? "" : Number(e.target.value))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1735,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1733,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                        label: "Loan balance",
                                        value: money(perf.loanBalance)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1743,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                        label: "Equity",
                                        value: money(perf.equity),
                                        tone: "pine"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1744,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1732,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 24,
                                    flexWrap: "wrap",
                                    paddingTop: 12,
                                    borderTop: `1px solid ${T.line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                        label: "Debt service",
                                        value: money(perf.debtService),
                                        small: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1747,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                        label: "Net monthly income",
                                        value: money(perf.netMonthlyIncome),
                                        tone: perf.netMonthlyIncome >= 0 ? "pine" : "brick",
                                        small: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1748,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                        label: "Gross rent yield",
                                        value: `${perf.grossYield.toFixed(1)}%`,
                                        small: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1749,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                        label: "Cap rate (est.)",
                                        value: `${perf.capRate.toFixed(1)}%`,
                                        small: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1750,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1746,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: T.inkSoft,
                                    marginTop: 10,
                                    fontStyle: "italic"
                                },
                                children: "Cap rate is estimated from rent minus expenses logged on file — not a full-year actual."
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1752,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1731,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Collapsible, {
                        title: "Annual expenses",
                        subtitle: "Property tax and license drive the monthly figures below; add anything else that only bills once a year",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 18,
                                    flexWrap: "wrap",
                                    marginBottom: 18
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Annual property tax",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: {
                                                    ...inputStyle,
                                                    width: 130
                                                },
                                                type: "number",
                                                placeholder: "0",
                                                value: property.annualPropertyTax || "",
                                                onChange: (e)=>updateProperty(selectedId, "annualPropertyTax", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1761,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1759,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Annual license",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: {
                                                    ...inputStyle,
                                                    width: 130
                                                },
                                                type: "number",
                                                placeholder: "0",
                                                value: property.annualLicense || "",
                                                onChange: (e)=>updateProperty(selectedId, "annualLicense", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1765,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1763,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1758,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingTop: 14,
                                    borderTop: `1px solid ${T.line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Source Serif 4', serif",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            marginBottom: 10
                                        },
                                        children: "Other annual expenses"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1770,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 6,
                                            marginBottom: 12
                                        },
                                        children: [
                                            (annualExpenses[selectedId] || []).map((ae)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        border: `1px solid ${T.line}`,
                                                        borderRadius: 6,
                                                        padding: "7px 12px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 13.5
                                                            },
                                                            children: ae.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1774,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 10
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontFamily: "'IBM Plex Mono', monospace",
                                                                        fontSize: 13.5
                                                                    },
                                                                    children: money(ae.amount)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                    lineNumber: 1776,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeAnnualExpense(selectedId, ae.id),
                                                                    style: {
                                                                        background: "none",
                                                                        border: "none",
                                                                        cursor: "pointer",
                                                                        color: T.inkSoft
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                        lineNumber: 1778,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                    lineNumber: 1777,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1775,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, ae.id, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1773,
                                                    columnNumber: 17
                                                }, this)),
                                            (!annualExpenses[selectedId] || annualExpenses[selectedId].length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: T.inkSoft,
                                                    fontStyle: "italic",
                                                    fontSize: 13.5
                                                },
                                                children: "None on file yet."
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1784,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1771,
                                        columnNumber: 13
                                    }, this),
                                    (()=>{
                                        const [draftDesc, draftAmt] = [
                                            newAnnualExpenseDraft.description,
                                            newAnnualExpenseDraft.amount
                                        ];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 10,
                                                flexWrap: "wrap",
                                                alignItems: "flex-end"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 4,
                                                        fontSize: 12,
                                                        color: T.inkSoft,
                                                        flex: 1,
                                                        minWidth: 160
                                                    },
                                                    children: [
                                                        "Title / description",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            style: inputStyle,
                                                            type: "text",
                                                            placeholder: "e.g. Annual pest control contract",
                                                            value: draftDesc,
                                                            onChange: (e)=>setNewAnnualExpenseDraft((f)=>({
                                                                        ...f,
                                                                        description: e.target.value
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1793,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1791,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 4,
                                                        fontSize: 12,
                                                        color: T.inkSoft
                                                    },
                                                    children: [
                                                        "Amount",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            style: {
                                                                ...inputStyle,
                                                                width: 110
                                                            },
                                                            type: "number",
                                                            placeholder: "0",
                                                            value: draftAmt,
                                                            onChange: (e)=>setNewAnnualExpenseDraft((f)=>({
                                                                        ...f,
                                                                        amount: e.target.value
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1797,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1795,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        addAnnualExpense(selectedId, draftDesc, draftAmt);
                                                        setNewAnnualExpenseDraft({
                                                            description: "",
                                                            amount: ""
                                                        });
                                                    },
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 6,
                                                        background: T.pine,
                                                        color: "#fff",
                                                        border: "none",
                                                        borderRadius: 6,
                                                        padding: "9px 16px",
                                                        fontSize: 13,
                                                        fontWeight: 600,
                                                        cursor: "pointer",
                                                        height: 37
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1806,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Add"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1799,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1790,
                                            columnNumber: 17
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1769,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1757,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Collapsible, {
                        title: "Monthly income & expenses",
                        subtitle: "Click any figure to edit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "6px 0",
                                    fontSize: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Rent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1816,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: T.pine,
                                                    fontWeight: 600
                                                },
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1818,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: property.rent,
                                                onChange: (e)=>updateProperty(selectedId, "rent", e.target.value),
                                                style: {
                                                    width: 90,
                                                    textAlign: "right",
                                                    fontFamily: "'IBM Plex Mono', monospace",
                                                    color: T.pine,
                                                    fontWeight: 600,
                                                    border: `1px solid ${T.line}`,
                                                    borderRadius: 4,
                                                    padding: "3px 6px",
                                                    background: T.paper
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1819,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1817,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1815,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "6px 0",
                                    fontSize: 14,
                                    borderTop: `1px solid ${T.line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: T.inkSoft
                                        },
                                        children: "Property tax (escrow)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1829,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: T.brick
                                                },
                                                children: "−"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1831,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: 90,
                                                    textAlign: "right",
                                                    fontFamily: "'IBM Plex Mono', monospace",
                                                    fontSize: 14,
                                                    color: T.ink,
                                                    display: "inline-block"
                                                },
                                                children: money(perf.propertyTax)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1832,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1830,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1828,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: T.inkSoft,
                                    marginTop: -2,
                                    marginBottom: 2
                                },
                                children: "= Annual property tax ÷ 12 — edit in Annual expenses above"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1835,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "6px 0",
                                    fontSize: 14,
                                    borderTop: `1px solid ${T.line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: T.inkSoft
                                        },
                                        children: "Insurance"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1838,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: T.brick
                                                },
                                                children: "−"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1840,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: rateDrafts.insurance,
                                                placeholder: "0",
                                                onChange: (e)=>setRateDrafts((f)=>({
                                                            ...f,
                                                            insurance: e.target.value
                                                        })),
                                                onBlur: ()=>commitRate("Insurance", "insurance"),
                                                style: {
                                                    width: 90,
                                                    textAlign: "right",
                                                    fontFamily: "'IBM Plex Mono', monospace",
                                                    border: `1px solid ${T.line}`,
                                                    borderRadius: 4,
                                                    padding: "3px 6px",
                                                    background: T.paper,
                                                    color: T.ink
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1841,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1839,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1837,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "6px 0",
                                    fontSize: 14,
                                    borderTop: `1px solid ${T.line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: T.inkSoft
                                        },
                                        children: "HOA"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1847,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: T.brick
                                                },
                                                children: "−"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1849,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: rateDrafts.hoa,
                                                placeholder: "0",
                                                onChange: (e)=>setRateDrafts((f)=>({
                                                            ...f,
                                                            hoa: e.target.value
                                                        })),
                                                onBlur: ()=>commitRate("HOA", "hoa"),
                                                style: {
                                                    width: 90,
                                                    textAlign: "right",
                                                    fontFamily: "'IBM Plex Mono', monospace",
                                                    border: `1px solid ${T.line}`,
                                                    borderRadius: 4,
                                                    padding: "3px 6px",
                                                    background: T.paper,
                                                    color: T.ink
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1850,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1848,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1846,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "6px 0",
                                    fontSize: 14,
                                    borderTop: `1px solid ${T.line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: T.inkSoft
                                        },
                                        children: "Mortgage (P&I)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1856,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: T.brick
                                                },
                                                children: "−"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1858,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: mortgages[selectedId]?.monthlyPayment ?? "",
                                                placeholder: "0",
                                                onChange: (e)=>updateMortgage(selectedId, "monthlyPayment", e.target.value),
                                                style: {
                                                    width: 90,
                                                    textAlign: "right",
                                                    fontFamily: "'IBM Plex Mono', monospace",
                                                    border: `1px solid ${T.line}`,
                                                    borderRadius: 4,
                                                    padding: "3px 6px",
                                                    background: T.paper,
                                                    color: T.ink
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1859,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1857,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1855,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "6px 0",
                                    fontSize: 14,
                                    borderTop: `1px solid ${T.line}`,
                                    flexWrap: "wrap",
                                    gap: 6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Other",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: rateDrafts.otherNote,
                                                placeholder: "description, e.g. Columbia Assoc. fees",
                                                onChange: (e)=>setRateDrafts((f)=>({
                                                            ...f,
                                                            otherNote: e.target.value
                                                        })),
                                                onBlur: commitOther,
                                                style: {
                                                    width: 170,
                                                    fontSize: 12.5,
                                                    border: `1px solid ${T.line}`,
                                                    borderRadius: 4,
                                                    padding: "3px 6px",
                                                    background: T.paper,
                                                    color: T.ink
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1872,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1870,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: T.brick
                                                },
                                                children: "−"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1876,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: rateDrafts.otherAmount,
                                                placeholder: "0",
                                                onChange: (e)=>setRateDrafts((f)=>({
                                                            ...f,
                                                            otherAmount: e.target.value
                                                        })),
                                                onBlur: commitOther,
                                                style: {
                                                    width: 90,
                                                    textAlign: "right",
                                                    fontFamily: "'IBM Plex Mono', monospace",
                                                    border: `1px solid ${T.line}`,
                                                    borderRadius: 4,
                                                    padding: "3px 6px",
                                                    background: T.paper,
                                                    color: T.ink
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1877,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1875,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1869,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "8px 0 4px",
                                    fontSize: 13,
                                    fontWeight: 600,
                                    borderTop: `2px solid ${T.ink}`,
                                    marginTop: 4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Total expenses"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1883,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "'IBM Plex Mono', monospace"
                                        },
                                        children: [
                                            "−",
                                            money(perf.totalMonthlyExpenses)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1884,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1882,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "10px 0 2px",
                                    fontSize: 16,
                                    fontWeight: 700,
                                    borderTop: `3px double ${T.ink}`,
                                    marginTop: 6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Net monthly income"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1887,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            color: perf.netMonthlyIncome >= 0 ? T.pine : T.brick
                                        },
                                        children: money(perf.netMonthlyIncome)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1888,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1886,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: T.inkSoft,
                                    marginTop: 8,
                                    fontStyle: "italic"
                                },
                                children: "Click any figure to edit. Tax/Insurance/HOA/Other post a new dated entry to Reserves below (keeping history); Rent and Mortgage update directly."
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1890,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1814,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: T.paper,
                            border: `1px solid ${T.line}`,
                            borderRadius: 8,
                            padding: "12px 16px",
                            marginBottom: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 18,
                                    alignItems: "flex-end",
                                    flexWrap: "wrap"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Lease start",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "date",
                                                value: property.leaseStart || "",
                                                onChange: (e)=>updateProperty(selectedId, "leaseStart", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1899,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1897,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Lease end",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "date",
                                                value: property.leaseEnd || "",
                                                onChange: (e)=>updateProperty(selectedId, "leaseEnd", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1903,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1901,
                                        columnNumber: 13
                                    }, this),
                                    (()=>{
                                        const lu = leaseUrgency(property.leaseEnd);
                                        return lu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                background: lu.bg,
                                                color: lu.fg,
                                                fontSize: 12,
                                                fontWeight: 600,
                                                padding: "5px 12px",
                                                borderRadius: 20,
                                                marginBottom: 2
                                            },
                                            children: lu.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1908,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 12,
                                                color: T.inkSoft,
                                                marginBottom: 8
                                            },
                                            children: "No lease end date on file"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1910,
                                            columnNumber: 17
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1896,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: T.inkSoft,
                                    marginTop: 10,
                                    fontStyle: "italic"
                                },
                                children: "Flags at 90, 60, and 30 days before lease end, then marks it expired after."
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1914,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1895,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 10,
                            flexWrap: "wrap",
                            marginBottom: 20,
                            alignItems: "flex-end"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 4,
                                    fontSize: 12,
                                    color: T.inkSoft
                                },
                                children: [
                                    "Entry type",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        style: inputStyle,
                                        value: form.type,
                                        onChange: (e)=>setForm((f)=>({
                                                    ...f,
                                                    type: e.target.value
                                                })),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "payment",
                                                children: "Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1923,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "charge",
                                                children: "Charge"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1924,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1922,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1920,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 4,
                                    fontSize: 12,
                                    color: T.inkSoft
                                },
                                children: [
                                    "Amount",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        style: {
                                            ...inputStyle,
                                            width: 100
                                        },
                                        type: "number",
                                        placeholder: "0",
                                        value: form.amount,
                                        onChange: (e)=>setForm((f)=>({
                                                    ...f,
                                                    amount: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1929,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1927,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 4,
                                    fontSize: 12,
                                    color: T.inkSoft
                                },
                                children: [
                                    "Date",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        style: inputStyle,
                                        type: "date",
                                        value: form.date,
                                        onChange: (e)=>setForm((f)=>({
                                                    ...f,
                                                    date: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1933,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1931,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 4,
                                    fontSize: 12,
                                    color: T.inkSoft,
                                    flex: 1,
                                    minWidth: 160
                                },
                                children: [
                                    "Note",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        style: inputStyle,
                                        type: "text",
                                        placeholder: "Optional",
                                        value: form.note,
                                        onChange: (e)=>setForm((f)=>({
                                                    ...f,
                                                    note: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1937,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1935,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: addEntry,
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    background: T.pine,
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 6,
                                    padding: "9px 16px",
                                    fontSize: 13,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    height: 37
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1940,
                                        columnNumber: 13
                                    }, this),
                                    " Post entry"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1939,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1919,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            style: {
                                width: "100%",
                                borderCollapse: "collapse",
                                fontSize: 14
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: `2px solid ${T.ink}`
                                        },
                                        children: [
                                            "Date",
                                            "Type",
                                            "Note",
                                            "Amount",
                                            "Balance"
                                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    textAlign: h === "Amount" || h === "Balance" ? "right" : "left",
                                                    padding: "8px 6px",
                                                    fontSize: 12,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.05em",
                                                    color: T.inkSoft
                                                },
                                                children: h
                                            }, h, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1949,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1947,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1946,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: entries.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                borderBottom: `1px solid ${T.line}`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "9px 6px",
                                                        color: T.inkSoft
                                                    },
                                                    children: e.date
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1958,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "9px 6px"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: e.type === "charge" ? T.brick : T.pine,
                                                            fontWeight: 500
                                                        },
                                                        children: e.type === "charge" ? "Charge" : "Payment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1960,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1959,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "9px 6px",
                                                        color: T.inkSoft
                                                    },
                                                    children: e.note
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1962,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "9px 6px",
                                                        textAlign: "right",
                                                        fontFamily: "'IBM Plex Mono', monospace",
                                                        color: e.type === "charge" ? T.brick : T.pine
                                                    },
                                                    children: [
                                                        e.type === "charge" ? "+" : "−",
                                                        money(e.amount)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1963,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "9px 6px",
                                                        textAlign: "right",
                                                        fontFamily: "'IBM Plex Mono', monospace",
                                                        fontWeight: 600
                                                    },
                                                    children: money(e.running)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1966,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, e.id, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1957,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1955,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 4,
                                                style: {
                                                    padding: "12px 6px",
                                                    fontWeight: 600
                                                },
                                                children: "Current balance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1972,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "12px 6px",
                                                    textAlign: "right",
                                                    fontFamily: "'IBM Plex Mono', monospace",
                                                    fontWeight: 700,
                                                    borderTop: `3px double ${T.ink}`,
                                                    color: balances[selectedId] > 0 ? T.brick : T.pine
                                                },
                                                children: money(balances[selectedId])
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1973,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1971,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1970,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1945,
                            columnNumber: 1
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1944,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Collapsible, {
                        title: "Reserves",
                        subtitle: "Monthly set-asides build a balance; disbursements draw it down when the real bill comes due",
                        defaultOpen: false,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 10,
                                    flexWrap: "wrap",
                                    marginBottom: 16,
                                    alignItems: "flex-end"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Entry type",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                style: inputStyle,
                                                value: escrowForm.type,
                                                onChange: (e)=>setEscrowForm((f)=>({
                                                            ...f,
                                                            type: e.target.value
                                                        })),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "contribution",
                                                        children: "Contribution"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1986,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "disbursement",
                                                        children: "Disbursement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1987,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1985,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1983,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Category",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                style: inputStyle,
                                                value: escrowForm.category,
                                                onChange: (e)=>setEscrowForm((f)=>({
                                                            ...f,
                                                            category: e.target.value
                                                        })),
                                                children: ESCROW_CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c,
                                                        children: c
                                                    }, c, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1994,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1992,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1990,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Amount",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: {
                                                    ...inputStyle,
                                                    width: 100
                                                },
                                                type: "number",
                                                placeholder: "0",
                                                value: escrowForm.amount,
                                                onChange: (e)=>setEscrowForm((f)=>({
                                                            ...f,
                                                            amount: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2000,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1998,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Date",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "date",
                                                value: escrowForm.date,
                                                onChange: (e)=>setEscrowForm((f)=>({
                                                            ...f,
                                                            date: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2004,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2002,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft,
                                            flex: 1,
                                            minWidth: 160
                                        },
                                        children: [
                                            "Note",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "text",
                                                placeholder: "Optional",
                                                value: escrowForm.note,
                                                onChange: (e)=>setEscrowForm((f)=>({
                                                            ...f,
                                                            note: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2008,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2006,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: addEscrowEntry,
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6,
                                            background: T.pine,
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: 6,
                                            padding: "9px 16px",
                                            fontSize: 13,
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            height: 37
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2011,
                                                columnNumber: 15
                                            }, this),
                                            " Post entry"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2010,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1982,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "table-scroll",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    borderBottom: `2px solid ${T.ink}`
                                                },
                                                children: [
                                                    "Date",
                                                    "Type",
                                                    "Category",
                                                    "Note",
                                                    "Amount",
                                                    "Balance",
                                                    ""
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            textAlign: h === "Amount" || h === "Balance" ? "right" : "left",
                                                            padding: "8px 6px",
                                                            fontSize: 12,
                                                            textTransform: "uppercase",
                                                            letterSpacing: "0.05em",
                                                            color: T.inkSoft
                                                        },
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2020,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2018,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2017,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                escrowEntries.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            borderBottom: `1px solid ${T.line}`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px",
                                                                    color: T.inkSoft
                                                                },
                                                                children: e.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2029,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: e.type === "contribution" ? T.pine : T.brick,
                                                                        fontWeight: 500
                                                                    },
                                                                    children: e.type === "contribution" ? "Contribution" : "Disbursement"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                    lineNumber: 2031,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2030,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px"
                                                                },
                                                                children: escrowCategoryLabel(e)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2035,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px",
                                                                    color: T.inkSoft
                                                                },
                                                                children: e.category === "Other" ? "" : e.note
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2036,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px",
                                                                    textAlign: "right",
                                                                    fontFamily: "'IBM Plex Mono', monospace",
                                                                    color: e.type === "contribution" ? T.pine : T.brick
                                                                },
                                                                children: [
                                                                    e.type === "contribution" ? "+" : "−",
                                                                    money(e.amount)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2037,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px",
                                                                    textAlign: "right",
                                                                    fontFamily: "'IBM Plex Mono', monospace",
                                                                    fontWeight: 600
                                                                },
                                                                children: money(e.running)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2040,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px",
                                                                    textAlign: "right"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeEscrowEntry(selectedId, e.id),
                                                                    style: {
                                                                        background: "none",
                                                                        border: "none",
                                                                        cursor: "pointer",
                                                                        color: T.inkSoft
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 15
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                        lineNumber: 2043,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                    lineNumber: 2042,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2041,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, e.id, true, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2028,
                                                        columnNumber: 17
                                                    }, this)),
                                                escrowEntries.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 7,
                                                        style: {
                                                            padding: "16px 6px",
                                                            color: T.inkSoft,
                                                            fontStyle: "italic"
                                                        },
                                                        children: "No reserve activity logged yet."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2050,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 2049,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2026,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 5,
                                                        style: {
                                                            padding: "12px 6px",
                                                            fontWeight: 600
                                                        },
                                                        children: "Reserve balance on hand"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2056,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "12px 6px",
                                                            textAlign: "right",
                                                            fontFamily: "'IBM Plex Mono', monospace",
                                                            fontWeight: 700,
                                                            borderTop: `3px double ${T.ink}`
                                                        },
                                                        children: money(escrowBalance)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2057,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            borderTop: `3px double ${T.ink}`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2060,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2055,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2054,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 2016,
                                    columnNumber: 1
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2015,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1981,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Collapsible, {
                        title: "Mortgage",
                        subtitle: "Kept on file alongside the property record",
                        defaultOpen: false,
                        children: (()=>{
                            const m = mortgages[selectedId] || DEFAULT_MORTGAGE;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                            fontSize: 14,
                                            marginBottom: m.hasMortgage ? 16 : 0,
                                            cursor: "pointer"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: m.hasMortgage,
                                                onChange: (e)=>updateMortgage(selectedId, "hasMortgage", e.target.checked),
                                                style: {
                                                    width: 16,
                                                    height: 16,
                                                    cursor: "pointer",
                                                    accentColor: T.pine
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2073,
                                                columnNumber: 19
                                            }, this),
                                            "This property has a mortgage"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2072,
                                        columnNumber: 17
                                    }, this),
                                    m.hasMortgage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 10,
                                            flexWrap: "wrap"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft
                                                },
                                                children: [
                                                    "Lender",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: inputStyle,
                                                        type: "text",
                                                        placeholder: "e.g. Chase",
                                                        value: m.lender,
                                                        onChange: (e)=>updateMortgage(selectedId, "lender", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2086,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2084,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft
                                                },
                                                children: [
                                                    "Loan #",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: {
                                                            ...inputStyle,
                                                            width: 140
                                                        },
                                                        type: "text",
                                                        placeholder: "Loan / account number",
                                                        value: m.loanNumber,
                                                        onChange: (e)=>updateMortgage(selectedId, "loanNumber", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2090,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2088,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft
                                                },
                                                children: [
                                                    "Rate (%)",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: {
                                                            ...inputStyle,
                                                            width: 90
                                                        },
                                                        type: "number",
                                                        step: "0.01",
                                                        placeholder: "6.50",
                                                        value: m.rate,
                                                        onChange: (e)=>updateMortgage(selectedId, "rate", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2094,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2092,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft
                                                },
                                                children: [
                                                    "Current balance",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: {
                                                            ...inputStyle,
                                                            width: 130
                                                        },
                                                        type: "number",
                                                        placeholder: "0",
                                                        value: m.balance,
                                                        onChange: (e)=>updateMortgage(selectedId, "balance", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2098,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2096,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 4,
                                                    fontSize: 12,
                                                    color: T.inkSoft
                                                },
                                                children: [
                                                    "Monthly payment (P&I)",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: {
                                                            ...inputStyle,
                                                            width: 130
                                                        },
                                                        type: "number",
                                                        placeholder: "0",
                                                        value: m.monthlyPayment,
                                                        onChange: (e)=>updateMortgage(selectedId, "monthlyPayment", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2102,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2100,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2083,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2071,
                                columnNumber: 15
                            }, this);
                        })()
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2067,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Collapsible, {
                        title: "Equipment",
                        subtitle: "Track age against expected lifespan to plan replacements ahead of failure",
                        defaultOpen: false,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 10,
                                    flexWrap: "wrap",
                                    marginBottom: 16,
                                    alignItems: "flex-end"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Type",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                style: inputStyle,
                                                value: equipmentForm.type,
                                                onChange: (e)=>setEquipmentForm((f)=>({
                                                            ...f,
                                                            type: e.target.value
                                                        })),
                                                children: [
                                                    "HVAC",
                                                    "Water Heater",
                                                    "Roof",
                                                    "Refrigerator",
                                                    "Washer/Dryer",
                                                    "Other"
                                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: t,
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2117,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft,
                                            flex: 1,
                                            minWidth: 140
                                        },
                                        children: [
                                            "Make / model",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "text",
                                                placeholder: "Optional",
                                                value: equipmentForm.makeModel,
                                                onChange: (e)=>setEquipmentForm((f)=>({
                                                            ...f,
                                                            makeModel: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2123,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Install date",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inputStyle,
                                                type: "date",
                                                value: equipmentForm.installDate,
                                                onChange: (e)=>setEquipmentForm((f)=>({
                                                            ...f,
                                                            installDate: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2127,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                            fontSize: 12,
                                            color: T.inkSoft
                                        },
                                        children: [
                                            "Expected lifespan (yrs)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: {
                                                    ...inputStyle,
                                                    width: 90
                                                },
                                                type: "number",
                                                placeholder: "15",
                                                value: equipmentForm.lifespan,
                                                onChange: (e)=>setEquipmentForm((f)=>({
                                                            ...f,
                                                            lifespan: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2131,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>addEquipment(selectedId),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6,
                                            background: T.pine,
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: 6,
                                            padding: "9px 16px",
                                            fontSize: 13,
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            height: 37
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2134,
                                                columnNumber: 15
                                            }, this),
                                            " Add"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "table-scroll",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    borderBottom: `2px solid ${T.ink}`
                                                },
                                                children: [
                                                    "Type",
                                                    "Make / model",
                                                    "Installed",
                                                    "Age",
                                                    "Status",
                                                    ""
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            textAlign: "left",
                                                            padding: "8px 6px",
                                                            fontSize: 12,
                                                            textTransform: "uppercase",
                                                            letterSpacing: "0.05em",
                                                            color: T.inkSoft
                                                        },
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2143,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2141,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2140,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                (equipment[selectedId] || []).map((eq)=>{
                                                    const age = equipmentAgeYears(eq.installDate);
                                                    const st = equipmentStatus(age, eq.lifespan);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            borderBottom: `1px solid ${T.line}`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px",
                                                                    fontWeight: 500
                                                                },
                                                                children: eq.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2155,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px",
                                                                    color: T.inkSoft
                                                                },
                                                                children: eq.makeModel || "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2156,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px",
                                                                    color: T.inkSoft
                                                                },
                                                                children: eq.installDate
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2157,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px",
                                                                    fontFamily: "'IBM Plex Mono', monospace"
                                                                },
                                                                children: [
                                                                    age.toFixed(1),
                                                                    " / ",
                                                                    eq.lifespan,
                                                                    " yrs"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2158,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        display: "inline-flex",
                                                                        alignItems: "center",
                                                                        gap: 4,
                                                                        background: st.bg,
                                                                        color: st.fg,
                                                                        fontSize: 12,
                                                                        fontWeight: 600,
                                                                        padding: "3px 10px",
                                                                        borderRadius: 20
                                                                    },
                                                                    children: [
                                                                        st.label === "Past expected life" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                            lineNumber: 2161,
                                                                            columnNumber: 63
                                                                        }, this),
                                                                        st.label
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                    lineNumber: 2160,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2159,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "9px 6px",
                                                                    textAlign: "right"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeEquipment(selectedId, eq.id),
                                                                    style: {
                                                                        background: "none",
                                                                        border: "none",
                                                                        cursor: "pointer",
                                                                        color: T.inkSoft
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 15
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                        lineNumber: 2167,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                    lineNumber: 2166,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2165,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, eq.id, true, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2154,
                                                        columnNumber: 19
                                                    }, this);
                                                }),
                                                (!equipment[selectedId] || equipment[selectedId].length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 6,
                                                        style: {
                                                            padding: "16px 6px",
                                                            color: T.inkSoft,
                                                            fontStyle: "italic"
                                                        },
                                                        children: "No equipment on file yet."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2175,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 2174,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2149,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 2139,
                                    columnNumber: 1
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1462,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 1438,
        columnNumber: 5
    }, this);
}
_s2(Ledgers, "oDCsekNDBTmXMti8bCqnqI7J3CA=");
_c9 = Ledgers;
function Providers({ providers, form, setForm, addProvider, removeProvider }) {
    const inputStyle = {
        border: `1px solid ${T.line}`,
        borderRadius: 6,
        padding: "8px 10px",
        fontSize: 13,
        background: T.paper,
        color: T.ink
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Add a provider",
                subtitle: "Plumbers, HVAC techs, electricians, handymen — anyone you call for repairs"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    marginBottom: 26,
                    alignItems: "flex-end"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft,
                            flex: 1,
                            minWidth: 140
                        },
                        children: [
                            "Name",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "text",
                                value: form.name,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            name: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Trade",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                style: inputStyle,
                                value: form.trade,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            trade: e.target.value
                                        })),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select…"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2200,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        "Plumber",
                                        "Electrician",
                                        "HVAC",
                                        "General Contractor",
                                        "Carpenter",
                                        "Lawyer",
                                        "Landscaper",
                                        "Other"
                                    ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: t,
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2202,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Phone",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "text",
                                value: form.phone,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            phone: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft,
                            flex: 1,
                            minWidth: 160
                        },
                        children: [
                            "Email",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "email",
                                value: form.email,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            email: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2212,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft,
                            flex: 1,
                            minWidth: 160
                        },
                        children: [
                            "Notes",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "text",
                                placeholder: "Optional",
                                value: form.notes,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            notes: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: addProvider,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            background: T.pine,
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            padding: "9px 16px",
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            height: 37
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2219,
                                columnNumber: 11
                            }, this),
                            " Add"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Directory"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                },
                children: [
                    providers.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                border: `1px solid ${T.line}`,
                                borderRadius: 8,
                                padding: "12px 16px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 600
                                            },
                                            children: p.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12,
                                                color: T.pine,
                                                fontWeight: 600,
                                                marginTop: 2
                                            },
                                            children: p.trade
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 14,
                                                marginTop: 6,
                                                fontSize: 13,
                                                color: T.inkSoft
                                            },
                                            children: [
                                                p.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 2231,
                                                            columnNumber: 93
                                                        }, this),
                                                        " ",
                                                        p.phone
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 2231,
                                                    columnNumber: 29
                                                }, this),
                                                p.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 2232,
                                                            columnNumber: 93
                                                        }, this),
                                                        " ",
                                                        p.email
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 2232,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2230,
                                            columnNumber: 15
                                        }, this),
                                        p.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12.5,
                                                color: T.inkSoft,
                                                marginTop: 6,
                                                fontStyle: "italic"
                                            },
                                            children: p.notes
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2234,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 2227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>removeProvider(p.id),
                                    style: {
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        color: T.inkSoft
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2237,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 2236,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 2226,
                            columnNumber: 11
                        }, this)),
                    providers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: T.inkSoft,
                            fontStyle: "italic"
                        },
                        children: "No providers on file yet."
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2241,
                        columnNumber: 36
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 2190,
        columnNumber: 5
    }, this);
}
_c10 = Providers;
function Maintenance({ properties, equipment, providers, maintenance, form, setForm, addMaintenance, updateStatus, removeMaintenance }) {
    _s3();
    const inputStyle = {
        border: `1px solid ${T.line}`,
        borderRadius: 6,
        padding: "8px 10px",
        fontSize: 13,
        background: T.paper,
        color: T.ink
    };
    const propertyName = (id)=>properties.find((p)=>p.id === id)?.name || "—";
    const providerName = (id)=>providers.find((p)=>p.id === id)?.name || "—";
    const equipmentLabel = (propertyId, equipmentId)=>{
        if (!equipmentId) return "—";
        const eq = (equipment[propertyId] || []).find((e)=>e.id === equipmentId);
        return eq ? eq.type : "—";
    };
    const availableEquipment = equipment[form.propertyId] || equipment[Number(form.propertyId)] || [];
    const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Maintenance.useMemo[sorted]": ()=>[
                ...maintenance
            ].sort({
                "Maintenance.useMemo[sorted]": (a, b)=>(a.status === "completed") - (b.status === "completed") || a.scheduledDate.localeCompare(b.scheduledDate)
            }["Maintenance.useMemo[sorted]"])
    }["Maintenance.useMemo[sorted]"], [
        maintenance
    ]);
    const STATUS_STYLE = {
        scheduled: {
            bg: T.amberSoft,
            fg: "#8A6A2F",
            label: "Scheduled"
        },
        in_progress: {
            bg: T.pineSoft,
            fg: T.pine,
            label: "In progress"
        },
        completed: {
            bg: "#EFEBE1",
            fg: T.inkSoft,
            label: "Completed"
        },
        cancelled: {
            bg: T.brickSoft,
            fg: T.brick,
            label: "Cancelled"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Schedule a visit",
                subtitle: "Coordinate across properties, equipment, and providers in one place"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    marginBottom: 26,
                    alignItems: "flex-end"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Property",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                style: inputStyle,
                                value: form.propertyId,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            propertyId: e.target.value,
                                            equipmentId: ""
                                        })),
                                children: properties.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: p.id,
                                        children: p.name
                                    }, p.id, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2278,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Equipment",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                style: inputStyle,
                                value: form.equipmentId,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            equipmentId: e.target.value
                                        })),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Not equipment-specific"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2285,
                                        columnNumber: 13
                                    }, this),
                                    availableEquipment.map((eq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: eq.id,
                                            children: eq.type
                                        }, eq.id, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2287,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Provider",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                style: inputStyle,
                                value: form.providerId,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            providerId: e.target.value
                                        })),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Unassigned"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2294,
                                        columnNumber: 13
                                    }, this),
                                    providers.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: p.name
                                        }, p.id, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2296,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2293,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft,
                            flex: 1,
                            minWidth: 160
                        },
                        children: [
                            "Description",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "text",
                                placeholder: "e.g. Annual HVAC tune-up",
                                value: form.description,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            description: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2302,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Date",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "date",
                                value: form.scheduledDate,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            scheduledDate: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2306,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft,
                            flex: 1,
                            minWidth: 160
                        },
                        children: [
                            "Tenant coordination note",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "text",
                                placeholder: "Optional — access window, contact confirmed, etc.",
                                value: form.note,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            note: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2310,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: addMaintenance,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            background: T.pine,
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            padding: "9px 16px",
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            height: 37
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2313,
                                columnNumber: 11
                            }, this),
                            " Schedule"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2312,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "All visits",
                subtitle: "Across the portfolio, upcoming first"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "table-scroll",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: 14
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    borderBottom: `2px solid ${T.ink}`
                                },
                                children: [
                                    "Date",
                                    "Property",
                                    "Equipment",
                                    "Description",
                                    "Provider",
                                    "Status",
                                    "Note",
                                    ""
                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            textAlign: "left",
                                            padding: "8px 6px",
                                            fontSize: 12,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            color: T.inkSoft
                                        },
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2323,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2321,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 2320,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                sorted.map((m)=>{
                                    const st = STATUS_STYLE[m.status];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: `1px solid ${T.line}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px",
                                                    color: T.inkSoft
                                                },
                                                children: m.scheduledDate
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2334,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px"
                                                },
                                                children: propertyName(m.propertyId)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2335,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px",
                                                    color: T.inkSoft
                                                },
                                                children: equipmentLabel(m.propertyId, m.equipmentId)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2336,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px"
                                                },
                                                children: m.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2337,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px",
                                                    color: T.inkSoft
                                                },
                                                children: providerName(m.providerId)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2338,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: m.status,
                                                    onChange: (e)=>updateStatus(m.id, e.target.value),
                                                    style: {
                                                        background: st.bg,
                                                        color: st.fg,
                                                        fontSize: 12,
                                                        fontWeight: 600,
                                                        padding: "3px 8px",
                                                        borderRadius: 20,
                                                        border: "none",
                                                        cursor: "pointer"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "scheduled",
                                                            children: "Scheduled"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 2345,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "in_progress",
                                                            children: "In progress"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 2346,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "completed",
                                                            children: "Completed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 2347,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "cancelled",
                                                            children: "Cancelled"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 2348,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 2340,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2339,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px",
                                                    color: T.inkSoft,
                                                    fontSize: 12.5,
                                                    maxWidth: 180
                                                },
                                                children: m.note
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2351,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px",
                                                    textAlign: "right"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>removeMaintenance(m.id),
                                                    style: {
                                                        background: "none",
                                                        border: "none",
                                                        cursor: "pointer",
                                                        color: T.inkSoft
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2354,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 2353,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2352,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, m.id, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2333,
                                        columnNumber: 15
                                    }, this);
                                }),
                                sorted.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 8,
                                        style: {
                                            padding: "16px 6px",
                                            color: T.inkSoft,
                                            fontStyle: "italic"
                                        },
                                        children: "No maintenance visits scheduled yet."
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2362,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 2361,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 2329,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PortfolioDashboard.jsx",
                    lineNumber: 2319,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2318,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 2271,
        columnNumber: 5
    }, this);
}
_s3(Maintenance, "bJ0njqnWmG3okb5MUQo2WV0gRWo=");
_c11 = Maintenance;
function Compliance({ properties, compliance, form, setForm, addCompliance, markDone, removeCompliance }) {
    _s4();
    const inputStyle = {
        border: `1px solid ${T.line}`,
        borderRadius: 6,
        padding: "8px 10px",
        fontSize: 13,
        background: T.paper,
        color: T.ink
    };
    const propertyName = (id)=>id === null ? "Portfolio-wide" : properties.find((p)=>p.id === id)?.name || "—";
    const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Compliance.useMemo[sorted]": ()=>[
                ...compliance
            ].sort({
                "Compliance.useMemo[sorted]": (a, b)=>(a.status === "completed") - (b.status === "completed") || a.dueDate.localeCompare(b.dueDate)
            }["Compliance.useMemo[sorted]"])
    }["Compliance.useMemo[sorted]"], [
        compliance
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Add a task",
                subtitle: "Licenses, tax deadlines, insurance renewals — anything with a due date"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    marginBottom: 26,
                    alignItems: "flex-end"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Property",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                style: inputStyle,
                                value: form.propertyId,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            propertyId: e.target.value
                                        })),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Portfolio-wide"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2388,
                                        columnNumber: 13
                                    }, this),
                                    properties.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: p.name
                                        }, p.id, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2390,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2387,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2385,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Type",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                style: inputStyle,
                                value: form.itemType,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            itemType: e.target.value
                                        })),
                                children: [
                                    "Rental License",
                                    "Insurance Renewal",
                                    "Property Tax",
                                    "Lead Paint Certification",
                                    "LLC Annual Report",
                                    "Fire/Safety Inspection",
                                    "Other"
                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: t,
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2398,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2394,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft,
                            flex: 1,
                            minWidth: 160
                        },
                        children: [
                            "Description",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "text",
                                placeholder: "Optional detail",
                                value: form.description,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            description: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2404,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2402,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Due date",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "date",
                                value: form.dueDate,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            dueDate: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2408,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2406,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Amount",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: {
                                    ...inputStyle,
                                    width: 100
                                },
                                type: "number",
                                placeholder: "Optional",
                                value: form.amount,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            amount: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Recurrence",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                style: inputStyle,
                                value: form.recurrence,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            recurrence: e.target.value
                                        })),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "annual",
                                        children: "Annual"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2417,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "semi_annual",
                                        children: "Semi-annual"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2418,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "quarterly",
                                        children: "Quarterly"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2419,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "none",
                                        children: "One-time"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2420,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2416,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: addCompliance,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            background: T.pine,
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            padding: "9px 16px",
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            height: 37
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2424,
                                columnNumber: 11
                            }, this),
                            " Add"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2423,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "All items",
                subtitle: "Soonest due first — mark done, or mark done and roll to the next cycle"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "table-scroll",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: 14
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    borderBottom: `2px solid ${T.ink}`
                                },
                                children: [
                                    "Due",
                                    "Property",
                                    "Type",
                                    "Description",
                                    "Amount",
                                    "Status",
                                    ""
                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            textAlign: h === "Amount" ? "right" : "left",
                                            padding: "8px 6px",
                                            fontSize: 12,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            color: T.inkSoft
                                        },
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2434,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2432,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 2431,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                sorted.map((c)=>{
                                    const u = complianceUrgency(c);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: `1px solid ${T.line}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px",
                                                    color: T.inkSoft
                                                },
                                                children: c.dueDate
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2445,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px"
                                                },
                                                children: propertyName(c.propertyId)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2446,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px",
                                                    fontWeight: 500
                                                },
                                                children: c.itemType
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2447,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px",
                                                    color: T.inkSoft
                                                },
                                                children: c.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2448,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px",
                                                    textAlign: "right",
                                                    fontFamily: "'IBM Plex Mono', monospace",
                                                    color: T.inkSoft
                                                },
                                                children: c.amount ? money(c.amount) : "—"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2449,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: u.bg,
                                                        color: u.fg,
                                                        fontSize: 12,
                                                        fontWeight: 600,
                                                        padding: "3px 10px",
                                                        borderRadius: 20
                                                    },
                                                    children: u.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 2451,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2450,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "9px 6px",
                                                    textAlign: "right",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: [
                                                    c.status !== "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            c.recurrence !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>markDone(c.id, true),
                                                                style: {
                                                                    background: "none",
                                                                    border: `1px solid ${T.line}`,
                                                                    borderRadius: 6,
                                                                    padding: "4px 8px",
                                                                    fontSize: 11.5,
                                                                    cursor: "pointer",
                                                                    color: T.pine,
                                                                    marginRight: 6
                                                                },
                                                                children: "Done & renew"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2457,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>markDone(c.id, false),
                                                                style: {
                                                                    background: "none",
                                                                    border: `1px solid ${T.line}`,
                                                                    borderRadius: 6,
                                                                    padding: "4px 8px",
                                                                    fontSize: 11.5,
                                                                    cursor: "pointer",
                                                                    color: T.inkSoft,
                                                                    marginRight: 6
                                                                },
                                                                children: "Mark done"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 2461,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2455,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeCompliance(c.id),
                                                        style: {
                                                            background: "none",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            color: T.inkSoft,
                                                            verticalAlign: "middle"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 2467,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 2466,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2453,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2444,
                                        columnNumber: 15
                                    }, this);
                                }),
                                sorted.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 7,
                                        style: {
                                            padding: "16px 6px",
                                            color: T.inkSoft,
                                            fontStyle: "italic"
                                        },
                                        children: "No tasks on file yet."
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2475,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 2474,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 2440,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PortfolioDashboard.jsx",
                    lineNumber: 2430,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2429,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 2382,
        columnNumber: 5
    }, this);
}
_s4(Compliance, "bJ0njqnWmG3okb5MUQo2WV0gRWo=");
_c12 = Compliance;
function Expenses({ expenses, properties, form, setForm, addExpense, removeExpense }) {
    const nameFor = (id)=>properties.find((p)=>p.id === id)?.name || "—";
    const inputStyle = {
        border: `1px solid ${T.line}`,
        borderRadius: 6,
        padding: "8px 10px",
        fontSize: 13,
        background: T.paper,
        color: T.ink
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Log an expense"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2491,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    marginBottom: 26,
                    alignItems: "flex-end"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Property",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                style: inputStyle,
                                value: form.propertyId,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            propertyId: e.target.value
                                        })),
                                children: properties.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: p.id,
                                        children: p.name
                                    }, p.id, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2497,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2495,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2493,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Category",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                style: inputStyle,
                                value: form.category,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            category: e.target.value
                                        })),
                                children: CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: c,
                                        children: c
                                    }, c, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2505,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2503,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft,
                            minWidth: 140
                        },
                        children: [
                            "Vendor / recipient",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "text",
                                placeholder: "Who was paid",
                                value: form.vendor,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            vendor: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2511,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2509,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Amount",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: {
                                    ...inputStyle,
                                    width: 100
                                },
                                type: "number",
                                placeholder: "0",
                                value: form.amount,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            amount: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2515,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2513,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft
                        },
                        children: [
                            "Date",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "date",
                                value: form.date,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            date: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2519,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2517,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            fontSize: 12,
                            color: T.inkSoft,
                            flex: 1,
                            minWidth: 160
                        },
                        children: [
                            "Note",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "text",
                                placeholder: "Optional",
                                value: form.note,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            note: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2523,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2521,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: addExpense,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            background: T.pine,
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            padding: "9px 16px",
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            height: 37
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2526,
                                columnNumber: 11
                            }, this),
                            " Add"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2525,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2492,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Expense log"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2530,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "table-scroll",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: 14
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    borderBottom: `2px solid ${T.ink}`
                                },
                                children: [
                                    "Date",
                                    "Property",
                                    "Category",
                                    "Vendor / recipient",
                                    "Note",
                                    "Amount",
                                    ""
                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            textAlign: h === "Amount" ? "right" : "left",
                                            padding: "8px 6px",
                                            fontSize: 12,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            color: T.inkSoft
                                        },
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2536,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2534,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 2533,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: expenses.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        borderBottom: `1px solid ${T.line}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px",
                                                color: T.inkSoft
                                            },
                                            children: e.date
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2545,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px"
                                            },
                                            children: nameFor(e.propertyId)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2546,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px"
                                            },
                                            children: e.category
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2547,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px"
                                            },
                                            children: e.vendor
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2548,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px",
                                                color: T.inkSoft
                                            },
                                            children: e.note
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2549,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px",
                                                textAlign: "right",
                                                fontFamily: "'IBM Plex Mono', monospace"
                                            },
                                            children: money(e.amount)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2550,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px",
                                                textAlign: "right"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removeExpense(e.id),
                                                style: {
                                                    background: "none",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    color: T.inkSoft
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 2553,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2552,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 2551,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, e.id, true, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 2544,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 2542,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 5,
                                        style: {
                                            padding: "12px 6px",
                                            fontWeight: 600
                                        },
                                        children: "Total expenses"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2561,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "12px 6px",
                                            textAlign: "right",
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            fontWeight: 600,
                                            borderTop: `3px double ${T.ink}`
                                        },
                                        children: money(expenses.reduce((s, e)=>s + e.amount, 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2562,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2565,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2560,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 2559,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PortfolioDashboard.jsx",
                    lineNumber: 2532,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2531,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 2490,
        columnNumber: 5
    }, this);
}
_c13 = Expenses;
function Reports({ byProperty, byCategory, stats }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Net income by property",
                subtitle: "Monthly rent minus logged expenses"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2577,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 260,
                    marginBottom: 32
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: byProperty,
                        margin: {
                            left: -10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                stroke: T.line,
                                vertical: false
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2581,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "name",
                                tick: {
                                    fontSize: 11,
                                    fill: T.inkSoft
                                },
                                angle: -20,
                                textAnchor: "end",
                                height: 50
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2582,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                tick: {
                                    fontSize: 11,
                                    fill: T.inkSoft
                                },
                                tickFormatter: (v)=>`$${v / 1000}k`
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2583,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                formatter: (v)=>money(v),
                                contentStyle: {
                                    fontSize: 13,
                                    border: `1px solid ${T.line}`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2584,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "net",
                                fill: T.pine,
                                radius: [
                                    3,
                                    3,
                                    0,
                                    0
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2585,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2580,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PortfolioDashboard.jsx",
                    lineNumber: 2579,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2578,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Expenses by category"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2590,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 260,
                            height: 220
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                        data: byCategory,
                                        dataKey: "value",
                                        nameKey: "name",
                                        innerRadius: 55,
                                        outerRadius: 85,
                                        paddingAngle: 2,
                                        children: byCategory.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                fill: PIE_COLORS[i % PIE_COLORS.length]
                                            }, i, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 2597,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2595,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        formatter: (v)=>money(v)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2600,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2594,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 2593,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2592,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 8
                        },
                        children: byCategory.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    fontSize: 13
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 10,
                                            height: 10,
                                            borderRadius: 2,
                                            background: PIE_COLORS[i % PIE_COLORS.length]
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2607,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 100
                                        },
                                        children: c.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2608,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            color: T.inkSoft
                                        },
                                        children: money(c.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 2609,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, c.name, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 2606,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2604,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2591,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 28,
                    paddingTop: 16,
                    borderTop: `3px double ${T.ink}`,
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 16,
                    fontWeight: 600
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Net cash flow, month to date"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2616,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'IBM Plex Mono', monospace",
                            color: stats.net >= 0 ? T.pine : T.brick
                        },
                        children: money(stats.net)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 2617,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 2615,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 2576,
        columnNumber: 5
    }, this);
}
_c14 = Reports;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "PortfolioDashboard");
__turbopack_context__.k.register(_c1, "KpiCard");
__turbopack_context__.k.register(_c2, "MiniStat");
__turbopack_context__.k.register(_c3, "Collapsible");
__turbopack_context__.k.register(_c4, "SectionTitle");
__turbopack_context__.k.register(_c5, "Overview");
__turbopack_context__.k.register(_c6, "Snapshot");
__turbopack_context__.k.register(_c7, "AttentionRow");
__turbopack_context__.k.register(_c8, "Properties");
__turbopack_context__.k.register(_c9, "Ledgers");
__turbopack_context__.k.register(_c10, "Providers");
__turbopack_context__.k.register(_c11, "Maintenance");
__turbopack_context__.k.register(_c12, "Compliance");
__turbopack_context__.k.register(_c13, "Expenses");
__turbopack_context__.k.register(_c14, "Reports");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_PortfolioDashboard_jsx_11ew5n3._.js.map