const { User } = require("../models");

exports.add = async (req, res) => {
    try {
        if(!req.body.username || !req.body.password) {
            res.status(400).send({
                message: 'Credentials cannot be empty!'
            });
            return;
        }
    
        const { username, password, age, email, phone, address, isActive, createBy, createAt, updateAt, updateBy } = req.body;
        if (await User.findOne({ where: { username } })) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        
        const newUser = await User.create({
            username,
            password,
            age,
            email,
            phone,
            address,
            isActive,
            createBy,
            createAt,
            updateAt,
            updateBy
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        if (!await User.findOne({ where: { id } })) {
            return res.status(400).json({ message: `'User with ID: ${id} not exists'` });
        }
        await User.update(req.body, { where: {id} });
        res.send({ message: 'User was updated successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error updating a user" });
    }
}

exports.getList = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error get all users" });
    }
}

exports.getDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error get a user detail" });
    }
}

exports.changeActiveUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if(user.isActive == 0) await user.update({ isActive: 1 });
        else await user.update({ isActive: 0 });
        return res.status(200).json(user);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error update an active user" });
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ where: { id } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.destroy();
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error delte a user" });
    }
}