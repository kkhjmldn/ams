const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ams', {
    useNewUrlParser : true
}).catch( e => {
    console.error('Mongo Connection Error : ' + e.message)
})

mongoose.Promise = global.Promise

const db = mongoose.connection

module.exports = db