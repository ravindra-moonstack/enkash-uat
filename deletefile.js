import fs from "fs"
import path from "path"


const usedImages = [
  "cost-control-savings.webp",
  "cost-control-savings-icon.svg",
  "digital-marketing-card.svg",
  "fleetCard.webp",
  "fraud-protection.webp",
  "fraud-protection-icon.svg",
  "fuel-card.svg",
  "meal-card.png",
  "payrollCard.webp",
  "purches-card.svg",
  "real-time-expense.webp",
  "real-time-icon.svg",
  "sass-card.svg",
  "streamlined-reimbursement.webp",
  "streamlined-reimbursement-icon.svg",
  "terms-and-conditon.png",
  "hero card.webp",
  "meal-card.webp",

  "sliderOneIcon.svg",
  "sliderTwoIcon.svg",
  "sliderThreeIcon.svg",
  "sliderFourIcon.svg",

  "icon-one.svg",
  "icon-two.svg",
  "icon-three.svg",

  "accesable-icon.svg",
  "trackable-icon.svg",
  "denomination-icon.svg",
  "index.tsx",
]




/**
 * Delete all files in a directory except those in allowedFiles.
 * @param {string} folderPath - Path to the folder containing images
 * @param {string[]} allowedFiles - List of file names to keep
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

// Example usage:
// ⚠️ Be careful! This will delete files permanently
const folderPath = path.resolve("./src/app/instant-card-management/img") // adjust to your images folder path
cleanImageFolder(folderPath, usedImages)
