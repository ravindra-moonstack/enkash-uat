import sequelize from "@/src/lib/dbConnect"
import { QueryTypes } from "sequelize"

export async function GET() {
  try {
    await sequelize.authenticate()

    const result = await sequelize.query("SELECT 1+1 AS result", {
      type: QueryTypes.SELECT,
      plain: true,
    })
    return Response.json({
      message: "DB Connected",
      result,
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        message:
          "Internal server error" +
          `${process.env.DB_HOST} ` +
          `${process.env.DB_USER} ` +
          `${process.env.DB_NAME} ` +
          `${process.env.DB_PASSWORD} ` +
          error,
      },
      { status: 500 }
    )
  }
}
