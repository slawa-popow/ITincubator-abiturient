String.prototype.camelCase=function(){
    let result = '', thisS = this.toLowerCase().split(' ');
    for (let i of thisS) {
      if (i){
        let firstSym = i[0].toUpperCase();
        result += (firstSym + i.slice(1));
      }
    } 
    return result; 
  }