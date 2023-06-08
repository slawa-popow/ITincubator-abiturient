/*
Эта функция должна проверять, является ли factorфактор фактором base.

Возврат true, если это фактор или falseесли это не так.

*/
-- you will be given a table 'kata' with columns 'id', 'base', and 'factor'. 
-- return the 'id' and your result in a column named 'res'.
SELECT id, mod(base, factor)=0 as res FROM kata;