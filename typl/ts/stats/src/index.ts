
import { MathReader } from "./MathReader"; 
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalises } from "./analisers/WinsAnalises";
import { ConsoleReports} from "./reports/ConsoloReport";
import { HTMLtarget } from './reports/HTMLreport';
import { Summary } from "./Summary";

const csvFR = new CsvFileReader('football.csv');
const mathR = new MathReader(csvFR);
mathR.load();

const sumary = new Summary(new WinsAnalises('Man United'), new ConsoleReports());
const sumReport = Summary.winsAnalyseHTML('Man United', 'report.html');   
sumReport.buildAndPrintReport(mathR.mathes);

 
