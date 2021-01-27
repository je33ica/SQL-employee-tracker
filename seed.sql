use employeeTracker

INSERT INTO department (dept_names)
VALUES ("managment", "back of house", "front of house ", "HR");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Owner", 50000, 1), 
 ("Executive chef", 28000, 2),    
 ("sommelier ",28000, 3), 
 ("receptionist",27000, 4),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Larri", "Etta", 1, NULL), 
("Corbyn", "Dallas", 2, 1),   
("Chardonay", "White", 3, 1),
("Hugh", "Jass", 4, 1);




-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES 
-- ("Sam", "Wich", 1) ,
-- ("Lila" "Moon", 2) ,
--  ("Moe", "Jito", 3), 
-- ("Sam", "Sung", 3);


-- INSERT INTO roles (title, salary, department_id)
-- VALUES ("Owner", 50000, 1 ), ("Executive chef", 40000, 1,) , 
--  ("Head chef", 28000, 2), ("Sous chef", 25000, 2) ,   
--  ("sommelier ",28000, 3), ("Bar tender", 18000, 3) , 
--  ("HR manager",27000, 4), ("receptionist", 16000, 4);

-- INSERT INTO employee (first_name, last_name, role_id)
-- VALUES ("Larri", "Etta", 1), 
-- ("Corbyn", "Dallas", 2),   
-- ("Chardonay", "White", 3),
-- ("Hugh", "Jass", 4);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES 
-- ("Sam", "Wich", 1) ,
-- ("Lila" "Moon", 2) ,
--  ("Moe", "Jito", 3), 
-- ("Sam", "Sung", 3);



-- ("Larri", "Etta", 1, 1), ("Sam", "Wich", 2, 2), ("Chardonay", "White", 3), ("Hugh", "Jass", 4);




--        ("managment"1,          "back of house"2,           "front of house"3,         "HR"4);
-- VALUES ("Owner", 50000, 1,1), ("Executive chef", 40000, 1,), ("Head chef", 28000, 2), ("Sous chef", 25000, 2), ("chef de partie", 18000, 2), ("commis chef", 13000,2), 
-- VALUES ("Bob","Smith",1 ,1), ("Larri", "Etta", 1, 1), ("Stella", "Thorn", 2, 1), ("Corbyn", "Dallas", 2, 1), ("Lila" "Moon", 2, 1), ("Sam", "Wich", 2, 2)

-- ("managment"1,                   "back of house"2,          "front of house"3,          "HR"4);
-- ("Restaurant manager", 35000, 1), ("sommelier ",28000, 3), ("waiter", 16000, 3), ("Bar tender", 18000, 3), ("HR manager",27000, 4), ("receptionist", 16000, 4);
-- ("Harry", "Potter",1)("Chardonay", "White", 3)("Alexi", "Stroop", 3)("Moe", "Jito", 3)("Sam", "Sung", 3)("Hugh", "Jass", 4);
