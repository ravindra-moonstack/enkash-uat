import fs from "fs"
import path from "path"
 
/**
* Extracts image filenames from export statements in a file.
* @param {string} filePath - Path to the index file containing exports
* @returns {string[]} Array of image filenames
*/
function extractUsedImages(filePath) {
  const content = fs.readFileSync(filePath, "utf-8")
  const regex = /["']\.\/([^"']+\.(png|webp|svg))["']/g
 
  const usedImages = []
  let match
  while ((match = regex.exec(content)) !== null) {
    usedImages.push(match[1])
  }
 
  return usedImages
}
 
/**
* Deletes all files in a folder except the ones in allowedFiles.
* @param {string} folderPath - Path to folder
* @param {string[]} allowedFiles - Files to keep
*/
function cleanImageFolder(folderPath, allowedFiles) {
  const files = fs.readdirSync(folderPath)
 
  files.forEach((file) => {
    if (!allowedFiles.includes(file)) {
      const filePath = path.join(folderPath, file)
      fs.unlinkSync(filePath)
      console.log(`Deleted: ${file}`)
    } else {
      console.log(`Kept: ${file}`)
    }
  })
}
 
// === CONFIG ===
const folderPath = path.resolve("./src/app/prepaid-card/img") // adjust as needed
 
// Detect index file (.ts or .tsx)
const indexFile = fs.existsSync(path.join(folderPath, "index.ts"))
  ? "index.ts"
  : fs.existsSync(path.join(folderPath, "index.tsx"))
  ? "index.tsx"
  : null
 
if (!indexFile) {
  console.error("❌ No index.ts or index.tsx found in folder:", folderPath)
  process.exit(1)
}
 
const exportsFilePath = path.join(folderPath, indexFile)
const usedImages = extractUsedImages(exportsFilePath)
 
// Add the index file itself to the keep list
const allowedFiles = [...usedImages, indexFile]
 
// Run cleanup
cleanImageFolder(folderPath, allowedFiles)
 
 