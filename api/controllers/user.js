const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')


const registerController = (req, res, next) =>{
   bcrypt.hash(req.body.password, 10, (err, hash) => {
       if(err){
            res.json(err);
        }
        let user = new User({
            email: req.body.email,
            password: hash
        })
        user.save()
            .then(result => {
                res.json({
                    messsate: 'user created successfully',
                    result
                })
            })
            .catch(err => {req.json(err)})

   })
}

const getAllUser = (req, res, next) => {
    User.find()
        .then(result => res.json(result))
        .catch(err => {
            res.json(err)
            console.log(err)
        })
}

const loginController = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({email})
        .then(user => {
            if(user){
                bcrypt.compare(password, user.password, (err, result) =>{
                    if(err){
                        res.Json({message: "Error Occured"})
                    }
                    if(result){
                        let token = jwt.sign({email:user.email, _id: user._id},"secretKey", {expiresIn:'2h'})

                        res.json({
                            message: 'Login Successfull',
                            token
                        })
                    }
                    else{
                        res.json({message: 'Password dosen\'t match'})
                    }
                })
            }
            else{
                res.json({message: 'User Not found. Please give correct email and password'})
            }
        })
        .catch(err => {
            res.json(err);
        })
}

module.exports={
    registerController,
    getAllUser,
    loginController
}