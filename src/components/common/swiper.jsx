import React from "react";
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default class extends React.Component {
  render() {
    return (
      <div  className="swiper-container" id={this.props.data.id}>
        <div className="swiper-wrapper">
          {this.props.children}
          {/* <div className="swiper-slide">Slide 1</div> */}
        </div>
      </div>
    );
  }
/*
数据模板
  {
    id:"hot",
    config:{
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
*/
  componentDidMount() {
    setTimeout(()=>{
      new Swiper(`#${this.props.data.id}`,this.props.data.config)
    },800)
  }
}