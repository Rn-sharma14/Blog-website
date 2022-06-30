const multer = require('multer')
const path = require('path')

// To send image to the upload folder using multer
const Storage = multer.diskStorage({
    destination: './public/upload',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})


var upload = multer({
    storage: Storage
}).single('image')





module.exports = upload;