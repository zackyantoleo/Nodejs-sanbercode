"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path")); // Untuk mengatur path ke direktori public
const PORT = 3000;
function init() {
    const app = (0, express_1.default)();
    // Middleware untuk serve file statis dari direktori "public"
    app.use(express_1.default.static(path_1.default.join(process.cwd(), "public"))); // {{ edit_1 }}
    // Route untuk root "/"
    app.get("/", (req, res) => {
        res.status(200).json({
            message: "OK",
            data: null,
        });
    });
    // Route untuk "/hello"
    app.get("/hello", (req, res) => {
        res.status(200).json({
            message: "Success fetch message",
            data: "Hello World!",
        });
    });
    // Route untuk "/user"
    app.get("/user", (req, res) => {
        res.status(200).json({
            message: "Success fetch user",
            data: {
                id: 1,
                name: "Budi",
                username: "budidu",
                email: "budidu@mail.com",
            },
        });
    });
    // Menjalankan server
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
init();
