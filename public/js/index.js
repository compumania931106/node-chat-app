var socket = io();

socket.on('connect', function () {
    console.log('Connected tu server');

    socket.emit('createEmail', {
        to: 'prueba@gmail.com',
        text: 'Esto es un email de prueba',
        createAt: 1234
    });
});

socket.on('disconnect', function () {
    console.log('Disconected from server');
});

socket.on('newEmail', function (email) {
    console.log('New email', email);
});