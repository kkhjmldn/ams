const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const assRouter = require('./routers/assignmentRouter')
const db = require('./config/db')
const socket = require('socket.io')


const APPPORT = 3002

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.get('/',(req, res) => {
    res.send("homepage")
})

app.use('/api',assRouter)

server = app.listen(APPPORT, (err) => {
    console.log('Server Start on PORT '+APPPORT)
})

io =  socket(server)

io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', (data) => {
        io.emit('RECEIVE_MESSAGE', data)
    })
})
