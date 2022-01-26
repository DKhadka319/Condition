
SELECT MONTHNAME(DateJoined) as 'Month', 
(SELECT COUNT(*) FROM maintable_DQORA a where MONTHNAME(a.DateJoined) = MONTHNAME(Main.DateJoined))
 - 
 (SELECT COUNT(*) FROM maintable_DQORA a WHERE MONTHNAME(a.DateJoined) = MONTHNAME(DATE_ADD(Main.DateJoined, interval -1 Month)))
 as 'MonthToMonthChange'
FROM maintable_DQORA Main
where month(DateJoined) != 1
group by  month(DateJoined)
