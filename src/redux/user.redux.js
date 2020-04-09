import axios from "axios";

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
    isAuth: false,
    msg: '',
    user: '',
    pwd: '',
    type: ''
}

// reducer
export function user(state=initState, action){
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state, msg:'', isAuth: true, ...action.payload}
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg}
        default:
            return state  
    }
}

export const registerSuccess = (data) => ({
    type: REGISTER_SUCCESS,
    payload: data
})

export const errorMsg = (msg) => ({
    type: ERROR_MSG,
    msg
})


export function register({user, pwd, repeatpwd, type}) {
    if (!user || !pwd || !type) {
        return errorMsg('Please enter your username and password.')
    }
    if (pwd !== repeatpwd){
        return errorMsg('Your password and confirmation password do not match.')
    }
    return dispatch => {
        axios.post('/user/register', {user, pwd, type})
        .then((res) => {
            if (res.status === 200 && res.data.code === 0){
                dispatch(registerSuccess({user, pwd, type}))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
    
}