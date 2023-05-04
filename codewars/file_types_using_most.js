/**
 * Учитывая a List/Arrayиз имен файлов (строк), filesвозвращает a, 
 * List/Array of string(s)содержащее наиболее распространенные расширения. 
 * Если есть ничья, вернуть отсортированный список всех расширений.

    Важная информация:
    Не забывайте, вы работали с большим количеством различных типов файлов, так 
    что ожидайте интересных расширений/имен файлов/длин в случайных тестах.
    Имена файлов и расширения будут содержать только буквы (с учетом регистра) и цифры.
    Если файл имеет несколько расширений (например: mysong.mp3.als), учитывается только 
    последнее расширение ( .alsв данном случае)
    Примеры
    files = ['Lakey - Better days.mp3', 
            'Wheathan - Superlove.wav', 
            'groovy jam.als', 
            '#4 final mixdown.als', 
            'album cover.ps', 
            'good nights.mp3']
    вернет: ['.als', '.mp3'], так как оба расширения появляются в файлах два раза.
 */





// IIFE => Object
const typeFiles = (function() {
  
    /** 
    * Обрезать значениях массива строк всё, кроме расширения (.иксиксикс)
    */
    function getRegexNameFileTypes(arrStr) {
      return arrStr.map( (v) => {
      return v.match(/\.[0-9a-zA-Z]{1,}$/gi);  // найти после точки цифры, символы больше 1 в конце ($) глобально в строке без учета регистра
    });
    }
    
    /**
    * Создать и вернуть словарь-счетчик расширений 
    * Аргумент - массив строк расширений файлов: ['.txt', '.py', 'js', итд]
    * Вернуть: {'.js': 6, '.ts': 1, '.py': 2 итд}
    */
    function countNameFileTypes(arrTypes) {
      let dict = Object.create(null);
      for (let by of arrTypes) {
        if (!Object.prototype.hasOwnProperty.call(dict, by)) {
          dict[by] = 1;
        } else {
          dict[by] += 1;
        }
      }
      return dict;
    }
  
    
    /**
    * В объекте-счетчике (obj) найти максимальное значение повторений (values)
    * и запихнув все ключи с максимальным числом повторений в массив,
    * вернуть этот массив отсортировав его. 
    */
    function getMaxCountRepeat(obj) {
      let vals = Object.entries(obj);
      let bucket = [];
      let maxVals = Math.max(...Object.values(obj));
  
      let tmpMax = maxVals;
      for (let [key, by] of vals) {
        if (by === tmpMax) {
          bucket.unshift(key);
        } 
      }
  
       return bucket.sort();
    }
  
    const publicApi = { getRegexNameFileTypes, countNameFileTypes, getMaxCountRepeat, };
  
    return publicApi;
  })();
  
  
  function solve(files) {
    let types = typeFiles.getRegexNameFileTypes(files);
    let sortVals = typeFiles.getMaxCountRepeat(typeFiles.countNameFileTypes(types))
    return sortVals;
  }