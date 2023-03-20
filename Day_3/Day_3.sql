create database order_management; 
use order_management ;

CREATE TABLE user (
	userId varchar(36) NOT NULL,
	username varchar(32) NOT NULL,
    password varchar(250) NOT NULL,
    age int(2) NOT NULL,
    email varchar(250) NOT NULL,
    phone varchar(20) NOT NULL,
	address varchar(500) NOT NULL,
    isActive int(1) NOT NULL,
    createBy timestamp NOT NULL,
    createAt timestamp NOT NULL,
    updateAt timestamp NOT NULL,
    updateBy timestamp NOT NULL,
	PRIMARY KEY (userId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO user (userId, username, password, age, email, phone, address, isActive, createBy, createAt, updateAt, updateBy)
VALUES ('1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6', 'johnsmith', 's3cur3p@ssw0rd', 25, 'johnsmith@example.com', '+1-555-123-4567', '123 Main St, Anytown, USA', 1, '2023-03-20 10:30:00', '2023-03-20 10:30:00', '2023-03-20 10:30:00', '2023-03-20 10:30:00'),
('a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5', 'janedoe', 'p@ssw0rd123', 32, 'janedoe@example.com', '+1-555-987-6543', '456 Elm St, Anytown, USA', 1, '2023-03-19 08:15:00', '2023-03-19 08:15:00', '2023-03-19 08:15:00', '2023-03-19 08:15:00'),
('1q2w3e4r5t6y7u8i9o0p1q2w3e4r5t', 'bobross', 'happytrees', 48, 'bobross@example.com', '+1-555-555-5555', '789 Maple St, Anytown, USA', 1, '2023-03-18 16:45:00', '2023-03-18 16:45:00', '2023-03-18 16:45:00', '2023-03-18 16:45:00'),
('z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5', 'johndoe', 'password123', 28, 'johndoe@example.com', '+1-555-111-2222', '321 Oak St, Anytown, USA', 1, '2023-03-17 12:00:00', '2023-03-17 12:00:00', '2023-03-17 12:00:00', '2023-03-17 12:00:00'),
('5t4r3e2w1q0p9o8i7u6y5t4r3e2w1q0p', 'marysmith', 'm@ryp@ssw0rd', 42, 'marysmith@example.com', '+1-555-333-4444', '111 Pine St, Anytown, USA', 1, '2023-03-16 14:30:00', '2023-03-16 14:30:00', '2023-03-16 14:30:00', '2023-03-16 14:30:00');

CREATE TABLE customer (
	customerId varchar(36) NOT NULL,
	userId varchar(32) NOT NULL,
    paymentMethod int(10),
    isActive int(1) NOT NULL,
	PRIMARY KEY (customerId),
    KEY userId(userId),
    CONSTRAINT userId FOREIGN KEY (userId) REFERENCES user(userId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO customer (customerId, userId, paymentMethod, isActive)
VALUES ('a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6', '1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6', 1, 1),
('b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q', 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5', 2, 1),
('c1d2e3f4-g5h6-i7j8-k9l0-m1n2o3p4q5r', '1q2w3e4r5t6y7u8i9o0p1q2w3e4r5t', 3, 1),
('d1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s', 'z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5', 4, 1),
('e1f2g3h4-i5j6-k7l8-m9n0-o1p2q3r4s5t', '5t4r3e2w1q0p9o8i7u6y5t4r3e2w1q0p', 5, 1);

CREATE TABLE `order` (
	orderId varchar(36) NOT NULL,
	customerId varchar(36) NOT NULL,
    price double NOT NULL,
    tax double NOT NULL,
    discount double NOT NULL,
    totalPrice double NOT NULL,
    isDeleted int(1),
    createBy timestamp NOT NULL,
    createAt timestamp NOT NULL,
    updateAt timestamp NOT NULL,
    updateBy timestamp NOT NULL,
	PRIMARY KEY (orderId),
	KEY customerId(customerId),
    CONSTRAINT customerId FOREIGN KEY (customerId) REFERENCES customer(customerId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE product (
	productId varchar(36) NOT NULL,
	name int(300) NOT NULL,
    description varchar(4000) NOT NULL,
    price double NOT NULL,
	tax double NOT NULL,
    discount double NOT NULL,
    totalPrice double NOT NULL,
    isDeleted int(1),
    createBy timestamp NOT NULL,
    createAt timestamp NOT NULL,
    updateAt timestamp NOT NULL,
    updateBy timestamp NOT NULL,
	PRIMARY KEY (productId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE productImages (
	productImagesId varchar(36) NOT NULL,
	name int(10) NOT NULL,
    productId varchar(36) NOT NULL,
    url int(10) NOT NULL,
    isDeleted int(1),
    createBy timestamp NOT NULL,
    createAt timestamp NOT NULL,
    updateAt timestamp NOT NULL,
    updateBy timestamp NOT NULL,
	PRIMARY KEY (productImagesId),
    KEY productId(productId),
    CONSTRAINT productId FOREIGN KEY (productId) REFERENCES product(productId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE orderDetail (
	orderDetailId varchar(36) NOT NULL,
	orderId varchar(36) NOT NULL,
    productId varchar(36) NOT NULL,
    price double NOT NULL,
    tax double NOT NULL,
    discount double NOT NULL,
    totalPrice double NOT NULL,
    isDeleted int(1),
    createBy timestamp NOT NULL,
    createAt timestamp NOT NULL,
    updateAt timestamp NOT NULL,
    updateBy timestamp NOT NULL,
	PRIMARY KEY (orderDetailId),
    KEY orderId(orderId),
    KEY productId(productId),
    CONSTRAINT productId FOREIGN KEY (productId) REFERENCES product(productId),
    CONSTRAINT orderId FOREIGN KEY (orderId) REFERENCES `order`(orderId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



