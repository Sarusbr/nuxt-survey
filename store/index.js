export const state = function() {
    return{
        pageTitle:"",
        description:""
    }
}

export const mutations = {
    setTitle(state,title){
        state.pageTitle = title;
    },
    setDescription(state,description){
        state.description = description;
    }
}

export const getter = {
    desc(state){
        return state.description;
    }
}