const goods ={
    actions:{
        addGood({commit, state}, item){
            if(item.quantity){
                let find = state.cartGoods.find(el=> el.id === item.id)
                commit('addQuantity', find)
            } else {
                let newGood = Object.assign(item, {quantity: 1})
                commit('addGood', newGood)
            }
        },
        counter({commit}){
            commit('counter', 3 )
        },
        filtered({commit, state}, category){
            let regExp = new RegExp(`^${category}`, "i");
            let filterArr = state.goods.filter((good) => regExp.test(good.category))
            commit('filtered', filterArr)
        },
        removeGood({commit,state}, item){
            let find = state.cartGoods.find(good => good.id === item.id)
            commit('removeGood', find)
        }
    },
    mutations: {
        counter(state, value){
            state.count += value
        },
        addGood(state, newGood){
            state.cartGoods.push(newGood)
            state.counterGoods++
        },
        addQuantity(state, find){
            find.quantity++
            state.counterGoods++
        },
        filtered(state, filterArr){
            console.log()
            state.filterGoods = filterArr
            state.count = 3
        },
        removeGood(state, find){
            state.cartGoods.splice(state.cartGoods.indexOf(find), 1)
            state.counterGoods = 0
        }
    },
    state: {
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
        counterGoods: 0,
        count: 3,
    },
    getters: {
    },
}

export default goods