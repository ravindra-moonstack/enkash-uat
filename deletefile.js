import fs from "fs"
import path from "path"

 const usedImages = [
  "blueArrow",
  "groupIcon",
  "paymentSummary",
  "whiteArrow",
  "mealCardImage",
  "realTimeIcon",
  "hundredPercentIcon",
  "activationIcon",
  "notificationImage",
  "paymentLinkImage",
  "paymentOptionImage",
  "scrollIconOne",
  "scrollIconThree",
  "scrollIconTwo",
  "shareImage",
  "taskIconFour",
  "taskIconOne",
  "taskIconThree",
  "taskIconTwo",
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
const folderPath = path.resolve("./src/app/workflow-management/img") // adjust to your images folder path
cleanImageFolder(folderPath, usedImages)
