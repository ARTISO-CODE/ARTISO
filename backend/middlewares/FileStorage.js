const multer = require('multer');

// const upload_productImage = multer({ dest: "./uploads/product_images" })
const upload_images = multer({ dest: "./uploads/images" })

module.exports = { upload_images };