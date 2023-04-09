
let Range = function Range(ot, to){
    this.ot = ot;
    this.to = to;
    this[Symbol.iterator] = function(){
        return {
            current: this.ot,
            final: this.to,
            next(){
                this.current++;
                return (this.current <= this.final) ?
                    {done: false, value: Range.prototype.sq.call(this, this.current, 3)} : {
                        done: true
                    };
            },
            [Symbol.iterator](){return this}
        };
    };
};

Range.prototype.sq = function(arg, n){
    return arg**n;
};

let r = new Range(1, 9);
for (let i of r){
    if (i > 5) {break;}
    console.log(i);
}
console.log(...r);

// =============================================================

let str = "Жареная курица, майонез ведра."

let iterStr = str[Symbol.iterator]();

console.log(iterStr);

console.log(iterStr.next().value);
let bucket = [];

while (bucket.length <= 6) {
    bucket.push(iterStr.next().value);
}

console.log(bucket);
console.log(...iterStr);


