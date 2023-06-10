"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLtarget = void 0;
const fs_1 = __importDefault(require("fs"));
class HTMLtarget {
    constructor(nameFile) {
        this.nameFile = nameFile;
    }
    print(report) {
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-size: 1.1rem;
                }
                .report {
                    margin: 0;
                    font-size: 0.9em; 
                    text-align: center;
                }
                .report h1 {
                    padding: 5px 0;
                    font-size: 1.5em;
                    color: rgb(123, 91, 51);
                }
                .report p {
                    font-size: 0.9em;
                    padding: 10px 0;
                    font-style: italic;
                    color: rgb(76, 76, 76);
                }
            </style>
        </head>
        <body>
            <div class="report">
                <h1>Analys output:</h1>
                <div><p>${report}</p></div>
            </div>
        </body>
        </html>
        `;
        fs_1.default.writeFileSync(this.nameFile, html);
    }
}
exports.HTMLtarget = HTMLtarget;
