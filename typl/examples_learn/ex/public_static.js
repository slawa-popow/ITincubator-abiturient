
// function Salary(){}
// Salary.k = 1;
// Salary.setK = function(newK){
//     Salary.k = newK;
// }
// Salary.getK = function(){
//     return (Salary.hasOwnProperty(k)) ? k : 1;
// }


// Salary.prototype.mySalary = function(rub){
//     return (this.constructor.k) * rub;
// } OK.

function Salary(){
    this.mySalary = function(rub){
        return (this.constructor.k) * rub;
    }
    this.printK = function(){
   Salary.printK.call(this); 
}
}

Salary.k = 1;
Salary.setK = function(newK){
    Salary.k = newK;
}
Salary.getK = function(){
    return (this instanceof Salary) ? Salary.k : this.k;
}
Salary.printK = function(){
    print( "this is >>  " , this);
    if(this instanceof Salary){
        print(Salary.getK.call(this));
    } else {
        print("static k = ", this.k);
    }
}

/**
 *                                 про экземпляры
 * function Salary(){
 *  this.printK = function(){      !=    Salary.prototype.printK = function(){
 *  Salary.printK.call(this);                                              ...
 * }                                                                     }
 * 
 *                                про статические
 * 1. в конструкторе определить метод который будет у любого экземпляра и
 *    в нем вызвать статический метод со this
 * 
 * 2. в статическом методе printK проверить документы вызывающего if(this instanceof Salary){
 *    если это экземпляр, то вызвать статический метод с this, где далее в Salary.getK
 *    проверяется документы. Если this экземпляра, то возврат Salary.k, если обращались в лоб,
 *    то значит this это объект функции Salary
 * 
 *           this.ololo  Пиши везде в обращениях к свойствам this. и проверяй документы вызовов.
 */


let s = new Salary();
let r = new Salary();
print(s.mySalary(500));
print(r.mySalary(700));
print('-'.repeat(28));
//debugger;
s.printK();
r.printK();
print('-'.repeat(28));
Salary.setK(2);

print(s.mySalary(500));
print(r.mySalary(700));

print('-'.repeat(28));
s.printK();
r.printK();
Salary.printK();
print('-'.repeat(28));