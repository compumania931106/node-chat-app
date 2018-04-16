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

    socket.emit('newMessage', {
        from: 'Gabriela',
        text: 'Hello jajajaja',
        createdAt: 12345
    });

    socket.on('createEmail', (newEmail) => {
        console.log( 'createEmail', newEmail );
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
}); 


