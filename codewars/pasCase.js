/**
 * Вы должны создать метод, который может преобразовывать строку из любого формата в PascalCase. 
 * Это также должно поддерживать символы.
 * Не думайте, что разделителей слишком много, иначе вы можете быть удивлены.
 * Например: ( Ввод --> Вывод )
 * "example name" --> "ExampleName"
 * "your-NaMe-here" --> "YourNameHere"
 * "testing ABC" --> "TestingAbc"
 */

function camelize(str){
    let spl = str.split(/[^A-Za-z0-9]/);
    let bucket = [], tmpa = [];
    for (let i of spl) {                            // исключить
     for (let j of i) {                            // ..
       if (j.match(/\w/)) { tmpa.push(j); }       // ..
     }                                           // ..
     if (tmpa.length !== 0) {                   // ..
        bucket.push([...tmpa]);                // ..
     }                                        // все символы к которым
     tmpa.length = 0;                        // нельзя вызвать toUpper/toLowerCase()
    }
    return bucket.map( arrv => {
     let v = arrv.join('');
     return v[0].toUpperCase() + v.slice(1).toLowerCase();
    })
    .join('');
 }