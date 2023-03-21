/*
CREATE TABLE users(
	id varchar(36) PRIMARY KEY,
    username varchar(32) unique NOT NULL,
    password varchar(250) NOT NULL,
    age integer(2) NOT NULL,
    email varchar(100) NOT NULL,
    phone varchar(20),
    address varchar(500),
    isActive integer(1) NOT NULL,
    createBy timestamp,
    updateAt timestamp,
    updateBy timestamp
);

CREATE TABLE Customer(
	id varchar(36) PRIMARY KEY,
    userid varchar(36) NOT NULL,
    FOREIGN KEY(userid) REFERENCES users(id),
    paymentMethod integer(10),
    isActive integer(1) NOT NULL
);
CREATE TABLE Orders(
	id varchar(36) PRIMARY KEY,
    customerid varchar(36) NOT NULL,
    FOREIGN KEY(customerid) REFERENCES Customer(id),
    price double NOT NULL,
    tax double NOT NULL,
    discount double NOT NULL,
    totalPrice double NOT NULL,
    isDeleted integer(1) NOT NULL,
    createBy timestamp,
    updateAt timestamp,
    updateBy timestamp
);

CREATE TABLE OrderDetail(
	id varchar(36) PRIMARY KEY,
    orderid varchar(36) NOT NULL,
    FOREIGN KEY(orderid) REFERENCES Orders(id),
    productid varchar(36) NOT NULL,
    FOREIGN KEY(productid) REFERENCES Product(id),
    price double NOT NULL,
    tax double NOT NULL,
    discount double NOT NULL,
    totalPrice double NOT NULL,
    isDeleted integer(1) NOT NULL,
    createBy timestamp,
    updateAt timestamp,
    updateBy timestamp
);

CREATE TABLE Product(
	id varchar(36) PRIMARY KEY,
    name integer(255) NOT NULL,
    description varchar(4000) NOT NULL,
    price double,
    tax double,
    discount double,
    totalPrice double,
    isDeleted integer(1),
    createBy timestamp,
    updateAt timestamp,
    updateBy timestamp
);

CREATE TABLE ProductImages(
	id varchar(36) PRIMARY KEY,
    name integer(10) NOT NULL,
    productid varchar(36) NOT NULL,
	FOREIGN KEY(productid) REFERENCES Product(id),
    url integer(10),
    isDeleted integer(1),
    createBy timestamp,
    updateAt timestamp,
    updateBy timestamp
);

ALTER TABLE users
ADD isDeleted int;

ALTER TABLE CUstomer
ADD isDeleted int;




*/