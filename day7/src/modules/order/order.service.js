const Order = require("./order.model");
const OrderDetail = require("./order-detail/order-detail.model");
const mailSender = require("../../utils/mail-sender");

async function createOrder(req) {
    let { price, tax, discount, productId } = req.body;
    price = parseFloat(price);
    tax = parseFloat(tax);
    discount = parseFloat(discount);

    const newOrder = new Order({
        price,
        tax,
        discount,
        totalPrice: price - discount + tax,
    });
    await newOrder.save();

    const newOrderDetail = new OrderDetail({
        price,
        tax,
        discount,
        totalPrice: price - discount + tax,
        order: newOrder._id,
        product: productId,
    });
    await newOrderDetail.save();

    await mailSender(
        req.user.email,
        "Order created successfully !",
        "<h1>Order created successfully !</h1>"
    );

    return newOrder._id;
}

async function updateOrder(req) {
    const orderId = req.params.id;
    let { price, tax, discount } = req.body;
    if (price) price = parseFloat(price);
    if (tax) tax = parseFloat(tax);
    if (discount) discount = parseFloat(discount);

    const order = await Order.findById(orderId);
    if (!order) {
        throw new Error("Order not found");
    }
    const totalPrice = price || order.price - discount || order.discount + tax || order.tax;

    await Order.findByIdAndUpdate(orderId, { price, tax, discount, totalPrice }, { new: true });

    await Order.findOneAndUpdate(
        { order: orderId },
        { price, tax, discount, totalPrice },
        { new: true }
    );

    return order._id;
}

async function getOrdersPagination(req) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    if (page <= 0 || limit <= 0) throw new Error("Parameters aren't accepted");

    const orders = await Order.find()
        .limit(limit)
        .skip((page - 1) * limit);

    return orders;
}

async function softDeleteOrder(req) {
    const orderId = req.params.id;
    const order = await order.findByIdAndUpdate(orderId, { idDeleted: true }, { new: true });

    if (!order) {
        throw new Error("order not found");
    }

    return order._id;
}

module.exports = { createOrder, updateOrder, getOrdersPagination, softDeleteOrder };
