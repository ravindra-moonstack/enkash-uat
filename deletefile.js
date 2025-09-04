import fs from "fs"
import path from "path"


const usedImages = [
  "white-arrow.png",
  "blue-arrrow.svg",
  "meal-card.png",
  "purches-card.svg",
  "payroll-card.webp",
  "digital-marketing-card.svg",
  "sass-card.svg",
  "virtual-card.svg",
  "meal-card.webp",
  "hero card.webp",
  "real-time-expense.webp",
  "fraud-protection.webp",
  "streamlined-reimbursement.webp",
  "cost-control-savings.webp",
  "wide-acceptance-network.webp",
  "real-time-icon.svg",
  "fraud-protection-icon.svg",
   "blue-arrrow.svg",
  "white-arrow.png",
  "meal-card.png",
  "purches-card.svg",
  "digital-marketing-card.svg",
  "sass-card.svg",
  "meal-card.webp",
  "instantActionImg.webp",
  "hero card.webp",
  "real-time-expense.webp",
  "fraud-protection.webp",
  "streamlined-reimbursement.webp",
  "cost-control-savings.webp",
  "wide-acceptance-network.webp",
  "real-time-icon.svg",
  "fraud-protection-icon.svg",
  "streamlined-reimbursement-icon.svg",
  "cost-control-savings-icon.svg",
  "wide-acceptance-network-icon.svg",
  "terms-and-conditon.png",
  "fuel-card.svg",
  "subscribtionIcon.svg",
  "employeeIcon.svg",
  "vendorIcon.svg",
  "travelExpenceIcon.svg",
  "sliderOneIcon.svg",
  "sliderTwoIcon.svg",
  "sliderThreeIcon.svg",
  "sliderFourIcon.svg",
  "icon-one.svg",
  "icon-two.svg",
  "icon-three.svg",
  "accesable-icon.svg",
  "trackable-icon.svg",
  "denomination-icon.svg"
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
const folderPath = path.resolve("./src/app/gift-cards/img") // adjust to your images folder path
cleanImageFolder(folderPath, usedImages)
