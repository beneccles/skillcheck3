// Initial State
const initialState = {
    username: "",
    name:"",
    id: null,
    profile: "",
    loggedIn: false,
    user: null
}

// ACTION CONSTS
const UPDATE_USER = 'UPDATE_USER'

// ACTION BUILDERS
export const updateUser = (userObj) => {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}



// Reducer Function
const reducer = (state = initialState, action) => {
    const {payload, type} = action
    switch (type) {
        case UPDATE_USER:
            return {...state, user: payload}
        default:
            return state;
    }
}

export default reducer