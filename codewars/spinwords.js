
/**
 * Напишите функцию, которая принимает строку из одного или нескольких слов и 
 * возвращает ту же строку, но с перевернутыми всеми словами из пяти или более букв 
 * (точно так же, как имя этого Ката). Передаваемые строки будут состоять только 
 * из букв и пробелов. Пробелы будут включены только в том случае, 
 * если присутствует более одного слова.

    Примеры:

    spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
    spinWords( "This is a test") => returns "This is a test" 
    spinWords( "This is another test" )=> returns "This is rehtona test"
 * 
 */


    function spinWords(string){
        if (string.length < 1) {return ''};
        let result = string.split(' ').map( (word) => {
          if ((word.length < 5) && (word.length >= 1)) {
            return word;
          }
          return [...word].reverse().join('');
        });
      
        return result.join(' ');
      }