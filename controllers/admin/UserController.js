const UserModel = require("../../models/User")
const bcrypt = require('bcrypt')
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
                        const salt = await bcrypt.genSalt(10)
                        const hash_Password = await bcrypt.hash(password, salt)
                        const result = await UserModel({
                            name: name,
                            email: email,
                            password: hash_Password
                        })
                        await result.save()
                        res.redirect('/login')
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


    static verify_login = async (req, res) => {
        try {
            const { email, password } = req.body
            // console.log(email);
            if (email && password) {
                const user = await UserModel.findOne({ email: email })
                if (user != null) {
                    const isMatch = await bcrypt.compare(password, user.password)
                    if ((user.email === email) && isMatch) {
                        res.redirect("/admin/dashboard")
                    }
                    else {
                        req.flash('error', 'email or password is not match')
                        return res.redirect("/login")
                    }

                }
                else {
                    req.flash('error', 'You are not a registered user')
                    return res.redirect("/login")
                }

            }
            else {
                req.flash('error', 'All fields are required.')
                return res.redirect("/login")
            }

        }
        catch (err) {
            console.log(err)
        }

    }










}

module.exports = UserController