import Vue from 'vue-native-core';
import Vuex from 'vuex';

import client from '../socketClient.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        logged_in: false,
        ip: null,
        username: null
    },
    mutations: {
        login (state, {ip, username}) {
            state.logged_in = true;
            state.ip = ip;
            state.username = username;
        }
    },
    actions: {
        login (context, {ip, username, password, callback}) {

            if (!ip.startsWith('http://') || !ip.startsWith('https://'))
                ip = 'http://' + ip;

            client.connect(ip, username, password, (success, message) => {
                if (success)
                    context.commit('login');
                
                if (callback)
                    callback(success, message);
            });
        }
    }
});

export default store;