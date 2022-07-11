/* write your SQL query below */

SELECT count(*) FROM maintable_TLTZL
where (FirstName LIKE '%e%' and CHAR_LENGTH(LastName) > 5)
