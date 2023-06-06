/*
Напишите оператор выбора, который берет данные nameиз personтаблицы и возвращает 
"Hello, <name> how are you doing today?"результаты в столбце с именемgreeting

[Убедитесь, что вы вводите именно то, что я написал, иначе программа может работать неправильно]
*/

--person table has name data
select concat('Hello, ', name, ' how are you doing today?') as greeting
from person;