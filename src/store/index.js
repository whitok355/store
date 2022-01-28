import {createStore} from 'vuex';
import categoryModule from './category';
import goodsModule from './goods';
import servicesModule from './services';

const store = createStore({
    state: {
        navVisible: true,
        logVisible: true,
        cartVisible: true,
    },
    mutations: {
        changeVisible(state, value){
            state[value] = !state[value]
        },
    },
    actions: {
        changeVisible({commit}, value){
            commit('changeVisible', value)
        },
    },
    modules: {
        categoryModule,
        goodsModule,
        servicesModule
    }
})
export default store