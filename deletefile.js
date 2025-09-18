import fs from "fs"
import path from "path"


const usedImages = [
  "groupIcon.svg",
  "heroImg.webp",
  "collect-payment.webp",

  "payment-link.webp",
  "shareImg.webp",
  "payment-option.webp",
  "notification.webp",

  "auto-collect.svg",
  "instant-settlement.svg",
  "remineder-engien.svg",

  "scrollIconOne.svg",
  "scrollIconTwo.svg",
  "scrollIconThree.svg",

  "task-icon-one.svg",
  "task-icon-two.svg",
  "task-icon-three.svg",
  "task-icon-four.svg",

  "payment-link.svg",
  "qrCode.svg",
  "pazment-button.svg",
  "payment-gateway-img.svg",

  "real-time.svg",
  "100.svg",
  "activation.svg",
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
const folderPath = path.resolve("./src/app/cashflow-analytics/img") // adjust to your images folder path
cleanImageFolder(folderPath, usedImages)
