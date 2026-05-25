import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
    try {
        const uploadDir = path.join(process.cwd(), "public", "uploads");
        if (!fs.existsSync(uploadDir)) {
            return NextResponse.json({ success: true, files: [] });
        }
        const files = fs.readdirSync(uploadDir);
        return NextResponse.json({ success: true, files });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to list files" }, { status: 500 });
    }
}

export async function POST() {
    try {
        const uploadDir = path.join(process.cwd(), "public", "uploads");

        // Ensure directory exists
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Get all files in the directory
        const files = fs.readdirSync(uploadDir);

        // Find the next number
        let nextNumber = 1;
        const testFiles = files.filter(f => f.startsWith("test") && f.endsWith(".html"));

        if (testFiles.length > 0) {
            const numbers = testFiles.map(f => {
                const match = f.match(/test(\d+)\.html/);
                return match ? parseInt(match[1]) : 0;
            });
            nextNumber = Math.max(...numbers) + 1;
        }

        const fileName = `test${nextNumber}.html`;
        const filePath = path.join(uploadDir, fileName);

        const randomContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Test File ${nextNumber}</title>
            </head>
            <body>
                <h1>Random Test File ${nextNumber}</h1>
                <p>Generated at: ${new Date().toLocaleString()}</p>
                <p>Random String: ${Math.random().toString(36).substring(7)}</p>
            </body>
            </html>
        `;

        fs.writeFileSync(filePath, randomContent);
        
        const stats = fs.statSync(filePath);
        const allFiles = fs.readdirSync(uploadDir);

        return NextResponse.json({ 
            success: true, 
            fileName,
            relativePath: `/uploads/${fileName}`,
            absolutePath: filePath,
            size: stats.size,
            createdAt: new Date().toISOString(),
            allFiles
        });
    } catch (error) {
        console.error("Error creating test file:", error);
        return NextResponse.json({ success: false, error: "Failed to create file" }, { status: 500 });
    }
}
