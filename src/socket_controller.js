import './global.js'
const net = require('net');
// TODO: Having issues with linking
// try manual linking with xcode/Android studio
// https://github.com/PeelTechnologies/react-native-tcp/issues/90

console.log('init socket!');

// connection variables
socketClient = null;
username = null;
password = null;

connected = false;  // false until logged in

// dictionary of [id] -> functions
// called when receive response with corresponding id
callbacks = {}

function connect(IP, connect_username=null, connect_password=null, success_callback=()=>{}, fail_callback=(msg)=>{}){

    if (connect_password != null && /\S/.test(connect_password)){
        password = connect_password; 
    }
    if (connect_username != null && /\S/.test(connect_username)){
        username = connect_username; 
    }

    var port = 23333
    // default value

    if (IP.includes(':')){
        IP, port = IP.split('')
        port = parseInt(port)
    }
    
    var socketClient = net.connect({host:IP, port:port});

    socketClient.on('error', (data) => {
        connected = false;
        console.log('error! ' + data);
        fail_callback(data);
    });

    socketClient.on('close', (data) => {
        key = null;
        iv = null;
        connected = false;
        console.log('closed');
    });

    socketClient.on('end', function() {
        console.log('data ended!!');
    });

    socketClient.on('data', (data) => {

        console.log('data received!');

        if (!connected) {

            // connection established
            connected = true;
            success_callback();
        
            // the first packet send back upon sending password is blank
            if (password != null) return;
        }

        console.log(data.toString())

        var json = JSON.parse(data.toString());

        if (json.id in callbacks){
            callbacks[json.id](json.status, json.message, json.data);
        }
        // this should be true for every case, but leaving it in here just to be safe...
    });

    send(`${username},${password}`)
}

function send(str_data){

    console.log('sending: ' + str_data);

    var data_bytes = Buffer.from(str_data, 'utf8'); //aesjs.utils.utf8.toBytes(str_data);
    // data_bytes = aesjs.padding.pkcs7.pad(data_bytes);

    // var encrypted = aesCbc.encrypt(data_bytes);
    // var b64_data = base64ArrayBuffer(encrypted);

    socketClient.write(data_bytes);
}

function get_waifu_list(waifu, success_func){

    var id = String(Date.now());

    var message = { command: 'getWaifu', id: id, arguments: {}};

    message = JSON.stringify(message);

    console.log(message)

    callbacks[id] = (status, message, data) => {

        console.log('status: ' + status + 'with data: ');
        console.log(data);

        if (status == 0){
            console.log('success');
            // success
            success_func(data);
        }
    }

    send(message);
}

export default socket = {
    connect: connect,
    get_waifu_list: get_waifu_list
}