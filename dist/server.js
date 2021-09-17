"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customExpress_1 = __importDefault(require("./config/customExpress"));
const connection_1 = __importDefault(require("./database/connection"));
const tables_1 = require("./database/tables");
connection_1.default.connect(err => {
    if (err)
        console.log(err);
    else {
        console.log('Database connected successfully');
        const tables = new tables_1.Tables(connection_1.default);
        const app = (0, customExpress_1.default)();
        app.listen(8000, () => console.log(`⚡️[server]: Server is running at https://localhost:8000}`));
    }
});
