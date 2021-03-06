const path = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socket(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => { 
    console.log(`New user connected, ${socket.id}`);

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);

        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            id: socket.id
        });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
}); 


