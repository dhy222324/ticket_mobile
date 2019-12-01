import React from 'react';
import {connect} from 'react-redux';
import {loadHotsDataAsync} from '../actionCreate';
import Swiper from '@/components/common/swiper';

class HotsRec extends React.Component{
    constructor(){
        super();
        this.state={
            hots_show_list:[]
        }
    }
    render(){
        return (
            this.state.hots_show_list.length?
            <div className="hots_show">
                <div className="host_tit">
                    <h2>热门演出</h2>
                    <span>更多</span>
                </div>
                <Swiper data={{
                    id:"hots",
                    config:{
                      slidesPerView: 3,
                      spaceBetween: 5
                    }
                }}>
                    {
                        this.state.hots_show_list.map((item,index)=>(
                            <div key={index} className="swiper-slide">
                                <a href={item.schedular_url}>
                                    <img src={item.pic} alt=""/>
                                    <p>{item.show_name}</p>
                                </a>
                            </div>
                        ))
                    }
                </Swiper>
            </div>
            : ""
        )
    }
    componentDidMount(){
        this.props.loadHotsData.bind(this)();
    }
}

const mapStateToProps=state=>{
    // console.log(state.toJS())
    return {
        current_city: state.getIn(["indexReducer", "current_city"])       
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        loadHotsData(){
            var val={
                city_id:this.props.current_city.get("city_id")
            }
            dispatch(loadHotsDataAsync(dispatch,val,(res)=>{
                // console.log(res)
                let data=res.data.data;
                this.setState({
                    hots_show_list:data.hots_show_list
                })
            }))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HotsRec)

