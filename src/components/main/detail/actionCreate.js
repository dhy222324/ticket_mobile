import request from "@/core/api/http";


// 全局参数获取
const loadDetailDataAsync = (dispatch,id,callBack) =>{
    return ()=>{
        request({
            method:"GET",
            url:"Schedule/Schedule/getScheduleInfo",
            params:{
                schedular_id:id,
                version:"6.0.7",
                referer:"2"
            }
        }).then((res)=>{
          callBack(res);
        })
    }
}


// 价格获取
const loadDetailPriceAsync = (dispatch,id,callBack) =>{
    return ()=>{
        request({
            method:"GET",
            url:"Schedule/Schedule/getScheduleTicket",
            params:{
                schedular_id:id,
                version:"6.0.7",
                referer:"2"
            }
        }).then((res)=>{
          callBack(res);
        })
    }
}

const loadDetailShowIdAsync = (dispatch,showId,venue_id,callBack) =>{
    return ()=>{
        request({
            method:"GET",
            url:"Schedule/Schedule/getTour?show_id=37735",
            params:{
                show_id:showId,
                venue_id:venue_id,
                version:"6.0.7",
                referer:"2"
            }
        }).then((res)=>{
          callBack(res);
        })
    }
}
export {
    loadDetailDataAsync,
    loadDetailPriceAsync,
    loadDetailShowIdAsync
}