const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.env.FILE_STORAGE_DESTINATION);
    },
    filename: function (req, file, cb) {
        cb(null, `${req.productId.toString()}.png`);
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
