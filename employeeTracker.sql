CREATE DATABASE employeeTracker;

USE employeeTracker;
INSERT INTO department (dept_names)
VALUES ("managment", "back of house", "front of house ", "HR");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Owner", 50000, 1), ("Executive chef", 28000,1 ),
("Head chef", 28000, 2), ("Restaurant manager", 25000, 3),  
 ("sommelier ",28000, 3), ("Bar tender", 18000, 3),
 ("HR manager",27000, 4), ("receptionist",27000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Larri", "Etta", 1, 1), ("Corbyn", "Dallas", 2, 1), 
("Sam", "Wich", 3, 2), ("Lila", "Moon", 4, 1),  
("Chardonay", "White", 5, 4), ("Moe", "Jito", 6, 4), 
("Hugh", "Jass", 7, 4), ("Sam", "Sung", 8, 4);





      