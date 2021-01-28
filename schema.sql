-- NAVIGATE TO /Users/jessicaokeeffe/Desktop/Bootcamp-Homework/SQL-employee-tracker
-- Start the CLI with:
-- mysql -u root -p
-- Enter password and copy the below code upto but not including the next comment

DROP DATABASE IF EXISTS employeeTracker;

CREATE DATABASE employeeTracker;

USE employeeTracker;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  dept_name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY(id)
);

--SET GLOBAL local_infile=1;
-- COPY UP TO HERE^
-- Stop the CLI you have open using:
-- quit
-- Restart the CLI with:
-- mysql --local-infile=1 -u root -p


