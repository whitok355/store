const storage = {
    get(name){
        if(localStorage[name]){
            return JSON.parse(localStorage[name])
        } else{
            localStorage[name] = JSON.stringify({count: 0, totalSumm: 0, cartGoods:[]})
            return JSON.parse(localStorage[name])
        }
    },
    set(good, name){
        let arr = this.get(name)
        let find = arr.cartGoods.find(el => el.id === good.id)
        if(find){
            find.quantity++
            arr.count++;
            arr.totalSumm += +(good.price);
        } else {
            arr.cartGoods.push(Object.assign(good, {quantity: 1}));
            arr.totalSumm += +(good.price);
            if(arr.count === 0){
                arr.count = 1
            } else{
                arr.count++
            }
        }
        localStorage.cartGoods = JSON.stringify(arr)
        return arr
    },
    remove(item, name){
        let arr = this.get(name);
        let find = arr.cartGoods.find(el => el.id === item.id)
        if(find){
            arr.totalSumm -= (find.quantity * find.price)
            arr.count -= find.quantity
            arr.cartGoods.splice(arr.cartGoods.indexOf(find), 1)
        } else {
            console.log('This product was not found in the cart')
        }
        localStorage[name] = JSON.stringify(arr)
        return arr
    },
    removeAll(name){
        let arr = this.get(name);
        arr.cartGoods.splice(0, arr.cartGoods.length)
        arr.count = 0;
        arr.totalSumm = 0
        localStorage[name] = JSON.stringify(arr)
        return arr
    }
}

export default storage

