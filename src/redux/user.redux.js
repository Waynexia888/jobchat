import axios from "axios";
import { getRedirectPath } from '../util'

const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const AUTH_SUCCESS = 'AUTH_SUCCESS'

const initState = {
    redirectTo: '',
    msg: '',
    user: '',
    type: ''
}

// reducer
export function user(state=initState, action){
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                msg: '',
                redirectTo: getRedirectPath(action.payload),
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

export const authSuccess = (data) => ({
    type: AUTH_SUCCESS,
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
                    dispatch(authSuccess(res.data.data))
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
                dispatch(authSuccess({user, pwd, type}))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
    
}

export function update(data){
    return dispatch => {
        axios.post('/user/update', data)
        .then((res) => {
            if (res.status === 200 && res.data.code === 0){
                dispatch(authSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}