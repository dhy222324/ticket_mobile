import React from "react";
import ReactDOM from "react-dom";
import  {Provider} from "react-redux";
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css"


import { HashRouter as Router } from "react-router-dom";
/*
基于苹果6基准适配所有手机
750*1334  物理像素  设计 psd      基准字体  100px/75  => rem  
375 667   逻辑像素  开发          基准字体  100px/(75/2) =>rem
*/
import 'react-flexible';
import "antd-mobile/dist/antd-mobile.css";
import App from "@/App";
import store from "@/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App style={{height:"100%"}}/>
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
