import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activateTab: 0
    },
    mutations: {
        setActivateTab(state, payload) {
            state.activateTab = payload
        }
    },
})
