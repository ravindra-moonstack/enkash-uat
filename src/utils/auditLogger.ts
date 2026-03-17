import sequelize from "@/src/lib/dbConnect"
import { QueryTypes } from "sequelize"
import { verifyToken } from "./auth"
import { headers } from "next/headers"

export async function recordAuditLog(
  tableName: string,
  rowId: number | string,
  actionType: "CREATE" | "UPDATE" | "DELETE",
  oldData: any = null,
  newData: any = null
) {
  try {
    const user: any = await verifyToken()
    const headerList = await headers()

    // Get IP address from headers
    const forwarded = headerList.get("x-forwarded-for")
    const ip = forwarded
      ? forwarded.split(",")[0]
      : headerList.get("x-real-ip") || "unknown"

    await sequelize.query(
      `INSERT INTO audit_logs (table_name, row_id, action_type, old_data, new_data, updated_by, user_email, user_ip) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      {
        replacements: [
          tableName,
          rowId,
          actionType,
          oldData ? JSON.stringify(oldData) : null,
          newData ? JSON.stringify(newData) : null,
          user?.id || null,
          user?.email || null,
          ip,
        ],
        type: QueryTypes.INSERT,
      }
    )
  } catch (error) {
    console.error("Failed to record audit log:", error)
    // We don't want to throw an error here as it might break the main operation
  }
}
