const {
    createOrder,
    updateOrder,
    getOrdersPagination,
    softDeleteOrder,
} = require("./order.service");

const createOrderController = async function (req, res) {
    try {
        const orderId = await createOrder(req);
        return res.status(200).json(orderId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const updateOrderController = async function (req, res) {
    try {
        const orderId = await updateOrder(req);
        return res.status(200).json(orderId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const getOrdersController = async function (req, res) {
    try {
        const orders = await getOrdersPagination(req);
        return res.status(200).json(orders);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

const deleteOrderController = async function (req, res) {
    try {
        const orderId = await softDeleteOrder(req);
        return res.status(200).json(orderId);
    } catch (error) {
        if (error.message) return res.status(400).json({ message: error.message });
        return res.status(500).json(error);
    }
};

module.exports = {
    createOrderController,
    updateOrderController,
    getOrdersController,
    deleteOrderController,
};
