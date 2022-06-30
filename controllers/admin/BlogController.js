const BlogModel = require('../../models/Blog')
const CategoryModel = require('../../models/category')

class BlogController {
    static blog = async (req, res) => {
        try {
            const result = await BlogModel.find()
            // console.log(result)
            res.render('admin/blog/blog', { blog: result })
        }
        catch (err) {
            console.log(err)
        }

    }

    static createBlog = async (req, res) => {
        try {
            const result = await CategoryModel.find()
            //console.log(result)
            res.render('admin/blog/createBlog', { cat: result })
        }
        catch (err) {
            console.log(err)
        }

    }


    static blog_insert = async (req, res) => {
        try {
            // console.log(req.body)

            const result = new BlogModel({
                category_name: req.body.category_name,
                title: req.body.title,
                description: req.body.description,
                image: req.file.filename
            })
            await result.save()
            res.redirect('/admin/blog')

        }
        catch (err) {
            console.log(err)
        }

    }

    static delete = async (req, res) => {
        try {
            const result = await BlogModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/blog')
        }
        catch (err) {
            console.log(err)
        }
    }

    static edit = async (req, res) => {
        try {
            const result = await BlogModel.findById(req.params.id)
            // console.log(result)
            res.render('admin/blog/edit', { data: result })
        }
        catch (err) {
            console.log(err)
        }
    }

    static update = async (req, res) => {
        try {
            const result = await BlogModel.findByIdAndUpdate(req.params.id, req.body)
            await result.save()
            res.redirect('/admin/blog')
        }
        catch (err) {
            console.log(err)
        }
    }




    // To view and delete category

    static view_all = async (req, res) => {
        try {
            const result = await CategoryModel.find()
            // console.log(result)
            res.render('admin/blog/view_all_cat.ejs', { view: result })

        }
        catch (err) {
            console.log(err)
        }
    }


    static delete_cat = async (req, res) => {
        try {
            const result = await CategoryModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/view_all')
        }
        catch (err) {
            console.log(err)
        }
    }









}

module.exports = BlogController