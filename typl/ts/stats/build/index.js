"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MathReader_1 = require("./MathReader");
const CsvFileReader_1 = require("./CsvFileReader");
const WinsAnalises_1 = require("./analisers/WinsAnalises");
const ConsoloReport_1 = require("./reports/ConsoloReport");
const Summary_1 = require("./Summary");
const csvFR = new CsvFileReader_1.CsvFileReader('football.csv');
const mathR = new MathReader_1.MathReader(csvFR);
mathR.load();
const sumary = new Summary_1.Summary(new WinsAnalises_1.WinsAnalises('Man United'), new ConsoloReport_1.ConsoleReports());
const sumReport = Summary_1.Summary.winsAnalyseHTML('Man United', 'report.html');
sumReport.buildAndPrintReport(mathR.mathes);
