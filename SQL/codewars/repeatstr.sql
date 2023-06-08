/*
Напишите функцию, которая принимает целое число nи строку s в 
качестве параметров и возвращает строку, sповторяющуюся ровно столько nраз.

Примеры (ввод -> вывод)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

select s, n, repeat(s, n) as res from repeatstr;