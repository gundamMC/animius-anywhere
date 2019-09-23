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

function getWaifus(callback){
    // callback to update the ui based on waifu data
    socket.emit('getWaifu', callback);
}

function sendMessage(waifu_id, message, callback){
    socket.emit('message', {name: waifu_id, message: message}, callback);
}

export default {connect: connect, register: register, getWaifus: getWaifus, sendMessage: sendMessage}