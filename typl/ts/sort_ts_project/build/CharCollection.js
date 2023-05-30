"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    swap(lIndx, rIndx) {
        const chars = [...this.data];
        [chars[lIndx], chars[rIndx]] = [chars[rIndx], chars[lIndx]];
        this.data = chars.join('');
    }
    compare(lIndx, rIndx) {
        return this.data[lIndx].toLowerCase() > this.data[rIndx].toLowerCase();
    }
}
exports.CharCollection = CharCollection;
//# sourceMappingURL=CharCollection.js.map