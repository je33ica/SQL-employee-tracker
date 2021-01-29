use employeeTracker

INSERT INTO department (dept_name)
VALUES ("managment"), ("back of house"), ("front of house"), ("HR");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Owner", 50000, 1), ("Executive chef", 28000,1 ),
("Head chef", 28000, 2), ("Restaurant manager", 25000, 3),  
 ("sommelier ",28000, 3), ("Bar tender", 18000, 3),
 ("HR manager",27000, 4),("receptionist",27000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Larri", "Etta", 1, 1), ("Corbyn", "Dallas", 2, 1), 
("Sam", "Wich", 3, 2), ("Lila", "Moon", 4, 1),  
("Chardonay", "White", 5, 4), ("Moe", "Jito", 6, 4), 
("Hugh", "Jass", 7, 4), ("Sam", "Sung", 8, 4);

--view roles
SELECT * FROM employeeTracker.roles;
SELECT  title FROM roles

--view departments
SELECT * FROM employeeTracker.department;
SELECT first_name, last_name FROM employee;

SELECT dept_name FROM department

--view employees
SELECT * FROM employeeTracker.employee;

SELECT department.id, dept_name, roles.id, roles.title, roles.salary 
FROM department JOIN roles ON department.id = roles.department_id

SELECT roles.id, roles.title, roles.salary, roles.department_id, 
employee.role_id, employee.manager_id, employee.first_name,
employee.last_name 
FROM roles JOIN employee ON roles.id = employee.role_id

--view employees
SELECT roles.id, roles.title, roles.salary, employee.first_name, 
employee.last_name, employee.role_id, employee.manager_id 
FROM roles JOIN employee ON roles.id = employee.role_id;

-- title role and department 
SELECT roles.title, dept_name AS department FROM roles LEFT JOIN department ON roles.department_id=department.id;
--Name and title
SELECT employee.first_name, employee.last_name, roles.title FROM roles JOIN employee ON roles.id = employee.role_id;