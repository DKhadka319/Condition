SELECT 
a.ID,
a.Name,
b.DivisionName,
coalesce(c.Name, c.ID) as ManagerName,
a.Salary
FROM maintable_H4W4D a
left join cb_companydivisions b on a.DivisionID=b.ID
left join maintable_H4W4D c on a.ManagerID=c.id
order by salary desc
limit 2,1
