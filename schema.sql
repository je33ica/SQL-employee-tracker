-- NAVIGATE TO /Users/jessicaokeeffe/Desktop/Bootcamp-Homework/SQL-employee-tracker
-- Start the CLI with:
-- mysql -u root -p
-- Enter password and copy the below code upto but not including the next comment

DROP DATABASE IF EXISTS employeeTracker;

CREATE DATABASE employeeTracker;

USE employeeTracker;

CREATE TABLE department(
  id INT ,
  dept_name VARCHAR(30) NULL,
  PRIMARY KEY(id)
);
CREATE TABLE roles(
    id INT ,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE employee(
    id INT ,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);
SET GLOBAL local_infile=1;
-- COPY UP TO HERE^
-- Stop the CLI you have open using:
-- quit
-- Restart the CLI with:
-- mysql --local-infile=1 -u root -p


