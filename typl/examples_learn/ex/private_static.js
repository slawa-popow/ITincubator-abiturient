let Salary = (function(){
    // статические в замыкании
    let staticK = 1, staticID = 1000;
    // если this это от PrivateSalary, то вернуть евоный айди
    // иначе вернуть айди замыкания. С теми внизу тестами работает только так.
    let getID = function(){
        return (this instanceof PrivateSalary) ? this.staticID : staticID;
    };
    let getK = function(){
        return staticK;
    };
    let setK = function(newK){
        staticK = newK;
    }
    
    // Новый конструктор. Увеличивает статический айди, присваивает его себе. 
    // для нового создаваемого экземпляра свое увеличенное (измененное) значение айди.
    //
    function PrivateSalary(){
        staticID += 1;
        
        this.staticID = staticID;
        this.getID = getID;
        this.getK = getK;
        this.setK = setK;
    }
    // к объекту функции-конструктора добавить свойство-функцию
    // из 10-й строки этого листинга. Там работает механизм instanceof.
    // Это для вызова Salary.getID(), а те для let sal = new Salary.(); sal.getID();
    PrivateSalary.getID = getID;

    return PrivateSalary;

}());


let x = [];
for (let i = 0; i < 8; i += 1){
    x.push(new Salary());
}
for(let j = 0; j < x.length; j += 1){
    print(x[j].getID())
}
print('-'.repeat(28));
print(x[3].getID()); // >> 1004
print(x[0].getID()); // >> 1001
print('\n');
print(Salary.getID()); // >> 1008
print('+'.repeat(28));
// Эра существования айди началась после создания Salary на 5 стоке листинга.
let sal = new Salary();
print(sal.getID()); // >> 1009
print(Salary.getID()); // >> 1009