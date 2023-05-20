/*
Вывести информацию (автора, название и цену) о тех книгах, 
цены которых превышают минимальную цену книги на складе не более 
чем на 150 рублей в отсортированном по возрастанию цены виде.

Результат
+------------------+----------------+--------+
| author           | title          | price  |
+------------------+----------------+--------+
| Достоевский Ф.М. | Идиот          | 460.00 |
| Достоевский Ф.М. | Игрок          | 480.50 |
| Булгаков М.А.    | Белая гвардия  | 540.50 |
| Пушкин А.С.      | Евгений Онегин | 610.00 |
+------------------+----------------+--------+
Структура и наполнение таблицы book
+---------+-----------------------+------------------+--------+--------+
| book_id | title                 | author           | price  | amount |
+---------+-----------------------+------------------+--------+--------+
| 1       | Мастер и Маргарита    | Булгаков М.А.    | 670.99 | 3      |
| 2       | Белая гвардия         | Булгаков М.А.    | 540.50 | 5      |
| 3       | Идиот                 | Достоевский Ф.М. | 460.00 | 10     |
| 4       | Братья Карамазовы     | Достоевский Ф.М. | 799.01 | 3      |
| 5       | Игрок                 | Достоевский Ф.М. | 480.50 | 10     |
| 6       | Стихотворения и поэмы | Есенин С.А.      | 650.00 | 15     |
| 7       | Евгений Онегин        | Пушкин А.С.      | 610.00 | 10     |
+---------+-----------------------+------------------+--------+--------+
*/

SELECT author, title, price FROM book
WHERE price - (
   SELECT MIN(price) FROM book
) <= 150
ORDER BY price;