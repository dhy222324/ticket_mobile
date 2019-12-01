import React from "react";
import { Mine} from "./styled"

export default class extends React.Component {
  render() {
    return (
        <Mine>
              <div className="top-top"></div>
              <div className="mine-box">
                <h1><span className="fa fa-cog" style={{fontSize:"20px"}}></span></h1>
                <div className="mine-top">
                    <dl>
                        <dt>
                         <img src={"http://www.33lc.com/uploadfile/2018/0420/20180420042827555.jpg"} /> 
                        </dt>
                        <dd>
                          <span>票小务</span><br/>
                          <span><i>id:</i><a>521314</a></span>
                        </dd>
                    </dl>
                    <p><b>普通会员</b></p>
                    <ul style={{fontSize:"12px"}}>
                        <li><i style={{color:"orange"}}>0</i><span>账户余额</span></li>
                        <li><i style={{color:"orange"}}>2</i><span>收货地址</span></li>
                        <li><i style={{color:"orange"}}>2</i><span>优惠活动</span></li>
                        <li><i style={{color:"orange"}}>2</i><span>我的积分</span></li>
                    </ul>
                </div>

                <div className="mine-banner" >
                    <img src={require("@/images/my-1.png")} alt=""/>
                </div>

                <div className="mine-code">
                    <ul>
                          <li>
                              <font className="fa fa-list-alt"></font><br/>
                              <span>我的订单</span>
                          </li>
                          <li>
                              <font className="fa fa-money"></font><br/>
                              <span>我的票价</span>
                          </li>
                          <li>
                              <font className="fa fa-address-card-o"></font><br/>
                                <span>我的卡包</span>
                          </li>
                          <li>
                              <font className="fa fa-cc-mastercard"></font><br/>
                                <span>我的评价</span>
                          </li>
                    </ul>
                </div>
              </div>
        </Mine>
    
    );
  }
}