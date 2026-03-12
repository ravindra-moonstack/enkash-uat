import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'srv2208.hstgr.io',
  user: process.env.DB_USER || 'u639147461_live_cms',
  password: process.env.DB_PASSWORD || 'KEty!$Hz!5H',
  database: process.env.DB_NAME || 'u639147461_live_cms',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;