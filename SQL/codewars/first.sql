/* # write your SQL statement here: 
you are given a table 'paperwork' with columns 'n' and 'm', 
return a table with all the columns and your result in a column named 'res'.*/

SELECT n, m, CASE WHEN n > 0 AND m > 0 THEN n * m ELSE 0 END AS res
from paperwork;