const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const assRouter = require('./routers/assignmentRouter')
const db = require('./config/db')

const APPPORT = 3002

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.get('/',(req, res) => {
    res.send("homepage")
})

app.use('/api',assRouter)

app.listen(APPPORT, (err) => {
    console.log('Server Start on PORT '+APPPORT)
})