const express = require('express')
const AboutController = require('../controllers/admin/AboutController')
const BlogController = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')
const ContactController = require('../controllers/admin/ContactController')

const AdminController = require('../controllers/AdminController')
const FrontController = require('../controllers/FrontController')
const ImageController = require('../controllers/ImageController')
const UnderConstructor = require('../middleware/UnderConstructor')
const upload = require('../middleware/ImageMiddleware')


const router = express.Router()



// create route Frontcontroller
router.get('/',FrontController.home)
router.get('/about',FrontController.about)
// router.get('/about',UnderConstructor,FrontController.about)

router.get('/contact',FrontController.contact)
router.get('/bloglist',FrontController.blog)
router.get('/login',FrontController.login)
router.get('/detail/:id',FrontController.detail)

router.post('/contact_insert',FrontController.contact_insert);





// Admincontroller
router.get('/admin/dashboard',AdminController.dashboard);




// admin category controller
router.get('/admin/category',CategoryController.allcategory);
router.post('/admin/category_insert',CategoryController.catergory_insert)





// BlogController
router.get('/admin/blog',BlogController.blog);
router.get('/admin/createBlog',BlogController.createBlog);
router.post('/admin/blog_insert',upload,BlogController.blog_insert);
router.get('/admin/delete/:id',BlogController.delete);
router.get('/admin/edit/:id',BlogController.edit)
router.post('/admin/update/:id',BlogController.update);

// router.get('/admin',BlogController.display);

// AboutController
router.get('/admin/about',AboutController.about);




// ContactController
router.get('/admin/contact',ContactController.contact)




// Image controller
router.get('/create_image',ImageController.createImage);
router.post('/image_insert',upload,ImageController.imageInsert);
router.get('/displayimage',ImageController.displayimage);
router.get('/edit_image/:id',ImageController.edit_image);
router.post('/image_update/:id',upload,ImageController.image_update);
router.get('/delete_image/:id',ImageController.delete_image);











module.exports = router