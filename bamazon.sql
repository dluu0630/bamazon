DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(5,2) NOT NULL,
  stock_quantity INT(5) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "SSD", "Electronics", 139.99, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "16GB DDR4 RAM", "Electronics", 159.99, 299);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Grill Gloves", "Outdoors", 19.99, 90);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Hammock", "Outdoors", 59.95, 167);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Pledge", "Cleaning", 3.99, 200);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Windex", "Cleaning", 5.99, 260);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Cheetos", "Food", 1.99, 5000);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Pockie", "Food", 3.99, 2000);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Ladel", "Cooking", 19.99, 80);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Kitchen Knife", "Cooking", 25.95, 97);


SELECT * FROM products;