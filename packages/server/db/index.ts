import { Pool } from "pg";

const pool = new Pool();

export async function query(query: { text: string; values: Array<unknown> }) {
  return await pool.query(query);
}
