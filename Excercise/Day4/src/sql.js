/*

    SELECT *
from Orders LEFT JOIN Customer
ON Customer.id = Orders.customerid
LEFT JOIN OrderDetail
ON OrderDetail.orderid = Orders.id
LEFT JOIN Product
ON Product.id = OrderDetail.productid;


SELECT *
from users INNER JOIN Customer
ON users.id = Customer.userid;

SELECT *
from Product INNER JOIN ProductImages
ON Product.id = ProductImages.productid
where Product.name LIKE '1%'
LIMIT 20;
*/