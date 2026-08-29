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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scroll-text.js [app-client] (ecmascript) <export default as ScrollText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
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
`;
// ---------- sample properties ----------
const SEED_PROPERTIES = [
    {
        id: 1,
        name: "412 Maple Row",
        city: "Bethesda, MD",
        tenant: "J. Alvarez",
        rent: 2450
    },
    {
        id: 2,
        name: "88 Larkspur Ct",
        city: "Rockville, MD",
        tenant: "T. Nguyen",
        rent: 1980
    },
    {
        id: 3,
        name: "1207 Cobalt Ave",
        city: "Silver Spring, MD",
        tenant: "M. Okafor",
        rent: 2100
    },
    {
        id: 4,
        name: "56 Windmere Ln",
        city: "Bethesda, MD",
        tenant: "R. Fischer",
        rent: 2600
    },
    {
        id: 5,
        name: "301 Birchwood Dr",
        city: "Gaithersburg, MD",
        tenant: "S. Patel",
        rent: 1875
    },
    {
        id: 6,
        name: "19 Copperfield Way",
        city: "Rockville, MD",
        tenant: "L. Kowalski",
        rent: 2225
    },
    {
        id: 7,
        name: "742 Thistle St",
        city: "Silver Spring, MD",
        tenant: "D. Reyes",
        rent: 1990
    },
    {
        id: 8,
        name: "5 Harrow Mews",
        city: "Bethesda, MD",
        tenant: "A. Kim",
        rent: 2750
    },
    {
        id: 9,
        name: "234 Foxglove Ter",
        city: "Gaithersburg, MD",
        tenant: "C. Osei",
        rent: 1840
    },
    {
        id: 10,
        name: "77 Pemberton Rd",
        city: "Rockville, MD",
        tenant: "N. Volkov",
        rent: 2380
    }
];
const MONTHS = [
    {
        date: "2026-06-01",
        label: "June"
    },
    {
        date: "2026-07-01",
        label: "July"
    },
    {
        date: "2026-08-01",
        label: "August"
    }
];
// charges: rent posted on the 1st of each month for every property
function genCharges() {
    let id = 1;
    const rows = [];
    MONTHS.forEach((m)=>{
        SEED_PROPERTIES.forEach((p)=>{
            rows.push({
                id: id++,
                propertyId: p.id,
                date: m.date,
                type: "charge",
                amount: p.rent,
                note: `${m.label} rent`
            });
        });
    });
    return rows;
}
// hand-authored payment history so the portfolio shows a realistic mix:
// fully current, partial-but-caught-up, and behind on multiple months
const SEED_PAYMENTS = [
    // 1 — always pays in full, on time
    {
        propertyId: 1,
        date: "2026-06-02",
        amount: 2450,
        note: "Full payment"
    },
    {
        propertyId: 1,
        date: "2026-07-01",
        amount: 2450,
        note: "Full payment"
    },
    {
        propertyId: 1,
        date: "2026-08-02",
        amount: 2450,
        note: "Full payment"
    },
    // 2 — on time, full
    {
        propertyId: 2,
        date: "2026-06-03",
        amount: 1980,
        note: "Full payment"
    },
    {
        propertyId: 2,
        date: "2026-07-03",
        amount: 1980,
        note: "Full payment"
    },
    {
        propertyId: 2,
        date: "2026-08-03",
        amount: 1980,
        note: "Full payment"
    },
    // 3 — current through July, August not yet paid
    {
        propertyId: 3,
        date: "2026-06-05",
        amount: 2100,
        note: "Full payment"
    },
    {
        propertyId: 3,
        date: "2026-07-04",
        amount: 2100,
        note: "Full payment"
    },
    // 4 — full, on time
    {
        propertyId: 4,
        date: "2026-06-01",
        amount: 2600,
        note: "Full payment"
    },
    {
        propertyId: 4,
        date: "2026-07-01",
        amount: 2600,
        note: "Full payment"
    },
    {
        propertyId: 4,
        date: "2026-08-01",
        amount: 2600,
        note: "Full payment"
    },
    // 5 — behind: partial every month, gap keeps growing
    {
        propertyId: 5,
        date: "2026-06-08",
        amount: 1200,
        note: "Partial payment"
    },
    {
        propertyId: 5,
        date: "2026-06-22",
        amount: 400,
        note: "Partial payment"
    },
    {
        propertyId: 5,
        date: "2026-07-10",
        amount: 900,
        note: "Partial payment"
    },
    {
        propertyId: 5,
        date: "2026-08-06",
        amount: 500,
        note: "Partial payment"
    },
    // 6 — full, on time
    {
        propertyId: 6,
        date: "2026-06-02",
        amount: 2225,
        note: "Full payment"
    },
    {
        propertyId: 6,
        date: "2026-07-02",
        amount: 2225,
        note: "Full payment"
    },
    {
        propertyId: 6,
        date: "2026-08-02",
        amount: 2225,
        note: "Full payment"
    },
    // 7 — caught up through July, made a partial payment for August
    {
        propertyId: 7,
        date: "2026-06-04",
        amount: 1990,
        note: "Full payment"
    },
    {
        propertyId: 7,
        date: "2026-07-05",
        amount: 1990,
        note: "Full payment"
    },
    {
        propertyId: 7,
        date: "2026-08-09",
        amount: 1200,
        note: "Partial payment — remainder due"
    },
    // 8 — full, on time
    {
        propertyId: 8,
        date: "2026-06-01",
        amount: 2750,
        note: "Full payment"
    },
    {
        propertyId: 8,
        date: "2026-07-01",
        amount: 2750,
        note: "Full payment"
    },
    {
        propertyId: 8,
        date: "2026-08-01",
        amount: 2750,
        note: "Full payment"
    },
    // 9 — full, on time
    {
        propertyId: 9,
        date: "2026-06-03",
        amount: 1840,
        note: "Full payment"
    },
    {
        propertyId: 9,
        date: "2026-07-03",
        amount: 1840,
        note: "Full payment"
    },
    {
        propertyId: 9,
        date: "2026-08-03",
        amount: 1840,
        note: "Full payment"
    },
    // 10 — missed July entirely, partial in August
    {
        propertyId: 10,
        date: "2026-06-05",
        amount: 2380,
        note: "Full payment"
    },
    {
        propertyId: 10,
        date: "2026-08-12",
        amount: 900,
        note: "Partial payment"
    }
];
function genPayments() {
    let id = 500;
    return SEED_PAYMENTS.map((p)=>({
            id: id++,
            type: "payment",
            ...p
        }));
}
const SEED_LEDGER = [
    ...genCharges(),
    ...genPayments()
];
const SEED_EXPENSES = [
    {
        id: 1,
        propertyId: 1,
        category: "Maintenance",
        amount: 240,
        date: "2026-08-03",
        note: "HVAC filter service"
    },
    {
        id: 2,
        propertyId: 4,
        category: "Insurance",
        amount: 610,
        date: "2026-08-05",
        note: "Annual premium"
    },
    {
        id: 3,
        propertyId: 5,
        category: "Repairs",
        amount: 890,
        date: "2026-08-11",
        note: "Water heater replacement"
    },
    {
        id: 4,
        propertyId: 8,
        category: "Property Tax",
        amount: 1450,
        date: "2026-08-14",
        note: "Q3 installment"
    },
    {
        id: 5,
        propertyId: 3,
        category: "Maintenance",
        amount: 180,
        date: "2026-08-18",
        note: "Gutter cleaning"
    },
    {
        id: 6,
        propertyId: 10,
        category: "Legal",
        amount: 320,
        date: "2026-08-20",
        note: "Lease renewal review"
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
// utility accounts per property — kept here for continuity across tenant turnover
const SEED_UTILITIES = {
    1: [
        {
            id: 1,
            type: "Electric",
            provider: "Pepco",
            account: "6104-882-1130",
            payer: "Tenant"
        },
        {
            id: 2,
            type: "Water/Sewer",
            provider: "WSSC Water",
            account: "WS-44219",
            payer: "Landlord"
        },
        {
            id: 3,
            type: "Trash",
            provider: "Montgomery County DEP",
            account: "MC-77410",
            payer: "Landlord"
        }
    ],
    2: [
        {
            id: 1,
            type: "Electric",
            provider: "Pepco",
            account: "6104-772-9012",
            payer: "Tenant"
        },
        {
            id: 2,
            type: "Gas",
            provider: "Washington Gas",
            account: "WG-55821",
            payer: "Tenant"
        },
        {
            id: 3,
            type: "Water/Sewer",
            provider: "WSSC Water",
            account: "WS-19087",
            payer: "Landlord"
        }
    ],
    3: [
        {
            id: 1,
            type: "Electric",
            provider: "Pepco",
            account: "6104-341-7723",
            payer: "Tenant"
        },
        {
            id: 2,
            type: "Water/Sewer",
            provider: "WSSC Water",
            account: "WS-30945",
            payer: "Landlord"
        }
    ],
    4: [
        {
            id: 1,
            type: "Electric",
            provider: "Pepco",
            account: "6104-990-2287",
            payer: "Tenant"
        },
        {
            id: 2,
            type: "Gas",
            provider: "Washington Gas",
            account: "WG-11238",
            payer: "Tenant"
        },
        {
            id: 3,
            type: "Water/Sewer",
            provider: "WSSC Water",
            account: "WS-58821",
            payer: "Landlord"
        },
        {
            id: 4,
            type: "Trash",
            provider: "Montgomery County DEP",
            account: "MC-20194",
            payer: "Landlord"
        }
    ],
    5: [
        {
            id: 1,
            type: "Electric",
            provider: "Pepco",
            account: "6104-118-6634",
            payer: "Tenant"
        },
        {
            id: 2,
            type: "Water/Sewer",
            provider: "WSSC Water",
            account: "WS-77201",
            payer: "Landlord"
        }
    ],
    6: [
        {
            id: 1,
            type: "Electric",
            provider: "Pepco",
            account: "6104-556-3391",
            payer: "Tenant"
        },
        {
            id: 2,
            type: "Water/Sewer",
            provider: "WSSC Water",
            account: "WS-40218",
            payer: "Landlord"
        },
        {
            id: 3,
            type: "Internet",
            provider: "Xfinity",
            account: "XF-90271",
            payer: "Tenant"
        }
    ],
    7: [
        {
            id: 1,
            type: "Electric",
            provider: "Pepco",
            account: "6104-227-8850",
            payer: "Tenant"
        },
        {
            id: 2,
            type: "Water/Sewer",
            provider: "WSSC Water",
            account: "WS-63317",
            payer: "Landlord"
        }
    ],
    8: [
        {
            id: 1,
            type: "Electric",
            provider: "Pepco",
            account: "6104-664-1128",
            payer: "Tenant"
        },
        {
            id: 2,
            type: "Gas",
            provider: "Washington Gas",
            account: "WG-77043",
            payer: "Tenant"
        },
        {
            id: 3,
            type: "Water/Sewer",
            provider: "WSSC Water",
            account: "WS-88512",
            payer: "Landlord"
        },
        {
            id: 4,
            type: "Trash",
            provider: "Montgomery County DEP",
            account: "MC-33087",
            payer: "Landlord"
        }
    ],
    9: [
        {
            id: 1,
            type: "Electric",
            provider: "Pepco",
            account: "6104-449-2761",
            payer: "Tenant"
        },
        {
            id: 2,
            type: "Water/Sewer",
            provider: "WSSC Water",
            account: "WS-25610",
            payer: "Landlord"
        }
    ],
    10: [
        {
            id: 1,
            type: "Electric",
            provider: "Pepco",
            account: "6104-803-5514",
            payer: "Tenant"
        },
        {
            id: 2,
            type: "Gas",
            provider: "Washington Gas",
            account: "WG-38820",
            payer: "Tenant"
        },
        {
            id: 3,
            type: "Water/Sewer",
            provider: "WSSC Water",
            account: "WS-91274",
            payer: "Landlord"
        }
    ]
};
const ESCROW_CATEGORIES = [
    "Property Tax",
    "Insurance",
    "HOA",
    "Other"
];
// escrow-style reserves: small monthly contributions build up a balance,
// then a disbursement draws it down when the actual bill comes due
const SEED_ESCROW = {
    1: [
        {
            id: 1,
            type: "contribution",
            category: "Property Tax",
            amount: 310,
            date: "2026-06-01",
            note: "Monthly set-aside"
        },
        {
            id: 2,
            type: "contribution",
            category: "Property Tax",
            amount: 310,
            date: "2026-07-01",
            note: "Monthly set-aside"
        },
        {
            id: 3,
            type: "contribution",
            category: "Property Tax",
            amount: 310,
            date: "2026-08-01",
            note: "Monthly set-aside"
        },
        {
            id: 4,
            type: "contribution",
            category: "Insurance",
            amount: 95,
            date: "2026-06-01",
            note: "Monthly set-aside"
        },
        {
            id: 5,
            type: "contribution",
            category: "Insurance",
            amount: 95,
            date: "2026-07-01",
            note: "Monthly set-aside"
        },
        {
            id: 6,
            type: "contribution",
            category: "Insurance",
            amount: 95,
            date: "2026-08-01",
            note: "Monthly set-aside"
        }
    ],
    4: [
        {
            id: 1,
            type: "contribution",
            category: "Property Tax",
            amount: 365,
            date: "2026-06-01",
            note: "Monthly set-aside"
        },
        {
            id: 2,
            type: "contribution",
            category: "Property Tax",
            amount: 365,
            date: "2026-07-01",
            note: "Monthly set-aside"
        },
        {
            id: 3,
            type: "contribution",
            category: "Property Tax",
            amount: 365,
            date: "2026-08-01",
            note: "Monthly set-aside"
        },
        {
            id: 4,
            type: "disbursement",
            category: "Property Tax",
            amount: 1450,
            date: "2026-07-15",
            note: "Semi-annual county tax bill"
        },
        {
            id: 5,
            type: "contribution",
            category: "HOA",
            amount: 210,
            date: "2026-06-01",
            note: "Monthly set-aside"
        },
        {
            id: 6,
            type: "contribution",
            category: "HOA",
            amount: 210,
            date: "2026-07-01",
            note: "Monthly set-aside"
        },
        {
            id: 7,
            type: "contribution",
            category: "HOA",
            amount: 210,
            date: "2026-08-01",
            note: "Monthly set-aside"
        },
        {
            id: 8,
            type: "disbursement",
            category: "HOA",
            amount: 630,
            date: "2026-08-01",
            note: "Quarterly HOA invoice"
        }
    ],
    8: [
        {
            id: 1,
            type: "contribution",
            category: "Property Tax",
            amount: 380,
            date: "2026-06-01",
            note: "Monthly set-aside"
        },
        {
            id: 2,
            type: "contribution",
            category: "Property Tax",
            amount: 380,
            date: "2026-07-01",
            note: "Monthly set-aside"
        },
        {
            id: 3,
            type: "contribution",
            category: "Property Tax",
            amount: 380,
            date: "2026-08-01",
            note: "Monthly set-aside"
        },
        {
            id: 4,
            type: "disbursement",
            category: "Property Tax",
            amount: 1450,
            date: "2026-08-14",
            note: "Semi-annual county tax bill"
        },
        {
            id: 5,
            type: "contribution",
            category: "Insurance",
            amount: 110,
            date: "2026-06-01",
            note: "Monthly set-aside"
        },
        {
            id: 6,
            type: "contribution",
            category: "Insurance",
            amount: 110,
            date: "2026-07-01",
            note: "Monthly set-aside"
        },
        {
            id: 7,
            type: "contribution",
            category: "Insurance",
            amount: 110,
            date: "2026-08-01",
            note: "Monthly set-aside"
        }
    ]
};
const DEFAULT_MORTGAGE = {
    hasMortgage: false,
    lender: "",
    rate: "",
    balance: "",
    monthlyPayment: ""
};
// mortgage details per property — unchecked properties are owned free and clear
const SEED_MORTGAGES = {
    2: {
        hasMortgage: true,
        lender: "Chase",
        rate: "6.25",
        balance: "312000",
        monthlyPayment: "2150"
    },
    3: {
        hasMortgage: true,
        lender: "Wells Fargo",
        rate: "6.75",
        balance: "298000",
        monthlyPayment: "2080"
    },
    5: {
        hasMortgage: true,
        lender: "Rocket Mortgage",
        rate: "7.10",
        balance: "245000",
        monthlyPayment: "1890"
    },
    7: {
        hasMortgage: true,
        lender: "Chase",
        rate: "6.40",
        balance: "276000",
        monthlyPayment: "1975"
    },
    10: {
        hasMortgage: true,
        lender: "US Bank",
        rate: "6.90",
        balance: "301000",
        monthlyPayment: "2210"
    }
};
// estimated current market value per property, entered/updated manually (e.g. from an appraisal, a Zestimate, or your own judgment)
const SEED_MARKET_VALUES = {
    1: 480000,
    2: 395000,
    3: 420000,
    4: 545000,
    5: 365000,
    6: 445000,
    7: 398000,
    8: 560000,
    9: 372000,
    10: 470000
};
const money = (n)=>n.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    });
const STORAGE_KEY = "portfolio-data";
const TODAY = "2026-08-28";
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
    const d = new Date(dateStr);
    if (recurrence === "quarterly") d.setMonth(d.getMonth() + 3);
    else if (recurrence === "semi_annual") d.setMonth(d.getMonth() + 6);
    else d.setFullYear(d.getFullYear() + 1); // default annual
    return d.toISOString().slice(0, 10);
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
// pulls together value, debt, and rent data into investment-performance metrics for one property
function propertyPerformance(property, { marketValues, mortgages, expenses }) {
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
    const estMonthlyCashFlow = property.rent - debtService;
    return {
        marketValue,
        loanBalance,
        equity,
        debtService,
        expensesLogged,
        capRate,
        grossYield,
        estMonthlyCashFlow
    };
}
function PortfolioDashboard() {
    _s();
    const [properties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEED_PROPERTIES);
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
        if (!providerForm.name || !providerForm.trade) return;
        setProviders((ps)=>[
                ...ps,
                {
                    id: Date.now(),
                    ...providerForm
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
        recurrence: "annual"
    });
    const addCompliance = ()=>{
        if (!complianceForm.dueDate) return;
        setCompliance((cs)=>[
                ...cs,
                {
                    id: Date.now(),
                    propertyId: complianceForm.propertyId ? Number(complianceForm.propertyId) : null,
                    itemType: complianceForm.itemType,
                    description: complianceForm.description,
                    dueDate: complianceForm.dueDate,
                    recurrence: complianceForm.recurrence,
                    status: "upcoming"
                }
            ]);
        setComplianceForm({
            propertyId: "",
            itemType: "Rental License",
            description: "",
            dueDate: "",
            recurrence: "annual"
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
    // load saved data once on mount; fall back to seed data if nothing saved yet
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioDashboard.useEffect": ()=>{
            ({
                "PortfolioDashboard.useEffect": async ()=>{
                    try {
                        const res = await fetch("/api/portfolio");
                        const json = await res.json();
                        const data = json?.data || {};
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
                                ledger,
                                expenses,
                                utilities,
                                escrow,
                                mortgages,
                                marketValues,
                                providers,
                                equipment,
                                maintenance,
                                compliance
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
        ledger,
        expenses,
        utilities,
        escrow,
        mortgages,
        marketValues,
        providers,
        equipment,
        maintenance,
        compliance
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
                    amount: Number(expenseForm.amount),
                    date: expenseForm.date,
                    note: expenseForm.note
                },
                ...es
            ]);
        setExpenseForm((f)=>({
                ...f,
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
            const complianceDueSoon = compliance.filter({
                "PortfolioDashboard.useMemo[stats]": (c)=>c.status !== "completed" && daysUntil(c.dueDate) <= 30
            }["PortfolioDashboard.useMemo[stats]"]).length;
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
                complianceDueSoon
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
            label: "Compliance",
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
                lineNumber: 604,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    borderBottom: `1px solid ${T.line}`,
                    padding: "28px 32px 22px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Source Serif 4', serif",
                                    fontSize: 30,
                                    fontWeight: 700,
                                    letterSpacing: "-0.01em"
                                },
                                children: "The Ledger"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 608,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: T.inkSoft,
                                    fontSize: 14,
                                    marginTop: 2
                                },
                                children: "10-property portfolio · August 2026"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 611,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 607,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "right",
                            fontSize: 12,
                            color: T.inkSoft,
                            paddingTop: 6
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
                                lineNumber: 616,
                                columnNumber: 38
                            }, this),
                            saveStatus === "idle" && loaded && "Data loaded"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 613,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 606,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    maxWidth: 1180,
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            width: 168,
                            flexShrink: 0,
                            paddingTop: 28
                        },
                        children: NAV.map(({ id, label, icon: Icon })=>{
                            const active = tab === id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab(id),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 9,
                                    width: "100%",
                                    padding: "11px 14px 11px 18px",
                                    marginBottom: 8,
                                    marginLeft: active ? 0 : 10,
                                    border: "none",
                                    borderRadius: "8px 0 0 8px",
                                    background: active ? T.card : "transparent",
                                    color: active ? T.pine : T.inkSoft,
                                    fontSize: 14,
                                    fontWeight: active ? 600 : 500,
                                    cursor: "pointer",
                                    textAlign: "left",
                                    boxShadow: active ? `inset 3px 0 0 ${T.amber}` : "none",
                                    borderTop: active ? `1px solid ${T.line}` : "1px solid transparent",
                                    borderBottom: active ? `1px solid ${T.line}` : "1px solid transparent",
                                    borderLeft: active ? `1px solid ${T.line}` : "1px solid transparent"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 643,
                                        columnNumber: 17
                                    }, this),
                                    label
                                ]
                            }, id, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 626,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 622,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            flex: 1,
                            background: T.card,
                            border: `1px solid ${T.line}`,
                            borderRadius: "10px 10px 0 0",
                            padding: 28,
                            marginTop: 28,
                            minHeight: 560
                        },
                        children: [
                            tab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Overview, {
                                stats: stats,
                                properties: properties,
                                balances: balances,
                                goToLedger: (id)=>{
                                    setSelectedId(id);
                                    setTab("ledgers");
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 651,
                                columnNumber: 34
                            }, this),
                            tab === "snapshot" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Snapshot, {
                                stats: stats,
                                properties: properties,
                                balances: balances,
                                marketValues: marketValues,
                                mortgages: mortgages,
                                expenses: expenses,
                                equipment: equipment,
                                compliance: compliance,
                                maintenance: maintenance,
                                goToLedger: (id)=>{
                                    setSelectedId(id);
                                    setTab("ledgers");
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 653,
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
                                updateMortgage: updateMortgage
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 666,
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
                                removeEscrowEntry: removeEscrowEntry,
                                mortgages: mortgages,
                                updateMortgage: updateMortgage,
                                marketValues: marketValues,
                                updateMarketValue: updateMarketValue,
                                expenses: expenses,
                                equipment: equipment,
                                equipmentForm: equipmentForm,
                                setEquipmentForm: setEquipmentForm,
                                addEquipment: addEquipment,
                                removeEquipment: removeEquipment
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 668,
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
                                lineNumber: 700,
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
                                lineNumber: 713,
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
                                lineNumber: 716,
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
                                lineNumber: 727,
                                columnNumber: 13
                            }, this),
                            tab === "reports" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reports, {
                                byProperty: byProperty,
                                byCategory: byCategory,
                                stats: stats
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 729,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 650,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 621,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 603,
        columnNumber: 5
    }, this);
}
_s(PortfolioDashboard, "rHvvxi62ivaqnlRNH+YmVDqN0nc=");
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
                lineNumber: 740,
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
                lineNumber: 741,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 739,
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
                lineNumber: 750,
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
                lineNumber: 751,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 749,
        columnNumber: 5
    }, this);
}
_c2 = MiniStat;
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
                lineNumber: 759,
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
                lineNumber: 760,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 758,
        columnNumber: 5
    }, this);
}
_c3 = SectionTitle;
function Overview({ stats, properties, balances, goToLedger }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "This month, at a glance",
                subtitle: "Net cash flow includes mortgage debt service"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 768,
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
                        lineNumber: 770,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Collected in August",
                        value: money(stats.collectedAugust),
                        tone: "pine"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 771,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Total outstanding",
                        value: money(stats.outstanding),
                        tone: "brick"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 772,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Expenses",
                        value: money(stats.expenseTotal)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 773,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Debt service",
                        value: money(stats.debtService)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 774,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Net cash flow",
                        value: money(stats.net),
                        tone: stats.net >= 0 ? "pine" : "brick"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 775,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Reserves held",
                        value: money(stats.reservesHeld)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 776,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 769,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Portfolio value",
                subtitle: "What the properties are worth, minus what's owed on them"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 779,
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
                        label: "Total market value",
                        value: money(stats.marketValueTotal)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 781,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Total mortgage debt",
                        value: money(stats.mortgageDebt),
                        tone: "brick"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 782,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Net portfolio value",
                        value: money(stats.netPortfolioValue),
                        tone: "pine"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 783,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Compliance due ≤30d",
                        value: String(stats.complianceDueSoon),
                        tone: stats.complianceDueSoon > 0 ? "brick" : "ink"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 784,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 780,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Balances by property",
                subtitle: "Click a property to open its ledger"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 787,
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
                                        lineNumber: 798,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 500
                                        },
                                        children: p.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 799,
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
                                        lineNumber: 800,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 797,
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
                                lineNumber: 802,
                                columnNumber: 15
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 792,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 788,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 767,
        columnNumber: 5
    }, this);
}
_c4 = Overview;
function Snapshot({ stats, properties, balances, marketValues, mortgages, expenses, equipment, compliance, maintenance, goToLedger }) {
    const overdueCompliance = compliance.filter((c)=>c.status !== "completed" && daysUntil(c.dueDate) < 0);
    const dueSoonCompliance = compliance.filter((c)=>c.status !== "completed" && daysUntil(c.dueDate) >= 0 && daysUntil(c.dueDate) <= 30);
    const equipmentNeedingReplacement = properties.flatMap((p)=>(equipment[p.id] || []).map((eq)=>({
                ...eq,
                propertyName: p.name,
                age: equipmentAgeYears(eq.installDate)
            })).filter((eq)=>eq.age >= eq.lifespan - 2));
    const openMaintenance = maintenance.filter((m)=>m.status === "scheduled" || m.status === "in_progress");
    const propertyName = (id)=>properties.find((p)=>p.id === id)?.name || "—";
    const performanceRows = properties.map((p)=>({
            property: p,
            perf: propertyPerformance(p, {
                marketValues,
                mortgages,
                expenses
            }),
            rentStatus: statusFor(balances[p.id], p.rent)
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "The business, at a glance",
                subtitle: "Pulled together from ledgers, expenses, mortgages, valuations, maintenance, and compliance"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 830,
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
                        lineNumber: 832,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Total equity",
                        value: money(stats.marketValueTotal - stats.mortgageDebt)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 833,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Net cash flow (mo.)",
                        value: money(stats.net),
                        tone: stats.net >= 0 ? "pine" : "brick"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 834,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Rent roll",
                        value: money(stats.rentRoll)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 835,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Reserves held",
                        value: money(stats.reservesHeld)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 836,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 831,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Needs attention",
                subtitle: "Compliance overdue or due soon, equipment nearing end of life, open maintenance"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 839,
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
                    overdueCompliance.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttentionRow, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                            tone: "brick",
                            label: `${c.itemType} overdue — ${propertyName(c.propertyId ?? null)}`,
                            detail: `Was due ${c.dueDate}`
                        }, `c-${c.id}`, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 842,
                            columnNumber: 11
                        }, this)),
                    dueSoonCompliance.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttentionRow, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                            tone: "amber",
                            label: `${c.itemType} due soon — ${propertyName(c.propertyId ?? null)}`,
                            detail: `Due ${c.dueDate}`
                        }, `cs-${c.id}`, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 845,
                            columnNumber: 11
                        }, this)),
                    equipmentNeedingReplacement.map((eq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttentionRow, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
                            tone: eq.age >= eq.lifespan ? "brick" : "amber",
                            label: `${eq.type} — ${eq.propertyName}`,
                            detail: `${eq.age.toFixed(1)} of ${eq.lifespan} expected years`
                        }, `e-${eq.id}-${eq.propertyName}`, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 848,
                            columnNumber: 11
                        }, this)),
                    openMaintenance.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttentionRow, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
                            tone: "pine",
                            label: `${m.description} — ${propertyName(m.propertyId)}`,
                            detail: `${m.status === "in_progress" ? "In progress" : "Scheduled"} for ${m.scheduledDate}`
                        }, `m-${m.id}`, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 851,
                            columnNumber: 11
                        }, this)),
                    overdueCompliance.length + dueSoonCompliance.length + equipmentNeedingReplacement.length + openMaintenance.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: T.inkSoft,
                            fontStyle: "italic"
                        },
                        children: "Nothing needs attention right now."
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 854,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 840,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Performance by property",
                subtitle: "Click a property to see its full ledger"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 858,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
                                "Rent status",
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
                                    lineNumber: 863,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 861,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 860,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: performanceRows.map(({ property, perf, rentStatus })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
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
                                        lineNumber: 872,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "9px 6px"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                background: rentStatus.bg,
                                                color: rentStatus.fg,
                                                fontSize: 11.5,
                                                fontWeight: 600,
                                                padding: "3px 8px",
                                                borderRadius: 20
                                            },
                                            children: rentStatus.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 874,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 873,
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
                                        lineNumber: 876,
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
                                        lineNumber: 877,
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
                                        lineNumber: 878,
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
                                        lineNumber: 879,
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
                                        lineNumber: 880,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, property.id, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 871,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 869,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 859,
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
                lineNumber: 885,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 829,
        columnNumber: 5
    }, this);
}
_c5 = Snapshot;
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
                lineNumber: 897,
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
                lineNumber: 898,
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
                lineNumber: 899,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 896,
        columnNumber: 5
    }, this);
}
_c6 = AttentionRow;
function Properties({ properties, balances, goToLedger, mortgages, updateMortgage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Properties",
                subtitle: "Balance reflects rent charged to date minus payments received"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 907,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
                                "Monthly rent",
                                "Balance",
                                "Mortgage",
                                "Loan balance",
                                "Monthly P&I",
                                ""
                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        textAlign: [
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
                                    lineNumber: 912,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 910,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 909,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: properties.map((p)=>{
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
                                            padding: "10px 6px",
                                            fontWeight: 500
                                        },
                                        children: p.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 925,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "10px 6px",
                                            color: T.inkSoft
                                        },
                                        children: p.city
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 926,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "10px 6px"
                                        },
                                        children: p.tenant
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 927,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "10px 6px",
                                            textAlign: "right",
                                            fontFamily: "'IBM Plex Mono', monospace"
                                        },
                                        children: money(p.rent)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 928,
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
                                            lineNumber: 930,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 929,
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
                                            lineNumber: 933,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 932,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "10px 6px",
                                            textAlign: "right",
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            color: m.hasMortgage ? T.ink : T.inkSoft
                                        },
                                        children: m.hasMortgage ? money(Number(m.balance) || 0) : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 940,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "10px 6px",
                                            textAlign: "right",
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            color: m.hasMortgage ? T.ink : T.inkSoft
                                        },
                                        children: m.hasMortgage ? money(Number(m.monthlyPayment) || 0) : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 943,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "10px 6px",
                                            textAlign: "right"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>goToLedger(p.id),
                                            style: {
                                                background: "none",
                                                border: `1px solid ${T.line}`,
                                                borderRadius: 6,
                                                padding: "5px 10px",
                                                fontSize: 12,
                                                cursor: "pointer",
                                                color: T.pine
                                            },
                                            children: "View ledger"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 947,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 946,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 924,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 918,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 3,
                                    style: {
                                        padding: "12px 6px",
                                        fontWeight: 600
                                    },
                                    children: "Total rent roll"
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 957,
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
                                    lineNumber: 958,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: {
                                        borderTop: `3px double ${T.ink}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 961,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: {
                                        borderTop: `3px double ${T.ink}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 962,
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
                                    lineNumber: 963,
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
                                    lineNumber: 966,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: {
                                        borderTop: `3px double ${T.ink}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 969,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 956,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 955,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 908,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 906,
        columnNumber: 5
    }, this);
}
_c7 = Properties;
function Ledgers({ properties, ledger, balances, selectedId, setSelectedId, form, setForm, addEntry, utilities, utilityForm, setUtilityForm, addUtility, removeUtility, escrow, escrowForm, setEscrowForm, addEscrowEntry, removeEscrowEntry, mortgages, updateMortgage, marketValues, updateMarketValue, expenses, equipment, equipmentForm, setEquipmentForm, addEquipment, removeEquipment }) {
    _s1();
    const property = properties.find((p)=>p.id === selectedId);
    const perf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Ledgers.useMemo[perf]": ()=>propertyPerformance(property, {
                marketValues,
                mortgages,
                expenses
            })
    }["Ledgers.useMemo[perf]"], [
        property,
        marketValues,
        mortgages,
        expenses
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            gap: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 190,
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                        title: "Select property"
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1008,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4
                        },
                        children: properties.map((p)=>{
                            const active = p.id === selectedId;
                            const s = statusFor(balances[p.id], p.rent);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedId(p.id),
                                style: {
                                    textAlign: "left",
                                    padding: "8px 10px",
                                    borderRadius: 6,
                                    cursor: "pointer",
                                    border: `1px solid ${active ? T.pine : "transparent"}`,
                                    background: active ? T.pineSoft : "transparent",
                                    fontSize: 13,
                                    color: T.ink
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 500
                                        },
                                        children: p.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1024,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: s.fg,
                                            marginTop: 2
                                        },
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1025,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1014,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1009,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1007,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                        title: `${property.name} — ledger`,
                        subtitle: `${property.tenant} · rent ${money(property.rent)}/mo`
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1033,
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
                                                lineNumber: 1039,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1037,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                        label: "Loan balance",
                                        value: money(perf.loanBalance)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1047,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                        label: "Equity",
                                        value: money(perf.equity),
                                        tone: "pine"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1048,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1036,
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
                                        lineNumber: 1051,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                        label: "Est. monthly cash flow",
                                        value: money(perf.estMonthlyCashFlow),
                                        tone: perf.estMonthlyCashFlow >= 0 ? "pine" : "brick",
                                        small: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1052,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                        label: "Gross rent yield",
                                        value: `${perf.grossYield.toFixed(1)}%`,
                                        small: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1053,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                        label: "Cap rate (est.)",
                                        value: `${perf.capRate.toFixed(1)}%`,
                                        small: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1054,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1050,
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
                                lineNumber: 1056,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1035,
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
                                                lineNumber: 1065,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "charge",
                                                children: "Charge"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1066,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1064,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1062,
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
                                        lineNumber: 1071,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1069,
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
                                        lineNumber: 1075,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1073,
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
                                        lineNumber: 1079,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1077,
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
                                        lineNumber: 1082,
                                        columnNumber: 13
                                    }, this),
                                    " Post entry"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1081,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1061,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
                                            lineNumber: 1090,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1088,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1087,
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
                                                lineNumber: 1099,
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
                                                    lineNumber: 1101,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1100,
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
                                                lineNumber: 1103,
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
                                                lineNumber: 1104,
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
                                                lineNumber: 1107,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, e.id, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1098,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1096,
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
                                            lineNumber: 1113,
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
                                            lineNumber: 1114,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1112,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1086,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 32
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                title: "Utility accounts",
                                subtitle: "Kept on file for continuity across tenant turnover"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1122,
                                columnNumber: 11
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
                                                        lineNumber: 1129,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1127,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1125,
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
                                                lineNumber: 1135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1133,
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
                                                lineNumber: 1139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1137,
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
                                                        lineNumber: 1144,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Landlord",
                                                        children: "Landlord"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1145,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1143,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1141,
                                        columnNumber: 13
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
                                                lineNumber: 1149,
                                                columnNumber: 15
                                            }, this),
                                            " Add"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
                                                    lineNumber: 1157,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1155,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1154,
                                        columnNumber: 13
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
                                                            lineNumber: 1166,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "9px 6px"
                                                            },
                                                            children: u.provider
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1167,
                                                            columnNumber: 19
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
                                                            lineNumber: 1168,
                                                            columnNumber: 19
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
                                                                lineNumber: 1170,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1169,
                                                            columnNumber: 19
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
                                                                    lineNumber: 1176,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 1175,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1174,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, u.id, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1165,
                                                    columnNumber: 17
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
                                                    lineNumber: 1183,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1182,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 32
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                title: "Tax & insurance reserves",
                                subtitle: "Monthly set-asides build a balance; disbursements draw it down when the real bill comes due"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1191,
                                columnNumber: 11
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
                                                        lineNumber: 1197,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "disbursement",
                                                        children: "Disbursement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1198,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1196,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1194,
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
                                                        lineNumber: 1205,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1203,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1201,
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
                                                lineNumber: 1211,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1209,
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
                                                lineNumber: 1215,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1213,
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
                                                lineNumber: 1219,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1217,
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
                                                lineNumber: 1222,
                                                columnNumber: 15
                                            }, this),
                                            " Post entry"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1221,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
                                                    lineNumber: 1230,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1228,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1227,
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
                                                            lineNumber: 1239,
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
                                                                lineNumber: 1241,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1240,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "9px 6px"
                                                            },
                                                            children: e.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1245,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "9px 6px",
                                                                color: T.inkSoft
                                                            },
                                                            children: e.note
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1246,
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
                                                            lineNumber: 1247,
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
                                                            lineNumber: 1250,
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
                                                                    lineNumber: 1253,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 1252,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1251,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, e.id, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1238,
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
                                                    lineNumber: 1260,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1259,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1236,
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
                                                    lineNumber: 1266,
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
                                                    lineNumber: 1267,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        borderTop: `3px double ${T.ink}`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1270,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1265,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 32
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                title: "Mortgage",
                                subtitle: "Kept on file alongside the property record"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1277,
                                columnNumber: 11
                            }, this),
                            (()=>{
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
                                                    lineNumber: 1283,
                                                    columnNumber: 19
                                                }, this),
                                                "This property has a mortgage"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1282,
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
                                                            lineNumber: 1296,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1294,
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
                                                            lineNumber: 1300,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1298,
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
                                                            lineNumber: 1304,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1302,
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
                                                            lineNumber: 1308,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1293,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1281,
                                    columnNumber: 15
                                }, this);
                            })()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 32
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                title: "Equipment",
                                subtitle: "Track age against expected lifespan to plan replacements ahead of failure"
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1318,
                                columnNumber: 11
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
                                                        lineNumber: 1325,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1323,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1321,
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
                                                lineNumber: 1331,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1329,
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
                                                lineNumber: 1335,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1333,
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
                                                lineNumber: 1339,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1337,
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
                                                lineNumber: 1342,
                                                columnNumber: 15
                                            }, this),
                                            " Add"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1341,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
                                                    lineNumber: 1350,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1348,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1347,
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
                                                            lineNumber: 1362,
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
                                                            lineNumber: 1363,
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
                                                            lineNumber: 1364,
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
                                                            lineNumber: 1365,
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
                                                                        lineNumber: 1368,
                                                                        columnNumber: 63
                                                                    }, this),
                                                                    st.label
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 1367,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1366,
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
                                                                    lineNumber: 1374,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                                lineNumber: 1373,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                                            lineNumber: 1372,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, eq.id, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1361,
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
                                                    lineNumber: 1382,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1381,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1356,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1346,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1032,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 1006,
        columnNumber: 5
    }, this);
}
_s1(Ledgers, "o+v/FBvEn15TDDwjuvSGgN10Lj0=");
_c8 = Ledgers;
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
                lineNumber: 1397,
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
                                lineNumber: 1401,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1399,
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inputStyle,
                                type: "text",
                                placeholder: "e.g. HVAC",
                                value: form.trade,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            trade: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1405,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1403,
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
                                lineNumber: 1409,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1407,
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
                                lineNumber: 1413,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1411,
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
                                lineNumber: 1416,
                                columnNumber: 11
                            }, this),
                            " Add"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1415,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1398,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Directory"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1420,
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
                                            lineNumber: 1425,
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
                                            lineNumber: 1426,
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
                                                            lineNumber: 1428,
                                                            columnNumber: 93
                                                        }, this),
                                                        " ",
                                                        p.phone
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1428,
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
                                                            lineNumber: 1429,
                                                            columnNumber: 93
                                                        }, this),
                                                        " ",
                                                        p.email
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1429,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1427,
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
                                            lineNumber: 1431,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1424,
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
                                        lineNumber: 1434,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1433,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1423,
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
                        lineNumber: 1438,
                        columnNumber: 36
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1421,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 1396,
        columnNumber: 5
    }, this);
}
_c9 = Providers;
function Maintenance({ properties, equipment, providers, maintenance, form, setForm, addMaintenance, updateStatus, removeMaintenance }) {
    _s2();
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
                lineNumber: 1469,
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
                                        lineNumber: 1475,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1473,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1471,
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
                                        lineNumber: 1482,
                                        columnNumber: 13
                                    }, this),
                                    availableEquipment.map((eq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: eq.id,
                                            children: eq.type
                                        }, eq.id, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1484,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1481,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1479,
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
                                        lineNumber: 1491,
                                        columnNumber: 13
                                    }, this),
                                    providers.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: p.name
                                        }, p.id, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1493,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1490,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1488,
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
                                lineNumber: 1499,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1497,
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
                                lineNumber: 1503,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1501,
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
                                lineNumber: 1507,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1505,
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
                                lineNumber: 1510,
                                columnNumber: 11
                            }, this),
                            " Schedule"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1509,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1470,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "All visits",
                subtitle: "Across the portfolio, upcoming first"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1514,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
                                    lineNumber: 1519,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1517,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1516,
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
                                            lineNumber: 1530,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px"
                                            },
                                            children: propertyName(m.propertyId)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1531,
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
                                            lineNumber: 1532,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px"
                                            },
                                            children: m.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1533,
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
                                            lineNumber: 1534,
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
                                                        lineNumber: 1541,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "in_progress",
                                                        children: "In progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1542,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "completed",
                                                        children: "Completed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1543,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "cancelled",
                                                        children: "Cancelled"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                                        lineNumber: 1544,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1536,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1535,
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
                                            lineNumber: 1547,
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
                                                    lineNumber: 1550,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                                lineNumber: 1549,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1548,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, m.id, true, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1529,
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
                                    lineNumber: 1558,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1557,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1525,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1515,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 1468,
        columnNumber: 5
    }, this);
}
_s2(Maintenance, "bJ0njqnWmG3okb5MUQo2WV0gRWo=");
_c10 = Maintenance;
function Compliance({ properties, compliance, form, setForm, addCompliance, markDone, removeCompliance }) {
    _s3();
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
                title: "Add a compliance item",
                subtitle: "Licenses, tax deadlines, insurance renewals — anything with a due date"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1578,
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
                                        lineNumber: 1583,
                                        columnNumber: 13
                                    }, this),
                                    properties.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: p.name
                                        }, p.id, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1585,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1582,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1580,
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
                                        lineNumber: 1593,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1591,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1589,
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
                                lineNumber: 1599,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1597,
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
                                lineNumber: 1603,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1601,
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
                                        lineNumber: 1608,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "semi_annual",
                                        children: "Semi-annual"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1609,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "quarterly",
                                        children: "Quarterly"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1610,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "none",
                                        children: "One-time"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1611,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1607,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1605,
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
                                lineNumber: 1615,
                                columnNumber: 11
                            }, this),
                            " Add"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1614,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "All items",
                subtitle: "Soonest due first — mark done, or mark done and roll to the next cycle"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1619,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
                                    lineNumber: 1624,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1622,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1621,
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
                                            lineNumber: 1635,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "9px 6px"
                                            },
                                            children: propertyName(c.propertyId)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1636,
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
                                            lineNumber: 1637,
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
                                            lineNumber: 1638,
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
                                                lineNumber: 1640,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1639,
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
                                                            lineNumber: 1646,
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
                                                            lineNumber: 1650,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1644,
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
                                                        lineNumber: 1656,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                                    lineNumber: 1655,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1642,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1634,
                                    columnNumber: 15
                                }, this);
                            }),
                            sorted.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    style: {
                                        padding: "16px 6px",
                                        color: T.inkSoft,
                                        fontStyle: "italic"
                                    },
                                    children: "No compliance items on file yet."
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1664,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1663,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1630,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1620,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 1577,
        columnNumber: 5
    }, this);
}
_s3(Compliance, "bJ0njqnWmG3okb5MUQo2WV0gRWo=");
_c11 = Compliance;
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
                lineNumber: 1679,
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
                                        lineNumber: 1685,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1683,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1681,
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
                                        lineNumber: 1693,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1691,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1689,
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
                                lineNumber: 1699,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1697,
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
                                lineNumber: 1703,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1701,
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
                                lineNumber: 1707,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1705,
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
                                lineNumber: 1710,
                                columnNumber: 11
                            }, this),
                            " Add"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1709,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1680,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Expense log"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1714,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
                                    lineNumber: 1719,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1717,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1716,
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
                                        lineNumber: 1728,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "9px 6px"
                                        },
                                        children: nameFor(e.propertyId)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1729,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "9px 6px"
                                        },
                                        children: e.category
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1730,
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
                                        lineNumber: 1731,
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
                                        lineNumber: 1732,
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
                                                lineNumber: 1735,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PortfolioDashboard.jsx",
                                            lineNumber: 1734,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1733,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, e.id, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1727,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1725,
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
                                    children: "Total expenses"
                                }, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1743,
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
                                    lineNumber: 1744,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                    fileName: "[project]/components/PortfolioDashboard.jsx",
                                    lineNumber: 1747,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1742,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1741,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1715,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 1678,
        columnNumber: 5
    }, this);
}
_c12 = Expenses;
function Reports({ byProperty, byCategory, stats }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Net income by property",
                subtitle: "Monthly rent minus logged expenses"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1758,
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
                                lineNumber: 1762,
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
                                lineNumber: 1763,
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
                                lineNumber: 1764,
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
                                lineNumber: 1765,
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
                                lineNumber: 1766,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1761,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PortfolioDashboard.jsx",
                    lineNumber: 1760,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1759,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                title: "Expenses by category"
            }, void 0, false, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1771,
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
                                                lineNumber: 1778,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1776,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        formatter: (v)=>money(v)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1781,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1775,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PortfolioDashboard.jsx",
                            lineNumber: 1774,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1773,
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
                                        lineNumber: 1788,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 100
                                        },
                                        children: c.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/PortfolioDashboard.jsx",
                                        lineNumber: 1789,
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
                                        lineNumber: 1790,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, c.name, true, {
                                fileName: "[project]/components/PortfolioDashboard.jsx",
                                lineNumber: 1787,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/PortfolioDashboard.jsx",
                        lineNumber: 1785,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1772,
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
                        lineNumber: 1797,
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
                        lineNumber: 1798,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PortfolioDashboard.jsx",
                lineNumber: 1796,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PortfolioDashboard.jsx",
        lineNumber: 1757,
        columnNumber: 5
    }, this);
}
_c13 = Reports;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "PortfolioDashboard");
__turbopack_context__.k.register(_c1, "KpiCard");
__turbopack_context__.k.register(_c2, "MiniStat");
__turbopack_context__.k.register(_c3, "SectionTitle");
__turbopack_context__.k.register(_c4, "Overview");
__turbopack_context__.k.register(_c5, "Snapshot");
__turbopack_context__.k.register(_c6, "AttentionRow");
__turbopack_context__.k.register(_c7, "Properties");
__turbopack_context__.k.register(_c8, "Ledgers");
__turbopack_context__.k.register(_c9, "Providers");
__turbopack_context__.k.register(_c10, "Maintenance");
__turbopack_context__.k.register(_c11, "Compliance");
__turbopack_context__.k.register(_c12, "Expenses");
__turbopack_context__.k.register(_c13, "Reports");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_PortfolioDashboard_jsx_11ew5n3._.js.map