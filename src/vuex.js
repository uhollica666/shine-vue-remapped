// import Vue from 'vue';
import Vuex from 'vuex';


//create state for user
const state = {
    user: null
};

//create store for user
const store = new Vuex.Store({
    state,
    getters: {
        user: (state) => {
            return state.user;
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user);
        }
    },
    mutations: {
        user(state, user){
            state.user = user;
        }
    }
});

//export defaults
export default store;