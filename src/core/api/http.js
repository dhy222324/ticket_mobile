import axios from "axios";
// import Store from "storejs"
// import qs from "qs"

import { Toast} from 'antd-mobile';

// https://www.kancloud.cn/yunye/axios/234845

const baseURL = window.location.host.indexOf(".com") !== -1 ? "" : "/apis";




// http://www.baudi.com   /apis/login   404

// 127.0.0.1    /apis/login
// axios({
//   method:"get",
//   url:"/login"
// }).then(()=>{
  // res.token
  // StorageEvent.set("token","xxxxxxasdsgdhfgjgf")
  // /

// })
// axios({
//   method:"get",
//   url:"/index",
//   data:{
    // token:"xxxxxxx"
// }
    // headers:{
    //   token: store.get("token")
    // }
// }).then(()=>{
    // if(res.code=500){
    //   push(/login)
    // }
// })


var instance = axios.create({
  baseURL,
  timeout: 1000*10,
  responseType: 'json', // 默认的
  transformRequest: [
    function(data) {
      // 对 data 进行任意转换处理
      // return qs.stringify(data);  比如转 fromData
      return data;
    }
  ],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [
    function(data) {
      // 对 data 进行任意转换处理

      return data;
    }
  ]
});


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  config.headers.token="asdhukasjdhasjkdhasjkdfhksjdf"
  // 在发送请求之前做些什么

  Toast.loading("加载中...",60,()=>{}, true)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  Toast.hide()
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance
