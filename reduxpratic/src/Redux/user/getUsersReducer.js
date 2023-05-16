import UserActionTypes from "./action-types";

const initialState = {
    dados: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.GET_USUARIOS_SUCCESS:
            return {
                ...state,
                dados: action.payload
            }
        default:
            return state
    }
}

export default usersReducer