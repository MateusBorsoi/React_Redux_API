import UserActionTypes from "./action-types";
import usersFetch from '../../axios/config'

export const loginUser = (payload) => ({
    type: UserActionTypes.LOGIN,
    payload,
})

export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT,
})


export const registerUserRequest = (payload) => ({
    type: UserActionTypes.REGISTER_REQUEST,
    payload
})

export const registerUserSuccess = (payload) => ({
    type: UserActionTypes.REGISTER_SUCCESS,
    payload
})

export const registerUserFailure = (payload) => ({
    type: UserActionTypes.REGISTER_FAILURE,
    payload
})

export const registerUser = (user) => async (dispatch) => {

    try {
        const response = await usersFetch.post('/users', user)
        if (response) {
            dispatch(registerUserSuccess({ user: response.data.user, status: response.status }))
        }
    } catch (error) {
        if (error.response && error.response.status === 409) {
            dispatch(registerUserFailure({ mensagem: "Email já cadastrado", status: error.response.status }))
        } else {
            dispatch(registerUserFailure({ mensagem: 'Erro ao cadastrar usuário', status: error.response.status }))
        }
    }
}

export const get_usuarios = () => {
    return (dispatch) => {
        dispatch({ type: UserActionTypes.GET_USUARIOS_REQUEST })
        usersFetch.get('/users')
            .then(response => {
                dispatch({
                    type: UserActionTypes.GET_USUARIOS_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: UserActionTypes.GET_USUARIOS_FAILURE,
                    payload: error.message
                })
            })

    }
}