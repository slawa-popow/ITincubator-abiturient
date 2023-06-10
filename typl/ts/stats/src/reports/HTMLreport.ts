import { OutputTarget } from "../Summary";
import fs from "fs";

export class HTMLtarget implements OutputTarget{
    constructor(public nameFile: string) {}

    print(report: string): void {
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

        fs.writeFileSync(this.nameFile, html);
    }
}