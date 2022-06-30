const ContactModel = require('../../models/Contact')

class ContactController {

    static contact = async (req, res) => {
        try {
            const result = await ContactModel.find()

            res.render('admin/contact/contact', { contact: result })

        }
        catch (err) {
            console.log(err)
        }

    }














}





module.exports = ContactController