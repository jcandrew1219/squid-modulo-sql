INSERT INTO department (name)
VALUES ("Computer Technology"),
       ("Arts"),
       ("Engineering"),
       ("Finance"),

INSERT INTO role (title, salary, department_id)
VALUES ("Music Teacher", 50000, 2),
       ("Nuclear Engineer", 120000, 3),
       ("Accountant", 125000, 4),
       ("Software Developer", 110000, 1),
       ("Mechanical Engineer", 85000, 3),
       ("Performing Musician", 40000, 2),
       ("Chemical Engineer", 100000, 3)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mark", "Andrew", 7, NULL),
       ("Katie", "Rose", 6, NULL),
       ("Scott", "Burns", 5, 1),
       ("Ashley", "Archer", 3, 1),
       ("Jacob", "Mehringer", 4, 7),
       ("Caroline", "Baker", 2, 4),
       ("Max", "Hoth", 4, Null)