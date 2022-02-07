import { createStore } from 'vuex'
import visibleModule from './visible'
import storage from './storage'

const store = createStore({
    state:{
        goods: [
                {
                    id: 0,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'men',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '52.00',
                    size:'XL',
                    color: 'Black',
                },
                {
                    id: 1,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'women',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '152.00',
                    size: 'L',
                    color: 'Black'
                },
                {
                    id: 2,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'men',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '1132.00',
                    size: 'M',
                    color: 'Red', 
                },
                {
                    id: 3,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'men',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '132.00',
                    size: 'S',
                    color: 'Black',
                },
                {
                    id: 4,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'women',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '32.00',
                    size: 'XL',
                    color: 'Black',
                },
                {
                    id: 5,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'women',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '332.00',
                    size: 'S',
                    color: 'Red',
                },
                {
                    id: 6,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'men',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '1332.00',
                    size: 'L',
                    color: 'Black',
                },
                {
                    id: 7,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'men',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '32332.00',
                    size: 'XL',
                    color: 'White',
                },
                {
                    id: 8,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'men',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '832.00',
                    size: 'M',
                    color: 'Black',
                },
                {
                    id: 9,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'men',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '500.00',
                    size: 'XL',
                    color: 'Red',
                },
                {
                    id: 10,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'men',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '98.00',
                    size: 'L',
                    color: 'White',
                },
                {
                    id: 11,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'men',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '900.00',
                    size: 'XL',
                    color: 'White',
                },
                {
                    id: 11,
                    title: 'ELLERY X M"O CAPSULE',
                    category: 'fetured',
                    discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: '123123900.00',
                    size: 'XL',
                    color: 'White',
                },
        ],
        displayCount: 3,
        filterGoods: [],
        regExp: '',
        storageData: '',
    },
    actions: {
        browseMoreA({commit}){
            commit('browseMoreM')
        },
        filterA({commit, state}, value){
            let regExp = new RegExp(`^${value}`, 'i')
            let arr = state.goods.filter(el => regExp.test(el.category))
            commit('filterM', arr)
            commit('updateDisplayCounteM', 3)
        },
        updateDisplayCounteA({commit}){
            commit('updateDisplayCounteM')
        },
        getLocalStorageA({commit}, name){
            commit('getLocalStorageM', storage.get(name))
        },
        addGoodA({commit}, {good, name}){
            commit('addGoodM', storage.set(good, name))
        },
        removeA({commit}, {item, name}){
            commit('removeM', storage.remove(item, name))
        },
        removeAllA({commit}, name){
            commit('removeAllM', storage.removeAll(name))
        }
    },
    mutations:{
        browseMoreM(state){
            state.displayCount += 3
        },
        updateDisplayCounteM(state){
            state.displayCount = 3
        },
        filterM(state, arr){
            state.filterGoods = arr
        },
        getLocalStorageM(state, arr){
            state.storageData = arr
        },
        addGoodM(state, arr){
            state.storageData = arr
        },
        removeM(state, arr){
            state.storageData = arr
        },
        removeAllM(state, arr){
            state.storageData = arr
        }
    },
    getters:{
        browseMoreG: state => titleArr => {
            return state[titleArr].slice(0, state.displayCount)        
        }
    },
    modules:{
        visibleModule,
        storage
    }
})

export default store