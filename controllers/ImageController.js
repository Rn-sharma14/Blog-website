const imageModel = require("../models/Image")

class ImageController {

    static createImage = async (req, res) => {
        res.render('image/createImage')


    }

    static imageInsert = async (req, res) => {
        // console.log(req.body)
        // console.log(req.file.filename);

        try {
            const result = new imageModel({
                title: req.body.title,
                // image:req.body.image  // By this only image name is inserted.
                image: req.file.filename
            })
            // console.log(filename)
            await result.save()
            res.redirect('/create_image')

        }
        catch (err) {
            console.log(err)
        }
    }


    static displayimage = async (req, res) => {
        try {

            const result = await imageModel.find()
            // console.log(result)
            res.render('image/displayimage', { image: result })


        }
        catch (err) {
            console.log(err)
        }

    }



    static edit_image = async (req, res) => {
        try {
            const result = await imageModel.findById(req.params.id)
            // console.log(result)
            res.render('image/editimage', { edit: result })


        }
        catch (err) {
            console.log(err)
        }

    }

    static image_update = async (req, res) => {

        try {
            if (req.file) {
                var imagefile = req.file.filename;
            }

            const result = await imageModel.findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                image: imagefile
            })
            await result.save()
            res.redirect('/displayimage');
            // console.log(result)

        }
        catch (err) {
            console.log(err)
        }


    }


    static delete_image = async (req, res) => {
        try {
            const result = await imageModel.findByIdAndDelete(req.params.id)
            res.redirect('/displayimage')
        }
        catch (err) {
            console.log(err)
        }



    }










}



module.exports = ImageController