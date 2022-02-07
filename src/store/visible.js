const visibleModule = {
    state:{
        navigation: true,
        miniCart: true,
        account: true,
    },
    actions:{
        changeVisibleA({commit, state}, blockName){
            for(let item in state){
                if(item === blockName){
                    if(state[item] === false){
                        commit('changeVisibleM', {value: true, title: blockName})
                    } else {
                        commit('changeVisibleM', {value: false, title: blockName})
                    }
                } else {
                    commit('changeVisibleM', {value: true, title: item})
                }
            }
        },
    },
    mutations: {
        changeVisibleM(state, value){
            state[value.title] = value.value
        },
    },
}
export default visibleModule