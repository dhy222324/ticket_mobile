import React from 'react';
import Swiper from '@/components/common/swiper';
// import {connect} from 'react-redux';

class FloorSubShow extends React.Component{
    constructor(){
        super();
        this.state={
            floor_cell1:{},
            floor_cell2:[]
        }
    }
    render(){
        // console.log(this.state.floor_cell1,"22")
        return (
            this.state.floor_cell2.length!=0?(
            <div>
            <div className="floor_subShow">
                <div className="floor_tit">
                    <h2>{this.props.data.title}</h2>
                    <a href={this.props.data.search_url}>
                        <span>更多</span>
                    </a>
                </div>
                <div className="floor_cell1">
                    <a href={this.state.floor_cell1.url}>
                        <img src={this.state.floor_cell1.pic} alt="" />
                        <div className="cell1_con">
                            <p className="cell1_con_top">
                                <span>{this.state.floor_cell1.date}</span>
                                {this.state.floor_cell1.week}
                            </p>
                            <h4 className="cell1_con_tit">{this.state.floor_cell1.schedular_name}</h4>
                            <p className="cell1_con_bottom">
                                <span>{this.state.floor_cell1.city_name}</span> | <span>{this.state.floor_cell1.venue_name}</span>
                            </p>
                        </div>
                    </a>
                </div>
                <Swiper data={{
                    id:this.state.floor_cell1.sche_id,
                    config:{
                        slidesPerView: 3,
                        spaceBetween: 3,
                        initialSlide :1,
                    }
                }}>
                    {
                        this.state.floor_cell2.map((item,index)=>(
                            <div key={index} className="swiper-slide">
                                <a href={item.url}>
                                    <img src={item.pic} alt=""/>
                                    <h3>{item.schedular_name}</h3>
                                    <p><span>￥{Number(item.low_price).toFixed(0)}</span>起</p>
                                </a>
                            </div>
                        ))
                    }
                </Swiper>
            </div>
            </div>):""
        )
    }
    componentDidMount(){
        this.setState({
            floor_cell1:{...this.props.data.list[0]},
            floor_cell2:this.props.data.list.slice(1)
        })
    }
}

export default FloorSubShow;


// 展览休闲