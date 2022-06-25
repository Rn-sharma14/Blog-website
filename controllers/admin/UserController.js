const UserModel = require("../../models/User")

class UserController{

static signup = (req,res)=>{

    res.render('front/signup')

}

static signup_insert = async(req,res)=>{
    try{
        // console.log(req.body)

        const result = new UserModel({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        })
        await result.save()
        res.redirect('/login')
    }
    catch(err){
        console.log(err)
    }


}











}

module.exports = UserController