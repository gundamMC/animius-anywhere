import Vue from 'vue-native-core';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        logged_in: false
    },
    mutations: {
        login (state){
            state.logged_in = true
        }
    }
});

export default store;