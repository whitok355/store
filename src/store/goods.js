import storage from './storage'

const goods ={
    actions:{
        addGood({ commit, state }, item){
            if(state.cartGoods.length > 0){
                let find = state.cartGoods.find(el => el.id === item.id)
                if (find) {
                    commit('addQuantity', item);
                } else {
                    commit('addGood', item);
                }
            } else {
                commit('addGood', item);
            }
            commit('getCartGoods');
        },
        getCartGoods({commit}){
            commit('getCartGoods')
        },  
        counter({commit}){
            commit('counter', 3 )
        },
        filtered({commit, state}, category){
            let regExp = new RegExp(`^${category}`, "i");
            let filterArr = state.goods.filter((good) => regExp.test(good.category))
            commit('filtered', filterArr)
        },
        removeGood({ commit }, item){
            commit('removeGood', item)
        }
    },
    mutations: {
        counter(state, value){
            state.count += value
        },
        filtered(state, filterArr){
            state.filterGoods = filterArr
            state.count = 3
        },
        getCartGoods(state){
            state.cartGoods = state.dataStorage.get('cartGoods', new Array())
        },
        addGood(state, item){
            state.dataStorage.set('cartGoods', Object.assign(item, {quantity: 1}))
        },
        addQuantity(state, item){
            state.cartGoods = state.dataStorage.change('cartGoods', item)
        },
        removeGood(state, item){            
            state.dataStorage.remove('cartGoods', item)
            state.cartGoods = state.dataStorage.get('cartGoods')
        }
    },
    state: {
        dataStorage: storage,
        goods: [
            {
                id: 0,
                title: 'ELLERY X M"O CAPSULE',
                category: 'men',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$52.00',
                size:'XL',
                color: 'Black',
            },
            {
                id: 1,
                title: 'ELLERY X M"O CAPSULE',
                category: 'women',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$152.00',
                size: 'L',
                color: 'Black'
            },
            {
                id: 2,
                title: 'ELLERY X M"O CAPSULE',
                category: 'men',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$1132.00',
                size: 'M',
                color: 'Red', 
            },
            {
                id: 3,
                title: 'ELLERY X M"O CAPSULE',
                category: 'men',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$132.00',
                size: 'S',
                color: 'Black',
            },
            {
                id: 4,
                title: 'ELLERY X M"O CAPSULE',
                category: 'women',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$32.00',
                size: 'XL',
                color: 'Black',
            },
            {
                id: 5,
                title: 'ELLERY X M"O CAPSULE',
                category: 'women',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$332.00',
                size: 'S',
                color: 'Red',
            },
            {
                id: 6,
                title: 'ELLERY X M"O CAPSULE',
                category: 'men',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$1332.00',
                size: 'L',
                color: 'Black',
            },
            {
                id: 7,
                title: 'ELLERY X M"O CAPSULE',
                category: 'men',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$32332.00',
                size: 'XL',
                color: 'White',
            },
            {
                id: 8,
                title: 'ELLERY X M"O CAPSULE',
                category: 'men',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$832.00',
                size: 'M',
                color: 'Black',
            },
            {
                id: 9,
                title: 'ELLERY X M"O CAPSULE',
                category: 'men',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$500.00',
                size: 
                    'XL',
                color: 'Red',
            },
            {
                id: 10,
                title: 'ELLERY X M"O CAPSULE',
                category: 'men',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$98.00',
                size: 'L',
                color: 'White',
            },
            {
                id: 11,
                title: 'ELLERY X M"O CAPSULE',
                category: 'men',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$900.00',
                size: 'XL',
                color: 'White',
            },
            {
                id: 11,
                title: 'ELLERY X M"O CAPSULE',
                category: 'fetured',
                discription: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                price: '$52.00',
                size: 'XL',
                color: 'Red',
            },
        ],
        cartGoods:[
        ],
        filterGoods:[
        ],
        count: 3,
    },
    getters: {
    },
}

export default goods