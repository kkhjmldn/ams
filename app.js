const express = require('express')
const APPPORT = 8000
const app = express()
const socket = require('socket.io')

server = app.listen(APPPORT, () => {
    console.log(`Server run on port ${APPPORT}`)
})

io =  socket(server)

io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', (data) => {
        io.emit('RECEIVE_MESSAGE', data)
    })
})
