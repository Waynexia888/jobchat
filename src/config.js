import axios from 'axios';
import { Toast } from 'antd-mobile';

//拦截请求
axios.interceptors.request.use((config) => {
    Toast.loading('loading', 0)
    return config
})

//拦截回应
axios.interceptors.response.use((config) => {
    setTimeout(() => {
        Toast.hide()
    }, 2000)
    
    return config
})