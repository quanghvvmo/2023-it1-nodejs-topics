-- 2. Viết câu lệnh sql trả về tất cả thông tin về đơn hàng, chi tiết đơn hàng, chi tiết sản phẩm trong đơn hàng của mỗi customer. 
SELECT *
FROM customer c
JOIN `Order` o ON c.id = o.customerid
JOIN OrderDetail od ON o.id = od.orderid
JOIN Product p ON od.productid = p.id
WHERE o.isDeleted = 0 AND od.isDeleted = 0 AND p.isDeleted = 0;

-- 3. Viết câu lệnh select tất cả users (có cả thông tin customer của mỗi user)
SELECT *
FROM user
LEFT JOIN customer ON user.id = customer.userid;


-- 4. Viết câu lệnh sql trả về tất cả các sản phẩm và ảnh của mỗi sản phẩm. có limit 0 – 20, có where like name
SELECT *
FROM Product
LEFT JOIN ProductImages pi ON Product.id = ProductImages.productid
WHERE Product.name LIKE '%name_here%'
LIMIT 20;