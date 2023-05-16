import UserActionTypes from "./action-types";

const initialState = {
    user: null,
    info: null
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.REGISTER_REQUEST:
            return { ...state, user: action.payload.user, info: action.payload.status}

        case UserActionTypes.REGISTER_SUCCESS:
            return { ...state, user: action.payload, info: action.payload}

        case UserActionTypes.REGISTER_FAILURE:
            return { ...state, user: null, info: action.payload}
        default:
            return state
    }
}

export default registerReducer