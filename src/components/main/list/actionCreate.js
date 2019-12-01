 // 导入代理
 import request from "@/core/api/http";
 import axios from "axios"
// // 配置钥匙
export const GET_LIST_INDEXDATA = "list/get_index_index_data";

const loadListGoodDataAsync = dispatch => {
    return () => {
      request({
        method:"GET",
        // 商品数据链接
        url:"/Show/Search/getShowList?category=35&city_id=1&page=1&keywords=&version=6.0.7&referer=2"
      }).then((res)=>{   
        //console.log(res)
        dispatch({type:GET_LIST_INDEXDATA,val:res});
      })
    };
  };

// 获取list 导航栏列表
const loadShowCategoryAsync = (callBack)=>{
  return()=>{
   axios({
      method:"GET",
      url:"/m/Search/getShowCategory?version=6.0.7&referer=2"
    }).then((res)=>{
      callBack(res)
    })
  }
};


// 获取城市信息
const loadGetCityAsync=(callBack)=>{
  return()=>{
    axios({
      method:"GET",
      url:"/m/Search/getCity?version=6.0.7&referer=2",
    }).then((res)=>{
       callBack(res)
    })
  }
}

const loadInitListDataAsync=(rel,callBack)=>{
  return()=>{
    request({
      method:"GET",
      url:"/Show/Search/getShowList",
      params:{
        category: rel.category,
        city_id: rel.city_id,
        page: "1",
        keywords: "",
        version: "6.0.7",
        referer: "2"
      }
    }).then((res)=>{
       callBack(res)
    })
  }
}


  export {
    loadShowCategoryAsync,    
    loadGetCityAsync,
    loadInitListDataAsync,
    loadListGoodDataAsync
  }