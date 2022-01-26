* write your SQL query below */



-- select * from cb_vendorinformation;




SELECT mt.GroupID, cb.CompanyName, Count(*) as 'Count'
FROM maintable_7VAAA mt
JOIN cb_vendorinformation cb
ON mt.GroupID = cb.GroupID
GROUP BY 1,2
ORDER BY Count, mt.GroupID;
