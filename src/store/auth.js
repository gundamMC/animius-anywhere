import client from '../socketClient.js';

const state = {
    loggedIn: false,
    ip: null,
    username: null
}

const mutations = {
    login (state, {ip, username}) {
        state.loggedIn = true;
        state.ip = ip;
        state.username = username;
    }
}

const actions = {
    login (context, {ip, username, password, callback}) {

        if (!ip.startsWith('http://') || !ip.startsWith('https://'))
            ip = 'http://' + ip;

        client.connect(ip, username, password, (success, message) => {
            if (success){
                context.commit('login', {ip, username});
                context.dispatch('getWaifuList');
            }
                
            
            if (callback)
                callback(success, message);
        });
    }
}

const getters = {
    loggedIn (state) {
        return state.loggedIn;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}