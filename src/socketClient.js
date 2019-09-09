import io from 'socket.io-client';

var socket = null;

function connect(ip, username, password, callback){
    console.log(`connecting to ${ip}`);
    socket = io(ip,  {
        transports: ['websocket'],
      });

    socket.on('connect', () => {

        console.log('connected');

        socket.emit('auth', {username: username, password: password}, (data)=>{
            // callback
            console.log('connected');

            if (data == true){
                // log in success
                console.log('logged in');
                if (callback)
                    callback(true, null);
            }
            else{
                // failure, data should be the error message
                console.log(data);
                if (callback)
                    callback(false, data);
            }
        });
    });

    socket.on('disconnect', (reason) => {
        console.log(reason);
        }
    )
}

function register(username, password){
    socket.emit('register', {username: username, password: password}, (data) => {
        if (data == true){
            console.log('registeration success');
        }
        else{
            console.log(data);
        }
    })
}

export default {connect: connect, register: register}