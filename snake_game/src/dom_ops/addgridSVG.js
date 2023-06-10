
export const drawSVG = { 
    getSVGLine(x1, y1, x2, y2, strokeColor) {
        let newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        newLine.setAttributeNS(null, 'x1', '' + x1);
        newLine.setAttributeNS(null, 'y1', '' + y1);
        newLine.setAttributeNS(null, 'x2', '' + x2);
        newLine.setAttributeNS(null, 'y2', '' + y2);
        newLine.setAttributeNS(null, "stroke", strokeColor);
        newLine.setAttributeNS(null, "stroke-width", 1.5);
        return newLine;
    }, 

    getSVGrect(id, x, y, width, height, fillColor, strokeColor) {
        let newRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        newRect.setAttributeNS(null, 'x', '' + x);
        newRect.setAttributeNS(null, 'y', '' + y);
        newRect.setAttributeNS(null, 'width', '' + width);
        newRect.setAttributeNS(null, 'height', '' + height);
        newRect.setAttributeNS(null, 'stroke-width', 1.5);
        newRect.setAttributeNS(null, 'fill', fillColor);
        newRect.setAttributeNS(null, 'stroke', strokeColor);
        newRect.setAttributeNS(null, 'id', id);

        return newRect;
    }



}



