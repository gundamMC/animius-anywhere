import client from '../socketClient.js';

const state = {
    waifuList: []
}

const mutations = {
    setWaifuList(state, newWaifuList){
        state.waifuList = newWaifuList;
    }
}

const actions = {
    getWaifuList (context, callback) {
        client.getWaifus((success, message) => {
            if (callback)
                callback(success, message);
        });
    }
}

const getters = {
    waifuList (state) {
        return state.waifuList;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}