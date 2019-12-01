import React from 'react';
import {connect} from 'react-redux';
import {loadVipDataAsync} from '../actionCreate';

class VipHome extends React.Component{
    constructor(){
        super();
        this.state={
            discountList:[],
            watchList:{}
        }
    }
    render(){
        return (
            <div className="vip_show">
                <a href="" className="vip_tit">
                    <div className="viptit_con">
                        <div className="vipcon_l">
                            <span></span>
                            <span>VIP+会员尊享权益</span>
                        </div>
                        <div className="vipcon_r">
                            <span>99元/年</span>
                        </div>
                    </div>
                </a>
                <div className="vip_subtit">
                    <dl>
                        <dt>
                            <h4>专享折扣</h4>
                            <span></span>
                        </dt>
                        <dd className="vip_a1">
                            {
                                this.state.discountList.map((item,index)=>(
                                    <div key={index} className="vip_cell">
                                        <a href="">
                                            <img src={item.pic} alt=""/>
                                            <p>
                                                <span className="vip_c1">{item.min_discount}</span>
                                                折
                                            </p>
                                        </a>
                                    </div>
                                ))
                            }
                        </dd>
                    </dl>
                    <div className="line_bar"></div>
                    <dl>
                        <dt>
                            <h4>免费演出</h4>
                            <span></span>
                        </dt>
                        <dd>
                            <div className="vip_cell">
                                <a href="">
                                    <img src={this.state.watchList.pic} alt=""/>
                                    <p className="free_watch">
                                        ￥0<span className="vip_c2">{this.state.watchList.price}</span>
                                    </p>
                                </a>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.loadvipData.bind(this)();
    }
}

const mapStateToProps=state=>{
    // console.log(state.toJS())
    return {
        // current_city: state.getIn(["indexReducer", "current_city"])
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        loadvipData(){
            dispatch(loadVipDataAsync(dispatch,(res)=>{
                // console.log(res)
                let data=res.data.data;
                // console.log(data)
                this.setState({
                    discountList:data.discountList,
                    watchList:data.watchList[0]
                })
            }))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VipHome)

