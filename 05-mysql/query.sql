create database store;

use store;

create table category (
	id int primary key not null auto_increment,
	name VARCHAR(25)
);

create table product (
	id int primary key not null auto_increment,
	name VARCHAR(50),
	price int,
	category_id int,
	FOREIGN KEY (category_id) REFERENCES category(id)
);

insert into category (name) VALUES
("food"), 
("baverage"), 
("ala carte"),
("dessert");

select * from category;

insert into product (name, price, category_id) VALUES
("nasi goreng", 20000, 1), 
("nasi gila", 25000, 1), 
("kwetiaw", 20000, 1),
("es teh", 5000, 2),
("air mineral", 0, 2),
("kerupuk", 5000, 3),
("gorengan", 10000, 3),
("sprit", 40000, 3),
("es doger", 20000, 3),
("es teh anget", 20000);

select * from product;

-- ambil data pakai JOIN
select product.id, product.name as product, product.price, category.name as category
from product inner join category
on product.category_id = category.id;

-- Aggregate
SELECT sum(price) as total_price from product;
SELECT max(price) as max_price from product;
select count(category_id) from product GROUP by category_id;

-- Aggregate, JOIN, group
select category.name as category, count(category_id)
from product inner join category
on product.category_id = category.id
group by category_id;



-- Create person fav product
create table person (
	id int primary key not null auto_increment,
	name VARCHAR(50)
);

create table fav_product (
	id int primary key not null auto_increment,
	person_id int,
	product_id int,
	FOREIGN KEY (person_id) REFERENCES person(id),
	FOREIGN KEY (product_id) REFERENCES product(id)
);

insert into person (name) VALUES
("Alpha"), 
("Bravo"),
("Charlie"), 
("Delta");

SELECT * from person;

insert into fav_product (person_id, product_id) VALUES
(1, 11), 
(1, 12),
(1, 13), 
(2, 11), 
(2, 12),
(3, 12);

SELECT * from fav_product;

-- LATIHAN ============================================
-- select data fav_product pakai JOIN