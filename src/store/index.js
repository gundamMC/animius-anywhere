import Vue from 'vue-native-core';
import Vuex from 'vuex';

import auth from './auth';
import waifu from './waifu';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        waifu
    }
});

export default store;