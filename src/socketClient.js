const io = require('socket.io-client');

var socket = io("http://localhost:5000/");


socket.on('connect', () => {
    console.log(socket.connected); // true
    socket.emit('auth', {username: 'username test', password: 'p@ssWORD123'}, (data)=>{
        // callback
        console.log('received');
        console.log(data);

        if (data == true){
            // log in success
        }
        else{
            // failure, data should be the error message
            console.log(data);
        }
    });
  });

socket.on('disconnect', (reason) => {
    console.log(reason);
    }
)