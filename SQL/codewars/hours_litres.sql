/*
Вам дается время в часах, и вам нужно вернуть 
количество литров, которые выпьет Натан, округленное до наименьшего значения.

Например:

hours = 3 ----> liters = 1

hours = 6.7---> liters = 3
*/

SELECT id, hours, FLOOR(hours * 0.5) AS liters FROM cycling;