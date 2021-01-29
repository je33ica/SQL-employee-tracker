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

SELECT department.id, dept_name, roles.id, roles.title, roles.salary 
FROM department JOIN roles ON department.id = roles.department_id

-- INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
-- VALUES 
-- (1,"Larri", "Etta", 1, 1), (2,"Corbyn", "Dallas", 2, 1), 
-- (3,"Sam", "Wich", 3, 2), (4,"Lila" "Moon", 4, 1), 
-- (5,"Chardonay", "White", 5, 4), (6,"Moe", "Jito", 6, 4), 
-- (7,"Hugh", "Jass", 7, 4), (8,"Sam", "Sung", 8, 4);




-- show ALL books with authors
-- INNER JOIN will only return all matching values from both tables
   
SELECT * FROM employee;
SELECT title, firstName, lastName
FROM books
INNER JOIN authors ON books.authorId = authors.id;

-- INSERT INTO employee (first_name, last_name, role_id)
-- VALUES 
-- ("Larri", "Etta", 1), ("Corbyn", "Dallas", 2), 
-- ("Sam", "Wich", 3), ("Lila" "Moon", 4); 


-- ("Chardonay", "White", 5, 4), ("Moe", "Jito", 6, 4), 
-- ("Hugh", "Jass", 7, 4), ("Sam", "Sung", 8, 4);



-- -- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- -- VALUES 
-- -- ("Sam", "Wich", 5, 1) ,("Lila" "Moon", 6, 2) ,

-- -- ("Sam", "Sung", 8);




-- -- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- -- VALUES 
-- -- ("Sam", "Wich", 1) ,
-- -- ("Lila" "Moon", 2) ,
-- --  ("Moe", "Jito", 3), 
-- -- ("Sam", "Sung", 3);


-- -- INSERT INTO roles (title, salary, department_id)
-- -- VALUES ("Owner", 50000, 1 ), ("Executive chef", 40000, 1,) , 
-- --  ("Head chef", 28000, 2), ("Sous chef", 25000, 2) ,   
-- --  ("sommelier ",28000, 3), ("Bar tender", 18000, 3) , 
-- --  ("HR manager",27000, 4), ("receptionist", 16000, 4);

-- -- INSERT INTO employee (first_name, last_name, role_id)
-- -- VALUES ("Larri", "Etta", 1), 
-- -- ("Corbyn", "Dallas", 2),   
-- -- ("Chardonay", "White", 3),
-- -- ("Hugh", "Jass", 4);

-- -- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- -- VALUES 
-- -- ("Sam", "Wich", 1) ,
-- -- ("Lila" "Moon", 2) ,
-- --  ("Moe", "Jito", 3), 
-- -- ("Sam", "Sung", 3);



-- -- ("Larri", "Etta", 1, 1), ("Sam", "Wich", 2, 2), ("Chardonay", "White", 3), ("Hugh", "Jass", 4);




-- --        ("managment"1,          "back of house"2,           "front of house"3,         "HR"4);
-- -- VALUES ("Owner", 50000, 1,1), ("Executive chef", 40000, 1,), ("Head chef", 28000, 2), ("Sous chef", 25000, 2), ("chef de partie", 18000, 2), ("commis chef", 13000,2), 
-- -- VALUES ("Bob","Smith",1 ,1), ("Larri", "Etta", 1, 1), ("Stella", "Thorn", 2, 1), ("Corbyn", "Dallas", 2, 1), ("Lila" "Moon", 2, 1), ("Sam", "Wich", 2, 2)

-- -- ("managment"1,                   "back of house"2,          "front of house"3,          "HR"4);
-- -- ("Restaurant manager", 35000, 1), ("sommelier ",28000, 3), ("waiter", 16000, 3), ("Bar tender", 18000, 3), ("HR manager",27000, 4), ("receptionist", 16000, 4);
-- -- ("Harry", "Potter",1)("Chardonay", "White", 3)("Alexi", "Stroop", 3)("Moe", "Jito", 3)("Sam", "Sung", 3)("Hugh", "Jass", 4);
