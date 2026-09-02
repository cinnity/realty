"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import {
  BookOpen, Building2, Receipt, BarChart3, Plus, Trash2, ChevronRight, ChevronDown, ScrollText,
  Wrench, Phone, Mail, AlertTriangle, TrendingUp, Home,
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
  { id: 1, name: "810B Stratford Way", city: "Frederick, MD", tenant: "", rent: 1800, leaseStart: "2022-05-07", leaseEnd: "2023-04-30", owningEntity: "", bedrooms: "", sqft: "", propertyType: "", dateAcquired: "", purchasePrice: "", renovationSpend: "", insuranceCompany: "", insurancePolicy: "", insuranceExpiration: "", rentEstimate: "", bathrooms: "", tenantPhone: "", tenantEmail: "", hoaManagementName: "", hoaManagementPhone: "", hoaManagementWebsite: "" , annualPropertyTax: "", annualLicense: "" },
  { id: 2, name: "11510 Little Patuxent Pkwy #407", city: "Columbia, MD", tenant: "", rent: 2100, leaseStart: "2022-10-30", leaseEnd: "2023-11-30", owningEntity: "", bedrooms: "", sqft: "", propertyType: "", dateAcquired: "", purchasePrice: "", renovationSpend: "", insuranceCompany: "", insurancePolicy: "", insuranceExpiration: "", rentEstimate: "", bathrooms: "", tenantPhone: "", tenantEmail: "", hoaManagementName: "", hoaManagementPhone: "", hoaManagementWebsite: "" , annualPropertyTax: 3022.08, annualLicense: "" },
  { id: 3, name: "10249 Prince Pl", city: "", tenant: "", rent: 1700, leaseStart: "", leaseEnd: "2023-12-31", owningEntity: "", bedrooms: "", sqft: "", propertyType: "", dateAcquired: "", purchasePrice: "", renovationSpend: "", insuranceCompany: "", insurancePolicy: "", insuranceExpiration: "", rentEstimate: "", bathrooms: "", tenantPhone: "", tenantEmail: "", hoaManagementName: "", hoaManagementPhone: "", hoaManagementWebsite: "" , annualPropertyTax: "", annualLicense: "" },
  { id: 4, name: "1624 Northbourne Rd", city: "Baltimore, MD", tenant: "", rent: 1975, leaseStart: "2022-06-15", leaseEnd: "2023-06-30", owningEntity: "", bedrooms: "", sqft: "", propertyType: "", dateAcquired: "", purchasePrice: "", renovationSpend: "", insuranceCompany: "", insurancePolicy: "", insuranceExpiration: "", rentEstimate: "", bathrooms: "", tenantPhone: "", tenantEmail: "", hoaManagementName: "", hoaManagementPhone: "", hoaManagementWebsite: "" , annualPropertyTax: 3282.96, annualLicense: "" },
  { id: 5, name: "2061 Alice Ave #203", city: "Oxon Hill, MD", tenant: "", rent: 1750, leaseStart: "2021-11-01", leaseEnd: "2022-11-30", owningEntity: "", bedrooms: "", sqft: "", propertyType: "", dateAcquired: "", purchasePrice: "", renovationSpend: "", insuranceCompany: "", insurancePolicy: "", insuranceExpiration: "", rentEstimate: "", bathrooms: "", tenantPhone: "", tenantEmail: "", hoaManagementName: "", hoaManagementPhone: "", hoaManagementWebsite: "" , annualPropertyTax: 2830.2, annualLicense: "" },
  { id: 6, name: "2000 Alice Ave #301", city: "Oxon Hill, MD", tenant: "", rent: 1775, leaseStart: "2022-07-01", leaseEnd: "2024-07-31", owningEntity: "", bedrooms: "", sqft: "", propertyType: "", dateAcquired: "", purchasePrice: "", renovationSpend: "", insuranceCompany: "", insurancePolicy: "", insuranceExpiration: "", rentEstimate: "", bathrooms: "", tenantPhone: "", tenantEmail: "", hoaManagementName: "", hoaManagementPhone: "", hoaManagementWebsite: "" , annualPropertyTax: 2828.04, annualLicense: "" },
  { id: 7, name: "11415 Little Patuxent Pkwy #4-108", city: "Columbia, MD", tenant: "", rent: 1650, leaseStart: "2022-01-15", leaseEnd: "2022-12-31", owningEntity: "", bedrooms: "", sqft: "", propertyType: "", dateAcquired: "", purchasePrice: "", renovationSpend: "", insuranceCompany: "", insurancePolicy: "", insuranceExpiration: "", rentEstimate: "", bathrooms: "", tenantPhone: "", tenantEmail: "", hoaManagementName: "", hoaManagementPhone: "", hoaManagementWebsite: "" , annualPropertyTax: 2379.84, annualLicense: "" },
  { id: 8, name: "5809 Greenlawn Dr", city: "Bethesda, MD", tenant: "", rent: 4200, leaseStart: "2021-04-01", leaseEnd: "2023-04-30", owningEntity: "", bedrooms: "", sqft: "", propertyType: "", dateAcquired: "", purchasePrice: "", renovationSpend: "", insuranceCompany: "", insurancePolicy: "", insuranceExpiration: "", rentEstimate: "", bathrooms: "", tenantPhone: "", tenantEmail: "", hoaManagementName: "", hoaManagementPhone: "", hoaManagementWebsite: "" , annualPropertyTax: 7883.76, annualLicense: "" },
  { id: 9, name: "267 Cobblestone Ct", city: "Schaumburg, IL", tenant: "", rent: 2700, leaseStart: "2022-04-01", leaseEnd: "2023-04-30", owningEntity: "", bedrooms: "", sqft: "", propertyType: "", dateAcquired: "", purchasePrice: "", renovationSpend: "", insuranceCompany: "", insurancePolicy: "", insuranceExpiration: "", rentEstimate: "", bathrooms: "", tenantPhone: "", tenantEmail: "", hoaManagementName: "", hoaManagementPhone: "", hoaManagementWebsite: "" , annualPropertyTax: 2518.2, annualLicense: "" },
  { id: 10, name: "11410 Little Patuxent Pkwy #1001", city: "Columbia, MD", tenant: "", rent: 1900, leaseStart: "", leaseEnd: "", owningEntity: "", bedrooms: "", sqft: "", propertyType: "", dateAcquired: "", purchasePrice: "", renovationSpend: "", insuranceCompany: "", insurancePolicy: "", insuranceExpiration: "", rentEstimate: "", bathrooms: "", tenantPhone: "", tenantEmail: "", hoaManagementName: "", hoaManagementPhone: "", hoaManagementWebsite: "" , annualPropertyTax: 3034.2, annualLicense: "" },
];

// No transaction history was in the source sheet (it's an annual summary,
// not a payment log) — starting clean rather than inventing a fake history.
const SEED_LEDGER = [];

// License fees were the one clearly recurring cost that didn't fit the
// Reserves categories (Property Tax / Insurance / HOA / Other) — logged
// here as a single representative annual entry per property.
const SEED_EXPENSES = [
  { id: 1, propertyId: 2, category: "Other", amount: 93.85, date: "2025-01-01", note: "Rental license fee" },
  { id: 2, propertyId: 5, category: "Other", amount: 126.5, date: "2025-01-01", note: "Rental license fee" },
  { id: 3, propertyId: 6, category: "Other", amount: 126.5, date: "2025-01-01", note: "Rental license fee" },
  { id: 4, propertyId: 7, category: "Other", amount: 93.85, date: "2025-01-01", note: "Rental license fee" },
  { id: 5, propertyId: 8, category: "Other", amount: 140, date: "2025-01-01", note: "Rental license fee" },
  { id: 6, propertyId: 9, category: "Other", amount: 65, date: "2025-01-01", note: "Rental license fee" },
  { id: 7, propertyId: 10, category: "Other", amount: 93.85, date: "2025-01-01", note: "Rental license fee" },
];

const CATEGORIES = ["Maintenance", "Repairs", "Insurance", "Property Tax", "Legal", "Utilities", "Other"];
const PIE_COLORS = [T.pine, T.amber, T.brick, "#5B6660", "#7A9E8E", "#C9A26A", "#8E5B5D"];
const UTILITY_TYPES = ["Electric", "Gas", "Water/Sewer", "Trash", "Internet"];

// no utility account numbers were in the source sheet
const SEED_UTILITIES = {};

const ESCROW_CATEGORIES = ["Property Tax", "Insurance", "HOA", "Other"];

