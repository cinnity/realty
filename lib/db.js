import { sql } from "@vercel/postgres";

// Reads the single portfolio_data row.
export async function getPortfolioData() {
  const { rows } = await sql`SELECT data FROM portfolio_data WHERE id = 'default'`;
  return rows[0]?.data ?? {};
}

// Overwrites the single portfolio_data row with new data.
export async function savePortfolioData(data) {
  await sql`
    INSERT INTO portfolio_data (id, data, updated_at)
    VALUES ('default', ${JSON.stringify(data)}::jsonb, now())
    ON CONFLICT (id)
    DO UPDATE SET data = ${JSON.stringify(data)}::jsonb, updated_at = now()
  `;
}
