import pool from "./src/lib/dbConnect";

async function check() {
  try {
    const [rows] = await pool.query("SHOW TABLES LIKE 'terms'");
    console.log(rows);
    const [cols] = await pool.query("SHOW COLUMNS FROM terms");
    console.log(cols);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
check();
