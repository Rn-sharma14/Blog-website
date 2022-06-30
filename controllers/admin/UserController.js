const UserModel = require("../../models/User")

class UserController {

    static signup = (req, res) => {

        res.render('front/signup', { message: req.flash("error") })

    }

    static signup_insert = async (req, res) => {

        const { name, email, password, cnpassword } = req.body
        const user = await UserModel.findOne({ email: email })
        if (user) {
            req.flash('error', 'email already exists')
            return res.redirect("/signup")
        }
        else {
            if (name && email && password && cnpassword) {
                if (password === cnpassword) {
                    try {
                        const result = await UserModel({
                            name: name,
                            email: email,
                            password: password
                        })
                        await result.save()
                        res.redirect('/signup')
                    }
                    catch (err) {
                        console.log(err)
                    }

                }
                else {
                    req.flash('error', 'Password and confirm password does not match! ')
                    return res.redirect("/signup")

                }
            }
            else {
                req.flash('error', 'All fields are required.')
                return res.redirect("/signup")
            }
        }




    }











}

module.exports = UserController