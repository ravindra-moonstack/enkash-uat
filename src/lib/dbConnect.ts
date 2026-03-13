import { Sequelize } from "sequelize"
import mysql2 from "mysql2"

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: mysql2, // Needed for many hosting environments
    logging: false,
    pool: {
      max: 15,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
)

if (process.env.NODE_ENV !== "production") {
  sequelize
    .authenticate()
    .then(() => {
      console.log("✅ Database connection has been established successfully.")
    })
    .catch((err) => {
      console.error("❌ Unable to connect to the database:", err)
    })
}
if (process.env.NODE_ENV !== "production") {
  sequelize
    .sync({})
    .then(() => {
      console.log("✅ Database synced")
    })
    .catch((err) => {
      console.error("❌ Sync error:", err)
    })
}

export default sequelize
