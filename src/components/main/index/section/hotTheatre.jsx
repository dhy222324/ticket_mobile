import React from 'react';
import {connect} from 'react-redux';
import {loadHotTheatreDataAsync} from '../actionCreate';
import Swiper from '@/components/common/swiper';

class HotTheatre extends React.Component{
    constructor(){
        super();
        this.state={
            theatre_list:[]
        }
    }
    render(){
        return (
            this.state.theatre_list.length ?
            <div className="hot_thratre">
                <div className="hot_thratre_tit">
                    <h2>热门场馆</h2>
                    <span>更多</span>
                </div>
                <div className="thratre_main">
                    <Swiper data={{
                        id:"hot_thratre",
                        config:{
                            slidesPerView:1.35,
                            spaceBetween: 20
                        }
                    }}>
                        {
                            this.state.theatre_list.map((item,index)=>(
                                <div key={index} className="swiper-slide">
                                    <div className="toShowTheatre">
                                        <div className="theatre_tit">
                                            <img src={item.pic} alt=""/>
                                            <div className="theatre_con">
                                                <h3>{item.name}</h3>
                                                <p><span>{item.count}</span>场在售演出</p>
                                            </div>
                                        </div>
                                        <span className="theatre_icon">...</span>
                                    </div> 
                                    <ul className="show">
                                        {
                                            item.showList.map((val,index)=>(
                                                <li key={index}>
                                                    <div className="show_time">
                                                        <p>{val.show_time}</p>
                                                        <span></span>
                                                    </div>
                                                    <div className="to_detail">
                                                        <img src={val.pic} alt=""/>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
            : ""
        )
    }
    componentDidMount(){
        this.props.loadHotTheatreData.bind(this)();
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
        loadHotTheatreData(){
            dispatch(loadHotTheatreDataAsync(res=>{
                // console.log(res)
                let data=res.data.data;
                this.setState({
                    theatre_list:data.theatre_list
                })
            }))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HotTheatre)