// monthly rates from the source sheet, logged as one reference contribution
// per category per property (not a full contribution history — just the
// known current rate to start from). Two rows (#1, #3) had ambiguous
// columns after Insurance — logged as "Other" with a note rather than
// guessing which was HOA vs Property Tax.
const SEED_ESCROW = {
  1: [
    { id: 1, type: "contribution", category: "Insurance", amount: 23.4, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 2, type: "contribution", category: "Other", amount: 465.7, date: "2025-01-01", note: "HOA + Property Tax combined (~$204 + $261.70) — source columns unclear, please split" },
  ],
  2: [
    { id: 1, type: "contribution", category: "Insurance", amount: 32.49, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 2, type: "contribution", category: "HOA", amount: 372.73, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 3, type: "contribution", category: "Property Tax", amount: 251.84, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 4, type: "contribution", category: "Other", amount: 43.77, date: "2025-01-01", note: "Monthly rate per source sheet" },
  ],
  3: [
    { id: 1, type: "contribution", category: "Insurance", amount: 28.1, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 2, type: "contribution", category: "Other", amount: 586.39, date: "2025-01-01", note: "HOA + Property Tax combined (~$365 + $221.39) — source columns unclear, please split" },
  ],
  4: [
    { id: 1, type: "contribution", category: "Insurance", amount: 63.98, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 2, type: "contribution", category: "HOA", amount: 50, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 3, type: "contribution", category: "Property Tax", amount: 273.58, date: "2025-01-01", note: "Monthly rate per source sheet" },
  ],
  5: [
    { id: 1, type: "contribution", category: "Insurance", amount: 60.91, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 2, type: "contribution", category: "HOA", amount: 340, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 3, type: "contribution", category: "Property Tax", amount: 235.85, date: "2025-01-01", note: "Monthly rate per source sheet" },
  ],
  6: [
    { id: 1, type: "contribution", category: "Insurance", amount: 37.58, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 2, type: "contribution", category: "HOA", amount: 340, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 3, type: "contribution", category: "Property Tax", amount: 235.67, date: "2025-01-01", note: "Monthly rate per source sheet" },
  ],
  7: [
    { id: 1, type: "contribution", category: "Insurance", amount: 35.93, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 2, type: "contribution", category: "HOA", amount: 380.23, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 3, type: "contribution", category: "Property Tax", amount: 198.32, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 4, type: "contribution", category: "Other", amount: 45.22, date: "2025-01-01", note: "Monthly rate per source sheet" },
  ],
  8: [
    { id: 1, type: "contribution", category: "Insurance", amount: 228.5, date: "2025-01-01", note: "Escrowed with mortgage — per source sheet note" },
    { id: 2, type: "contribution", category: "Property Tax", amount: 656.98, date: "2025-01-01", note: "Escrowed with mortgage — per source sheet note" },
  ],
  9: [
    { id: 1, type: "contribution", category: "Insurance", amount: 25.75, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 2, type: "contribution", category: "HOA", amount: 322.76, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 3, type: "contribution", category: "Property Tax", amount: 209.85, date: "2025-01-01", note: "Monthly rate per source sheet" },
  ],
  10: [
    { id: 1, type: "contribution", category: "Insurance", amount: 34.41, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 2, type: "contribution", category: "HOA", amount: 405.76, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 3, type: "contribution", category: "Property Tax", amount: 252.85, date: "2025-01-01", note: "Monthly rate per source sheet" },
    { id: 4, type: "contribution", category: "Other", amount: 43.77, date: "2025-01-01", note: "Monthly rate per source sheet" },
  ],
};

const DEFAULT_MORTGAGE = { hasMortgage: false, lender: "", loanNumber: "", rate: "", balance: "", monthlyPayment: "" };

// monthly P&I from the source sheet. Lender, loan number, rate, and loan
// balance weren't in the sheet — left blank for you to fill in on each
// property's ledger page.
const SEED_MORTGAGES = {
  2: { hasMortgage: true, lender: "", loanNumber: "", rate: "", balance: "", monthlyPayment: "1399.17" },
  4: { hasMortgage: true, lender: "", loanNumber: "", rate: "", balance: "", monthlyPayment: "1587.44" },
  5: { hasMortgage: true, lender: "", loanNumber: "", rate: "", balance: "", monthlyPayment: "1113.24" },
  6: { hasMortgage: true, lender: "", loanNumber: "", rate: "", balance: "", monthlyPayment: "1185.56" },
  7: { hasMortgage: true, lender: "", loanNumber: "", rate: "", balance: "", monthlyPayment: "1000.00" },
  8: { hasMortgage: true, lender: "", loanNumber: "", rate: "", balance: "", monthlyPayment: "1974.52" },
  9: { hasMortgage: true, lender: "", loanNumber: "", rate: "", balance: "", monthlyPayment: "980.37" },
  10: { hasMortgage: true, lender: "", loanNumber: "", rate: "", balance: "", monthlyPayment: "1064.00" },
};

// no market values were in the source sheet — add these on each property's ledger page
const SEED_MARKET_VALUES = {};

