const jwt = require("jsonwebtoken");
const User = require("../modules/user/userModel");

const middleware = function (req, res, next) {
    const authToken = req.headers.authorization.split(" ")[1];
    if (!authToken) {
        return res.status(401).json({ message: "Not Authorized" });
    }

    jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, async (error, data) => {
        if (error) return res.sendStatus(403).json({ message: "Forbidden" });
        const user = await User.findById(data._id);
        if (!user) return res.sendStatus(403).json({ message: "User invalid" });
        req.user = user;
        next();
    });
};

module.exports = middleware;