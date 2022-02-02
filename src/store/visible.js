const visibleModule ={
    actions: {
        changeVisible({commit, state}, blockName){
            for(let item in state){
                if(item === blockName){
                    if(state[item] === false){
                        commit('changeVisible', {value: true, title: blockName})
                    } else {
                        commit('changeVisible', {value: false, title: blockName})
                    }
                } else {
                    commit('changeVisible', {value: true, title: item})
                }
            }
        },
    },
    mutations: {
        changeVisible(state, value){
            state[value.title] = value.value
        },
    },
    state: {
        navVisible: true,
        logVisible: true,
        cartVisible: true,
    }
}

export default visibleModule