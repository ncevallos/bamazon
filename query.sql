
create database bamazon; 
drop database if exists bamazon;

use bamazon; 

create table products(
	item_ID integer(11) auto_increment not null, 
    product_name varchar(50) not null, 
    department_name varchar(30), 
    price float,
    stock_quantity integer(10), 
    primary key(item_ID)
);

select * from products; 

insert into products(product_name, department_name, price, stock_quantity)
		values('Nintendo NES', 'Video Games', '59.99' '0'),
        ('Nintendo Switch', 'Video Games', '299.99' '4'),
        ('NPlaystation 4 Slim', 'Video Games', '299.99' '20'),
        ('Charmin 24ct', 'Household Goods', '21.99' '80'),
        ('Angel Soft 48ct', 'Household Goods', '21.99' '80'),
        ('Bounty 12ct', 'Household Goods', '23.99' '60'),
        ('Swiffer Dry Refills', 'Household Goods', '14.47' '60'),
        ('Windows 10 Professional', 'Software', '84.99' '14'),
        ('Parallels 12 Mac', 'Software', '62.19' '25'),
        ('Photoshop Elements', 'Software', '59.99' '12');