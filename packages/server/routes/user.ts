import * as db from "../db/index.js";

export async function getUsers() {
  const text = "SELECT * FROM users";

  return await db.query({ text });
}
