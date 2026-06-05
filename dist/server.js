"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = (0, next_1.default)({ dev });
const handle = app.getRequestHandler();
const upload_config_1 = require("./src/lib/upload-config");
const uploadsDir = upload_config_1.UPLOADS_DIR;
app.prepare().then(() => {
    const server = (0, express_1.default)();
    server.use("/uploads", express_1.default.static(uploadsDir));
    // Next.js handles everything else
    server.use((req, res) => handle(req, res));
    server.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
        console.log(`Serving uploads from ${uploadsDir}`);
    });
});
