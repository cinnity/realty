export const metadata = {
  title: "The Ledger — Portfolio Dashboard",
  description: "Rent ledgers, expenses, utilities, and reserves for a small real estate portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
