import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

export default class extends React.Component {
  render() {
    // console.log(this.props)
    if(this.props.Carousel.length!==0){
      return(
        <WingBlank className="ban_con">
          <Carousel 
            className="ban_cont"
            autoplay={true}
            infinite
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            // afterChange={index => console.log('slide to', index)}
          >
            {this.props.Carousel.map((item,index) => (
              <a
                key={index}
                href={item.url}
                style={{ display: 'inline-block', width: '100%', height: "5.2267rem" }}
              >
                <img
                  src={item.image_url}
                  alt=""
                  // title={item.title}
                  style={{ width: '100%', verticalAlign: 'top' , height: "5.2267rem" }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      )
    }else{
      return null
    }
  }
}
