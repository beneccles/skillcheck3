// Initial State
const initialState = {
    username: "",
    name:"",
    id: null,
    profile: "",
    loggedIn: false,
    // user: null
}

// ACTION CONSTS
const UPDATE_USER = 'UPDATE_USER'
const LOGOUT = 'LOGOUT'

// ACTION BUILDERS
export const updateUser = (userObj) => {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}



// Reducer Function
const reducer = (state = initialState, action) => {
    const {payload, type} = action
    switch (type) {
        case LOGOUT:
            // Clear state
            return initialState;
        case UPDATE_USER:
            console.log(payload)
            return {...state, ...payload}
        default:
            return state;
    }
}

export default reducer