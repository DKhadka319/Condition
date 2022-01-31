ELECT 
  t1.FirstName, t1.LastName, t1.ReportsTo, t1.Position, t1.Age, 
  IFNULL(t2.Position, 'None') 'Boss Title' 
FROM 
  maintable_89T1J t1 LEFT JOIN (
    SELECT 
      CONCAT(FirstName, ' ', LastName) 'FullName', Position
    FROM 
      maintable_89T1J
  ) t2
ON 
  t1.ReportsTo = t2.FullName
WHERE 
  ReportsTo = 'Jenny Richards' OR ReportsTo IS NULL
ORDER BY 
