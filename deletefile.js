import fs from "fs"
import path from "path"

const usedImages = [
  "cost-control-savings.webp",
  "cost-control-savings-icon.svg",
  "digital-marketing-card.svg",
  "fleet-card.svg",
  "fraud-protection.webp",
  "fraud-protection-icon.svg",
  "fuel-card.svg",
  "meal-card.png",
  "meal-card.webp",
  "real-time-expense.webp",
  "real-time-expense-icon.svg",
  "terms-and-conditon.png",
  "sass-card.svg",
  "streamlined-reimbursement.webp",
  "streamlined-reimbursement-icon.svg",
  "virtual-card.svg",
  "wide-acceptance-network.webp",
  "wide-acceptance-network-icon.svg",
  "payroll-card.webp",
  "hero card.webp",
  "sliderOne.svg",
  "sliderTwo.svg",
  "sliderThree.svg",
  "sliderFour.svg",
  "sliderFive.svg",
  "icon-one.svg",
  "icon-two.svg",
  "icon-three.svg",
  "icon-four.svg"
];



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
const folderPath = path.resolve("./src/app/purchase-card/img") // adjust to your images folder path
cleanImageFolder(folderPath, usedImages)
