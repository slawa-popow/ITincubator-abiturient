/*
Посчитать стоимость всех экземпляров каждого автора без учета книг 
«Идиот» и «Белая гвардия». В результат включить только тех авторов, 
у которых суммарная стоимость книг (без учета книг «Идиот» и «Белая гвардия») 
более 5000 руб. Вычисляемый столбец назвать Стоимость. 
Результат отсортировать по убыванию стоимости.

Результат
+------------------+-----------+
| author           | Стоимость |
+------------------+-----------+
| Есенин С.А.      | 9750.00   |
| Достоевский Ф.М. | 7202.03   |
+------------------+-----------+
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
+---------+-----------------------+------------------+--------+--------+
*/


/*Это просто псц....*/

select author, sum(price*amount) as Стоимость from book
where title <> "Идиот" and title <> "Белая гвардия"
group by author
having Стоимость > 5000
order by Стоимость desc;
 