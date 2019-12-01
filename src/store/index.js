import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {combineReducers} from "redux-immutable";

// thunk模块的作用让action支持传入一个函数体

import indexReducer from "@/components/main/index/reducer"
// import listReducer from "@/components/main/list/reducer"

// 设置多库 
const store=combineReducers({
    indexReducer,
    // listReducer,
})

export default createStore(store,applyMiddleware(thunk));
