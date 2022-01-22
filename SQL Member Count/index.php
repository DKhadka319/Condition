
SELECT ReportsTo, count(ReportsTo) as Members,
round(avg(Age), 0) as 'Average Age' 
FROM t_lhv9soi459ev

Where ReportsTo is not null

Group by ReportsTo

order by ReportsTo