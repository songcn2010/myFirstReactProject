import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//引入semantic-ui-css
import 'semantic-ui-css/semantic.min.css'

//引入axios，配置成全局使用
import axios from 'axios';
React.Component.prototype.axios = axios;
//在其他组件中可以直接通过this.axios调用
//给axios配置baseURL
axios.defaults.baseURL = 'http://47.96.21.88:8086/';

//给axios配置拦截器,配置了响应拦截器必须在回调里面返回数据，才能在组件中接收到
axios.interceptors.response.use(function(response){
  // console.log(response)
  return response.data
},function(error){
  return error
})

//配置请求拦截器，在请求头中添加Authorization，值为当前token
axios.interceptors.request.use(function(config){
  // console.log(window.location.href.endsWith('/login'))
  if(!window.location.href.endsWith('/login')){
    config.headers.Authorization = localStorage.getItem('token') 
  }
  return config
},function(error){
  return Promise.reject(error)
})


ReactDOM.render(<App />, document.getElementById('root'));


