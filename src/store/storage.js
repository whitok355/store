const storage = {
    set(name, value){
        let arr = JSON.parse(localStorage[name])
        arr.push(value)
        localStorage[name] = JSON.stringify(arr)
    },
    get(name, value){
        if(localStorage[name]){
            return JSON.parse(localStorage[name])
        } else {
            localStorage.setItem(name, JSON.stringify(value))
        }
    },
    remove(name, item){
        let goods = this.get(name)
        goods.splice(goods.indexOf(this.findFunc(item, goods)), 1)
        localStorage[name] = JSON.stringify(goods)
    },
    change(name, item){
        let goods = this.get(name)
        this.findFunc(item, goods).quantity++
        localStorage[name] = JSON.stringify(goods)
    },
    findFunc(item, goods){
        return goods.find(el => el.id === item.id)
    }
}

export default storage