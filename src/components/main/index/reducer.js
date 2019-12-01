import {fromJS,Map} from "immutable";
import {GET_CITYLOADE_DATA,SET_CURRENTCITY_DATA} from "./actionCreate"
// 属于store部分
const defaultState=fromJS({
    current_city: {
        city_id: 0,
        abbreviation: "",
        city_name: "全国"
    },
    city_list:[]
})
// ES6赋值初始值
export default (state=defaultState,action)=>{
    switch(action.type){
        case GET_CITYLOADE_DATA:
            // console.log(action.val)
            var obj = action.val.data.data;
            var rel = [];
            for (var n in obj) {
                rel.push(obj[n]);
            }
            return state.set("city_list", fromJS(rel));
        case SET_CURRENTCITY_DATA:
            return state.set("current_city", Map(action.val));
        default:
               return state; 
    }
}