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

ALTER TABLE users
ADD isDeleted int;

ALTER TABLE CUstomer
ADD isDeleted int;


*/