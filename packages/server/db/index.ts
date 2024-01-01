import pg from "pg";

// Env variables configued in docker-compose.yml
const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

export async function query(query: { text: string; values?: Array<unknown> }) {
  try {
    const response = await pool.query(query);
    return {
      status: "success",
      data: response,
    };
  } catch (error) {
    return {
      status: "error",
      error,
    };
  }
}
