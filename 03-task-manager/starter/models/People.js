const mongoose = require('mongoose')

const PeopleSchema = new mongoose.Schema({
    name:String, completed:Boolean
})

module.exports = mongoose.model('People', PeopleSchema)