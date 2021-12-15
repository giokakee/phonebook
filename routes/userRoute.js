const userRouter = require('express').Router();
const User = require('../models/userSchema')
const bcrypt = require('bcrypt');
const salt = 7;
const jwt = require('jsonwebtoken');

userRouter.get('/',async (req,res) => {
    try{
        let allUser = await User.find({})

        res.json(allUser)
    }catch(err){
        console.log({
            message: err.message
        })
    }
})


userRouter.post('/register', async (req,res) => {        
    try{
        let passwordHashed = await bcrypt.hash(req.body.password, salt)
        let user = new User({
            ...req.body,
            password: passwordHashed
        })

        await user.save()
        res.json(true)

    }catch(err){
        console.log({
            message: err.message
        })
        res.json(false)
    }
})

userRouter.post('/login', async (req,res) => {
   
    try{
        if(req.body.token){
            let userFromToken = await jwt.verify(req.body.token, process.env.SECRET)
            console.log('this is with token')
            return res.json({token: req.body.token, username: userFromToken.username})
        }

        let user = await User.findOne({username: req.body.username})
        let passwordIsCorrect = user === null
        ? false
        : await bcrypt.compare(req.body.password, user.password)

        if(!(user && passwordIsCorrect)){
            res.json(false)
        }

        let token = await jwt.sign(
            {
                username: user.username,
                id: user.id
            },
            process.env.SECRET,
            {expiresIn: 60 * 60 * 24}
        )

        res.json({token, username: user.username})
    }catch(err){
        console.log({message:err.message})
        res.json(false)
    }
})



module.exports = userRouter