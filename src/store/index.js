import {createStore} from 'vuex';

const store = createStore({
    state: {
        category: {
            women: {title: 'women', text:'30% OFF'},
            men: {title: 'men', text: 'HOT DEAL'},
            kids: {title: 'kids', text: 'NEW ARRIWALS'},
            accesories: {title: 'accesories', text: 'LUXIROUS & TRENDY'},
        },
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
        filterGoods: [
        ],
        cartGoods:[
        ],
        counterGoods: 0,
        serviceArr: [
            {
                icon: 'delivery',
                title: 'Free Delivery',
                discription: 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.',
            },
            {
                icon: 'sales',
                title: 'Sales & discounts',
                discription: 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.',
            },
            {
                icon: 'quality',
                title: 'Quality assurance',
                discription: 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.',
            }
        ],
        navVisible: true,
        logVisible: true,
        cartVisible: true,
        count: 3,
    },
    mutations: {
        counter(state, value){
            state.count += value
        },
        changeVisible(state, value){
            state[value] = !state[value]
        },
        filtered(state, filterArr){
            state.filterGoods = filterArr
            state.count = 3
        },
        addGood(state, newGood){
            state.cartGoods.push(newGood)
            state.counterGoods++
        },
        addQuantity(state, find){
            find.quantity++
            state.counterGoods++
        }
    },
    actions: {
        counter({commit}){
            commit('counter', 3 )
        },
        filtered({commit, state}, category){
            let regExp = new RegExp(`^${category}`, "i");
            let filterArr = state.filterGoods = state.goods.filter((good) => regExp.test(good.category))
            commit('filtered', filterArr)
        },
        changeVisible({commit}, value){
            commit('changeVisible', value)
        },
        addGood({commit, state}, item){
            if(item.quantity){
                let find = state.cartGoods.find(el=> el.id === item.id)
                commit('addQuantity', find)
            } else {
                let newGood = Object.assign(item, {quantity: 1})
                commit('addGood', newGood)
            }
        }
    }
})

export default store