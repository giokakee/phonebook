const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const contactSchema = new mongoose.Schema({
    name: String,
    number: Number,
    author: String
})


contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

contactSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Contact', contactSchema)