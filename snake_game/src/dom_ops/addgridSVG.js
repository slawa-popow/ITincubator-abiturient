
export function getSVGLine(x1, y1, x2, y2, strokeColor) {
        let newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
        newLine.setAttributeNS(null, 'x1', '' + x1);
        newLine.setAttributeNS(null, 'y1', '' + y1);
        newLine.setAttributeNS(null, 'x2', '' + x2);
        newLine.setAttributeNS(null, 'y2', '' + y2);
        newLine.setAttributeNS(null, "stroke", strokeColor);
        newLine.setAttributeNS(null, "stroke-width", 1.5);
        return newLine;
    }

