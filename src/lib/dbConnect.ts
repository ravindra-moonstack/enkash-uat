import { createPool } from "mysql2/promise"
import { lookup } from "node:dns/promises"

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  connectTimeout: 5000,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  //   lookup: (
  //     hostname: string,
  //     cb: (err: Error | null, address?: string, family?: number) => void
  //   ) => {
  //     lookup(hostname, { family: 4 })
  //       .then((res) => cb(null, res.address, res.family))
  //       .catch((err) => cb(err))
  //   },
} as any)

pool.on("connection", () => {
  console.log("DB Pool: New connection established")
})

export default pool
