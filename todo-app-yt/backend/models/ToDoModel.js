const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({
    text:
          {
        type: String,
        require: true
     }
 })
          I
module.exports = mongoose.model('ToDo', todoSchema)
