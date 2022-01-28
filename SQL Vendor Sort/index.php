
SELECT 
  ma.GroupID as GroupID,
  FirstName,
  LastName,
  Job,
  ExternalID,
  CompanyName,
  Count(*) as "Count"
 FROM maintable_9LBU9 ma JOIN
  cb_vendorinformation cb ON ma.groupid = cb.groupid
 GROUP BY 2
 ORDER BY 7 ASC