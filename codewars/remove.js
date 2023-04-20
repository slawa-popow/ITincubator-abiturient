/**
 * Удалите слова из предложения, если они содержат ровно один восклицательный знак. 
 * Слова разделяются одним пробелом без начальных/конечных пробелов.
 * 
 *  remove("Hi!") === ""
    remove("Hi! Hi!") === ""
    remove("Hi! Hi! Hi!") === ""
    remove("Hi Hi! Hi!") === "Hi"
    remove("Hi! !Hi Hi!") === ""
    remove("Hi! Hi!! Hi!") === "Hi!!"
    remove("Hi! !Hi! Hi!") === "!Hi!" 
 */


    function remove (string) {
        let strArray = string.split(' ');
        let result = [];
        let re = /[!]/g; 
      
        for (let i of strArray) {
          let x = i.match(re) || [];
          if (x.length > 1 || !re.test(i)) {
           result.push(i);
          } 
        }
        return result.join(' ');
      }