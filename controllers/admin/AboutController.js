const AboutModel = require('../../models/About')

class AboutController {

    static about = async (req, res) => {
        try {
            const result = await AboutModel.find()
            // console.log(result);
            res.render('admin/about/about', { about: result })

        }
        catch (err) {
            console.log(err);
        }

    }






}





module.exports = AboutController