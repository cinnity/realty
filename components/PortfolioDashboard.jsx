"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import {
  BookOpen, Building2, Receipt, BarChart3, Plus, Trash2, ChevronRight, ScrollText,
  Wrench, Phone, Mail, AlertTriangle, TrendingUp,
} from "lucide-react";

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
  card: "#FFFFFF",
};

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
`;

// ---------- sample properties ----------
const SEED_PROPERTIES = [
  { id: 1, name: "412 Maple Row", city: "Bethesda, MD", tenant: "J. Alvarez", rent: 2450 },
  { id: 2, name: "88 Larkspur Ct", city: "Rockville, MD", tenant: "T. Nguyen", rent: 1980 },
  { id: 3, name: "1207 Cobalt Ave", city: "Silver Spring, MD", tenant: "M. Okafor", rent: 2100 },
  { id: 4, name: "56 Windmere Ln", city: "Bethesda, MD", tenant: "R. Fischer", rent: 2600 },
  { id: 5, name: "301 Birchwood Dr", city: "Gaithersburg, MD", tenant: "S. Patel", rent: 1875 },
  { id: 6, name: "19 Copperfield Way", city: "Rockville, MD", tenant: "L. Kowalski", rent: 2225 },
  { id: 7, name: "742 Thistle St", city: "Silver Spring, MD", tenant: "D. Reyes", rent: 1990 },
  { id: 8, name: "5 Harrow Mews", city: "Bethesda, MD", tenant: "A. Kim", rent: 2750 },
  { id: 9, name: "234 Foxglove Ter", city: "Gaithersburg, MD", tenant: "C. Osei", rent: 1840 },
  { id: 10, name: "77 Pemberton Rd", city: "Rockville, MD", tenant: "N. Volkov", rent: 2380 },
];

const MONTHS = [
  { date: "2026-06-01", label: "June" },
  { date: "2026-07-01", label: "July" },
  { date: "2026-08-01", label: "August" },
];

// charges: rent posted on the 1st of each month for every property
function genCharges() {
  let id = 1;
  const rows = [];
  MONTHS.forEach((m) => {
    SEED_PROPERTIES.forEach((p) => {
      rows.push({ id: id++, propertyId: p.id, date: m.date, type: "charge", amount: p.rent, note: `${m.label} rent` });
    });
  });
  return rows;
}

// hand-authored payment history so the portfolio shows a realistic mix:
// fully current, partial-but-caught-up, and behind on multiple months
const SEED_PAYMENTS = [
  // 1 — always pays in full, on time
  { propertyId: 1, date: "2026-06-02", amount: 2450, note: "Full payment" },
  { propertyId: 1, date: "2026-07-01", amount: 2450, note: "Full payment" },
  { propertyId: 1, date: "2026-08-02", amount: 2450, note: "Full payment" },
  // 2 — on time, full
  { propertyId: 2, date: "2026-06-03", amount: 1980, note: "Full payment" },
  { propertyId: 2, date: "2026-07-03", amount: 1980, note: "Full payment" },
  { propertyId: 2, date: "2026-08-03", amount: 1980, note: "Full payment" },
  // 3 — current through July, August not yet paid
  { propertyId: 3, date: "2026-06-05", amount: 2100, note: "Full payment" },
  { propertyId: 3, date: "2026-07-04", amount: 2100, note: "Full payment" },
  // 4 — full, on time
  { propertyId: 4, date: "2026-06-01", amount: 2600, note: "Full payment" },
  { propertyId: 4, date: "2026-07-01", amount: 2600, note: "Full payment" },
  { propertyId: 4, date: "2026-08-01", amount: 2600, note: "Full payment" },
  // 5 — behind: partial every month, gap keeps growing
  { propertyId: 5, date: "2026-06-08", amount: 1200, note: "Partial payment" },
  { propertyId: 5, date: "2026-06-22", amount: 400, note: "Partial payment" },
  { propertyId: 5, date: "2026-07-10", amount: 900, note: "Partial payment" },
  { propertyId: 5, date: "2026-08-06", amount: 500, note: "Partial payment" },
  // 6 — full, on time
  { propertyId: 6, date: "2026-06-02", amount: 2225, note: "Full payment" },
  { propertyId: 6, date: "2026-07-02", amount: 2225, note: "Full payment" },
  { propertyId: 6, date: "2026-08-02", amount: 2225, note: "Full payment" },
  // 7 — caught up through July, made a partial payment for August
  { propertyId: 7, date: "2026-06-04", amount: 1990, note: "Full payment" },
  { propertyId: 7, date: "2026-07-05", amount: 1990, note: "Full payment" },
  { propertyId: 7, date: "2026-08-09", amount: 1200, note: "Partial payment — remainder due" },
  // 8 — full, on time
  { propertyId: 8, date: "2026-06-01", amount: 2750, note: "Full payment" },
  { propertyId: 8, date: "2026-07-01", amount: 2750, note: "Full payment" },
  { propertyId: 8, date: "2026-08-01", amount: 2750, note: "Full payment" },
  // 9 — full, on time
  { propertyId: 9, date: "2026-06-03", amount: 1840, note: "Full payment" },
  { propertyId: 9, date: "2026-07-03", amount: 1840, note: "Full payment" },
  { propertyId: 9, date: "2026-08-03", amount: 1840, note: "Full payment" },
  // 10 — missed July entirely, partial in August
  { propertyId: 10, date: "2026-06-05", amount: 2380, note: "Full payment" },
  { propertyId: 10, date: "2026-08-12", amount: 900, note: "Partial payment" },
];

function genPayments() {
  let id = 500;
  return SEED_PAYMENTS.map((p) => ({ id: id++, type: "payment", ...p }));
}

const SEED_LEDGER = [...genCharges(), ...genPayments()];

const SEED_EXPENSES = [
  { id: 1, propertyId: 1, category: "Maintenance", amount: 240, date: "2026-08-03", note: "HVAC filter service" },
  { id: 2, propertyId: 4, category: "Insurance", amount: 610, date: "2026-08-05", note: "Annual premium" },
  { id: 3, propertyId: 5, category: "Repairs", amount: 890, date: "2026-08-11", note: "Water heater replacement" },
  { id: 4, propertyId: 8, category: "Property Tax", amount: 1450, date: "2026-08-14", note: "Q3 installment" },
  { id: 5, propertyId: 3, category: "Maintenance", amount: 180, date: "2026-08-18", note: "Gutter cleaning" },
  { id: 6, propertyId: 10, category: "Legal", amount: 320, date: "2026-08-20", note: "Lease renewal review" },
];

const CATEGORIES = ["Maintenance", "Repairs", "Insurance", "Property Tax", "Legal", "Utilities", "Other"];
const PIE_COLORS = [T.pine, T.amber, T.brick, "#5B6660", "#7A9E8E", "#C9A26A", "#8E5B5D"];
const UTILITY_TYPES = ["Electric", "Gas", "Water/Sewer", "Trash", "Internet"];

// utility accounts per property — kept here for continuity across tenant turnover
const SEED_UTILITIES = {
  1: [
    { id: 1, type: "Electric", provider: "Pepco", account: "6104-882-1130", payer: "Tenant" },
    { id: 2, type: "Water/Sewer", provider: "WSSC Water", account: "WS-44219", payer: "Landlord" },
    { id: 3, type: "Trash", provider: "Montgomery County DEP", account: "MC-77410", payer: "Landlord" },
  ],
  2: [
    { id: 1, type: "Electric", provider: "Pepco", account: "6104-772-9012", payer: "Tenant" },
    { id: 2, type: "Gas", provider: "Washington Gas", account: "WG-55821", payer: "Tenant" },
    { id: 3, type: "Water/Sewer", provider: "WSSC Water", account: "WS-19087", payer: "Landlord" },
  ],
  3: [
    { id: 1, type: "Electric", provider: "Pepco", account: "6104-341-7723", payer: "Tenant" },
    { id: 2, type: "Water/Sewer", provider: "WSSC Water", account: "WS-30945", payer: "Landlord" },
  ],
  4: [
    { id: 1, type: "Electric", provider: "Pepco", account: "6104-990-2287", payer: "Tenant" },
    { id: 2, type: "Gas", provider: "Washington Gas", account: "WG-11238", payer: "Tenant" },
    { id: 3, type: "Water/Sewer", provider: "WSSC Water", account: "WS-58821", payer: "Landlord" },
    { id: 4, type: "Trash", provider: "Montgomery County DEP", account: "MC-20194", payer: "Landlord" },
  ],
  5: [
    { id: 1, type: "Electric", provider: "Pepco", account: "6104-118-6634", payer: "Tenant" },
    { id: 2, type: "Water/Sewer", provider: "WSSC Water", account: "WS-77201", payer: "Landlord" },
  ],
  6: [
    { id: 1, type: "Electric", provider: "Pepco", account: "6104-556-3391", payer: "Tenant" },
    { id: 2, type: "Water/Sewer", provider: "WSSC Water", account: "WS-40218", payer: "Landlord" },
    { id: 3, type: "Internet", provider: "Xfinity", account: "XF-90271", payer: "Tenant" },
  ],
  7: [
    { id: 1, type: "Electric", provider: "Pepco", account: "6104-227-8850", payer: "Tenant" },
    { id: 2, type: "Water/Sewer", provider: "WSSC Water", account: "WS-63317", payer: "Landlord" },
  ],
  8: [
    { id: 1, type: "Electric", provider: "Pepco", account: "6104-664-1128", payer: "Tenant" },
    { id: 2, type: "Gas", provider: "Washington Gas", account: "WG-77043", payer: "Tenant" },
    { id: 3, type: "Water/Sewer", provider: "WSSC Water", account: "WS-88512", payer: "Landlord" },
    { id: 4, type: "Trash", provider: "Montgomery County DEP", account: "MC-33087", payer: "Landlord" },
  ],
  9: [
    { id: 1, type: "Electric", provider: "Pepco", account: "6104-449-2761", payer: "Tenant" },
    { id: 2, type: "Water/Sewer", provider: "WSSC Water", account: "WS-25610", payer: "Landlord" },
  ],
  10: [
    { id: 1, type: "Electric", provider: "Pepco", account: "6104-803-5514", payer: "Tenant" },
    { id: 2, type: "Gas", provider: "Washington Gas", account: "WG-38820", payer: "Tenant" },
    { id: 3, type: "Water/Sewer", provider: "WSSC Water", account: "WS-91274", payer: "Landlord" },
  ],
};

const ESCROW_CATEGORIES = ["Property Tax", "Insurance", "HOA", "Other"];

// escrow-style reserves: small monthly contributions build up a balance,
// then a disbursement draws it down when the actual bill comes due
const SEED_ESCROW = {
  1: [
    { id: 1, type: "contribution", category: "Property Tax", amount: 310, date: "2026-06-01", note: "Monthly set-aside" },
    { id: 2, type: "contribution", category: "Property Tax", amount: 310, date: "2026-07-01", note: "Monthly set-aside" },
    { id: 3, type: "contribution", category: "Property Tax", amount: 310, date: "2026-08-01", note: "Monthly set-aside" },
    { id: 4, type: "contribution", category: "Insurance", amount: 95, date: "2026-06-01", note: "Monthly set-aside" },
    { id: 5, type: "contribution", category: "Insurance", amount: 95, date: "2026-07-01", note: "Monthly set-aside" },
    { id: 6, type: "contribution", category: "Insurance", amount: 95, date: "2026-08-01", note: "Monthly set-aside" },
  ],
  4: [
    { id: 1, type: "contribution", category: "Property Tax", amount: 365, date: "2026-06-01", note: "Monthly set-aside" },
    { id: 2, type: "contribution", category: "Property Tax", amount: 365, date: "2026-07-01", note: "Monthly set-aside" },
    { id: 3, type: "contribution", category: "Property Tax", amount: 365, date: "2026-08-01", note: "Monthly set-aside" },
    { id: 4, type: "disbursement", category: "Property Tax", amount: 1450, date: "2026-07-15", note: "Semi-annual county tax bill" },
    { id: 5, type: "contribution", category: "HOA", amount: 210, date: "2026-06-01", note: "Monthly set-aside" },
    { id: 6, type: "contribution", category: "HOA", amount: 210, date: "2026-07-01", note: "Monthly set-aside" },
    { id: 7, type: "contribution", category: "HOA", amount: 210, date: "2026-08-01", note: "Monthly set-aside" },
    { id: 8, type: "disbursement", category: "HOA", amount: 630, date: "2026-08-01", note: "Quarterly HOA invoice" },
  ],
  8: [
    { id: 1, type: "contribution", category: "Property Tax", amount: 380, date: "2026-06-01", note: "Monthly set-aside" },
    { id: 2, type: "contribution", category: "Property Tax", amount: 380, date: "2026-07-01", note: "Monthly set-aside" },
    { id: 3, type: "contribution", category: "Property Tax", amount: 380, date: "2026-08-01", note: "Monthly set-aside" },
    { id: 4, type: "disbursement", category: "Property Tax", amount: 1450, date: "2026-08-14", note: "Semi-annual county tax bill" },
    { id: 5, type: "contribution", category: "Insurance", amount: 110, date: "2026-06-01", note: "Monthly set-aside" },
    { id: 6, type: "contribution", category: "Insurance", amount: 110, date: "2026-07-01", note: "Monthly set-aside" },
    { id: 7, type: "contribution", category: "Insurance", amount: 110, date: "2026-08-01", note: "Monthly set-aside" },
  ],
};

const DEFAULT_MORTGAGE = { hasMortgage: false, lender: "", rate: "", balance: "", monthlyPayment: "" };

// mortgage details per property — unchecked properties are owned free and clear
const SEED_MORTGAGES = {
  2: { hasMortgage: true, lender: "Chase", rate: "6.25", balance: "312000", monthlyPayment: "2150" },
  3: { hasMortgage: true, lender: "Wells Fargo", rate: "6.75", balance: "298000", monthlyPayment: "2080" },
  5: { hasMortgage: true, lender: "Rocket Mortgage", rate: "7.10", balance: "245000", monthlyPayment: "1890" },
  7: { hasMortgage: true, lender: "Chase", rate: "6.40", balance: "276000", monthlyPayment: "1975" },
  10: { hasMortgage: true, lender: "US Bank", rate: "6.90", balance: "301000", monthlyPayment: "2210" },
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
  10: 470000,
};

const money = (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const STORAGE_KEY = "portfolio-data";
const TODAY = "2026-08-28";

// service provider directory — plumbers, HVAC techs, handymen, etc.
const SEED_PROVIDERS = [
  { id: 1, name: "Metro HVAC Services", trade: "HVAC", phone: "(301) 555-0142", email: "service@metrohvac.com", notes: "Responsive, does most of our HVAC work" },
  { id: 2, name: "Reyes Plumbing Co.", trade: "Plumbing", phone: "(301) 555-0198", email: "info@reyesplumbing.com", notes: "" },
  { id: 3, name: "Bright Spark Electric", trade: "Electrical", phone: "(240) 555-0176", email: "", notes: "Licensed, insured — used for panel upgrades" },
  { id: 4, name: "Dan's Handyman Service", trade: "General Handyman", phone: "(301) 555-0210", email: "dan@dansfixit.com", notes: "Good for small repairs, not licensed for major work" },
  { id: 5, name: "ClearView Roofing", trade: "Roofing", phone: "(410) 555-0133", email: "contact@clearviewroof.com", notes: "" },
];

// equipment tracked per property, for age and replacement planning
const SEED_EQUIPMENT = {
  1: [
    { id: 1, type: "HVAC", makeModel: "Carrier 24ACC6", installDate: "2016-05-10", lifespan: 15 },
    { id: 2, type: "Water Heater", makeModel: "Rheem 50 gal", installDate: "2019-02-20", lifespan: 10 },
  ],
  4: [
    { id: 1, type: "HVAC", makeModel: "Trane XR16", installDate: "2021-06-01", lifespan: 16 },
    { id: 2, type: "Roof", makeModel: "Asphalt shingle", installDate: "2010-08-15", lifespan: 20 },
  ],
  5: [
    { id: 1, type: "HVAC", makeModel: "Goodman GSX13", installDate: "2011-04-12", lifespan: 14 },
    { id: 2, type: "Water Heater", makeModel: "AO Smith 40 gal", installDate: "2014-09-01", lifespan: 10 },
  ],
  8: [
    { id: 1, type: "HVAC", makeModel: "Lennox XC16", installDate: "2022-03-18", lifespan: 16 },
  ],
};

// scheduled and completed maintenance visits
const SEED_MAINTENANCE = [
  { id: 1, propertyId: 1, equipmentId: 1, providerId: 1, description: "Annual HVAC tune-up", status: "completed", scheduledDate: "2026-06-15", completedDate: "2026-06-15", cost: 165, note: "" },
  { id: 2, propertyId: 5, equipmentId: 1, providerId: 1, description: "HVAC not cooling — diagnostic", status: "scheduled", scheduledDate: "2026-09-04", completedDate: "", cost: "", note: "Tenant available after 4pm weekdays" },
  { id: 3, propertyId: 2, equipmentId: null, providerId: 2, description: "Kitchen faucet leak", status: "scheduled", scheduledDate: "2026-09-02", completedDate: "", cost: "", note: "Confirmed access with tenant for 10am" },
  { id: 4, propertyId: 4, equipmentId: 2, providerId: 5, description: "Roof inspection — approaching expected lifespan", status: "scheduled", scheduledDate: "2026-09-20", completedDate: "", cost: "", note: "" },
  { id: 5, propertyId: 8, equipmentId: null, providerId: 4, description: "Replace door lock", status: "completed", scheduledDate: "2026-08-05", completedDate: "2026-08-05", cost: 85, note: "" },
];

// compliance reminders — property-specific (licenses, insurance) and entity-wide (LLC filings)
// propertyId: null means it applies to the business as a whole, not one property
const SEED_COMPLIANCE = [
  { id: 1, propertyId: 3, itemType: "Rental License", description: "Annual rental license renewal, Montgomery County", dueDate: "2026-08-20", recurrence: "annual", status: "upcoming" },
  { id: 2, propertyId: 5, itemType: "Insurance Renewal", description: "Landlord policy renewal — Travelers", dueDate: "2026-09-15", recurrence: "annual", status: "upcoming" },
  { id: 3, propertyId: 1, itemType: "Rental License", description: "Annual rental license renewal, Montgomery County", dueDate: "2027-03-15", recurrence: "annual", status: "upcoming" },
  { id: 4, propertyId: 8, itemType: "Lead Paint Certification", description: "Required for pre-1978 construction", dueDate: "2027-01-10", recurrence: "annual", status: "upcoming" },
  { id: 5, propertyId: 4, itemType: "Insurance Renewal", description: "Landlord policy renewal — State Farm", dueDate: "2026-12-01", recurrence: "annual", status: "upcoming" },
  { id: 6, propertyId: null, itemType: "LLC Annual Report", description: "Maryland SDAT annual report filing", dueDate: "2027-04-30", recurrence: "annual", status: "upcoming" },
  { id: 7, propertyId: 10, itemType: "Rental License", description: "Annual rental license renewal, Rockville", dueDate: "2026-10-01", recurrence: "annual", status: "upcoming" },
];

function balanceFor(ledger, propertyId) {
  return ledger
    .filter((e) => e.propertyId === propertyId)
    .reduce((s, e) => s + (e.type === "charge" ? e.amount : -e.amount), 0);
}

function escrowBalanceFor(escrow, propertyId) {
  return (escrow[propertyId] || []).reduce((s, e) => s + (e.type === "contribution" ? e.amount : -e.amount), 0);
}

function equipmentAgeYears(installDate) {
  const install = new Date(installDate);
  const today = new Date(TODAY);
  return (today - install) / (1000 * 60 * 60 * 24 * 365.25);
}

function equipmentStatus(age, lifespan) {
  if (age >= lifespan) return { label: "Past expected life", bg: T.brickSoft, fg: T.brick };
  if (age >= lifespan - 2) return { label: "Plan replacement soon", bg: T.amberSoft, fg: "#8A6A2F" };
  return { label: "Within expected life", bg: T.pineSoft, fg: T.pine };
}

function daysUntil(dateStr) {
  const due = new Date(dateStr);
  const today = new Date(TODAY);
  return Math.round((due - today) / (1000 * 60 * 60 * 24));
}

function complianceUrgency(item) {
  if (item.status === "completed") return { label: "Completed", bg: "#EFEBE1", fg: T.inkSoft };
  const d = daysUntil(item.dueDate);
  if (d < 0) return { label: `Overdue ${Math.abs(d)}d`, bg: T.brickSoft, fg: T.brick };
  if (d <= 30) return { label: `Due in ${d}d`, bg: T.amberSoft, fg: "#8A6A2F" };
  return { label: `Due in ${d}d`, bg: T.pineSoft, fg: T.pine };
}

function nextDueDate(dateStr, recurrence) {
  const d = new Date(dateStr);
  if (recurrence === "quarterly") d.setMonth(d.getMonth() + 3);
  else if (recurrence === "semi_annual") d.setMonth(d.getMonth() + 6);
  else d.setFullYear(d.getFullYear() + 1); // default annual
  return d.toISOString().slice(0, 10);
}

function statusFor(balance, rent) {
  if (balance <= 0) return { label: "Current", bg: T.pineSoft, fg: T.pine };
  if (balance < rent) return { label: `Owes ${money(balance)}`, bg: T.amberSoft, fg: "#8A6A2F" };
  return { label: `Behind ${money(balance)}`, bg: T.brickSoft, fg: T.brick };
}

// pulls together value, debt, and rent data into investment-performance metrics for one property
function propertyPerformance(property, { marketValues, mortgages, expenses }) {
  const marketValue = Number(marketValues[property.id]) || 0;
  const m = mortgages[property.id];
  const loanBalance = m && m.hasMortgage ? Number(m.balance) || 0 : 0;
  const debtService = m && m.hasMortgage ? Number(m.monthlyPayment) || 0 : 0;
  const equity = marketValue - loanBalance;
  const annualRent = property.rent * 12;
  const expensesLogged = expenses.filter((e) => e.propertyId === property.id).reduce((s, e) => s + e.amount, 0);
  const noi = annualRent - expensesLogged; // approximate — based on expenses on file, not a full-year actual
  const capRate = marketValue > 0 ? (noi / marketValue) * 100 : 0;
  const grossYield = marketValue > 0 ? (annualRent / marketValue) * 100 : 0;
  const estMonthlyCashFlow = property.rent - debtService;
  return { marketValue, loanBalance, equity, debtService, expensesLogged, capRate, grossYield, estMonthlyCashFlow };
}

export default function PortfolioDashboard() {
  const [properties] = useState(SEED_PROPERTIES);
  const [ledger, setLedger] = useState(SEED_LEDGER);
  const [expenses, setExpenses] = useState(SEED_EXPENSES);
  const [utilities, setUtilities] = useState(SEED_UTILITIES);
  const [escrow, setEscrow] = useState(SEED_ESCROW);
  const [mortgages, setMortgages] = useState(SEED_MORTGAGES);
  const [marketValues, setMarketValues] = useState(SEED_MARKET_VALUES);
  const [providers, setProviders] = useState(SEED_PROVIDERS);
  const [equipment, setEquipment] = useState(SEED_EQUIPMENT);
  const [maintenance, setMaintenance] = useState(SEED_MAINTENANCE);
  const [compliance, setCompliance] = useState(SEED_COMPLIANCE);
  const [tab, setTab] = useState("overview");
  const [selectedId, setSelectedId] = useState(SEED_PROPERTIES[0].id);
  const [ledgerForm, setLedgerForm] = useState({ type: "payment", amount: "", date: "", note: "" });
  const [expenseForm, setExpenseForm] = useState({ propertyId: SEED_PROPERTIES[0].id, category: CATEGORIES[0], amount: "", date: "", note: "" });
  const [utilityForm, setUtilityForm] = useState({ type: UTILITY_TYPES[0], provider: "", account: "", payer: "Tenant" });
  const [escrowForm, setEscrowForm] = useState({ type: "contribution", category: ESCROW_CATEGORIES[0], amount: "", date: "", note: "" });
  const [loaded, setLoaded] = useState(false);
  const [saveStatus, setSaveStatus] = useState("idle"); // idle | saving | saved | error
  const hasLoadedRef = useRef(false);

  const addEscrowEntry = () => {
    if (!escrowForm.amount || !escrowForm.date) return;
    setEscrow((es) => ({
      ...es,
      [selectedId]: [...(es[selectedId] || []), { id: Date.now(), type: escrowForm.type, category: escrowForm.category, amount: Number(escrowForm.amount), date: escrowForm.date, note: escrowForm.note || (escrowForm.type === "contribution" ? "Monthly set-aside" : "Disbursement") }],
    }));
    setEscrowForm({ type: "contribution", category: ESCROW_CATEGORIES[0], amount: "", date: "", note: "" });
  };
  const removeEscrowEntry = (propertyId, id) =>
    setEscrow((es) => ({ ...es, [propertyId]: es[propertyId].filter((x) => x.id !== id) }));

  const updateMortgage = (propertyId, field, value) =>
    setMortgages((m) => ({ ...m, [propertyId]: { ...(m[propertyId] || DEFAULT_MORTGAGE), [field]: value } }));

  const updateMarketValue = (propertyId, value) =>
    setMarketValues((mv) => ({ ...mv, [propertyId]: value }));

  const [providerForm, setProviderForm] = useState({ name: "", trade: "", phone: "", email: "", notes: "" });
  const addProvider = () => {
    if (!providerForm.name || !providerForm.trade) return;
    setProviders((ps) => [...ps, { id: Date.now(), ...providerForm }]);
    setProviderForm({ name: "", trade: "", phone: "", email: "", notes: "" });
  };
  const removeProvider = (id) => setProviders((ps) => ps.filter((p) => p.id !== id));

  const [equipmentForm, setEquipmentForm] = useState({ type: "HVAC", makeModel: "", installDate: "", lifespan: "" });
  const addEquipment = (propertyId) => {
    if (!equipmentForm.installDate || !equipmentForm.lifespan) return;
    setEquipment((eq) => ({
      ...eq,
      [propertyId]: [...(eq[propertyId] || []), { id: Date.now(), type: equipmentForm.type, makeModel: equipmentForm.makeModel, installDate: equipmentForm.installDate, lifespan: Number(equipmentForm.lifespan) }],
    }));
    setEquipmentForm({ type: "HVAC", makeModel: "", installDate: "", lifespan: "" });
  };
  const removeEquipment = (propertyId, id) =>
    setEquipment((eq) => ({ ...eq, [propertyId]: eq[propertyId].filter((x) => x.id !== id) }));

  const [maintenanceForm, setMaintenanceForm] = useState({ propertyId: SEED_PROPERTIES[0].id, equipmentId: "", providerId: "", description: "", scheduledDate: "", note: "" });
  const addMaintenance = () => {
    if (!maintenanceForm.description || !maintenanceForm.scheduledDate) return;
    setMaintenance((ms) => [
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
        note: maintenanceForm.note,
      },
    ]);
    setMaintenanceForm({ propertyId: SEED_PROPERTIES[0].id, equipmentId: "", providerId: "", description: "", scheduledDate: "", note: "" });
  };
  const updateMaintenanceStatus = (id, status) =>
    setMaintenance((ms) => ms.map((m) => (m.id === id ? { ...m, status, completedDate: status === "completed" ? TODAY : m.completedDate } : m)));
  const removeMaintenance = (id) => setMaintenance((ms) => ms.filter((m) => m.id !== id));

  const [complianceForm, setComplianceForm] = useState({ propertyId: "", itemType: "Rental License", description: "", dueDate: "", recurrence: "annual" });
  const addCompliance = () => {
    if (!complianceForm.dueDate) return;
    setCompliance((cs) => [
      ...cs,
      {
        id: Date.now(),
        propertyId: complianceForm.propertyId ? Number(complianceForm.propertyId) : null,
        itemType: complianceForm.itemType,
        description: complianceForm.description,
        dueDate: complianceForm.dueDate,
        recurrence: complianceForm.recurrence,
        status: "upcoming",
      },
    ]);
    setComplianceForm({ propertyId: "", itemType: "Rental License", description: "", dueDate: "", recurrence: "annual" });
  };
  const markComplianceDone = (id, renew) =>
    setCompliance((cs) =>
      cs.map((c) => {
        if (c.id !== id) return c;
        if (renew && c.recurrence !== "none") {
          return { ...c, dueDate: nextDueDate(c.dueDate, c.recurrence), status: "upcoming" };
        }
        return { ...c, status: "completed" };
      })
    );
  const removeCompliance = (id) => setCompliance((cs) => cs.filter((c) => c.id !== id));

  // load saved data once on mount; fall back to seed data if nothing saved yet
  useEffect(() => {
    (async () => {
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
      } finally {
        hasLoadedRef.current = true;
        setLoaded(true);
      }
    })();
  }, []);

  // persist ledger, expenses, and utilities together whenever any of them change
  useEffect(() => {
    if (!hasLoadedRef.current) return; // skip the initial render before load completes
    setSaveStatus("saving");
    const timer = setTimeout(async () => {
      try {
        const res = await fetch("/api/portfolio", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ledger, expenses, utilities, escrow, mortgages, marketValues, providers, equipment, maintenance, compliance }),
        });
        const json = await res.json();
        setSaveStatus(json?.ok ? "saved" : "error");
      } catch (err) {
        console.error("Failed to save portfolio data:", err);
        setSaveStatus("error");
      }
    }, 500); // debounce so rapid edits don't fire a save per keystroke
    return () => clearTimeout(timer);
  }, [ledger, expenses, utilities, escrow, mortgages, marketValues, providers, equipment, maintenance, compliance]);

  const addUtility = () => {
    if (!utilityForm.provider || !utilityForm.account) return;
    setUtilities((u) => ({
      ...u,
      [selectedId]: [...(u[selectedId] || []), { id: Date.now(), ...utilityForm }],
    }));
    setUtilityForm({ type: UTILITY_TYPES[0], provider: "", account: "", payer: "Tenant" });
  };
  const removeUtility = (propertyId, id) =>
    setUtilities((u) => ({ ...u, [propertyId]: u[propertyId].filter((x) => x.id !== id) }));

  const balances = useMemo(() => {
    const m = {};
    properties.forEach((p) => (m[p.id] = balanceFor(ledger, p.id)));
    return m;
  }, [ledger, properties]);

  const addLedgerEntry = () => {
    if (!ledgerForm.amount || !ledgerForm.date) return;
    setLedger((ls) => [
      ...ls,
      { id: Date.now(), propertyId: selectedId, type: ledgerForm.type, amount: Number(ledgerForm.amount), date: ledgerForm.date, note: ledgerForm.note || (ledgerForm.type === "charge" ? "Rent charge" : "Payment") },
    ]);
    setLedgerForm({ type: "payment", amount: "", date: "", note: "" });
  };

  const addExpense = () => {
    if (!expenseForm.amount || !expenseForm.date) return;
    setExpenses((es) => [
      { id: Date.now(), propertyId: Number(expenseForm.propertyId), category: expenseForm.category, amount: Number(expenseForm.amount), date: expenseForm.date, note: expenseForm.note },
      ...es,
    ]);
    setExpenseForm((f) => ({ ...f, amount: "", date: "", note: "" }));
  };
  const removeExpense = (id) => setExpenses((es) => es.filter((e) => e.id !== id));

  const stats = useMemo(() => {
    const rentRoll = properties.reduce((s, p) => s + p.rent, 0);
    const collectedAugust = ledger.filter((e) => e.type === "payment" && e.date.startsWith("2026-08")).reduce((s, e) => s + e.amount, 0);
    const outstanding = Object.values(balances).reduce((s, b) => s + Math.max(b, 0), 0);
    const expenseTotal = expenses.reduce((s, e) => s + e.amount, 0);
    const reservesHeld = properties.reduce((s, p) => s + escrowBalanceFor(escrow, p.id), 0);
    const debtService = properties.reduce((s, p) => {
      const m = mortgages[p.id];
      return s + (m && m.hasMortgage ? Number(m.monthlyPayment) || 0 : 0);
    }, 0);
    const mortgageDebt = properties.reduce((s, p) => {
      const m = mortgages[p.id];
      return s + (m && m.hasMortgage ? Number(m.balance) || 0 : 0);
    }, 0);
    const marketValueTotal = properties.reduce((s, p) => s + (Number(marketValues[p.id]) || 0), 0);
    const netPortfolioValue = marketValueTotal - mortgageDebt;
    const net = collectedAugust - expenseTotal - debtService;
    const complianceDueSoon = compliance.filter((c) => c.status !== "completed" && daysUntil(c.dueDate) <= 30).length;
    return { rentRoll, collectedAugust, outstanding, expenseTotal, net, reservesHeld, debtService, mortgageDebt, marketValueTotal, netPortfolioValue, complianceDueSoon };
  }, [properties, ledger, balances, expenses, escrow, mortgages, marketValues, compliance]);

  const byProperty = useMemo(
    () =>
      properties.map((p) => {
        const exp = expenses.filter((e) => e.propertyId === p.id).reduce((s, e) => s + e.amount, 0);
        return { name: p.name.split(" ").slice(0, 2).join(" "), net: p.rent - exp };
      }),
    [properties, expenses]
  );

  const byCategory = useMemo(() => {
    const m = {};
    expenses.forEach((e) => (m[e.category] = (m[e.category] || 0) + e.amount));
    return Object.entries(m).map(([name, value]) => ({ name, value }));
  }, [expenses]);

  const NAV = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "snapshot", label: "Snapshot", icon: TrendingUp },
    { id: "properties", label: "Properties", icon: Building2 },
    { id: "ledgers", label: "Ledgers", icon: ScrollText },
    { id: "maintenance", label: "Maintenance", icon: Wrench },
    { id: "compliance", label: "Compliance", icon: AlertTriangle },
    { id: "providers", label: "Providers", icon: Phone },
    { id: "expenses", label: "Expenses", icon: Receipt },
    { id: "reports", label: "Reports", icon: BarChart3 },
  ];

  return (
    <div style={{ background: T.paper, minHeight: "100vh", fontFamily: "'IBM Plex Sans', sans-serif", color: T.ink }}>
      <style>{FONTS}</style>

      <header style={{ borderBottom: `1px solid ${T.line}`, padding: "28px 32px 22px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 30, fontWeight: 700, letterSpacing: "-0.01em" }}>
            The Ledger
          </div>
          <div style={{ color: T.inkSoft, fontSize: 14, marginTop: 2 }}>10-property portfolio &middot; August 2026</div>
        </div>
        <div style={{ textAlign: "right", fontSize: 12, color: T.inkSoft, paddingTop: 6 }}>
          {saveStatus === "saving" && "Saving…"}
          {saveStatus === "saved" && "✓ Saved"}
          {saveStatus === "error" && <span style={{ color: T.brick }}>Save failed — check connection</span>}
          {saveStatus === "idle" && loaded && "Data loaded"}
        </div>
      </header>

      <div style={{ display: "flex", maxWidth: 1180, margin: "0 auto" }}>
        <nav style={{ width: 168, flexShrink: 0, paddingTop: 28 }}>
          {NAV.map(({ id, label, icon: Icon }) => {
            const active = tab === id;
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                style={{
                  display: "flex", alignItems: "center", gap: 9, width: "100%",
                  padding: "11px 14px 11px 18px", marginBottom: 8, marginLeft: active ? 0 : 10,
                  border: "none", borderRadius: "8px 0 0 8px",
                  background: active ? T.card : "transparent",
                  color: active ? T.pine : T.inkSoft,
                  fontSize: 14, fontWeight: active ? 600 : 500,
                  cursor: "pointer", textAlign: "left",
                  boxShadow: active ? `inset 3px 0 0 ${T.amber}` : "none",
                  borderTop: active ? `1px solid ${T.line}` : "1px solid transparent",
                  borderBottom: active ? `1px solid ${T.line}` : "1px solid transparent",
                  borderLeft: active ? `1px solid ${T.line}` : "1px solid transparent",
                }}
              >
                <Icon size={16} />
                {label}
              </button>
            );
          })}
        </nav>

        <main style={{ flex: 1, background: T.card, border: `1px solid ${T.line}`, borderRadius: "10px 10px 0 0", padding: 28, marginTop: 28, minHeight: 560 }}>
          {tab === "overview" && <Overview stats={stats} properties={properties} balances={balances} goToLedger={(id) => { setSelectedId(id); setTab("ledgers"); }} />}
          {tab === "snapshot" && (
            <Snapshot
              stats={stats}
              properties={properties}
              balances={balances}
              marketValues={marketValues}
              mortgages={mortgages}
              expenses={expenses}
              equipment={equipment}
              compliance={compliance}
              maintenance={maintenance}
              goToLedger={(id) => { setSelectedId(id); setTab("ledgers"); }}
            />
          )}
          {tab === "properties" && <Properties properties={properties} balances={balances} goToLedger={(id) => { setSelectedId(id); setTab("ledgers"); }} mortgages={mortgages} updateMortgage={updateMortgage} />}
          {tab === "ledgers" && (
            <Ledgers
              properties={properties}
              ledger={ledger}
              balances={balances}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              form={ledgerForm}
              setForm={setLedgerForm}
              addEntry={addLedgerEntry}
              utilities={utilities}
              utilityForm={utilityForm}
              setUtilityForm={setUtilityForm}
              addUtility={addUtility}
              removeUtility={removeUtility}
              escrow={escrow}
              escrowForm={escrowForm}
              setEscrowForm={setEscrowForm}
              addEscrowEntry={addEscrowEntry}
              removeEscrowEntry={removeEscrowEntry}
              mortgages={mortgages}
              updateMortgage={updateMortgage}
              marketValues={marketValues}
              updateMarketValue={updateMarketValue}
              expenses={expenses}
              equipment={equipment}
              equipmentForm={equipmentForm}
              setEquipmentForm={setEquipmentForm}
              addEquipment={addEquipment}
              removeEquipment={removeEquipment}
            />
          )}
          {tab === "maintenance" && (
            <Maintenance
              properties={properties}
              equipment={equipment}
              providers={providers}
              maintenance={maintenance}
              form={maintenanceForm}
              setForm={setMaintenanceForm}
              addMaintenance={addMaintenance}
              updateStatus={updateMaintenanceStatus}
              removeMaintenance={removeMaintenance}
            />
          )}
          {tab === "providers" && (
            <Providers providers={providers} form={providerForm} setForm={setProviderForm} addProvider={addProvider} removeProvider={removeProvider} />
          )}
          {tab === "compliance" && (
            <Compliance
              properties={properties}
              compliance={compliance}
              form={complianceForm}
              setForm={setComplianceForm}
              addCompliance={addCompliance}
              markDone={markComplianceDone}
              removeCompliance={removeCompliance}
            />
          )}
          {tab === "expenses" && (
            <Expenses expenses={expenses} properties={properties} form={expenseForm} setForm={setExpenseForm} addExpense={addExpense} removeExpense={removeExpense} />
          )}
          {tab === "reports" && <Reports byProperty={byProperty} byCategory={byCategory} stats={stats} />}
        </main>
      </div>
    </div>
  );
}

function KpiCard({ label, value, tone = "ink" }) {
  const color = tone === "pine" ? T.pine : tone === "brick" ? T.brick : T.ink;
  return (
    <div style={{ background: T.paper, border: `1px solid ${T.line}`, borderRadius: 8, padding: "16px 18px", flex: 1, minWidth: 150 }}>
      <div style={{ fontSize: 12, color: T.inkSoft, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 24, fontWeight: 600, color, marginTop: 6 }}>{value}</div>
    </div>
  );
}

function MiniStat({ label, value, tone = "ink", small = false }) {
  const color = tone === "pine" ? T.pine : tone === "brick" ? T.brick : T.ink;
  return (
    <div>
      <div style={{ fontSize: 11, color: T.inkSoft, textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: small ? 14 : 16, fontWeight: 600, color, marginTop: 2 }}>{value}</div>
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 18, fontWeight: 600 }}>{title}</div>
      {subtitle && <div style={{ fontSize: 12.5, color: T.inkSoft, marginTop: 2 }}>{subtitle}</div>}
    </div>
  );
}

function Overview({ stats, properties, balances, goToLedger }) {
  return (
    <div>
      <SectionTitle title="This month, at a glance" subtitle="Net cash flow includes mortgage debt service" />
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
        <KpiCard label="Rent roll" value={money(stats.rentRoll)} />
        <KpiCard label="Collected in August" value={money(stats.collectedAugust)} tone="pine" />
        <KpiCard label="Total outstanding" value={money(stats.outstanding)} tone="brick" />
        <KpiCard label="Expenses" value={money(stats.expenseTotal)} />
        <KpiCard label="Debt service" value={money(stats.debtService)} />
        <KpiCard label="Net cash flow" value={money(stats.net)} tone={stats.net >= 0 ? "pine" : "brick"} />
        <KpiCard label="Reserves held" value={money(stats.reservesHeld)} />
      </div>

      <SectionTitle title="Portfolio value" subtitle="What the properties are worth, minus what's owed on them" />
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
        <KpiCard label="Total market value" value={money(stats.marketValueTotal)} />
        <KpiCard label="Total mortgage debt" value={money(stats.mortgageDebt)} tone="brick" />
        <KpiCard label="Net portfolio value" value={money(stats.netPortfolioValue)} tone="pine" />
        <KpiCard label="Compliance due ≤30d" value={String(stats.complianceDueSoon)} tone={stats.complianceDueSoon > 0 ? "brick" : "ink"} />
      </div>

      <SectionTitle title="Balances by property" subtitle="Click a property to open its ledger" />
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {properties.map((p) => {
          const s = statusFor(balances[p.id], p.rent);
          return (
            <button
              key={p.id}
              onClick={() => goToLedger(p.id)}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 4px", borderBottom: `1px solid ${T.line}`, background: "none", border: "none", borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: T.line, width: "100%", cursor: "pointer", font: "inherit", color: "inherit" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <ChevronRight size={14} color={T.inkSoft} />
                <span style={{ fontWeight: 500 }}>{p.name}</span>
                <span style={{ color: T.inkSoft, fontSize: 13 }}>{p.tenant}</span>
              </div>
              <span style={{ background: s.bg, color: s.fg, fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>{s.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Snapshot({ stats, properties, balances, marketValues, mortgages, expenses, equipment, compliance, maintenance, goToLedger }) {
  const overdueCompliance = compliance.filter((c) => c.status !== "completed" && daysUntil(c.dueDate) < 0);
  const dueSoonCompliance = compliance.filter((c) => c.status !== "completed" && daysUntil(c.dueDate) >= 0 && daysUntil(c.dueDate) <= 30);
  const equipmentNeedingReplacement = properties.flatMap((p) =>
    (equipment[p.id] || [])
      .map((eq) => ({ ...eq, propertyName: p.name, age: equipmentAgeYears(eq.installDate) }))
      .filter((eq) => eq.age >= eq.lifespan - 2)
  );
  const openMaintenance = maintenance.filter((m) => m.status === "scheduled" || m.status === "in_progress");
  const propertyName = (id) => properties.find((p) => p.id === id)?.name || "—";

  const performanceRows = properties.map((p) => ({
    property: p,
    perf: propertyPerformance(p, { marketValues, mortgages, expenses }),
    rentStatus: statusFor(balances[p.id], p.rent),
  }));

  return (
    <div>
      <SectionTitle title="The business, at a glance" subtitle="Pulled together from ledgers, expenses, mortgages, valuations, maintenance, and compliance" />
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
        <KpiCard label="Net portfolio value" value={money(stats.netPortfolioValue)} tone="pine" />
        <KpiCard label="Total equity" value={money(stats.marketValueTotal - stats.mortgageDebt)} />
        <KpiCard label="Net cash flow (mo.)" value={money(stats.net)} tone={stats.net >= 0 ? "pine" : "brick"} />
        <KpiCard label="Rent roll" value={money(stats.rentRoll)} />
        <KpiCard label="Reserves held" value={money(stats.reservesHeld)} />
      </div>

      <SectionTitle title="Needs attention" subtitle="Compliance overdue or due soon, equipment nearing end of life, open maintenance" />
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
        {overdueCompliance.map((c) => (
          <AttentionRow key={`c-${c.id}`} icon={AlertTriangle} tone="brick" label={`${c.itemType} overdue — ${propertyName(c.propertyId ?? null)}`} detail={`Was due ${c.dueDate}`} />
        ))}
        {dueSoonCompliance.map((c) => (
          <AttentionRow key={`cs-${c.id}`} icon={AlertTriangle} tone="amber" label={`${c.itemType} due soon — ${propertyName(c.propertyId ?? null)}`} detail={`Due ${c.dueDate}`} />
        ))}
        {equipmentNeedingReplacement.map((eq) => (
          <AttentionRow key={`e-${eq.id}-${eq.propertyName}`} icon={Wrench} tone={eq.age >= eq.lifespan ? "brick" : "amber"} label={`${eq.type} — ${eq.propertyName}`} detail={`${eq.age.toFixed(1)} of ${eq.lifespan} expected years`} />
        ))}
        {openMaintenance.map((m) => (
          <AttentionRow key={`m-${m.id}`} icon={Wrench} tone="pine" label={`${m.description} — ${propertyName(m.propertyId)}`} detail={`${m.status === "in_progress" ? "In progress" : "Scheduled"} for ${m.scheduledDate}`} />
        ))}
        {overdueCompliance.length + dueSoonCompliance.length + equipmentNeedingReplacement.length + openMaintenance.length === 0 && (
          <div style={{ color: T.inkSoft, fontStyle: "italic" }}>Nothing needs attention right now.</div>
        )}
      </div>

      <SectionTitle title="Performance by property" subtitle="Click a property to see its full ledger" />
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
        <thead>
          <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
            {["Property", "Rent status", "Market value", "Equity", "Cash flow/mo", "Gross yield", "Cap rate"].map((h) => (
              <th key={h} style={{ textAlign: ["Market value", "Equity", "Cash flow/mo", "Gross yield", "Cap rate"].includes(h) ? "right" : "left", padding: "8px 6px", fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.05em", color: T.inkSoft }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {performanceRows.map(({ property, perf, rentStatus }) => (
            <tr key={property.id} style={{ borderBottom: `1px solid ${T.line}`, cursor: "pointer" }} onClick={() => goToLedger(property.id)}>
              <td style={{ padding: "9px 6px", fontWeight: 500, color: T.pine }}>{property.name}</td>
              <td style={{ padding: "9px 6px" }}>
                <span style={{ background: rentStatus.bg, color: rentStatus.fg, fontSize: 11.5, fontWeight: 600, padding: "3px 8px", borderRadius: 20 }}>{rentStatus.label}</span>
              </td>
              <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace" }}>{money(perf.marketValue)}</td>
              <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace" }}>{money(perf.equity)}</td>
              <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", color: perf.estMonthlyCashFlow >= 0 ? T.pine : T.brick }}>{money(perf.estMonthlyCashFlow)}</td>
              <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace" }}>{perf.grossYield.toFixed(1)}%</td>
              <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace" }}>{perf.capRate.toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ fontSize: 11, color: T.inkSoft, marginTop: 10, fontStyle: "italic" }}>
        Cap rate and yield are estimates based on data on file, not a full-year audited actual.
      </div>
    </div>
  );
}

function AttentionRow({ icon: Icon, tone, label, detail }) {
  const colors = { brick: T.brick, amber: "#8A6A2F", pine: T.pine };
  const bgs = { brick: T.brickSoft, amber: T.amberSoft, pine: T.pineSoft };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, background: bgs[tone], border: `1px solid ${T.line}`, borderRadius: 8, padding: "9px 14px" }}>
      <Icon size={15} color={colors[tone]} />
      <span style={{ fontSize: 13.5, fontWeight: 500, color: T.ink }}>{label}</span>
      <span style={{ fontSize: 12.5, color: T.inkSoft, marginLeft: "auto" }}>{detail}</span>
    </div>
  );
}

function Properties({ properties, balances, goToLedger, mortgages, updateMortgage }) {
  return (
    <div>
      <SectionTitle title="Properties" subtitle="Balance reflects rent charged to date minus payments received" />
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
            {["Property", "City", "Tenant", "Monthly rent", "Balance", "Mortgage", "Loan balance", "Monthly P&I", ""].map((h) => (
              <th key={h} style={{ textAlign: ["Monthly rent", "Balance", "Loan balance", "Monthly P&I"].includes(h) ? "right" : h === "Mortgage" ? "center" : "left", padding: "8px 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: T.inkSoft }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {properties.map((p) => {
            const bal = balances[p.id];
            const s = statusFor(bal, p.rent);
            const m = mortgages[p.id] || DEFAULT_MORTGAGE;
            return (
              <tr key={p.id} style={{ borderBottom: `1px solid ${T.line}` }}>
                <td style={{ padding: "10px 6px", fontWeight: 500 }}>{p.name}</td>
                <td style={{ padding: "10px 6px", color: T.inkSoft }}>{p.city}</td>
                <td style={{ padding: "10px 6px" }}>{p.tenant}</td>
                <td style={{ padding: "10px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace" }}>{money(p.rent)}</td>
                <td style={{ padding: "10px 6px", textAlign: "right" }}>
                  <span style={{ background: s.bg, color: s.fg, fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>{s.label}</span>
                </td>
                <td style={{ padding: "10px 6px", textAlign: "center" }}>
                  <input
                    type="checkbox"
                    checked={m.hasMortgage}
                    onChange={(e) => updateMortgage(p.id, "hasMortgage", e.target.checked)}
                    style={{ width: 16, height: 16, cursor: "pointer", accentColor: T.pine }}
                  />
                </td>
                <td style={{ padding: "10px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", color: m.hasMortgage ? T.ink : T.inkSoft }}>
                  {m.hasMortgage ? money(Number(m.balance) || 0) : "—"}
                </td>
                <td style={{ padding: "10px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", color: m.hasMortgage ? T.ink : T.inkSoft }}>
                  {m.hasMortgage ? money(Number(m.monthlyPayment) || 0) : "—"}
                </td>
                <td style={{ padding: "10px 6px", textAlign: "right" }}>
                  <button onClick={() => goToLedger(p.id)} style={{ background: "none", border: `1px solid ${T.line}`, borderRadius: 6, padding: "5px 10px", fontSize: 12, cursor: "pointer", color: T.pine }}>
                    View ledger
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} style={{ padding: "12px 6px", fontWeight: 600 }}>Total rent roll</td>
            <td style={{ padding: "12px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, borderTop: `3px double ${T.ink}` }}>
              {money(properties.reduce((s, p) => s + p.rent, 0))}
            </td>
            <td style={{ borderTop: `3px double ${T.ink}` }} />
            <td style={{ borderTop: `3px double ${T.ink}` }} />
            <td style={{ padding: "12px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, borderTop: `3px double ${T.ink}` }}>
              {money(properties.reduce((s, p) => s + (mortgages[p.id]?.hasMortgage ? Number(mortgages[p.id].balance) || 0 : 0), 0))}
            </td>
            <td style={{ padding: "12px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, borderTop: `3px double ${T.ink}` }}>
              {money(properties.reduce((s, p) => s + (mortgages[p.id]?.hasMortgage ? Number(mortgages[p.id].monthlyPayment) || 0 : 0), 0))}
            </td>
            <td style={{ borderTop: `3px double ${T.ink}` }} />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function Ledgers({ properties, ledger, balances, selectedId, setSelectedId, form, setForm, addEntry, utilities, utilityForm, setUtilityForm, addUtility, removeUtility, escrow, escrowForm, setEscrowForm, addEscrowEntry, removeEscrowEntry, mortgages, updateMortgage, marketValues, updateMarketValue, expenses, equipment, equipmentForm, setEquipmentForm, addEquipment, removeEquipment }) {
  const property = properties.find((p) => p.id === selectedId);
  const perf = useMemo(() => propertyPerformance(property, { marketValues, mortgages, expenses }), [property, marketValues, mortgages, expenses]);
  const entries = useMemo(() => {
    const rows = ledger
      .filter((e) => e.propertyId === selectedId)
      .sort((a, b) => (a.date === b.date ? (a.type === "charge" ? -1 : 1) : a.date.localeCompare(b.date)));
    let running = 0;
    return rows.map((e) => {
      running += e.type === "charge" ? e.amount : -e.amount;
      return { ...e, running };
    });
  }, [ledger, selectedId]);

  const escrowEntries = useMemo(() => {
    const rows = [...(escrow[selectedId] || [])].sort((a, b) =>
      a.date === b.date ? (a.type === "contribution" ? -1 : 1) : a.date.localeCompare(b.date)
    );
    let running = 0;
    return rows.map((e) => {
      running += e.type === "contribution" ? e.amount : -e.amount;
      return { ...e, running };
    });
  }, [escrow, selectedId]);
  const escrowBalance = escrowEntries.length ? escrowEntries[escrowEntries.length - 1].running : 0;

  const inputStyle = { border: `1px solid ${T.line}`, borderRadius: 6, padding: "8px 10px", fontSize: 13, background: T.paper, color: T.ink };

  return (
    <div style={{ display: "flex", gap: 24 }}>
      <div style={{ width: 190, flexShrink: 0 }}>
        <SectionTitle title="Select property" />
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {properties.map((p) => {
            const active = p.id === selectedId;
            const s = statusFor(balances[p.id], p.rent);
            return (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                style={{
                  textAlign: "left", padding: "8px 10px", borderRadius: 6, cursor: "pointer",
                  border: `1px solid ${active ? T.pine : "transparent"}`,
                  background: active ? T.pineSoft : "transparent",
                  fontSize: 13, color: T.ink,
                }}
              >
                <div style={{ fontWeight: 500 }}>{p.name}</div>
                <div style={{ fontSize: 11, color: s.fg, marginTop: 2 }}>{s.label}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <SectionTitle title={`${property.name} — ledger`} subtitle={`${property.tenant} · rent ${money(property.rent)}/mo`} />

        <div style={{ background: T.paper, border: `1px solid ${T.line}`, borderRadius: 8, padding: "12px 16px", marginBottom: 20 }}>
          <div style={{ display: "flex", gap: 18, alignItems: "flex-end", flexWrap: "wrap", marginBottom: 14 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Current market value
              <input
                style={inputStyle}
                type="number"
                placeholder="0"
                value={marketValues[selectedId] ?? ""}
                onChange={(e) => updateMarketValue(selectedId, e.target.value === "" ? "" : Number(e.target.value))}
              />
            </label>
            <MiniStat label="Loan balance" value={money(perf.loanBalance)} />
            <MiniStat label="Equity" value={money(perf.equity)} tone="pine" />
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", paddingTop: 12, borderTop: `1px solid ${T.line}` }}>
            <MiniStat label="Debt service" value={money(perf.debtService)} small />
            <MiniStat label="Est. monthly cash flow" value={money(perf.estMonthlyCashFlow)} tone={perf.estMonthlyCashFlow >= 0 ? "pine" : "brick"} small />
            <MiniStat label="Gross rent yield" value={`${perf.grossYield.toFixed(1)}%`} small />
            <MiniStat label="Cap rate (est.)" value={`${perf.capRate.toFixed(1)}%`} small />
          </div>
          <div style={{ fontSize: 11, color: T.inkSoft, marginTop: 10, fontStyle: "italic" }}>
            Cap rate is estimated from rent minus expenses logged on file — not a full-year actual.
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20, alignItems: "flex-end" }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
            Entry type
            <select style={inputStyle} value={form.type} onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}>
              <option value="payment">Payment</option>
              <option value="charge">Charge</option>
            </select>
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
            Amount
            <input style={{ ...inputStyle, width: 100 }} type="number" placeholder="0" value={form.amount} onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
            Date
            <input style={inputStyle} type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
            Note
            <input style={inputStyle} type="text" placeholder="Optional" value={form.note} onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))} />
          </label>
          <button onClick={addEntry} style={{ display: "flex", alignItems: "center", gap: 6, background: T.pine, color: "#fff", border: "none", borderRadius: 6, padding: "9px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", height: 37 }}>
            <Plus size={15} /> Post entry
          </button>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
              {["Date", "Type", "Note", "Amount", "Balance"].map((h) => (
                <th key={h} style={{ textAlign: h === "Amount" || h === "Balance" ? "right" : "left", padding: "8px 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: T.inkSoft }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entries.map((e) => (
              <tr key={e.id} style={{ borderBottom: `1px solid ${T.line}` }}>
                <td style={{ padding: "9px 6px", color: T.inkSoft }}>{e.date}</td>
                <td style={{ padding: "9px 6px" }}>
                  <span style={{ color: e.type === "charge" ? T.brick : T.pine, fontWeight: 500 }}>{e.type === "charge" ? "Charge" : "Payment"}</span>
                </td>
                <td style={{ padding: "9px 6px", color: T.inkSoft }}>{e.note}</td>
                <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", color: e.type === "charge" ? T.brick : T.pine }}>
                  {e.type === "charge" ? "+" : "−"}{money(e.amount)}
                </td>
                <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>{money(e.running)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} style={{ padding: "12px 6px", fontWeight: 600 }}>Current balance</td>
              <td style={{ padding: "12px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, borderTop: `3px double ${T.ink}`, color: balances[selectedId] > 0 ? T.brick : T.pine }}>
                {money(balances[selectedId])}
              </td>
            </tr>
          </tfoot>
        </table>

        <div style={{ marginTop: 32 }}>
          <SectionTitle title="Utility accounts" subtitle="Kept on file for continuity across tenant turnover" />

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16, alignItems: "flex-end" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Utility
              <select style={inputStyle} value={utilityForm.type} onChange={(e) => setUtilityForm((f) => ({ ...f, type: e.target.value }))}>
                {UTILITY_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 140 }}>
              Provider
              <input style={inputStyle} type="text" placeholder="e.g. Pepco" value={utilityForm.provider} onChange={(e) => setUtilityForm((f) => ({ ...f, provider: e.target.value }))} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
              Account #
              <input style={inputStyle} type="text" placeholder="Account number" value={utilityForm.account} onChange={(e) => setUtilityForm((f) => ({ ...f, account: e.target.value }))} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Pays
              <select style={inputStyle} value={utilityForm.payer} onChange={(e) => setUtilityForm((f) => ({ ...f, payer: e.target.value }))}>
                <option value="Tenant">Tenant</option>
                <option value="Landlord">Landlord</option>
              </select>
            </label>
            <button onClick={addUtility} style={{ display: "flex", alignItems: "center", gap: 6, background: T.pine, color: "#fff", border: "none", borderRadius: 6, padding: "9px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", height: 37 }}>
              <Plus size={15} /> Add
            </button>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
                {["Utility", "Provider", "Account #", "Pays", ""].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "8px 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: T.inkSoft }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(utilities[selectedId] || []).map((u) => (
                <tr key={u.id} style={{ borderBottom: `1px solid ${T.line}` }}>
                  <td style={{ padding: "9px 6px", fontWeight: 500 }}>{u.type}</td>
                  <td style={{ padding: "9px 6px" }}>{u.provider}</td>
                  <td style={{ padding: "9px 6px", fontFamily: "'IBM Plex Mono', monospace", color: T.inkSoft }}>{u.account}</td>
                  <td style={{ padding: "9px 6px" }}>
                    <span style={{ background: u.payer === "Tenant" ? T.pineSoft : T.amberSoft, color: u.payer === "Tenant" ? T.pine : "#8A6A2F", fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>
                      {u.payer}
                    </span>
                  </td>
                  <td style={{ padding: "9px 6px", textAlign: "right" }}>
                    <button onClick={() => removeUtility(selectedId, u.id)} style={{ background: "none", border: "none", cursor: "pointer", color: T.inkSoft }}>
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
              {(!utilities[selectedId] || utilities[selectedId].length === 0) && (
                <tr>
                  <td colSpan={5} style={{ padding: "16px 6px", color: T.inkSoft, fontStyle: "italic" }}>No utility accounts on file yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 32 }}>
          <SectionTitle title="Tax & insurance reserves" subtitle="Monthly set-asides build a balance; disbursements draw it down when the real bill comes due" />

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16, alignItems: "flex-end" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Entry type
              <select style={inputStyle} value={escrowForm.type} onChange={(e) => setEscrowForm((f) => ({ ...f, type: e.target.value }))}>
                <option value="contribution">Contribution</option>
                <option value="disbursement">Disbursement</option>
              </select>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Category
              <select style={inputStyle} value={escrowForm.category} onChange={(e) => setEscrowForm((f) => ({ ...f, category: e.target.value }))}>
                {ESCROW_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Amount
              <input style={{ ...inputStyle, width: 100 }} type="number" placeholder="0" value={escrowForm.amount} onChange={(e) => setEscrowForm((f) => ({ ...f, amount: e.target.value }))} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Date
              <input style={inputStyle} type="date" value={escrowForm.date} onChange={(e) => setEscrowForm((f) => ({ ...f, date: e.target.value }))} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
              Note
              <input style={inputStyle} type="text" placeholder="Optional" value={escrowForm.note} onChange={(e) => setEscrowForm((f) => ({ ...f, note: e.target.value }))} />
            </label>
            <button onClick={addEscrowEntry} style={{ display: "flex", alignItems: "center", gap: 6, background: T.pine, color: "#fff", border: "none", borderRadius: 6, padding: "9px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", height: 37 }}>
              <Plus size={15} /> Post entry
            </button>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
                {["Date", "Type", "Category", "Note", "Amount", "Balance", ""].map((h) => (
                  <th key={h} style={{ textAlign: h === "Amount" || h === "Balance" ? "right" : "left", padding: "8px 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: T.inkSoft }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {escrowEntries.map((e) => (
                <tr key={e.id} style={{ borderBottom: `1px solid ${T.line}` }}>
                  <td style={{ padding: "9px 6px", color: T.inkSoft }}>{e.date}</td>
                  <td style={{ padding: "9px 6px" }}>
                    <span style={{ color: e.type === "contribution" ? T.pine : T.brick, fontWeight: 500 }}>
                      {e.type === "contribution" ? "Contribution" : "Disbursement"}
                    </span>
                  </td>
                  <td style={{ padding: "9px 6px" }}>{e.category}</td>
                  <td style={{ padding: "9px 6px", color: T.inkSoft }}>{e.note}</td>
                  <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", color: e.type === "contribution" ? T.pine : T.brick }}>
                    {e.type === "contribution" ? "+" : "−"}{money(e.amount)}
                  </td>
                  <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>{money(e.running)}</td>
                  <td style={{ padding: "9px 6px", textAlign: "right" }}>
                    <button onClick={() => removeEscrowEntry(selectedId, e.id)} style={{ background: "none", border: "none", cursor: "pointer", color: T.inkSoft }}>
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
              {escrowEntries.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ padding: "16px 6px", color: T.inkSoft, fontStyle: "italic" }}>No reserve activity logged yet.</td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5} style={{ padding: "12px 6px", fontWeight: 600 }}>Reserve balance on hand</td>
                <td style={{ padding: "12px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, borderTop: `3px double ${T.ink}` }}>
                  {money(escrowBalance)}
                </td>
                <td style={{ borderTop: `3px double ${T.ink}` }} />
              </tr>
            </tfoot>
          </table>
        </div>

        <div style={{ marginTop: 32 }}>
          <SectionTitle title="Mortgage" subtitle="Kept on file alongside the property record" />
          {(() => {
            const m = mortgages[selectedId] || DEFAULT_MORTGAGE;
            return (
              <div>
                <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, marginBottom: m.hasMortgage ? 16 : 0, cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={m.hasMortgage}
                    onChange={(e) => updateMortgage(selectedId, "hasMortgage", e.target.checked)}
                    style={{ width: 16, height: 16, cursor: "pointer", accentColor: T.pine }}
                  />
                  This property has a mortgage
                </label>

                {m.hasMortgage && (
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
                      Lender
                      <input style={inputStyle} type="text" placeholder="e.g. Chase" value={m.lender} onChange={(e) => updateMortgage(selectedId, "lender", e.target.value)} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
                      Rate (%)
                      <input style={{ ...inputStyle, width: 90 }} type="number" step="0.01" placeholder="6.50" value={m.rate} onChange={(e) => updateMortgage(selectedId, "rate", e.target.value)} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
                      Current balance
                      <input style={{ ...inputStyle, width: 130 }} type="number" placeholder="0" value={m.balance} onChange={(e) => updateMortgage(selectedId, "balance", e.target.value)} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
                      Monthly payment (P&amp;I)
                      <input style={{ ...inputStyle, width: 130 }} type="number" placeholder="0" value={m.monthlyPayment} onChange={(e) => updateMortgage(selectedId, "monthlyPayment", e.target.value)} />
                    </label>
                  </div>
                )}
              </div>
            );
          })()}
        </div>

        <div style={{ marginTop: 32 }}>
          <SectionTitle title="Equipment" subtitle="Track age against expected lifespan to plan replacements ahead of failure" />

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16, alignItems: "flex-end" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Type
              <select style={inputStyle} value={equipmentForm.type} onChange={(e) => setEquipmentForm((f) => ({ ...f, type: e.target.value }))}>
                {["HVAC", "Water Heater", "Roof", "Refrigerator", "Washer/Dryer", "Other"].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 140 }}>
              Make / model
              <input style={inputStyle} type="text" placeholder="Optional" value={equipmentForm.makeModel} onChange={(e) => setEquipmentForm((f) => ({ ...f, makeModel: e.target.value }))} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Install date
              <input style={inputStyle} type="date" value={equipmentForm.installDate} onChange={(e) => setEquipmentForm((f) => ({ ...f, installDate: e.target.value }))} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Expected lifespan (yrs)
              <input style={{ ...inputStyle, width: 90 }} type="number" placeholder="15" value={equipmentForm.lifespan} onChange={(e) => setEquipmentForm((f) => ({ ...f, lifespan: e.target.value }))} />
            </label>
            <button onClick={() => addEquipment(selectedId)} style={{ display: "flex", alignItems: "center", gap: 6, background: T.pine, color: "#fff", border: "none", borderRadius: 6, padding: "9px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", height: 37 }}>
              <Plus size={15} /> Add
            </button>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
                {["Type", "Make / model", "Installed", "Age", "Status", ""].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "8px 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: T.inkSoft }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(equipment[selectedId] || []).map((eq) => {
                const age = equipmentAgeYears(eq.installDate);
                const st = equipmentStatus(age, eq.lifespan);
                return (
                  <tr key={eq.id} style={{ borderBottom: `1px solid ${T.line}` }}>
                    <td style={{ padding: "9px 6px", fontWeight: 500 }}>{eq.type}</td>
                    <td style={{ padding: "9px 6px", color: T.inkSoft }}>{eq.makeModel || "—"}</td>
                    <td style={{ padding: "9px 6px", color: T.inkSoft }}>{eq.installDate}</td>
                    <td style={{ padding: "9px 6px", fontFamily: "'IBM Plex Mono', monospace" }}>{age.toFixed(1)} / {eq.lifespan} yrs</td>
                    <td style={{ padding: "9px 6px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: st.bg, color: st.fg, fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>
                        {st.label === "Past expected life" && <AlertTriangle size={12} />}
                        {st.label}
                      </span>
                    </td>
                    <td style={{ padding: "9px 6px", textAlign: "right" }}>
                      <button onClick={() => removeEquipment(selectedId, eq.id)} style={{ background: "none", border: "none", cursor: "pointer", color: T.inkSoft }}>
                        <Trash2 size={15} />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {(!equipment[selectedId] || equipment[selectedId].length === 0) && (
                <tr>
                  <td colSpan={6} style={{ padding: "16px 6px", color: T.inkSoft, fontStyle: "italic" }}>No equipment on file yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Providers({ providers, form, setForm, addProvider, removeProvider }) {
  const inputStyle = { border: `1px solid ${T.line}`, borderRadius: 6, padding: "8px 10px", fontSize: 13, background: T.paper, color: T.ink };
  return (
    <div>
      <SectionTitle title="Add a provider" subtitle="Plumbers, HVAC techs, electricians, handymen — anyone you call for repairs" />
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 26, alignItems: "flex-end" }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 140 }}>
          Name
          <input style={inputStyle} type="text" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Trade
          <input style={inputStyle} type="text" placeholder="e.g. HVAC" value={form.trade} onChange={(e) => setForm((f) => ({ ...f, trade: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Phone
          <input style={inputStyle} type="text" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
          Email
          <input style={inputStyle} type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
        </label>
        <button onClick={addProvider} style={{ display: "flex", alignItems: "center", gap: 6, background: T.pine, color: "#fff", border: "none", borderRadius: 6, padding: "9px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", height: 37 }}>
          <Plus size={15} /> Add
        </button>
      </div>

      <SectionTitle title="Directory" />
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {providers.map((p) => (
          <div key={p.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", border: `1px solid ${T.line}`, borderRadius: 8, padding: "12px 16px" }}>
            <div>
              <div style={{ fontWeight: 600 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: T.pine, fontWeight: 600, marginTop: 2 }}>{p.trade}</div>
              <div style={{ display: "flex", gap: 14, marginTop: 6, fontSize: 13, color: T.inkSoft }}>
                {p.phone && <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Phone size={13} /> {p.phone}</span>}
                {p.email && <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Mail size={13} /> {p.email}</span>}
              </div>
              {p.notes && <div style={{ fontSize: 12.5, color: T.inkSoft, marginTop: 6, fontStyle: "italic" }}>{p.notes}</div>}
            </div>
            <button onClick={() => removeProvider(p.id)} style={{ background: "none", border: "none", cursor: "pointer", color: T.inkSoft }}>
              <Trash2 size={15} />
            </button>
          </div>
        ))}
        {providers.length === 0 && <div style={{ color: T.inkSoft, fontStyle: "italic" }}>No providers on file yet.</div>}
      </div>
    </div>
  );
}

function Maintenance({ properties, equipment, providers, maintenance, form, setForm, addMaintenance, updateStatus, removeMaintenance }) {
  const inputStyle = { border: `1px solid ${T.line}`, borderRadius: 6, padding: "8px 10px", fontSize: 13, background: T.paper, color: T.ink };
  const propertyName = (id) => properties.find((p) => p.id === id)?.name || "—";
  const providerName = (id) => providers.find((p) => p.id === id)?.name || "—";
  const equipmentLabel = (propertyId, equipmentId) => {
    if (!equipmentId) return "—";
    const eq = (equipment[propertyId] || []).find((e) => e.id === equipmentId);
    return eq ? eq.type : "—";
  };
  const availableEquipment = equipment[form.propertyId] || equipment[Number(form.propertyId)] || [];

  const sorted = useMemo(
    () => [...maintenance].sort((a, b) => (a.status === "completed") - (b.status === "completed") || a.scheduledDate.localeCompare(b.scheduledDate)),
    [maintenance]
  );

  const STATUS_STYLE = {
    scheduled: { bg: T.amberSoft, fg: "#8A6A2F", label: "Scheduled" },
    in_progress: { bg: T.pineSoft, fg: T.pine, label: "In progress" },
    completed: { bg: "#EFEBE1", fg: T.inkSoft, label: "Completed" },
    cancelled: { bg: T.brickSoft, fg: T.brick, label: "Cancelled" },
  };

  return (
    <div>
      <SectionTitle title="Schedule a visit" subtitle="Coordinate across properties, equipment, and providers in one place" />
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 26, alignItems: "flex-end" }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Property
          <select style={inputStyle} value={form.propertyId} onChange={(e) => setForm((f) => ({ ...f, propertyId: e.target.value, equipmentId: "" }))}>
            {properties.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Equipment
          <select style={inputStyle} value={form.equipmentId} onChange={(e) => setForm((f) => ({ ...f, equipmentId: e.target.value }))}>
            <option value="">Not equipment-specific</option>
            {availableEquipment.map((eq) => (
              <option key={eq.id} value={eq.id}>{eq.type}</option>
            ))}
          </select>
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Provider
          <select style={inputStyle} value={form.providerId} onChange={(e) => setForm((f) => ({ ...f, providerId: e.target.value }))}>
            <option value="">Unassigned</option>
            {providers.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
          Description
          <input style={inputStyle} type="text" placeholder="e.g. Annual HVAC tune-up" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Date
          <input style={inputStyle} type="date" value={form.scheduledDate} onChange={(e) => setForm((f) => ({ ...f, scheduledDate: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
          Tenant coordination note
          <input style={inputStyle} type="text" placeholder="Optional — access window, contact confirmed, etc." value={form.note} onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))} />
        </label>
        <button onClick={addMaintenance} style={{ display: "flex", alignItems: "center", gap: 6, background: T.pine, color: "#fff", border: "none", borderRadius: 6, padding: "9px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", height: 37 }}>
          <Plus size={15} /> Schedule
        </button>
      </div>

      <SectionTitle title="All visits" subtitle="Across the portfolio, upcoming first" />
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
            {["Date", "Property", "Equipment", "Description", "Provider", "Status", "Note", ""].map((h) => (
              <th key={h} style={{ textAlign: "left", padding: "8px 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: T.inkSoft }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((m) => {
            const st = STATUS_STYLE[m.status];
            return (
              <tr key={m.id} style={{ borderBottom: `1px solid ${T.line}` }}>
                <td style={{ padding: "9px 6px", color: T.inkSoft }}>{m.scheduledDate}</td>
                <td style={{ padding: "9px 6px" }}>{propertyName(m.propertyId)}</td>
                <td style={{ padding: "9px 6px", color: T.inkSoft }}>{equipmentLabel(m.propertyId, m.equipmentId)}</td>
                <td style={{ padding: "9px 6px" }}>{m.description}</td>
                <td style={{ padding: "9px 6px", color: T.inkSoft }}>{providerName(m.providerId)}</td>
                <td style={{ padding: "9px 6px" }}>
                  <select
                    value={m.status}
                    onChange={(e) => updateStatus(m.id, e.target.value)}
                    style={{ background: st.bg, color: st.fg, fontSize: 12, fontWeight: 600, padding: "3px 8px", borderRadius: 20, border: "none", cursor: "pointer" }}
                  >
                    <option value="scheduled">Scheduled</option>
                    <option value="in_progress">In progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td style={{ padding: "9px 6px", color: T.inkSoft, fontSize: 12.5, maxWidth: 180 }}>{m.note}</td>
                <td style={{ padding: "9px 6px", textAlign: "right" }}>
                  <button onClick={() => removeMaintenance(m.id)} style={{ background: "none", border: "none", cursor: "pointer", color: T.inkSoft }}>
                    <Trash2 size={15} />
                  </button>
                </td>
              </tr>
            );
          })}
          {sorted.length === 0 && (
            <tr>
              <td colSpan={8} style={{ padding: "16px 6px", color: T.inkSoft, fontStyle: "italic" }}>No maintenance visits scheduled yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Compliance({ properties, compliance, form, setForm, addCompliance, markDone, removeCompliance }) {
  const inputStyle = { border: `1px solid ${T.line}`, borderRadius: 6, padding: "8px 10px", fontSize: 13, background: T.paper, color: T.ink };
  const propertyName = (id) => (id === null ? "Portfolio-wide" : properties.find((p) => p.id === id)?.name || "—");

  const sorted = useMemo(
    () => [...compliance].sort((a, b) => (a.status === "completed") - (b.status === "completed") || a.dueDate.localeCompare(b.dueDate)),
    [compliance]
  );

  return (
    <div>
      <SectionTitle title="Add a compliance item" subtitle="Licenses, tax deadlines, insurance renewals — anything with a due date" />
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 26, alignItems: "flex-end" }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Property
          <select style={inputStyle} value={form.propertyId} onChange={(e) => setForm((f) => ({ ...f, propertyId: e.target.value }))}>
            <option value="">Portfolio-wide</option>
            {properties.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Type
          <select style={inputStyle} value={form.itemType} onChange={(e) => setForm((f) => ({ ...f, itemType: e.target.value }))}>
            {["Rental License", "Insurance Renewal", "Property Tax", "Lead Paint Certification", "LLC Annual Report", "Fire/Safety Inspection", "Other"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
          Description
          <input style={inputStyle} type="text" placeholder="Optional detail" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Due date
          <input style={inputStyle} type="date" value={form.dueDate} onChange={(e) => setForm((f) => ({ ...f, dueDate: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Recurrence
          <select style={inputStyle} value={form.recurrence} onChange={(e) => setForm((f) => ({ ...f, recurrence: e.target.value }))}>
            <option value="annual">Annual</option>
            <option value="semi_annual">Semi-annual</option>
            <option value="quarterly">Quarterly</option>
            <option value="none">One-time</option>
          </select>
        </label>
        <button onClick={addCompliance} style={{ display: "flex", alignItems: "center", gap: 6, background: T.pine, color: "#fff", border: "none", borderRadius: 6, padding: "9px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", height: 37 }}>
          <Plus size={15} /> Add
        </button>
      </div>

      <SectionTitle title="All items" subtitle="Soonest due first — mark done, or mark done and roll to the next cycle" />
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
            {["Due", "Property", "Type", "Description", "Status", ""].map((h) => (
              <th key={h} style={{ textAlign: "left", padding: "8px 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: T.inkSoft }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((c) => {
            const u = complianceUrgency(c);
            return (
              <tr key={c.id} style={{ borderBottom: `1px solid ${T.line}` }}>
                <td style={{ padding: "9px 6px", color: T.inkSoft }}>{c.dueDate}</td>
                <td style={{ padding: "9px 6px" }}>{propertyName(c.propertyId)}</td>
                <td style={{ padding: "9px 6px", fontWeight: 500 }}>{c.itemType}</td>
                <td style={{ padding: "9px 6px", color: T.inkSoft }}>{c.description}</td>
                <td style={{ padding: "9px 6px" }}>
                  <span style={{ background: u.bg, color: u.fg, fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>{u.label}</span>
                </td>
                <td style={{ padding: "9px 6px", textAlign: "right", whiteSpace: "nowrap" }}>
                  {c.status !== "completed" && (
                    <>
                      {c.recurrence !== "none" && (
                        <button onClick={() => markDone(c.id, true)} style={{ background: "none", border: `1px solid ${T.line}`, borderRadius: 6, padding: "4px 8px", fontSize: 11.5, cursor: "pointer", color: T.pine, marginRight: 6 }}>
                          Done &amp; renew
                        </button>
                      )}
                      <button onClick={() => markDone(c.id, false)} style={{ background: "none", border: `1px solid ${T.line}`, borderRadius: 6, padding: "4px 8px", fontSize: 11.5, cursor: "pointer", color: T.inkSoft, marginRight: 6 }}>
                        Mark done
                      </button>
                    </>
                  )}
                  <button onClick={() => removeCompliance(c.id)} style={{ background: "none", border: "none", cursor: "pointer", color: T.inkSoft, verticalAlign: "middle" }}>
                    <Trash2 size={15} />
                  </button>
                </td>
              </tr>
            );
          })}
          {sorted.length === 0 && (
            <tr>
              <td colSpan={6} style={{ padding: "16px 6px", color: T.inkSoft, fontStyle: "italic" }}>No compliance items on file yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Expenses({ expenses, properties, form, setForm, addExpense, removeExpense }) {
  const nameFor = (id) => properties.find((p) => p.id === id)?.name || "—";
  const inputStyle = { border: `1px solid ${T.line}`, borderRadius: 6, padding: "8px 10px", fontSize: 13, background: T.paper, color: T.ink };

  return (
    <div>
      <SectionTitle title="Log an expense" />
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 26, alignItems: "flex-end" }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Property
          <select style={inputStyle} value={form.propertyId} onChange={(e) => setForm((f) => ({ ...f, propertyId: e.target.value }))}>
            {properties.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Category
          <select style={inputStyle} value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Amount
          <input style={{ ...inputStyle, width: 100 }} type="number" placeholder="0" value={form.amount} onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Date
          <input style={inputStyle} type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
          Note
          <input style={inputStyle} type="text" placeholder="Optional" value={form.note} onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))} />
        </label>
        <button onClick={addExpense} style={{ display: "flex", alignItems: "center", gap: 6, background: T.pine, color: "#fff", border: "none", borderRadius: 6, padding: "9px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", height: 37 }}>
          <Plus size={15} /> Add
        </button>
      </div>

      <SectionTitle title="Expense log" />
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
            {["Date", "Property", "Category", "Note", "Amount", ""].map((h) => (
              <th key={h} style={{ textAlign: h === "Amount" ? "right" : "left", padding: "8px 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: T.inkSoft }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={e.id} style={{ borderBottom: `1px solid ${T.line}` }}>
              <td style={{ padding: "9px 6px", color: T.inkSoft }}>{e.date}</td>
              <td style={{ padding: "9px 6px" }}>{nameFor(e.propertyId)}</td>
              <td style={{ padding: "9px 6px" }}>{e.category}</td>
              <td style={{ padding: "9px 6px", color: T.inkSoft }}>{e.note}</td>
              <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace" }}>{money(e.amount)}</td>
              <td style={{ padding: "9px 6px", textAlign: "right" }}>
                <button onClick={() => removeExpense(e.id)} style={{ background: "none", border: "none", cursor: "pointer", color: T.inkSoft }}>
                  <Trash2 size={15} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} style={{ padding: "12px 6px", fontWeight: 600 }}>Total expenses</td>
            <td style={{ padding: "12px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, borderTop: `3px double ${T.ink}` }}>
              {money(expenses.reduce((s, e) => s + e.amount, 0))}
            </td>
            <td />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function Reports({ byProperty, byCategory, stats }) {
  return (
    <div>
      <SectionTitle title="Net income by property" subtitle="Monthly rent minus logged expenses" />
      <div style={{ height: 260, marginBottom: 32 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={byProperty} margin={{ left: -10 }}>
            <CartesianGrid stroke={T.line} vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: T.inkSoft }} angle={-20} textAnchor="end" height={50} />
            <YAxis tick={{ fontSize: 11, fill: T.inkSoft }} tickFormatter={(v) => `$${v / 1000}k`} />
            <Tooltip formatter={(v) => money(v)} contentStyle={{ fontSize: 13, border: `1px solid ${T.line}` }} />
            <Bar dataKey="net" fill={T.pine} radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <SectionTitle title="Expenses by category" />
      <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
        <div style={{ width: 260, height: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={byCategory} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={2}>
                {byCategory.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => money(v)} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {byCategory.map((c, i) => (
            <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: PIE_COLORS[i % PIE_COLORS.length] }} />
              <span style={{ width: 100 }}>{c.name}</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: T.inkSoft }}>{money(c.value)}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 28, paddingTop: 16, borderTop: `3px double ${T.ink}`, display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 600 }}>
        <span>Net cash flow, month to date</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: stats.net >= 0 ? T.pine : T.brick }}>{money(stats.net)}</span>
      </div>
    </div>
  );
}
