import React from 'react';
import {connect} from 'react-redux';
import {loadTourDataAsync} from '../actionCreate';
import Swiper from '@/components/common/swiper';

class TourRec extends React.Component{
    constructor(){
        super();
        this.state={
            tour_show_list:[]
        }
    }
    render(){
        // console.log(this.state.tour_show_list,"111")
        return (
            this.state.tour_show_list.length?
            <div className="tour_show">
                <div className="tour_tit">
                    <h2>巡回演出</h2>
                    <span>更多</span>
                </div>
                <Swiper data={{
                    id:"tour",
                    config:{
                        effect : 'coverflow',
                        slidesPerView: 1.5,
                        centeredSlides: true,
                        initialSlide :1,
                        coverflow: {
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows : true,
                            // initialSlide :1,
                        }
                    } 
                }}>
                    {
                        this.state.tour_show_list.map((item,index)=>(
                            <div key={index} className="swiper-slide">
                                <a href={item.tour_show_url}>
                                    <img src={item.pic} alt=""/>
                                    <div className="tour_con">
                                        <h3>{item.show_name}</h3>
                                        <p>{item.schedular_num}场巡演</p>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </Swiper>
            </div>:""
        )
    }
    componentDidMount(){
        this.props.loadTourData.bind(this)();
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
        loadTourData(){
            var val={
                city_id:this.props.current_city.get("city_id")
            }
            dispatch(loadTourDataAsync(dispatch,val,(res)=>{
                // console.log(res)
                let data=res.data.data;
                // console.log(data)
                this.setState({
                    tour_show_list:data.tour_show_list
                })
                // console.log(this.state.tour_show_list)
            }))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TourRec)

