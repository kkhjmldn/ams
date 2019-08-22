const mongoose = require('mongoose')

const Schema = mongoose.Schema

let assignmentSchema =  Schema({
    name : {type:String},
    done : {type:Boolean}
})

module.exports = mongoose.model("assignments", assignmentSchema)