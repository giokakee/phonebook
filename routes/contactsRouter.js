require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')
const Contact = require('../models/contact')


router.post('/all',async (req,res) => {
    try{
        let userFromToken = await jwt.verify(req.body.token, process.env.SECRET)
        let contacts = await Contact.find({author: userFromToken.id})
        res.json(contacts)
    }catch(err){
        console.log({
            message: err.message
        })
        res.json(false)
    }
})


router.post('/add', async (req,res) => {
    try{
        let userFromToken = await jwt.verify(req.body.token, process.env.SECRET)
        let user = await User.findById({_id: userFromToken.id})
        let newContact = new Contact({name: req.body.name, number: req.body.number, author: userFromToken.id})
      
        user.contacts = [...user.contacts, newContact.id ]
        
        await newContact.save()
        await user.save()

        res.json(newContact)
    }catch(err){
        console.log({
            message: err.message
        })
        res.json(false)
    }
})

router.post('/edit', async (req,res) => {
    try{
        console.log(req.body.number)
        console.log(Number(req.body.number))
            await Contact.findByIdAndUpdate( req.body.id , {name: req.body.name, number: req.body.number})
        
          res.json(true)
    }catch(err){
        console.log({
            message: err.message
        })
        res.json(false)
    }
})


router.delete('/', async (req,res) => {
    try{
        let userFromToken = await jwt.verify(req.body.token, process.env.SECRET)
        let user = await User.findById({_id: userFromToken.id})
        await Contact.findByIdAndDelete({_id: req.body.id})
        user.contacts = user.contacts.filter(f => f.id !== req.body.id)
        await user.save()
        console.log('deleted succesfuly')
        res.json(true)
    }catch(err){
        console.log({
            message: err.message
        })
        res.json(false)
    }
})



module.exports = router