"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalises_1 = require("./analisers/WinsAnalises");
const HTMLreport_1 = require("./reports/HTMLreport");
class Summary {
    constructor(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    static winsAnalyseHTML(team, fileName) {
        return new Summary(new WinsAnalises_1.WinsAnalises(team), new HTMLreport_1.HTMLtarget(fileName));
    }
    buildAndPrintReport(matches) {
        const output = this.analyser.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
