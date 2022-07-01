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

//create state for accommodation
// const state2 = {
//     accommodation: null
// };

// // create store for accommodation
// const store2 = new Vuex.Store({
//     state2,
//     getters: {
//         accommodation: (state2) => {
//             return state2.accommodation;
//         }
//     },

//     actions: {
//         accommodation(context, accommodation) {
//             context.commit('accommodation', accommodation);
//         }
//     },
//     mutations: {
//         accommodation(state2, accommodation) {
//             state2.accommodation = accommodation;
//         }
//     }
// });


//export defaults
export default store;