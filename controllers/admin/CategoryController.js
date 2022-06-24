const CategoryModel = require('../../models/category')

class CategoryController{

    static allcategory = async(req,res)=>{
        res.render('admin/category/all_category')
    }

    static catergory_insert = async(req,res)=>{
        //console.log(req.body)
        try{
            const result = new CategoryModel({
                category_name : req.body.category_name
            })
            await result.save()
            res.redirect('/admin/category')
        }
        catch(err) {
            console.log(err)
        }


    }






}



module.exports = CategoryController