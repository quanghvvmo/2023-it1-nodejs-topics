const {
    createOrder,
    updateOrder,
    getListOrders,
    deleteOrder,
} = require("./orderService");

exports.createOrderController = async function (req, res) {
    try {
        const orderId = await createOrder(req);
        return res.status(200).json(orderId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

exports.updateOrderController = async function (req, res) {
    try {
        const orderId = await updateOrder(req);
        return res.status(200).json(orderId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

exports.getOrdersController = async function (req, res) {
    try {
        const orders = await getListOrders(req);
        return res.status(200).json(orders);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

exports.deleteOrderController = async function (req, res) {
    try {
        const orderId = await deleteOrder(req);
        return res.status(200).json(orderId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};