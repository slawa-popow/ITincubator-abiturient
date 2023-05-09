/*
Выбрать названия книг и авторов из таблицы book, для поля title задать имя(псевдоним) Название, 
для поля author –  Автор. 

Результат:

+-----------------------+------------------+
| Название              | Автор            |
+-----------------------+------------------+
| Мастер и Маргарита    | Булгаков М.А.    |
| Белая гвардия         | Булгаков М.А.    |
| Идиот                 | Достоевский Ф.М. |
| Братья Карамазовы     | Достоевский Ф.М. |
| Стихотворения и поэмы | Есенин С.А.      |
+-----------------------+------------------+
Affected rows: 5
*/

SELECT title AS Название, author AS Автор FROM book; 