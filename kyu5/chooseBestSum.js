function chooseBestSum(t, k, ls) {
  
}
SELECT employee_name
FROM Employee
WHERE employee_id IN (
    SELECT employee_id
    FROM Employee_Task
    WHERE task_id IN (
        SELECT task_id
        FROM Task
        WHERE project_id = (
            SELECT project_id
            FROM Project
            WHERE project_name = 'Project X'
        )
    )
);

SELECT 
  p.project_name, 
  (SELECT COUNT(DISTINCT et.employee_id) 
   FROM Employee_Task et 
   JOIN Task t ON et.task_id = t.task_id 
   WHERE t.project_id = p.project_id) AS employee_count
FROM Project p
WHERE 
  (SELECT COUNT(DISTINCT et.employee_id) 
   FROM Employee_Task et 
   JOIN Task t ON et.task_id = t.task_id 
   WHERE t.project_id = p.project_id) >= 3;


SELECT DISTINCT e.employee_name
FROM Employee e
INNER JOIN Employee_Task et ON e.employee_id = et.employee_id
INNER JOIN Task t ON et.task_id = t.task_id
INNER JOIN Project p ON t.project_id = p.project_id AND p.project_name = 'Project X'
LEFT JOIN (
    SELECT et.employee_id
    FROM Employee_Task et
    INNER JOIN Task t ON et.task_id = t.task_id
    INNER JOIN Project p ON t.project_id = p.project_id
    WHERE p.project_name <> 'Project X'
) as OtherProjects ON e.employee_id = OtherProjects.employee_id
WHERE OtherProjects.employee_id IS NULL;
   

SELECT 
    co.Name, 
    co.Address, 
    sa.SatelliteID, 
    ob.ObservationDateTime
FROM 
    Observation ob
JOIN 
    Satellite sa ON ob.SatelliteID = sa.SatelliteID
LEFT JOIN 
    Company co ON sa.CompanyID = co.CompanyID
WHERE 
    sa.RegistrationStatus = 'Not Registered';
