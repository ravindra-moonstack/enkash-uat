import fs from "fs"
import path from "path"


const usedImages = [
  "groupIcon.svg",
  "heroImg.webp",
  "collect-payment.webp",

  "activation.svg",
  "real-time.svg",
  "100.svg",
  "instant-settlement.svg",

  "notification.webp",
  "pazment-button.svg",
  "payment-link.svg",
  "payment-link.webp",
  "payment-option.webp",
  "payment-page.svg",
  "qrCode.svg",
  "remineder-engien.svg",

  "scrollIconOne.svg",
  "scrollIconTwo.svg",
  "scrollIconThree.svg",

  "secure-transition.webp",
  "shareImg.webp",

  "task-icon-one.svg",
  "task-icon-two.svg",
  "task-icon-three.svg",
  "task-icon-four.svg",
  "task-icon-five.svg",

  "upi-payments.webp",
    "index.tsx"
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
const folderPath = path.resolve("./src/app/auto-collect/img") // adjust to your images folder path
cleanImageFolder(folderPath, usedImages)
