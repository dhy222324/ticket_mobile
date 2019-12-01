import React from 'react';
import { CityList } from "./styled"
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// import qs from 'qs';
import URL from "url" ;
import Swiper from "@/components/common/swiper";
import $ from "jquery";

import {
    loadShowCategoryAsync,
    loadGetCityAsync,
    loadInitListDataAsync,

} from "./actionCreate"
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 配置参数
            category:(URL.parse(this.props.location.search,true).query).caid,
            category_name: this.props.category_name,
            city_id: (URL.parse(this.props.location.search,true).query).cid,
            show_category_list:[],
            list:[],
            city_list:[],
            city_name:this.props.city_name,
            city:0,
            cityName:"",
            swiperTXT:"",
            id:0
        }
        // console.log(URL.parse(this.props.location.search,true).query)
    }
    render() {      
        return (
            <CityList className="good-list">
                <div className="list_nav">
                     <div className="nav-top">
                        <span onClick={this.goBack.bind(this)}>返回</span>
                        {/* 获取导航名称 */}
                        <span style={{fontSize:"16px"}}>{this.state.category_name}</span>
                        <span>...</span>
                    </div>
                    <div className="nav_bottom">
                        <div className="list_swiper">
                            <Swiper data={{
                                id:"music",
                                config:{
                                slidesPerView: 4,
                                }
                            }}>
                                <div className="swiper-slide" onClick={this.getShow.bind(this,{category_id:0,name:"全部"})} style={{color:this.state.swiperTXT=="全部"?"red":"",fontSize:"12px"}}><p>全部</p></div>
                                {
                                    this.state.show_category_list.map((item,index)=>(
                                        
                                        <div className="swiper-slide"  key={index}
                                            // 点击获取导航来信息
                                        onClick={this.getShow.bind(this,item)} style={{color:this.state.swiperTXT==item.name?"red":"",fontSize:"12px"}} >
                                            <p>{item.name}</p>
                                        </div>
                                    ))
                                }
                            </Swiper>
                        </div>            
                        <p onClick={this.props.setcity.bind(this)} className="setcity"> {this.state.city_name}</p>
                    </div> 
                </div>
        
                    
  
                {/* 商品列表 */}
                <div className="list-cargo">
                    <div style={{height:"2rem"}}></div>
                    {this.state.list.map((item, index) => (
                            // 点击获取当前商品id
                            <dl key={index} onClick ={this.props.toId.bind(this,item.schedular_id)}>
                                <dt>
                                    <img src={item.pic} alt=""/>
                                </dt>
                                <dd>
                                    <span style={{fontSize:"12px"}}>
                                        {item.show_time_top}
                                       { item.show_time_bottom.length!=0?
                                       <i>
                                           |{item.show_time_bottom}
                                       </i>
                                        :""}
                                    </span>
                                    <span style={{fontSize:"10px"}}><b>{item.name}</b></span>
                                    <span style={{fontSize:"12px"}}>{item.city_name}|{item.venue_name}</span>
                                    <span style={{fontSize:"12px"}}>￥<a>{item.min_price}</a></span>
                                </dd>
                        </dl>
                        ))
                        
                        }                  
                    </div>    
                 {/* 城市 */}

                <div className="m-test" onClick={this.props.setcitylist.bind(this)}> 
                 
                            {/* 点击城市*/}
                            
                            <ul className="getCity"  onClick={this.getCity.bind(this)}>
                                <h2>城市</h2>
                                {/* 循环获取城市名称 */}
                                <li style={{background:this.state.cityName==="全国"?'red':''}} ci_id={0}>全国</li>
                                {
                                    this.state.city_list.map((item,index)=>(
                                        <li key={index} ci_id={item.city_id} style={{background:this.state.cityName===item.name?'red':''}}>{item.name}</li>         
                                    ))
                                } 
                                <h4>
                                    <p>
                                        <span onClick={this.reset.bind(this)}>重置</span><span onClick={this.confirm.bind(this)}>确定</span>
                                    </p>          
                                </h4>
                            </ul>      
                </div>
            </CityList>     
        )
    }

   // 钩子函数
    componentDidMount(){
        // 初始化数据
        this.props.loadInitReqData.bind(this)();
        this.props.loadListData.bind(this)();
        this.state.category_name="演出"
    }
    // 确定按钮
    confirm(){
        this.setState({
                city_name:this.state.cityName,
                city_id:this.state.id
            },()=>{
                this.props.loadInitReqData.bind(this)();
                this.props. setcitylist.bind(this)()
            })
    }
    // 重置
    reset(){
        this.setState({cityName:"全国"})
    }
    // 返回按钮
    goBack(){
        this.props.history.goBack();
    }
    // 获取导航的id
    getShow(item,e){    
        // console.dir(e.target)
        if(e.target.nodeName==="DIV"){
            var  swiperTXT =e.target.innerText
        }
        if(e.target.nodeName==="P"){
            var  swiperTXT =e.target.innerText
        }
        this.setState({
            category: item.category_id,
            category_name: item.name,
            swiperTXT
        }, () => {
            // 回调loadInitReqData从新加载数据
            this.props.loadInitReqData.bind(this)();
        })
    }

    //获取城市数据并切换数据
 
    getCity(e){
        // 获取当前页面所有的所有的li 标签
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if(e.target.nodeName==="LI"){       
           var cityName= e.target.innerText;
           this.setState({cityName,id:e.target.getAttribute("ci_id")})
        }
    }
}
// 属性 拿到reducer中state的数据
const mapStateToProps  =state=>{
    // console.log(state.toJS(),"123");
    return{

        // 请求商品信息
        // city_id: state.getIn(["indexReducer", "current_city", "city_id"]),
        // 请求城市名称
        city_name: state.getIn(["indexReducer", "current_city", "city_name"]),

    }
}
// 方法
const mapDispatchToProps = dispatch => {
    return {
        //请求接口
        loadInitReqData() {
            var rel = {
                category: this.state.category,
                city_id: this.state.city_id,
            }
            dispatch(loadInitListDataAsync(rel, (res) => {
                // console.log(res, "商品")
                var data = res.data.data
                this.setState({
                    list: data.list
                })
            }))
        },

        loadListData() {
            //导航     
            dispatch(loadShowCategoryAsync(res => {

                var data = res.data.data
                this.setState({
                    show_category_list: data.show_category_list
                })
            }))
            //城市
            dispatch(loadGetCityAsync(res => {
                //console.log(res,"城市")
                var data = res.data.data
                this.setState({
                    city_list: data.city_list,
                
                })
            }))

        },

        //获取城市
        setcity() {
            $(".setcity").click(function () {
                $(".m-test").animate({
                    width: "100%",
                    height: "100%",
                })

             })       
         },
        setcitylist() {
           
                $(".m-test").animate({
                    width: 0,
                    height: 0,
                })
        },

        toId(id) {
            this.props.history.push({pathname:"/detail/"+ id})
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))
