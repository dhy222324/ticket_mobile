import request from '@/core/api/http';
// import axios from 'axios';

export const GET_CITYLOADE_DATA = "index/get_cityloade_data";
export const SET_CURRENTCITY_DATA = "index/set_currentCity_data";
// 城市
const loadCityDataAsync = dispatch => {
  return () => {
    request({
      method:"GET",
      url:"/city/city/getSortedCityList?version=6.0.7&referer=2"
    }).then((res)=>{
      dispatch({type:GET_CITYLOADE_DATA,val:res})
    })
  }
}
// 当前城市
const setCurrentCityDataAsync = (dispatch,val) => {
  return () => {
    dispatch({type:SET_CURRENTCITY_DATA,val})
  }
}

const loadTopComDataAsync = (dispatch,val,callBack) =>{
  return ()=>{
    request({
      method:"GET",
      url:"/home/index/getClassifyHome",
      params:{
        city_id:val.city_id,
        abbreviation:val.abbreviation,
        version:"6.0.7",
        referer:"2"
      }
    }).then((res)=>{
      callBack(res);
    })
  }
}

// 热门场馆
const loadHotsDataAsync = (dispatch,val,callBack) =>{
  return ()=>{
    request({
      method:"GET",
      url:"/home/index/getHotsRecommendList",
      params:{
        city_id:val.city_id,
        version:"6.0.7",
        referer:"2"
      }
    }).then((res)=>{
      callBack(res)
    })
  }
}

// 展览休闲
const loadTourDataAsync = (dispatch,val,callBack) =>{
  return ()=>{
    request({
      method:"GET",
      url:"/home/index/getTourRecommendList",
      params:{
        city_id:val.city_id,
        version:"6.0.7",
        referer:"2"
      }
    }).then((res)=>{
      callBack(res)
    })
  }
}

const loadVipDataAsync = (dispatch,callBack) =>{
  return ()=>{
    request({
      method:"GET",
      url:"/vip/index/getVipHomeSchedular?version=6.0.7&referer=2",
    }).then((res)=>{
      callBack(res)
    })
  }
}
// 音乐剧
const loadFloorShowDataAsync = (dispatch,rel,callBack) =>{
  return ()=>{
    request({
      method:"GET",
      url:"/home/index/getFloorShow",
      params:{
        city_id:rel.city_id,
        version:"6.0.7",
        referer:"2"
      }
    }).then((res)=>{
      callBack(res)
    })
  }
}
// 热门场馆
const loadHotTheatreDataAsync = (callBack) =>{
  return ()=>{
    request({
      method:"GET",
      url:"/home/index/getHotTheatre?version=6.0.7&referer=2",
    }).then((res)=>{
      callBack(res)
    })
  }
}
// 为你推荐 https://api.juooo.com/Show/Search/getShowList?cityAdd=&page=3&version=6.0.8&referer=1
const getShowListAsync = (dispatch,rel,callBack) =>{
  return ()=>{
    request({
      method:"GET",
      url:"/Show/Search/getShowList",
      params:{
        city_id:rel.city_id,
        page:rel.page,
        version:"6.0.8",
        referer:"1"
      }
    }).then((res)=>{
      callBack(res)
    })
  }
}

// 搜索

const loadSearchDataAsync = (dispatch,value,callBack) =>{
  // console.log("run");
  // console.log(value);
  return ()=>{
    request({
      method:"GET",
      url:"Show/Search/getShowList",
      params:{
        keywords:value,
        page:"1",
        sort_type:"1",
        version:"6.0.7",
        referer:"2"
      }
    }).then((res)=>{
        callBack(res);
      })
  }
}
// 热门城市
const getHOtWordDataAsync= (callBack) =>{
  return ()=>{
    request({
      method:"GET",
      url:"/Show/Search/getHotWord?version=6.0.7&referer=2",
    }).then((res)=>{
      callBack(res)
    })
  }
}

export {
  loadCityDataAsync,
  setCurrentCityDataAsync,
  loadTopComDataAsync,
  loadHotsDataAsync,
  loadTourDataAsync,
  loadVipDataAsync,
  loadFloorShowDataAsync,
  loadHotTheatreDataAsync,
  loadSearchDataAsync,
  getHOtWordDataAsync,
  getShowListAsync
};