const BlogModel = require('../models/Blog.js')
const CategoryModel = require('../models/category.js')
const ContactModel = require('../models/Contact.js')

class FrontController {
    static home = async (req, res) => {
        try {
            const result = await BlogModel.find();
            // console.log(result)

            res.render('home', { data: result })
        }
        catch (err) {
            console.log(err)
        }

    }
    static about = async (req, res) => {
        res.render('about')

    }
    static contact = async (req, res) => {
        res.render('contact')
    }

    static contact_insert = async (req, res) => {
        try {
            // console.log(req.body)

            const result = new ContactModel({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                message: req.body.message
            })
            await result.save();
            res.redirect('/contact')

        }
        catch (err) {
            console.log(err)
        }

    }



    static blog = async (req, res) => {
        const result = await BlogModel.find()
        res.render('blog', { data: result })
    }
    static login = async (req, res) => {
        res.render('login',{ message: req.flash("error") })
    }

    static detail = async (req, res) => {

        // console.log(req.params.id)
        try {
            const result1 = await CategoryModel.find()
            const result2 = await BlogModel.findById(req.params.id)
            const result3 = await BlogModel.find()

            // console.log(result)
            res.render('detail', { data: result2, cat: result1, info: result3 })

        }
        catch (err) {
            console.log(err)
        }
    }

    static detailbycat = async (req, res) => {

        try {
            // console.log(req.params.catname)
            const catname = req.params.catname
            // console.log(catname)
            const result = await BlogModel.find({ category_name: catname })
            // console.log(result)
            res.render('front/detailbycat', { cat: result }, { catname: catname })

        }
        catch (err) {
            console.log(err)
        }



    }







}



module.exports = FrontController
