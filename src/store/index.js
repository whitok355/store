import {createStore} from 'vuex';
import categoryModule from './category';
import goodsModule from './goods';
import servicesModule from './services';
import visibleModule from './visible';

const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        categoryModule,
        goodsModule,
        servicesModule,
        visibleModule
    }
})
export default store