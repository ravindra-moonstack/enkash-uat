"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BACKUP_DIR = exports.UPLOADS_DIR = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Absolute paths to uploads and backup folders
exports.UPLOADS_DIR = path_1.default.resolve(process.cwd(), "../uploads");
exports.BACKUP_DIR = path_1.default.resolve(process.cwd(), "../backup");
// Ensure directories exist
if (!fs_1.default.existsSync(exports.UPLOADS_DIR)) {
    fs_1.default.mkdirSync(exports.UPLOADS_DIR, { recursive: true });
}
if (!fs_1.default.existsSync(exports.BACKUP_DIR)) {
    fs_1.default.mkdirSync(exports.BACKUP_DIR, { recursive: true });
}
