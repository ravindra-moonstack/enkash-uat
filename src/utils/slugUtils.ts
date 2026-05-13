import pool from "@/src/lib/dbConnect"

/**
 * Generates a unique slug by appending -2, -3, etc. if it already exists in the specified table.
 */
export async function getUniqueSlug(
    table: string, 
    slug: string, 
    currentId?: number | string, 
    idColumn: string = 'id',
    extraFilters: Record<string, any> = {}
): Promise<string> {
    let uniqueSlug = slug
    let counter = 1
    let exists = true

    while (exists) {
        const checkSlug = counter === 1 ? uniqueSlug : `${uniqueSlug}-${counter}`
        
        let query = `SELECT ${idColumn} FROM ${table} WHERE slug = ?`
        const params: any[] = [checkSlug]
        
        if (currentId) {
            query += ` AND ${idColumn} != ?`
            params.push(currentId)
        }

        for (const [key, value] of Object.entries(extraFilters)) {
            query += ` AND ${key} = ?`
            params.push(value)
        }
        
        query += ` LIMIT 1`

        const [rows]: any = await pool.query(query, params)
        
        if (rows.length === 0) {
            exists = false
            uniqueSlug = checkSlug
        } else {
            counter++
        }
    }

    return uniqueSlug
}
