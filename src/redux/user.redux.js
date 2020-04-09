import axios from "axios";
import { getRedirectPath } from '../util'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCESS = 'LOGIN_SUCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
    isAuth: false,
    msg: '',
    user: '',
    type: ''
}

// reducer
export function user(state=initState, action){
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                msg: '',
                redirectTo: getRedirectPath(action.payload),
                isAuth: true,
                ...action.payload
            }
        case LOGIN_SUCESS:
            return {
                ...state,
                msg: '',
                redirectTo: getRedirectPath(action.payload),
                isAuth: true,
                ...action.payload
            }
        case LOAD_DATA:
            return {...state, ...action.payload}
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

export const loginSuccess = (data) => ({
    type: LOGIN_SUCESS,
    payload: data,
})

export const loadData = (userinfo) => ({
    type: LOAD_DATA,
    payload: userinfo
})

export const errorMsg = (msg) => ({
    type: ERROR_MSG,
    msg
})

export function login({user, pwd}){
    if (!user || !pwd){
        return errorMsg('Login failed. Please enter a valid login username and password')
    }
    return dispatch => {
        axios.post('/user/login', {user, pwd})
            .then((res) => {
                if (res.status === 200 && res.data.code === 0){
                    dispatch(loginSuccess(res.data.data))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
        })
    }
}

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