const money = (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
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

// current monthly rate per category, taken from the most recent contribution
// logged for that category (contributions represent "what's set aside this
// month," so the latest one is the best read of today's rate). Also returns
// the note on the latest "Other" entry, so it can be shown as "Other (note)".
function escrowMonthlyRates(escrow, propertyId) {
  const entries = (escrow[propertyId] || []).filter((e) => e.type === "contribution");
  const rates = { "Property Tax": 0, Insurance: 0, HOA: 0, Other: 0 };
  let otherNote = "";
  ["Property Tax", "Insurance", "HOA", "Other"].forEach((cat) => {
    const forCat = entries.filter((e) => e.category === cat).sort((a, b) => a.date.localeCompare(b.date));
    if (forCat.length) {
      rates[cat] = forCat[forCat.length - 1].amount;
      if (cat === "Other") otherNote = forCat[forCat.length - 1].note || "";
    }
  });
  return { ...rates, otherNote };
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
  // pure numeric arithmetic on the y/m/d components — avoids the bug where
  // new Date(dateStr) parses as UTC midnight but setMonth/setFullYear mutate
  // in local time, which can shift the result by a day depending on timezone
  let [y, m, d] = dateStr.split("-").map(Number);
  if (recurrence === "quarterly") m += 3;
  else if (recurrence === "semi_annual") m += 6;
  else y += 1; // default annual
  y += Math.floor((m - 1) / 12);
  m = ((((m - 1) % 12) + 12) % 12) + 1;
  const daysInTargetMonth = new Date(y, m, 0).getDate(); // day 0 of next month = last day of this month
  d = Math.min(d, daysInTargetMonth);
  return `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

// tiered lease-expiration reminder: flags at 90, 60, and 30 days out, then overdue once past end date
function leaseUrgency(leaseEnd) {
  if (!leaseEnd) return null;
  const d = daysUntil(leaseEnd);
  if (d < 0) return { label: `Lease expired ${Math.abs(d)}d ago`, bg: T.brickSoft, fg: T.brick, tier: "expired" };
  if (d <= 30) return { label: `Lease expires in ${d}d`, bg: T.brickSoft, fg: T.brick, tier: "30" };
  if (d <= 60) return { label: `Lease expires in ${d}d`, bg: T.amberSoft, fg: "#8A6A2F", tier: "60" };
  if (d <= 90) return { label: `Lease expires in ${d}d`, bg: T.amberSoft, fg: "#8A6A2F", tier: "90" };
  return { label: `Lease renews/expires ${leaseEnd}`, bg: T.pineSoft, fg: T.pine, tier: "ok" };
}

// same tiered 90/60/30-day pattern as leaseUrgency, applied to insurance policy expiration
function insuranceUrgency(expirationDate) {
  if (!expirationDate) return null;
  const d = daysUntil(expirationDate);
  if (d < 0) return { label: `Insurance expired ${Math.abs(d)}d ago`, bg: T.brickSoft, fg: T.brick, tier: "expired" };
  if (d <= 30) return { label: `Insurance expires in ${d}d`, bg: T.brickSoft, fg: T.brick, tier: "30" };
  if (d <= 60) return { label: `Insurance expires in ${d}d`, bg: T.amberSoft, fg: "#8A6A2F", tier: "60" };
  if (d <= 90) return { label: `Insurance expires in ${d}d`, bg: T.amberSoft, fg: "#8A6A2F", tier: "90" };
  return { label: `Insurance renews/expires ${expirationDate}`, bg: T.pineSoft, fg: T.pine, tier: "ok" };
}

function statusFor(balance, rent) {
  if (balance <= 0) return { label: "Current", bg: T.pineSoft, fg: T.pine };
  if (balance < rent) return { label: `Owes ${money(balance)}`, bg: T.amberSoft, fg: "#8A6A2F" };
  return { label: `Behind ${money(balance)}`, bg: T.brickSoft, fg: T.brick };
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
  const expensesLogged = expenses.filter((e) => e.propertyId === property.id).reduce((s, e) => s + e.amount, 0);
  const noi = annualRent - expensesLogged; // approximate — based on expenses on file, not a full-year actual
  const capRate = marketValue > 0 ? (noi / marketValue) * 100 : 0;
  const grossYield = marketValue > 0 ? (annualRent / marketValue) * 100 : 0;

  const rates = escrowMonthlyRates(escrow, property.id);
  const monthlyPropertyTax = (Number(property.annualPropertyTax) || 0) / 12;
  const totalMonthlyExpenses = monthlyPropertyTax + rates.Insurance + rates.HOA + rates.Other + debtService;
  const netMonthlyIncome = property.rent - totalMonthlyExpenses;

  return {
    marketValue, loanBalance, equity, debtService, expensesLogged, capRate, grossYield,
    propertyTax: monthlyPropertyTax, insurance: rates.Insurance, hoa: rates.HOA, other: rates.Other, otherNote: rates.otherNote,
    totalMonthlyExpenses, netMonthlyIncome,
    estMonthlyCashFlow: netMonthlyIncome, // kept for compatibility with existing callers
  };
}

export default function PortfolioDashboard() {
  const [properties, setProperties] = useState(SEED_PROPERTIES);
  const [newPropertyForm, setNewPropertyForm] = useState({ name: "", city: "", tenant: "", rent: "" });

  const updateProperty = (id, field, value) =>
    setProperties((ps) => ps.map((p) => (p.id === id ? { ...p, [field]: field === "rent" ? Number(value) || 0 : value } : p)));

  const addProperty = () => {
    if (!newPropertyForm.name) return;
    const id = Date.now();
    setProperties((ps) => [
      ...ps,
      {
        id, name: newPropertyForm.name, city: newPropertyForm.city, tenant: newPropertyForm.tenant, rent: Number(newPropertyForm.rent) || 0,
        leaseStart: "", leaseEnd: "", owningEntity: "", bedrooms: "", bathrooms: "", sqft: "", propertyType: "", dateAcquired: "",
        purchasePrice: "", renovationSpend: "", insuranceCompany: "", insurancePolicy: "", insuranceExpiration: "", rentEstimate: "",
        tenantPhone: "", tenantEmail: "", hoaManagementName: "", hoaManagementPhone: "", hoaManagementWebsite: "",
        annualPropertyTax: "", annualLicense: "",
      },
    ]);
    setNewPropertyForm({ name: "", city: "", tenant: "", rent: "" });
  };

  // removing a property cleans up everything that referenced it, so nothing is left orphaned
  const removeProperty = (id) => {
    setProperties((ps) => ps.filter((p) => p.id !== id));
    setLedger((ls) => ls.filter((e) => e.propertyId !== id));
    setExpenses((es) => es.filter((e) => e.propertyId !== id));
    setUtilities((u) => { const { [id]: _drop, ...rest } = u; return rest; });
    setEscrow((es) => { const { [id]: _drop, ...rest } = es; return rest; });
    setMortgages((m) => { const { [id]: _drop, ...rest } = m; return rest; });
    setMarketValues((mv) => { const { [id]: _drop, ...rest } = mv; return rest; });
    setEquipment((eq) => { const { [id]: _drop, ...rest } = eq; return rest; });
    setMaintenance((ms) => ms.filter((m) => m.propertyId !== id));
    setCompliance((cs) => cs.filter((c) => c.propertyId !== id));
    if (selectedId === id) {
      const remaining = properties.filter((p) => p.id !== id);
      if (remaining[0]) setSelectedId(remaining[0].id);
    }
  };

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
  const [annualExpenses, setAnnualExpenses] = useState({});
  const [taxRate, setTaxRate] = useState("22");
  const [tab, setTab] = useState("overview");
  const [selectedId, setSelectedId] = useState(SEED_PROPERTIES[0].id);
  const [ledgerForm, setLedgerForm] = useState({ type: "payment", amount: "", date: "", note: "" });
  const [expenseForm, setExpenseForm] = useState({ propertyId: SEED_PROPERTIES[0].id, category: CATEGORIES[0], vendor: "", amount: "", date: "", note: "" });
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

  // quick-edit from the P&L box: posts a new dated contribution so the rate
  // updates going forward while keeping the prior rate in the Reserves history
  const setCurrentRate = (propertyId, category, amount, note) =>
    setEscrow((es) => ({
      ...es,
      [propertyId]: [
        ...(es[propertyId] || []),
        { id: Date.now(), type: "contribution", category, amount: Number(amount) || 0, date: TODAY, note: note !== undefined ? note : "Rate updated" },
      ],
    }));

  const updateMortgage = (propertyId, field, value) =>
    setMortgages((m) => ({ ...m, [propertyId]: { ...(m[propertyId] || DEFAULT_MORTGAGE), [field]: value } }));

  const updateMarketValue = (propertyId, value) =>
    setMarketValues((mv) => ({ ...mv, [propertyId]: value }));

  const [providerForm, setProviderForm] = useState({ name: "", trade: "", phone: "", email: "", notes: "" });
  const addProvider = () => {
    if (!providerForm.name.trim()) return;
    setProviders((ps) => [...ps, { id: Date.now(), ...providerForm, trade: providerForm.trade.trim() || "General" }]);
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

  const [complianceForm, setComplianceForm] = useState({ propertyId: "", itemType: "Rental License", description: "", dueDate: "", recurrence: "annual", amount: "" });

  const addComplianceEntry = (propertyId, fields) => {
    if (!fields.dueDate) return;
    setCompliance((cs) => [
      ...cs,
      {
        id: Date.now(),
        propertyId,
        itemType: fields.itemType,
        description: fields.description,
        dueDate: fields.dueDate,
        recurrence: fields.recurrence,
        amount: fields.amount ? Number(fields.amount) : null,
        status: "upcoming",
      },
    ]);
  };

  const addCompliance = () => {
    addComplianceEntry(complianceForm.propertyId ? Number(complianceForm.propertyId) : null, complianceForm);
    setComplianceForm({ propertyId: "", itemType: "Rental License", description: "", dueDate: "", recurrence: "annual", amount: "" });
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

  const addAnnualExpense = (propertyId, description, amount) => {
    if (!description || !amount) return;
    setAnnualExpenses((ae) => ({
      ...ae,
      [propertyId]: [...(ae[propertyId] || []), { id: Date.now(), description, amount: Number(amount) || 0 }],
    }));
  };
  const removeAnnualExpense = (propertyId, id) =>
    setAnnualExpenses((ae) => ({ ...ae, [propertyId]: (ae[propertyId] || []).filter((x) => x.id !== id) }));

  // load saved data once on mount; fall back to seed data if nothing saved yet
  useEffect(() => {
    (async () => {
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
          body: JSON.stringify({ properties, ledger, expenses, utilities, escrow, mortgages, marketValues, providers, equipment, maintenance, compliance, annualExpenses, taxRate }),
        });
        const json = await res.json();
        setSaveStatus(json?.ok ? "saved" : "error");
      } catch (err) {
        console.error("Failed to save portfolio data:", err);
        setSaveStatus("error");
      }
    }, 500); // debounce so rapid edits don't fire a save per keystroke
    return () => clearTimeout(timer);
  }, [properties, ledger, expenses, utilities, escrow, mortgages, marketValues, providers, equipment, maintenance, compliance, annualExpenses, taxRate]);

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
      { id: Date.now(), propertyId: Number(expenseForm.propertyId), category: expenseForm.category, vendor: expenseForm.vendor, amount: Number(expenseForm.amount), date: expenseForm.date, note: expenseForm.note },
      ...es,
    ]);
    setExpenseForm((f) => ({ ...f, vendor: "", amount: "", date: "", note: "" }));
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

    // portfolio-wide P&L, built from the same per-property rates used on each
    // property's ledger page — so the totals here always tie out to the sum
    // of each property's own "Net monthly income" figure
    let totalPropertyTax = 0, totalInsurance = 0, totalHOA = 0, totalOtherRecurring = 0;
    properties.forEach((p) => {
      const rates = escrowMonthlyRates(escrow, p.id);
      totalPropertyTax += (Number(p.annualPropertyTax) || 0) / 12;
      totalInsurance += rates.Insurance;
      totalHOA += rates.HOA;
      totalOtherRecurring += rates.Other;
    });
    const totalMonthlyExpenses = totalPropertyTax + totalInsurance + totalHOA + totalOtherRecurring + debtService;
    const netMonthlyIncome = rentRoll - totalMonthlyExpenses;

    const complianceDueSoon = compliance.filter((c) => c.status !== "completed" && daysUntil(c.dueDate) <= 30).length;
    const leasesExpiringSoon = properties.filter((p) => {
      const lu = leaseUrgency(p.leaseEnd);
      return lu && lu.tier !== "ok";
    }).length;
    const insuranceExpiringSoon = properties.filter((p) => {
      const iu = insuranceUrgency(p.insuranceExpiration);
      return iu && iu.tier !== "ok";
    }).length;
    const totalNotifications = complianceDueSoon + leasesExpiringSoon + insuranceExpiringSoon;
    return {
      rentRoll, collectedAugust, outstanding, expenseTotal, net, reservesHeld, debtService, mortgageDebt,
      marketValueTotal, netPortfolioValue, complianceDueSoon, leasesExpiringSoon, insuranceExpiringSoon, totalNotifications,
      totalPropertyTax, totalInsurance, totalHOA, totalOtherRecurring, totalMonthlyExpenses, netMonthlyIncome,
    };
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
    { id: "compliance", label: "Tasks", icon: AlertTriangle },
    { id: "providers", label: "Providers", icon: Phone },
    { id: "expenses", label: "Expenses", icon: Receipt },
    { id: "reports", label: "Reports", icon: BarChart3 },
  ];

  return (
    <div style={{ background: T.paper, minHeight: "100vh", fontFamily: "'IBM Plex Sans', sans-serif", color: T.ink }}>
      <style>{FONTS}</style>

      <header className="app-header">
        <div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 26, fontWeight: 700, letterSpacing: "-0.01em" }}>
            Cinnity Realty
          </div>
          <div style={{ color: T.inkSoft, fontSize: 13, marginTop: 2 }}>Property Portfolio</div>
        </div>
        <div style={{ fontSize: 12, color: T.inkSoft }}>
          {saveStatus === "saving" && "Saving…"}
          {saveStatus === "saved" && "✓ Saved"}
          {saveStatus === "error" && <span style={{ color: T.brick }}>Save failed — check connection</span>}
          {saveStatus === "idle" && loaded && "Data loaded"}
        </div>
      </header>

      <div className="app-shell">
        <nav className="side-nav">
          {NAV.map(({ id, label, icon: Icon }) => {
            const active = tab === id;
            return (
              <button key={id} onClick={() => setTab(id)} className={`nav-btn${active ? " active" : ""}`}>
                <Icon size={16} />
                {label}
              </button>
            );
          })}
        </nav>

        <main className="main-panel">
          {tab === "overview" && <Overview stats={stats} properties={properties} balances={balances} compliance={compliance} equipment={equipment} maintenance={maintenance} goToLedger={(id) => { setSelectedId(id); setTab("ledgers"); }} />}
          {tab === "snapshot" && (
            <Snapshot
              stats={stats}
              properties={properties}
              balances={balances}
              marketValues={marketValues}
              mortgages={mortgages}
              expenses={expenses}
              escrow={escrow}
              equipment={equipment}
              compliance={compliance}
              maintenance={maintenance}
              taxRate={taxRate}
              setTaxRate={setTaxRate}
              goToLedger={(id) => { setSelectedId(id); setTab("ledgers"); }}
            />
          )}
          {tab === "properties" && <Properties properties={properties} balances={balances} goToLedger={(id) => { setSelectedId(id); setTab("ledgers"); }} mortgages={mortgages} updateMortgage={updateMortgage} updateProperty={updateProperty} addProperty={addProperty} removeProperty={removeProperty} newPropertyForm={newPropertyForm} setNewPropertyForm={setNewPropertyForm} />}
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
              setCurrentRate={setCurrentRate}
              removeEscrowEntry={removeEscrowEntry}
              mortgages={mortgages}
              updateMortgage={updateMortgage}
              marketValues={marketValues}
              updateMarketValue={updateMarketValue}
              expenses={expenses}
              equipment={equipment}
              updateProperty={updateProperty}
              equipmentForm={equipmentForm}
              setEquipmentForm={setEquipmentForm}
              addEquipment={addEquipment}
              removeEquipment={removeEquipment}
              compliance={compliance}
              markComplianceDone={markComplianceDone}
              removeCompliance={removeCompliance}
              annualExpenses={annualExpenses}
              addAnnualExpense={addAnnualExpense}
              removeAnnualExpense={removeAnnualExpense}
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

function Collapsible({ title, subtitle, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ marginBottom: 24, border: `1px solid ${T.line}`, borderRadius: 8, overflow: "hidden" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: T.paper, border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 16, fontWeight: 600 }}>{title}</div>
          {subtitle && <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 2 }}>{subtitle}</div>}
        </div>
        <ChevronDown size={18} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.15s ease", color: T.inkSoft, flexShrink: 0 }} />
      </button>
      {open && <div style={{ padding: 16, borderTop: `1px solid ${T.line}`, background: T.card }}>{children}</div>}
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

function Overview({ stats, properties, balances, compliance, equipment, maintenance, goToLedger }) {
  const overdueCompliance = compliance.filter((c) => c.status !== "completed" && daysUntil(c.dueDate) < 0);
  const dueSoonCompliance = compliance.filter((c) => c.status !== "completed" && daysUntil(c.dueDate) >= 0 && daysUntil(c.dueDate) <= 30);
  const equipmentNeedingReplacement = properties.flatMap((p) =>
    (equipment[p.id] || [])
      .map((eq) => ({ ...eq, propertyName: p.name, age: equipmentAgeYears(eq.installDate) }))
      .filter((eq) => eq.age >= eq.lifespan - 2)
  );
  const openMaintenance = maintenance.filter((m) => m.status === "scheduled" || m.status === "in_progress");
  const leasesNeedingAttention = properties
    .map((p) => ({ property: p, urgency: leaseUrgency(p.leaseEnd) }))
    .filter((x) => x.urgency && x.urgency.tier !== "ok");
  const insuranceNeedingAttention = properties
    .map((p) => ({ property: p, urgency: insuranceUrgency(p.insuranceExpiration) }))
    .filter((x) => x.urgency && x.urgency.tier !== "ok");
  const propertyName = (id) => properties.find((p) => p.id === id)?.name || "—";

  return (
    <div>
      <SectionTitle title="This month, at a glance" subtitle="Net cash flow reflects rent actually collected — see the P&L below for scheduled rent minus full recurring costs" />
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
        <KpiCard label="Rent roll" value={money(stats.rentRoll)} />
        <KpiCard label="Collected in August" value={money(stats.collectedAugust)} tone="pine" />
        <KpiCard label="Total outstanding" value={money(stats.outstanding)} tone="brick" />
        <KpiCard label="Expenses" value={money(stats.expenseTotal)} />
        <KpiCard label="Debt service" value={money(stats.debtService)} />
        <KpiCard label="Net cash flow" value={money(stats.net)} tone={stats.net >= 0 ? "pine" : "brick"} />
        <KpiCard label="Reserves held" value={money(stats.reservesHeld)} />
      </div>

      <SectionTitle title="Notifications" subtitle="Leases and insurance expiring soon, task deadlines, equipment nearing end of life, open maintenance" />
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
        {leasesNeedingAttention.map(({ property, urgency }) => (
          <AttentionRow key={`l-${property.id}`} icon={ScrollText} tone={urgency.tier === "expired" || urgency.tier === "30" ? "brick" : "amber"} label={`Lease — ${property.name}`} detail={urgency.label} />
        ))}
        {insuranceNeedingAttention.map(({ property, urgency }) => (
          <AttentionRow key={`i-${property.id}`} icon={AlertTriangle} tone={urgency.tier === "expired" || urgency.tier === "30" ? "brick" : "amber"} label={`Insurance — ${property.name}`} detail={urgency.label} />
        ))}
        {overdueCompliance.map((c) => (
          <AttentionRow
            key={`c-${c.id}`}
            icon={AlertTriangle}
            tone="brick"
            label={`${c.itemType} overdue — ${propertyName(c.propertyId ?? null)}`}
            detail={[`Was due ${c.dueDate}`, c.amount ? money(c.amount) : null, c.description || null].filter(Boolean).join(" · ")}
          />
        ))}
        {dueSoonCompliance.map((c) => (
          <AttentionRow
            key={`cs-${c.id}`}
            icon={AlertTriangle}
            tone="amber"
            label={`${c.itemType} due soon — ${propertyName(c.propertyId ?? null)}`}
            detail={[`Due ${c.dueDate}`, c.amount ? money(c.amount) : null, c.description || null].filter(Boolean).join(" · ")}
          />
        ))}
        {equipmentNeedingReplacement.map((eq) => (
          <AttentionRow key={`e-${eq.id}-${eq.propertyName}`} icon={Wrench} tone={eq.age >= eq.lifespan ? "brick" : "amber"} label={`${eq.type} — ${eq.propertyName}`} detail={`${eq.age.toFixed(1)} of ${eq.lifespan} expected years`} />
        ))}
        {openMaintenance.map((m) => (
          <AttentionRow key={`m-${m.id}`} icon={Wrench} tone="pine" label={`${m.description} — ${propertyName(m.propertyId)}`} detail={`${m.status === "in_progress" ? "In progress" : "Scheduled"} for ${m.scheduledDate}`} />
        ))}
        {leasesNeedingAttention.length + insuranceNeedingAttention.length + overdueCompliance.length + dueSoonCompliance.length + equipmentNeedingReplacement.length + openMaintenance.length === 0 && (
          <div style={{ color: T.inkSoft, fontStyle: "italic" }}>Nothing needs attention right now.</div>
        )}
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

function Snapshot({ stats, properties, balances, marketValues, mortgages, expenses, escrow, equipment, compliance, maintenance, taxRate, setTaxRate, goToLedger }) {
  const performanceRows = properties.map((p) => ({
    property: p,
    perf: propertyPerformance(p, { marketValues, mortgages, expenses, escrow }),
  }));

  const propertiesWithBasis = properties.filter((p) => Number(p.purchasePrice) > 0);
  const depreciableBasis = propertiesWithBasis.reduce((s, p) => s + Number(p.purchasePrice), 0);
  const annualDepreciation = depreciableBasis / 27.5; // standard US residential rental, straight-line, ignores land value split
  const monthlyDepreciation = annualDepreciation / 12;
  const estTaxableIncome = stats.netMonthlyIncome - monthlyDepreciation;
  const rate = Number(taxRate) || 0;
  const estMonthlyTax = estTaxableIncome > 0 ? estTaxableIncome * (rate / 100) : 0;

  return (
    <div>
      <SectionTitle title="The business, at a glance" subtitle="Pulled together from ledgers, expenses, mortgages, and valuations" />
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
        <KpiCard label="Net portfolio value" value={money(stats.netPortfolioValue)} tone="pine" />
        <KpiCard label="Monthly rent roll" value={money(stats.rentRoll)} />
        <KpiCard label="Reserves held" value={money(stats.reservesHeld)} />
      </div>

      <SectionTitle title="Portfolio monthly income & expenses" subtitle="Rent roll minus current Tax/Insurance/HOA/Other rates and mortgage payments — the same math as each property's own P&L, summed" />
      <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 8, padding: "16px 18px", marginBottom: 28, maxWidth: 480 }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 14 }}>
          <span>Rent roll</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: T.pine, fontWeight: 600 }}>+{money(stats.rentRoll)}</span>
        </div>
        {[
          ["Property tax (escrow)", stats.totalPropertyTax],
          ["Insurance", stats.totalInsurance],
          ["HOA", stats.totalHOA],
          ["Mortgage (P&I)", stats.debtService],
          ["Other", stats.totalOtherRecurring],
        ].map(([label, amount]) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 14, borderTop: `1px solid ${T.line}` }}>
            <span style={{ color: T.inkSoft }}>{label}</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: amount > 0 ? T.brick : T.inkSoft }}>{amount > 0 ? `−${money(amount)}` : "—"}</span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0 4px", fontSize: 13, fontWeight: 600, borderTop: `2px solid ${T.ink}`, marginTop: 4 }}>
          <span>Total expenses</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>−{money(stats.totalMonthlyExpenses)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 2px", fontSize: 18, fontWeight: 700, borderTop: `3px double ${T.ink}`, marginTop: 6 }}>
          <span>Net monthly income</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: stats.netMonthlyIncome >= 0 ? T.pine : T.brick }}>{money(stats.netMonthlyIncome)}</span>
        </div>
      </div>

      <SectionTitle title="Estimated tax reserve" subtitle="A rough planning number, not a tax return — see the caveats below" />
      <div style={{ background: T.amberSoft, border: `1px solid ${T.amber}`, borderRadius: 8, padding: "16px 18px", marginBottom: 28, maxWidth: 480 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: "#6B5220" }}>
            Marginal tax rate (%)
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              placeholder="e.g. 22"
              style={{ width: 90, border: `1px solid ${T.amber}`, borderRadius: 6, padding: "6px 8px", fontSize: 14, background: "#fff", color: T.ink }}
            />
          </label>
          <span style={{ fontSize: 12, color: "#6B5220", marginTop: 18 }}>You enter this — the app can't know your bracket</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", fontSize: 13.5 }}>
          <span style={{ color: "#6B5220" }}>Net monthly income (cash)</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{money(stats.netMonthlyIncome)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", fontSize: 13.5, borderTop: "1px solid rgba(176,141,87,0.35)" }}>
          <span style={{ color: "#6B5220" }}>Est. monthly depreciation</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>−{money(monthlyDepreciation)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 14, fontWeight: 600, borderTop: "1px solid rgba(176,141,87,0.35)" }}>
          <span>Est. taxable income</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: estTaxableIncome >= 0 ? T.ink : T.brick }}>{money(estTaxableIncome)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 2px", fontSize: 17, fontWeight: 700, borderTop: "2px solid #8A6A2F", marginTop: 4 }}>
          <span>Est. monthly tax reserve</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{money(estMonthlyTax)}</span>
        </div>

        <div style={{ fontSize: 11, color: "#6B5220", marginTop: 12, lineHeight: 1.5 }}>
          Depreciation is estimated as total purchase price ÷ 27.5 years ({propertiesWithBasis.length} of {properties.length} properties have a purchase price on file — add it under each property's Annual expenses section to include it here). This estimate does <strong>not</strong> account for: the split between mortgage interest (deductible) and principal (not deductible — we don't track that split), land value (not depreciable), passive activity loss limitations, depreciation recapture on sale, or state taxes. Treat this as a rough amount to set aside, not a filing figure — talk to a CPA for actual numbers.
        </div>
      </div>

      <SectionTitle title="Performance by property" subtitle="Click a property to see its full ledger" />
      <div className="table-scroll">
<table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
        <thead>
          <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
            {["Property", "Market value", "Equity", "Cash flow/mo", "Gross yield", "Cap rate"].map((h) => (
              <th key={h} style={{ textAlign: ["Market value", "Equity", "Cash flow/mo", "Gross yield", "Cap rate"].includes(h) ? "right" : "left", padding: "8px 6px", fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.05em", color: T.inkSoft }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {performanceRows.map(({ property, perf }) => (
            <tr key={property.id} style={{ borderBottom: `1px solid ${T.line}`, cursor: "pointer" }} onClick={() => goToLedger(property.id)}>
              <td style={{ padding: "9px 6px", fontWeight: 500, color: T.pine }}>{property.name}</td>
              <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace" }}>{money(perf.marketValue)}</td>
              <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace" }}>{money(perf.equity)}</td>
              <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", color: perf.estMonthlyCashFlow >= 0 ? T.pine : T.brick }}>{money(perf.estMonthlyCashFlow)}</td>
              <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace" }}>{perf.grossYield.toFixed(1)}%</td>
              <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace" }}>{perf.capRate.toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
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

function Properties({ properties, balances, goToLedger, mortgages, updateMortgage, updateProperty, addProperty, removeProperty, newPropertyForm, setNewPropertyForm }) {
  const inputStyle = { border: `1px solid ${T.line}`, borderRadius: 6, padding: "6px 8px", fontSize: 13, background: T.paper, color: T.ink, width: "100%" };
  const cellInputStyle = { border: "1px solid transparent", borderRadius: 4, padding: "4px 6px", fontSize: 14, background: "transparent", color: T.ink, width: "100%", fontFamily: "inherit" };

  return (
    <div>
      <SectionTitle title="Add a property" subtitle="New properties start with an empty ledger, expenses, and everything else" />
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 26, alignItems: "flex-end" }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
          Property name / address
          <input style={inputStyle} type="text" placeholder="e.g. 100 Main St" value={newPropertyForm.name} onChange={(e) => setNewPropertyForm((f) => ({ ...f, name: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          City
          <input style={inputStyle} type="text" value={newPropertyForm.city} onChange={(e) => setNewPropertyForm((f) => ({ ...f, city: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Tenant
          <input style={inputStyle} type="text" placeholder="Optional" value={newPropertyForm.tenant} onChange={(e) => setNewPropertyForm((f) => ({ ...f, tenant: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Monthly rent
          <input style={{ ...inputStyle, width: 110 }} type="number" placeholder="0" value={newPropertyForm.rent} onChange={(e) => setNewPropertyForm((f) => ({ ...f, rent: e.target.value }))} />
        </label>
        <button onClick={addProperty} style={{ display: "flex", alignItems: "center", gap: 6, background: T.pine, color: "#fff", border: "none", borderRadius: 6, padding: "9px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", height: 37 }}>
          <Plus size={15} /> Add
        </button>
      </div>

      <SectionTitle title="Properties" subtitle="Click into any field to edit — changes save automatically. Rent is edited on each property's Ledgers page; rent estimate here is editable for market comparison." />
      <div className="table-scroll">
<table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
            {["Property", "City", "Tenant", "Rent estimate", "Monthly rent", "Balance", "Mortgage", "Loan balance", "Monthly P&I", ""].map((h) => (
              <th key={h} style={{ textAlign: ["Rent estimate", "Monthly rent", "Balance", "Loan balance", "Monthly P&I"].includes(h) ? "right" : h === "Mortgage" ? "center" : "left", padding: "8px 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: T.inkSoft }}>
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
                <td style={{ padding: "4px 4px" }}>
                  <input style={{ ...cellInputStyle, fontWeight: 500 }} type="text" value={p.name} onChange={(e) => updateProperty(p.id, "name", e.target.value)} onFocus={(e) => (e.target.style.border = `1px solid ${T.line}`)} onBlur={(e) => (e.target.style.border = "1px solid transparent")} />
                </td>
                <td style={{ padding: "4px 4px" }}>
                  <input style={cellInputStyle} type="text" value={p.city} onChange={(e) => updateProperty(p.id, "city", e.target.value)} onFocus={(e) => (e.target.style.border = `1px solid ${T.line}`)} onBlur={(e) => (e.target.style.border = "1px solid transparent")} />
                </td>
                <td style={{ padding: "4px 4px" }}>
                  <input style={cellInputStyle} type="text" value={p.tenant} onChange={(e) => updateProperty(p.id, "tenant", e.target.value)} onFocus={(e) => (e.target.style.border = `1px solid ${T.line}`)} onBlur={(e) => (e.target.style.border = "1px solid transparent")} />
                </td>
                <td style={{ padding: "4px 4px" }}>
                  <input
                    style={{ ...cellInputStyle, textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", color: T.inkSoft }}
                    type="number"
                    placeholder="—"
                    value={p.rentEstimate}
                    onChange={(e) => updateProperty(p.id, "rentEstimate", e.target.value)}
                    onFocus={(e) => (e.target.style.border = `1px solid ${T.line}`)}
                    onBlur={(e) => (e.target.style.border = "1px solid transparent")}
                  />
                </td>
                <td style={{ padding: "10px 6px", textAlign: "right" }}>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{money(p.rent)}</div>
                  {p.rentEstimate && Number(p.rentEstimate) !== p.rent && (
                    <div style={{ fontSize: 11, color: p.rent < Number(p.rentEstimate) ? T.brick : T.pine, marginTop: 2 }}>
                      {p.rent < Number(p.rentEstimate) ? "↓" : "↑"} {money(Math.abs(p.rent - Number(p.rentEstimate)))} vs. est.
                    </div>
                  )}
                </td>
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
                <td style={{ padding: "4px 4px" }}>
                  {m.hasMortgage ? (
                    <input
                      style={{ ...cellInputStyle, textAlign: "right", fontFamily: "'IBM Plex Mono', monospace" }}
                      type="number"
                      placeholder="0"
                      value={m.balance}
                      onChange={(e) => updateMortgage(p.id, "balance", e.target.value)}
                      onFocus={(e) => (e.target.style.border = `1px solid ${T.line}`)}
                      onBlur={(e) => (e.target.style.border = "1px solid transparent")}
                    />
                  ) : (
                    <div style={{ textAlign: "right", color: T.inkSoft, padding: "4px 6px" }}>—</div>
                  )}
                </td>
                <td style={{ padding: "4px 4px" }}>
                  {m.hasMortgage ? (
                    <input
                      style={{ ...cellInputStyle, textAlign: "right", fontFamily: "'IBM Plex Mono', monospace" }}
                      type="number"
                      placeholder="0"
                      value={m.monthlyPayment}
                      onChange={(e) => updateMortgage(p.id, "monthlyPayment", e.target.value)}
                      onFocus={(e) => (e.target.style.border = `1px solid ${T.line}`)}
                      onBlur={(e) => (e.target.style.border = "1px solid transparent")}
                    />
                  ) : (
                    <div style={{ textAlign: "right", color: T.inkSoft, padding: "4px 6px" }}>—</div>
                  )}
                </td>
                <td style={{ padding: "10px 6px", textAlign: "right", whiteSpace: "nowrap" }}>
                  <button onClick={() => goToLedger(p.id)} style={{ background: "none", border: `1px solid ${T.line}`, borderRadius: 6, padding: "5px 10px", fontSize: 12, cursor: "pointer", color: T.pine, marginRight: 6 }}>
                    View ledger
                  </button>
                  <button
                    onClick={() => { if (confirm(`Remove ${p.name}? This deletes its ledger, expenses, and all other records.`)) removeProperty(p.id); }}
                    style={{ background: "none", border: "none", cursor: "pointer", color: T.inkSoft, verticalAlign: "middle" }}
                  >
                    <Trash2 size={15} />
                  </button>
                </td>
              </tr>
            );
          })}
          {properties.length === 0 && (
            <tr>
              <td colSpan={9} style={{ padding: "16px 6px", color: T.inkSoft, fontStyle: "italic" }}>No properties yet — add one above.</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} style={{ padding: "12px 6px", fontWeight: 600 }}>Total rent roll</td>
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
    </div>
  );
}

function Ledgers({ properties, ledger, balances, selectedId, setSelectedId, form, setForm, addEntry, utilities, utilityForm, setUtilityForm, addUtility, removeUtility, escrow, escrowForm, setEscrowForm, addEscrowEntry, removeEscrowEntry, setCurrentRate, mortgages, updateMortgage, marketValues, updateMarketValue, expenses, equipment, equipmentForm, setEquipmentForm, addEquipment, removeEquipment, updateProperty, compliance, markComplianceDone, removeCompliance, annualExpenses, addAnnualExpense, removeAnnualExpense }) {
  const property = properties.find((p) => p.id === selectedId);
  const perf = useMemo(() => propertyPerformance(property, { marketValues, mortgages, expenses, escrow }), [property, marketValues, mortgages, expenses, escrow]);
  const [newAnnualExpenseDraft, setNewAnnualExpenseDraft] = useState({ description: "", amount: "" });
  const [tenantMessageDraft, setTenantMessageDraft] = useState("");
  const [tenantSmsStatus, setTenantSmsStatus] = useState("idle"); // idle | sending | sent | error
  useEffect(() => {
    setTenantMessageDraft("");
    setTenantSmsStatus("idle");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);
  const [rateDrafts, setRateDrafts] = useState({ insurance: "", hoa: "", otherAmount: "", otherNote: "" });
  useEffect(() => {
    setRateDrafts({
      insurance: perf.insurance ? String(perf.insurance) : "",
      hoa: perf.hoa ? String(perf.hoa) : "",
      otherAmount: perf.other ? String(perf.other) : "",
      otherNote: perf.otherNote || "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);
  const commitRate = (category, draftKey) => {
    const value = Number(rateDrafts[draftKey]) || 0;
    const current = category === "Insurance" ? perf.insurance : perf.hoa;
    if (value !== current) setCurrentRate(selectedId, category, value);
  };
  const commitOther = () => {
    const value = Number(rateDrafts.otherAmount) || 0;
    if (value !== perf.other || rateDrafts.otherNote !== (perf.otherNote || "")) {
      setCurrentRate(selectedId, "Other", value, rateDrafts.otherNote);
    }
  };
  const propertyNotifications = useMemo(
    () =>
      compliance
        .filter((c) => c.propertyId === selectedId)
        .sort((a, b) => (a.status === "completed") - (b.status === "completed") || a.dueDate.localeCompare(b.dueDate)),
    [compliance, selectedId]
  );
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

  const selectedStatus = statusFor(balances[selectedId], property.rent);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Property
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(Number(e.target.value))}
            style={{ border: `1px solid ${T.line}`, borderRadius: 6, padding: "9px 10px", fontSize: 14, background: T.paper, color: T.ink, minWidth: 220, fontWeight: 500 }}
          >
            {properties.map((p) => {
              const s = statusFor(balances[p.id], p.rent);
              return (
                <option key={p.id} value={p.id}>
                  {p.name} — {s.label}
                </option>
              );
            })}
          </select>
        </label>
        <span style={{ background: selectedStatus.bg, color: selectedStatus.fg, fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 20, marginTop: 18 }}>
          {selectedStatus.label}
        </span>
      </div>

      <div>
        <SectionTitle title={`${property.name} — ledger`} subtitle={`${property.tenant} · rent ${money(property.rent)}/mo`} />

        <div style={{ marginBottom: 32 }}>
          <SectionTitle title="Notifications" subtitle="Outstanding items for this property — add or manage new tasks from the Tasks tab" />

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {propertyNotifications
              .filter((c) => c.status !== "completed")
              .map((c) => {
                const u = complianceUrgency(c);
                return (
                  <div key={c.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8, background: u.bg, border: `1px solid ${T.line}`, borderRadius: 8, padding: "9px 14px" }}>
                    <div>
                      <span style={{ fontWeight: 500, color: T.ink }}>{c.itemType}</span>
                      {c.description && <span style={{ color: T.inkSoft, fontSize: 13 }}> — {c.description}</span>}
                      <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 2 }}>
                        Due {c.dueDate}
                        {c.amount ? ` · ${money(c.amount)}` : ""}
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: u.fg, fontSize: 12, fontWeight: 700 }}>{u.label}</span>
                      {c.recurrence !== "none" && (
                        <button onClick={() => markComplianceDone(c.id, true)} style={{ background: "rgba(255,255,255,0.6)", border: `1px solid ${T.line}`, borderRadius: 6, padding: "4px 8px", fontSize: 11.5, cursor: "pointer", color: T.pine }}>
                          Done &amp; renew
                        </button>
                      )}
                      <button onClick={() => markComplianceDone(c.id, false)} style={{ background: "rgba(255,255,255,0.6)", border: `1px solid ${T.line}`, borderRadius: 6, padding: "4px 8px", fontSize: 11.5, cursor: "pointer", color: T.inkSoft }}>
                        Mark done
                      </button>
                      <button onClick={() => removeCompliance(c.id)} style={{ background: "none", border: "none", cursor: "pointer", color: T.inkSoft }}>
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                );
              })}
            {propertyNotifications.filter((c) => c.status !== "completed").length === 0 && (
              <div style={{ color: T.inkSoft, fontStyle: "italic" }}>No outstanding notifications for this property.</div>
            )}
          </div>
        </div>

        <Collapsible title="Property info" subtitle="Description, ownership, purchase history, insurance, and utility accounts" defaultOpen={false}>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 18 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Owning entity
              <input style={inputStyle} type="text" placeholder="e.g. Cinnity Realty LLC" value={property.owningEntity || ""} onChange={(e) => updateProperty(selectedId, "owningEntity", e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Property type
              <select style={inputStyle} value={property.propertyType || ""} onChange={(e) => updateProperty(selectedId, "propertyType", e.target.value)}>
                <option value="">Select…</option>
                {["Single Family", "Condo", "Townhouse", "Multi-Family", "Other"].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Bedrooms
              <input style={{ ...inputStyle, width: 80 }} type="number" value={property.bedrooms || ""} onChange={(e) => updateProperty(selectedId, "bedrooms", e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Bathrooms
              <input style={{ ...inputStyle, width: 80 }} type="number" step="0.5" value={property.bathrooms || ""} onChange={(e) => updateProperty(selectedId, "bathrooms", e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Sq. footage
              <input style={{ ...inputStyle, width: 100 }} type="number" value={property.sqft || ""} onChange={(e) => updateProperty(selectedId, "sqft", e.target.value)} />
            </label>
          </div>

          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 18, paddingTop: 14, borderTop: `1px solid ${T.line}` }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Date acquired
              <input style={inputStyle} type="date" value={property.dateAcquired || ""} onChange={(e) => updateProperty(selectedId, "dateAcquired", e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Purchase price
              <input style={{ ...inputStyle, width: 130 }} type="number" placeholder="0" value={property.purchasePrice || ""} onChange={(e) => updateProperty(selectedId, "purchasePrice", e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Renovation spend
              <input style={{ ...inputStyle, width: 130 }} type="number" placeholder="0" value={property.renovationSpend || ""} onChange={(e) => updateProperty(selectedId, "renovationSpend", e.target.value)} />
            </label>
          </div>

          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 18, paddingTop: 14, borderTop: `1px solid ${T.line}` }}>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, fontWeight: 600, width: "100%", marginBottom: -4 }}>Current tenant contact</div>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Name
              <input style={inputStyle} type="text" value={property.tenant || ""} onChange={(e) => updateProperty(selectedId, "tenant", e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Phone
              <input style={inputStyle} type="text" value={property.tenantPhone || ""} onChange={(e) => updateProperty(selectedId, "tenantPhone", e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Email
              <input style={inputStyle} type="email" value={property.tenantEmail || ""} onChange={(e) => updateProperty(selectedId, "tenantEmail", e.target.value)} />
            </label>

            <div style={{ width: "100%", marginTop: 4 }}>
              <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
                Text this tenant
                <textarea
                  value={tenantMessageDraft}
                  onChange={(e) => setTenantMessageDraft(e.target.value)}
                  placeholder={property.tenantPhone ? "Type a message…" : "Add a phone number above first"}
                  rows={2}
                  style={{ ...inputStyle, width: "100%", resize: "vertical", fontFamily: "inherit" }}
                />
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
                <button
                  disabled={!property.tenantPhone || !tenantMessageDraft.trim() || tenantSmsStatus === "sending"}
                  onClick={async () => {
                    setTenantSmsStatus("sending");
                    try {
                      const res = await fetch("/api/send-tenant-sms", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ to: property.tenantPhone, body: tenantMessageDraft }),
                      });
                      const json = await res.json();
                      if (json.ok) {
                        setTenantSmsStatus("sent");
                        setTenantMessageDraft("");
                      } else {
                        setTenantSmsStatus("error");
                      }
                    } catch {
                      setTenantSmsStatus("error");
                    }
                  }}
                  style={{
                    display: "flex", alignItems: "center", gap: 6, border: "none", borderRadius: 6, padding: "8px 16px", fontSize: 13, fontWeight: 600, height: 34,
                    background: !property.tenantPhone || !tenantMessageDraft.trim() ? T.line : T.pine,
                    color: !property.tenantPhone || !tenantMessageDraft.trim() ? T.inkSoft : "#fff",
                    cursor: !property.tenantPhone || !tenantMessageDraft.trim() ? "not-allowed" : "pointer",
                  }}
                >
                  {tenantSmsStatus === "sending" ? "Sending…" : "Send text"}
                </button>
                {tenantSmsStatus === "sent" && <span style={{ fontSize: 12, color: T.pine }}>✓ Sent</span>}
                {tenantSmsStatus === "error" && <span style={{ fontSize: 12, color: T.brick }}>Failed to send — check Twilio setup</span>}
              </div>
            </div>
          </div>

          {property.propertyType === "Condo" && (
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 18, paddingTop: 14, borderTop: `1px solid ${T.line}` }}>
              <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, fontWeight: 600, width: "100%", marginBottom: -4 }}>HOA management</div>
              <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
                Company name
                <input style={inputStyle} type="text" value={property.hoaManagementName || ""} onChange={(e) => updateProperty(selectedId, "hoaManagementName", e.target.value)} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
                Phone
                <input style={inputStyle} type="text" value={property.hoaManagementPhone || ""} onChange={(e) => updateProperty(selectedId, "hoaManagementPhone", e.target.value)} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
                Website
                <input style={inputStyle} type="text" placeholder="https://" value={property.hoaManagementWebsite || ""} onChange={(e) => updateProperty(selectedId, "hoaManagementWebsite", e.target.value)} />
              </label>
            </div>
          )}

          <div style={{ paddingTop: 14, borderTop: `1px solid ${T.line}`, marginBottom: 8 }}>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Insurance</div>
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "flex-end" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
                Company
                <input style={inputStyle} type="text" value={property.insuranceCompany || ""} onChange={(e) => updateProperty(selectedId, "insuranceCompany", e.target.value)} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
                Policy #
                <input style={inputStyle} type="text" value={property.insurancePolicy || ""} onChange={(e) => updateProperty(selectedId, "insurancePolicy", e.target.value)} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
                Expiration date
                <input style={inputStyle} type="date" value={property.insuranceExpiration || ""} onChange={(e) => updateProperty(selectedId, "insuranceExpiration", e.target.value)} />
              </label>
              {(() => {
                const iu = insuranceUrgency(property.insuranceExpiration);
                return iu ? (
                  <span style={{ background: iu.bg, color: iu.fg, fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 20, marginBottom: 2 }}>{iu.label}</span>
                ) : (
                  <span style={{ fontSize: 12, color: T.inkSoft, marginBottom: 8 }}>No expiration date on file</span>
                );
              })()}
            </div>
            <div style={{ fontSize: 11, color: T.inkSoft, marginTop: 8, fontStyle: "italic" }}>
              Flags at 90, 60, and 30 days before expiration — shows up in Notifications and the Overview count too.
            </div>
          </div>

          <div style={{ paddingTop: 18, borderTop: `1px solid ${T.line}` }}>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Utility accounts</div>
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

            <div className="table-scroll">
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
          </div>
        </Collapsible>

        <Collapsible title="Value & Equity" subtitle="Market value, loan balance, and investment metrics">
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
            <MiniStat label="Net monthly income" value={money(perf.netMonthlyIncome)} tone={perf.netMonthlyIncome >= 0 ? "pine" : "brick"} small />
            <MiniStat label="Gross rent yield" value={`${perf.grossYield.toFixed(1)}%`} small />
            <MiniStat label="Cap rate (est.)" value={`${perf.capRate.toFixed(1)}%`} small />
          </div>
          <div style={{ fontSize: 11, color: T.inkSoft, marginTop: 10, fontStyle: "italic" }}>
            Cap rate is estimated from rent minus expenses logged on file — not a full-year actual.
          </div>
        </Collapsible>

        <Collapsible title="Annual expenses" subtitle="Property tax and license drive the monthly figures below; add anything else that only bills once a year">
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 18 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Annual property tax
              <input style={{ ...inputStyle, width: 130 }} type="number" placeholder="0" value={property.annualPropertyTax || ""} onChange={(e) => updateProperty(selectedId, "annualPropertyTax", e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Annual license
              <input style={{ ...inputStyle, width: 130 }} type="number" placeholder="0" value={property.annualLicense || ""} onChange={(e) => updateProperty(selectedId, "annualLicense", e.target.value)} />
            </label>
          </div>

          <div style={{ paddingTop: 14, borderTop: `1px solid ${T.line}` }}>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Other annual expenses</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
              {(annualExpenses[selectedId] || []).map((ae) => (
                <div key={ae.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: `1px solid ${T.line}`, borderRadius: 6, padding: "7px 12px" }}>
                  <span style={{ fontSize: 13.5 }}>{ae.description}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13.5 }}>{money(ae.amount)}</span>
                    <button onClick={() => removeAnnualExpense(selectedId, ae.id)} style={{ background: "none", border: "none", cursor: "pointer", color: T.inkSoft }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
              {(!annualExpenses[selectedId] || annualExpenses[selectedId].length === 0) && (
                <div style={{ color: T.inkSoft, fontStyle: "italic", fontSize: 13.5 }}>None on file yet.</div>
              )}
            </div>
            {(() => {
              const [draftDesc, draftAmt] = [newAnnualExpenseDraft.description, newAnnualExpenseDraft.amount];
              return (
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
                    Title / description
                    <input style={inputStyle} type="text" placeholder="e.g. Annual pest control contract" value={draftDesc} onChange={(e) => setNewAnnualExpenseDraft((f) => ({ ...f, description: e.target.value }))} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
                    Amount
                    <input style={{ ...inputStyle, width: 110 }} type="number" placeholder="0" value={draftAmt} onChange={(e) => setNewAnnualExpenseDraft((f) => ({ ...f, amount: e.target.value }))} />
                  </label>
                  <button
                    onClick={() => {
                      addAnnualExpense(selectedId, draftDesc, draftAmt);
                      setNewAnnualExpenseDraft({ description: "", amount: "" });
                    }}
                    style={{ display: "flex", alignItems: "center", gap: 6, background: T.pine, color: "#fff", border: "none", borderRadius: 6, padding: "9px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", height: 37 }}
                  >
                    <Plus size={15} /> Add
                  </button>
                </div>
              );
            })()}
          </div>
        </Collapsible>

        <Collapsible title="Monthly income & expenses" subtitle="Click any figure to edit">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", fontSize: 14 }}>
            <span>Rent</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: T.pine, fontWeight: 600 }}>+</span>
              <input
                type="number"
                value={property.rent}
                onChange={(e) => updateProperty(selectedId, "rent", e.target.value)}
                style={{ width: 90, textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", color: T.pine, fontWeight: 600, border: `1px solid ${T.line}`, borderRadius: 4, padding: "3px 6px", background: T.paper }}
              />
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", fontSize: 14, borderTop: `1px solid ${T.line}` }}>
            <span style={{ color: T.inkSoft }}>Property tax (escrow)</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: T.brick }}>−</span>
              <span style={{ width: 90, textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", fontSize: 14, color: T.ink, display: "inline-block" }}>{money(perf.propertyTax)}</span>
            </span>
          </div>
          <div style={{ fontSize: 11, color: T.inkSoft, marginTop: -2, marginBottom: 2 }}>= Annual property tax ÷ 12 — edit in Annual expenses above</div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", fontSize: 14, borderTop: `1px solid ${T.line}` }}>
            <span style={{ color: T.inkSoft }}>Insurance</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: T.brick }}>−</span>
              <input type="number" value={rateDrafts.insurance} placeholder="0" onChange={(e) => setRateDrafts((f) => ({ ...f, insurance: e.target.value }))} onBlur={() => commitRate("Insurance", "insurance")}
                style={{ width: 90, textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", border: `1px solid ${T.line}`, borderRadius: 4, padding: "3px 6px", background: T.paper, color: T.ink }} />
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", fontSize: 14, borderTop: `1px solid ${T.line}` }}>
            <span style={{ color: T.inkSoft }}>HOA</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: T.brick }}>−</span>
              <input type="number" value={rateDrafts.hoa} placeholder="0" onChange={(e) => setRateDrafts((f) => ({ ...f, hoa: e.target.value }))} onBlur={() => commitRate("HOA", "hoa")}
                style={{ width: 90, textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", border: `1px solid ${T.line}`, borderRadius: 4, padding: "3px 6px", background: T.paper, color: T.ink }} />
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", fontSize: 14, borderTop: `1px solid ${T.line}` }}>
            <span style={{ color: T.inkSoft }}>Mortgage (P&amp;I)</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: T.brick }}>−</span>
              <input
                type="number"
                value={mortgages[selectedId]?.monthlyPayment ?? ""}
                placeholder="0"
                onChange={(e) => updateMortgage(selectedId, "monthlyPayment", e.target.value)}
                style={{ width: 90, textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", border: `1px solid ${T.line}`, borderRadius: 4, padding: "3px 6px", background: T.paper, color: T.ink }}
              />
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", fontSize: 14, borderTop: `1px solid ${T.line}`, flexWrap: "wrap", gap: 6 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6, color: T.inkSoft }}>
              Other
              <input type="text" value={rateDrafts.otherNote} placeholder="description, e.g. Columbia Assoc. fees" onChange={(e) => setRateDrafts((f) => ({ ...f, otherNote: e.target.value }))} onBlur={commitOther}
                style={{ width: 170, fontSize: 12.5, border: `1px solid ${T.line}`, borderRadius: 4, padding: "3px 6px", background: T.paper, color: T.ink }} />
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: T.brick }}>−</span>
              <input type="number" value={rateDrafts.otherAmount} placeholder="0" onChange={(e) => setRateDrafts((f) => ({ ...f, otherAmount: e.target.value }))} onBlur={commitOther}
                style={{ width: 90, textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", border: `1px solid ${T.line}`, borderRadius: 4, padding: "3px 6px", background: T.paper, color: T.ink }} />
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0 4px", fontSize: 13, fontWeight: 600, borderTop: `2px solid ${T.ink}`, marginTop: 4 }}>
            <span>Total expenses</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>−{money(perf.totalMonthlyExpenses)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 2px", fontSize: 16, fontWeight: 700, borderTop: `3px double ${T.ink}`, marginTop: 6 }}>
            <span>Net monthly income</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: perf.netMonthlyIncome >= 0 ? T.pine : T.brick }}>{money(perf.netMonthlyIncome)}</span>
          </div>
          <div style={{ fontSize: 11, color: T.inkSoft, marginTop: 8, fontStyle: "italic" }}>
            Click any figure to edit. Tax/Insurance/HOA/Other post a new dated entry to Reserves below (keeping history); Rent and Mortgage update directly.
          </div>
        </Collapsible>

        <div style={{ background: T.paper, border: `1px solid ${T.line}`, borderRadius: 8, padding: "12px 16px", marginBottom: 20 }}>
          <div style={{ display: "flex", gap: 18, alignItems: "flex-end", flexWrap: "wrap" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Lease start
              <input style={inputStyle} type="date" value={property.leaseStart || ""} onChange={(e) => updateProperty(selectedId, "leaseStart", e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
              Lease end
              <input style={inputStyle} type="date" value={property.leaseEnd || ""} onChange={(e) => updateProperty(selectedId, "leaseEnd", e.target.value)} />
            </label>
            {(() => {
              const lu = leaseUrgency(property.leaseEnd);
              return lu ? (
                <span style={{ background: lu.bg, color: lu.fg, fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 20, marginBottom: 2 }}>{lu.label}</span>
              ) : (
                <span style={{ fontSize: 12, color: T.inkSoft, marginBottom: 8 }}>No lease end date on file</span>
              );
            })()}
          </div>
          <div style={{ fontSize: 11, color: T.inkSoft, marginTop: 10, fontStyle: "italic" }}>
            Flags at 90, 60, and 30 days before lease end, then marks it expired after.
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

        <div className="table-scroll">
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
        </div>

        <Collapsible title="Reserves" subtitle="Monthly set-asides build a balance; disbursements draw it down when the real bill comes due" defaultOpen={false}>
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

          <div className="table-scroll">
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
                  <td style={{ padding: "9px 6px" }}>{escrowCategoryLabel(e)}</td>
                  <td style={{ padding: "9px 6px", color: T.inkSoft }}>{e.category === "Other" ? "" : e.note}</td>
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
        </Collapsible>

        <Collapsible title="Mortgage" subtitle="Kept on file alongside the property record" defaultOpen={false}>
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
                      Loan #
                      <input style={{ ...inputStyle, width: 140 }} type="text" placeholder="Loan / account number" value={m.loanNumber} onChange={(e) => updateMortgage(selectedId, "loanNumber", e.target.value)} />
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
        </Collapsible>

        <Collapsible title="Equipment" subtitle="Track age against expected lifespan to plan replacements ahead of failure" defaultOpen={false}>
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

          <div className="table-scroll">
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
        </Collapsible>
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
          <select style={inputStyle} value={form.trade} onChange={(e) => setForm((f) => ({ ...f, trade: e.target.value }))}>
            <option value="">Select…</option>
            {["Plumber", "Electrician", "HVAC", "General Contractor", "Carpenter", "Lawyer", "Landscaper", "Other"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft }}>
          Phone
          <input style={inputStyle} type="text" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
          Email
          <input style={inputStyle} type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, flex: 1, minWidth: 160 }}>
          Notes
          <input style={inputStyle} type="text" placeholder="Optional" value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} />
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
      <div className="table-scroll">
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
      <SectionTitle title="Add a task" subtitle="Licenses, tax deadlines, insurance renewals — anything with a due date" />
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
          Amount
          <input style={{ ...inputStyle, width: 100 }} type="number" placeholder="Optional" value={form.amount} onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))} />
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
      <div className="table-scroll">
<table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
            {["Due", "Property", "Type", "Description", "Amount", "Status", ""].map((h) => (
              <th key={h} style={{ textAlign: h === "Amount" ? "right" : "left", padding: "8px 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: T.inkSoft }}>
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
                <td style={{ padding: "9px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", color: T.inkSoft }}>{c.amount ? money(c.amount) : "—"}</td>
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
              <td colSpan={7} style={{ padding: "16px 6px", color: T.inkSoft, fontStyle: "italic" }}>No tasks on file yet.</td>
            </tr>
          )}
        </tbody>
      </table>
        </div>
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
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: T.inkSoft, minWidth: 140 }}>
          Vendor / recipient
          <input style={inputStyle} type="text" placeholder="Who was paid" value={form.vendor} onChange={(e) => setForm((f) => ({ ...f, vendor: e.target.value }))} />
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
      <div className="table-scroll">
<table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: `2px solid ${T.ink}` }}>
            {["Date", "Property", "Category", "Vendor / recipient", "Note", "Amount", ""].map((h) => (
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
              <td style={{ padding: "9px 6px" }}>{e.vendor}</td>
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
            <td colSpan={5} style={{ padding: "12px 6px", fontWeight: 600 }}>Total expenses</td>
            <td style={{ padding: "12px 6px", textAlign: "right", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, borderTop: `3px double ${T.ink}` }}>
              {money(expenses.reduce((s, e) => s + e.amount, 0))}
            </td>
            <td />
          </tr>
        </tfoot>
      </table>
        </div>
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
